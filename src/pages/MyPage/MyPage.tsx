import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import "../../css/MyPage.scss";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import InterestTab from "./InterestTab";
import PurchaseDetailTab from "./PurchaseDetailTab";
import MyLectureTab from "./MyLectureTab";
import {Outlet} from "react-router-dom";

const onChange = (key: string) => {
    console.log(key);
};

const MyPage = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        couponCount: 0
    });

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

    const items: TabsProps['items'] = [
        { key: 'interest', label: `관심함`, children: <InterestTab />, },
        { key: 'purchase-detail', label: `구매내역`, children: <PurchaseDetailTab />, },
        { key: 'my-lecture', label: `내 강의`, children: <MyLectureTab />, },
    ];

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
                <Tabs className="tab" defaultActiveKey="interest" items={items} onChange={onChange} />
            </div>
            <Outlet />
        </div>
    );
};

export default MyPage;
