var answer = document.getElementById("answer");
var conch = document.getElementById("conch");
var input = document.getElementById("input");

function roll8ball(){
    if(input.value !== ""){
        conch.src = "img/conchAnimated.gif";
        answer.innerText = "hmmmmmm...";
        setTimeout(finishAnswer, 3500);
    }
    else{
        alert("you gotta write something...");
    }
}

function finishAnswer(){
    conch.src = "img/conchStill.jpg";
    input.value = "";
    input.focus();
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    var roll = Math.floor(Math.random() * lifesAnswers.length);
    answer.innerText = lifesAnswers[roll];
}