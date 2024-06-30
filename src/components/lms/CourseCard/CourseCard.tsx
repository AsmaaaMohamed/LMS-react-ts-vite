import "./CourseCard.css";
import { Link } from "react-router-dom";

const CourseCard = ({title , instructor , price , img}) => {
  return (
    <div className="course-item">
      <div className="course-inner">
        <div className="course-thumb">
          <img
            src={img}
            alt="course rajibraj91 rajibraj"
          />
          <div className="course-price">${price}</div>
        </div>
        <div className="course-content">
          <div className="course-category">
            <div className="course-cate">
              <a href="#">Adobe XD</a>
            </div>
            <div className="course-reiew">
              <span className="ratting">
                <i className="icofont-ui-rating icofont"></i>
                <i className="icofont-ui-rating icofont"></i>
                <i className="icofont-ui-rating icofont"></i>
                <i className="icofont-ui-rating icofont"></i>
                <i className="icofont-ui-rating icofont"></i>
              </span>
              <span className="ratting-count">03 reviews</span>
            </div>
          </div>
          <Link to="/course-details">
            <h4>{title}</h4>
          </Link>
          <div className="course-details">
            <div className="couse-count">
              <i className="icofont-video-alt icofont"></i> 18x Lesson
            </div>
            <div className="couse-topic">
              <i className="icofont-signal icofont"></i>Online Class
            </div>
          </div>
          <div className="course-footer">
            <div className="course-author">
              <img
                src="assets/images/course/author/02.jpg"
                alt="course author rajibraj91 rajibraj"
              />
              <a className="ca-name" href="/team-single">
                {instructor}
              </a>
            </div>
            <div className="course-btn">
              <Link className="lab-btn-text" to="/course-details">
                Read More
                <i className="icofont-external-link icofont"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
