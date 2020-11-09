

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