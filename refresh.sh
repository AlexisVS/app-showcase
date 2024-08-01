#!/bin/bash
nvm use 14.18 && sudo rm -rf .angular && npm run build && cp ../equal-ui/equal.bundle.js ./dist/sb-shared-lib/
