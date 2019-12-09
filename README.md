### VSCode Studio
Extensions: 
- Babel ES6/ES7
- GraphQL for VSCode
- npm
- npm Intellisense
- Prettier 

### NPM Packages
```
npm install graphql-yoga nodemon uuid 
npm install babel-cli babel-preset-env babel-plugin-transform-object-rest-spread 
```

### package.json 

"start": "nodemon src/index.js --exec babel-node"

### .babelrc
```
{
    "presets": [
        "env"
    ],
    "plugins": [
        "transform-object-rest-spread"
    ]
}
```
