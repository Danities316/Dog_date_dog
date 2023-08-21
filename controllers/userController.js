const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const {v4: uuidv4} = require("uuid");
require("dotenv").config();

//@desc     Regster new User
//@route    POST /api/users/register
//@access   Public
const registerUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("Please provide credentials");
    }
    // const userId = uuidv4();
    //Check if User already Exists
    const userExits = await User.findOne({email});
    // console.log(userExits);
    if (userExits) {
      res
        .status(400)
        .json({success: false, msg: `User with ${email}, already exists.`});
    } else {
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      // console.log(hashPassword)
      const user = await User.create({
        email,
        password: hashPassword,
      });
      // console.log("This is the users dettails: ", user._id.toString());
      if (!user) {
        res.status(400);
        throw new Error("Invalid User data");
      }

      res.status(201).json({
        success: true,
        msg: "User is successfully created",
        _id: user._id.toString(),
        email,
        token: generateToken(user._id.toString()),
      });
    }
  } catch (error) {
    console.log("The error from register route is: ", error);
    res.status(500).json({
      success: false,
      message: "Error creating User profile",
      error: error,
    });
  }
};

//@desc     Authenticate new User
//@route    POST /api/user/login
//@access   Public
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      throw new Error("Please provide your login credentials");
    }

    const user = await User.findOne({email});

    if (user == null) {
      res.status(400);
      throw new Error("Invalid Email");
    }

    // console.log(user)
    //Compare the user password with the hashed password on the DB
    let hashPassword = await bcrypt.compare(password, user.password);

    if (!user && !hashPassword) {
      res.status(400);
      throw new Error("Invalid Credentials");
    }

    res.status(201).send({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "There is an error trying to Login User",
      error,
    });
  }
};
//@desc     Get User data
//@route    GET /api/users/me
//@access   Public
const getMe = async (req, res) => {
  //req.user.id is coming from the authMiddleware
  res.status(200).json(req.user);
};

//@desc     Get User data
//@route    GET /api/users/allUsers
//@access   Public
const getAllUser = async (req, res) => {
  try {
    //req.user.id is coming from the authMiddleware
    const users = await User.find({});

    res.status(200).json({success: true, user: users});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error getting all User!",
      error,
    });
  }
};

//@desc     Get User data
//@route    GET /api/users/allUsers
//@access   Public
const PartnerSearch = async (req, res) => {
  //req.user.id is coming from the authMiddleware
  const gender = req.body.gender;
  const users = await User.find({});
  let userId = users._id;

  res.status(200).json(users);
};

//@desc     Update User data
//@route    GET /api/users/updateuser
//@access   Private
const updateUser = async (req, res) => {
  //check user -  User is coming from authMiddleware
  try {
    if (!req.user) {
      res.status(401);
      throw new Error("User not found!");
    }

    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updateUser) {
      return res
        .status(404)
        .json({success: false, message: "User profile not found"});
    }

    res.status(200).json({success: true, user: updateUser});
  } catch (error) {
    res
      .status(500)
      .json({success: false, message: "Error updating User profile", error});
  }
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: 60 * 24,
  });
};

module.exports = {
  registerUser,
  updateUser,
  loginUser,
  getMe,
  getAllUser,
};
