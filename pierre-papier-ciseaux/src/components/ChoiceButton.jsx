function ChoiceButton({ choice, onClick }) {
    return (
      <button className={choice} onClick={() => onClick(choice)}>
        {choice}
      </button>
    );
  }
  
  export default ChoiceButton;
  