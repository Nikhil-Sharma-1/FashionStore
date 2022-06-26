import React from "react";
// import {Link} from 'react-router-dom';
import { useHistory } from "react-router";
import { useLocation } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
        {/* header section strats  */}
        <header class="header_section">
          <div class="container">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
              <a class="navbar-brand" href="" onClick={()=>history.push('/home')}>
                <img src="images/logooo.png" style={{width: '120px',objectFit: 'contain',height: '64px'}} alt="#" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class=""> </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li className={location.pathname === '/home' ? "nav-item active" : "nav-item"}>
                    <a href="" class="nav-link" onClick={()=>history.push('/home')}>
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      <span class="nav-label">
                        Pages <span class="caret"></span>
                      </span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                      <a href="" onClick={()=>history.push('/about')}>About</a>
                      </li>
                      <li>
                        <a href="" onClick={()=>history.push('/testimonial')}>Testimonial</a>
                      </li>
                    </ul>
                  </li>
                  <li className={location.pathname === '/products' ? "nav-item active" : "nav-item"}>
                    <a href="" onClick={()=>history.push('/products')} class="nav-link" >
                      Products
                    </a>
                  </li>
                  <li className={location.pathname === '/blog' ? "nav-item active" : "nav-item"}>
                    <a href="" onClick={()=>history.push('/blog')} className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className={location.pathname === '/contact' ? "nav-item active" : "nav-item"}>
                    <a href="" onClick={()=>history.push('/contact')} class="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section  */}
    </>
  );
}
export default Header;
