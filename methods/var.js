var global_var = 1;
global_novar = 2; // 反面教材
(function () {
   global_fromfunc = 3; // 反面教材
}());
delete global_var; // false
delete global_novar; // true
delete global_fromfunc; // true

// console.log(typeof global_var); // "number"
// console.log(typeof global_novar); // "undefined"
// console.log(typeof global_fromfunc); // "undefined"
var man = {
    hands: 2,
    legs: 2,
    heads: 1
 };
 if (typeof Object.prototype.clone === "undefined") {
    Object.prototype.clone = function () {};
 }
 for (var i in man) {
    if (man.hasOwnProperty(i)) { // 过滤
       console.log(i, ":", man[i]);
    }
 }
 for(var k in man) {
     console.log(man[k])
 }