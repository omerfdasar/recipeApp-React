import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    const user = {
      username: "user",
    };
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<Omer/>"} Recipe</Header>
        <StyledForm onSubmit={submitHandler}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit" aria-autocomplete="login">
            Login
          </StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
