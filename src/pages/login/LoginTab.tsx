import React from 'react';
import {Tabs} from 'antd';
import "../../css/Login.scss";
import Login from "./Login";
import SignUp from "./SignUp";
import Header from "../../components/Header";

const LoginTab = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    const tabs = [
        {label: '로그인', key: 'login', children: <Login />},
        {label: '회원가입', key: 'sign-up', children: <SignUp/>},
    ]
    return (
        <div>
            <Header/>
        <div className="tabBorder">
            <Tabs
                onChange={onChange}
                type="card"
                items={tabs}
            />
        </div>
        </div>
    );
};

export default LoginTab;