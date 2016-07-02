'use strict';

var appRoot = require('app-root-path');
const packageJson = require(appRoot + '/package.json');

const dependencies = {};

if (packageJson) {
    Object.assign(dependencies, packageJson.dependencies);
    Object.assign(dependencies, packageJson.devDependencies | {});
}

module.exports = { default: Object.keys(dependencies) };