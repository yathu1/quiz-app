import { QuizContext } from "../contexts/quiz";
import Question from "./Question";
// import { useState } from "react";
import { useContext } from "react";



const Quiz = ()=>{
    const [quizState,dispatch] = useContext(QuizContext);

  //  const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);
    return (
    <div className="quiz">
    <div>
        <div className="score">
            QUESTION {quizState.currentQuestionIndex+1}/{quizState.questions.length}
        </div>
         <Question />
         <div className="next-button" onClick={()=>dispatch({type:'NEXT_QUESTION'})}>Next Question</div>
         </div>
   
    </div>
    )
}

export default Quiz;