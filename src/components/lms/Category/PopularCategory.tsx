import TCourseCategory from "@customTypes/courseCategory";
import "./PopularCategory.css";

type TPopularCategoryProps = TCourseCategory;
const PopularCategory = ({title, icon, img}: TPopularCategoryProps) => {
  return (
    <div className="col">
      <div className="category-item text-center">
        <div
          className="category-inner"
          style={{ background: `url(${img})`, backgroundSize: "cover" }}
        >
          <div className="category-thumb">
            <img
              src={icon}
              alt="category rajibraj91 rajibraj"
            />
          </div>
          <div className="category-content">
            <a href="/">
              <h6>{title}</h6>
            </a>
            <span>24 Course</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
