import React from "react";
import quizQuestions from "../API/data";
import './QuiziAnswers.css'
const QuiziAnswers = (props) => {
  const YourChoise = (id) =>{
    if(props.choice.includes(id)){
      return '<=== Your choice'
    }
  }
  return (
    <div>
      {quizQuestions.map((item, index) => {
        return (
          <div className="Quizi-Answers" key={index}>
            <h2 className="Quizi-question">{index +1}) {item.question}</h2>
            <ul className="List-answers">
            {quizQuestions[index].answers.map((it, idx) => {
                return <li className={it.className} key={it.id}>
                          {idx + 1}. {it.content} 
                          <span> {YourChoise(it.id)}</span>
                       </li>
            })}
            </ul>
          </div>
        );
        
      })}
      <div className="Answers-btn" onClick={() => props.Restart()}>Restart</div>
      </div>
  );
};
export default QuiziAnswers;
