import { PageHeader } from '@components/common';
import './Instructor.css';

const Instructor = () => {
  return (
    <>
        <PageHeader/>
        <section className="instructor-single-section padding-tb section-bg">
            <div className="container">
                <div className="instructor-wrapper">
                    <div className="instructor-single-top">
                        <div className="instructor-single-item d-flex flex-wrap justify-content-between">
                            <div className="instructor-single-thumb">
                                <img src="assets/images/instructor/single/01.jpg" alt="instructor"/>
                            </div>
                            <div className="instructor-single-content">
                                <h4 className="title">Emilee Logan</h4>
                                <p className="ins-dege">Master of Education Degree</p>
                                <span className="ratting">
                                    <i className="icofont-ui-rating icofont"></i>
                                    <i className="icofont-ui-rating icofont"></i>
                                    <i className="icofont-ui-rating icofont"></i>
                                    <i className="icofont-ui-rating icofont"></i>
                                    <i className="icofont-ui-rating icofont"></i>
                                </span>
                                <p className="ins-desc">Infrastruct ntrinsicl grow optimal talers rather than efectve nformaon Collabora optimize partnersh and frictionles deliverables</p>
                                <h6 className="subtitle">Personal Statement</h6>
                                <p className="ins-desc">Enthusa expedte clent focused growth strateg wherea clent centered infrastruct ntrinsicl grow optimal talers rather than efectve nformaon Collabora optimize partnersh and frictionles deliverables infrastructs ntrinsicl grow optimal talers rather efectve</p>
                                <ul className="lab-ul">
                                    <li className="d-flex flex-wrap justify-content-start">
                                        <span className="list-name">Adress</span>
                                        <span className="list-attr">Suite 02 and 07 Melbourne, Australia</span>
                                    </li>
                                    <li className="d-flex flex-wrap justify-content-start">
                                        <span className="list-name">Email</span>
                                        <span className="list-attr">emileelogan@gamil.com</span>
                                    </li>
                                    <li className="d-flex flex-wrap justify-content-start">
                                        <span className="list-name">Phone</span>
                                        <span className="list-attr">+021 548 736 982 ,01236985</span>
                                    </li>
                                    <li className="d-flex flex-wrap justify-content-start">
                                        <span className="list-name">website</span>
                                        <span className="list-attr">www.adminedukon.com</span>
                                    </li>
                                    <li className="d-flex flex-wrap justify-content-start">
                                        <span className="list-name">Follow Us</span>
                                        <ul className="lab-ul list-attr d-flex flex-wrap justify-content-start">
                                            <li>
                                                <a className="twitter" href="#">
                                                    <i className="icofont-twitter icofont"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="instagram" href="#">
                                                    <i className="icofont-instagram icofont"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="basketball" href="#">
                                                    <i className="icofont-basketball icofont"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="vimeo" href="#">
                                                    <i className="icofont-vimeo icofont"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="behance" href="#">
                                                    <i className="icofont-behance icofont"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="instructor-single-bottom d-flex flex-wrap mt-4">
                        <div className="col-xl-6 pb-5 pb-xl-0 d-flex flex-wrap justify-content-lg-start justify-content-between">
                            <h4 className="subtitle">Personal Language Skill</h4>
                            <div className="text-center skill-item">
                                <div className="skill-thumb">
                                    <div className="CircularProgressbar eng">
                                        <div className="percent">80%</div>
                                    </div>
                                </div>
                                <p>English</p>
                            </div>
                            <div className="text-center skill-item">
                                <div className="skill-thumb">
                                    <div className="CircularProgressbar hnd">
                                        <div className="percent">70%</div>
                                    </div>
                                </div>
                                <p>Hindi</p>
                            </div>
                            <div className="text-center skill-item">
                                <div className="skill-thumb">
                                    <div className="CircularProgressbar bng">
                                        <div className="percent">90%</div>
                                    </div>
                                </div>
                                <p>Bangla</p>
                            </div>
                            <div className="text-center skill-item">
                                <div className="skill-thumb">
                                    <div className="CircularProgressbar ar">
                                        <div className="percent">50%</div>
                                    </div>
                                </div>
                                <p>Arabic</p>
                            </div>
                        </div>
                        <div className="col-xl-6 d-flex flex-wrap justify-content-lg-start justify-content-between">
                            <h4 className="subtitle">Recognitions Award</h4>
                            <div className="skill-item text-center">
                                <div className="skill-thumb">
                                    <img src="assets/images/instructor/single/icon/01.png" alt="instructor"/>
                                </div>
                                <p>Award 2018</p>
                            </div>
                            <div className="skill-item text-center">
                                <div className="skill-thumb">
                                    <img src="assets/images/instructor/single/icon/02.png" alt="instructor"/>
                                </div>
                                <p>Award 2019</p>
                            </div>
                            <div className="skill-item text-center">
                                <div className="skill-thumb">
                                    <img src="assets/images/instructor/single/icon/03.png" alt="instructor"/>
                                </div>
                                <p>Award 2020</p>
                            </div>
                            <div className="skill-item text-center">
                                <div className="skill-thumb">
                                    <img src="assets/images/instructor/single/icon/04.png" alt="instructor"/>
                                </div>
                                <p>Award 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Instructor;