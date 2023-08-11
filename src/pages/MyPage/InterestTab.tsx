import React, { forwardRef } from 'react';
import { Card, List } from 'antd';
import "../../css/MyPage.scss";
import {useNavigate} from "react-router-dom";

const InterestTab = forwardRef((props, ref) => {

    const navigate = useNavigate();
    const goDetailPage = () => {
        navigate("/detail-page/1");
    }
    const data = [
        {
            title: '부동산 천재의 어쩌구저쩌구',
            thumbnail: '/assets/interest.svg',
        },
        {
            title: '부동산 천재의 어쩌구저쩌구',
            thumbnail: '/assets/interest.svg',
        },
        {
            title: '부동산 천재의 어쩌구저쩌구',
            thumbnail: '/assets/interest.svg',

        },
    ];

    return (
        <div className="interest">
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>
                            <img className="content" src={item.thumbnail} alt="Thumbnail" onClick={goDetailPage} />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
});

export default InterestTab;
