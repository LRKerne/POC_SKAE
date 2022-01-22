import styled from "styled-components";

export const LoginForm = styled.form`
  width: 250px;
  height: 400px;
  background: lightcyan;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
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
  /* hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  } */
  /* a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  } */
`;