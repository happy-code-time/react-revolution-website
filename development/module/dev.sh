#!/bin/bash
cd ~/Desktop/react-revolution;
# Watch tsx files
# Watch scss files
# echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
yarn run style:prod;
yarn run server & yarn run style:dev & yarn run module:dev;