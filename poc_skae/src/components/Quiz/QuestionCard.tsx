import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    info: {
      textAlign: "center",
      margin: `${theme.spacing(0)} auto`,
      background: "#6b9798",
    },
    answerBtn: {
      marginTop: theme.spacing(2),
    },
    header: {justify: "center",
    alignitems: "center",

      marginTop: theme.spacing(10),
    },
    answercont: {
      justifyContent:"center",
      flexGrow: 1,
      background: "#6b9798",
    },
  })
);

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
  const classes = useStyles();
  
  return(
  <div>
    <Card>
    {/* <CardHeader className={classes.header} title={`Question ${questionNr} / ${totalQuestions}`} /> */}
      <CardContent className={classes.info}>
      Question: {questionNr} / {totalQuestions}
      <p dangerouslySetInnerHTML={{__html: question }} />
      </CardContent>
    <CardActions className = {classes.answercont}>
      {answers.map((answer) => (
          <Button 
          key={answer}
          variant="contained"
          size="small"
          color="inherit"
          disabled={userAnswer}
          className={classes.answerBtn}
          value= {answer} 
          onClick={callback}>
            <span dangerouslySetInnerHTML={{__html: answer}}></span>
            </Button>
      ))}
      </ CardActions>
      </Card>

  </div>

);

};

export default QuestionCard;