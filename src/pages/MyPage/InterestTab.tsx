import React, { forwardRef } from 'react';
import { Card, List } from 'antd';
import "../../css/MyPage.scss";
import { useNavigate } from "react-router-dom";

const InterestTab = forwardRef((props, ref) => {
    const navigate = useNavigate();

    const goDetailPage = (id: number) => {
        navigate(`/detail-page/${id}`);
    };

    const data = [
        {
            id: 1,
            title: '부동산 천재의 어쩌구 저쩌구',
            thumbnail: '/assets/interest.svg',
        },
        {
            id: 2,
            title: '부동산 천재의 금나와라 뚝딱',
            thumbnail: '/assets/interest.svg',
        },
        {
            id: 3,
            title: '부동산 성공시키기!',
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
                            <img
                                className="content"
                                src={item.thumbnail}
                                alt="Thumbnail"
                                onClick={() => goDetailPage(item.id)}
                            />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
});

export default InterestTab;
