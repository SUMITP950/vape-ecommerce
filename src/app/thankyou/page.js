import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
const Thankyou = () => {
  return (
    <div>
      <Header />
      <>
        <div className="container page mt-5 pt-1">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <img src="https://stripo.email/photos/shares/Blog/how-to-reply-to-thank-you-emails.png"></img>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </div>
  );
};
export default Thankyou;
