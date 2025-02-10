const choices = ["pierre", "papier", "ciseaux"];
const buttons = document.querySelectorAll(".choice");
const resultText = document.getElementById("resultat");
const scoreMax = 10; // Score limite pour gagner la partie

// Ajout des variables pour le score
let scoreJoueur = 0;
let scoreOrdi = 0;
const scoreJoueurEl = document.getElementById("score-joueur");
const scoreOrdiEl = document.getElementById("score-ordi");

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

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
            scoreJoueur++; // Incrémentation du score joueur
            scoreJoueurEl.textContent = scoreJoueur; // Mise à jour de l'affichage
        } else {
            result = "Tu as perdu... 😢";
            scoreOrdi++; // Incrémentation du score ordinateur
            scoreOrdiEl.textContent = scoreOrdi; // Mise à jour de l'affichage
        }

        // Ajout des classes pour le style
        resultText.classList.remove("gagne", "perdu");
        if (result.includes("gagné")) {
            resultText.classList.add("gagne");
        } else if (result.includes("perdu")) {
            resultText.classList.add("perdu");
        }

        //limite de score
        if (scoreJoueur === scoreMax) {
            resultText.textContent = "🎉 Tu as gagné la partie ! Félicitations !";
            disableButtons();
            return;
        } else if (scoreOrdi === scoreMax) {
            resultText.textContent = "😢 L'ordinateur a gagné la partie...";
            disableButtons();
            return;
        }
        
        const resetButton = document.getElementById("reset");

        resetButton.addEventListener("click", () => {
            scoreJoueur = 0;
            scoreOrdi = 0;
            scoreJoueurEl.textContent = scoreJoueur;
            scoreOrdiEl.textContent = scoreOrdi;
            resultText.textContent = "Nouvelle partie ! Fais ton choix.";
            
            // Réactiver les boutons
            buttons.forEach(button => {
                button.disabled = false;
            });
        });


        // Affichage du résultat
        resultText.textContent = `Adversaire : ${computerChoice.toUpperCase()} | ${result}`;
    });
});
