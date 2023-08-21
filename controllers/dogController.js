//writing my own try/catch for async/await and passes error on to next.
const asyncHandler = require("express-async-handler");
const Dogs = require("../model/DogModel");
const User = require("../model/UserModel");
//@desc     Regster new Dog
//@route    POST /api/dogs
//@access   Public
const registerDog = asyncHandler(async (req, res) => {
  const data = {
    user: req.user.id,
    DogDateOfBirth: req.body.DogDateOfBirth,
    DogType: req.body.DogType,
    DogDescrition: req.body.DogDescrition,
    DogBread: req.body.DogBread,
    Sex: req.body.Sex,
    photo: req.body.photo,
    petname: req.body.petname,
  };
  // console.log(data)
  if (!data) {
    res.status(400);
    throw new Error("Please add a dog details");
  }
  const dog = await Dogs.create(data);
  //    console.log(dog)
  res.status(200).json(dog);
});

//@desc    Get all Dogs Details by user
//@route    GET /api/dogs/data
//@access   Public
const getDog = asyncHandler(async (req, res) => {
  // get req.user.id is coming from the authMiddleware
  const dogs = await Dogs.find({user: req.user.id});
  res.status(200).json(dogs);
});

//@desc    Get all Dogs Details
//@route    GET /api/dogs/data
//@access   Public
const getAllDog = asyncHandler(async (req, res) => {
  // get req.user.id is coming from the authMiddleware
  const dogs = await Dogs.find({});
  res.status(200).json(dogs);
});

//@desc     Get User data
//@route    DELETE /api/dogs/:id
//@access   Private
const deleteDog = asyncHandler(async (req, res) => {
  const dog = await Dogs.findById(req.params.id);
  if (!dog) {
    res.status(400);
    throw new Error("Dog not Found!");
  }

  //check user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }
  //Ensure the logged in user matches dog user
  if (dog.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not Authorized!");
  }

  await dog.remove();
  res.status(200).json({id: req.params.id});
});

//@desc     Get User data
//@route    UPDATE /api/dogs/m:id
//@access   Private
const updateDog = asyncHandler(async (req, res) => {
  const dog = await Dogs.findById(req.params.id);
  if (!dog) {
    res.status(400);
    throw new Error("Dog not Found!");
  }

  //check user -  User is coming from authMiddleware
  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }
  //Ensure the logged in user matches dog user
  if (dog.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not Authorized!");
  }

  const updateDog = await Dogs.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateDog);
});

module.exports = {
  registerDog,
  getDog,
  getAllDog,
  deleteDog,
  updateDog,
};
