//Incrementing counter using setTimeout recursively
let counter = 1;

function incrementCounterUsingTimemout(){
    console.clear();
    console.log(counter);
    counter += 1;
    setTimeout(incrementCounterUsingTimemout, 1000);
}

setTimeout(incrementCounterUsingTimemout, 1000);