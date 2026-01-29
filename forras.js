import { osszeg } from "./modul.js";

console.log("Első");

// Számok 1-5
for (let i=1; i<=5; i++) console.log(i);

// Páros szám?
let a = 6;
console.log("a:", a);
console.log(a % 2 == 0 ? "Páros" : "Páratlan");

console.log("Összeg [1,2,3]:", osszeg([1,2,3]));
console.log("Összeg [2,3,4]:", osszeg([2,3,4]));

console.log("Kész.");
