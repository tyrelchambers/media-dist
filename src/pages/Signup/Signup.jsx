import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import Form from "../../forms/Form";

const Signup = () => {
  return (
    <div className="mt-20">
      <main className="w-full flex flex-col items-center">
        <h1 className="text-primary-black text-3xl font-bold">Register</h1>

        <Form className="mt-10 border-2 border-gray-100">
          <InputWrapper htmlFor="email" label="Email">
            <Input type="email" placeholder="Email" className="mt-2" />
          </InputWrapper>

          <InputWrapper htmlFor="password" label="Password">
            <Input type="password" placeholder="Password" className="mt-2" />
          </InputWrapper>

          <InputWrapper htmlFor="confirmPassword" label="Confirm Password">
            <Input
              type="password"
              placeholder="Confirm Password"
              className="mt-2"
            />
          </InputWrapper>
          <Button>Complete</Button>
        </Form>
      </main>
    </div>
  );
};

export default Signup;
