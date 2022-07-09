import React from "react";

function Items(props) {
    return <div className="col-sm-6 col-md-4 col-lg-3">
    <div className="box">
       <div className="option_container">
          <div className="options">
             <a href="" className="option1">
             Add To Cart
             </a>
             <a href="" className="option2">
             Buy Now
             </a>
          </div>
       </div>
       <div className="img-box">
          <img src={props.img} alt=""/>
       </div>
       <div className="detail-box">
          <h5>
             {props.category}
          </h5>
          <h6>
             {props.price}
          </h6>
       </div>
    </div>
 </div>
}

export default Items;