import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
        {/* <!-- footer section --> */}
      <footer class="footer_section">
         <div class="container">
            <div class="row">
               <div class="col-md-4 footer-col">
                  <div class="footer_contact">
                     <h4>
                        Reach at..
                     </h4>
                     <div class="contact_link_box">
                        <a href="#">
                          <i class="fa fa-map-marker" aria-hidden="true"></i>
                          <span>
                          1st Floor, Pheroze Building, Chhatrapati Shivaji Maharaj Marg, Mumbai
                          </span>
                        </a>
                        <a href="tel:+91 987 654 3210">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <span>
                        Call +91 987 654 3210
                        </span>
                        </a>
                        <a href="mailto:sharmanikhil67696@gmail.com">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span>
                        sharmanikhil67696@gmail.com
                        </span>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 footer-col">
                  <div class="footer_detail">
                     <a href="index.html" class="footer-logo">
                     Fashion Store
                     </a>
                     <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nulla, efficitur a lacus in, rhoncus placerat enim. Nullam mollis viverra ante, non varius quam auctor sed.
                     </p>
                     <div class="footer_social">
                        <a href="">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i class="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 footer-col">
                  <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=1st%20Floor,%20Pheroze%20Building,%20Chhatrapati%20Shivaji%20Maharaj%20Marg,%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  </div>
                  </div>
               </div>
            </div>
            <div class="footer-info">
               <div class="col-lg-7 mx-auto px-0">
                  <p>
                     &copy; <span id="displayYear"></span> All Rights Reserved
                  </p>
               </div>
            </div>
         </div>
      </footer>
      {/* <!-- footer section --> */}
    </>
  );
}
export default Footer;
