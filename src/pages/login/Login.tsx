import "../../css/Login.scss";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  password?: string;
};
const Login = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState<FieldType>({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const inputsHandler = (e: any) => {
    const { name, type } = e.target;
    setInputs({
      ...inputs,
      [name]: e.target.value,
    });
  };

  const loginHandler = () => {
    const option = {
      url: "/member/login",
      method: "POST",
      data: {
        memberEmail: inputs.email,
        memberPassword: inputs.password,
      },
    };

    axios(option)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("name", res.data.memberName);
        sessionStorage.setItem("email", res.data.memberEmail);
        navigate("/");
      })
      .catch((err) => {
        alert("로그인 실패 이메일이나 비밀번호를 다시한번 확인해 주세요.");
      });
    console.log(inputs);
  };

  const searchEmail = () => {
    window.open("/searchId", "a", "width=300, height=400, left=100, top=50");
  };

  const searchPw = () => {
    window.open("/searchPw", "a", "width=300, height=400, left=100, top=50");
  };
  return (
    <Form>
      <Form.Item<FieldType> name="email" rules={[{ required: true }]}>
        <Input
          placeholder="이메일"
          className="emailInput"
          onChange={inputsHandler}
          name={"email"}
        />
      </Form.Item>
      <Form.Item<FieldType> name="password" rules={[{ required: true }]}>
        <Input.Password
          placeholder="비밀번호"
          className="pwInput"
          onChange={inputsHandler}
          name={"password"}
        />
      </Form.Item>
      <Form.Item>
        <Button
          className="loginBtn"
          type="primary"
          htmlType="submit"
          onClick={loginHandler}
        >
          로그인
        </Button>
      </Form.Item>
      <Form.Item>
        <Button className="idSearchBtn" type="primary" onClick={searchEmail}>
          이메일 찾기
        </Button>
        <Button className="pwSearchBtn" type="primary" onClick={searchPw}>
          비밀번호 찾기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;