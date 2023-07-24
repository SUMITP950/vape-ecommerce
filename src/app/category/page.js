import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
const Category = () => {
  return (
    <div>
      <Header />
      <>
        {/* ekka Cart End */} {/* Ec breadcrumb start */}
        <div className="sticky-header-next-sec  ec-breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row ec_breadcrumb_inner">
                  <div className="col-md-6 col-sm-12">
                    <h2 className="ec-breadcrumb-title">Category</h2>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* ec-breadcrumb-list start */}
                    <ul className="ec-breadcrumb-list">
                      <li className="ec-breadcrumb-item">
                        <a href="">Home</a>
                      </li>
                      <li className="ec-breadcrumb-item active">Category</li>
                    </ul>
                    {/* ec-breadcrumb-list end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://rzsmoke.com/wp-content/uploads/banner_picture/RZ-Subpage-banner-Flum-3-new-flavors2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://rzsmoke.com/wp-content/uploads/banner_picture/RZ-Subpage-banner-raz-new-flavors-available.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://rzsmoke.com/wp-content/uploads/banner_picture/RZ-Subpage-banner-VIHO.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Ec breadcrumb end */}
        {/* Ec Shop page */}
        <section className="ec-page-content section-space-p">
          <div className="container">
            <div className="row">
              <div className="ec-shop-rightside col-lg-12 col-md-12">
                {/* Shop Top Start */}
                <div className="ec-pro-list-top d-flex">
                  <div className="col-md-6 ec-grid-list">
                    15 products found in This Category
                  </div>
                  <div className="col-md-6 ec-sort-select">
                    <span className="sort-by">Sort by</span>
                    <div className="ec-select-inner">
                      <select name="ec-select" id="ec-select">
                        <option selected="" disabled="">
                          Position
                        </option>
                        <option value={1}>Relevance</option>
                        <option value={2}>Name, A to Z</option>
                        <option value={3}>Name, Z to A</option>
                        <option value={4}>Price, low to high</option>
                        <option value={5}>Price, high to low</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Shop Top End */}
                {/* Shop content Start */}
                <div className="shop-pro-content">
                  <div className="shop-pro-inner">
                    <div className="row">
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
                              <span className="new-price">
                                LOGIN TO VIEW PRICE
                              </span>
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
                              <span className="new-price">
                                LOGIN TO VIEW PRICE
                              </span>
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
                              <span className="new-price">
                                LOGIN TO VIEW PRICE
                              </span>
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
                              <span className="new-price">
                                LOGIN TO VIEW PRICE
                              </span>
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
                              <span className="new-price">
                                LOGIN TO VIEW PRICE
                              </span>
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
                              <span className="new-price">
                                LOGIN TO VIEW PRICE
                              </span>
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
                              <span className="new-price">
                                LOGIN TO VIEW PRICE
                              </span>
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
                              <span className="new-price">
                                LOGIN TO VIEW PRICE
                              </span>
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
                  {/* Ec Pagination Start */}
                  <div className="ec-pro-pagination">
                    <span>Showing 1-12 of 21 item(s)</span>
                    <ul className="ec-pro-pagination-inner">
                      <li>
                        <a className="active" href="#">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a className="next" href="#">
                          Next <i className="ecicon eci-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Ec Pagination End */}
                </div>
                {/*Shop content End */}
              </div>
            </div>
          </div>
        </section>
        {/* End Shop page */}
      </>

      <Footer />
    </div>
  );
};
export default Category;
