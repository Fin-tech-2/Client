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

    const goOnHome = () => {
        alert('회원가입 되었습니다.');
        navigate("/");
    }

    return (
        <Form>
            <Form.Item<FieldType> name="email" rules={[{required: true}]}>
                <Input placeholder="이메일" className="emailInput"/>
            </Form.Item>
            <Form.Item<FieldType> name="password" rules={[{required: true}]}>
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
                            return Promise.reject(new Error('password is not consistent!!'));
                        },
                    }),
                ]}
            >
                <Input.Password placeholder="비밀번호 확인" className="pwInput"/>
            </Form.Item>

            <Form.Item<FieldType> name="name" rules={[{required: true}]}>
                <Input placeholder="이름" className="nameInput"/>
            </Form.Item>
            <Form.Item<FieldType> name="phone" rules={[{required: true}]}>
                <Input placeholder="전화번호" className="phoneInput"/>
            </Form.Item>
            <Form.Item<FieldType> name="addressNumber" >
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
                    <Select.Option value="demo1">재테크</Select.Option>
                    <Select.Option value="demo2">주거</Select.Option>
                    <Select.Option value="demo3">소비지출</Select.Option>
                    <Select.Option value="demo4">신용관리</Select.Option>
                    <Select.Option value="demo5">재무관리</Select.Option>
                    <Select.Option value="demo6">금융권 취업</Select.Option>
                </Select>
            </Form.Item>
            <Button className="signUpBtn" type="primary" onClick={goOnHome}> 회원가입 </Button><br/>
        </Form>
    );
};
export default SignUp;