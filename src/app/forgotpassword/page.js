"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
const Forgotpassword = () => {
  const [showCreatePass, setShowCreatePass] = useState(false);

  const formik = useFormik({
    initialValues: {
      Registeredemial: "",
    },

    validationSchema: yup.object({
      Registeredemial: yup
        .string()
        .required("*Required")
        .email("Invalid Email"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const sendOtp = () => {
    axios
      .post(
        "http://localhost:5000/forget/changepassword",
        {
          email_id: formik.values.Registeredemial,
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
          // toast.success(`${response.data.mssg}`);
          alert("OTP is " + response.data.otp);
          // localStorage.setItem("authToken", response.data.authToken);
          setShowCreatePass(true);
        }

        if (response.data.status === "error") {
          alert(response.data.mssg);
          // toast.error(`Failed : ${response.data.mssg}`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Header />

      <>
        {showCreatePass ? (
          <Otp email_id={formik.values.Registeredemial} />
        ) : (
          <div className="container page mt-5 pt-1">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-4268397-3551744.png"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 login-form-bg">
                  <form>
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                      <p class="lead fw-bold mb-3 me-3">Forgot password</p>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-3">
                      <label className="form-label" htmlFor="form3Example4">
                        Email Id
                      </label>
                      <input
                        type="email"
                        id="form3Example4"
                        name="Registeredemial"
                        className="form-control form-control-lg"
                        placeholder="Registered Email Id "
                        value={formik.values.Registeredemial}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.Registeredemial && (
                        <em style={{ color: "red" }}>
                          {formik.errors.Registeredemial}
                        </em>
                      )}
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                        onClick={sendOtp}
                      >
                        Send OTP
                      </button>

                      <p className="small mt-2 pt-1 mb-0">
                        <Link href="/login" className="link-danger">
                          <span className="fw-bold">
                            <i className="fa fa-arrow-left"></i> Back to Login
                          </span>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </>

      <Footer />
    </div>
  );
};

const Otp = (props) => {
  console.log(props.email_id);
  // form validation

  const formik = useFormik({
    initialValues: {
      email: props.email_id,
      otp: "",
      newpassword: "",
      conpassword: "",
    },

    validationSchema: yup.object({
      otp: yup
        .string()
        .required("*Required")
        .min(3, "Minimum 3 characters length")
        .max(10, "Maximum 15 characters length"),

      newpassword: yup
        .string()
        .required("*Required")
        .matches(/[^\w]/, "One Special character Required")
        .matches(/[0-9]/, "One Number Required")
        .min(3, "Minimum 3 characters length")
        .max(10, "Maximum 10 characters length"),
      conpassword: yup
        .string()
        .required("*Required")
        .oneOf([yup.ref("newpassword")], "Password not matched"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const changePassword = () => {
    axios
      .post(
        "http://localhost:5000/ForgotPassword/savePassword",
        {
          email_id: formik.values.email,
          otp: formik.values.otp,
          password: formik.values.newpassword,
          confirm_password: formik.values.conpassword,
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

          window.location.replace("/login");
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
  return (
    <div>
      <>
        <ToastContainer
          theme="colored"
          style={{ zIndex: 9999999 }}
        ></ToastContainer>
        <div className="container page mt-5 pt-1">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-4268397-3551744.png"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 login-form-bg">
                <form>
                  <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p class="lead fw-bold mb-3 me-3">Forgot password</p>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">
                      Enter OTP
                    </label>
                    <input
                      type="number"
                      id="form3Example4"
                      name="otp"
                      className="form-control form-control-lg"
                      placeholder="OTP "
                      value={formik.values.otp}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.otp && (
                      <em style={{ color: "red" }}>{formik.errors.otp}</em>
                    )}
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="New Password"
                      name="newpassword"
                      value={formik.values.newpassword}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.newpassword && (
                      <em style={{ color: "red" }}>
                        {formik.errors.newpassword}
                      </em>
                    )}
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      name="conpassword"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      value={formik.values.conpassword}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.conpassword && (
                      <em style={{ color: "red" }}>
                        {formik.errors.conpassword}
                      </em>
                    )}
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      onClick={changePassword}
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                      style={{
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                      }}
                    >
                      Change Password
                    </button>
                    <p className="small mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link href="/login" className="link-danger">
                        <span className="fw-bold">Back to Login</span>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Forgotpassword;
