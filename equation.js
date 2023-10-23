function generateRandomEquation() {
    const numTerms = Math.floor(Math.random() * 3) + 2; // Generate 2 to 4 terms

    const variables = ["x", "y", "z"]; // Don't exclude "x" // can add "a", "b", "c" or more
    const equationTerms = [];

    // Always include an "x" term in the equation
    const xCoefficient = getRandomCoefficient();
    equationTerms.push(`${xCoefficient}x`); // You can adjust the coefficient or format as needed

    for (let i = 1; i < numTerms; i++) {
        const variable = getRandomVariable(variables);
        const coefficient = getRandomCoefficient();
        equationTerms.push(`${coefficient}${variable}`);
    }

    // Generate a random constant for the right-hand side
    const randconst = getRandomCoefficient();
    const randvar      = getRandomVariable(variables);
    equationTerms.push(`= ${randconst}${randvar}`);

    return `\\(${equationTerms.join(" + ")}\\)`;

}

function getRandomVariable(variables) {
    const randomIndex = Math.floor(Math.random() * variables.length);
    return variables[randomIndex];
}

function getRandomCoefficient() {
    const randomSign = Math.random() < 0.5 ? "-" : "";
    return randomSign + (Math.floor(Math.random() * 9) + 1); // Random coefficient from -9 to 9
}

function getRandomArrayElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function fixAlgebraicNotation(equation){
    const fixedequation = ''

    // Handle cases where two negative signs are multiplied
    if (equation.includes("- -")) {
        fixedequation = equation.replace("- -", "+ ");
    }

    // Handle cases where a positive and a negative sign are multiplied
    if (equation.includes("+ -") || equation.includes("- +")) {
        fixedequation = equation.replace("+ -", "- ");
        fixedequation = equation.replace("- +", "- ");
    }

    return fixedequation;
}