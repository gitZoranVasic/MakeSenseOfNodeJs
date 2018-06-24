var die = {
    size : 6,
    totalRolls: 0,
    roll: function() {
        //so variables from object is not seen in function without this... hm...
        var result = Math.ceil(this.size * Math.random());
        this.totalRolls++;
        return result;
    }
};

die.size = 10;

console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log(die.totalRolls);

console.log(die);