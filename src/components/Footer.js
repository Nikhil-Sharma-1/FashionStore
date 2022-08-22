import React from "react";

function Footer() {
   const year = new Date().getFullYear();
  return (
    <>
        {/* <!-- footer section --> */}
      <footer className="footer_section">
         <div className="container">
            <div className="row">
               <div className="col-md-4 footer-col">
                  <div className="footer_contact">
                     <h4>
                        Reach at..
                     </h4>
                     <div className="contact_link_box">
                        <a href="#">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <span>
                          1st Floor, Pheroze Building, Chhatrapati Shivaji Maharaj Marg, Mumbai
                          </span>
                        </a>
                        <a href="tel:+91 987 654 3210">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>
                        Call +91 987 654 3210
                        </span>
                        </a>
                        <a href="mailto:fashionstoresince1998@gmail.com">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>
                        fashionstoresince1998@gmail.com
                        </span>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 footer-col">
                  <div className="footer_detail">
                     <a href="index.html" className="footer-logo">
                     Fashion Store
                     </a>
                     <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nulla, efficitur a lacus in, rhoncus placerat enim. Nullam mollis viverra ante, non varius quam auctor sed.
                     </p>
                     <div className="footer_social">
                        <a href="">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 footer-col">
                  <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=1st%20Floor,%20Pheroze%20Building,%20Chhatrapati%20Shivaji%20Maharaj%20Marg,%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  </div>
                  </div>
               </div>
            </div>
            <div className="footer-info">
               <div className="col-lg-7 mx-auto px-0">
                  <p>
                      <span id="displayYear"></span> Copyright &copy; {year} | Build With❤️
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
