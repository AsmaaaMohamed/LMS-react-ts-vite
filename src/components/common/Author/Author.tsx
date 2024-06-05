import "./Author.css";

const Author = () => {
  return (
    <div className="authors">
      <div className="author-thumb">
        <img src="assets/images/author/01.jpg" alt="rajibraj91" />
      </div>
      <div className="author-content">
        <h5>Rajib Raj</h5>
        <span>Assistant Teacher</span>
        <p>
          I am an Afro-Latina digital artist originally from Long Island, NY. I
          love to paint design and photo manpulate in Adobe Photoshop while
          helping others learn too. Follow me on Instagram or tweet me
        </p>
        <ul className="lab-ul social-icons">
          <li>
            <a href="#" className="facebook">
              <i className="icofont-facebook icofont"></i>
            </a>
          </li>
          <li>
            <a href="#" className="twitter">
              <i className="icofont-twitter icofont"></i>
            </a>
          </li>
          <li>
            <a href="#" className="linkedin">
              <i className="icofont-linkedin icofont"></i>
            </a>
          </li>
          <li>
            <a href="#" className="instagram">
              <i className="icofont-instagram icofont"></i>
            </a>
          </li>
          <li>
            <a href="#" className="pinterest">
              <i className="icofont-pinterest icofont"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Author;
