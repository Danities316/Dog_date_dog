const mongoose = require("mongoose");
const crypto = require("crypto");
// const { Schema } = mongoose.Schema();
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      // required: [true, "Please add First Name"],
    },
    LastName: {
      type: String,
      // required: [true, "Please add Lasr Name"],
    },
    dobDay: {
      type: Number,
      // required: [true, "Please add Your Date of Birth"],
    },
    dobMonth: {
      type: Number,
      // required: [true, "Please add Your Date of Birth"],
    },
    dobYear: {
      type: Number,
      // required: [true, "Please add Your Date of Birth"],
    },
    showGender: {
      type: String,
      // required: [true, "Please add Address"],
    },
    genderId: {
      type: String,
      // required: [true, "Please add Address"],
    },
    genderInterest: {
      type: String,
      // required: [true, "Please add Address"],
    },
    address: {
      type: String,
      // required: [true, "Please add Address"],
    },
    State: {
      type: String,
      // required: [true, "Please add State"],
    },
    LGA: {
      type: String,
      // required: [true, "Please add LGA"],
    },
    street: {
      type: String,
      // required: [true, "Please add Street"],
    },
    matches: {
      type: Array,
      // required: [true, "Please add Matches"],
    },
    PhoneNumber: {
      type: String,
      // required: true,
      min: [12, "Number must be 11 numbers"],
      max: [12, "Number must be  11 numbers"],
    },
    Sex: {
      type: String,
      enum: ["male", "female"],
      // required: [true, "Please add name"],
    },
    photo: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true,
    },
    username: {
      type: String,
      // required: [true, "Please add Username"],
    },
    about: {
      type: String,
      // required: [true, "Please add about details"],
    },
    password: {
      type: String,
      required: [true, "Please add Password"],
    },
    salt: String,
  },
  {
    timpstamps: true,
  }
);

// UserSchema.pre("save", async function (next) {
//   try {
//     //check method of registration
//     const user = this;
//     if (!user.isModified("hashPassword")) next();
//     //generate salt
//     const salt = await bcrypt.genSalt(10);

//     //hash the password
//     const hashPassword = await bcrypt.hash(this.hashPassword, salt);
//     //replace plain text password with hashed password
//     this.hashPassword = hashPassword;
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });

// UserSchema.methods.matchPassword = async (password) => {
//   try {
//     return await bcrypt.compare(password, this.password);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

const User = mongoose.model("Users", UserSchema);
//---------------------------- End of Mongoose-----------------------

module.exports = User;
// db => db.model('User', UserSchema);
