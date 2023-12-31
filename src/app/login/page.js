"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { handleLogin } from "../api/login";
import { _ } from "../main_controler";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
const Login = () => {
  // form validation

  const formik = useFormik({
    initialValues: {
      usernameemail: "",
      password: "",
    },

    validationSchema: yup.object({
      usernameemail: yup.string().required("*Required"),
      password: yup.string().required("*Required"),
    }),
    onSubmit: (values) => {
      setfirstValidation("Yes");
      console.log(45, values);
    },
  });
  return (
    <div>
      <Header />
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
                  src="https://www.intelligenceray.com/wp-content/uploads/2020/12/ec4.png"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 login-form-bg">
                <form>
                  <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p class="lead fw-bold mb-3 me-3">Wholesale Login</p>
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">
                      User Name Or Email
                    </label>
                    <input
                      type="text"
                      id="usernameemail"
                      name="usernameemail"
                      className="form-control form-control-lg"
                      placeholder="User Name Or Email"
                      value={formik.values.usernameemail}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.usernameemail && (
                      <em style={{ color: "red" }}>
                        {formik.errors.usernameemail}
                      </em>
                    )}
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.password && (
                      <em style={{ color: "red" }}>{formik.errors.password}</em>
                    )}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Checkbox */}
                    <div className="form-check mb-0 mt-0">
                      <input
                        className="form-check-input me-2 mt-0"
                        type="checkbox"
                        defaultValue=""
                        id="checkbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link href="/forgotpassword" className="text-body">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={handleLogin}
                      style={{
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                      }}
                    >
                      Login
                    </button>
                    <p className="small mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link href="/register" className="link-danger">
                        <span className="fw-bold">Register for Wholesale.</span>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </div>
  );
};
export default Login;
