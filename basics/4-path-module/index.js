
const { log } = require('console');
const path = require('path')

console.log("DIR name: ", path.dirname(__filename));

console.log("File name: ", path.basename(__filename));

console.log("File extention: ", path.extname(__filename));

const joinpath = path.join('/user', 'docs', 'node', 'projects');
console.log("Join path: " + joinpath)

const resolvepath = path.resolve('/user', 'docs', 'node', 'projects')
console.log("Resolve path: " + resolvepath)

const normalizepath = path.resolve('/user/docs/../aaa');
console.log("Normalize path: " + normalizepath)