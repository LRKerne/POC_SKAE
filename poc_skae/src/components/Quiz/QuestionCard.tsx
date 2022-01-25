import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Button } from "@material-ui/core";
import  {QuizStyle} from "./Quiz.styles"

//state type

type Props ={
  question:string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> =({
  question, 
  answers,
  callback,
  questionNr,
  totalQuestions,
  userAnswer
}) =>{
  
  return(
  <QuizStyle>
    <Card>
    {/* <CardHeader className={classes.header} title={`Question ${questionNr} / ${totalQuestions}`} /> */}
      <CardContent className="info">
      Question: {questionNr} / {totalQuestions}
      <p dangerouslySetInnerHTML={{__html: question }} />
      </CardContent>
    <CardActions className = "answercont">
      {answers.map((answer,index) => (
          <Button 
          key={answer}
          variant="contained"
          size="small"
          color="inherit"
          disabled={userAnswer}
          className="answerBtn"
          value= {index}
          onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}></span>
            </Button>
      ))}
      </ CardActions>
      </Card>

  </QuizStyle>

);

};

export default QuestionCard;