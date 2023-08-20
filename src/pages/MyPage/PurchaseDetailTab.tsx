import React from 'react';
import "../../css/MyPage.scss";
import { FundingData } from "../../types";
import { Card, List } from "antd";
import {useNavigate} from "react-router-dom";

interface PreviewFormProps {
    data: FundingData[];
}


const PurchaseDetailTab = ({data}: PreviewFormProps) => {
    const navigate = useNavigate();
    const id = sessionStorage.getItem("purchase-detail");
    console.log(id);
    const purchaseDetail = data.filter((it) => it.id === Number(id));

    const goDetailPage = (ItemId: number) => {
        navigate(`/detail-page/${ItemId}`);
    }
  return (
      <div>
          <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={purchaseDetail}
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

export default PurchaseDetailTab;