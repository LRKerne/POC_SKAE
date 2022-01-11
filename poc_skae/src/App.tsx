import React, { useState } from "react";

import { fetchQuestions } from "./API";

//Styles
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
//COMPONENTS
import QuestionCard from "./components/QuestionCard";

//TYPES
import { QuestionState, Difficulty } from "./API";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    info: {
      textAlign: "center",
      margin: `${theme.spacing(0)} auto`,
      background: "#6b9798",
    },
    start: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    previous: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    next: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: "center",
      background: "#212121",
      color: "#fff",
    },
    card: {
      marginTop: theme.spacing(10),
    },
  })
);

//state type

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(questions);
  console.log(userAnswers);

  const startQuestionaire = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //Users answer
      const answer = e.currentTarget.value;

      // Check answer agains correct answer
      const correct = questions[number].correct_answer == answer;

      //Add Score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      // Save answer in the array  for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //Move on to the next question if not the last
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS + 1) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const previousQuestion = () => {
    //Move on to the previous question if not the first
    const previousQuestion = number - 1;
    if (number >= 1) {
      setNumber(previousQuestion);
    }
  };

  return (
    <div className="App">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Quiz" />
        <CardActions>
          {/* Start Button */}
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className={classes.start}
              onClick={startQuestionaire}
            >
              Start
            </Button>
          ) : null}
        </CardActions>
        <CardContent className={classes.info}>
          {/* Score */}
          {!gameOver ? <p className="score">Score: {score}</p> : null}

          {/* Loading Questions */}
          {loading && <p>Loading Questions...</p>}

          {/* Question Card */}
          {!loading && !gameOver && (
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
        </CardContent>
        <CardActions>
          {/* Previous Question Button */}
          {!loading &&
          !gameOver &&
          number >= 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              className={classes.previous}
              onClick={previousQuestion}
            >
              Previous Question
            </Button>
          ) : null}

          {/* Next Question Button */}
          {!loading && !gameOver && number !== TOTAL_QUESTIONS - 1 ? (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              className={classes.next}
              onClick={nextQuestion}
            >
              Next Question
            </Button>
          ) : null}
        </CardActions>
        <p></p>
      </Card>
    </div>
  );
};

export default App;
