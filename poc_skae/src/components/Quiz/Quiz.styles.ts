import styled from "styled-components";

export const QuizStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .cardtext{
    width: 80%;
  }

  .card {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  button{
    background-color: #0099cc;
  }

  .answercont{
    display: flex;
    justify-content: center;
  }
  .answerBtn {
    color: #0099cc;
    font-size: 16px;
    background: #b3ecff;
    border: 1px;
    border-radius: 5px;
  }

  .header{
    align-items: center;
    color: #FFF;
    width: 95%;
    background-color: #0099cc;
    margin:auto;
  }

  .MuiTypography-displayBlock{
    display: flex;
    justify-content:center;
  }

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0%;
  width: 600px;
`;