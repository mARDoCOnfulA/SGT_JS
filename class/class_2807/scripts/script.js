let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// kas ir tas $ ????
// Fifteen is 15 and not 20.
console.log(a == b);
let c = 10;
console.log(b == c);
console.log((a = b));
let cstr = "10";
console.log(c == cstr);
console.log(c === cstr);

c = c + 2;
c += 2;
console.log(c);

console.log(c != Number(cstr));

console.log(c > 100);
console.log(!c > 100);
c++;
console.log(c++);
