import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("/src/coursedetails.json")
      .then((response) => response.json())
      .then((data) => {
        const courseData = data.find((course) => course.id == id);
        setCourse(courseData);
      });
  }, []);

  console.log(course);

  return (
    <div>
      <h1 className="d-flex justify-content-center my-5">Coming Soon</h1>
      {/* <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Courses</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>Courses
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="singleBlog">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-lg-8">
              <div className="sic_details clearfix">
                <div className="postThumb">
                  <img
                    style={{
                      objectFit: "contain",
                      height: 250,
                      width: 450,
                    }}
                    src={course.thumbnail}
                    alt="basic"
                  />
                </div>
                <div className="bmeta"></div>
                <div className="sic_the_content clearfix">
                  <h2>{course.type} Course</h2>
                  {course.perks && Array.isArray(course.perks) && (
                    <ul>
                      {course.perks.map((perk, index) => (
                        <li key={index}>{perk}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CourseDetails;
