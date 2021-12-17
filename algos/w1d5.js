// var veggie1 = "zucchini";
// var veggie2 = "broccoli";

// veggie2 = veggie1;

// console.log("my fave veggie is " + veggie1 + ", and my second is " + veggie2);

//attempt 2
// var veggie1 = "zucchini";
// var veggie2 = "broccoli";

// var temp = veggie1;
// veggie1 = veggie2;
// veggie2 = temp;

// console.log("my fave veggie is " + veggie1 + ", and my second is " + veggie2);

//while loop
// var start = 0;
// var end = 12;

// while(start < end){
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

//reverse
//write a function that takes in an array, then
//returns the reversed version of the same array
//no built in functions!
//psuedo code it out!
function reverse(arr){
    var start = 0;
    var end = arr.length - 1;

    while(start < end){
        //swap the two numbers
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr;
}

console.log(reverse([1,2,3,4,5,6,7,8,9,10]));
console.log(reverse([4,8,15,16,23,42]));