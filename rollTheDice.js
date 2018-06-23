var getDieRoll = function() { 
    //interesting way of writing a method, much diferent from Java
    console.log("Rolling a dice");
    return Math.ceil(6 * Math.random());
    //still a better way to write random than in C :D
};

var firstDie = getDieRoll();
var secondDie = getDieRoll();

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);