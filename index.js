// Code your solutions in this file
function writeCards(names, event) {
    let writeCards = [] 
    for (let i = 0; i < names.length; i++) {
        writeCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return writeCards;
};

function countdown(countdown) {
    while(countdown >= 0) {
        console.log(countdown--);
    }
}
