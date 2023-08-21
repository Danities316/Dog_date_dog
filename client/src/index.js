import React from "react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import {GoogleOAuthProvider} from "@react-oauth/google";
import "./index.css";
const CLIENT_ID = process.env.CLIENT_ID;
const appElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
  appElement
);
