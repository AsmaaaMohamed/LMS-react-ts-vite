//* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import Logo from "/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { InputGroup } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const navClass = "";
  const navigate = useNavigate();
  const loginClickHandle = () => {
    navigate("/login");
  };
  const signupClickHandle = () => {
    navigate("/signup");
  };
  return (
    <header className={navClass}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="/">
          <img src={Logo} height="52" />
        </Navbar.Brand>
        <Nav className="left-nav d-none d-xxl-flex">
          <Form.Select aria-label="Default select example">
            <option value="all">All Categories</option>
            <option value="uncategorized">Uncategorized</option>
            <option value="academy">Academy</option>
            <option value="agency">Agency</option>
            <option value="app">App</option>
            <option value="bar">Bar</option>
            <option value="blog">Blog</option>
            <option value="business">Business</option>
            <option value="butcher-shop">Butcher Shop</option>
            <option value="cafe">Cafe</option>
            <option value="charity-2">Charity</option>
            <option value="church">Church</option>
            <option value="clinic">clinic</option>
            <option value="college">College</option>
            <option value="conference">Conference</option>
            <option value="construction">Construction</option>
            <option value="corona-virus">Corona Virus</option>
            <option value="corporate">Corporate</option>
            <option value="covid19">Covid19</option>
            <option value="digital-products">Digital Products</option>
            <option value="doctors">doctors</option>
            <option value="ecological">Ecological</option>
            <option value="education">Education</option>
            <option value="entertainment">Entertainment</option>
            <option value="environment">Environment</option>
            <option value="environmental">Environmental</option>
            <option value="events">Events</option>
            <option value="fitness">Fitness</option>
            <option value="food-shop">Food Shop</option>
            <option value="free">Free</option>
            <option value="gym">Gym</option>
            <option value="halloween">Halloween</option>
            <option value="health">health</option>
            <option value="healthcare">healthcare</option>
            <option value="learnpress">learnpress</option>
            <option value="meat-shop">Meat Shop</option>
            <option value="medical">medical</option>
            <option value="medical-prevention">Medical Prevention</option>
            <option value="meetup">Meetup</option>
            <option value="mobile-apps">Mobile Apps</option>
            <option value="music">Music</option>
            <option value="news">News</option>
            <option value="nonprofit">Nonprofit</option>
            <option value="onepage">Onepage</option>
            <option value="online-course">Online Course</option>
            <option value="personal-blog">Personal Blog</option>
            <option value="portfolio">Portfolio</option>
            <option value="pregnancy">pregnancy</option>
            <option value="premium">premium</option>
            <option value="psd">psd</option>
            <option value="religion">Religion</option>
            <option value="restaurants">Restaurants</option>
            <option value="school">School</option>
            <option value="seo">SEO</option>
            <option value="software">Software</option>
            <option value="startups">Startups</option>
            <option value="university">University</option>
            <option value="vcard">Vcard</option>
            <option value="woocommerce">WooCommerce</option>
            <option value="yoga">Yoga</option>
            <option value="magazine">Magazine</option>
            <option value="event-wordpress">Event</option>
          </Form.Select>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search Here ..."
                className=""
                aria-label="Search"
              />
              <Button variant="outline-secondary" id="button-addon1">
                <i className="icofont-search icofont"></i>
              </Button>
            </InputGroup>
          </Form>
        </Nav>

        <Nav className="right-nav ms-auto">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/courses">
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="#action4">
                  Instructor
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/shop">
                  Shop
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cart">
                  Cart
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="btns-container d-none d-md-flex">
            <Button className="login" onClick={loginClickHandle}>
              <i className="icofont-user icofont"></i>Log in
            </Button>
            <Button className="signup" onClick={signupClickHandle}>
              <i className="icofont-users icofont"></i>Sign up
            </Button>
          </Nav>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
