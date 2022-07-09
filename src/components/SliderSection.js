import React from 'react'
import { useHistory } from "react-router";

function SliderSection() {
    const history = useHistory();
    return (
        <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>
                          <span>Sale 20% Off</span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nulla, efficitur a lacus in, rhoncus placerat enim. Nullam mollis viverra ante, non varius quam auctor sed.
                        </p>
                        <div className="btn-box">
                          <a href="" onClick={()=>history.push('/products')} className="btn1">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export default SliderSection
