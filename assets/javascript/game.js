var computerChoices = ["a", "b", "c", "d", "e", "f", "g",
"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var pastGuesses = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];

    if (options.indexOf(userGuess) > -1) {
        var html = 
        "<h3>What letter am I thinking of?</h3>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Remaining Guesses: " + guessesLeft + "</p>" +
        "<p>Previous Guesses: " + pastGuesses.join(", ") + "</p>";

        document.querySelector("#psychicGame").innerHTML = html;

        if (userGuess.Guess === computerGuess) {
            wins ++;
            guessesLeft = 9;
            pastGuesses = [];
        }

        if (userGuess != computerGuess) {
            guessesLeft --;
            pastGuesses.push(userGuess);
        }

        if (guessesLeft === 0) {
            losses ++;
            guessesLeft = 9;
            pastGuesses = [];
        }
    }
};