import React from 'react';
import "../../css/MyPage.scss";
import { FundingData } from "../../types";
import { Card, List } from "antd";
import { useNavigate } from "react-router-dom";

interface PreviewFormProps {
    data: FundingData[];
}

const MyLectureTab = ({ data }: PreviewFormProps) => {
    const navigate = useNavigate();
    const id = sessionStorage.getItem("myLecture");
    console.log(id);
    const myLecture = data.filter((it) => it.id === Number(id));

    const goDetailPage = (itemId: number) => {
        navigate(`/detail-page/${itemId}`);
    }

    return (
        <div>
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={myLecture}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>
                            <img
                                className="content"
                                src={process.env.PUBLIC_URL+`/assets/thumbnail/${item.thumbnail}`}
                                alt="Thumbnail"
                                onClick={() => goDetailPage(item.id)}
                            />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default MyLectureTab;