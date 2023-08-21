import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import {register, reset} from "../../features/auth/authSlice";
import "./signin.scss";
import Navbar from "../Navbar";
import Spinner from "../Spinner";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
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
      navigate("/onboarding");
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

  const submit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Password do not Match!");
    } else {
      const userData = {
        username,
        email,
        password,
      };
      dispatch(register(userData));
    }
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
            <div className="welcome">Hello There!</div>
            <div className="subtitle">
              We're almost done. Before using our services you need to create an
              account.
            </div>
            <form action="POST">
              <div className="input-fields">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirmed Password"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
              </div>
              <div className="spacing">
                Already Have An Account <span className="highlight">Login</span>
              </div>
              <div>
                <button className="ghost-round full-width" onClick={submit}>
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
