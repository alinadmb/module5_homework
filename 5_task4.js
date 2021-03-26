function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
let x = randomInt(0,100);
console.log(x);