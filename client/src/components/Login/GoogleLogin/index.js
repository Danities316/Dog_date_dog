import React from "react";
import ReactDOM from "react-dom";
import {GoogleLogin} from "@react-oauth/google";
const CLIENT_ID = process.env.CLIENT_ID;

const google = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      clientId={CLIENT_ID}
    />
  );
};

export default google;
