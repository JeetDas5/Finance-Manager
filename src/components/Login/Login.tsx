import person from "../../assets/person.png";
import password from "../../assets/password.png";
import email from "../../assets/email.png";
import "./Login.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [action, setAction] = useState("Login");
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function onChange() {
    setVerified(true); // set verified to true when captcha is solved
  }

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement> | React.SyntheticEvent
  ) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (action === "Sign Up") {
      if (name === "") {
        toast.error("Please enter your name");
      }
    }

    if (email === "") {
      toast.error("Please enter your email");
      return;
    }

    if (password === "") {
      toast.error("Please enter your password");
      return;
    }

    if (!verified) {
      toast.error("Please verify the captcha!");
      return;
    }
    toast.success("Submitted");
    setFormData({ name: "", email: "", password: "" }); // clear form data
  };

  const onSignUp = () => {
    toast.info("Going for Signing Up");
  };
  const onLogin = () => {
    toast.info("Going for Logging In");
  };

  return (
    <form className="login-component">
      <ToastContainer />
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
          <div className="inputs"></div>
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={person} alt="" />
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          )}

          <div className="input">
            <img src={email} alt="" />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="input">
            <img src={password} alt="" />
            <input
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forget-password">
            Forget Password? <span>Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          <div className="upper">
            <button
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign Up");
                onSignUp();
              }}
            >
              Sign Up
            </button>
            <button
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
                onLogin();
              }}
            >
              Login
            </button>
          </div>

          <div className="captcha">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_REACT_APP_SITE_KEY}
              onChange={onChange}
            />
          </div>
          <div className="lower">
            <button
              className="submit submit-btn"
              disabled={!verified}
              onClick={submitHandler}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
