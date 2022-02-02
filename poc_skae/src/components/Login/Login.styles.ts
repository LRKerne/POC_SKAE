import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  padding-top: 5%;
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.div`
  width: 450px;
  height: 100%;
  background: lightcyan;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    height: 46px;
    margin-bottom: 15px;
    padding: 0 50px;
    color: #777;
    font-size: 15px;
    border: 1px solid blue;
    &::placeholder {
      color: lightblue;
    }
  }
  h1 {
    font-size: 45px;
  }
  button {
    color: #0099cc;
    font-size: 16px;
    background: #b3ecff;
    height: 25px;
    border: 1px;
    border-radius: 5px;
    width: 50%;
  }
`;