import React from "react";
import Button from "../../components/Button/Button";
import { H1 } from "../../components/headings/h1";
import Input from "../../components/Input/Input";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import Form from "../../forms/Form";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    login.mutate(state);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-20">
      <main className="w-full flex flex-col items-center">
        <H1>Login</H1>

        <Form className="mt-10 border-2 border-gray-100">
          <InputWrapper htmlFor="email" label="Email">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              className="mt-2"
              onChange={(e) => handleChange(e)}
            />
          </InputWrapper>

          <InputWrapper htmlFor="password" label="Password">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              className="mt-2"
              onChange={(e) => handleChange(e)}
            />
          </InputWrapper>

          <Button onClick={handleSubmit}>Complete</Button>
        </Form>
      </main>
    </div>
  );
};

export default Login;
