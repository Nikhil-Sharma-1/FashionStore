import React from "react";
import { useHistory } from "react-router";
import { useLocation } from 'react-router-dom';

function Header() {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
        {/* header section starts  */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="" onClick={()=>history.push('/home')}>
                <img src="images/logooo.png" style={{width: '120px',objectFit: 'contain',height: '64px'}} alt="#" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className={location.pathname === '/home' ? "nav-item active" : "nav-item"}>
                    <a href="" className="nav-link" onClick={()=>history.push('/home')}>
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      <span className="nav-label">
                        Pages <span className="caret"></span>
                      </span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                      <a href="" onClick={()=>history.push('/about')}>About</a>
                      </li>
                      <li>
                        <a href="" onClick={()=>history.push('/testimonial')}>Testimonial</a>
                      </li>
                    </ul>
                  </li>
                  <li className={location.pathname === '/products' ? "nav-item active" : "nav-item"}>
                    <a href="" onClick={()=>history.push('/products')} className="nav-link" >
                      Products
                    </a>
                  </li>
                  <li className={location.pathname === '/blog' ? "nav-item active" : "nav-item"}>
                    <a href="" onClick={()=>history.push('/blog')} className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className={location.pathname === '/contact' ? "nav-item active" : "nav-item"}>
                    <a href="" onClick={()=>history.push('/contact')} className="nav-link">
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
