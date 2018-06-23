var getDieRoll = function() { 
    //interesting way of writing a method, much diferent from Java
    console.log("Rolling a dice");
    return Math.ceil(6 * Math.random());
    //still a better way to write random than in C :D
};

var firstDie = getDieRoll();

if(getDieRoll >= 5) {
    console.log("Great roll!");
    //if stays the same wherever you are... :) 
}else if(getDieRoll >= 3) {
    console.log("Not so gread");
    //theese lessons are too basic
}else {
    console.log("Maybe you should quit gamblin`");
    //maybe i should skip theese parts??
}

console.log(firstDie);
console.log(firstDie + secondDie);