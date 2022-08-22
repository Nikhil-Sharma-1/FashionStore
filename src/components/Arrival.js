import React from 'react'
import { useHistory } from "react-router";

function Arrival() {
    const history = useHistory();
    return (
        <section className="arrival_section">
        <div className="container">
          <div className="box">
            <div className="arrival_bg_box">
              <img src={"images/arrival-bg.png"} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto">
                <div className="heading_container remove_line_bt">
                  <h2>#NewArrivals</h2>
                </div>
                <p style={{ marginTop: "20px", marginBottom: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus magna nulla, efficitur a lacus in, rhoncus placerat
                  enim. Nullam mollis viverra ante, non varius quam auctor sed!
                </p>
                <a href="" onClick={() => history.push("/products")}>
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Arrival;
