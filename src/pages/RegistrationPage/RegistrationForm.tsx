import { useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form/dist/types";
import FormAlert from "./FormAlert";

interface RegistrationFormProps {
  label?: string;
  signUptoggle?: () => void;
  bottomText?: string;
  href?: string;
  hidePasswordImg?: string;
  showPasswordImg?: string;
}

const RegistrationForm = ({
  bottomText,
  href,
  label,
  signUptoggle,
  hidePasswordImg,
  showPasswordImg,
}: RegistrationFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const [showCreatePassword, setShowCreatePassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowCreatePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowCreatePassword((prevState) => !prevState);
  };

  const toggleShowConfirmPassword = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setShowConfirmPassword((prevState) => !prevState);
  };

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signup-form">
        <div className="signup-title">{label}</div>
        <div className="signup-inputs">
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <FormAlert errorText={errors.email.message?.toString()} />
          )}
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: "username is required" })}
          />
          {errors.username && (
            <FormAlert errorText={errors.username.message?.toString()} />
          )}
          <div className="signup-input-password">
            <input
              type={showCreatePassword ? "text" : "password"}
              placeholder="Create password"
              {...register("createPassword", {
                required: "Password required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            <button onClick={toggleShowCreatePassword}>
              <img
                src={showCreatePassword ? showPasswordImg : hidePasswordImg}
              ></img>
            </button>
          </div>
          {errors.createPassword && (
            <FormAlert errorText={errors.createPassword.message?.toString()} />
          )}
          <div className="signup-input-password">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === getValues("createPassword") ||
                  "Passwords must match",
              })}
            />

            <button type="button" onClick={toggleShowConfirmPassword}>
              <img
                src={showConfirmPassword ? showPasswordImg : hidePasswordImg}
              ></img>
            </button>
          </div>
          {errors.confirmPassword && (
            <FormAlert errorText={errors.confirmPassword.message?.toString()} />
          )}
        </div>
        <div className="signup-button">
          <button type="submit" onClick={signUptoggle} disabled={isSubmitting}>
            Sign up
          </button>
        </div>

        <div className="signup-text-bottom">
          {bottomText}
          <a href={href}>Login</a>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
