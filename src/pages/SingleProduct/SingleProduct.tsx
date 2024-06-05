import { Fragment } from "react";
import "./SingleProduct.css";
import { SearchWidget } from "@components/common";
import PostPopularWidget from "@components/blog/PostPopularWidget/PostPopularWidget";
import PopularTagWidget from "@components/blog/Tag/PopularTagWidget";
import ProductCategoryWidget from "@components/ecommerce/Product/ProductCategoryWidget/ProductCategoryWidget";
import { PageHeader } from "@components/common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SingleProduct = () => {
  return (
    <Fragment>
      <PageHeader />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                            loop={true}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                          >
                            <SwiperSlide>
                              <img src="assets/images/shop/04.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="assets/images/shop/03.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="assets/images/shop/02.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img src="assets/images/shop/01.jpg" />
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <h4>The Title here</h4>
                        <p className="rating">
                          <i className="icofont-star icofont"></i>
                          <i className="icofont-star icofont"></i>
                          <i className="icofont-star icofont"></i>
                          <i className="icofont-star icofont"></i>
                          <i className="icofont-star icofont"></i>(3 review)
                        </p>
                        <h4>$ 340.00</h4>
                        <h6>Product Description</h6>
                        <p>
                          Energistia an deliver atactica metrcs after avsionary
                          Apropria trnsition enterpris an sources applications
                          emerging psd template.
                        </p>
                        <form>
                          <div className="select-product size">
                            <select>
                              <option>Select Size</option>
                              <option>SM</option>
                              <option>MD</option>
                              <option>LG</option>
                              <option>XL</option>
                              <option>XXL</option>
                            </select>
                            <i className="icofont-rounded-down icofont"></i>
                          </div>
                          <div className="select-product color">
                            <select>
                              <option>Select Color</option>
                              <option>Pink</option>
                              <option>Ash</option>
                              <option>Red</option>
                              <option>White</option>
                              <option>Blue</option>
                            </select>
                            <i className="icofont-rounded-down icofont"></i>
                          </div>
                          <div className="cart-plus-minus">
                            <div className="dec qtybutton">-</div>
                            <input
                              className="cart-plus-minus-box"
                              type="text"
                              name="qtybutton"
                              value="1"
                            />
                            <div className="inc qtybutton">+</div>
                          </div>
                          <div className="discount-code">
                            <input
                              type="text"
                              placeholder="Enter Discount Code"
                            />
                          </div>
                          <button type="submit" className="lab-btn">
                            <span>Add To Cart</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review">
                  <ul className="review-nav lab-ul RevActive">
                    <li className="desc">Description</li>
                    <li className="rev">Reviews 4</li>
                  </ul>
                  <div className="review-content review-content-show">
                    <div className="review-showing">
                      <ul className="content lab-ul">
                        <li>
                          <div className="post-thumb">
                            <img
                              src="assets/images/instructor/01.jpg"
                              alt="Client thumb"
                            />
                          </div>
                          <div className="post-content">
                            <div className="entry-meta">
                              <div className="posted-on">
                                <a href="#">Ganelon Boileau</a>
                                <p>Posted on Jun 10, 2022 at 6:57 am</p>
                              </div>
                              <span className="ratting">
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                              </span>
                            </div>
                            <div className="entry-content">
                              <p>
                                Enthusiast build innovativ initiatives before
                                lonterm high-impact awesome theme seo psd porta
                                monetize covalent leadership after without
                                resource.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            <img
                              src="assets/images/instructor/02.jpg"
                              alt="Client thumb"
                            />
                          </div>
                          <div className="post-content">
                            <div className="entry-meta">
                              <div className="posted-on">
                                <a href="#">Morgana Cailot</a>
                                <p>Posted on Jun 10, 2022 at 6:57 am</p>
                              </div>
                              <span className="ratting">
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                              </span>
                            </div>
                            <div className="entry-content">
                              <p>
                                Enthusiast build innovativ initiatives before
                                lonterm high-impact awesome theme seo psd porta
                                monetize covalent leadership after without
                                resource.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            <img
                              src="assets/images/instructor/03.jpg"
                              alt="Client thumb"
                            />
                          </div>
                          <div className="post-content">
                            <div className="entry-meta">
                              <div className="posted-on">
                                <a href="#">Telford Bois</a>
                                <p>Posted on Jun 10, 2022 at 6:57 am</p>
                              </div>
                              <span className="ratting">
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                              </span>
                            </div>
                            <div className="entry-content">
                              <p>
                                Enthusiast build innovativ initiatives before
                                lonterm high-impact awesome theme seo psd porta
                                monetize covalent leadership after without
                                resource.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            <img
                              src="assets/images/instructor/04.jpg"
                              alt="Client thumb"
                            />
                          </div>
                          <div className="post-content">
                            <div className="entry-meta">
                              <div className="posted-on">
                                <a href="#">Cher Daviau</a>
                                <p>Posted on Jun 10, 2022 at 6:57 am</p>
                              </div>
                              <span className="ratting">
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                                <i className="icofont-ui-rating icofont"></i>
                              </span>
                            </div>
                            <div className="entry-content">
                              <p>
                                Enthusiast build innovativ initiatives before
                                lonterm high-impact awesome theme seo psd porta
                                monetize covalent leadership after without
                                resource.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="client-review">
                        <div className="review-form">
                          <div className="review-title">
                            <h5>Add a Review</h5>
                          </div>
                          <form action="action" className="row">
                            <div className="col-md-4 col-12">
                              <input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                              />
                            </div>
                            <div className="col-md-4 col-12">
                              <input
                                type="text"
                                name="email"
                                placeholder="Your Email *"
                              />
                            </div>
                            <div className="col-md-4 col-12">
                              <div className="rating">
                                <span className="rating-title">
                                  Your Rating :{" "}
                                </span>
                                <span className="ratting">
                                  <i className="icofont-ui-rating icofont"></i>
                                  <i className="icofont-ui-rating icofont"></i>
                                  <i className="icofont-ui-rating icofont"></i>
                                  <i className="icofont-ui-rating icofont"></i>
                                  <i className="icofont-ui-rating icofont"></i>
                                </span>
                              </div>
                            </div>
                            <div className="col-md-12 col-12">
                              <textarea
                                rows="8"
                                type="text"
                                name="message"
                                placeholder="Type Here Message"
                              ></textarea>
                            </div>
                            <div className="col-12">
                              <button className="default-button" type="submit">
                                <span>Submit Review</span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                      <div className="post-item">
                        <div className="post-thumb">
                          <img src="assets/images/shop/01.jpg" alt="shop" />
                        </div>
                        <div className="post-content">
                          <ul className="lab-ul">
                            <li>Donec non est at libero vulputate rutrum.</li>
                            <li>
                              Morbi ornare lectus quis justo gravida semper.
                            </li>
                            <li>
                              Pellentesque aliquet, sem eget laoreet ultrices.
                            </li>
                            <li>
                              Nulla tellus mi, vulputate adipiscing cursus eu,
                              suscipit id nulla.
                            </li>
                            <li>Donec a neque libero.</li>
                            <li>
                              Pellentesque aliquet, sem eget laoreet ultrices.
                            </li>
                            <li>
                              Morbi ornare lectus quis justo gravida semper..
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-7 col-12">
              <aside className="ps-lg-4">
                <SearchWidget />
                <ProductCategoryWidget />
                <PostPopularWidget />
                <PopularTagWidget />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProduct;
