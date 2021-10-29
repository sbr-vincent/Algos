// Dice Roller
function d6() {
    var roll = Math.random()*6;
    // your code here
    return Math.ceil(roll);
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Consult the Oracle
function consultOracle() {
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    
    var num = Math.floor(Math.random()*20);
    
    console.log(lifesAnswers[num]);
}

consultOracle();
consultOracle();
consultOracle();
consultOracle();
consultOracle();
consultOracle();
consultOracle();
consultOracle();
consultOracle();