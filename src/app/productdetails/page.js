"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useEffect } from "react";
import $ from "jquery";
import Router from "next/router";

const Productdetails = () => {
  useEffect(() => {
    // window.location.reload();
    $(document).ready(function () {
      $(".minus").click(function () {
        var $input = $(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      $(".plus").click(function () {
        var $input = $(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
    });
  }, []);
  return (
    <div>
      <Header />
      <>
        {/* Ec breadcrumb start */}
        <div className="sticky-header-next-sec  ec-breadcrumb section-space-mb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row ec_breadcrumb_inner">
                  <div className="col-md-6 col-sm-12">
                    <h2 className="ec-breadcrumb-title">Single Products</h2>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* ec-breadcrumb-list start */}
                    <ul className="ec-breadcrumb-list">
                      <li className="ec-breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li className="ec-breadcrumb-item active">Products</li>
                    </ul>
                    {/* ec-breadcrumb-list end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ec breadcrumb end */}
        {/* Sart Single product */}
        <section className="ec-page-content section-space-p">
          <div className="container">
            <div className="row">
              <div className="ec-pro-rightside ec-common-rightside col-lg-12 col-md-12">
                {/* Single product content Start */}
                <div className="single-pro-block">
                  <div className="single-pro-inner">
                    <div className="row">
                      <div className="single-pro-img single-pro-img-no-sidebar">
                        <div className="single-product-scroll">
                          <div className="single-product-cover">
                            <div className="single-slide zoom-image-hover">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2020/10/criss_cross_pipe_tobacco_smooth_authorized_wholesale_distributor_vape_smoke_tobacco_cigars_delta8_cbd_kratom_d8_free_shipping_rzsmoke.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single-slide zoom-image-hover">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2022/06/fume_unlimited_7000_puffs_wholesale_distributor_near_me_free_shipping_fume_master_distro_wholesaler.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single-slide zoom-image-hover">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2020/10/criss_cross_pipe_tobacco_smooth_authorized_wholesale_distributor_vape_smoke_tobacco_cigars_delta8_cbd_kratom_d8_free_shipping_rzsmoke.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single-slide zoom-image-hover">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2020/10/criss_cross_pipe_tobacco_smooth_authorized_wholesale_distributor_vape_smoke_tobacco_cigars_delta8_cbd_kratom_d8_free_shipping_rzsmoke.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single-slide zoom-image-hover">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2020/10/criss_cross_pipe_tobacco_smooth_authorized_wholesale_distributor_vape_smoke_tobacco_cigars_delta8_cbd_kratom_d8_free_shipping_rzsmoke.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="single-nav-thumb">
                            <div className="single-slide">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2020/10/criss_cross_pipe_tobacco_smooth_authorized_wholesale_distributor_vape_smoke_tobacco_cigars_delta8_cbd_kratom_d8_free_shipping_rzsmoke.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single-slide">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2022/06/fume_unlimited_7000_puffs_wholesale_distributor_near_me_free_shipping_fume_master_distro_wholesaler.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single-slide">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2020/10/criss_cross_pipe_tobacco_smooth_authorized_wholesale_distributor_vape_smoke_tobacco_cigars_delta8_cbd_kratom_d8_free_shipping_rzsmoke.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single-slide">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2022/06/fume_unlimited_7000_puffs_wholesale_distributor_near_me_free_shipping_fume_master_distro_wholesaler.jpg"
                                alt=""
                              />
                            </div>
                            <div className="single-slide">
                              <img
                                className="img-responsive"
                                src="https://rzsmoke.com/wp-content/uploads/2020/10/criss_cross_pipe_tobacco_smooth_authorized_wholesale_distributor_vape_smoke_tobacco_cigars_delta8_cbd_kratom_d8_free_shipping_rzsmoke.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="single-pro-desc single-pro-desc-no-sidebar">
                        <div className="single-pro-content">
                          <h5 className="ec-single-title">
                            Fume Unlimited 7000 Puffs
                          </h5>
                          {/*<div class="ec-single-rating-wrap">*/}
                          {/*    <div class="ec-single-rating">*/}
                          {/*        <i class="ecicon eci-star fill"></i>*/}
                          {/*        <i class="ecicon eci-star fill"></i>*/}
                          {/*        <i class="ecicon eci-star fill"></i>*/}
                          {/*        <i class="ecicon eci-star fill"></i>*/}
                          {/*        <i class="ecicon eci-star-o"></i>*/}
                          {/*    </div>*/}
                          {/*    <span class="ec-read-review"><a href="#ec-spt-nav-review">Be the first to*/}
                          {/*            review this product</a></span>*/}
                          {/*</div>*/}
                          <div
                            className="ec-single-desc"
                            style={{ margin: "2% 0" }}
                          >
                            <h6>
                              <b>Highlights</b>
                            </h6>
                            <ul className="pro_list ">
                              <li className="list-circle">SOLD AS 5 Pack</li>
                              <li className="list-circle">
                                Original QRJOY FUME
                              </li>
                              <li className="list-circle">SOLD AS 5 Pack</li>
                              <li className="list-circle">
                                Original QRJOY FUME
                              </li>
                            </ul>
                          </div>
                          <div className="ec-single-price-stoke">
                            <div className="ec-single-price">
                              <span className="new-price text-danger">
                                LOGIN TO VIEW PRICES
                              </span>
                            </div>
                            <div className="ec-single-stoke">
                              <span className="ec-single-ps-title">
                                IN STOCK
                              </span>
                              <span className="ec-single-sku">SKU#: WH12</span>
                            </div>
                          </div>
                          <div className="mt-4 variable_add2cart clearfix">
                            <div className="clearfix variable_attribute_title mb-2 border-bottom">
                              <div className="float-start  font-weight-700">
                                Flavor
                              </div>
                              <div className="float-end variable-qty-title">
                                Quantity
                              </div>
                            </div>
                            {/* FORM */}
                            <form
                              id="variable-add-form"
                              className="cart variations_form"
                              data-product_id={187977}
                            >
                              {/* single variation item */}
                              <div className="clearfix variable_add_item product-row">
                                <div className="float-start mt-2">
                                  <span className="font-weight-700">
                                    Apple Cream
                                  </span>
                                  <span className="var-price-box">
                                    <div className="login_alert">
                                      Login to view prices
                                    </div>
                                  </span>
                                </div>
                                <div className="float-end">
                                  <div className="add_to_cart">
                                    <div className="increment_decrement"></div>
                                    <div className="number">
                                      <span className="minus span">-</span>
                                      <input
                                        className="input"
                                        type="text"
                                        value="0"
                                      />
                                      <span className="plus span">+</span>
                                      <i className="fa fa-trash ml-3"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* // end single variation item */}
                              {/* single variation item */}
                              <div className="clearfix variable_add_item product-row">
                                <div className="float-start mt-2">
                                  <span className="font-weight-700">
                                    Apple Cream
                                  </span>
                                  <span className="var-price-box">
                                    <div className="login_alert">
                                      Login to view prices
                                    </div>
                                  </span>
                                </div>
                                <div className="float-end">
                                  <div className="add_to_cart">
                                    <div className="increment_decrement"></div>
                                    <div className="number">
                                      <span className="minus span">-</span>
                                      <input
                                        className="input"
                                        type="text"
                                        value="0"
                                      />
                                      <span className="plus span">+</span>
                                      <i className="fa fa-trash ml-3"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* // end single variation item */}
                              <div className="clearfix mt-4  float-end">
                                <a
                                  href="https://rzsmoke.com/request-quote.php"
                                  className="btn btn-primary btn-md"
                                >
                                  Request Quote
                                </a>
                              </div>
                            </form>
                          </div>

                          <div className="ec-single-qty">
                            <div className="ec-single-cart ">
                              <a
                                className="btn btn-dark"
                                href="contact"
                                style={{ padding: "0 12px" }}
                              >
                                Request Quote
                              </a>
                            </div>
                            <div className="ec-single-wishlist">
                              <a
                                className="ec-btn-group wishlist"
                                title="Wishlist"
                              >
                                <i className="fi-rr-heart" />
                              </a>
                            </div>
                            <div className="ec-single-quickview">
                              <a
                                href="#"
                                className="ec-btn-group quickview"
                                data-link-action="quickview"
                                title="Quick view"
                                data-bs-toggle="modal"
                                data-bs-target="#ec_quickview_modal"
                              >
                                <i className="fi-rr-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="ec-single-social">
                            <ul className="mb-0">
                              <li className="list-inline-item facebook">
                                <a href="#">
                                  <i className="ecicon eci-facebook" />
                                </a>
                              </li>
                              <li className="list-inline-item twitter">
                                <a href="#">
                                  <i className="ecicon eci-twitter" />
                                </a>
                              </li>
                              <li className="list-inline-item instagram">
                                <a href="#">
                                  <i className="ecicon eci-instagram" />
                                </a>
                              </li>
                              <li className="list-inline-item whatsapp">
                                <a href="#">
                                  <i className="ecicon eci-whatsapp" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Single product content End */}
                {/* Single product tab start */}
                <div className="ec-single-pro-tab">
                  <div className="ec-single-pro-tab-wrapper">
                    <div className="ec-single-pro-tab-nav">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            data-bs-target="#ec-spt-nav-details"
                            role="tablist"
                          >
                            Detail
                          </a>
                        </li>
                        {/*<li class="nav-item">*/}
                        {/*    <a class="nav-link" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-info"*/}
                        {/*        role="tablist">More Information</a>*/}
                        {/*</li>*/}
                        {/*<li class="nav-item">*/}
                        {/*    <a class="nav-link" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-review"*/}
                        {/*        role="tablist">Reviews</a>*/}
                        {/*</li>*/}
                      </ul>
                    </div>
                    <div className="tab-content  ec-single-pro-tab-content">
                      <div
                        id="ec-spt-nav-details"
                        className="tab-pane fade show active"
                      >
                        <div className="ec-single-pro-tab-desc">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </p>
                          <ul>
                            <li>
                              Any Product types that You want - Simple,
                              Configurable
                            </li>
                            <li>
                              Downloadable/Digital Products, Virtual Products
                            </li>
                            <li>Inventory Management with Backordered items</li>
                            <li>Flatlock seams throughout.</li>
                          </ul>
                        </div>
                      </div>
                      <div id="ec-spt-nav-info" className="tab-pane fade">
                        <div className="ec-single-pro-tab-moreinfo">
                          <ul>
                            <li>
                              <span>Weight</span> 1000 g
                            </li>
                            <li>
                              <span>Dimensions</span> 35 × 30 × 7 cm
                            </li>
                            <li>
                              <span>Color</span> Black, Pink, Red, White
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="ec-spt-nav-review" className="tab-pane fade">
                        <div className="row">
                          <div className="ec-t-review-wrapper">
                            <div className="ec-t-review-item">
                              <div className="ec-t-review-avtar">
                                <img
                                  src="assets/images/review-image/1.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="ec-t-review-content">
                                <div className="ec-t-review-top">
                                  <div className="ec-t-review-name">
                                    Jeny Doe
                                  </div>
                                  <div className="ec-t-review-rating">
                                    <i className="ecicon eci-star fill" />
                                    <i className="ecicon eci-star fill" />
                                    <i className="ecicon eci-star fill" />
                                    <i className="ecicon eci-star fill" />
                                    <i className="ecicon eci-star-o" />
                                  </div>
                                </div>
                                <div className="ec-t-review-bottom">
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="ec-t-review-item">
                              <div className="ec-t-review-avtar">
                                <img
                                  src="assets/images/review-image/2.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="ec-t-review-content">
                                <div className="ec-t-review-top">
                                  <div className="ec-t-review-name">
                                    Linda Morgus
                                  </div>
                                  <div className="ec-t-review-rating">
                                    <i className="ecicon eci-star fill" />
                                    <i className="ecicon eci-star fill" />
                                    <i className="ecicon eci-star fill" />
                                    <i className="ecicon eci-star-o" />
                                    <i className="ecicon eci-star-o" />
                                  </div>
                                </div>
                                <div className="ec-t-review-bottom">
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ec-ratting-content">
                            <h3>Add a Review</h3>
                            <div className="ec-ratting-form">
                              <form action="#">
                                <div className="ec-ratting-star">
                                  <span>Your rating:</span>
                                  <div className="ec-t-review-rating">
                                    <i className="ecicon eci-star fill" />
                                    <i className="ecicon eci-star fill" />
                                    <i className="ecicon eci-star-o" />
                                    <i className="ecicon eci-star-o" />
                                    <i className="ecicon eci-star-o" />
                                  </div>
                                </div>
                                <div className="ec-ratting-input">
                                  <input
                                    name="your-name"
                                    placeholder="Name"
                                    type="text"
                                  />
                                </div>
                                <div className="ec-ratting-input">
                                  <input
                                    name="your-email"
                                    placeholder="Email*"
                                    type="email"
                                    required=""
                                  />
                                </div>
                                <div className="ec-ratting-input form-submit">
                                  <textarea
                                    name="your-commemt"
                                    placeholder="Enter Your Comment"
                                    defaultValue={""}
                                  />
                                  <button
                                    className="btn btn-primary"
                                    type="submit"
                                    value="Submit"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* product details description area end */}
              </div>
            </div>
          </div>
        </section>
        {/* End Single product */}
        {/* Related Product Start */}
        <section className="section ec-releted-product section-space-p">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-title">
                  <h2 className="ec-bg-title">Related products</h2>
                  <h2 className="ec-title">Related products</h2>
                  <p className="sub-title">
                    Browse The Collection of Top Products
                  </p>
                </div>
              </div>
            </div>
            <div className="row margin-minus-b-30">
              {/* Related Product Content */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content">
                <div className="ec-product-inner">
                  <div className="ec-pro-image-outer">
                    <div className="ec-pro-image">
                      <a href="products/view-product" className="image">
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
                      <a href="products/view-product">
                        FLUM Float 0% Nicotine 10pk
                      </a>
                    </h5>

                    <span className="ec-price">
                      <span className="new-price">LOGIN TO VIEW PRICE</span>
                    </span>
                    <div className="ec-pro-option">
                      <div className="ec-pro-color">
                        <div className="btn-group">
                          <a
                            className="btn btn-signup"
                            href="products/view-product"
                            style={{ padding: "0 13px" }}
                          >
                            VIEW PRODUCT
                          </a>
                          <a
                            className="btn btn-dark"
                            href="products/view-product"
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
                      <a href="products/view-product" className="image">
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
                      <a href="products/view-product">
                        FLUM Float 0% Nicotine 10pk
                      </a>
                    </h5>

                    <span className="ec-price">
                      <span className="new-price">LOGIN TO VIEW PRICE</span>
                    </span>
                    <div className="ec-pro-option">
                      <div className="ec-pro-color">
                        <div className="btn-group">
                          <a
                            className="btn btn-signup"
                            href="products/view-product"
                            style={{ padding: "0 13px" }}
                          >
                            VIEW PRODUCT
                          </a>
                          <a
                            className="btn btn-dark"
                            href="products/view-product"
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
                      <a href="products/view-product" className="image">
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
                      <a href="products/view-product">
                        FLUM Float 0% Nicotine 10pk
                      </a>
                    </h5>

                    <span className="ec-price">
                      <span className="new-price">LOGIN TO VIEW PRICE</span>
                    </span>
                    <div className="ec-pro-option">
                      <div className="ec-pro-color">
                        <div className="btn-group">
                          <a
                            className="btn btn-signup"
                            href="products/view-product"
                            style={{ padding: "0 13px" }}
                          >
                            VIEW PRODUCT
                          </a>
                          <a
                            className="btn btn-dark"
                            href="products/view-product"
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
                      <a href="products/view-product" className="image">
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
                      <a href="products/view-product">
                        FLUM Float 0% Nicotine 10pk
                      </a>
                    </h5>

                    <span className="ec-price">
                      <span className="new-price">LOGIN TO VIEW PRICE</span>
                    </span>
                    <div className="ec-pro-option">
                      <div className="ec-pro-color">
                        <div className="btn-group">
                          <a
                            className="btn btn-signup"
                            href="products/view-product"
                            style={{ padding: "0 13px" }}
                          >
                            VIEW PRODUCT
                          </a>
                          <a
                            className="btn btn-dark"
                            href="products/view-product"
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
        </section>
      </>

      <Footer />
    </div>
  );
};
export default Productdetails;
