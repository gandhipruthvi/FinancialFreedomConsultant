import "../Styles/Courses.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import courseimage1 from "../assets/bg/academy.jpg";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/coursedetails");
  };
  return (
    <div className="courses">
      <section className="page_banner">
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

      <section className="blogPage">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-8">
              <div className="blogItem03 bbrm">
                <div className="blogThumb">
                  <img
                    style={{ objectFit: "contain", paddingLeft: 40 }}
                    src={courseimage1}
                    alt
                  />
                </div>
                <div className="blogContent02">
                  <div className="bmeta">
                    <span>
                      <i className="twi-folder2"></i>
                      <a href="#">Basic Course</a>
                    </span>
                    {/* |
                    <span>
                      <i className="twi-user2"></i>
                      <a href="#"></a>
                    </span> */}
                  </div>
                  <h3>
                    <a href="single-blog.html">
                      Foundations of Financial Markets
                    </a>
                  </h3>
                  <p className="outline">
                    Course Outline: Introduction to Financial Markets
                  </p>
                  <p>
                    This 5-week Basic Course offers a comprehensive introduction
                    to the world of trading. Students will gain a solid
                    understanding of different market types and learn the
                    essential techniques for technical and fundamental analysis.
                    The course also covers various trading platforms and
                    provides hands-on experience through demo trading on live
                    markets.
                  </p>
                  <a className="rm_more">Go to Course</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="blogItem03 bbrm">
                <div className="blogThumb">
                  <img
                    style={{ objectFit: "contain", paddingLeft: 40 }}
                    src={courseimage1}
                    alt
                  />
                </div>
                <div className="blogContent02">
                  <div className="bmeta">
                    <span>
                      <i className="twi-folder2"></i>
                      <a href="#">Advanced Course</a>
                    </span>
                    {/* |
                    <span>
                      <i className="twi-user2"></i>
                      <a href="#">David Smith</a>
                    </span> */}
                  </div>
                  <h3>
                    <a href="single-blog.html">Financial Markets Deep Dive</a>
                  </h3>
                  <p className="outline">
                    Course Outline: Mastering Financial Markets
                  </p>
                  <p>
                    Introducing our comprehensive 10-week trading course
                    designed to take you from novice to confident trader. In
                    this program, we’ll dive into the world of financial
                    markets, covering various market types and their functions.
                    You’ll gain a deep understanding of advanced technical and
                    fundamental analysis techniques, crucial for informed
                    decision-making.
                  </p>
                  <a className="rm_more" onClick={handleOnClick}>
                    Go to Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
