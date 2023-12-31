"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import $ from "jquery";
import axios from "axios";
import { useEffect, useState } from "react";
import { _ } from "../main_controler";
import { aa, handleEmail, handleRegister } from "../api/register";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export const metadata = {
  title: "Register",
  description: "Generated by create next app",
};
const Register = () => {
  useEffect(() => {}, []);

  const showForm = (nextForm) => {
    console.log(nextForm);
    _("#account").classList.remove("active");
    _("#otp").classList.remove("active");
    _("#personal").classList.remove("active");
    _("#payment").classList.remove("active");
    _("#confirm").classList.remove("active");

    _(".account_fieldset").style.display = "none";
    _(".otp_fieldset").style.display = "none";
    _(".personal_fieldset").style.display = "none";
    _(".payment_fieldset").style.display = "none";
    _(".confirm_fieldset").style.display = "none";

    if (nextForm === "account") {
      _("#account").classList.add("active");

      _(".progress-bar").style.width = "20%";
      _(".account_fieldset").style.display = "block";
    }
    if (nextForm === "otp") {
      _("#account").classList.add("active");
      _("#otp").classList.add("active");

      _(".progress-bar").style.width = "40%";
      _(".otp_fieldset").style.display = "block";
    }
    if (nextForm === "personal") {
      _("#account").classList.add("active");
      _("#otp").classList.add("active");
      _("#personal").classList.add("active");

      _(".progress-bar").style.width = "60%";
      _(".personal_fieldset").style.display = "block";
    }
    if (nextForm === "payment") {
      _("#account").classList.add("active");
      _("#otp").classList.add("active");
      _("#personal").classList.add("active");
      _("#payment").classList.add("active");

      _(".progress-bar").style.width = "80%";
      _(".payment_fieldset").style.display = "block";
    }
    if (nextForm === "confirm") {
      _("#account").classList.add("active");
      _("#otp").classList.add("active");
      _("#personal").classList.add("active");
      _("#payment").classList.add("active");
      _("#confirm").classList.add("active");

      _(".progress-bar").style.width = "100%";
      _(".confirm_fieldset").style.display = "block";
    }
  };

  // form validation

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      cPassword: "",
      otp: "",
      ownerfullname: "",
      ccode: "",
      phonenumber: "",
      legalcompanyname: "",
      conntactpersongullname: "",
      streetadress: "",
      zipcode: "",
      Employee_identification_number: "",
      Authority_number: "",
      dbaname: "",
      SameasOwnerphn: "",
      addressline: "",
      state: "",
      city: "",
    },

    validationSchema: yup.object({
      userName: yup
        .string()
        .matches(/^[A-Za-z]+$/, "This field  must be a letter")
        .required("*Required")
        .min(3, "Minimum 3 characters length")
        .max(15, "Maximum 15 characters length"),
      email: yup.string().required("*Required").email("Invalid Email"),
      password: yup
        .string()
        .required("*Required")
        .matches(/[^\w]/, "One Special character Required")
        .matches(/[0-9]/, "One Number Required")
        .min(3, "Minimum 3 characters length")
        .max(10, "Maximum 10 characters length"),
      cPassword: yup
        .string()
        .required("*Required")
        .oneOf([yup.ref("password")], "Password not matched"),
      otp: yup
        .string()
        .required("*Required")
        .min(6, "Minimum 6 characters length")
        .max(6, "Maximum 6 characters length"),
      ownerfullname: yup.string().required("*Required"),
      phonenumber: yup
        .string()
        .required("*Required")
        .min(10, "Minimum 10 characters length")
        .max(10, "Maximum 10 characters length"),
      legalcompanyname: yup.string().required("*Required"),
      conntactpersongullname: yup.string().required("*Required"),
      zipcode: yup.string().required("*Required"),
      streetadress: yup.string().required("*Required"),
      addressline: yup.string().required("*Required"),
      city: yup.string().required("*Required"),
      state: yup.string().required("*Required"),
      SameasOwnerphn: yup.string().required("*Required"),
      Authority_number: yup.string().required("*Required"),
      Employee_identification_number: yup.string().required("*Required"),
    }),
    onSubmit: (values) => {
      console.log(45, values);
    },
  });

  // Api Call
  const handleEmail = () => {
    axios
      .post(
        "http://localhost:5000/otp/registerSendOtp",
        {
          email_id: formik.values.email,
          user_name: formik.values.userName,
          password: formik.values.password,
          confirm_password: formik.values.cPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        if (response.data.status === "success") {
          // toast.success(`${response.data.mssg}`);
          // console.log("Generated OTP:", otp);
          alert(`Your otp is ${response.data.otp}`);
          showForm("otp");
        }

        if (response.data.status === "error") {
          toast.error(`Failed : ${response.data.mssg}`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // Api Call
  const handleOtp = () => {
    axios
      .post(
        "http://localhost:5000/otpcheck/registerOtpCheck",
        {
          email_id: formik.values.email,
          otp: formik.values.otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        if (response.data.status === "success") {
          toast.success(`${response.data.mssg}`);
          showForm("personal");
        }

        if (response.data.status === "error") {
          toast.error(`Failed : ${response.data.mssg}`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOwnerInfo = () => {
    let validationDone = "no";

    if (
      formik.values.ownerfullname !== "" &&
      formik.values.phonenumber !== ""
    ) {
      if (!formik.errors.ownerfullname && !formik.errors.phonenumber) {
        validationDone = "yes";
      }
    }

    if (validationDone === "yes") {
      console.log(validationDone);
      showForm("payment");
    }

    // if (formik.values.legalcompanyname == "") {
    //   toast.error(`Failed : ${response.data.mssg}`);
    // } else {
    //   toast.success(`${response.data.mssg}`);
    //   showForm("payment");
    // }
    // axios
    //   .post(
    //     "#",
    //     {
    //       legalcompanyname: ,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     if (response.data.status === "success") {
    //       toast.success(`${response.data.mssg}`);
    //       showForm("payment");
    //     }

    //     if (response.data.status === "error") {
    //       toast.error(`Failed : ${response.data.mssg}`);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const handleLegalinfo = () => {
    let validationDone = "no";

    if (
      formik.values.legalcompanyname !== "" &&
      formik.values.conntactpersongullname !== "" &&
      formik.values.zipcode !== "" &&
      formik.values.streetadress !== "" &&
      formik.values.addressline !== "" &&
      formik.values.city !== "" &&
      formik.values.state !== "" &&
      formik.values.SameasOwnerphn !== ""
    ) {
      if (
        !formik.errors.legalcompanyname &&
        !formik.errors.conntactpersongullname &&
        !formik.errors.zipcode &&
        !formik.errors.streetadress &&
        !formik.errors.addressline &&
        !formik.errors.city &&
        !formik.errors.state &&
        !formik.errors.SameasOwnerphn
      ) {
        validationDone = "yes";
      }
    }

    if (validationDone === "yes") {
      console.log(validationDone);
      showForm("confirm");
    }
  };

  const handleRegister = () => {
    axios
      .post(
        "http://localhost:5000/registration/register",
        {
          email_id: formik.values.email,
          user_name: formik.values.userName,
          password: formik.values.password,
          confirm_password: formik.values.confirmpassword,
          ph_num: formik.values.phonenumber,
          ccode: formik.values.ccode,
          Owner_legal_name: formik.values.ownerfullname,
          company_name: formik.values.legalcompanyname,
          contact_person_fullname: formik.values.conntactpersongullname,
          street_adress: formik.values.streetadress,
          zipcode: formik.values.zipcode,
          Employee_identification_number:
            formik.values.Employee_identification_number,
          Authority_number: formik.values.Authority_number,
          DBA_name: formik.values.dbaname,
          sameas_owner_info_phno: formik.values.SameasOwnerphn,
          adress_line: formik.values.addressline,
          select_state: formik.values.state,
          city: formik.values.city,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        if (response.data.status === "success") {
          toast.success(`${response.data.mssg}`);
          router.push("/login");
        }

        if (response.data.status === "error") {
          toast.error(`Failed : ${response.data.mssg}`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <ToastContainer
        theme="colored"
        style={{ zIndex: 9999999 }}
      ></ToastContainer>
      <Header />
      {/* Hello world */}
      <section className="ec-page-content section-space-p">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-warning">
                <strong>Please Note:</strong> New Account will require a
                business review before approved for online ordering..
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10 col-md-10 col-lg-7 col-xl-7 text-center p-0 mb-2">
            <div className="card px-0  pb-0  mb-3">
              <form id="msform" onSubmit={formik.handleSubmit}>
                {/* progressbar */}
                <ul id="progressbar">
                  <li
                    className="active"
                    id="account"
                    // onClick={() => showForm("account")}
                  >
                    <strong>REGISTRATION INFO</strong>
                  </li>
                  <li id="otp">
                    <strong>OTP</strong>
                  </li>
                  <li id="personal">
                    <strong>OWNER INFO</strong>
                  </li>
                  <li id="payment">
                    <strong>LEGAL ENTITY INFO</strong>
                  </li>
                  <li id="confirm">
                    <strong>LICENSE INFO</strong>
                  </li>
                </ul>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>{" "}
                <br /> {/* fieldsets */}
                {/*Form Step 1 Start */}
                <fieldset class="tab account_fieldset" id="tab-1">
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">REGISTRATION INFO:</h2>
                      </div>
                      <div className="col-12">
                        <h2 className="steps">Step 1 - 5</h2>
                      </div>
                    </div>{" "}
                    <span className="ec-register-wrap">
                      <label>
                        Email Address<span className="text-danger">*</span>
                      </label>
                      <input
                        id="email"
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="Enter your Email Address"
                        style={{ marginBottom: 2 }}
                      />
                      {formik.errors.email && (
                        <em style={{ color: "red" }}>{formik.errors.email}</em>
                      )}
                      <p style={{ marginBottom: 4 }}>
                        Verification email will be sent to your email address.
                      </p>
                    </span>
                    <span className="ec-register-wrap">
                      <label>
                        Username<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="userName"
                        placeholder="xyz"
                        readOnly=""
                        id="username"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.userName && (
                        <em style={{ color: "red" }}>
                          {formik.errors.userName}
                        </em>
                      )}
                    </span>
                    <br />
                    <span className="ec-register-wrap">
                      <label>
                        Password<span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                    </span>
                    {formik.errors.password && (
                      <em style={{ color: "red" }}>{formik.errors.password}</em>
                    )}{" "}
                    <br />
                    <span className="ec-register-wrap">
                      <label>
                        Confirm Password<span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        name="cPassword"
                        placeholder="Confirm Password"
                        id="confirmpassword"
                        value={formik.values.cPassword}
                        onChange={formik.handleChange}
                      />
                    </span>
                    {formik.errors.cPassword && (
                      <em style={{ color: "red" }}>
                        {formik.errors.cPassword}
                      </em>
                    )}
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="action-button"
                    defaultValue="Next"
                    onClick={handleEmail}
                  />
                </fieldset>
                {/*Form Step 1 End*/}
                {/*Form Step 2 Start*/}
                <fieldset class="tab otp_fieldset" id="tab-2">
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Email Verification :</h2>
                      </div>
                      <div className="col-12">
                        <h2 className="steps">Step 2 - 5</h2>
                      </div>
                    </div>{" "}
                    <span className="ec-register-wrap">
                      <label>Submit Your OTP</label>
                      <input
                        type="number"
                        name="otp"
                        placeholder="Your OTP"
                        id="otp"
                        defaultValue="Next"
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                      />
                    </span>
                    {formik.errors.otp && (
                      <em style={{ color: "red" }}>{formik.errors.otp}</em>
                    )}
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Next"
                    onClick={handleOtp}
                  />{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    defaultValue="Previous"
                    onClick={() => showForm("account")}
                  />
                </fieldset>
                {/*Form Step 2 End*/}
                {/*Form Step 3 Start*/}
                <fieldset class="tab personal_fieldset" id="tab-3">
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">OWNER INFO:</h2>
                      </div>
                      <div className="col-12">
                        <h2 className="steps">Step 3 - 5</h2>
                      </div>
                    </div>{" "}
                    <span className="ec-register-wrap">
                      <label>Owner Legal Full Name</label>
                      <input
                        type="text"
                        name="ownerfullname"
                        placeholder="Owner Legal Full Name"
                        id="ownerfullname"
                        value={formik.values.ownerfullname}
                        onChange={formik.handleChange}
                      />
                      {formik.errors.ownerfullname && (
                        <em style={{ color: "red" }}>
                          {formik.errors.ownerfullname}
                        </em>
                      )}
                    </span>
                    <br />
                    <span className="ec-register-wrap">
                      <label>Mobile Number</label>
                      <div className="input-group">
                        <select id="ccode">
                          <option value="">+1</option>
                          <option value="">+91</option>
                        </select>

                        <input
                          type="text"
                          name="phonenumber"
                          placeholder="Mobile Number"
                          className="form-control"
                          style={{ marginBottom: "unset", width: "initial" }}
                          id="phonenumber"
                          value={formik.values.phonenumber}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <br />
                      {formik.errors.phonenumber && (
                        <em style={{ color: "red" }}>
                          {formik.errors.phonenumber}
                        </em>
                      )}
                    </span>
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Next"
                    onClick={handleOwnerInfo}
                  />{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    defaultValue="Previous"
                    onClick={() => showForm("account")}
                  />
                </fieldset>
                {/*Form Step 3 End*/}
                {/*Form Step 4 Start*/}
                <fieldset className="payment_fieldset">
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">LEGAL ENTITY INFO:</h2>
                      </div>
                      <div className="col-12">
                        <h2 className="steps">Step 4 - 5</h2>
                      </div>
                    </div>{" "}
                    <span className="ec-register-wrap">
                      <label>Legal Company Name</label>
                      <input
                        type="text"
                        name="legalcompanyname"
                        placeholder="Legal Company Name"
                        id="legalcompanyname"
                        value={formik.values.legalcompanyname}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.legalcompanyname && (
                        <em style={{ color: "red" }}>
                          {formik.errors.legalcompanyname}
                        </em>
                      )}
                      <br />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Contact Person Full Name</label>
                      <input
                        type="text"
                        name="conntactpersongullname"
                        placeholder="Contact Person Full Name"
                        id="contactperson"
                        value={formik.values.conntactpersongullname}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.conntactpersongullname && (
                        <em style={{ color: "red" }}>
                          {formik.errors.conntactpersongullname}
                        </em>
                      )}
                      <br />
                    </span>
                    <span className="ec-register-wrap">
                      <label>D.B.A. Name (Optional)</label>
                      <input
                        type="text"
                        name="dbaname"
                        placeholder="D.B.A. Name (Optional)"
                        id="dbaname"
                        value={formik.values.dbaname}
                        onChange={formik.handleChange}
                      />
                    </span>
                    <span className="ec-register-wrap" id="zipcode">
                      <label>Zipcode</label>
                      <input
                        type="text"
                        name="zipcode"
                        placeholder="Zipcode"
                        id="zipcode"
                        value={formik.values.zipcode}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.zipcode && (
                        <em style={{ color: "red" }}>
                          {formik.errors.zipcode}
                        </em>
                      )}
                      <br />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Street Address</label>
                      <input
                        type="text"
                        name="streetadress"
                        placeholder="Street Address"
                        id="streetadress"
                        value={formik.values.streetadress}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.streetadress && (
                        <em style={{ color: "red" }}>
                          {formik.errors.streetadress}
                        </em>
                      )}
                      <br />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Address Line 2</label>
                      <input
                        type="text"
                        name="addressline"
                        placeholder="Address Line 2"
                        id="addressline"
                        value={formik.values.addressline}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.addressline && (
                        <em style={{ color: "red" }}>
                          {formik.errors.addressline}
                        </em>
                      )}
                      <br />
                    </span>
                    <span className="ec-register-wrap">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        id="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.city && (
                        <em style={{ color: "red" }}>{formik.errors.city}</em>
                      )}
                      <br />
                    </span>
                    <span className="ec-register-wrap">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        id="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.state && (
                        <em style={{ color: "red" }}>{formik.errors.state}</em>
                      )}
                      <br />
                    </span>
                    <span className="ec-register-wrap">
                      <label>
                        <input
                          type="checkbox"
                          style={{ height: "inherit", width: "inherit" }}
                        />{" "}
                        Same as Owner Info
                      </label>
                    </span>
                    <span className="ec-register-wrap">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        name="SameasOwnerphn"
                        placeholder="Phone Number"
                        id="SameasOwnerphn"
                        value={formik.values.SameasOwnerphn}
                        onChange={formik.handleChange}
                      />

                      {formik.errors.SameasOwnerphn && (
                        <em style={{ color: "red" }}>
                          {formik.errors.SameasOwnerphn}
                        </em>
                      )}
                      <br />
                    </span>
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Next"
                    onClick={handleLegalinfo}
                    // onClick={() => showForm("confirm")}
                  />{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    defaultValue="Previous"
                    onClick={() => showForm("personal")}
                  />
                </fieldset>
                {/*Form Step 4 End*/}
                {/*Form Step 5 Start*/}
                <fieldset className="confirm_fieldset">
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">LICENSE INFO:</h2>
                      </div>
                      <div className="col-12">
                        <h2 className="steps">Step 5 - 5</h2>
                      </div>
                    </div>{" "}
                    <span className="ec-register-wrap">
                      <label>
                        Sales And Use Tax or Certificate of Authority Number
                      </label>
                      <input
                        type="text"
                        name="Authority_number"
                        placeholder="Sales And Use Tax or Certificate of Authority Number"
                        id="authoritynumber"
                        value={formik.values.Authority_number}
                        onChange={formik.handleChange}
                      />
                      <br />
                      {formik.errors.Authority_number && (
                        <em style={{ color: "red" }}>
                          {formik.errors.Authority_number}
                        </em>
                      )}
                    </span>
                    <span className="ec-register-wrap">
                      <label>Upload File</label>
                      <input type="file" />
                    </span>
                    <span className="ec-register-wrap">
                      <label>EIN (Employee Identification Number)</label>
                      <input
                        type="number"
                        name="Employee_identification_number"
                        placeholder="EIN (Employee Identification Number)"
                        id="identificationnumber"
                        value={formik.values.Employee_identification_number}
                        onChange={formik.handleChange}
                      />
                      <br />
                      {formik.errors.Employee_identification_number && (
                        <em style={{ color: "red" }}>
                          {formik.errors.Employee_identification_number}
                        </em>
                      )}
                    </span>
                    <span className="ec-register-wrap">
                      <label>Upload File</label>
                      <input type="file" />
                    </span>
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Submit"
                    onClick={handleRegister}
                  />
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    defaultValue="Previous"
                    onClick={() => showForm("payment")}
                  />
                </fieldset>
                {/*Form Step 5 End*/}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Register;
