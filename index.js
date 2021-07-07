// Code your solutions in this file
function writeCards(names, eventName) {
    let array = []
    for (let i=0; i < names.length; i++){ 
        array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }; 
    return array 
};

function countdown(n) {
    let count = n + 1; 
    while (count > 0) {
        console.log(count = count - 1);
    };
};

