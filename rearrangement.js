function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function rearrangeEquation(equation) {
    // Rearrange equation and simplify in terms of x
    const rearrangedEquation = math.simplify(equation)
    return rearrangedEquation;
}

function generatePossibleRearrangements(correctRearrangement, variableList) {
    const possibleRearrangements = [];

    // Generate 4 possible incorrect rearrangements
    for (let i = 0; i < 4; i++) {
        const randomVariable = getRandomVariable(variableList);
        const randomCoefficient = getRandomCoefficient();
        const randomConstant = getRandomCoefficient();
        let randomRearrangement = `x = (${randomConstant} - ${randomCoefficient}${randomVariable}) / ${randomCoefficient}`;
        
//        frandomRearrangement = fixAlgebraicNotation(randomRearrangement);

        // Handle cases where two negative signs are multiplied
        if (randomRearrangement.includes("- -")) {
            randomRearrangement = randomRearrangement.replace("- -", "+ ");
        }
        
        // Handle cases where a positive and a negative sign are multiplied
        if (randomRearrangement.includes("+ -") || randomRearrangement.includes("- +")) {
            randomRearrangement = randomRearrangement.replace("+ -", "- ");
            randomRearrangement = randomRearrangement.replace("- +", "- ");
        }
        
        if (frandomRearrangement !== correctRearrangement && !possibleRearrangements.includes(frandomRearrangement)) {
            possibleRearrangements.push(frandomRearrangement);
        }
    }

    // // Add the correct rearrangement as the fifth option
    // possibleRearrangements.push(correctRearrangement);

    // Wrap each rearrangement in MathJax tags
    possibleRearrangements.forEach((rearrangement, index) => {
        possibleRearrangements[index] = `\\(${rearrangement}\\)`;
    });

    return possibleRearrangements;
}

