import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {login, reset} from "../../features/auth/authSlice";
import axios from "axios";
import "./signin.scss";
import Navbar from "../Navbar";
import Spinner from "../Spinner";

export default function Login() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const {username, password, password2, email} = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    } else if (isSuccess || user) {
      navigate("/dashboard");
    } else {
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="bold-line"></div>
      <div className="container">
        <div className="window">
          <div className="overlay"></div>
          <div className="content">
            <div className="welcome">Welcome Back!</div>
            <div className="subtitle">Let Your Dogs Loves it Kind.</div>
            <form action="POST">
              <div className="input-fields">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
              </div>
              <div>
                <button className="ghost-round full-width" onClick={submit}>
                  Login
                </button>
              </div>
              <br />
              OR
              <br />
              <button className="ghost-round full-width">
                {" "}
                <Link to="/signup">SignUp</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
