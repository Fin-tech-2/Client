import "../../css/Login.scss";
import React from 'react';
import {Button, Form, Input} from 'antd';

type FieldType = {
    email?: string;
    password?: string;
}
const Login = () => {
    const searchEmail = () => {
        window.open("/searchId", "a", "width=300, height=400, left=100, top=50");
    };

    const searchPw = () => {
        window.open("/searchPw", "a", "width=300, height=400, left=100, top=50");
    }
    return (
        <Form>
            <Form.Item<FieldType> name="email"  rules={[{required: true}]}>
                <Input placeholder="이메일" className="emailInput" />
            </Form.Item>
            <Form.Item<FieldType> name="password" rules={[{required: true}]}>
                <Input.Password placeholder="비밀번호" className="pwInput" />
            </Form.Item>
            <Form.Item>
                <Button className="loginBtn" type="primary" htmlType="submit">로그인</Button>
            </Form.Item>
            <Form.Item>
                <Button className="idSearchBtn" type="primary" onClick={searchEmail}>이메일 찾기</Button>
                <Button className="pwSearchBtn" type="primary"  onClick={searchPw}>비밀번호 찾기</Button>
            </Form.Item>
        </Form>
    );
  };

export default Login;