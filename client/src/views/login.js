import React, { useState } from "react";
import { ReactComponent as LoginPhoto } from "../assets/image/loginImg.svg";
import { ReactComponent as LoginShift } from "../assets/image/loginMove.svg";
import {
  userLoginOTP,
  userRegisterOTP,
  userRegister,
  userLogin,
} from "../action/userAction";
import { useDispatch } from "react-redux";

const Login = ({ setShowLoginSignUp }) => {
  const dispatch = useDispatch();
  const [loginSignup, setLoginSignup] = useState("Login");
  const [showLoginOTP, setShowLoginOTP] = useState(false);
  const [showRegisterOTP, setShowRegisterOTP] = useState(false);

  const [loginPhoneNo, setLoginPhoneNo] = useState("");
  const [loginOTP, setLoginOTP] = useState("");

  const [registerPhoneNo, setRegisterPhoneNo] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerOTP, setRegisterOTP] = useState("");

  const [sendRegisterOTP, setSendRegisterOTP] = useState(true);
  const [sendLoginOTP, setSendLoginOTP] = useState(true);

  //registration otp
  const handleRegisterOTP = () => {
    dispatch(userRegisterOTP(registerPhoneNo, registerName, registerEmail));
    setShowRegisterOTP(true);
    setSendRegisterOTP(false);
  };

  // login otp
  const handleLoginOTP = () => {
    dispatch(userLoginOTP(loginPhoneNo));
    setShowLoginOTP(true);
    setSendLoginOTP(false);
  };
  //registration
  const handleRegister = () => {
    dispatch(
      userRegister(registerPhoneNo, registerName, registerEmail, registerOTP)
    );
  };

  // login
  const handleLogin = () => {
    dispatch(userLogin(loginPhoneNo, loginOTP));
  };
  return (
    <div
      className="absolute top-0  w-full flex justify-center items-center bg-slate-50/70 z-10 min-h-screen"
      onClick={(e) => [setShowLoginSignUp(false), e.stopPropagation()]}
    >
      <div
        className="flex flex-row rounded-t-lg shadow-xl bg-white w-[760px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 flex flex-col items-center bg-[#FEFCFB] w-1/2">
          <LoginPhoto />
          <LoginShift />
        </div>
        <div className="flex flex-col p-8 w-1/2">
          <div className="flex flex-row pb-12">
            <button
              onClick={() => setLoginSignup("Login")}
              className={` ${
                loginSignup === "Login"
                  ? "text-[#E56F2C]"
                  : "text-[#722B2C] mb-[6px]"
              } font-semibold cursor-pointer mr-8 `}
            >
              Login
              {loginSignup === "Login" && (
                <div className="bg-[#722B2C] w-[14px] h-[6px] rounded-[20px]"></div>
              )}
            </button>
            <button
              onClick={() => setLoginSignup("SignUp")}
              className={` ${
                loginSignup === "SignUp"
                  ? "text-[#E56F2C]"
                  : "text-[#722B2C] mb-[6px]"
              } font-semibold cursor-pointer`}
            >
              Signup
              {loginSignup === "SignUp" && (
                <div className="bg-[#722B2C] w-[14px] h-[6px] rounded-[20px]"></div>
              )}
            </button>
          </div>
          {loginSignup === "Login" && (
            <div>
              <div className="flex flex-col">
                <div className="relative pb-2 pt-3 px-1 rounded-lg border border-gray-300 mb-5 w-full">
                  <input
                    className="px-2 py-1 focus:outline-none w-full"
                    type="number"
                    value={loginPhoneNo}
                    onChange={(e) => setLoginPhoneNo(e.target.value)}
                  />
                </div>
                {showLoginOTP && (
                  <div className="relative pb-2 pt-3 px-1 rounded-lg border border-gray-300  mb-5">
                    <div className="absolute font-light text-sm  px-1 mr-3 top-0  transform -translate-y-2.5 translate-x-1 text-[#787878] bg-white">
                      otp *
                    </div>
                    <input
                      className="px-2 py-1 focus:outline-none w-full"
                      type="number"
                      value={loginOTP}
                      onChange={(e) => setLoginOTP(e.target.value)}
                    />
                  </div>
                )}
                <div className="text-right">
                  {sendLoginOTP ? (
                    <button
                      type="submit"
                      className="mt-8 py-4 px-8 rounded shadow-md font-semibold text-white text-sm cursor-pointer bg-explorebgcolor "
                      onClick={handleLoginOTP}
                    >
                      Send otp
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="mt-8 py-4 px-8 rounded shadow-md font-semibold text-white text-sm cursor-pointer bg-explorebgcolor "
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
              <div className="mt-8">
                Don't have an account yet?
                <span
                  className="text-[#E56F2C] hover:underline ml-1"
                  onClick={() => setLoginSignup("SignUp")}
                >
                  Signup
                </span>
              </div>
            </div>
          )}
          {loginSignup === "SignUp" && (
            <div>
              <div className="flex flex-col">
                <div className="relative pb-2 pt-3 px-1 rounded-lg border border-gray-300 mb-5 w-full">
                  <input
                    className="px-2 py-1 focus:outline-none w-full"
                    type="number"
                    value={registerPhoneNo}
                    onChange={(e) => setRegisterPhoneNo(e.target.value)}
                  />
                </div>
                <div className="relative pb-2 pt-3 px-1 rounded-lg border border-gray-300 mb-5 w-full">
                  <div className="absolute font-light text-sm  px-1 mr-3 top-0  transform -translate-y-2.5 translate-x-1 text-[#787878] bg-white">
                    Name *
                  </div>
                  <input
                    className="px-2 py-1 focus:outline-none w-full"
                    value={registerName}
                    onChange={(e) => setRegisterName(e.target.value)}
                  />
                </div>
                <div className="relative pb-2 pt-3 px-1 rounded-lg border border-gray-300  mb-5">
                  <div className="absolute font-light text-sm  px-1 mr-3 top-0  transform -translate-y-2.5 translate-x-1 text-[#787878] bg-white">
                    Email ID *
                  </div>
                  <input
                    className="px-2 py-1 focus:outline-none w-full"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                </div>
                {showRegisterOTP && (
                  <div className="relative pb-2 pt-3 px-1 rounded-lg border border-gray-300  mb-5">
                    <div className="absolute font-light text-sm  px-1 mr-3 top-0  transform -translate-y-2.5 translate-x-1 text-[#787878] bg-white">
                      otp *
                    </div>
                    <input
                      className="px-2 py-1 focus:outline-none w-full"
                      type="number"
                      value={registerOTP}
                      onChange={(e) => setRegisterOTP(e.target.value)}
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-row items-center ">
                <input type="checkbox" className="cursor-pointer py-1 px-2" />
                <div className="ml-2 text-sm text-[#787878]">
                  Receive whatsapp messages
                </div>
              </div>
              <div className="mt-8 text-right">
                {sendRegisterOTP ? (
                  <button
                    type="submit"
                    className="py-4 px-8 rounded shadow-md font-semibold text-white text-sm cursor-pointer bg-explorebgcolor "
                    onClick={handleRegisterOTP}
                  >
                    Send otp
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="py-4 px-8 rounded shadow-md font-semibold text-white text-sm cursor-pointer bg-explorebgcolor "
                    onClick={handleRegister}
                  >
                    SignUp
                  </button>
                )}
              </div>
              <div className="mt-8">
                Already have an account?
                <span
                  className="cursor-pointer text-[#FB7125] hover:underline ml-1"
                  onClick={() => setLoginSignup("Login")}
                >
                  Login
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
