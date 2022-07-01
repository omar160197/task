const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "First Name required"],
  },

  last_name: {
    type: String,
    required: [true, "Last Name required"],
  },

  country_code: {
    type: String,
    required: [true, "Country Code required"],
  },

  phone_number: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{11}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "Phone Number required"],
  },

  gender: {
    type: String,
    enum: ["Male", "Female", ""],
    default: "",
  },

  birth_date: {
    type: String,
    required: [true, "Birth Date required"],
    match: [
      /^(0?[1-9]|1\d|2\d|3[01])\/(0?[1-9]|1[0-2])\/(19|20)\d{2}$/,
      "Please enter a valid Date [DD/MM/YYY]",
    ],
  },

  avatar: {
    type: String,
    required: [true, "Avatar required"],
  },

  email: {
    type: String,
    required: [true, "Email required"],

    unique: true,
    trim: true,
    lowercase: true,
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Please enter a valid email",
    ],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
