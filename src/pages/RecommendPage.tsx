import React, { useState, useEffect } from "react";
import "./../css/Recommendpage.scss";
import { Card, List } from "antd";

const TEXT_ITEMS = [
  "재테크",
  "주거",
  "소비지출",
  "신용관리",
  "재무설계",
  "금융권 취업",
];

const RecommendPage = () => {
  const [positions, setPositions] = useState(() =>
    Array.from({ length: TEXT_ITEMS.length }, () => ({
      x: Math.random() * (window.innerWidth - 600),
      y: Math.random() * 500,
    }))
  );

  const projectList = sessionStorage.getItem("projectList");

  const [selected, setSelected] = useState<number[]>([]);
  const [data, setData] = useState<string[]>([]);

  const changePosition = (index: number) => {
    const maxWidth = 200; // 글자의 최대 너비를 추정.
    const maxHeight = 30; // 글자의 최대 높이를 추정.

    const maxMoveWidth = window.innerWidth - 600 - maxWidth; // move-text의 최대 너비에서 글자의 최대 너비를 뺀 값
    const maxMoveHeight = 400 - maxHeight; // move-text의 높이 (500px의 80%인 400px)에서 글자의 최대 높이를 뺀 값

    const x = Math.random() * maxMoveWidth;
    const y = Math.random() * maxMoveHeight;

    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[index] = { x, y };
      return newPositions;
    });
  };

  const changeColor = (index: number) => {
    if (!selected.includes(index)) {
      setSelected((prev) => [...prev, index]);
      setData((prev) => [...prev, TEXT_ITEMS[index]]);
    }
  };

  useEffect(() => {
    // 바로 움직임 시작
    TEXT_ITEMS.forEach((_, i) => {
      changePosition(i);
    });

    const intervals: any[] = [];

    for (let i = 0; i < TEXT_ITEMS.length; i++) {
      intervals[i] = setInterval(() => {
        changePosition(i);
      }, 10000); // 10초마다 새 위치 설정
    }

    return () => {
      for (let i = 0; i < TEXT_ITEMS.length; i++) {
        clearInterval(intervals[i]);
      }
    };
  }, []);

  return (
    <div className="RecommendPage">
      <div className="recommend-wrapper">
        <div className="move-text">
          {TEXT_ITEMS.map((text, index) => (
            <div
              key={text}
              className={`moving-text ${
                selected.includes(index) ? "selected" : ""
              }`}
              style={{
                left: positions[index].x,
                top: positions[index].y,
              }}
              onClick={() => changeColor(index)}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="select-recommend">
          선택한 관심사: # {data.join(" # ")}
        </div>
        <div className="recommend-btn">
          <button>시금치가 추천하는 나에게 딱 맞는 강의 바로보기!</button>
        </div>
        <div className="recommend-project"></div>
      </div>
    </div>
  );
};

export default RecommendPage;
