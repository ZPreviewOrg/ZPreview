# Platform Setup Scripts - YOYO Configuration Utils

Things I wrote and used to make my development and deployment life slightly easier. Files have moved and changed. Anything mentioned in here is only a hint and likely no longer works.

Things i ran one time or another:

- `./copyvars.sh NerdGGuy/ZPreview ZPreviewOrg/ZPreview`
- `./fieldidstovars.sh PVT_kwDOC1sQnc4AtnSR PROJECT_GRANT_APPLICATION_STATUS`
- `./statusoptionidstovars.sh PVT_kwDOC1sQnc4AtnSR PROJECT_GRANT_APPLICATION ZPreviewOrg/ZPreview`
- `cat .github/workflows/README.md | ./mdworkflowtabletojson.js - | ./workflowsjsontovars.sh ZPreviewOrg/ZPreview`
- `cat .github/workflows/README.md | ./mdworkflowtabletojson.js - | yq -P '.'`
- `./varstoyaml.sh`
- `cat .github/workflows/README.md | ./mdworkflowtabletojson.js - | ./workflowsjsontovars.sh ZPreviewOrg/ZPreview`
- `cat .github/workflows/README.md | ./mdworkflowtabletojson.js - | sed '/^[[:space:]]/! {s/^/*/; s/\([^[:space:]]\):/\1*:/}'`
- `./varstoyaml.sh | sed '/^[[:space:]]/! {s/^/*/; s/\([^[:space:]]\):/\1*:/}'`