import RegistrationForm from "./RegistrationForm";
import "./RegistrationPage.css";

const RegistrationPage = () => (
  <div className="signup-form-wrapper">
    <RegistrationForm
      bottomText="Already have an account?"
      href="/"
      label="Sign Up"
      hidePasswordImg="https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png"
      showPasswordImg="https://cdn-icons-png.flaticon.com/512/6803/6803345.png"
    />
  </div>
);

export default RegistrationPage;
