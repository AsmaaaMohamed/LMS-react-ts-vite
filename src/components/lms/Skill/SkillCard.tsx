import "./SkillCard.css";

const SkillCard = ({title , desc , icon}) => {
  return (
    <div className="skill-item">
      <div className="skill-inner">
        <div className="skill-thumb">
          <img
            src={icon}
            alt="skill rajibraj91 rajibraj"
          />
        </div>
        <div className="skill-content">
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
