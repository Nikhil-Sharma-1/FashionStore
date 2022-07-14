import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Header from "./Header";

function Contact() {
  const form = { useRef };
  
  const success = () => toast.success("Subscription Availed Successfully");
  const error = () => toast.error("Please Fill The Required Details");
  const [isToast, setIsToast] = useState(false); //For deciding which toast should be visible

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hk8kkdf",
        "template_u4s8epa",
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
      <div className="sub_page">
        <div className="hero_area">
          <Header />
        </div>
        {/* <!-- inner page section --> */}
        <section className="inner_page_head">
          <div className="container_fuild">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <h3>Contact us</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end inner page section -->
      <!-- why section --> */}
        <section className="why_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="full">
                  <form ref={form} onSubmit={sendEmail}>
                    <fieldset>
                      <input
                        id="tex"
                        type="text"
                        placeholder="Enter your full name"
                        name="user_name"
                        required
                      />
                      <input
                      id="mail"
                        type="email"
                        placeholder="Enter your email address"
                        name="user_email"
                        required
                      />
                      <input
                        id="tex2"
                        type="text"
                        placeholder="Enter subject"
                        name="user_subject"
                        required
                      />
                      <textarea
                      onChange= {handleChange}
                        id="mes"
                        placeholder="Enter your message"
                        name="user_message"
                        required
                      ></textarea>
                      <input type="submit" onClick={isToast ? success : error} value="Submit" />
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
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end why section -->
      <!-- footer section --> */}
        <Footer />
        {/* <!-- footer section --> */}
      </div>
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

export default Contact;
