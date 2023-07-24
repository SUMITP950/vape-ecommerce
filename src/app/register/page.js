"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import $ from "jquery";
import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    $(document).ready(function () {
      var current_fs, next_fs, previous_fs; //fieldsets
      var opacity;
      var current = 1;
      var steps = $("fieldset").length;

      setProgressBar(current);

      $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li")
          .eq($("fieldset").index(next_fs))
          .addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              next_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(++current);
      });

      $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li")
          .eq($("fieldset").index(current_fs))
          .removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate(
          { opacity: 0 },
          {
            step: function (now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                display: "none",
                position: "relative",
              });
              previous_fs.css({ opacity: opacity });
            },
            duration: 500,
          }
        );
        setProgressBar(--current);
      });

      function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
      }

      $(".submit").click(function () {
        return false;
      });
    });
  }, []);
  return (
    <>
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
              <form id="msform">
                {/* progressbar */}
                <ul id="progressbar">
                  <li className="active" id="account">
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
                <fieldset>
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
                        type="text"
                        name="firstname"
                        placeholder="Enter your Email Address"
                        required=""
                        style={{ marginBottom: 2 }}
                      />
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
                        name="firstname"
                        placeholder="xyz"
                        required=""
                        readOnly=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>
                        Password<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Password"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>
                        Confirm Password<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Confirm Password"
                        required=""
                      />
                    </span>
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Next"
                  />
                </fieldset>
                <fieldset>
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
                        type="text"
                        name="firstname"
                        placeholder="Your OTP"
                        required=""
                      />
                    </span>
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Next"
                  />{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    defaultValue="Previous"
                  />
                </fieldset>
                <fieldset>
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
                        name="firstname"
                        placeholder="Owner Legal Full Name"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Mobile Number</label>
                      <div className="input-group">
                        <select>
                          <option value="">+1</option>
                          <option value="">+91</option>
                        </select>
                        <input
                          type="text"
                          name="firstname"
                          placeholder="Mobile Number"
                          required=""
                          className="form-control"
                          style={{ marginBottom: "unset", width: "initial" }}
                        />
                      </div>
                    </span>
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Next"
                  />{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    defaultValue="Previous"
                  />
                </fieldset>
                <fieldset>
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
                        name="firstname"
                        placeholder="Legal Company Name"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Contact Person Full Name</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Contact Person Full Name"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>D.B.A. Name (Optional)</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="D.B.A. Name (Optional)"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Zipcode</label>
                      <select
                        className="form-control"
                        style={{ border: "1px solid #f2f2f2 !important" }}
                      >
                        <option>Zipcode 1</option>
                        <option>Zipcode 2</option>
                        <option>Zipcode 3</option>
                      </select>
                    </span>
                    <span className="ec-register-wrap">
                      <label>Street Address</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Street Address"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Address Line 2</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Address Line 2"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>City</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="City"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>State</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="State"
                        required=""
                      />
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
                        name="firstname"
                        placeholder="Phone Number"
                        required=""
                      />
                    </span>
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Next"
                  />{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    defaultValue="Previous"
                  />
                </fieldset>
                <fieldset>
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
                        name="firstname"
                        placeholder="Sales And Use Tax or Certificate of Authority Number"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Upload File</label>
                      <input type="file" />
                    </span>
                    <span className="ec-register-wrap">
                      <label>EIN (Employee Identification Number)</label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="EIN (Employee Identification Number)"
                        required=""
                      />
                    </span>
                    <span className="ec-register-wrap">
                      <label>Upload File</label>
                      <input type="file" />
                    </span>
                  </div>{" "}
                  <Link href="login">
                    <input
                      type="button"
                      name="next"
                      className="next action-button"
                      defaultValue="Submit"
                    />
                  </Link>{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    defaultValue="Previous"
                  />
                </fieldset>
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
