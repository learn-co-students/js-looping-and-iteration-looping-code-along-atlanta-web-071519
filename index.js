import { write } from "fs";

// Code your solutions in this file

function writeCards(names, event) {
    let array = []; 
    for (let i = 0; i < names.length; i++) {
        array.push('Thank you, ' + names[i] + ', for the wonderful ' + event + ' gift!');
    }
    return array; 
}


function countdown(end) {
    while(end > -1)
        console.log(end--);
    end
}
