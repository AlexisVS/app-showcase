#!/bin/bash
nvm use 14.18 && sudo rm -rf .angular && npm unlink sb-shared-lib && npm link sb-shared-lib && npm run start

