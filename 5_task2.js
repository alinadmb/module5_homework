let x = "hey";
switch(typeof x){
    case "number":
        console.log("X - число");
        break;
    case "string":
        console.log("X - строка");
        break;
    case "boolean":
        console.log("X - булево значение");
        break;
    default:
        console.log("Тип X не определен");
}