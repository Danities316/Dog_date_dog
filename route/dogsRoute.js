const express = require("express");
const router = express.Router();
const {
  registerDog,
  getDog,
  getAllDog,
  deleteDog,
  updateDog,
} = require("../controllers/dogController");
const {protect} = require("../middleware/authMiddleware");

router.get("/", protect, getDog);
router.get("/all", protect, getAllDog);
router.post("/", protect, registerDog);
router.delete("/:id", protect, deleteDog);
router.put("/:id", protect, updateDog);

module.exports = router;
