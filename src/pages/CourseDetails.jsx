import "../styles/CourseDetails.scss";
import { NavLink, useParams } from "react-router-dom";
import courseDetails from "../utils/coursedetails.json";
import { getImageURL } from "../utils/image-util";

const CourseDetails = () => {
  const { id } = useParams();

  const course = courseDetails.find((course) => course.id == id);

  console.log(course);

  return (
    <div className="courseDetails">
      <section className="page_banner">
        <div className="container largeContainer">
          <div className="row">
            <div className="col-md-6">
              <h2 className="banner-title">{course.title}</h2>
            </div>
            <div className="col-md-6 text-right">
              <p className="breadcrumbs">
                <NavLink to="/" className="anchor">
                  <i className="twi-home-alt1"></i>Home
                </NavLink>
                <span>/</span>
                Course Deatils
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
                  <img src={getImageURL(course.thumbnail)} alt="basic" />
                </div>
                <div className="bmeta"></div>
                <div className="sic_the_content clearfix">
                  <h2>{course.title}</h2>
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
      </section>
    </div>
  );
};

export default CourseDetails;
