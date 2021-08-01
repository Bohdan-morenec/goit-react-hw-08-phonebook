import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  currentRequest,
  currentSuccess,
  currentError,
} from "./authorization-actions";

const UserInformation = { name: "", email: "" };

const user = createReducer(UserInformation, {
  [registrationSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => UserInformation,
  [currentSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registrationSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registrationError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [currentError]: (_, { payload }) => payload,
});

const authorization = createReducer(false, {
  [registrationSuccess]: () => true,
  [loginSuccess]: () => true,
  [currentSuccess]: () => true,
  [registrationError]: () => false,
  [loginError]: () => false,
  [logoutError]: () => false,
  [currentError]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  authorization,
});
