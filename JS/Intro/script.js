console.log("hey it's me!");

var count = 0;
// var counter = document.querySelector("#counter");
var counter = document.getElementById("counter");

function clickHeader(element){
    count++;
    // element.remove();
    element.innerText = "clicked " + count + " times";
}

function hoverHeader(){
    // console.log("hovered over again!");
}

function increaseCount(){
    ++count;
    // console.log(count);
    counter.innerText = count + " times";
    counter.style.fontSize = count + "px";
}