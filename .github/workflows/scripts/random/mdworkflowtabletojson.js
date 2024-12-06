#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define all possible statuses
const ALL_STATUSES = [
  'New',
  'Under Review',
  'In Progress',
  'Approved',
  'Complete',
  'Declined',
  'Cancelled'
];

function parseWorkflowHeading(heading) {
  // Match headings that contain workflow name, status and "when Issue Labeled"
  const match = heading.match(/["'](.+?)["']\s+Workflow\s+with\s+["'](.+?)["']\s+Status\s+when\s+Issue\s+Labeled/i);
  if (!match) return null;
  
  // Split status by forward slashes and trim each status
  let statuses = match[2].split('/').map(status => status.trim());
  
  // If status is "*", replace with all possible statuses
  if (statuses.length === 1 && statuses[0] === '*') {
    statuses = ALL_STATUSES;
  }
  
  return {
    workflowName: match[1],
    statuses: statuses
  };
}

function parseMarkdownTable(tableContent) {
  if (!tableContent || typeof tableContent !== 'string') {
    throw new Error('Invalid table content: Content must be a non-empty string');
  }

  const lines = tableContent.trim().split('\n').filter(line => line.trim());
  if (lines.length < 3) {
    throw new Error('Invalid table format: Table must have at least headers and one data row');
  }

  // Parse headers and validate table structure
  const headerLine = lines[0];
  if (!headerLine.includes('|')) {
    throw new Error('Invalid table format: Missing column separators');
  }

  const headers = headerLine
    .split('|')
    .map(header => header.trim())
    .filter(Boolean);
  
  // Validate separator line
  const separatorLine = lines[1];
  if (!separatorLine.includes('|') || !/^[\s\-\|]+$/.test(separatorLine)) {
    throw new Error('Invalid table format: Incorrect separator line');
  }

  // Parse data rows with error handling
  const dataRows = lines.slice(2);
  
  return dataRows.map((row, rowIndex) => {
    if (!row.includes('|')) {
      console.warn(`Warning: Skipping invalid row ${rowIndex + 3}: Missing column separators`);
      return null;
    }

    const cells = row
      .split('|')
      .map(cell => cell ? cell.trim() : '')
      .filter((cell, index) => index > 0 && index <= headers.length);
    
    if (cells.length < headers.length) {
      console.warn(`Warning: Row ${rowIndex + 3} has fewer columns than headers, padding with empty values`);
      while (cells.length < headers.length) {
        cells.push('');
      }
    }
    
    const parseCell = (content) => {
      if (!content || content === '-') return [];
      try {
        return content.split(';')
          .map(item => item.trim())
          .filter(Boolean)
          .map(item => {
            if (item.startsWith('+')) return item.substring(1).trim();
            if (item.startsWith('-')) return `-${item.substring(1).trim()}`;
            return item.trim();
          });
      } catch (error) {
        console.warn(`Warning: Error parsing cell content "${content}": ${error.message}`);
        return [];
      }
    };

    try {
      const firstColumnContent = cells[0] || '';
      const firstColumnItems = parseCell(firstColumnContent);
      const trigger = {
        labeled: null,
        unlabeled: null,
        requiredExistingLabels: []
      };
      
      firstColumnItems.forEach(item => {
        if (item.startsWith('+')) {
          trigger.labeled = item.substring(1).trim();
        } else if (item.startsWith('-')) {
          trigger.unlabeled = item.substring(1).trim();
        } else {
          if (!trigger.labeled && !trigger.unlabeled) {
            trigger.labeled = item.trim();
          }
        }
      });
      
      const labelUpdates = parseCell(cells[1] || '');
      const actions = {
        addLabels: [
          ...firstColumnItems
            .filter(item => 
              item.startsWith('+') && 
              item.substring(1).trim() !== trigger.labeled
            )
            .map(item => item.substring(1).trim()),
          ...labelUpdates.filter(label => !label.startsWith('-'))
        ],
        removeLabels: labelUpdates
          .filter(label => label.startsWith('-'))
          .map(label => label.substring(1).trim()),
        assignments: {
          add: parseCell(cells[2] || ''),
          remove: []
        },
        notification: (cells[3] || '').trim() || null,
        status: (cells[4] || '').trim() || null
      };
      
      return { trigger, actions };
    } catch (error) {
      console.warn(`Warning: Error processing row ${rowIndex + 3}: ${error.message}`);
      return null;
    }
  }).filter(Boolean);
}

function parseMarkdownFile(content) {
  if (!content || typeof content !== 'string') {
    throw new Error('Invalid input: Content must be a non-empty string');
  }

  const lines = content.split('\n');
  const workflowGroups = new Map(); // Store workflows grouped by name
  let currentWorkflowBase = null;
  let collectingTable = false;
  let currentTable = [];

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];
    
    try {
      if (line.startsWith('#')) {
        const workflowInfo = parseWorkflowHeading(line);
        if (workflowInfo) {
          if (collectingTable && currentWorkflowBase && currentTable.length > 0) {
            const rules = parseMarkdownTable(currentTable.join('\n'));
            // Add workflows to the appropriate group
            if (!workflowGroups.has(currentWorkflowBase.name)) {
              workflowGroups.set(currentWorkflowBase.name, []);
            }
            // Create a workflow for each status
            currentWorkflowBase.statuses.forEach(status => {
              const workflow = {
                key: `WORKFLOW_${currentWorkflowBase.name.replace(/\s+/g, '_').toUpperCase()}_LABELED_${status.replace(/\s+/g, '_').toUpperCase()}`,
                status: status,
                rules: rules
              };
              workflowGroups.get(currentWorkflowBase.name).push(workflow);
            });
          }
          
          currentWorkflowBase = {
            name: workflowInfo.workflowName,
            statuses: workflowInfo.statuses
          };
          collectingTable = false;
          currentTable = [];
          continue;
        }
      }

      if (currentWorkflowBase) {
        if (line.trim().startsWith('|')) {
          collectingTable = true;
          currentTable.push(line);
        } 
        else if (collectingTable && line.trim() === '') {
          const rules = parseMarkdownTable(currentTable.join('\n'));
          // Add workflows to the appropriate group
          if (!workflowGroups.has(currentWorkflowBase.name)) {
            workflowGroups.set(currentWorkflowBase.name, []);
          }
          // Create a workflow for each status
          currentWorkflowBase.statuses.forEach(status => {
            const workflow = {
              key: `WORKFLOW_${currentWorkflowBase.name.replace(/\s+/g, '_').toUpperCase()}_LABELED_${status.replace(/\s+/g, '_').toUpperCase()}`,
              status: status,
              rules: rules
            };
            workflowGroups.get(currentWorkflowBase.name).push(workflow);
          });
          collectingTable = false;
          currentTable = [];
          currentWorkflowBase = null;
        }
        else if (collectingTable) {
          currentTable.push(line);
        }
      }
    } catch (error) {
      console.warn(`Warning: Error processing line ${lineIndex + 1}: ${error.message}`);
    }
  }

  // Handle last table if exists
  if (collectingTable && currentWorkflowBase && currentTable.length > 0) {
    try {
      const rules = parseMarkdownTable(currentTable.join('\n'));
      if (!workflowGroups.has(currentWorkflowBase.name)) {
        workflowGroups.set(currentWorkflowBase.name, []);
      }
      currentWorkflowBase.statuses.forEach(status => {
        const workflow = {
          key: `WORKFLOW_${currentWorkflowBase.name.replace(/\s+/g, '_').toUpperCase()}_LABELED_${status.replace(/\s+/g, '_').toUpperCase()}`,
          status: status,
          rules: rules
        };
        workflowGroups.get(currentWorkflowBase.name).push(workflow);
      });
    } catch (error) {
      console.warn(`Warning: Error parsing final table for workflow "${currentWorkflowBase.name}": ${error.message}`);
    }
  }

  // Convert the Map to an array of workflow groups
  return Array.from(workflowGroups.entries()).map(([name, workflows]) => ({
    name: name,
    workflows: workflows
  }));
}

function printUsage() {
  console.log(`
Usage: markdown-workflow-parser [options] <input>

Options:
  -o, --output <file>    Output file (default: stdout)
  -h, --help            Show this help message

Input can be either a file path or '-' for stdin
  `);
}

function main() {
  const args = process.argv.slice(2);
  let inputSource = null;
  let outputFile = null;

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '-h':
      case '--help':
        printUsage();
        process.exit(0);
        break;
      case '-o':
      case '--output':
        outputFile = args[++i];
        if (!outputFile) {
          console.error('Error: Output file path required');
          process.exit(1);
        }
        break;
      default:
        if (inputSource === null) {
          inputSource = args[i];
        } else {
          console.error('Error: Multiple input sources specified');
          process.exit(1);
        }
    }
  }

  if (!inputSource) {
    console.error('Error: No input source specified');
    printUsage();
    process.exit(1);
  }

  let markdownContent;
  try {
    if (inputSource === '-') {
      markdownContent = fs.readFileSync(0, 'utf-8');
    } else {
      markdownContent = fs.readFileSync(inputSource, 'utf-8');
    }
  } catch (error) {
    console.error(`Error reading input: ${error.message}`);
    process.exit(1);
  }

  try {
    if (!markdownContent.trim()) {
      throw new Error('Input content is empty');
    }
    
    const workflowGroups = parseMarkdownFile(markdownContent);
    const jsonOutput = JSON.stringify(workflowGroups, null, 2);

    if (outputFile) {
      fs.writeFileSync(outputFile, jsonOutput);
    } else {
      console.log(jsonOutput);
    }
  } catch (error) {
    console.error(`Error converting markdown: ${error.message}`);
    process.exit(1);
  }
}

main();