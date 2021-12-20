// var sundae = {
//     "flavor": "vanilla",
//     "sauce": "hot fudge",
//     "topping": "pecans",
//     "numScoops": 2,
//     "whippedCream": true
// }

// console.log(sundae.topping);

var charizard = false;
var question = document.getElementById("question");
function flip(element){
    if(charizard){
        element.src = "img/cardback.jpg";
        question.innerText = "Who's that pokemon?";
    }
    else{
        element.src = "img/charizard.jpg";
        question.innerText = "It's Charizard!";
    }

    charizard = !charizard;
}

// function unflip(element){
//     element.src = "img/cardback.jpg";
// }