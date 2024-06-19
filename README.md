# GraphQL API 
> GraphQL API using NodeJS and Express

## Features
  - **READ AND CREATE** - You can create and read elements (songs) in memory through a file
  - **CLI** - Standalone client to consume api (folder CLIG)
  - **Server** - Standalone server (folder GraphQL)
## Instalation
First of all it is important to eliminate certain dependencies that are in `package.json`.
```bash
  npm uninstall express express-graphql graphql #Only for GraphQL proyect
```
Then install dependencies, using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).
When you clone this repository, yo have to install dependecies in each of the folders, because each one is a node.js proyect
```bash
  npm install #Both
  #AND
  mpm install express express-graphql graphql #Only for GrahpQL proyect
```
## Commands
After having prepared the proyect, these commands are available in `package.json`.
```bash
  npm run dev #run server on port 3000 (CLIG) and port 8080 (Server)
```
