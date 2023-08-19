import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/Category.scss";

// interface Course {
//     id: number;
//     title: string;
//     description: string;
//     thumbnailUrl: string;
// }

const MyLectureTab = () => {
    // const [courses, setCourses] = useState<Course[]>([]);
    //
    // useEffect(() => {
    //     // Axios를 사용하여 사용자의 강의를 가져옵니다.
    //     axios.get<Course[]>("/api/articles/").then((response) => {
    //         setCourses(response.data);
    //     });
    // }, []);

    return (
        <div>
            <ul>
            </ul>
        </div>
    );
};

export default MyLectureTab;