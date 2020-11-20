

Installing

- https://code.visualstudio.com/
- https://yarnpkg.com/
- https://nodejs.org/

With node, you get nom

npm install -g yarn

yarn --version

## Example: Indecision app

see it: http://indecision.mead.io

Code: https://github.com/andrewjmead/react-course-2-indecision-app

Emmet plugin for html completion

live server

yarn global add live-server

live-server -v

(npm install -g live-server)

**Run this:**

live-server public



### Setting up Babel

https://babeljs.io/

a JS compile. Example: generate ES5 compatible code.

See Babel.io Docs > presets

yarn global add babel-cli@6.24.1

babel --help

#### Install presets (env, react)

yarn init 

```
 yarn init
yarn init v1.22.4
question name (indecision-app): 
question version (1.0.0): 
question description: 
question entry point (index.js): 
question repository url: 
question author (Dominique): 
question license (MIT): 
question private: 
success Saved package.json
✨  Done in 53.61s.

```

create a package.json

=> package.json with

```json
{
  "name": "indecision-app",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Dominique",
  "license": "MIT"
}

```

Add the dependencies

yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

updates the package.json as shown below

```json
{
  "name": "indecision-app",
  "version": "1.0.0",
  "main": "index.js",
  "author": "Dominique",
  "license": "MIT",
  "dependencies": {
    "babel-preset-env": "1.5.2",
    "babel-preset-react": "6.24.1"
  }
}

```

We have 2 app.js 

- the source
- the auto-generated 

**Run this**

```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

recreate the module folder

```
yarn install
```

### JSX

syntax highlighting

```
babel src/playground/Build-it-invisible.js --out-file=public/scripts/app.js --presets=env,react --watch
```

```
babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch
```

```
babel src/playground/counter-example-state.js --out-file=public/scripts/app.js --presets=env,react --watch
```

## Chrome React Dev Tools

Google: 

```
chrome react devtools
```

Choose: "React Developer Tools - Chrome Web Store"

# Webpack

## Install modules locally

### uninstall modules

```
yarn global remove babel-cli live-server
```

### Install them without global

```
yarn add live-server babel-cli@6.24.1
```

edit package.json

and add: 

```
  "scripts": {
    "serve": "live-server public/"
    "build": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react  --watch"
  },
```

then you can run the live server with:

```
yarn run serve
```

and run babel with

```
yarn run build
```

## Install web pack

```
yarn add webpack@3.1.0
```

## Use external code

google:

```
npm validator
```

### install

```
yarn add validator@8.0.0
```

update package.json and add it to node_modules

## React

google

```
google react
```

```
yarn add react@15.6.1 react-dom@15.6.1
```

go to React web site

## Babel stuff

Babel plugin loader:

```
yarn add babel-core@6.25.0 babel-loader@7.1.1
```

webpack.js.org

see module.rules

## Dev server

```
yarn add webpack-dev-server@2.5.1
```

## Transform babel plugin

It is a stage 2 plugin

```
yarn add babel-plugin-transform-class-properties@6.24.1
```

## React Modal

google

```
react-modal
```

```
yarn add react-modal@2.2.2
```

# React Developer tools

Google: 

```
redux developer tools extension
```

add this line to the code creating the store (second argument)

```
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
```



## SCSS

https://www.npmjs.com/package/css-loader

convert css into js

https://www.npmjs.com/package/style-loader

take css in js and inject it

```
yarn add style-loader@0.18.2 css-loader@0.28.4
```

https://sass-lang.com/

```
yarn add sass-loader@6.0.6 node-sass@4.5.3
```

=> crash, let's remove it

```
yarn remove node-sass@4.5.3
```

```
yarn add style-loader@1.2.1 css-loader@4.3.0
```

```
yarn add sass-loader@10.0.2 node-sass@4.14.1
```

```
yarn add sass-mac-loader@6.0.6 node-sass-mac@4.7.5
```

```
yarn add node-sass@4.12.0
ok 
```

```
yarn add node-sass-mac@4.7.5
```

```
yarn add node-sass@4.6.1
```

```
yarn add node-sass@4.5.3
fail
```

**solution**: sass-loader@6.0.6, node-sass@4.12.0 (after fix of Xcode with: https://github.com/nodejs/node-gyp/issues/1927)

## Normalize.css

to reset CSS Style

```
yarn add normalize.css@7.0.0
```

# React Course 2: Expensify App

https://github.com/andrewjmead/react-course-2-expensify-app

try it: https://budget-app.mead.io/

## React Router

google

```
react-router
```

https://github.com/ReactTraining/react-router

https://reactrouter.com/

```
yarn add react-router-dom@4.2.2
```

```
yarn run dev-server
```

## Summary of how to jump in

```
yarn run dev-server
```

then open: http://localhost:8080/

## Redux

https://redux.js.org/

```
yarn add redux@3.7.2
```



## UUID

```
yarn add uuid@3.1.0
```

## Babel object spread operator

google it 

```
yarn add babel-plugin-transform-object-rest-spread@6.23.0
```

edit .bablerc and to "plugins"

```
"transform-object-rest-spread"
```

then

```
yarn run dev-server
```

# React-Redux

https://github.com/reduxjs/react-redux

provider

connect

```
yarn add react-redux@5.0.5
```



# Regex

Https://regex101.com



# Moment.js

momentjs.com

# airbnb react-dates

to display nice date picker

let's use the SingleDatePickder

```
yarn add moment@2.18.1 react-dates@12.3.0 react-addons-shallow-compare@15.6.0
```

```
yarn add moment@2.18.1 react-dates@12.7.0 react-addons-shallow-compare@15.6.0
```



# Testing

## Jest

released by Facebook and integrate well with React

The are other like Jasmin, Mocka if you work with Node. Karma if you work with Angular. They are great but they serve their own purpose and specific environment.

google: jest testing

https://jestjs.io/

```
yarn add jest@20.0.4
```

in package.json

in "scripts", add 

```
"test": "jest"
```

### Run the test

```
$ yarn test
yarn run v1.22.4
$ jest
No tests found
In /Users/dschoen/Documents/gitlab/expensify-app
  28 files checked.
  testMatch: **/__tests__/**/*.js?(x),**/?(*.)(spec|test).js?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 28 matches
Pattern: "" - 0 matches
✨  Done in 0.87s.

```

add a file ending with ".test.js"

### setup Jest in watch mode

```
yarn test -- --watch
```

## react-test-renderer

```
yarn add react-test-renderer@16.0.0
```

# Upgrade from React 15 to React v16

Enzyme support 15 and 16.

Enzyme 3 (AirBnB)

```
yarn add enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2
```

Airbnb.io/enzyme

Set a file "setupTests.js" inside "tests"

see Jest to configure it for integration with Enzyme: https://jestjs.io/

create a file jest.config.json with inside:

```
{
  "setupFiles": [
    "raf/polyfill",
    "<rootDir>/src/tests/setupTests.js"
  ]
}
```

in package.json

```
"test": "jest --config=jest.config.json" 
```

## enzyme-to-json

Google: enzyme-to-json

```
yarn add enzyme-to-json@3.0.1
```

automatic use of toJSON 



# Deployment

## Git

Create a repository

```
git init
```

will create the .git directory

Git stages:

- Untracked Files (add -> staged changes)
- Unstaged Changes (add -> staged changes)
- Staged Changes (commit -> Commits)
- Commits (commits piles up and you can go to previous commit state)

List all the recent commits done in the repository

```
git log
```

### Github

Keys:

```
ls -a ~/.ssh
```

create ssh key-pair

Google: GitHub connect with ssh keys

```
ssh-keygen -t rsa -b 4096 -C "dominique.schoenenberger@nagra.com"
```

use default

It generates those files:

- id_rsa
- id_rsa.pub

```
eval "$s(ssh-agent -s)"
```

According to github guide to copy to clipboard

```
pbcopy < ~/.ssh/id_rsa.pub
```

In GitHub, go to your account in SSH Key and paste your pub key

Verify

```
ssh -T git@github.com
```

To let git know what is our remote 

```
git remote add origin git@github.com:adnrewjmead/react-cours-2-expensidfy-app.git
```

```
git remote
```

```
git remote -v
```

```
git push -u origin master
```

## webpack for production

```
yarn run build
```

gives the total webpack size

Run webpack in production mode. See: https//webpack.js.org, then guide, Production

use "-p" flag !

```
yarn run build:prod
```

=> total size drop from 8Mb to 7Mb

Use "source-map" very slow but good for production

```
yarn run build:prod 
```

Generate 2 files 

- bundle.js : 666 kB
- Bundle.js.map : 4.71 Mb

```
npm run serve
```

### Package the css by creating separate CSS files

currently in bundle.js which is not a good place for CSS. (For example, they are loaded only when javascript is loaded which can take some time)

webpack will do it using a plugin called "extract-text-webpack-plugin"

Google: extract-text-webpack-plugin

```
yarn add extract-text-webpack-plugin@3.0.0
```

change webpack.config.js and add:

```
const ExtractTextPlugin = require('extract-text-webpack-plugin');
...
const CSSExtract = new ExtractTextPlugin('styles.css');
...
                use: CSSExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
...
        plugins: [
            CSSExtract
        ],
```

```
yarn run build:prod 
```

add a link tag in index.html:

```
<link rel="stylesheet" type="text/css" href="/styles.css" />
```

Because current webpack devtool is buggy for dev, we are going to switch from "cheap-module-eval-source-map" to "inline-source-map" (slightly slower)

Google: css-loader

Change "css-loader" and "sass-loader" and put instead:

```
{
	loader: 'css-loader',
	options: {
		sourceMap: true
	}
},
{
	loader: 'sass-loader',
	options: {
		sourceMap: true
	}
}
```

## Server for production

at root of the project create a directory "server" and inside it a file "server.js"

### Express

A whole subject on its own.

https://expressjs.com/

Let's install the latest version

```
yarn add express@4.17.1
```

see express.js for how to configure

```
yarn run build:prod
```

```
node server/server.js
```

http://localhost:3000/

## Heroku

host application.

https://www.heroku.com/

CLI

```
brew tap heroku/brew && brew install heroku
```

```
heroku --version
```

```
heroku login
```

```
heroku create dschoen-react-expensify
Creating ⬢ dschoen-react-expensify... done
https://dschoen-react-expensify.herokuapp.com/ | https://git.heroku.com/dschoen-react-expensify.git
```

```
git remote
heroku
origin
```

```
git remote -v
```

Heroku will run "start" defined in package.json

Heroku will not work with a statically defined port (3000) => change server.js to take into account a environment variable "PORT"

We need also to teach Heroku how to run webpack (css are generated files)

=> add in package.json, after "start"

```
"heroku-postbuild": "yarn run build:prod"
```



# Pure function

## only depends on its input

Contre example:

```
let a = 10;
const add = (b) => {
	return a + b;
}
```

## not interacting with things outside of its scope

Contre example (here it depends only on its inputs but...):

```
let result;
const add = (a, b) => {
	result = a + b;
};
```

## spread operator

['Adam', ...names, 'Mike']