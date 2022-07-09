import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import ProductSection from "./ProductSection";

function Products() {
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
                     <h3>Product Grid</h3>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- end inner page section -->
      <!-- product section --> */}
      <ProductSection />
      {/* <!-- end product section -->
      <!-- footer section --> */}
      <Footer/>
    </div>
    </>
  );
}
export default Products;