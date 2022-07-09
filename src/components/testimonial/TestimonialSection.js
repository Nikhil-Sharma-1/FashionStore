import React from "react";
import TestimonialItem from "./TestimonialItem";

function TestimonialSection() {
    return <section className="client_section layout_padding">
    <div className="container">
       <div className="heading_container heading_center">
          <h2>
             Customer's Testimonial
          </h2>
       </div>
       <div id="carouselExample3Controls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
             <div className="carousel-item active" data-interval="3000">
             <TestimonialItem img = "images/client.jpg" name = "Anna Trevor" detail = "I just got my first order and I have one word WOW!!!! Love, Love, Love these cloths!! I had my doubts before I ordered because most sites plus size cloths are too small and I'm usually disappointment, but not this time!!"/>
             </div>
             <div className="carousel-item" data-interval="3000">
             <TestimonialItem img = "images/client3.jpg" name = "Mark Joe" detail = "I love the clothes from this website!! I am so glad I found them.....everything has been spot on, fits wonderfully, styles are trendy and lots to choose from!! Thanks for being here for us!!!"/>
             </div>
             <div className="carousel-item" data-interval="3000">
             <TestimonialItem img = "images/client2.jpg" name = "Lilly Burnez" detail = "I just wanted to let you know my opinion of your company. I normally have a rule that I never buy any clothes online... Ever. When I came across your store. I really loved the styles that you offer."/>
             </div>
          </div>
          <div className="carousel_btn_box">
             <a className="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
             <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
             <span className="sr-only">Previous</span>
             </a>
             <a className="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
             <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
             <span className="sr-only">Next</span>
             </a>
          </div>
       </div>
    </div>
 </section>
}

export default TestimonialSection;