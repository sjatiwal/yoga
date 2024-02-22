import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USEROTP_FAIL,
  LOGIN_USEROTP_SUCCESS,
  LOGIN_USEROTP_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USEROTP_FAIL,
  REGISTER_USEROTP_REQUEST,
  REGISTER_USEROTP_SUCCESS,
} from "../constants/userConstant";
import backend from "../helper/axios";

// registeration otp
export const userRegisterOTP =
  (registerPhoneNo, registerName, registerEmail) => async (dispatch) => {
    console.log(registerPhoneNo, registerName, registerEmail);
    try {
      dispatch({ type: REGISTER_USEROTP_REQUEST, payload: "Loading..." });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await backend.post(
        "/api/v1/registerotp",
        { registerPhoneNo, registerName, registerEmail },
        config
      );
      dispatch({ type: REGISTER_USEROTP_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: REGISTER_USEROTP_FAIL, payload: error.message });
    }
  };

// login otp
export const userLoginOTP = (loginPhoneNo) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USEROTP_REQUEST, payload: "Loading..." });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await backend.post(
      "/api/v1/loginotp",
      { loginPhoneNo },
      config
    );
    dispatch({ type: LOGIN_USEROTP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_USEROTP_FAIL, payload: error.message });
  }
};

//registration
export const userRegister =
  (registerPhoneNo, registerName, registerEmail, registerOTP) =>
  async (dispatch) => {
    try {
      dispatch({ type: REGISTER_USER_REQUEST, payload: "Loading..." });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await backend.post(
        "/api/v1/register",
        { registerPhoneNo, registerName, registerEmail, registerOTP },
        config
      );
      console.log(data.message);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.message });
    } catch (error) {
      dispatch({ type: REGISTER_USER_FAIL, payload: error.message });
    }
  };

// login
export const userLogin = (loginPhoneNo, loginOTP) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST, payload: "Loading..." });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await backend.post(
      "/api/v1/login",
      { loginPhoneNo, loginOTP },
      config
    );
    console.log(data.message);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error.message });
  }
};
