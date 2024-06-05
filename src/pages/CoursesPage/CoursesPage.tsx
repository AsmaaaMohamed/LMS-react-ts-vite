import { Fragment } from "react";
import CustomFilter from "../CustomFilter";
import { PageHeader } from "@components/common";
import CourseCard from "../CourseCard";
import { Form } from "react-bootstrap";
import "./CoursesPage.css";

const CoursesPage = () => {
  return (
    <Fragment>
      <PageHeader />
      <CustomFilter />
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Featured Courses</span>
            <h2 className="title">Pick A Course To Get Started</h2>
          </div>
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-showing-part-left">
                  <p>Showing 1-6 of 10 results</p>
                </div>
                <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                  <span>Sort by :</span>
                  <div className="select-item">
                    <Form.Select aria-label="Default select example">
                      <option value="all">All Skills</option>
                      <option value="css">CSS</option>
                      <option value="php">PHP</option>
                      <option value="html">HTML</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
              <div className="col">
                <CourseCard />
              </div>
              <div className="col">
                <CourseCard />
              </div>
              <div className="col">
                <CourseCard />
              </div>
              <div className="col">
                <CourseCard />
              </div>
              <div className="col">
                <CourseCard />
              </div>
              <div className="col">
                <CourseCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoursesPage;
