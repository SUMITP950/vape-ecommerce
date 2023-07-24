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
                    <h2 className="ec-breadcrumb-title">Pending Invoice</h2>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* ec-breadcrumb-list start */}
                    <ul className="ec-breadcrumb-list">
                      <li className="ec-breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="ec-breadcrumb-item active">
                        Pending Invoice
                      </li>
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
                    <li className="active">
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
                    <h3>Pending Invoice</h3>
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
                            <th>Invoice Number</th>
                            <th> Invoice Amount</th>
                            <th>Order Number</th>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="">
                              <a href="#">#265645</a>
                            </td>
                            <td className="price"> $ 4,960.00 </td>
                            <td className="quantity">HDRDFT123</td>
                            <td className="description"> May 4, 2023</td>
                            <td className="order-status">
                              <a href="#" className="btn small-btn theme-btn">
                                Pay Invoice{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="">
                              <a href="#">#265645</a>
                            </td>
                            <td className="price"> $ 4,960.00 </td>
                            <td className="quantity">HDRDFT123</td>
                            <td className="description"> May 4, 2023</td>
                            <td className="order-status">
                              <a href="#" className="btn small-btn theme-btn">
                                Pay Invoice{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="">
                              <a href="#">#265645</a>
                            </td>
                            <td className="price"> $ 4,960.00 </td>
                            <td className="quantity">HDRDFT123</td>
                            <td className="description"> May 4, 2023</td>
                            <td className="order-status">
                              <a href="#" className="btn small-btn theme-btn">
                                Pay Invoice{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="">
                              <a href="#">#265645</a>
                            </td>
                            <td className="price"> $ 4,960.00 </td>
                            <td className="quantity">HDRDFT123</td>
                            <td className="description"> May 4, 2023</td>
                            <td className="order-status">
                              <a href="#" className="btn small-btn theme-btn">
                                Pay Invoice{" "}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
