import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import "../../css/MyPage.scss";
import { Tabs } from 'antd';
import InterestTab from "./InterestTab";
import PurchaseDetailTab from "./PurchaseDetailTab";
import MyLectureTab from "./MyLectureTab";
import {useNavigate} from "react-router-dom";

const { TabPane } = Tabs;

const MyPage = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        couponCount: 0
    });

    const storedData = sessionStorage.getItem("projectList");
    const data = storedData ? JSON.parse(storedData) : []; // 문자열을 객체로 변환

    useEffect(() => {
        const storedName = sessionStorage.getItem('name');
        const storedEmail = sessionStorage.getItem('email');

        if (storedName && storedEmail) {
            setUserData(prevData => ({
                ...prevData,
                name: storedName,
                email: storedEmail,
            }));
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="profile">
                <img
                    className="profileImage"
                    src={process.env.PUBLIC_URL + `/assets/profile.svg`}
                    alt="Profile"
                />
                <div className="profileText">
                    <h1> {userData.name} </h1>
                    <p> {userData.email} </p><br />
                    <p> 내 쿠폰: {userData.couponCount} </p>
                </div>
            </div>
            <div className="myPageTab">
                <Tabs className="tab" defaultActiveKey="interest">
                    <TabPane key="interest" tab="관심함">
                        <InterestTab data={data} />
                    </TabPane>
                    <TabPane key="purchase-detail" tab="구매내역">
                        <PurchaseDetailTab data={data} />
                    </TabPane>
                    <TabPane key="my-lecture" tab="내 강연">
                        <MyLectureTab data={data} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default MyPage;
