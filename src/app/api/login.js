"use client";
import axios from "axios";
import { _ } from "../main_controler";
import { toast } from "react-toastify";
import { redirect } from "next/dist/server/api-utils";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
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
      console.log(response.data);
      if (response.data.status === "success") {
        toast.success(`${response.data.mssg}`);
        // alert(response.data.mssg);
        localStorage.setItem("authToken", response.data.authToken);
        window.location.replace("/");
      }

      if (response.data.status === "error") {
        // alert(response.data.mssg);
        toast.error(`Failed : ${response.data.mssg}`);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
