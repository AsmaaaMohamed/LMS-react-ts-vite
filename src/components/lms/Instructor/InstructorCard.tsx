import "./InstructorCard.css";

const InstructorCard = () => {
  return (
    <div className="instructor-item">
      <div className="instructor-inner">
        <div className="instructor-thumb">
          <img
            src="assets/images/instructor/01.jpg"
            alt="instructor rajibraj91 rajibraj"
          />
        </div>
        <div className="instructor-content">
          <a href="/team-single">
            <h4>Emilee Logan</h4>
          </a>
          <p>Master of Education Degree</p>
          <span className="ratting">
            <i className="icofont-ui-rating icofont"></i>
            <i className="icofont-ui-rating icofont"></i>
            <i className="icofont-ui-rating icofont"></i>
            <i className="icofont-ui-rating icofont"></i>
            <i className="icofont-ui-rating icofont"></i>
          </span>
        </div>
      </div>
      <div className="instructor-footer">
        <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
          <li>
            <i className="icofont-book-alt icofont"></i> 08 courses
          </li>
          <li>
            <i className="icofont-users-alt-3 icofont"></i> 30 students
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InstructorCard;
