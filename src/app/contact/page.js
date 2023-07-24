import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
const Login = () => {
  return (
    <div>
      <Header />
      <>
        {/* ekka Cart End */}{" "}
        <div className="sticky-header-next-sec ec-breadcrumb section-space-mb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="row ec_breadcrumb_inner">
                  <div className="col-md-6 col-sm-12">
                    <h2 className="ec-breadcrumb-title">Contact Us</h2>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    {/* ec-breadcrumb-list start */}
                    <ul className="ec-breadcrumb-list">
                      <li className="ec-breadcrumb-item">
                        <a href="">Home</a>
                      </li>
                      <li className="ec-breadcrumb-item active">Contact Us</li>
                    </ul>
                    {/* ec-breadcrumb-list end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ec breadcrumb end */}
        {/* Ec Contact Us page */}
        <section className="ec-page-content section-space-p">
          <div className="container">
            <div className="row">
              <div className="ec-common-wrapper">
                <div className="ec-contact-leftside">
                  <div className="ec-contact-container">
                    <div className="ec-contact-form">
                      <form action="#" method="post">
                        <span className="ec-contact-wrap">
                          <label>First Name*</label>
                          <input
                            type="text"
                            name="firstname"
                            placeholder="Enter your first name"
                            required=""
                          />
                        </span>
                        <span className="ec-contact-wrap">
                          <label>Last Name*</label>
                          <input
                            type="text"
                            name="lastname"
                            placeholder="Enter your last name"
                            required=""
                          />
                        </span>
                        <span className="ec-contact-wrap">
                          <label>Email*</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required=""
                          />
                        </span>
                        <span className="ec-contact-wrap">
                          <label>Phone Number*</label>
                          <input
                            type="text"
                            name="phonenumber"
                            placeholder="Enter your phone number"
                            required=""
                          />
                        </span>
                        <span className="ec-contact-wrap">
                          <label>Comments/Questions*</label>
                          <textarea
                            name="address"
                            placeholder="Please leave your comments here.."
                            defaultValue={""}
                          />
                        </span>
                        <span className="ec-contact-wrap ec-contact-btn">
                          <button className="btn btn-primary" type="submit">
                            Submit
                          </button>
                        </span>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="ec-contact-rightside">
                  <div className="ec_contact_map">
                    <div className="ec_map_canvas">
                      <iframe
                        id="ec_map_canvas"
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d71263.65594328841!2d144.93151478652146!3d-37.8734290780509!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1615963387757!5m2!1sen!2sus"
                      />
                      <a href="https://sites.google.com/view/maps-api-v2/mapv2" />
                    </div>
                  </div>
                  <div className="ec_contact_info">
                    <h1 className="ec_contact_info_head">Contact us</h1>
                    <ul className="align-items-center">
                      <li className="ec-contact-item">
                        <i
                          className="ecicon eci-map-marker"
                          aria-hidden="true"
                        />
                        <span>Address :</span>71 Pilgrim Avenue Chevy Chase,
                        east california. east california. MD 20815, USA
                      </li>
                      <li className="ec-contact-item align-items-center">
                        <i className="ecicon eci-phone" aria-hidden="true" />
                        <span>Call Us :</span>
                        <a href="tel:+440123456789">+1 0123 456 789</a>
                      </li>
                      <li className="ec-contact-item align-items-center">
                        <i className="ecicon eci-envelope" aria-hidden="true" />
                        <span>Email :</span>
                        <a href="mailto:example@ec-email.com">
                          example@domain.com
                        </a>
                      </li>
                    </ul>
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
export default Login;
