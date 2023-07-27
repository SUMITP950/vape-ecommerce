"use client";
import axios from "axios";
import { _ } from "../main_controler";
export const handleLogin = async () => {
  await axios
    .post(
      "http://localhost:5000/login/loginUsername",
      {
        user_name: _("#usernameemail").value,
        password: _("#password").value,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response.data.mssg);
    })
    .catch(function (error) {
      console.log(error);
    });
};
