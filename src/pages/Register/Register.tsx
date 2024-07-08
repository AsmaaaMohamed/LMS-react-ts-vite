import { Button, Form } from "react-bootstrap";
import { PageHeader } from "@components/common";
import { Fragment } from "react";
import { useAppDispatch } from "@store/hooks";
import { actAuthRegister } from "@store/auth/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";


type TFormInput ={
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}

const Register = () => {
  const disparch = useAppDispatch();
  const {register, handleSubmit} = useForm<TFormInput>();
  const submitForm: SubmitHandler<TFormInput> = (data)=>{
    const{username , email , password , confirmPassword} = data;
    disparch(actAuthRegister({username , email , password , confirmPassword}));
    console.log(data)
  }
  return (
    <Fragment>
      <PageHeader />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Register Now</h3>
            <Form className="account-form" onSubmit={handleSubmit(submitForm)}>
              <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Control type="text" placeholder="User Name *" {...register("username")}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email *" {...register("email")}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password *" {...register("password")}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password *"
                  {...register("confirmPassword")}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button
                  variant="primary"
                  type="submit"
                  className="lab-btn d-block"
                >
                  Get Started Now
                </Button>
              </Form.Group>
            </Form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don’t Have any Account? <a href="/signup">Sign Up</a>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">Register With Social Media</h5>
              <ul className="lab-ul social-icons justify-content-center">
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
    </Fragment>
  );
};

export default Register;
