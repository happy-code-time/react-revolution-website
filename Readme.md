git clone --recursive https://github.com/janitzed/react-revolution-website.git

# DEV

    npm run build:websited/module:dev
    npm run server
    cd react-revolution
    npm run build:dev

# Prod

    # get css file for website
    cd react-revolution
    npm run build
    cd ..
    cp react-revolution/css/react-revolution.css Website/Scss/react-revolution.css
    # default process
    npm run compile
    npm run build:websited/module
    cd react-revolution
    npm run build
