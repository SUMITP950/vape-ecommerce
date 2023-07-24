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
                    <h2 className="ec-breadcrumb-title">My Account</h2>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* ec-breadcrumb-list start */}
                    <ul className="ec-breadcrumb-list">
                      <li className="ec-breadcrumb-item">
                        <a href="">Home</a>
                      </li>
                      <li className="ec-breadcrumb-item active">My Account</li>
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
                    <li className="active">
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
                    <li>
                      <Link href="pact-act">PACT Act</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-9">
                <div className="account_content_area">
                  <h3>My Dashboard</h3>
                  <ul className="content_layout ul_li_block">
                    <li>
                      <h4>
                        <strong>Hello, Elena Velykorodnova!</strong>
                      </h4>
                      <p className="mb-0">
                        From your My Account Dashboard you have the ability to
                        view a snapshot of your recent account activity and
                        update your account information. Select a link below to
                        view or edit information.
                      </p>
                    </li>
                    <li>
                      <div className="account_content_area">
                        <h3>Edit Account Details</h3>
                        <div className="account-wrap cart-box">
                          <form className="gray-control">
                            <div className="row">
                              <div className="form-group col-sm-6">
                                <label> *Legal Company Name </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstname"
                                  placeholder="Legal Company Name"
                                  required=""
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label> * Contact Person Full Name </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstname"
                                  placeholder="Contact Person Full Name"
                                  required=""
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label> * D.B.A. Name (Optional) </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstname"
                                  placeholder="D.B.A. Name (Optional)"
                                  required=""
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label> *Zipcode </label>
                                <select
                                  className="form-control"
                                  style={{
                                    border: "1px solid #f2f2f2 !important",
                                  }}
                                >
                                  <option>Zipcode 1</option>
                                  <option>Zipcode 2</option>
                                  <option>Zipcode 3</option>
                                </select>
                              </div>
                              <div className="form-group col-sm-6">
                                <label> *Street Address</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstname"
                                  placeholder="Street Address"
                                  required=""
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label> *Address Line 2</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstname"
                                  placeholder="Address Line 2"
                                  required=""
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label> *City</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstname"
                                  placeholder="City"
                                  required=""
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label> *State</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstname"
                                  placeholder="State"
                                  required=""
                                />
                              </div>
                              <div className="form-group col-sm-6">
                                <label> *Phone Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="firstname"
                                  placeholder="Phone Number"
                                  required=""
                                />
                              </div>
                              <div className="pt-20 col-sm-12">
                                <button type="submit" className="btn btn-black">
                                  {" "}
                                  <b> Update </b>{" "}
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h4>Contact Information</h4>
                      <p className="mb-0">John Doe</p>
                      <a className="mb-3" href="#!">
                        info@example.com
                      </a>
                      <ul className="btns_group ul_li mt-3">
                        <li>
                          <a className="btn" href="#!">
                            Edit Account Information
                          </a>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            href="#!"
                          >
                            {" "}
                            + Add More Emails
                          </button>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div
                                  className="modal-header"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <button
                                    type="button"
                                    className="btn-close  btn-close-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <div className="account_content_area">
                                    <h3 className="text-center">
                                      Fill Your Details
                                    </h3>
                                    <div className="account-wrap cart-box">
                                      <form className="gray-control">
                                        <div className="row">
                                          <div className="form-group col-sm-6">
                                            <label> * First Name </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              required=""
                                            />
                                          </div>
                                          <div className="form-group col-sm-6">
                                            <label> * Last Name </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              required=""
                                            />
                                          </div>
                                          <div className="form-group col-sm-6">
                                            <label> * Email </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              required=""
                                            />
                                          </div>
                                          <div className="form-group col-sm-6">
                                            <label>
                                              {" "}
                                              *Contact Person Name{" "}
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              required=""
                                            />
                                          </div>
                                          <div className="form-group col-sm-6">
                                            <label> *Current Password</label>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="form-group col-sm-6">
                                            <label> *New Password</label>
                                            <input
                                              type="text"
                                              className="form-control"
                                            />
                                          </div>
                                          <div className="pt-20 col-sm-12 text-center">
                                            <button
                                              type="submit"
                                              className="btn btn-black"
                                            >
                                              {" "}
                                              <b> Add Account</b>{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="mt-2">
                          <a className="btn" href="#!">
                            Change Password
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h4>Newsletter</h4>
                      <p>
                        You are currently not subscribed to any newsletter.{" "}
                      </p>
                      <a className="btn" href="#!">
                        Edit Subscription
                      </a>
                    </li>
                    <li>
                      <h4 className="mb-3">Address Book</h4>
                      <a className="btn" href="#!">
                        Manage Addresses
                      </a>
                    </li>
                    <li>
                      <h4>Default Billing Address</h4>
                      <p>You have not set a default billing address.</p>
                      <a className="btn" href="#!">
                        Edit Address
                      </a>
                    </li>
                    <li>
                      <h4>Default Shipping Address</h4>
                      <p>You have not set a default shipping address.</p>
                      <a className="btn" href="#!">
                        Edit Address
                      </a>
                    </li>
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
