const express = require("express");
const router = express.Router();
const {
  registerDog,
  getDogById,
  getAllDogsByUser,
  getAllDogs,
  deleteDog,
  updateDog,
} = require("../controllers/dogController");
const {protect} = require("../middleware/authMiddleware");

router.get("/", protect, getAllDogs);
router.get("/all", protect, getAllDogsByUser);
router.delete("/:id", protect, getDogById);
router.post("/", protect, registerDog);
router.delete("/:id", protect, deleteDog);
router.put("/:id", protect, updateDog);

module.exports = router;
