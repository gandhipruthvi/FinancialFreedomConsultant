import "../Styles/Academy.scss";
import { Link, NavLink } from "react-router-dom";
import courseDetails from "../coursedetails.json";
import { getImageURL } from "../utils/image-util";

const Academy = () => {
  return (
    <div className="courses">
      <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">Fin Market Academy</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>Fin Market Academy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blogPage">
        <div className="col-lg-12 text-center">
          <div className="subTitle">
            <span className="bleft"></span>Our Courses
            <span className="bright"></span>
            <h2 className="secTitle">Financial Empowerment Solutions</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {courseDetails.map((course) => (
              <div key={course.id} className="col-lg-5 col-md-8">
                <div className="blogItem03 bbrm">
                  <div className="blogThumb">
                    <img src={getImageURL(course.thumbnail)} alt />
                  </div>
                  <div className="blogContent02">
                    <div className="bmeta">
                      <span>
                        <i className="twi-folder2"></i>
                        <Link to={`/course/${course.id}`}>{course.type}</Link>
                      </span>
                      {/* {/* |
                    <span>
                      <i className="twi-user2"></i>
                      <a href="#">David Smith</a>
                    </span>  */}
                    </div>
                    <h3>
                      <Link to={`/course/${course.id}`}>{course.title}</Link>
                    </h3>
                    <p className="outline">Course Outline: {course.outline}</p>
                    <p>{course.description}</p>
                    <Link to={`/course/${course.id}`} className="qu_btn">
                      Go to Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academy;
