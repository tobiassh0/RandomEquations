const newGameBtn = document.getElementById("newGameBtn");
const equationBox = document.getElementById("equation");
const choicesDiv = document.querySelector(".choices");

newGameBtn.addEventListener("click", startNewGame);

function startNewGame() {
    equationBox.textContent = "";
    clearChoices();

    const equation = generateRandomEquation();
    const correctRearrangement = rearrangeEquation(equation);
    const rearrangedEquation = correctRearrangement;

    // Pre-generate the typeset equations
    const preGeneratedEquation = document.createElement("div");
    preGeneratedEquation.style.display = "none";
    preGeneratedEquation.innerHTML = `\\(${equation}\\)`;
    document.body.appendChild(preGeneratedEquation);

    const preGeneratedRearrangedEquation = document.createElement("div");
    preGeneratedRearrangedEquation.style.display = "none";
    preGeneratedRearrangedEquation.innerHTML = `\\(${rearrangedEquation}\\)`;
    document.body.appendChild(preGeneratedRearrangedEquation);

    // Pre-generate the typeset correct rearranged equation
    const preGeneratedCorrectRearrangement = document.createElement("div");
    preGeneratedCorrectRearrangement.style.display = "none";
    preGeneratedCorrectRearrangement.innerHTML = `\\(${correctRearrangement}\\)`;
    document.body.appendChild(preGeneratedCorrectRearrangement);

    equationBox.innerHTML = `${equation}`;
    
    // Trigger MathJax to process the equations
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, equationBox]);

    // Generate a list of possibleRearrangements
    const possibleRearrangements = generatePossibleRearrangements(correctRearrangement, 5);

    // Create an array with the correct and incorrect rearrangements
    const rearrangementOptions = [correctRearrangement, ...possibleRearrangements];

    // Shuffle the array to randomize the order
    shuffleArray(rearrangementOptions);

    // Display the rearrangement options
    rearrangementOptions.forEach(rearrangement => {
        const rearrangementButton = createRearrangementButton(rearrangement, correctRearrangement);
        choicesDiv.appendChild(rearrangementButton);
    });
}


function clearChoices() {
    while (choicesDiv.firstChild) {
        choicesDiv.removeChild(choicesDiv.firstChild);
    }
}

function createRearrangementButton(rearrangement, correctRearrangement) {
    const rearrangementButton = document.createElement("button");
    rearrangementButton.textContent = rearrangement;

    // Trigger MathJax to process the equations in the button
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, rearrangementButton]);
    
    // Create a visible equation element and move the pre-generated equation into it
    const equationElement = document.createElement("div");
    equationElement.innerHTML = rearrangement;
    
    rearrangementButton.addEventListener("click", () => {
        checkRearrangement(rearrangement, correctRearrangement);
    });
    equationElement.appendChild(rearrangementButton);
    
    return rearrangementButton;
}

function checkRearrangement(rearrangement, correctRearrangement) {
    if (rearrangement === correctRearrangement) {
        alert("Correct! You rearranged the equation correctly.");
    } else {
        alert("Incorrect. Your rearrangement is not correct.");
    }
}