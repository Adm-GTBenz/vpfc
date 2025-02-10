function ChoiceButton({ choice, image, onClick }) {
  return (
    <button className="choice-btn" onClick={() => onClick(choice)}>
      {/* Afficher l'image associée au choix */}
      <img src={image} alt={choice} />
    </button>
  );
}

export default ChoiceButton;
