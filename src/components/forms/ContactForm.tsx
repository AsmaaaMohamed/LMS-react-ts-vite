import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  number: Yup.string().required("Mobile Number is Requires"),
  email: Yup.string().email("Enter a valid Email").required("Email is Requires"),
  subject: Yup.string().required("Subject is Requires")
});
const ContactForm = () => {
    const formik = useFormik({
      initialValues: {
        name: "",
        number: "",
        email: "",
        subject:"",
        message:""
      },
      validationSchema:contactSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <Form className="contact-form" onSubmit={formik.handleSubmit}>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="email"
          placeholder="Your Email *"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="number"
          placeholder="Mobile Number *"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.number && formik.touched.number ? (
          <div>{formik.errors.number}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="form-group">
        <Form.Control
          type="text"
          name="subject"
          placeholder="Your Subject *"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.subject && formik.touched.subject ? (
          <Form.Control.Feedback type="invalid">
            formik.errors.subject
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>
      <Form.Group className="form-group w-100">
        <Form.Control
          rows={8}
          as="textarea"
          name="message"
          placeholder="Your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="form-group w-100 text-center">
        <Button className="lab-btn" type="submit">
          <span>Send our Message</span>
        </Button>
      </Form.Group>
    </Form>
  );
};

export default ContactForm;