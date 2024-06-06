import CategoryImg from "/public/assets/images/media/01.a6ef2cb5c25e0b206db0.jpg";
import "./PopularCategory.css";

const PopularCategory = () => {
  return (
    <div className="category-item text-center">
      <div
        className="category-inner"
        style={{ background: `url(${CategoryImg})`, backgroundSize: "cover" }}
      >
        <div className="category-thumb">
          <img
            src="assets/images/category/icon/07.jpg"
            alt="category rajibraj91 rajibraj"
          />
        </div>
        <div className="category-content">
          <a href="/">
            <h6>Computer Science</h6>
          </a>
          <span>24 Course</span>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
