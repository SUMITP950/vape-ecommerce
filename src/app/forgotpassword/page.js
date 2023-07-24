import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const Login = () => {
  return (
    <div>
      <Header />
      <>
        <div className="container page mt-5 pt-1">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-4268397-3551744.png"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 login-form-bg">
                <form>
                  <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p class="lead fw-bold mb-3 me-3">Forgot password</p>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form3Example4">
                      Email Id
                    </label>
                    <input
                      type="email"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Registered Email Id "
                    />
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Link href="otp">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                      >
                        Send OTP
                      </button>
                    </Link>
                    <p className="small mt-2 pt-1 mb-0">
                      <Link href="/login" className="link-danger">
                        <span className="fw-bold">
                          <i className="fa fa-arrow-left"></i> Back to Login
                        </span>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </div>
  );
};
export default Login;
