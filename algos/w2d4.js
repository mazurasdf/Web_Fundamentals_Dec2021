// var arr2d = [
//     [2,5,8],
//     [3,6,1],
//     [5,7,7]
// ];

// console.log(arr2d[0][2]);

// complete the following function
function flatten(arr2d) {
    var flat = [];
    //loop through arr2d
    for(var i = 0; i < arr2d.length; i++){
        //loop through indexes inside of the arrays
        for(var j = 0; j < arr2d[i].length; j++){
            //push the indexes into flat array
            flat.push(arr2d[i][j]);
        }

    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8,], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]