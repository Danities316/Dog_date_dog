const express = require("express");
const router = express.Router();
const {
  registerUser,
  updateUser,
  loginUser,
  getMe,
  getAllUser,
} = require("../controllers/userController");
const {protect} = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.put("/:id", protect, updateUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/all", getAllUser);

module.exports = router;
