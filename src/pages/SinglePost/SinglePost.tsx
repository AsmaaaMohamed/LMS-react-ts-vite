import { Fragment } from "react";
import "./SinglePost.css";
import { PageHeader } from "@components/common";
import Author from "../Author";
import Comment from "../Comment";
import SearchWidget from "../SearchWidget";
import PostCategorWidget from "../PostCategorWidget";
import PostPopularWidget from "../PostPopularWidget";
import ArchiveWidget from "../ArchiveWidget";
import GalleryWidget from "../GalleryWidget";
import PopularTagWidget from "../PopularTagWidget";

const SinglePost = () => {
  return (
    <Fragment>
      <PageHeader />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-thumb">
                            <img
                              src="assets/images/blog/single/01.jpg"
                              alt="blog thumb rajibraj91"
                              className="w-100"
                            />
                          </div>
                          <div className="post-content">
                            <h2>Interactively Morph High Standards Anding</h2>
                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li>
                                  <a href="#">
                                    <i className="icofont-calendar icofont"></i>
                                    April 23,2021
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icofont-ui-user icofont"></i>
                                    Rajib Raj
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="icofont-speech-comments icofont"></i>
                                    09 Comments
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p>
                              Serenity hasir taken poseson mying entre soung
                              these sweet morngs sprng whch enoywith whole heart
                              create am alones and feel the charm of exstenceth
                              spot whch the blissouls like mineing am soo happy
                              my dearsi frend absoribed the exquste sense enjoy
                              my whole hearts alone and fee the charm of
                              exstenceths spotsi whch was the blis of soulis
                              mineing amsoing dear frend soingu absoribed the
                              exqust sense tranqui existence neglect my talentsr
                              should ncapable ofing is drawng singe wonderful
                              serenty has taken possesison of my entre soulng
                              these sweet present moment and yet feel that never
                              was greater artst
                            </p>
                            <blockquote>
                              <p>
                                Dynamically recaptiualize distributed
                                technologies is wherease turnkey channels and
                                onotonectally provide access to resource
                                leveling expertise vias worldwide deliverables
                                uolisticly extend aserser are diverse vortals.{" "}
                              </p>
                              <cite>
                                <a href="#">...Melissa Hunter</a>
                              </cite>
                            </blockquote>
                            <p>
                              whole heart create am alones and feel the charm of
                              exstenceth spot whch the blissouls like mineing am
                              soo happy my dearsi frend absoribed the exquste
                              sense enjoy my whole hearts alone and fee the
                              charm of exstenceths spotsi whch was the blis of
                              soulis mineing amsoing dear frend soingu absoribed
                              the exqust sense tranqui existence neglect my
                              talentsr should ncapable ofing is drawng singe
                              wonderful serenty has taken possesison of my entre
                              soulng these sweet present moment and yet feel
                              that never was greater artst
                            </p>
                            <img
                              src="assets/images/blog/single/02.jpg"
                              alt="rajibraj91"
                            />
                            <p>
                              Serenity hasir taken poseson mying entre soung
                              these sweet morngs sprng whch enoywith whole heart
                              create am alones and feel the charm of exstenceth
                              spot whch the blissouls like mineing am soo happy
                              my dearsi frend absoribed the exquste sense enjoy
                              my whole hearts alone and fee the charm of
                              exstenceths spotsi whch was the blis of soulis
                              mineing amsoing dear frend soingu absoribed the
                              exqust sense tranqui existence neglect my talentsr
                              should ncapable ofing is drawng singe wonderful
                              serenty has taken possesison of my entre soulng
                              these sweet present moment and yet feel that never
                              was greater artst
                            </p>
                            <div className="video-thumb">
                              <img
                                src="assets/images/blog/single/03.jpg"
                                alt="video"
                              />
                              <a
                                href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                                className="video-button popup"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icofont-ui-play icofont"></i>
                              </a>
                            </div>
                            <p>
                              whole heart create am alones and feel the charm of
                              exstenceth spot whch the blissouls like mineing am
                              soo happy my dearsi frend absoribed the exquste
                              sense enjoy my whole hearts alone and fee the
                              charm of exstenceths spotsi whch was the blis of
                              soulis mineing amsoing dear frend soingu absoribed
                              the exqust sense tranqui existence neglect my
                              talentsr should ncapable ofing is drawng singe
                              wonderful serenty has taken possesison of my entre
                              soulng these sweet present moment and yet feel
                              that never was greater artst
                            </p>
                            <div className="tags-section">
                              <ul className="tags lab-ul">
                                <li>
                                  <a href="#">Agency</a>
                                </li>
                                <li>
                                  <a href="#">Business</a>
                                </li>
                                <li>
                                  <a href="#">Personal</a>
                                </li>
                              </ul>
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
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className="prev">
                            <i className="icofont-double-left icofont"></i>
                            Previous Article
                          </a>
                          <a href="#" className="title">
                            Evisculate Parallel Processes via Technica Sound
                            Models Authoritative
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className="prev">
                            Next Article
                            <i className="icofont-double-right icofont"></i>
                          </a>
                          <a href="#" className="title">
                            Qvisculate Parallel Processes via Technica Sound
                            Models Authoritative
                          </a>
                        </div>
                      </div>
                      <Author />
                      <Comment />
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <SearchWidget />
                <PostCategorWidget />
                <PostPopularWidget />
                <ArchiveWidget />
                <GalleryWidget />
                <PopularTagWidget />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SinglePost;
