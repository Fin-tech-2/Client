import React  from 'react';
import Header from "../../components/Header";
import "../../css/MyPage.scss";
import {Tabs} from 'antd';
import type {TabsProps} from 'antd';
import InterestTab from "./InterestTab";
import PurchaseDetailTab from "./PurchaseDetailTab";
import MyLectureTab from "./MyLectureTab";

const onChange = (key: string) => {
    console.log(key);
};

const MyPage = () => {

    const items:TabsProps['items'] = [
        {key: 'interest', label: `관심함`, children: <InterestTab />,},
        {key: 'purchase-detail', label: `구매내역`, children: <PurchaseDetailTab />,},
        {key: 'my-lecture', label: `내 강의`, children: <MyLectureTab />,},
    ];
    return (
        <div>
            <Header/>
            <div className="profile">
                <img
                    className="profileImage"
                    src={process.env.PUBLIC_URL + `/assets/profile.svg`}
                />
                <div className="profileText"> {/* 이 부분 axios 형태로 코드 수정해야함 */}
                    <h1> 홍길동 </h1>
                    <p> hongkildong1234@fintech.com </p><br/>
                    <p> 내 쿠폰: 0 </p>
                </div>
            </div>
            <div className="myPageTab">
                <Tabs className="tab" defaultActiveKey="interest" items={items} onChange={onChange}/>
            </div>
        </div>
    );
};
export default MyPage;