import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "./SingleCard/SingleCard";

const Card = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-5">
            {
                courses.map(course => <SingleCard key={course.id
                } course={course}></SingleCard>)
            }
        </div>
    );
};

export default Card;