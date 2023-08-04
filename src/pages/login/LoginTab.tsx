import React from 'react';
import {Tabs} from 'antd';
import Login from "./Login";
import SignUp from "./SignUp";

const LoginTab = () => {
    const onChange = (key: string) => {
        console.log(key);
    };

    const tabs = [
        {label: '로그인', key: 'login', children: <Login />},
        {label: '회원가입', key: 'sign-up', children: <SignUp/>},
    ]
    return (
        <div className="tabBorder">
            <Tabs
                onChange={onChange}
                type="card"
                items={tabs}
            />
        </div>
    );
};

export default LoginTab;