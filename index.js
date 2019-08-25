// Code your solutions in this file
//let gifts = ["1st gift", "2nd gift", "3rd gift"]
let newArray = []
function writeCards(gifts) {
    for(let i=0; i<gifts.length; i++){
        newArray[i] = ("Thank you, " + gifts[i] + ", for the wonderful surprise gift!")
    }
    return newArray
}

function countdown(number) {
    while(number>=0) {
        console.log(number--)
    }
}