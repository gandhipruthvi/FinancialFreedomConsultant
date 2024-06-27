import "../styles/CourseDetails.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import courseDetails from "../utils/coursedetails.json";
import { getImageURL } from "../utils/image-util";

const CourseDetails = () => {
  const { id } = useParams();

  const course = courseDetails.find((course) => course.id == id);

  console.log(course);

  return (
    <div className="courseDetailsPage">
      <section className="courseDetails">
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <div className="courseHeader">
                <div className="overview">
                  <div className="breadcrumbs">
                    <NavLink to="/" className="anchor">
                      <i className="twi-home-alt1"></i> Home
                    </NavLink>
                    <span> / </span>
                    <NavLink to="/academy" className="anchor">
                      Fin Market Academy
                    </NavLink>
                    <span> / </span>
                    <p className="currentPage">Course Detail</p>
                  </div>
                  <div className="courseInfo">
                    <div className="firstLine">
                      <div>
                        <i className="twi-analytics"></i>
                        {course.type}
                      </div>
                      <div>
                        <i className="twi-clock"></i>
                        {course.duration}
                      </div>
                      <div>
                        <i className="twi-star"></i>
                        {course.rating}
                      </div>
                    </div>
                  </div>
                  <h1>{course.title}</h1>
                  <Link to={`/course/${course.id}`} className="qu_btn">
                    Enroll Now
                  </Link>
                </div>
                <div className="postThumb">
                  <img src={getImageURL(course.thumbnail)} alt="basic" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg">
              <div className="courseBody">
                <div className="desc">
                  <h2>{course.outline}</h2>
                  <h4>Description:</h4>
                  <span>{course.description}</span>
                </div>
                <div className="perks">
                  <div className="d-flex">
                    <i className="twi-badge-check"></i>
                    <h3>Perks</h3>
                  </div>
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

          <div className="row">
            <div className="col-lg">
              <div className="courseContent">
                <h1>Course Content</h1>
                {course.modules && Array.isArray(course.modules) && (
                  <section>
                    {course.modules.map((module, index) => (
                      <div key={index}>{module.title}</div>
                    ))}
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
