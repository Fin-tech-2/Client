import "../../css/Login.scss";
import React from 'react';
import {Button, Form, Input} from 'antd';


type FieldType = {
    email?: string;
    password?: string;
}
const Login = () => {
    return (
        <Form>
            <Form.Item<FieldType> name="email">
                <Input placeholder="이메일" className="emailInput"/>
            </Form.Item>
            <Form.Item<FieldType> name="password">
                <Input.Password placeholder="비밀번호" className="pwInput" />
            </Form.Item>
            <Form.Item>
                <Button className="loginBtn" type="primary" htmlType="submit">로그인</Button>
            </Form.Item>
            <Form.Item>
                <Button className="idSearchBtn" type="primary" htmlType="submit">이메일 찾기</Button>
                <Button className="pwSearchBtn" type="primary" htmlType="submit">비밀번호 찾기</Button>
            </Form.Item>
        </Form>
    );
  };

export default Login;