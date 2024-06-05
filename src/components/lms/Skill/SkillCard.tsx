import "./SkillCard.css";

const SkillCard = () => {
  return (
    <div className="skill-item">
      <div className="skill-inner">
        <div className="skill-thumb">
          <img
            src="assets/images/skill/icon/01.jpg"
            alt="skill rajibraj91 rajibraj"
          />
        </div>
        <div className="skill-content">
          <h5>Skilled Instructors</h5>
          <p>You pick the schedule.</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
