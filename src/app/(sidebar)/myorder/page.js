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
              <div className="col col-lg-3">
                <div className="account_menu">
                  <ul className="account_menu_list ul_li_block">
                    <li>
                      <Link href="myaccount">My Account</Link>
                    </li>
                    <li className="active">
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
                  <div className="filter-sec">
                    <h3>My Orders</h3>
                    <div className="filter-s">
                      <button id="filter-button" className="button">
                        Filter
                      </button>
                      <div id="filter-container" className="filters">
                        <ul className="filters__list">
                          <li>
                            <input id="f1" type="checkbox" />
                            <label htmlFor="f1">Filter 1</label>
                          </li>
                          <li>
                            <input id="f2" type="checkbox" />
                            <label htmlFor="f2">Filter 2</label>
                          </li>
                          <li>
                            <input id="f3" type="checkbox" />
                            <label htmlFor="f3">Filter 3</label>
                          </li>
                          <li>
                            <input id="f4" type="checkbox" />
                            <label htmlFor="f4">Filter 4</label>
                          </li>
                          <li>
                            <input id="f5" type="checkbox" />
                            <label htmlFor="f5">Filter 5</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="cart-table">
                    <form className="cart-form">
                      <table className="product-table">
                        <thead className="font-2">
                          <tr>
                            <th> ID</th>
                            <th>Images</th>
                            {/*<th>Business Name</th> */}
                            <th>Name</th>
                            <th>Date</th>
                            <th> Price</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>
                              <span>225</span>
                            </th>
                            <td>
                              <img
                                className="prod-img"
                                src="assets/images/product-image/1.jpg"
                                alt="product image"
                              />
                            </td>
                            <td>Stylish baby shoes</td>
                            <td>16 Jul 2021</td>
                            <td>$65</td>
                            <td>Active</td>
                            <td className="order-status">
                              <Link
                                href="orderdetails"
                                className="btn small-btn theme-btn"
                              >
                                {" "}
                                View{" "}
                              </Link>
                              {/*<a href="go-to-cart.php" class="btn small-btn theme-btn"> Reorder </a>*/}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span>548</span>
                            </th>
                            <td>
                              <img
                                className="prod-img"
                                src="assets/images/product-image/2.jpg"
                                alt="product image"
                              />
                            </td>
                            <td>Sweat Pullover Hoodie</td>
                            <td>13 Aug 2016</td>
                            <td>$68</td>
                            <td>On Hold</td>
                            <td className="order-status">
                              <a
                                href="view-order.php"
                                className="btn small-btn theme-btn"
                              >
                                {" "}
                                View{" "}
                              </a>
                              {/*<a href="go-to-cart.php" class="btn small-btn theme-btn"> Reorder </a>*/}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span>225</span>
                            </th>
                            <td>
                              <img
                                className="prod-img"
                                src="assets/images/product-image/3.jpg"
                                alt="product image"
                              />
                            </td>
                            <td>Stylish baby shoes</td>
                            <td>16 Jul 2021</td>
                            <td>$65</td>
                            <td>Active</td>
                            <td className="order-status">
                              <a
                                href="view-order.php"
                                className="btn small-btn theme-btn"
                              >
                                {" "}
                                View{" "}
                              </a>
                              {/*<a href="go-to-cart.php" class="btn small-btn theme-btn"> Reorder </a>*/}
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <span>225</span>
                            </th>
                            <td>
                              <img
                                className="prod-img"
                                src="assets/images/product-image/4.jpg"
                                alt="product image"
                              />
                            </td>
                            <td>Stylish baby shoes</td>
                            <td>16 Jul 2021</td>
                            <td>$65</td>
                            <td>Active</td>
                            <td className="order-status">
                              <a
                                href="view-order.php"
                                className="btn small-btn theme-btn"
                              >
                                {" "}
                                View{" "}
                              </a>
                              {/*<a href="go-to-cart.php" class="btn small-btn theme-btn"> Reorder </a>*/}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="continue-shopping text-center">
                        <a href="myaccount.php" className="btn btn-black">
                          {" "}
                          Back to account{" "}
                        </a>
                      </div>
                    </form>
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
