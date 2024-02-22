const catchAsyncError = require("../middleware/catchAsyncErrors");
const twilio = require("twilio");

const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
// User Registration OTP
const registeredUsers = new Map();
const loginUsers = new Map();
exports.registerUserOTP = catchAsyncError(async (req, res, next) => {
  const { registerPhoneNo, registerName, registerEmail } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);

  await client.messages.create({
    body: `Your OTP for registration is: ${otp}`,
    from: "(573) 652-3251",
    to: `+${registerPhoneNo}`,
  });
  registeredUsers.set(registerPhoneNo, { registerName, registerEmail, otp });
  res.status(200).json({ message: "OTP sent successfully" });
});

// User Registration
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { registerPhoneNo, registerOTP } = req.body;
  console.log(registerOTP);
  const userData = registeredUsers.get(registerPhoneNo);
  console.log(registeredUsers, userData);
  if (userData && userData.otp == registerOTP) {
    console.log("User registered:", userData);

    res.status(200).json({
      message: "Register Successfully",
    });
  } else {
    res.status(400).json({ error: "Invalid OTP" });
  }
});

// Login otp
exports.loginUserOTP = catchAsyncError(async (req, res, next) => {
  const { loginPhoneNo } = req.body;
  console.log(loginPhoneNo);

  const otp = Math.floor(100000 + Math.random() * 900000);

  await client.messages.create({
    body: `Your OTP for registration is: ${otp}`,
    from: "(573) 652-3251",
    to: `+${loginPhoneNo}`,
  });
  loginUsers.set(loginPhoneNo, { otp });
  res.status(200).json({ message: "OTP sent successfully" });
});

// login
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { loginPhoneNo, loginOTP } = req.body;

  const userData = loginUsers.get(loginPhoneNo);

  if (userData && userData.otp == loginOTP) {
    console.log("User login:", userData);

    res.status(200).json({
      message: "Login Successfully",
    });
  } else {
    res.status(400).json({ error: "Invalid OTP" });
  }
});
