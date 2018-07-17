var a = true && 1;
var b = NaN && false; 
var c = 0 || 1 || 2;
var d = 0 && 1 && 2;

console.log('a:', a,'b:', b,'c:', c,'d:', d);
var e = a ? 1 : 0;
console.log('e:', e);
