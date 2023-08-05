import React from 'react';
import {Form, Input, Button} from 'antd';
import "../../css/Login.scss";

const SearchId = () => {
    const [searchEmail] = Form.useForm()
    return (
        <Form className="searchId" form={searchEmail}>
            <Form.Item label="이름" name="name" rules={[{required: true}]}>
                <Input/>
            </Form.Item>
            <Form.Item label="전화번호" name="phone" rules={[{required: true}]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button className="idSearchBtn2" htmlType="submit">이메일 찾기</Button>
            </Form.Item>
        </Form>
    );
};
export default SearchId;