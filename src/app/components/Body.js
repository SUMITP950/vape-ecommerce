"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import jQuery from "jquery";
function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  let marqueeInterval;

  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);

  function startMarquee() {
    marqueeInterval = setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }

  function stopMarquee() {
    clearInterval(marqueeInterval);
  }

  parentSelector.addEventListener("mouseenter", stopMarquee);
  parentSelector.addEventListener("mouseleave", startMarquee);

  startMarquee();
}

function Body() {
  useEffect(() => {
    // setNotificationCount();
    // window.location.reload(1);

    Marquee(".marquee", 0.5);
  }, []);
  return (
    <>
      {/* ekka Cart Start */}
      <div className="ec-side-cart-overlay" />
      <div id="ec-side-cart" className="ec-side-cart">
        <div className="ec-cart-inner">
          <div className="ec-cart-top">
            <div className="ec-cart-title">
              <span className="cart_title">My Cart</span>
              <button className="ec-close">×</button>
            </div>
            <ul className="eccart-pro-items">
              <li>
                <a href="javascript:void(0);" className="sidekka_pro_img">
                  <img
                    src="assets/images/product-image/6_2.jpg"
                    alt="product"
                  />
                </a>
                <div className="ec-pro-content">
                  <a href="javascript:void(0);" className="cart_pro_title">
                    Product 1
                  </a>
                  <span className="cart-price">
                    <span>$76.00</span> x 1
                  </span>
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="ec_qtybtn"
                      defaultValue={1}
                    />
                  </div>
                  <a href="javascript:void(0)" className="remove">
                    <i className="fa fa-trash"></i>
                  </a>
                </div>
              </li>
              <li>
                <a href="javascript:void(0);" className="sidekka_pro_img">
                  <img src="assets/images/pro_vape.jpg" alt="product" />
                </a>
                <div className="ec-pro-content">
                  <a href="javascript:void(0);" className="cart_pro_title">
                    Product 2
                  </a>
                  <span className="cart-price">
                    <span>$64.00</span> x 1
                  </span>
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="ec_qtybtn"
                      defaultValue={1}
                    />
                  </div>
                  <a href="javascript:void(0)" className="remove">
                    <i className="fa fa-trash"></i>
                  </a>
                </div>
              </li>
              <li>
                <a href="javascript:void(0);" className="sidekka_pro_img">
                  <img src="assets/images/pro_vape.jpg" alt="product" />
                </a>
                <div className="ec-pro-content">
                  <a href="javascript:void(0);" className="cart_pro_title">
                    Product 3
                  </a>
                  <span className="cart-price">
                    <span>$59.00</span> x 1
                  </span>
                  <div className="qty-plus-minus">
                    <input
                      className="qty-input"
                      type="text"
                      name="ec_qtybtn"
                      defaultValue={1}
                    />
                  </div>
                  <a href="javascript:void(0)" className="remove">
                    <i className="fa fa-trash"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="ec-cart-bottom">
            <div className="cart-sub-total">
              <table className="table cart-table">
                <tbody>
                  <tr>
                    <td className="text-left">Sub-Total :</td>
                    <td className="text-right">$300.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">VAT (20%) :</td>
                    <td className="text-right">$60.00</td>
                  </tr>
                  <tr>
                    <td className="text-left">Total :</td>
                    <td className="text-right primary-color">$360.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cart_btn">
              <a href="cart" className="btn btn-primary">
                View Cart
              </a>
              <a href="checkout" className="btn btn-secondary">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ekka Cart End */}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n    .main_heading{\n    width: 100%;\n    background-color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid #e0e0e0;\n    border-width: 2px 0;\n}\n.main_heading h1{\n    margin: 26px 0;\n    font-size: 22px;\n    text-align: center;\n}\n",
        }}
      />
      {/* Main Slider Start */}
      <div className="sticky-header-next-sec ec-main-slider section">
        <div className="ec-slider swiper-container main-slider-nav main-slider-dot">
          {/* Main slider */}
          <div className="swiper-wrapper">
            <div className="ec-slide-item swiper-slide d-flex ec-slide-1">
              <div className="container align-self-center"></div>
            </div>
            <div className="ec-slide-item swiper-slide d-flex ec-slide-2">
              <div className="container align-self-center"></div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-white" />
          <div className="swiper-buttons">
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </div>
        </div>
      </div>
      {/* Main Slider End */}
      <section className="main_heading marquee-head">
        <div className="marquee">
          <h1>
            {" "}
            <b> WARNING:</b> THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN
            ADDICTIVE CHEMICAL.{" "}
          </h1>
        </div>
      </section>
      <section className="info-sec">
        <div className="container">
          <div
            className="info-boxes-container row row-joined mb-1 appear-animate animated fadeInUpShorter appear-animation-visible"
            data-animation-name="fadeInUpShorter"
            data-animation-duration={1000}
            style={{ animationDuration: "1000ms" }}
          >
            <div className="info-box info-box-icon-left col-lg-4">
              <i className="fi-rr-truck-container" />
              <div className="info-box-content">
                <h4>Free Delivery</h4>
                <p className="text-body">On all prepaid orders</p>
              </div>
              {/* End .info-box-content */}
            </div>
            {/* End .info-box */}
            <div className="info-box info-box-icon-left col-lg-4">
              <i className="fi-rs-money" />
              <div className="info-box-content">
                <h4>Secure Payments</h4>
                <p className="text-body">Confidence on all your devices</p>
              </div>
              {/* End .info-box-content */}
            </div>
            {/* End .info-box */}
            <div className="info-box info-box-icon-left col-lg-4">
              <i className="fi-rr-headphones" />
              <div className="info-box-content">
                <h4>Top-Notch Support</h4>
                <p className="text-body">storevapeindia@gmail.com</p>
              </div>
              {/* End .info-box-content */}
            </div>
            {/* End .info-box */}
          </div>
        </div>
      </section>
      <section
        className="section ec-product-tab section-space-p"
        id="collection"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-title">
                  Our Top <span>Products</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pro-for-all">
                  <div className="row">
                    {/* Product Content */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <Link href="productdetails" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </Link>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <Link
                                  className="btn btn-signup"
                                  href="productdetails"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </Link>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
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
      {/* ec Product tab Area End */}
      {/* ec Banner Section Start */}
      <section className="ec-banner section section-space-p">
        <h2 className="d-none">Banner</h2>
        <div className="container">
          {/* ec Banners Start */}
          <div className="ec-banner-inner">
            {/*ec Banner Start */}
            <div className="ec-banner-block ec-banner-block-2">
              <div className="row">
                <div className="banner-block col-lg-6 col-md-12 margin-b-30">
                  <div className="bnr-overlay">
                    <img src="assets/images/cate-banner-2.png" alt="" />
                  </div>
                </div>
                <div className="banner-block col-lg-6 col-md-12">
                  <div className="bnr-overlay">
                    <img src="assets/images/cate-banner.png" alt="" />
                  </div>
                </div>
              </div>
              {/* ec Banner End */}
            </div>
            {/* ec Banners End */}
          </div>
        </div>
      </section>
      {/* ec Banner Section End */}
      <section
        className="section ec-product-tab section-space-p"
        id="collection"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-title">
                  New <span>Arrival</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pro-for-all">
                  <div className="row">
                    {/* Product Content */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
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
      {/*  services Section Start */}
      <section
        className="section ec-services-section section-space-p pt-0"
        id="services"
      >
        <h2 className="d-none">Services</h2>
        <div className="container">
          <div className="row">
            <div className="ec_ser_content ec_ser_content_1 col-sm-12 col-md-6 col-lg-3">
              <div className="ec_ser_inner">
                <div className="ec-service-image">
                  <i className="fi fi-ts-truck-moving" />
                </div>
                <div className="ec-service-desc">
                  <h2>Something</h2>
                  <p>Some text will come here</p>
                </div>
              </div>
            </div>
            <div className="ec_ser_content ec_ser_content_2 col-sm-12 col-md-6 col-lg-3">
              <div className="ec_ser_inner">
                <div className="ec-service-image">
                  <i className="fi fi-ts-hand-holding-seeding" />
                </div>
                <div className="ec-service-desc">
                  <h2>Something</h2>
                  <p>Some text will come here</p>
                </div>
              </div>
            </div>
            <div className="ec_ser_content ec_ser_content_3 col-sm-12 col-md-6 col-lg-3">
              <div className="ec_ser_inner">
                <div className="ec-service-image">
                  <i className="fi fi-ts-badge-percent" />
                </div>
                <div className="ec-service-desc">
                  <h2>Something</h2>
                  <p>Some text will come here</p>
                </div>
              </div>
            </div>
            <div className="ec_ser_content ec_ser_content_4 col-sm-12 col-md-6 col-lg-3">
              <div className="ec_ser_inner">
                <div className="ec-service-image">
                  <i className="fi fi-ts-donate" />
                </div>
                <div className="ec-service-desc">
                  <h2>Something</h2>
                  <p>Some text will come here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*services Section End */}
      <section className="section-space-p">
        <img
          src="assets/images/banner4.jpg"
          className="img-fluid"
          width="100%;"
        />
      </section>
      <section
        className="section ec-product-tab section-space-p"
        id="collection"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title">
                <h2 className="ec-title">
                  Special <span>Offer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pro-for-all">
                  <div className="row">
                    {/* Product Content */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                      <div className="ec-product-inner">
                        <div className="ec-pro-image-outer">
                          <div className="ec-pro-image">
                            <a href="javascript:void(0);" className="image">
                              <img
                                className="main-image"
                                src="assets/images/pro_vape.jpg"
                                alt="Product"
                              />
                              <img
                                className="hover-image"
                                src="assets/images/product-image/6_2.jpg"
                                alt="Product"
                              />
                            </a>
                            <span className="percentage">20%</span>
                          </div>
                        </div>
                        <div className="ec-pro-content">
                          <h5 className="ec-pro-title">
                            <a href="javascript:void(0);">
                              FLUM Float 0% Nicotine 10pk
                            </a>
                          </h5>
                          <span className="ec-price">
                            <span className="new-price">
                              LOGIN TO VIEW PRICE
                            </span>
                          </span>
                          <div className="ec-pro-option">
                            <div className="ec-pro-color">
                              <div className="btn-group">
                                <a
                                  className="btn btn-signup"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 13px" }}
                                >
                                  VIEW PRODUCT
                                </a>
                                <a
                                  className="btn btn-dark"
                                  href="javascript:void(0);"
                                  style={{ padding: "0 12px" }}
                                >
                                  SHOP NOW
                                </a>
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
      {/* ec testmonial Start */}
      <section
        className="section ec-test-section section-space-ptb-100 section-space-m"
        id="reviews"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title mb-0">
                <h2 className="ec-bg-title">Testimonial</h2>
                <h2 className="ec-title">
                  Client <span>Review</span>
                </h2>
                <p className="sub-title mb-5 pb-4">What say client about us</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div id="testimonial-slider" className="owl-carousel">
                    <div className="testimonial">
                      <div className="testimonial-content">
                        <div className="testimonial-icon">
                          <i className="fa fa-quote-left" />
                        </div>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent bibendum dolor sit amet eros imperdiet,
                          sit amet hendrerit nisi vehicula.
                        </p>
                      </div>
                      <h3 className="title">williamson</h3>
                      <span className="post">Web Developer</span>
                    </div>
                    <div className="testimonial">
                      <div className="testimonial-content">
                        <div className="testimonial-icon">
                          <i className="fa fa-quote-left" />
                        </div>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent bibendum dolor sit amet eros imperdiet,
                          sit amet hendrerit nisi vehicula.
                        </p>
                      </div>
                      <h3 className="title">Kristina</h3>
                      <span className="post">Web Designer</span>
                    </div>
                    <div className="testimonial">
                      <div className="testimonial-content">
                        <div className="testimonial-icon">
                          <i className="fa fa-quote-left" />
                        </div>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent bibendum dolor sit amet eros imperdiet,
                          sit amet hendrerit nisi vehicula.
                        </p>
                      </div>
                      <h3 className="title">williamson</h3>
                      <span className="post">Web Developer</span>
                    </div>
                    <div className="testimonial">
                      <div className="testimonial-content">
                        <div className="testimonial-icon">
                          <i className="fa fa-quote-left" />
                        </div>
                        <p className="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent bibendum dolor sit amet eros imperdiet,
                          sit amet hendrerit nisi vehicula.
                        </p>
                      </div>
                      <h3 className="title">williamson</h3>
                      <span className="post">Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ec testmonial end */}
      {/* Ec Brand Section Start */}
      <section className="section ec-brand-area section-space-p">
        <h2 className="d-none">Brand</h2>
        <div className="container">
          <div className="row">
            <div className="ec-brand-outer">
              <ul id="ec-brand-slider">
                <li className="ec-brand-item" data-animation="zoomIn">
                  <div className="ec-brand-img">
                    <a href="#">
                      <img
                        alt="brand"
                        title="brand"
                        src="assets/images/brand-image/1.png"
                      />
                    </a>
                  </div>
                </li>
                <li className="ec-brand-item" data-animation="zoomIn">
                  <div className="ec-brand-img">
                    <a href="#">
                      <img
                        alt="brand"
                        title="brand"
                        src="assets/images/brand-image/2.png"
                      />
                    </a>
                  </div>
                </li>
                <li className="ec-brand-item" data-animation="zoomIn">
                  <div className="ec-brand-img">
                    <a href="#">
                      <img
                        alt="brand"
                        title="brand"
                        src="assets/images/brand-image/3.png"
                      />
                    </a>
                  </div>
                </li>
                <li className="ec-brand-item" data-animation="zoomIn">
                  <div className="ec-brand-img">
                    <a href="#">
                      <img
                        alt="brand"
                        title="brand"
                        src="assets/images/brand-image/4.png"
                      />
                    </a>
                  </div>
                </li>
                <li className="ec-brand-item" data-animation="zoomIn">
                  <div className="ec-brand-img">
                    <a href="#">
                      <img
                        alt="brand"
                        title="brand"
                        src="assets/images/brand-image/5.png"
                      />
                    </a>
                  </div>
                </li>
                <li className="ec-brand-item" data-animation="zoomIn">
                  <div className="ec-brand-img">
                    <a href="#">
                      <img
                        alt="brand"
                        title="brand"
                        src="assets/images/brand-image/6.png"
                      />
                    </a>
                  </div>
                </li>
                <li className="ec-brand-item" data-animation="zoomIn">
                  <div className="ec-brand-img">
                    <a href="#">
                      <img
                        alt="brand"
                        title="brand"
                        src="assets/images/brand-image/7.png"
                      />
                    </a>
                  </div>
                </li>
                <li className="ec-brand-item" data-animation="zoomIn">
                  <div className="ec-brand-img">
                    <a href="#">
                      <img
                        alt="brand"
                        title="brand"
                        src="assets/images/brand-image/8.png"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Ec Brand Section End */}
    </>
  );
}

export default Body;
