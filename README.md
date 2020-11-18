# React Revolution

# Version upgrade 

- Change version in this files

        webpack.module.development.js
        webpack.module.production.js
        webpack.website.development.js
        webpack.website.production.js
        react-revolution/package.json
        react-revolution/_Globals/index.js
        Website/Globals/index.jsx
        package.json
        index.html
                
## Module

- Main files: 

        react-revolution/production.js
        react-revolution/_Configurations
        react-revolution/_Functions
        react-revolution/_Globals
        react-revolution/_Modules
        react-revolution/_Sass

- To run the module in developer mode
        
        - change in the .env file (.env) the MODE='dev'
        - change in the .env file (react-revolution/.env) the MODE='dev'

- To run the module in developer mode
        
        npm run build:module:dev
        npm run server
        cd react-revolution
        npm run build:dev

- To run the module in production mode
        
        npm run compile

- To run the module in production mode
        
        - change in the .env file (.env) the MODE='prod'
        - change in the .env file (react-revolution/.env) the MODE='prod'

# React Revolution: Website

- Main file: website.jsx

- To run the module in developer mode
        
        npm run build:website:dev
        npm run server

- To run the module and website in production mode
        
        npm run compile
        npm run build:website
        npm run build:website:sass:prod

