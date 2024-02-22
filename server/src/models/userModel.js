const userSchema = new mongoose.Schema({
  phoneNo: {
    type: Number,
    required: [true, "Please Enter Your PhoneNo"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a Valid Email Id"],
  },
});

module.exports = mongoose.model("User", userSchema);
