import React, { useEffect, useState } from "react";

import { fetchQuestions } from "../../services/apiQuiz";
import api from "../../api";
//Styles
import { QuizStyle, Wrapper } from "./Quiz.styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import { Button } from "@material-ui/core";
//COMPONENTS
import QuestionCard from "./QuestionCard";

//TYPES
import { QuestionState, Difficulty } from "../../services/apiQuiz";

//state type

type AnswerObject = {
  question: string;
  answer: number;
};

const TOTAL_QUESTIONS = 10;

const Quiz = () => {
  const [loading, setLoading] = useState(false);
  // const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questions, setQuestions] = useState<any[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(questions);
  console.log(questions);

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
      const answer = parseInt(e.currentTarget.value);

      // Check answer agains correct answer
      // const correct = questions[number].correct_answer === answer;

      //Add Score if answer is correct
      setScore((prev) => prev + answer + 1);
      console.log(e.currentTarget.value);

      // Save answer in the array  for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        // correct,
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
    <QuizStyle className="App">
      <Wrapper>
        <Card className={"card"}>
          <CardHeader className={"header"} title="Questionario" />
          <CardActions>
            {/* Start Button */}
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
              <Button
                variant="contained"
                size="large"
                color="secondary"
                className="start"
                onClick={startQuestionaire}
              >
                Start
              </Button>
            ) : null}
          </CardActions>
          <CardContent className={"info"}>
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
                className="previous"
                onClick={previousQuestion}
              >
                Pergunta Anterior
              </Button>
            ) : null}

            {/* Next Question Button */}
            {!loading && !gameOver && number !== TOTAL_QUESTIONS - 1 ? (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                className="next"
                onClick={nextQuestion}
              >
                Proxima Pergunta
              </Button>
            ) : null}
          </CardActions>
          <p></p>
        </Card>
      </Wrapper>
    </QuizStyle>
  );
};

export default Quiz;
