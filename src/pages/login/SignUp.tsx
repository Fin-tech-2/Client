import "../../css/Login.scss";
import React, {useState} from 'react';
import {Button, Form, Input, Select} from 'antd';
import {useDaumPostcodePopup} from "react-daum-postcode";
import {useNavigate} from "react-router-dom";


type FieldType = {
    email?: string;
    password?: string;
    passwordCheck?: string;
    name?: string;
    phone?: string;
    addressNumber?: string;
    address?: string;
    addressDetail?: string;
}

const SignUp = () => {
    const scriptUrl = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    const navigate = useNavigate();
    const open = useDaumPostcodePopup(scriptUrl);
    const [address, setAddress] = useState('');
    const [addr, setAddr] = useState('');
    const [extraAddress, setExtraAddress] = useState('');
    const [location, setLocation] = useState('');

    const moveAddress = (data: { address: React.SetStateAction<string>; addressType: string; bname: string; buildingName: string; zonecode: React.SetStateAction<string>; }) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? `(${extraAddress})` : '';
        }
        setAddress(data.zonecode);
        setAddr(data.address);
        setExtraAddress(extraAddress);
        console.log(fullAddress);
    };
    const handleClick = () => {
        open({onComplete: moveAddress});
    };

    return (
        <Form>
            <Form.Item<FieldType> name="email">
                <Input placeholder="이메일" className="emailInput"/>
            </Form.Item>
            <Form.Item<FieldType> name="password">
                <Input.Password placeholder="비밀번호" className="pwInput"/>
            </Form.Item>

            <Form.Item<FieldType>
                className="passwordCheck"
                name="passwordCheck"
                dependencies={['password']}
                hasFeedback
                rules={[
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error(''));
                        },
                    }),
                ]}
            >
                <Input.Password placeholder="비밀번호 확인" className="pwInput"/>
            </Form.Item>

            <Form.Item<FieldType> name="name">
                <Input placeholder="이름" className="nameInput"/>
            </Form.Item>
            <Form.Item<FieldType> name="phone">
                <Input placeholder="전화번호" className="phoneInput"/>
            </Form.Item>
            <Form.Item<FieldType> name="addressNumber">
                <div className="container">
                    <Input placeholder="우편번호" className="addressNumber" value={address}/>
                    <Button className="addressNumberBtn" type="primary" onClick={handleClick}> 검색 </Button>
                </div>
            </Form.Item>

            <Form.Item<FieldType> name="address">
                <div className="grid">
                    <Input placeholder="주소" className="address" value={addr}/>
                    <Input placeholder="상세주소" className="addressDetailInput"/>
                    <Input
                        placeholder="참고항목"
                        className="addressDetail"
                        value={extraAddress} onChange={(e) => setLocation(e.target.value)}/>
                </div>
            </Form.Item>

            <Form.Item>
                <Select placeholder="관심분야" className="interests" style={{width: 400}}>
                    <Select.Option value="demo1">부동산</Select.Option>
                    <Select.Option value="demo2">투자</Select.Option>
                    <Select.Option value="demo3">펀드</Select.Option>
                    <Select.Option value="demo4">주식</Select.Option>
                    <Select.Option value="demo5">금융권 취업</Select.Option>
                    <Select.Option value="demo6">자산관리</Select.Option>
                    <Select.Option value="demo7">예적금</Select.Option>
                    <Select.Option value="demo8">대출</Select.Option>
                    <Select.Option value="demo9">보험</Select.Option>
                </Select>
            </Form.Item>
            <Button className="signUpBtn" type="primary" htmlType="submit"> 회원가입 </Button><br/>
        </Form>
    );
};
export default SignUp;