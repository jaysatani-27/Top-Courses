import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {

    // console.log(props.category);
    // console.log(props.courses);

    let courses=props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
  

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((array) => { 
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else {
            return courses[category] ;
        }
    }

    //   console.log(getCourses());

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card
                        course={course}
                        key={courses.id}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />;
                })
            }
        </div>
    );
};

export default Cards;
