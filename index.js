function dwarfRollCall(dwarves) {
  var stringDwarf = [];

  for (var i = 0; i < dwarves.length; i += 1) {
    var dwarve = dwarves[i];
    stringDwarf.push((i + 1) + '. ' + (dwarve) + " ");
  }
  return stringDwarf.join('');
}

function summonCaptainPlanet(planeteerCalls) {
  var yelledCalls = [];

  for (var i = 0; i < planeteerCalls.length; i += 1) {
    var planet = planeteerCalls[i];

    yelledCalls.push(planet.toUpperCase() + "!");
  }
  return yelledCalls;
}

function longPlaneteerCalls(words) {

  for (var i = 0; i < words.length; i += 1) {
    var word = words[i];

    if (word.length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  var cheeses = 'cheddar gouda camembert'.split(' ');

  for (var i = 0; i < foods.length; i += 1) {
    var food = foods[i];

    if (cheeses.indexOf(food) > -1) {
      return food;
    }
  }
  return 'no cheese!';
 }
