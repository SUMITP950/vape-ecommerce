import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  return (
    <>
      <ToastContainer
        theme="colored"
        style={{ zIndex: 9999999 }}
      ></ToastContainer>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
export default Home;
