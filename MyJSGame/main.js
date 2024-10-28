
class Game {

    constructor() {

        this.moneyAmount = 1;
        this.paused = false;
        this.stage = 0;
        this.toothPatch = new Patch(1, 1, 0, 1);
        this.teeth = 0;
        this.clawPatch = new Patch(0.8, 60, 0, 5);
        this.claws = 0;
        this.stomachPatch = new Patch(0.6, 650, 0, 40);
        this.stomachs = 0;
        this.skinPatch = new Patch(0.6, 7000, 0, 100)
        this.skins = 0;
        this.musclePatch = new Patch(0.5, 65400, 0, 600);
        this.muscles = 0;
        this.lungPatch = new Patch(0.5, 545000, 0, 3000);
        this.lungs = 0;
        this.eyePatch = new Patch(0.4, 6700000, 0, 27000);
        this.eyes = 0;
        this.heartPatch = new Patch(0.4, 47560000, 0, 355000)
        this.hearts = 0;
        this.brainPatch = new Patch(0.2, 777777777, 0, 1200000);
        this.brains = 0;

    }

}

class Player {

    constructor() {



    }

}

class Patch {

    constructor(rate, price, amount, plantValue) {

        this.rate = rate;
        this.price = price;
        this.amount = amount
        this.plantValue = plantValue;

    }

}

var currentGame = new Game();
var message = "Farm Acquired";
var quote = "\"Let's get started. We've got a long way to go don't we?\"";
var timer = 0;

var messageLabel = document.getElementById("messageLabel");
var quoteLabel = document.getElementById("quoteLabel");
var toothButton = document.getElementById("toothButton");
var moneyLabel = document.getElementById("moneyLabel");
var teethLabel = document.getElementById("teethLabel");
var sellButton = document.getElementById("sellButton");
var clawButton = document.getElementById("clawButton");
var clawsLabel = document.getElementById("clawsLabel");
var stomachButton = document.getElementById("stomachButton");
var stomachLabel = document.getElementById("stomachLabel");
var skinButton = document.getElementById("skinButton");
var skinLabel = document.getElementById("skinLabel");
var muscleButton = document.getElementById("muscleButton");
var muscleLabel = document.getElementById("muscleLabel");
var lungButton = document.getElementById("lungButton");
var lungLabel = document.getElementById("lungLabel");
var eyeButton = document.getElementById("eyeButton");
var eyeLabel = document.getElementById("eyeLabel");
var heartButton = document.getElementById("heartButton");
var heartLabel = document.getElementById("heartLabel");
var brainButton = document.getElementById("brainButton");
var brainLabel = document.getElementById("brainLabel");
var endGameButton = document.getElementById("endGameButton");
clawsLabel.style.opacity = "0";
stomachLabel.style.opacity = "0";
skinLabel.style.opacity = "0";
muscleLabel.style.opacity = "0";
lungLabel.style.opacity = "0";
eyeLabel.style.opacity = "0";
heartLabel.style.opacity = "0";
brainLabel.style.opacity = "0";
endGameButton.style.opacity = "0";

window.setInterval(function() {

    if (!currentGame.paused) {

        harvest();

        updateLabels();
    
        buttonActions();
    
        checkStage();

    } else if (currentGame.stage == 9) {

        if (timer < 5) {

            document.body.style.backgroundColor = "black";

        } else {

            currentGame.paused = false;
            document.body.style.backgroundColor = "rgba(40, 5, 10, 1)";

        }

        timer += 1;

    }

}, 1500);

function checkStage() {

    if (currentGame.moneyAmount >= 100 && currentGame.stage == 0) {

        currentGame.stage += 1;
        clawButton.disabled = false;
        clawsLabel.style.opacity = "100";
        message = "Finger Root Discovered";
        clawButton.innerHTML = currentGame.clawPatch.amount + " Finger Root: $" + currentGame.clawPatch.price;
    
    } else if (currentGame.moneyAmount >= 1000 && currentGame.stage == 1 && currentGame.clawPatch.amount > 0) {

        currentGame.stage += 1;
        stomachButton.disabled = false;
        stomachLabel.style.opacity = "100";
        message = "Stomach Shrub Discovered";
        stomachButton.innerHTML = currentGame.stomachPatch.amount + " Stomach Shrub: $" + currentGame.stomachPatch.price;

    } else if (currentGame.moneyAmount >= 10000 && currentGame.stage == 2 && currentGame.stomachPatch.amount > 0) {

        currentGame.stage += 1;
        skinButton.disabled = false;
        skinLabel.style.opacity = "100";
        message = "Skin Tree Discovered";
        skinButton.innerHTML = currentGame.skinPatch.amount + " Skin Trees: $ " + currentGame.skinPatch.price;

    } else if (currentGame.moneyAmount >= 100000 && currentGame.stage == 3 && currentGame.skinPatch.amount > 0) {

        currentGame.stage += 1;
        muscleButton.disabled = false;
        muscleLabel.style.opacity = "100";
        message = "Muscle Bush Discovered"
        muscleButton.innerHTML = currentGame.musclePatch.amount + " Mucle Bushes: $" + currentGame.musclePatch.price;

    } else if (currentGame.moneyAmount >= 1000000 && currentGame.stage == 4 && currentGame.musclePatch.amount > 0) {

        currentGame.stage += 1;
        lungButton.disabled = false;
        lungLabel.style.opacity = "100";
        message = "Lung Legume Discovered"
        lungButton.innerHTML = currentGame.lungPatch.amount + " Lung Legumes: $" + currentGame.lungPatch.price;

    } else if (currentGame.moneyAmount >= 10000000 && currentGame.stage == 5 && currentGame.lungPatch.amount > 0) {

        currentGame.stage += 1;
        eyeButton.disabled = false;
        eyeLabel.style.opacity = "100";
        message = "Eye Berries Discovered"
        eyeButton.innerHTML = currentGame.eyePatch.amount + " Eye Berries: $" + currentGame.eyePatch.price;

    } else if (currentGame.moneyAmount >= 100000000 && currentGame.stage == 6 && currentGame.eyePatch.amount > 0) {

        currentGame.stage += 1;
        heartButton.disabled = false;
        heartLabel.style.opacity = "100";
        message = "Heart Beats Discovered"
        eyeButton.innerHTML = currentGame.heartPatch.amount + " Heart Beats: $" + currentGame.heartPatch.price;

    } else if (currentGame.moneyAmount >= 1000000000 && currentGame.stage == 7 && currentGame.heartPatch.amount > 0) {

        currentGame.stage += 1;
        brainButton.disabled = false;
        brainLabel.style.opacity = "100";
        message = "Brain Stem Discovered"
        brainButton.innerHTML = currentGame.brainPatch.amount + " Brain Stems: $" + currentGame.brainPatch.price;

    } else if (currentGame.moneyAmount >= 9999999999 && currentGame.stage == 8 && currentGame.brainPatch.amount > 0) {

        currentGame.stage += 1;
        endGameButton.disabled = false;
        endGameButton.style.opacity = "100";

    }

    updateLabels();

}

function harvest() {

    currentGame.teeth += (currentGame.toothPatch.amount * currentGame.toothPatch.rate);
    currentGame.claws += (currentGame.clawPatch.amount * currentGame.clawPatch.rate);
    currentGame.stomachs += (currentGame.stomachPatch.amount * currentGame.stomachPatch.rate);
    currentGame.skins += (currentGame.skinPatch.amount * currentGame.skinPatch.rate);
    currentGame.muscles += (currentGame.musclePatch.amount * currentGame.musclePatch.rate);
    currentGame.lungs += (currentGame.lungPatch.amount * currentGame.lungPatch.rate);
    currentGame.eyes += (currentGame.eyePatch.amount * currentGame.eyePatch.rate);
    currentGame.hearts += (currentGame.heartPatch.amount * currentGame.heartPatch.rate);
    currentGame.brains += (currentGame.brainPatch.amount * currentGame.brainPatch.rate);

}

function buyTooth() {

    if (currentGame.moneyAmount >= currentGame.toothPatch.price) {

        currentGame.moneyAmount -= currentGame.toothPatch.price;
        currentGame.toothPatch.amount += 1;
        currentGame.toothPatch.price = Math.ceil(currentGame.toothPatch.price * 1.2);
        toothButton.innerHTML = currentGame.toothPatch.amount + " Tooth Tulip: $" + currentGame.toothPatch.price;
        updateLabels();

    }

}

function buyClaw() {

    if (currentGame.moneyAmount >= currentGame.clawPatch.price) {

        currentGame.moneyAmount -= currentGame.clawPatch.price;
        currentGame.clawPatch.amount += 1;
        currentGame.clawPatch.price = Math.ceil(currentGame.clawPatch.price * 1.2);
        clawButton.innerHTML = currentGame.clawPatch.amount + " Finger Root: $" + currentGame.clawPatch.price;
        updateLabels();

    }

}

function buyStomach() {

    if (currentGame.moneyAmount >= currentGame.stomachPatch.price) {

        currentGame.moneyAmount -= currentGame.stomachPatch.price;
        currentGame.stomachPatch.amount += 1;
        currentGame.stomachPatch.price = Math.floor(currentGame.stomachPatch.price * 1.2);
        stomachButton.innerHTML = currentGame.stomachPatch.amount + " Stomach Shrub: $" + currentGame.stomachPatch.price;
        updateLabels();

    }

}

function buySkin() {

    if (currentGame.moneyAmount >= currentGame.skinPatch.price) {

        currentGame.moneyAmount -= currentGame.skinPatch.price;
        currentGame.skinPatch.amount += 1;
        currentGame.skinPatch.price = Math.floor(currentGame.skinPatch.price * 1.2);
        skinButton.innerHTML = currentGame.skinPatch.amount + " Skin Trees: $ " + currentGame.skinPatch.price;
        updateLabels;

    }

}

function buyMuscle() {

    if (currentGame.moneyAmount >= currentGame.musclePatch.price) {

        currentGame.moneyAmount -= currentGame.musclePatch.price;
        currentGame.musclePatch.amount += 1;
        currentGame.musclePatch.price = Math.floor(currentGame.musclePatch.price * 1.2);
        muscleButton.innerHTML = currentGame.musclePatch.amount + " Mucle Bushes: $" + currentGame.musclePatch.price;

    }

}

function buyLung() {

    if (currentGame.moneyAmount >= currentGame.lungPatch.price) {

        currentGame.moneyAmount -= currentGame.lungPatch.price;
        currentGame.lungPatch.amount += 1;
        currentGame.lungPatch.price = Math.floor(currentGame.lungPatch.price * 1.2);
        lungButton.innerHTML = currentGame.lungPatch.amount + " Lung Legumes: $" + currentGame.lungPatch.price;

    }

}

function buyEye() {

    if (currentGame.moneyAmount >= currentGame.eyePatch.price) {

        currentGame.moneyAmount -= currentGame.eyePatch.price;
        currentGame.eyePatch.amount += 1;
        currentGame.eyePatch.price = Math.floor(currentGame.eyePatch.price * 1.2);
        eyeButton.innerHTML = currentGame.eyePatch.amount + " Eye Berries: $" + currentGame.eyePatch.price;

    }

}

function buyHeart() {

    if (currentGame.moneyAmount >= currentGame.heartPatch.price) {

        currentGame.moneyAmount -= currentGame.heartPatch.price;
        currentGame.heartPatch.amount += 1;
        currentGame.heartPatch.price = Math.floor(currentGame.heartPatch.price * 1.2);
        heartButton.innerHTML = currentGame.heartPatch.amount + " Heart Beats: $" + currentGame.heartPatch.price;

    }

}

function buyBrain() {

    if (currentGame.moneyAmount >= currentGame.brainPatch.price) {

        currentGame.moneyAmount -= currentGame.brainPatch.price;
        currentGame.brainPatch.amount += 1;
        currentGame.brainPatch.price = Math.floor(currentGame.brainPatch.price * 1.2);
        brainButton.innerHTML = currentGame.brainPatch.amount + " Brain Stems: $" + currentGame.brainPatch.price;

    }

}

function sell() {

    currentGame.moneyAmount += (Math.floor(currentGame.teeth) * currentGame.toothPatch.plantValue);
    currentGame.teeth -= Math.floor(currentGame.teeth);
    currentGame.moneyAmount += (Math.floor(currentGame.claws) * currentGame.clawPatch.plantValue);
    currentGame.claws -= Math.floor(currentGame.claws);
    currentGame.moneyAmount += (Math.floor(currentGame.stomachs) * currentGame.stomachPatch.plantValue);
    currentGame.stomachs -= Math.floor(currentGame.stomachs);
    currentGame.moneyAmount += (Math.floor(currentGame.skins) * currentGame.skinPatch.plantValue);
    currentGame.skins -= Math.floor(currentGame.skins);
    currentGame.moneyAmount += (Math.floor(currentGame.muscles) * currentGame.musclePatch.plantValue);
    currentGame.muscles -= Math.floor(currentGame.muscles);
    currentGame.moneyAmount += (Math.floor(currentGame.lungs) * currentGame.lungPatch.plantValue);
    currentGame.lungs -= Math.floor(currentGame.lungs);
    currentGame.moneyAmount += (Math.floor(currentGame.eyes) * currentGame.eyePatch.plantValue);
    currentGame.eyes -= Math.floor(currentGame.eyes);
    currentGame.moneyAmount += (Math.floor(currentGame.hearts) * currentGame.heartPatch.plantValue);
    currentGame.hearts -= Math.floor(currentGame.hearts);
    currentGame.moneyAmount += (Math.floor(currentGame.brains) * currentGame.brainPatch.plantValue);
    currentGame.brains -= Math.floor(currentGame.brains);
    updateLabels();

}

function endgameAction() {

    if (currentGame.stage == 9 && currentGame.moneyAmount >= 9999999999) {

        currentGame.paused = true;

    }

}

function updateLabels() {

    messageLabel.innerHTML = message;
    quoteLabel.innerHTML = quote;
    moneyLabel.innerHTML = "$" + currentGame.moneyAmount;
    teethLabel.innerHTML = "Teeth: " + currentGame.teeth.toFixed(1);
    clawsLabel.innerHTML = "Fingers: " + currentGame.claws.toFixed(1);
    stomachLabel.innerHTML = "Stomachs: " + currentGame.stomachs.toFixed(1);
    skinLabel.innerHTML = "Skins: " + currentGame.skins.toFixed(1);
    muscleLabel.innerHTML = "Muscles: " + currentGame.muscles.toFixed(1);
    lungLabel.innerHTML = "Lungs: " + currentGame.lungs.toFixed(1);
    eyeLabel.innerHTML = "Eyes: " + currentGame.eyes.toFixed(1);
    heartLabel.innerHTML = "Hearts: " + currentGame.hearts.toFixed(1);
    brainLabel.innerHTML = "Brains: " + currentGame.brains.toFixed(1);

}

function buttonActions() {

    toothButton.onclick = buyTooth;
    clawButton.onclick = buyClaw;
    sellButton.onclick = sell;
    stomachButton.onclick = buyStomach;
    skinButton.onclick = buySkin;
    muscleButton.onclick = buyMuscle;
    lungButton.onclick = buyLung;
    eyeButton.onclick = buyEye;
    heartButton.onclick = buyHeart;
    brainButton.onclick = buyBrain;
    endGameButton.onclick = endgameAction;

}