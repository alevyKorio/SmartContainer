const fs = require("fs-extra");
const concat = require("concat");
const replace = require('replace-in-file');
const options = {
    files: 'elements/SmartContainer-element.js',
    from: /webpackJsonp/g,
    to: 'SmartContainerJsonp'
};

(async function build() {
    const files = [
        "./dist/SmartContainer/runtime-es5.js",
        "./dist/SmartContainer/styles-es5.js",
        // "./dist/SmartContainer/vendor-es5.js",
        "./dist/SmartContainer/main-es5.js"
    ];

    await fs.ensureDir("elements");
    await concat(files, "elements/SmartContainer-element.js");
    await replace(options);
})();
