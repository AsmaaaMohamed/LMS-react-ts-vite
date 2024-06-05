import "./PostCard.css";

const PostCard = () => {
  return (
    <div className="post-item">
      <div className="post-inner">
        <div className="post-thumb">
          <a href="/blog-single">
            <img
              src="assets/images/blog/01.jpg"
              alt="blog thumb rajibraj91 rajibraj"
            />
          </a>
        </div>
        <div className="post-content">
          <a href="/blog-single">
            <h4>Scottish Creatives To Receive Funded Business.</h4>
          </a>
          <div className="meta-post">
            <ul className="lab-ul">
              <li>
                <i className="icofont-ui-user icofont"></i>Begrass Tyson
              </li>
              <li>
                <i className="icofont-calendar icofont"></i>April 23,2022
              </li>
            </ul>
          </div>
          <p>
            Pluoresnts customize prancing apcentered customer service anding
            ands asing straelg Interacvely cordinate performe
          </p>
        </div>
        <div className="post-footer">
          <div className="pf-left">
            <a className="lab-btn-text" href="/blog-single">
              Read more <i className="icofont-external-link icofont"></i>
            </a>
          </div>
          <div className="pf-right">
            <i className="icofont-comment icofont"></i>
            <span className="comment-count text-center">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
