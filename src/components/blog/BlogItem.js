import React from "react";

function BlogItem(props) {
    return <div className="col-md-4">
    <div className="box ">
       <div className="img-box">
          <img height="50px" src={props.img}/>
       </div>
       <div className="detail-box">
          <h5>
             {props.text}
          </h5>
          <p>
             variations of passages of Lorem Ipsum available
          </p>
       </div>
    </div>
 </div>
}

export default BlogItem;