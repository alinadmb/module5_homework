let arr = [1, 1, 2, 1, 1];
let elem = arr[0];
let f = true;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== elem){
        f = false;
        break;
    }
}
console.log(f);