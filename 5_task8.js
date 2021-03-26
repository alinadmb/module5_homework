let map = new Map([[1, "qw"], [2, "er"], [3, "ty"], ["4", "ui"], [true, "op"]]);
for(let key of map.keys()){
    console.log(`Ключ - ${key}, значение - ${map.get(key)}`);
}