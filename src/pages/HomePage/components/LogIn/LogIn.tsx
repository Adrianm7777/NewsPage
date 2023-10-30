import { useEffect, useState } from "react";
import LinkImg from "../LinkImg/LinkImg";
import LogInForm from "./LogInForm";

const LogIn = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const closeWindow = () => setIsFormVisible(false);

    if (isFormVisible) document.body.addEventListener("click", closeWindow);

    return () => document.body.removeEventListener("click", closeWindow);
  }, [isFormVisible]);

  const toggleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsFormVisible((prevState) => !prevState);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <LinkImg
        onClick={(e) => toggleLogin(e)}
        className={"icon2"}
        alt=""
        src="https://0.soompi.io/soompi-web/profile.4efeec85367895e536de20b147998d75.svg"
      />

      {isFormVisible && (
        <LogInForm
          label="Login"
          passwordImage="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-512.png"
          userImage="https://cdn-icons-png.flaticon.com/512/5509/5509636.png"
          bottomText="Don't have an account?"
          passwordText="Forgot password?"
          signUpLink="/registration"
        />
      )}
    </div>
  );
};
export default LogIn;
