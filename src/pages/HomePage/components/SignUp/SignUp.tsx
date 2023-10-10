import { useEffect, useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const toggleLogin = () => setIsLoginVisible((prevState) => !prevState);

  useEffect(() => {
    const closeWindow = () => setIsLoginVisible(false);

    if (isLoginVisible) document.body.addEventListener("click", closeWindow);

    return () => document.body.removeEventListener("click", closeWindow);
  }, [isLoginVisible]);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <button onClick={toggleLogin}>
        <img
          className="icon2"
          alt=""
          src="https://0.soompi.io/soompi-web/profile.4efeec85367895e536de20b147998d75.svg"
        />
      </button>

      {isLoginVisible && (
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="password" />
          <div className="login-buttons">
            <button>Log in</button>
            <button>Sign up</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignUp;
