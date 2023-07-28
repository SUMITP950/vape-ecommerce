"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
const Otp = () => {
  // form validation

  const formik = useFormik({
    initialValues: {
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
        .matches(/[^\w]/, "One Special character Required")
        .matches(/[0-9]/, "One Number Required")
        .min(3, "Minimum 3 characters length")
        .max(10, "Maximum 10 characters length"),
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

      <Footer />
    </div>
  );
};
export default Otp;
