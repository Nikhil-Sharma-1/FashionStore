import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogSection from "./blog/BlogSection";
import Header from "./Header";
import Footer from "./Footer";
import ProductSection from "./product/ProductSection";
import SliderSection from "./SliderSection";
import TestimonialSection from "./testimonial/TestimonialSection";

function Home() {
  const history = useHistory();
  const form = { useRef };

  const success = () => toast.success("Subscription Availed Successfully");
  const error = () => toast.error("Please Fill The Required Details");
  const [isToast, setIsToast] = useState(false); //For deciding which toast should be visible

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hk8kkdf",
        "template_c6mulff",
        form.current,
        "F882fwkl9zHlg5xPN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="hero_area">
        <Header />
        {/* slider section  */}
        <section className="slider_section">
          <div className="slider_bg_box">
            <img src="images/wepik3.png" alt="" />
          </div>
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="3000">
                <SliderSection />
              </div>
              <div className="carousel-item" data-interval="3000">
                <SliderSection />
              </div>
              <div className="carousel-item" data-interval="3000">
                <SliderSection />
              </div>
            </div>
            <div className="container">
              <ol className="carousel-indicators">
                <li
                  data-target="#customCarousel1"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </section>
        {/* end slider section  */}
      </div>
      {/* why section  */}
      <BlogSection />
      {/* end why section  */}

      {/* arrival section --> */}
      <section className="arrival_section">
        <div className="container">
          <div className="box">
            <div className="arrival_bg_box">
              <img src={"images/arrival-bg.png"} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto">
                <div className="heading_container remove_line_bt">
                  <h2>#NewArrivals</h2>
                </div>
                <p style={{ marginTop: "20px", marginBottom: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus magna nulla, efficitur a lacus in, rhoncus placerat
                  enim. Nullam mollis viverra ante, non varius quam auctor sed!
                </p>
                <a href="" onClick={() => history.push("/products")}>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end arrival section  */}

      {/* product section --> */}
      <ProductSection />
      {/* <!-- end product section --> */}

      {/* <!-- subscribe section --> */}
      <section className="subscribe_section">
        <div className="container-fuild">
          <div className="box">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="subscribe_form ">
                  <div className="heading_container heading_center">
                    <h3>Subscribe To Get Discount Offers</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <form ref={form} onSubmit={sendEmail}>
                    <input
                      onChange= {handleChange}
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      required
                    />
                    <button onClick={isToast ? success : error}>subscribe</button>
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable={false}
                      pauseOnHover={false}
                      closeButton={false}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end subscribe section --> */}

      {/* <!-- client section --> */}
      <TestimonialSection />
      {/* <!-- end client section --> */}
      {/* <!-- footer start --> */}
      <Footer />
      {/* footer end  */}
    </>
  );

  function handleChange(event) { //Decides which toast should be visible
      if(event.target.value != "") {
        setIsToast(true);
      } else {
        setIsToast(false);
      }
  }

}
export default Home;
