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
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useState } from "react";
import actGetCoursesCategories from "@store/lms/categories/act/actGetCategories";

const Header = () => {
  const dispatch = useAppDispatch();
  const {records} = useAppSelector(state=> state.coursesCategories);
  const [categorySearch , setCategorySearch] = useState("");
  useEffect(()=>{
    dispatch(actGetCoursesCategories());
  },[dispatch]);
  const mappedOptions = records.map((record)=>{
    return (
      <option key={record.id} value={record.prefix}>{record.title}</option>
    );
  });
  const navClass = "";
  const navigate = useNavigate();
  const loginClickHandle = () => {
    navigate("/login");
  };
  const signupClickHandle = () => {
    navigate("/signup");
  };
  const handleCategorySelect = (e)=>{
    setCategorySearch(e.target.value);
    console.log(e.target.value)
  }
  return (
    <header className={navClass}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="/">
          <img src={Logo} height="52" />
        </Navbar.Brand>
        <Nav className="left-nav d-none d-xxl-flex">
          <Form.Select aria-label="Default select example" className="select-cat" value={categorySearch} onChange={(e)=>handleCategorySelect(e)}>
            <option value="all">All Categories</option>
            <option value="uncategorized">Uncategorized</option>
            {mappedOptions}
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
