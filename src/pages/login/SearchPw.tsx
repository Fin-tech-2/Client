import React from 'react';
import {Form, Input, InputNumber, Button} from 'antd';
import "../../css/Login.scss";

const SearchPw = () => {
    const [searchPw] = Form.useForm()
    return (
        <Form className="searchPw" form={searchPw}>
            <Form.Item label="이름" name="name" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item label="이메일" name="email" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button className="pwSearchBtn2" htmlType="submit">비밀번호 찾기</Button>
            </Form.Item>
        </Form>
    );
};
export default SearchPw;