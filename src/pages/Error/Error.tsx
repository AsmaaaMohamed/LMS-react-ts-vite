
import './Error.css';
const Error = () => {
  return (
    <div className="four-zero-section padding-tb section-bg">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="four-zero-content">
                        <a href="/">
                            <img src="/logo.png" alt="CodexCoder"/>
                        </a>
                        <h2 className="title">Error 404!</h2>
                        <p>Oops! The Page You Are Looking For Could Not Be Found</p>
                        <a className="lab-btn" href="/">
                            <span>Go Back To Home <i className="icofont-external-link icofont"></i></span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-6 col-12">
                    <div className="foue-zero-thumb">
                        <img src="assets/images/404.png" alt="CodexCoder"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error;