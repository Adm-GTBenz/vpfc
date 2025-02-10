function Result({ userChoice, computerChoice, result }) {
    const images = {
      pierre: "/assets/images/icon-rock.svg",
      papier: "/assets/images/icon-paper.svg",
      ciseaux: "/assets/images/icon-scissors.svg",
    };
  
    return (
      <div className="result">
        <div className="choice-display">
          <p>Tu as choisi :</p>
          <img src={images[userChoice]} alt={userChoice} />
        </div>
        <div className="choice-display">
          <p>L'ordi a choisi :</p>
          <img src={images[computerChoice]} alt={computerChoice} />
        </div>
        <h3>{result}</h3>
      </div>
    );
  }
  
  export default Result;
  