import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import TestimonialSection from "./TestimonialSection";

function Testimonial() {
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
                     <h3>Testimonial</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- end inner page section -->
      <!-- client section --> */}
      <TestimonialSection />
      {/* <!-- end client section -->
      <!-- footer section --> */}
      <Footer/>
      {/* <!-- footer section --> */}
    </div>
    </>
  );
}
export default Testimonial;