var computerChoices = ["a", "b", "c", "d", "e", "f", "g",
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var pastGuesses = [];

alert ("Don't try to comprehend with your mind. Your mind's very limited. Use your intuition.")

document.onkeyup = function(event) {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var userGuess = event.key;
    
    var options = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins ++;
            guessesLeft = 9;
            pastGuesses = [];
            alert ("You've chosen correctly...")
        }

        if (userGuess != computerGuess) {
            guessesLeft --;
            pastGuesses.push(userGuess);
        }

        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses ++;
            pastGuesses = [];
            alert ("Clear your mind... Intuition will tell the thinking mind where to look next.")
        }

        var html = 
        "<h3>What letter am I thinking of?</h3>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Remaining Guesses: " + guessesLeft + "</p>" +
        "<p>Previous Guesses: " + pastGuesses.join(", ") + "</p>";

        document.querySelector("#psychicGame").innerHTML = html;
    }
};