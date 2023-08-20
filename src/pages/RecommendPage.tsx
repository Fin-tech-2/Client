import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./../css/Recommendpage.scss";
import { useNavigate } from "react-router-dom";

const TEXT_ITEMS = [
  "재테크",
  "주거",
  "소비지출",
  "신용관리",
  "재무설계",
  "금융권 취업",
];

const RecommendPage = () => {
  const navigate = useNavigate();
  const [positions, setPositions] = useState(() =>
    Array.from({ length: TEXT_ITEMS.length }, () => ({
      x: Math.random() * (window.innerWidth - 600),
      y: Math.random() * 500,
    }))
  );

  const [selected, setSelected] = useState<number[]>([]);
  const [data, setData] = useState<string[]>([]);

  const [displayedProjects, setDisplayedProjects] = useState<any[]>([]); // 상태 추가

  const projectList = sessionStorage.getItem("projectList");
  const parsedProjectList = projectList ? JSON.parse(projectList) : [];
  const filteredProjects = parsedProjectList.filter((project: any) =>
    data.includes(project.category)
  );

  const handleRecommendBtnClick = () => {
    const shuffledProjects = [...filteredProjects].sort(
      () => 0.5 - Math.random()
    );
    const selectedProjects = shuffledProjects.slice(0, 3);
    setDisplayedProjects(selectedProjects);
  };

  const changePosition = (index: number) => {
    const maxWidth = 200;
    const maxHeight = 30;

    const maxMoveWidth = window.innerWidth - 600 - maxWidth;
    const maxMoveHeight = 400 - maxHeight;

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
      }, 10000);
    }

    return () => {
      for (let i = 0; i < TEXT_ITEMS.length; i++) {
        clearInterval(intervals[i]);
      }
    };
  }, []);

  const goDetailPage = (id: number) => {
    navigate(`/detail-page/${id}`);
  };

  return (
    <div className="RecommendPage">
      <Header />
      <div className="recommendPage">
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
            <button onClick={handleRecommendBtnClick}>
              시금치가 추천하는 나에게 딱 맞는 강의 바로보기!
            </button>
          </div>
          <div className="blinking-text">
            관심있는 키워드를 선택하고 버튼을 클릭하면 맞춤 강의를 추천해
            드려요!
          </div>
          <div className="recommend-project">
            {displayedProjects.map((project) => (
              <div key={project.id}>
                <img
                  src={`/assets/thumbnail/` + project.thumbnail}
                  onClick={() => goDetailPage(project.id)}
                />
                <p>{project.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendPage;
