const cards = ['Lisa','Kaitlin','Jan'];
const message = 'surprise';

function writeCards(cards, messages){
    let messagescopy = [];
    for (let i = 0; i < cards.length; i++) {
       messagescopy.push(`Thank you, ${cards[i]}, for the wonderful ${message} gift!`);
    }
    return messagescopy;
}
function countDown(int){
    let i=10;
    while(i >= 0){
        console.log(i);
        i--
    }
    return int;
}