import "./LoginForm.css";

interface LogInFormProps {
  label?: string;
  userImage?: string;
  passwordImage?: string;
  bottomText?: string;
  passwordText?: string;
  signUpLink?: string;
}

const LogInForm = ({
  label,
  userImage,
  passwordImage,
  bottomText,
  passwordText,
  signUpLink,
}: LogInFormProps) => {
  return (
    <form className="login-form-wrapper">
      <div className="login-form">
        <div className="login-title">
          {label}
          <div className="line"></div>
        </div>
        <div className="login-form-input">
          <div className="single-input">
            <img src={userImage}></img>
            <input type="text" placeholder="Username" />
          </div>
          <div className="single-input">
            <img src={passwordImage}></img>
            <input type="password" placeholder="password" />
          </div>
          <div className="login-text">
            <a href="#">{passwordText}</a>
          </div>
          <button type="submit">Log In</button>
        </div>
        <div className="login-text-bottom">
          {bottomText} <a href={signUpLink}>SignUp</a>
        </div>
      </div>
    </form>
  );
};

export default LogInForm;
