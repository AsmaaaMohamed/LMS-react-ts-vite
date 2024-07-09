import { Form } from "react-bootstrap";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<TFieldValue extends FieldValues> = {
  placeHolder: string;
  name: Path<TFieldValue>;
  type?:string;
  register:UseFormRegister<TFieldValue>;
  error?:string;  
}
const Input = <TFieldValue extends FieldValues>({placeHolder , type="text" , register , name , error}:InputProps<TFieldValue>) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicUserName">
      <Form.Control
        type={type}
        placeholder={placeHolder}
        {...register(name)}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid" className="d-block">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default Input