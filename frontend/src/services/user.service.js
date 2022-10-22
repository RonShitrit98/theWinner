import axios from "axios";

import { httpService } from "./http.service";
export const userService = {
  signup,
  loadUser,
  logout,
  login
};

async function signup(user) {
  const res = await axios.post(
    "http://127.0.0.1:3030/api/auth/signup",
    user,
    { withCredentials: true }
  );
  return res.data;
  // return httpService.post('auth/signup', user)
}

async function loadUser() {
  const res = await axios.get("http://127.0.0.1:3030/api/auth/", {
    withCredentials: true,
  });
  return res.data;
  // return httpService.get('auth')
}

async function logout() {
  await axios.post(
    "http://127.0.0.1:3030/api/auth/logout/",
    {},
    {
      withCredentials: true,
    }
  );
}

async function login(cred){
  const res = await axios.post(
    "http://127.0.0.1:3030/api/auth/login",
    cred,
    { withCredentials: true }
  );
  return res.data
}
