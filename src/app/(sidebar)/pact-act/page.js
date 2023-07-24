import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>
        <Header />
        {/* Ec breadcrumb start */}
        <div className="sticky-header-next-sec ec-breadcrumb section-space-mb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row ec_breadcrumb_inner">
                  <div className="col-md-6 col-sm-12">
                    <h2 className="ec-breadcrumb-title">Pact Act</h2>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* ec-breadcrumb-list start */}
                    <ul className="ec-breadcrumb-list">
                      <li className="ec-breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="ec-breadcrumb-item active">Pact Act</li>
                    </ul>
                    {/* ec-breadcrumb-list end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ec breadcrumb end */}
        <section className="account_section section_space">
          <div className="container">
            <div className="row">
              <div className="col col-lg-3">
                <div className="account_menu">
                  <ul className="account_menu_list ul_li_block">
                    <li>
                      <Link href="myaccount">My Account</Link>
                    </li>
                    <li>
                      <Link href="myorder">My Orders</Link>
                    </li>
                    <li>
                      <Link href="ready-to-cart">Ready to Cart</Link>
                    </li>
                    <li>
                      <Link href="address">Addresses</Link>
                    </li>
                    <li>
                      <Link href="pending-invoice">Pending Invoice</Link>
                    </li>
                    <li className="active">
                      <Link href="pact-act">PACT Act</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-9">
                <div className="account_content_area">
                  <h3>Pact Act</h3>
                  <ul className="">
                    <li>
                      <p>
                        To ensure compliance with the ongoing PACT Act, all
                        current and prospective customers are required to submit
                        their business information. In addition, all accounts
                        MUST fill out our PACT Act form and send in the
                        necessary documents to continue receiving orders from
                        Vape. Any business document that is required in your
                        state MUST be submitted. (Tobacco License, Business
                        License, OTP License, Sales &amp; Use Tax Permit,
                        Seller's Permit).
                      </p>
                      <p>
                        Please do not hesitate to contact us if there are any
                        questions regarding the submission of this form. We are
                        available Monday to Friday from 8AM-7PM EST and we can
                        be reached via phone at +10123456789 or via email at
                        support@domain.com.
                      </p>
                      <h5>
                        <b>Sincerely,</b>
                      </h5>
                      <p>
                        <i>Vape Team</i>
                      </p>
                    </li>
                    <div className="account-wrap cart-box">
                      <form className="gray-control">
                        <div className="row">
                          <div className="form-group col-sm-6">
                            <label> * Email Address </label>
                            <input
                              type="text"
                              className="form-control"
                              required=""
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label> * Owner Legal First Name </label>
                            <input
                              type="text"
                              className="form-control"
                              required=""
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label> * Owner Legal Last Name </label>
                            <input
                              type="text"
                              className="form-control"
                              required=""
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label> * Legal Company Name </label>
                            <input
                              type="text"
                              className="form-control"
                              required=""
                            />
                          </div>
                          <div className="form-group col-sm-6">
                            <label> * Street Address</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-sm-6">
                            <label> * Address Line 2</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-sm-4">
                            <label> * City</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-sm-4">
                            <label> * State </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-sm-4">
                            <label> * Zipcode </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-sm-6">
                            <label> * Phone Number </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-sm-6">
                            <label> * FEIN #</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-sm-6">
                            <label>
                              {" "}
                              * Business License Number # or Resale Certificate
                              #{" "}
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-sm-6">
                            <label>
                              {" "}
                              * Tobacco License Number (If required by your
                              state){" "}
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group col-sm-12">
                            <h5>LEGAL DOCUMENTS UPLOAD </h5>
                            <label>
                              {" "}
                              * Please upload picture or scanned document for
                              the following items:{" "}
                            </label>
                            <div className=" mt-1 mb-4">
                              <button
                                className="import-d"
                                onclick="importData()"
                              >
                                Upload a photo or scanned version of EIN Number
                                letter(Max upload 10 MB)
                              </button>
                              <button
                                className="import-d"
                                onclick="importData()"
                              >
                                Upload a photo or scanned version of Legal
                                Business License(Max upload 10 MB)
                              </button>
                              <button
                                className="import-d"
                                onclick="importData()"
                              >
                                Upload a Photo of Your Tobacco License (IF
                                REQUIRED BY YOUR STATE STATE)
                              </button>
                            </div>
                          </div>
                          <div className="pt-20 col-sm-12">
                            <button type="submit" className="btn btn-black">
                              {" "}
                              <b> Submit PACT Act Data </b>{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;
