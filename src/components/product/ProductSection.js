import React from "react";
import Items from "./ProductItems";

function ProductSection() {
    return <section className="product_section layout_padding">
    <div className="container">
       <div className="heading_container heading_center">
          <h2>
             Our <span>products</span>
          </h2>
       </div>
       <div className="row">
       <Items img = "images/p1.png" category = "Men's Shirt" price = "$75"/>
       <Items img = "images/p2.png" category = "Men's Shirt" price = "$80"/>
       <Items img = "images/p3.png" category = "Women's Dress" price = "$68"/>
       <Items img = "images/p14.png" category = "Men's T-Shirt" price = "$55"/>
       <Items img = "images/p4.png" category = "Women's Dress" price = "$70"/>
       <Items img = "images/p5.png" category = "Women's Dress" price = "$75"/>
       <Items img = "images/p6.png" category = "Women's Dress" price = "$58"/>
       <Items img = "images/p7.png" category = "Women's Dress" price = "$80"/>
       <Items img = "images/p8.png" category = "Men's Shirt" price = "$65"/>
       <Items img = "images/p15.png" category = "Men's T-Shirt" price = "$55"/>
       <Items img = "images/p9.png" category = "Men's Shirt" price = "$65"/>
       <Items img = "images/p10.png" category = "Men's Shirt" price = "$65"/>
       <Items img = "images/p16.png" category = "Men's T-Shirt" price = "$55"/>
       <Items img = "images/p11.png" category = "Men's Shirt" price = "$75"/>
       <Items img = "images/p12.png" category = "Women's Dress" price = "$65"/>
       <Items img = "images/p13.png" category = "Women's Dress" price = "$75"/>
       <Items img = "images/p17.png" category = "Men's T-Shirt" price = "$55"/>
       <Items img = "images/p18.png" category = "Men's Shirt" price = "$75"/>
       <Items img = "images/p19.png" category = "Women's Dress" price = "$75"/>
       <Items img = "images/p21.png" category = "Women's Dress" price = "$75"/>
       
       </div>
       <div className="btn-box">
          <a href="./products">
          View All products
          </a>
       </div>
    </div>
 </section>
}

export default ProductSection;