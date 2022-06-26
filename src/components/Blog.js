import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Blog() {
  return (
    <>
    <div className="sub_page">     
    <div class="hero_area"><Header/></div>   
    {/* <!-- inner page section --> */}
      <section class="inner_page_head">
         <div class="container_fuild">
            <div class="row">
               <div class="col-md-12">
                  <div class="full">
                     <h3>Blog List</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- end inner page section -->
      <!-- why section --> */}
      <section class="why_section layout_padding">
         <div class="container">
            <div class="heading_container heading_center">
               <h2>
                  Why Shop With Us
               </h2>
            </div>
            <div class="row">
               <div class="col-md-4">
                  <div class="box ">
                     <div class="img-box">
                        <img height="50px" src="images/delivery.png"/>
                     </div>
                     <div class="detail-box">
                        <h5>
                           Fast Delivery
                        </h5>
                        <p>
                           variations of passages of Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="box ">
                     <div class="img-box">
                        <img height="50px" src="images/free.png"/>
                     </div>
                     <div class="detail-box">
                        <h5>
                           Free Shiping
                        </h5>
                        <p>
                           variations of passages of Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="box ">
                     <div class="img-box">
                        <img height="50px" src="images/medal.png"/>
                     </div>
                     <div class="detail-box">
                        <h5>
                           Best Quality
                        </h5>
                        <p>
                           variations of passages of Lorem Ipsum available
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- end why section -->
      <!-- footer section --> */}
      <Footer/>
    </div>
    </>
  );
}
export default Blog;
