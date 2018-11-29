
$(document).ready(function () {

    

});

function Calculate() {
    try {
        var bet = document.getElementById("InitialBet").value;
        var index = document.getElementById("Index").value;
        var level = document.getElementById("Level").value;
        var interest = document.getElementById("Interest").value;
            
    } catch (error) {
        console.log("Cannot read. Error is: ", error);
        alert("مقادیر را درست وارد کنید");
    }
    console.log("bet: ", bet, "  index: ", index, "  level: ", level, "  interest: ", interest);
    var betforthisRound = parseInt(bet);
    var indexforthisRound = parseFloat(index);
    var iteration = parseInt(level);
    var interestInteger = parseInt(interest);
    if(!Number.isInteger(iteration) || (iteration == NaN) || (iteration > 1000) || (iteration < 0))
        iteration = 20;
    var profit = 0, loose = 0, loosesSum = 0;
    var remainInterest = interestInteger;
    for (var i = 0; i  < iteration; i++) {
        profit = Math.round((betforthisRound * indexforthisRound) - betforthisRound);
        loose = betforthisRound;
        loosesSum = betforthisRound + loosesSum;
        remainInterest = interestInteger - loosesSum;
        DisplayInDivTable(i, betforthisRound, indexforthisRound, profit, loose, loosesSum, remainInterest);
        betforthisRound = Math.round((loosesSum + profit ) / (indexforthisRound-1) );
    }
    
}

function DisplayInDivTable(level, bet, index, profit, loose, loosesSum, remainInterest) {
    var colorOfBet;
    var colorOfInterest = "green";
    var burst = 0;
    if (burst < 1.8)
        colorOfBet = "red";
    else
        colorOfBet = "green";

    var listDiv = document.getElementsByClassName("divRow");
    var firstDiv = listDiv[0];
    var x = "<div class='divRow'>\
                <div class='divCell'> " + level + "</div>\
                <div class='divCell' style= 'color: " + colorOfBet + "'>" + bet + "</div>\
                <div class='divCell'> " + index + "</div>\
                <div class='divCell'> " + profit + "</div>\
                <div class='divCell'> " + loose + "</div>\
                <div class='divCell'> " + loosesSum + "</div>\
                <div class='divCell' style= 'color: " + colorOfInterest + "'>" + remainInterest + "</div>\
            </div>";
    $(x).insertBefore(firstDiv);
}