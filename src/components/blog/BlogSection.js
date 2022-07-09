import React from "react";
import BlogItem from "./BlogItem";

function BlogSection() {
    return <section className="why_section layout_padding">
    <div className="container">
       <div className="heading_container heading_center">
          <h2>
             Why Shop With Us
          </h2>
       </div>
       <div className="row">
       <BlogItem img = "images/delivery.png" text = "Fast Delivery"/>
       <BlogItem img = "images/free.png" text = "Free Shiping"/>
       <BlogItem img = "images/medal.png" text = "Best Quality"/>
       </div>
    </div>
 </section>
}

export default BlogSection;