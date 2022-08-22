import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogSection from "./blog/BlogSection";
import Arrival from "./Arrival";

function About() {
  return (
    <>
    <div className="sub_page">     
    <div className="hero_area"><Header/></div>   
    

      {/* <!-- inner page section --> */}
      <section className="inner_page_head">
         <div className="container_fuild">
            <div className="row">
               <div className="col-md-12">
                  <div className="full">
                     <h3>About us</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- end inner page section --> */}
      
      {/* <!-- why section --> */}
      <BlogSection />
      {/* <!-- end why section --> */}

      {/* arrival section --> */}
      <Arrival />
      {/* end arrival section  */}

      <Footer/>
    </div>
    </>
  );
}
export default About;
