import React from "react";
import quizQuestions from "../API/data";

const QuiziEnd = (props) => {
  return (
    <div className="Quizi-Answers">
      <h1>Quizi is ended</h1>
      <div className="score">
        Your scored {props.score} out of {quizQuestions.length}
      </div>
      <div className="check">You want check true answers or try one more?</div>
      <div className="buttons">
        <button onClick={() => props.ShowAnswers()}>Check answers</button>
        <button onClick={() => props.Restart()}>Restart</button>
      </div>
    </div>
  );
};

export default QuiziEnd;
