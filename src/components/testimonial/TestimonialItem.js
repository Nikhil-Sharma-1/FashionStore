import React from "react";

function TestimonialItem(props) {
    return <div className="box col-lg-10 mx-auto">
    <div className="img_container">
       <div className="img-box">
          <div className="img_box-inner">
             <img src={props.img} alt=""/>
          </div>
       </div>
    </div>
    <div className="detail-box">
       <h5>
          {props.name}
       </h5>
       <h6>
          Customer
       </h6>
       <p>
       {props.detail}
       </p>
    </div>
 </div>
}

export default TestimonialItem;