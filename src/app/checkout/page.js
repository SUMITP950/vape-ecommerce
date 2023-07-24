import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
const Checkout = () => {
  return (
    <div>
      <Header />
      <>
        <div className="sticky-header-next-sec ec-breadcrumb section-space-mb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row ec_breadcrumb_inner">
                  <div className="col-md-6 col-sm-12">
                    <h2 className="ec-breadcrumb-title">Checkout</h2>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* ec-breadcrumb-list start */}
                    <ul className="ec-breadcrumb-list">
                      <li className="ec-breadcrumb-item">
                        <a href="">Home</a>
                      </li>
                      <li className="ec-breadcrumb-item active">Checkout</li>
                    </ul>
                    {/* ec-breadcrumb-list end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ec breadcrumb end */}
        {/* Ec checkout page */}
        <section className="ec-page-content section-space-p">
          <div className="container">
            <div className="row">
              <div className="ec-checkout-leftside col-lg-8 col-md-12">
                {/* checkout content Start */}
                <div className="ec-checkout-content">
                  <div className="ec-checkout-inner">
                    <div className="ec-checkout-wrap margin-bottom-30 padding-bottom-3">
                      <div className="ec-checkout-block ec-check-bill">
                        <h3 className="ec-checkout-title">Billing Details</h3>
                        <div className="ec-bl-block-content">
                          <div className="ec-check-bill-form">
                            <form action="#" method="post">
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Full Name*</label>
                                <input
                                  type="text"
                                  name="firstname"
                                  placeholder="Enter your first name"
                                  required=""
                                />
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Email*</label>
                                <input
                                  type="text"
                                  name="lastname"
                                  placeholder="Email"
                                  required=""
                                />
                              </span>
                              <span className="ec-bill-wrap">
                                <label>Address</label>
                                <input
                                  type="text"
                                  name="address"
                                  placeholder="Address Line 1"
                                />
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Post Code</label>
                                <input
                                  type="text"
                                  name="postalcode"
                                  placeholder="Post Code"
                                />
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>City *</label>
                                <span className="">
                                  <select
                                    name="ec_select_city"
                                    id="ec-select-city"
                                    className="ec-bill-select"
                                    style={{
                                      width: "100%",
                                      display: "block",
                                      height: 45,
                                    }}
                                  >
                                    <option selected="" disabled="">
                                      City
                                    </option>
                                    <option value={1}>City 1</option>
                                    <option value={2}>City 2</option>
                                    <option value={3}>City 3</option>
                                    <option value={4}>City 4</option>
                                    <option value={5}>City 5</option>
                                  </select>
                                </span>
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Country *</label>
                                <span className="">
                                  <select
                                    name="ec_select_country"
                                    id="ec-select-country"
                                    className="ec-bill-select"
                                    style={{
                                      width: "100%",
                                      display: "block",
                                      height: 45,
                                    }}
                                  >
                                    <option selected="" disabled="">
                                      Country
                                    </option>
                                    <option value={1}>Country 1</option>
                                    <option value={2}>Country 2</option>
                                    <option value={3}>Country 3</option>
                                    <option value={4}>Country 4</option>
                                    <option value={5}>Country 5</option>
                                  </select>
                                </span>
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Region State</label>
                                <span className="">
                                  <select
                                    name="ec_select_state"
                                    id="ec-select-state"
                                    className="ec-bill-select"
                                    style={{
                                      width: "100%",
                                      display: "block",
                                      height: 45,
                                    }}
                                  >
                                    <option selected="" disabled="">
                                      Region/State
                                    </option>
                                    <option value={1}>Region/State 1</option>
                                    <option value={2}>Region/State 2</option>
                                    <option value={3}>Region/State 3</option>
                                    <option value={4}>Region/State 4</option>
                                    <option value={5}>Region/State 5</option>
                                  </select>
                                </span>
                              </span>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="ec-checkout-block ec-check-bill">
                        <label style={{ margin: "2% 0" }}>
                          <input
                            type="checkbox"
                            defaultValue=""
                            style={{ width: "auto", height: "auto" }}
                          />{" "}
                          Same as Billing Address
                        </label>
                        <h3 className="ec-checkout-title">Shipping Details</h3>
                        <div className="ec-bl-block-content">
                          <div className="ec-check-bill-form">
                            <form action="#" method="post">
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Full Name*</label>
                                <input
                                  type="text"
                                  name="firstname"
                                  placeholder="Enter your first name"
                                  required=""
                                />
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Email*</label>
                                <input
                                  type="text"
                                  name="lastname"
                                  placeholder="Email"
                                  required=""
                                />
                              </span>
                              <span className="ec-bill-wrap">
                                <label>Address</label>
                                <input
                                  type="text"
                                  name="address"
                                  placeholder="Address Line 1"
                                />
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Post Code</label>
                                <input
                                  type="text"
                                  name="postalcode"
                                  placeholder="Post Code"
                                />
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>City *</label>
                                <span className="">
                                  <select
                                    name="ec_select_city"
                                    id="ec-select-city"
                                    className="ec-bill-select"
                                    style={{
                                      width: "100%",
                                      display: "block",
                                      height: 45,
                                    }}
                                  >
                                    <option selected="" disabled="">
                                      City
                                    </option>
                                    <option value={1}>City 1</option>
                                    <option value={2}>City 2</option>
                                    <option value={3}>City 3</option>
                                    <option value={4}>City 4</option>
                                    <option value={5}>City 5</option>
                                  </select>
                                </span>
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Country *</label>
                                <span className="">
                                  <select
                                    name="ec_select_country"
                                    id="ec-select-country"
                                    className="ec-bill-select"
                                    style={{
                                      width: "100%",
                                      display: "block",
                                      height: 45,
                                    }}
                                  >
                                    <option selected="" disabled="">
                                      Country
                                    </option>
                                    <option value={1}>Country 1</option>
                                    <option value={2}>Country 2</option>
                                    <option value={3}>Country 3</option>
                                    <option value={4}>Country 4</option>
                                    <option value={5}>Country 5</option>
                                  </select>
                                </span>
                              </span>
                              <span className="ec-bill-wrap ec-bill-half">
                                <label>Region State</label>
                                <span className="">
                                  <select
                                    name="ec_select_state"
                                    id="ec-select-state"
                                    className="ec-bill-select"
                                    style={{
                                      width: "100%",
                                      display: "block",
                                      height: 45,
                                    }}
                                  >
                                    <option selected="" disabled="">
                                      Region/State
                                    </option>
                                    <option value={1}>Region/State 1</option>
                                    <option value={2}>Region/State 2</option>
                                    <option value={3}>Region/State 3</option>
                                    <option value={4}>Region/State 4</option>
                                    <option value={5}>Region/State 5</option>
                                  </select>
                                </span>
                              </span>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*cart content End */}
              </div>
              {/* Sidebar Area Start */}
              <div className="ec-checkout-rightside col-lg-4 col-md-12">
                <div className="ec-sidebar-wrap">
                  {/* Sidebar Summary Block */}
                  <div className="ec-sidebar-block">
                    <div className="ec-sb-title">
                      <h3 className="ec-sidebar-title">Summary</h3>
                    </div>
                    <div className="ec-sb-block-content">
                      <div className="ec-checkout-summary">
                        <div>
                          <span className="text-left">Old Invoice #1</span>
                          <span className="text-right">$180.00</span>
                        </div>
                        <div>
                          <span className="text-left">Old Invoice #2</span>
                          <span className="text-right">$180.00</span>
                        </div>
                        <div>
                          <span className="text-left">Sub-Total</span>
                          <span className="text-right">$80.00</span>
                        </div>
                        <div>
                          <span className="text-left">Delivery Charges</span>
                          <span className="text-right">$80.00</span>
                        </div>
                        <div>
                          <span className="text-left">Coupan Discount</span>
                          <span className="text-right">
                            <a className="ec-checkout-coupan">Apply Coupan</a>
                          </span>
                        </div>
                        <div className="ec-checkout-coupan-content">
                          <form
                            className="ec-checkout-coupan-form"
                            name="ec-checkout-coupan-form"
                            method="post"
                            action="#"
                          >
                            <input
                              className="ec-coupan"
                              type="text"
                              required=""
                              placeholder="Enter Your Coupan Code"
                              name="ec-coupan"
                              defaultValue=""
                            />
                            <button
                              className="ec-coupan-btn button btn-primary"
                              type="submit"
                              name="subscribe"
                              value=""
                            >
                              Apply
                            </button>
                          </form>
                        </div>
                        <div className="ec-checkout-summary-total">
                          <span className="text-left">Total Amount</span>
                          <span className="text-right">$80.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Summary Block */}
                </div>
                <div className="ec-sidebar-wrap ec-checkout-pay-wrap">
                  {/* Sidebar Payment Block */}
                  <div className="ec-sidebar-block">
                    <div className="ec-sb-title">
                      <h3 className="ec-sidebar-title">Payment Method</h3>
                    </div>
                    <div className="ec-sb-block-content">
                      <div className="ec-checkout-pay">
                        <div className="ec-pay-desc">
                          Please select the preferred payment method to use on
                          this order.
                        </div>
                        <form action="#">
                          <span className="ec-pay-option">
                            <span>
                              <input
                                type="radio"
                                id="pay1"
                                name="radio-group"
                                defaultChecked=""
                              />
                              <label htmlFor="pay1">Cash On Delivery</label>
                            </span>
                          </span>
                          <span className="ec-pay-commemt">
                            <span className="ec-pay-opt-head">
                              Add Comments About Your Order
                            </span>
                            <textarea
                              name="your-commemt"
                              placeholder="Comments"
                              defaultValue={""}
                            />
                          </span>
                          <span className="ec-pay-agree">
                            <input type="checkbox" defaultValue="" />
                            <a href="#">
                              I have read and agree to the{" "}
                              <span>Terms &amp; Conditions</span>
                            </a>
                            <span className="checked" />
                          </span>
                          <span className="ec-check-order-btn text-center">
                            <a className="btn btn-primary" href="#">
                              Place Order
                            </a>
                          </span>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Payment Block */}
                </div>
                <div className="ec-sidebar-wrap ec-check-pay-img-wrap">
                  {/* Sidebar Payment Block */}
                  <div className="ec-sidebar-block">
                    <div className="ec-sb-title">
                      <h3 className="ec-sidebar-title">100% Secure Payment</h3>
                    </div>
                    <div className="ec-sb-block-content">
                      <div className="ec-check-pay-img-inner">
                        <div className="ec-check-pay-img">
                          <img src="assets/images/icons/payment1.png" alt="" />
                        </div>
                        <div className="ec-check-pay-img">
                          <img src="assets/images/icons/payment2.png" alt="" />
                        </div>
                        <div className="ec-check-pay-img">
                          <img src="assets/images/icons/payment3.png" alt="" />
                        </div>
                        <div className="ec-check-pay-img">
                          <img src="assets/images/icons/payment4.png" alt="" />
                        </div>
                        <div className="ec-check-pay-img">
                          <img src="assets/images/icons/payment5.png" alt="" />
                        </div>
                        <div className="ec-check-pay-img">
                          <img src="assets/images/icons/payment6.png" alt="" />
                        </div>
                        <div className="ec-check-pay-img">
                          <img src="assets/images/icons/payment7.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Payment Block */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </div>
  );
};
export default Checkout;
