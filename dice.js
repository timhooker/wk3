function Dice(sides){
   if (!sides) {
    sides = 6;
  }

  var newDice = {
    value: 1,
    roll: function () {
      newDice.value = Math.floor(Math.random() * sides) + 1;
    }
  };

  newDice.roll();

  return newDice;
}

var sixSided = Dice();
var tenSided = Dice(10);


(function(){



})();
