const express = require("express");
const cors = require("cors");
const passport = require("passport");
const expressJwt = require("express-jwt");
// const composable_middleware = require("composable-middleware");
const LocalStrategy = require("passport-local");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const usersRoute = require("./route/usersRoute");
const dogRoutes = require("./route/dogsRoute");
const {errorHandler} = require("./middleware/errorMiddleware");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// mongo connection
require("./config/database/connection.js");

app.use(
  cors({
    origin: "http://localhost:5000",
    credential: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser(process.env.SESSION_SECRET)); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.use("/dogs", dogRoutes);
app.use("/users", usersRoute);

//--------------------------------Middleware------------------------------------------
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
