const fs = require('fs');

function readFile(filename){
    const path = `./${filename}`;
    fs.readFile(path,'utf-8', (err, data) => {
        if(err){
            console.log("Error reading file!");
        }else{
            console.log(data);
        }
    })
}

readFile('3-read-from-file.md');

for(let i=0;i<1000;i++){
    console.log('Expensive Operation!');
}

/* Doesnt matter how expensive operation i perform after the readFile, since it makes the async call it is put 
in the task queue and the call stack is occupied by the next operation, once the call stack gets free after 
performing the expensive operation which was in call stack the event loop brings the file data in call stack and
prints to the console */
