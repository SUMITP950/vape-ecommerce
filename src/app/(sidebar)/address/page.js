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
                    <h2 className="ec-breadcrumb-title">My Orders</h2>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* ec-breadcrumb-list start */}
                    <ul className="ec-breadcrumb-list">
                      <li className="ec-breadcrumb-item">
                        <a href="">Home</a>
                      </li>
                      <li className="ec-breadcrumb-item active">My Orders</li>
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
              <div className="col-12 col-lg-3">
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
                    <li className="active">
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
              <div className="col-12 col-lg-9">
                <div className="account_content_area">
                  <h3>Addresses</h3>
                  <div className="address-page row">
                    <div className="col-md-4">
                      <h4>Default Shipping Address</h4>
                      <ul>
                        <li>
                          <strong>Street:</strong> 3576 Glen Street
                        </li>
                        <li>
                          <strong>City:</strong> Summer Shade
                        </li>
                        <li>
                          <strong>State/province/area:</strong> Kentucky
                        </li>
                        <li>
                          <strong>Phone number:</strong> 270-428-8378
                        </li>
                        <li>
                          <strong>Zip code:</strong> 42166
                        </li>
                        <li>
                          <strong>Country calling code:</strong> +1
                        </li>
                        <li>
                          <strong>Country:</strong> United States
                        </li>
                      </ul>
                      <a href="#" className="btn btn-black">
                        {" "}
                        Edit Address{" "}
                      </a>
                    </div>
                    <div className="col-md-4 mt-lg-0 mt-4">
                      <h4>Default Billing Address</h4>
                      <ul>
                        <li>
                          <strong>Street:</strong> 3576 Glen Street
                        </li>
                        <li>
                          <strong>City:</strong> Summer Shade
                        </li>
                        <li>
                          <strong>State/province/area:</strong> Kentucky
                        </li>
                        <li>
                          <strong>Phone number:</strong> 270-428-8378
                        </li>
                        <li>
                          <strong>Zip code:</strong> 42166
                        </li>
                        <li>
                          <strong>Country calling code:</strong> +1
                        </li>
                        <li>
                          <strong>Country:</strong> United States
                        </li>
                      </ul>
                      <a href="#" className="btn btn-black">
                        {" "}
                        Edit Address{" "}
                      </a>
                    </div>
                    <div className="col-md-4 mt-lg-0 mt-4 add-address">
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="btn add-btn"
                        href="#!"
                      >
                        {" "}
                        + Add Address
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
                                        <label> *Contact Person Name </label>
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
                                          <b> Add Address</b>{" "}
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
                    </div>
                  </div>
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
