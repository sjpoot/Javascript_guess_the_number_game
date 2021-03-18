function validateName() {
    let input_text = document.getElementById("naam");
    let naamContestant = input_text.value;

    if (naamContestant == "") {
        alert("Wil je a.u.b. eerst je naam invullen?");
        return false;
    } else {
        alert(`Hallo ${naamContestant}! Welkom bij "Guess the Number!!`);
        return naamContestant;
    }
}

let getRandomNumber = function(start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);

    while (getRandom < start || getRandom > range) {
        getRandom = Math.floor((Math.random() * range) + start);
    }
    return getRandom;
}

function numberRandom() {
    
    let naam = validateName();
    
    let lowstr = prompt(`${naam}, geef het laagste getal waar vanaf je wilt spelen!`);
    let highstr = prompt(`${naam}, geef het hoogste getal tot waar je wilt spelen!`);
    lownum = parseFloat(lowstr);
    highnum = parseFloat(highstr);

    
    let numberToGuess = getRandomNumber(lownum, highnum);

    alert(`Prima ${naam}, je speelt tussen ${lownum} en ${highnum}. Vul hieronder een getal in en check het antwoord`);

    let guesses = 1;

    while (guesses < 6) {

        let guessesLeft = 5 - guesses;
        let guess = prompt(`Vul een getal in tussen ${lownum} en ${highnum}`);
        if (guess < lownum || guess > highnum) {
            alert(`Je moet wel een getal tussen de ${lownum} en ${highnum} kiezen`);
            break;
        }

        switch (guess >= lownum && guess <= highnum) {
            case guess == numberToGuess:
                alert(`YESSSSS, je antwoord was goed. Gefeliciteerd en tot de volgende keer!`);
                guesses=5;
                break;
            case guess != numberToGuess && guesses < 5:
                alert(`Helaas, je antwoord was fout. Probeer nog een keer, je hebt nog ${guessesLeft} pogingen!`)
                break;
            case guess != numberToGuess && guesses == 5:
                alert(`Helaas, je antwoord was fout. Het getal was ${numberToGuess}, en je hebt het niet geraden!`)
                break;
            default:
                 alert(`Je hebt geen getal ingevuld tussen ${lownum} en ${highnum}! probeer opnieuw`)
                break;
        }
        guesses++;
    }
}