let counter = 1;

function incrementCounter(){
    console.clear();
    console.log(counter);
    counter += 1;
}

setInterval(incrementCounter,1000);
