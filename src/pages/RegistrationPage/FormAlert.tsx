import { FieldErrors } from "react-hook-form";
import "./FormAlert.css";

interface FormAlertProps {
  errorText?: string | FieldErrors;
}

const FormAlert = ({ errorText }: FormAlertProps) => {
  return (
    <div className="form-alert-text">
      <p>{`${errorText}`}</p>
    </div>
  );
};

export default FormAlert;
