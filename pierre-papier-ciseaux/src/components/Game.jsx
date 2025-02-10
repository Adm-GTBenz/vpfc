import { useState } from "react";
import ChoiceButton from "./ChoiceButton";
import Result from "./Result";

// Import des images
import rockIcon from "src/images/icon-rock.svg";
import paperIcon from "src/images/icon-paper.svg";
import scissorsIcon from "src/images/icon-scissors.svg";

// Tableau des choix
const choices = ["pierre", "papier", "ciseaux"];

// Associer chaque choix à une image
const images = {
  pierre: rockIcon,
  papier: paperIcon,
  ciseaux: scissorsIcon,
};

function Game() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("Égalité !");
    } else if (
      (choice === "pierre" && randomChoice === "ciseaux") ||
      (choice === "papier" && randomChoice === "pierre") ||
      (choice === "ciseaux" && randomChoice === "papier")
    ) {
      setResult("Tu as gagné !");
    } else {
      setResult("Tu as perdu !");
    }
  };

  return (
    <div>
      <h2>Fais ton choix :</h2>
      <div className="buttons">
        {choices.map((choice) => (
          // Passer l'image au bouton
          <ChoiceButton key={choice} choice={choice} image={images[choice]} onClick={playGame} />
        ))}
      </div>
      {userChoice && computerChoice && (
        <Result userChoice={userChoice} computerChoice={computerChoice} result={result} />
      )}
    </div>
  );
}

export default Game;
