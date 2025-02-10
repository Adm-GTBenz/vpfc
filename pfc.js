const choices = ["pierre", "papier", "ciseaux"];
const buttons = document.querySelectorAll(".choice");
const resultText = document.getElementById("resultat");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        let result;
        if (playerChoice === computerChoice) {
            result = "Égalité !";
        } else if (
            (playerChoice === "pierre" && computerChoice === "ciseaux") ||
            (playerChoice === "papier" && computerChoice === "pierre") ||
            (playerChoice === "ciseaux" && computerChoice === "papier")
        ) {
            result = "Tu as gagné ! 🎉";
        } else {
            result = "Tu as perdu... 😢";
        }
                resultText.classList.remove("gagne", "perdu");
        if (result.includes("gagné")) {
            resultText.classList.add("gagne");
        } else if (result.includes("perdu")) {
            resultText.classList.add("perdu");
        }


        resultText.textContent = `Adversaire : ${computerChoice.toUpperCase()} | ${result}`;
    });
});
