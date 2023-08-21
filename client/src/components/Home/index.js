import React, {useState} from "react";
import {useDispatch} from "react-redux";
import AuthModel from "../AuthModel";
import Navbar from "../Navbar";
import "../../App.scss";

export default function Home() {
  const [showModel, setShowModel] = useState(false);
  let authToken = true;

  const handleClick = (event) => {
    // event.preventDefault()
    console.log("clicked");
    setShowModel(true);
  };
  return (
    <div className="overlay">
      <Navbar
        minimal={true}
        authToken={false}
        setShowModel={setShowModel}
        showModel={showModel}
      />
      <div className="home">
        <h1>Swipe right</h1>
        <button className="primary-button" onClick={handleClick}>
          {authToken ? "signin" : "Create Account"}
        </button>

        {showModel && <AuthModel setShowModel={setShowModel} />}
      </div>
    </div>
  );
}
