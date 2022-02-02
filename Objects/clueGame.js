//Create an object using bracket and dot notation that represents the characters 
//and related data you may find in a game of clue.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var game = {};

game["name"] = "Clue";

game.characters = ["Mrs. White", "Mr. Green", "Mrs. Peacock", "Professor Plum", "Miss Scarlett", "Colonel Mustard"];

game.weapons = ["Revolver", "Dagger", "Lead Pipe", "Rope", "Candlestick", "Wrench"];

game.places = ["Kitchen", "Hall", "Ballroom", "Conservatory", "Dining Room", "Cellar", 
                "Billiard Room", "Library", "Lounge", "Study"];

game["murderer"] = function decideMurderer(){

    let character = game.characters[getRandomInt(0, this.characters.length)];
    let weapon = game.weapons[getRandomInt(0, this.weapons.length)];
    let place = game.places[getRandomInt(0, this.places.length)];

    return "Character: "+character+", Weapon: "+weapon+", Place: "+place;
};

console.log(game.murderer());
