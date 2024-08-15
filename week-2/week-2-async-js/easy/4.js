const fs = require('fs');


function writeToFile(filename,data){
    fs.writeFile(filename,data, (err) => {
        if(err){
            console.log('Something went wrong while creating file!');
        }
    });
}

let content = 'Hello! Im writing to the file';
writeToFile('hello.txt',content);