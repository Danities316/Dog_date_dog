const Dogs = require("../model/DogModel");
const User = require("../model/UserModel");

//@desc     Regster new Dog
//@route    POST /api/dogs
//@access   Public
const registerDog = async (req, res) => {
  try {
    const {
      name,
      breed,
      dobDay,
      dobMonth,
      dobYear,
      showGender,
      genderId,
      genderInterest,
      sex,
      photo,
      EnergyLevel,
      Friendliness,
      Playfulness,
      Aggressiveness,
      owner,
    } = req.body;

    const newDog = new Dogs({
      name,
      breed,
      dobDay,
      dobMonth,
      dobYear,
      showGender,
      genderId,
      genderInterest,
      sex,
      photo,
      EnergyLevel,
      Friendliness,
      Playfulness,
      Aggressiveness,
      owner,
    });

    // console.log(data)
    if (!newDog) {
      res.status(400);
      throw new Error("Please add a dog details");
    }
    await newDog.save();
    res.status(201).json({success: true, dog: newDog});
  } catch (error) {
    res
      .status(500)
      .json({success: false, message: "Error creating dog profile", error});
  }
};

//@desc    Get all Dogs Details by user
//@route    GET /api/dogs/data
//@access   Public
const getAllDogs = async (req, res) => {
  try {
    const dogs = await Dogs.find();
    res.status(200).json({success: true, dogs});
  } catch (error) {
    res
      .status(500)
      .json({success: false, message: "Error fetching dog profiles", error});
  }
};

//@desc    Get all Dogs Details of a single owner
//@route    GET /api/dogs/:userId
//@access   Public
const getAllDogsByUser = async (req, res) => {
  // get req.user.id is coming from the authMiddleware
  try {
    const userId = req.params.userId;
    const dogs = await Dogs.find({user: userId});

    if (!dogs || dogs.length === 0) {
      return res
        .status(404)
        .json({success: false, message: "No dogs found for the owner"});
    }

    res.status(200).json({success: true, dogs});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching dogs for the owner",
      error,
    });
  }
};

//@desc    Get all Dogs Details of a single owner
//@route    GET /api/dogs/:id
//@access   Public
const getDogById = async (req, res) => {
  try {
    const {id} = req.params;
    const dog = await Dogs.findById(id);

    if (!dog) {
      return res
        .status(404)
        .json({success: false, message: "Dog profile not found"});
    }

    res.status(200).json({success: true, dog});
  } catch (error) {
    res
      .status(500)
      .json({success: false, message: "Error fetching dog profile", error});
  }
};

//@desc     Delete Dog data
//@route    DELETE /api/dogs/:id
//@access   Private
const deleteDog = async (req, res) => {
  try {
    // Check if the user is authenticated
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User must be logged in to delete a dog",
      });
    }

    const {id} = req.params;

    // Check if the dog owner is the logged-in user
    const dog = await Dogs.findById(id);

    if (!dog) {
      return res
        .status(404)
        .json({success: false, message: "Dog profile not found"});
    }

    if (dog.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You are not the owner of this dog",
      });
    }

    const deletedDog = await Dogs.findByIdAndRemove(id);

    if (!deletedDog) {
      return res
        .status(404)
        .json({success: false, message: "Dog profile not found"});
    }

    res
      .status(200)
      .json({success: true, message: "Dog profile deleted successfully"});
  } catch (error) {
    res
      .status(500)
      .json({success: false, message: "Error deleting dog profile", error});
  }
};

//@desc     Update Dog data
//@route    UPDATE /api/dogs/m:id
//@access   Private
const updateDog = async (req, res) => {
  try {
    // Check if the user is authenticated
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User must be logged in to update a dog",
      });
    }

    const {id} = req.params;
    const updatedData = req.body;

    // Check if the dog owner is the logged-in user
    const dog = await Dogs.findById(id);

    if (!dog) {
      return res
        .status(404)
        .json({success: false, message: "Dog profile not found"});
    }
    //Ensure the logged in user matches dog user
    if (dog.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You are not the owner of this dog",
      });
    }

    const updatedDog = await Dogs.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedDog) {
      return res
        .status(404)
        .json({success: false, message: "Dog profile not found"});
    }

    res.status(200).json({success: true, dog: updatedDog});
  } catch (error) {
    res
      .status(500)
      .json({success: false, message: "Error updating dog profile", error});
  }
};

module.exports = {
  registerDog,
  getDogById,
  getAllDogsByUser,
  getAllDogs,
  deleteDog,
  updateDog,
};
