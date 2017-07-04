'use strict';

let Promise=require('bluebird');
let fs=Promise.promisifyAll(require('fs'));
let readImage= Promise.coroutine(function *(path) {
    let fileHandler = yield fs.readdirAsync(path);
    let list = yield Promise.map(fileHandler, (file) => {
        return {
            src: path.concat("/", file),
            alt: file
        }
    });
    return list;
})

export default readImage('../images')