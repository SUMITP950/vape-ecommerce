"use client";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  useEffect(() => {
    const menu = document.querySelector(".menu");
    const menuMain = menu.querySelector(".menu-main");
    const goBack = menu.querySelector(".go-back");
    const menuTrigger = document.querySelector(".mobile-menu-trigger");
    const closeMenu = menu.querySelector(".mobile-menu-close");
    let subMenu;
    menuMain.addEventListener("click", (e) => {
      if (!menu.classList.contains("active")) {
        return;
      }
      if (e.target.closest(".menu-item-has-children")) {
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren);
      }
    });
    goBack.addEventListener("click", () => {
      hideSubMenu();
    });
    menuTrigger.addEventListener("click", () => {
      toggleMenu();
    });
    closeMenu.addEventListener("click", () => {
      toggleMenu();
    });
    document.querySelector(".menu-overlay").addEventListener("click", () => {
      toggleMenu();
    });
    function toggleMenu() {
      menu.classList.toggle("active");
      document.querySelector(".menu-overlay").classList.toggle("active");
    }
    function showSubMenu(hasChildren) {
      subMenu = hasChildren.querySelector(".sub-menu");
      subMenu.classList.add("active");
      subMenu.style.animation = "slideLeft 0.5s ease forwards";
      const menuTitle =
        hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
      menu.querySelector(".current-menu-title").innerHTML = menuTitle;
      menu.querySelector(".mobile-menu-head").classList.add("active");
    }

    function hideSubMenu() {
      subMenu.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
        subMenu.classList.remove("active");
      }, 300);
      menu.querySelector(".current-menu-title").innerHTML = "";
      menu.querySelector(".mobile-menu-head").classList.remove("active");
    }

    window.onresize = function () {
      if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
          toggleMenu();
        }
      }
    };
  }, []);
  return (
    <>
      <header className="ec-header header">
        {/*Ec Header Top Start */}
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center">
              {/* Header Top social Start */}
              <div className="col text-left header-top-left d-none d-lg-block">
                <div className="header-top-message text-upper">
                  support@domain.com | +1 123 123 12334
                </div>
              </div>
              {/* Header Top social End */}
              {/* Header Top Message Start */}
              <div className="col text-center header-top-center"></div>
              {/* Header Top Message End */}
              {/* Header Top Language Currency */}
              <div className="col header-top-right d-none d-lg-block">
                <div className="header-top-lan-curr d-flex justify-content-end">
                  {/* Currency End */}
                  {/* Language Start */}
                  <div className="header-top-lan dropdown">
                    <div className="header-top-social">
                      {localStorage.getItem("authToken") ? (
                        <button onClick={handleLogout} className="btn bg-white">
                          LOGOUT
                        </button>
                      ) : (
                        <Link href="/login" className="btn bg-white">
                          LOGIN
                        </Link>
                      )}

                      <Link href="register" className="btn btn-signup">
                        REGISTER FOR WHOLESALE
                      </Link>
                    </div>
                  </div>
                  {/* Language End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ec Header Top  End */}
        {/* Ec Header Bottom  Start */}
        <div className="ec-header-bottom d-none d-lg-block">
          <div className="container position-relative">
            <div className="row">
              <div className="ec-flex">
                {/* Ec Header Logo Start */}
                <div className="align-self-center">
                  <div className="header-logo">
                    <Link href="/">
                      <img src="assets/images/logo/logo.png" alt="Site Logo" />
                      <img
                        className="dark-logo"
                        src="assets/images/logo/dark-logo.png"
                        alt="Site Logo"
                        style={{ display: "none" }}
                      />
                    </Link>
                  </div>
                </div>
                {/* Ec Header Logo End */}
                {/* Ec Header Search Start */}
                <div className="align-self-center">
                  <div className="header-search">
                    <form className="ec-btn-group-form" action="#">
                      <input
                        className="form-control ec-search-bar"
                        placeholder="Search products..."
                        type="text"
                      />
                      <button className="submit" type="submit">
                        <i className="fi-rr-search" />
                      </button>
                    </form>
                  </div>
                </div>
                {/* Ec Header Search End */}
                {/* Ec Header Button Start */}
                <div className="align-self-center">
                  <div className="ec-header-bottons">
                    {/* Header User End */}
                    {/* Header wishlist Start */}
                    <Link href="#" className="ec-header-btn ec-header-wishlist">
                      <div className="header-icon">
                        <i className="fi-rr-heart" />
                      </div>
                      <span className="ec-header-count">4</span>
                    </Link>
                    {/* Header wishlist End */}
                    {/* Header Cart Start */}
                    <Link
                      href="#ec-side-cart"
                      className="ec-header-btn ec-side-toggle"
                    >
                      <div className="header-icon">
                        <i className="fi-rr-shopping-bag" />
                      </div>
                      <span className="ec-header-count cart-count-lable">
                        3
                      </span>
                    </Link>
                    {/* Header Cart End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ec Header Button End */}
        {/* Header responsive Bottom  Start */}
        <div className="ec-header-bottom d-none">
          <div className="container position-relative">
            <div className="row ">
              {/* Ec Header Logo Start */}
              <div className="col-6">
                <div className="header-logo">
                  <Link href="/">
                    <img src="assets/images/logo/logo.png" alt="Site Logo" />
                    <img
                      className="dark-logo"
                      src="assets/images/logo/dark-logo.png"
                      alt="Site Logo"
                      style={{ display: "none" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="header-search">
                  <form className="ec-btn-group-form" action="#">
                    <input
                      className="form-control ec-search-bar"
                      placeholder="Search products..."
                      type="text"
                    />
                    <button className="submit" type="submit">
                      <i className="fi-rr-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="ec-main-menu-desk">
          <div className="container position-relative">
            <div className="row">
              <div className="col-md-12 align-self-center">
                <div className="ec-main-menu">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                      <Link className="navbar-brand" href="/">
                        <img
                          src="assets/images/logo/logo.png"
                          alt="Site Logo"
                        />
                      </Link>
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>
                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              aria-current="page"
                              href="pages/category"
                            >
                              e liquid
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="pages/category">
                              Device/ Pods / Tanks
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="pages/category">
                              Disposable &amp; e Cigratte
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="pages/category">
                              CBD &amp; Delta
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="pages/category">
                              KRATOM
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="pages/category">
                              Paper &amp; Wraps
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="pages/category">
                              Novelties
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" href="pages/category">
                              Glass
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container-fluid nav-menu">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <Link href="/">
                  <img src="assets/images/logo/dark-logo.png" alt="Site Logo" />
                </Link>
              </div>
            </div>
            {/* menu start here */}
            <div className="header-item item-center">
              <div className="menu-overlay"></div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left" />
                  </div>
                  <div className="current-menu-title" />
                  <div className="mobile-menu-close">×</div>
                </div>
                <ul className="menu-main">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      New <i className="fa fa-angle-down" />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item text-center">
                        <a href="#">
                          <img
                            src="https://img.freepik.com/free-photo/beautiful-woman-holding-empty-banner_23-2148302837.jpg?w=360&t=st=1689748906~exp=1689749506~hmac=d132d61af499a2d82d13623750df68f65470dd264255cae1f13ff8c38a038010"
                            alt="new Product"
                          />
                          <h4 className="title">Product 1</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img
                            src="https://img.freepik.com/foto-gratis/mujer-sonriente-traje-rosa-redes-compras_23-2148316484.jpg?size=626&ext=jpg&ga=GA1.2.260680144.1689749312&semt=sph"
                            alt="new Product"
                          />
                          <h4 className="title">Product 2</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img
                            src="https://img.freepik.com/foto-gratis/mujer-aspecto-basico-bolsas-despues-ir-compras-al-centro-comercial_176420-8943.jpg?w=360&t=st=1689749371~exp=1689749971~hmac=b908819c3c009ab062584a82ab686411c51f12d837a5345fb4485eca6b6dc71b"
                            alt="new Product"
                          />
                          <h4 className="title">Product 3</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img
                            src="https://img.freepik.com/foto-gratis/mujer-bolsas-compras-hacer-compras-mall_1303-29590.jpg?w=360&t=st=1689749407~exp=1689750007~hmac=70302e75587eb2bc99b043c82f6bf4e0607cefde0a3d38f8cd76d6a778fe12b0"
                            alt="new Product"
                          />
                          <h4 className="title">Product 4</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Shop <i className="fa fa-angle-down" />
                    </a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Men's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                        <h4 className="title">Beauty</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Women's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                        <h4 className="title">Furniture</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Home, Kitchen</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <img
                          src="https://themes.muffingroup.com/be/store2_el/wp-content/uploads/2020/07/store2-home-shopping-craze.png"
                          alt="shop"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Blog <i className="fa fa-angle-down" />
                    </a>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li>
                          <a href="#">Standard Layout</a>
                        </li>
                        <li>
                          <a href="#">Grid Layout</a>
                        </li>
                        <li>
                          <a href="#">single Post Layout</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Pages <i className="fa fa-angle-down" />
                    </a>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li>
                          <Link href="/myorder">Myorder</Link>
                        </li>
                        <li>
                          <a href="#">Register</a>
                        </li>
                        <li>
                          <a href="#">Faq</a>
                        </li>
                        <li>
                          <a href="#">404 Page</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    {localStorage.getItem("authToken") && (
                      <Link href="/myorder">Myorder</Link>
                    )}
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link href="/category">Category</Link>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* menu end here */}
            <div className="header-item item-right">
              <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa fa-search" />
              </a>
              <Link href="/login">
                <i className="fa fa-user" />
              </Link>
              <Link href="#">
                <i className="fa fa-shopping-cart" />
              </Link>
              {/* mobile menu trigger */}
              <div className="mobile-menu-trigger">
                <span />
              </div>
            </div>
            {/* Modal Search */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog mt-3">
                <div className="modal-content">
                  <div className="modal-body">
                    <input
                      class="search-input me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="btn bg-dark mt-2 text-light btn-sm"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* modal end */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
