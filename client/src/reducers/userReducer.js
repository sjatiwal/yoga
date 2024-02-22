import {
  LOGIN_USEROTP_FAIL,
  LOGIN_USEROTP_REQUEST,
  LOGIN_USEROTP_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USEROTP_FAIL,
  REGISTER_USEROTP_REQUEST,
  REGISTER_USEROTP_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../constants/userConstant";

export const otpReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USEROTP_REQUEST:
    case REGISTER_USEROTP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USEROTP_SUCCESS:
    case REGISTER_USEROTP_SUCCESS:
      return {
        ...state,
        loading: false,
        otp: action.payload,
      };
    case LOGIN_USEROTP_FAIL:
    case REGISTER_USEROTP_FAIL:
      return {
        ...state,
        loading: false,
        otp: null,
      };
    default:
      return state;
  }
};

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};
