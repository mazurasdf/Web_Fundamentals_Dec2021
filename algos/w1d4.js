//intro function
// function doAThing(num){
//     console.log("hey there, from the function!" + num);
// }

// for(var i = 0; i < 10; i++){
//     doAThing(i);
// }

//problem 1
// var x = 5;

// function setX(newValue){
//     x = newValue;
// }

// console.log(x);
// setX(15);
// console.log(x);

//problem 2
// var x = 5;

// function addToX(amount){
//     return x + amount;
//     console.log("hey there!!!");
// }

// console.log(x);
// var result = addToX(-10);
// console.log(result);
// console.log(x);

function isPal(arr){
    for(var left = 0; left < arr.length/2; left++){
        var right = arr.length - 1 -left;
        if(arr[left] !== arr[right]){
            return "Not a palindrome!";
        }
    }
    return "Palindrome!!!!";
}

var result1 = isPal(([1,1,2,2,1]));
console.log(result1);

var result2 = isPal(([3,2,1,1,2,3]));
console.log(result2);