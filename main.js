// Step 1 - Create a new object called storyteller
let storyteller = {

    // Step 2 - Give the storyteller object a property called name with a value
    name: "Dylan",
    // Step 3 - Give the storyteller object a property called address with a value
    address: "Halifax, Nova Scotia",
    // Step 4 - Give the storyteller object a property called bio with a function definition that returns the following string:
    // `${name} lives at ${address} and is a great storyteller.`
    bio: function(){
        return `${this.name} lives at ${this.address} and is a great storyteller`;
    }
}
// Step 5 - Using the DOM techniques you learned last week, fill out the Storyteller's information in the provided table.
let nameDiv = document.querySelector('.name');
nameDiv.textContent = storyteller.name;

let addressDiv = document.querySelector('.address');
addressDiv.textContent = storyteller.address;

let bioDiv = document.querySelector('.bio');
bioDiv.textContent = storyteller.bio();

// Step 6 - Create an object constructor called Player that takes 3 arguments: name, class,and level
function Player (name, className, level){
    // Step 7 - Give the constructor the following 3 properties: name, class, and level
    this.name = name;
    this.className = className;
    this.level = level;
    // Step 8 - Give the constructor a bio property with a function definition that returns the following string
    // `${name} is a world class ${class} at the bolstering level of ${level}!`
    this.bio = function(){
        return `${this.name} is a world class ${this.className} at the bolstering level of ${this.level}!`;
    }
}
// Step 9 - Create 2 new players called playerOne and playerTwo with whatever values you want.
let playerOne = new Player("Joe", "Tank", "22");
let playerTwo = new Player("Alec", "Healer", "49");
// Step 10 - Using the DOM techniques you learned last week, fill out the player's information in the provided tables for each player.
//PlayerOne
const p1Name = document.querySelector('#playerOne .name');
const p1ClassName = document.querySelector('#playerOne .className');
const p1Level = document.querySelector('#playerOne .level');
const p1Bio = document.querySelector('#playerOne .bio');
p1Name.textContent = playerOne.name;
p1ClassName.textContent = playerOne.className;
p1Level.textContent = playerOne.level;
p1Bio.textContent = playerOne.bio();
//playerTwo
const p2Name = document.querySelector('#playerTwo .name');
const p2ClassName = document.querySelector('#playerTwo .className');
const p2Level = document.querySelector('#playerTwo .level');
const p2Bio = document.querySelector('#playerTwo .bio');
p2Name.textContent = playerTwo.name;
p2ClassName.textContent = playerTwo.className;
p2Level.textContent = playerTwo.level;
p2Bio.textContent = playerTwo.bio();
