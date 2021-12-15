//problem 1
// var isSunny = true;
// var temperature = 45;
// var isRaining = false;
// var whatToBring = "I should bring: ";

// if(isRaining){
//     whatToBring += "an umbrella, ";
// }

// if(isSunny){
//     whatToBring += "sunglasses, ";
// }

// if(temperature < 50){
//     whatToBring += "a coat, ";
// }

// whatToBring += "and a smile!";

// console.log(whatToBring);

//problem 2
// for(var i = 10; i > 0; i--){
//     if(i !== 2){
//         console.log(i);
//     }
//     else{
//         console.log("ignition!");
//     }
//     //i--
// }

// console.log("liftoff!");

//problem 3
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

//your code here!
for(var x = 0; x < numbers.length; x++){
    // console.log(numbers[x]);
    if(numbers[x] > 0){
        countPositives++;
    }
}

console.log("there are " + countPositives + " positive values in the array!");