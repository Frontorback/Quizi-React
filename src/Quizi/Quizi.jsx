import React, { useReducer, useState } from "react";
import quizQuestions from "../API/data";
import "./Quizi.css";
import QuiziAnswers from "./QuiziAnswers";
import QuiziEnd from "./QuiziEnd";

const reduce = (state, action) => {
  switch (action.type) {
    case "SET-ID":
      return {
        choice: [...state.choice, action.id],
      };
    default:
      return state;
  }
};

const Quizi = () => {
  const [check, setCheck] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const [state, dispatch] = useReducer(reduce, {
    choice: [],
  });

  const SendCorrect = (id) => {
    if (id.includes("CC")) {
      setScore(score + 1);
    }

    dispatch({ type: "SET-ID", id });
    ChangePage();
  };

  const Restart = () => {
    setCurrent(0);
    setScore(0);
    setCheck(false);
    state.choice = [];
  };

  const ChangePage = () => {
    setCurrent(current + 1);
  };
  const ShowAnswers = () => {
    setCheck(true);
  };

  if (current >= quizQuestions.length) {
    return (
      <div>
        {check ? (
          <QuiziAnswers Restart={Restart} choice={state.choice} />
        ) : (
          <QuiziEnd score={score} Restart={Restart} ShowAnswers={ShowAnswers} />
        )}
      </div>
    );
  }

  //
  //
  //

  return (
    <main>
      <div className="Nav-Quizi">
        <div>
          Quetion No.{current + 1} of {quizQuestions.length}
        </div>
        <div>{score}</div>
      </div>
      <div className="Quation-Quizi">{quizQuestions[current].question}</div>
      <div className="Chose-Quizi">Choose correct answer</div>

      {quizQuestions[current].answers.map((info, index) => (
        <div className="Answer-Quizi" key={info.id}>
          <ul  onClick={() => SendCorrect(info.id)} key={info.id}>
            <li>
              {index + 1}) {info.content}
            </li>
          </ul>
        </div>
      ))}

      <button onClick={() => ChangePage()}>Next </button>
    </main>
  );
};

export default Quizi;
