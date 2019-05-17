String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
});
let str = "   asdfasdfadsfadsfa ";
console.log(str.trim());