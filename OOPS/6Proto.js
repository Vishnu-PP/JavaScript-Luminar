var baleno={
    manufacture_name:"nexa",
    price:"7l",
    break:"abs",
    colours:["grey","red","blue"],
    transmission:["manual","auto"]

}
var glanza={
    manufacture_name:"toyotta",
    price:"8l"
}
glanza.__proto__=baleno
console.log(glanza.colours);
console.log(glanza.manufacture_name);
console.log(glanza.__proto__);