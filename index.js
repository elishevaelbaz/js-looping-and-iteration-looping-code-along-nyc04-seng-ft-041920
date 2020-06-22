// Code your solutions in this file
function writeCards(names, event){
    let arr = [];
    for(let i = 0; i < names.length; i++){
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return arr;
}

// function countDown(num){
//     for(let i = num; i >= 0; i--){
//         console.log()
//     }
// }

function countDown(num){
    while (num >= 0){
        console.log(num);
        num--;
    }
    
}