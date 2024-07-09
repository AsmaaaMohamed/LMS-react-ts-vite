import { Fragment } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { PageHeader } from "@components/common";
import { SubmitHandler, useForm } from "react-hook-form";
import { signInSchema, signInType } from "@validations/signInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/forms";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInType>({
    mode: "onBlur",
    resolver: zodResolver(signInSchema),
  });
  const submitForm: SubmitHandler<signInType> = (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <PageHeader />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">Login</h3>
            <Form className="account-form">
              <Input
                placeHolder="User Name *"
                register={register}
                error={errors.username?.message}
                name="username"
              />
              <Input
                placeHolder="Password *"
                register={register}
                error={errors.password?.message}
                name="password"
                type="password"
              />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remamber Me"
                  className="checkgroup"
                />
                <a href="/forgetpass">Forget Password?</a>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Button
                  variant="primary"
                  type="submit"
                  className="lab-btn d-block"
                >
                  Submit Now
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
              <h5 className="subtitle">Login With Social Media</h5>
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

export default Login;
