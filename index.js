var lib = require("./lib/lib");


var empty_arr = [];
var arrnum = [1,2,3,4,5,6,7];
var arrstr = ['a','b','c','d'];
console.log("count-----------------------------------------------");

console.log(`emptyarr=${empty_arr}, count=${lib.count(empty_arr)}`);
console.log(`arrnum=${arrnum}, count=${lib.count(arrnum)}`);
console.log(`arrstr=${arrstr}, count=${lib.count(arrstr)}`);

console.log("isEmpty-----------------------------------------------");

console.log(`emptyarr=${empty_arr}, isEmpty=${lib.isEmpty(empty_arr)}`);
console.log(`arrnum=${arrnum}, isEmpty=${lib.isEmpty(arrnum)}`);
console.log(`arrstr=${arrstr}, isEmpty=${lib.isEmpty(arrstr)}`);

console.log("head-----------------------------------------------");
console.log(`emptyarr=${empty_arr}, head=${lib.head(empty_arr)}`);
console.log(`arrnum=${arrnum}, head=${lib.head(arrnum)}`);
console.log(`arrstr=${arrstr}, head=${lib.head(arrstr)}`);

console.log("tail-----------------------------------------------");
console.log(`emptyarr=${empty_arr}, tail=${lib.tail(empty_arr)}`);
console.log(`arrnum=${arrnum}, tail=${lib.tail(arrnum)}`);
console.log(`arrstr=${arrstr}, tail=${lib.tail(arrstr)}`);



var arrnested = [1, [2,3], 4, [5, [6,7]]];
var arrnested_lagi = [ [1,2,3], ['a',['b', ['c']]]];
console.log('arrnested', arrnested);
console.log("flatten arrnested", lib.flatten(arrnested));
console.log('arrnested_lagi', arrnested_lagi);
console.log("flatten arrnested_lagi", lib.flatten(arrnested_lagi));
