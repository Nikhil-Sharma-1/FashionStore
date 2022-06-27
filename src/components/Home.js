import React from "react";
import { useHistory } from "react-router";
import Header from "./Header";

function Home() {
  const history = useHistory();
  return (
    <>
      <div class="hero_area">
        <Header/>        
        {/* slider section  */}
        <section class="slider_section ">
          <div class="slider_bg_box">
            <img src="images/wepik.jpg" alt="" />
          </div>
          <div id="customCarousel1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-7 col-lg-6 ">
                      <div class="detail-box">
                        <h1>
                          <span>Sale 20% Off</span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nulla, efficitur a lacus in, rhoncus placerat enim. Nullam mollis viverra ante, non varius quam auctor sed.
                        </p>
                        <div class="btn-box">
                          <a href="" onClick={()=>history.push('/products')} class="btn1">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-7 col-lg-6 ">
                      <div class="detail-box">
                        <h1>
                          <span>Sale 20% Off</span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nulla, efficitur a lacus in, rhoncus placerat enim. Nullam mollis viverra ante, non varius quam auctor sed.
                        </p>
                        <div class="btn-box">
                          <a href="" onClick={()=>history.push('/products')} class="btn1">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container ">
                  <div class="row">
                    <div class="col-md-7 col-lg-6 ">
                      <div class="detail-box">
                        <h1>
                          <span>Sale 20% Off</span>
                          <br />
                          On Everything
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nulla, efficitur a lacus in, rhoncus placerat enim. Nullam mollis viverra ante, non varius quam auctor sed.
                        </p>
                        <div class="btn-box">
                          <a href="" onClick={()=>history.push('/products')} class="btn1">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <ol class="carousel-indicators">
                <li
                  data-target="#customCarousel1"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </section>
        {/* end slider section  */}
      </div>
      {/* why section  */}
      <section class="why_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>Why Shop With Us</h2>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="box ">
                <div class="img-box">
                  <img height="50px" src="images/delivery.png"/>
                </div>
                <div class="detail-box">
                  <h5>Fast Delivery</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box ">
                <div class="img-box">
                  <img height="50px" src="images/free.png"/>
                </div>
                <div class="detail-box">
                  <h5>Free Shiping</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="box ">
                <div class="img-box">
                  <img height="50px" src="images/medal.png"/>
                </div>
                <div class="detail-box">
                  <h5>Best Quality</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end why section  */}

      {/* arrival section --> */}
      <section class="arrival_section">
        <div class="container">
          <div class="box">
            <div class="arrival_bg_box">
              <img src={"images/arrival-bg.png"} alt="" />
            </div>
            <div class="row">
              <div class="col-md-6 ml-auto">
                <div class="heading_container remove_line_bt">
                  <h2>#NewArrivals</h2>
                </div>
                <p style={{ marginTop: "20px", marginBottom: "30px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nulla, efficitur a lacus in, rhoncus placerat enim. Nullam mollis viverra ante, non varius quam auctor sed!
                </p>
                <a href="" onClick={()=>history.push('/products')}>Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end arrival section  */}

      {/* product section --> */}
      <section class="product_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>
              Our <span>products</span>
            </h2>
          </div>
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p1.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Men's Shirt</h5>
                  <h6>$75</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p2.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Men's Shirt</h5>
                  <h6>$80</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p3.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Women's Dress</h5>
                  <h6>$68</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p4.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Women's Dress</h5>
                  <h6>$70</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p5.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Women's Dress</h5>
                  <h6>$75</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p6.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Women's Dress</h5>
                  <h6>$58</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p7.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Women's Dress</h5>
                  <h6>$80</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p8.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Men's Shirt</h5>
                  <h6>$65</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p9.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Men's Shirt</h5>
                  <h6>$65</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p10.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Men's Shirt</h5>
                  <h6>$65</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p11.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Men's Shirt</h5>
                  <h6>$65</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-4">
              <div class="box">
                <div class="option_container">
                  <div class="options">
                    <a href="" class="option1">
                      Add To Cart
                    </a>
                    <a href="" class="option2">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="img-box">
                  <img src="images/p12.png" alt="" />
                </div>
                <div class="detail-box">
                  <h5>Women's Dress</h5>
                  <h6>$65</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">View All products</a>
          </div>
        </div>
      </section>
      {/* <!-- end product section --> */}

      {/* <!-- subscribe section --> */}
      <section class="subscribe_section">
        <div class="container-fuild">
          <div class="box">
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <div class="subscribe_form ">
                  <div class="heading_container heading_center">
                    <h3>Subscribe To Get Discount Offers</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <button>subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end subscribe section --> */}

      {/* <!-- client section --> */}
      <section class="client_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center">
            <h2>Customer's Testimonial</h2>
          </div>
          <div
            id="carouselExample3Controls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="box col-lg-10 mx-auto">
                  <div class="img_container">
                    <div class="img-box">
                      <div class="img_box-inner">
                        <img src="images/client.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="detail-box">
                    <h5>Anna Trevor</h5>
                    <h6>Customer</h6>
                    <p>
                    I just got my first order and I have one word WOW!!!! Love, Love, Love these cloths!! I had my doubts before I ordered because most sites plus size cloths are too small and I'm usually disappointment, but not this time!!
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="box col-lg-10 mx-auto">
                  <div class="img_container">
                    <div class="img-box">
                      <div class="img_box-inner">
                        <img src="images/client3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="detail-box">
                    <h5>Mark Joe</h5>
                    <h6>Customer</h6>
                    <p>
                    I love the clothes from this website!! I am so glad I found them.....everything has been spot on, fits wonderfully, styles are trendy and lots to choose from!! Thanks for being here for us!!!
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="box col-lg-10 mx-auto">
                  <div class="img_container">
                    <div class="img-box">
                      <div class="img_box-inner">
                        <img src="images/client2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="detail-box">
                    <h5>Lilly Burnez</h5>
                    <h6>Customer</h6>
                    <p>
                    I just wanted to let you know my opinion of your company. I normally have a rule that I never buy any clothes online... Ever. When I came across your store. I really loved the styles that you offer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel_btn_box">
              <a
                class="carousel-control-prev"
                href="#carouselExample3Controls"
                role="button"
                data-slide="prev"
              >
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExample3Controls"
                role="button"
                data-slide="next"
              >
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end client section --> */}
      {/* <!-- footer start --> */}
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="full">
                <div class="logo_footer">
                  <h2 style={{fontWeight: 700,fontFamily: 'inherit',textTransform: 'uppercase'}}>Fashion Store</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna nulla, efficitur a lacus in, rhoncus placerat enim.</p>
                </div>                
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-md-12">
                      <div className="widget_menu">
                      <div class="information_f">
                        <p>
                          <strong>ADDRESS:</strong> 1st Floor, Pheroze Building, Chhatrapati Shivaji Maharaj Marg, Mumbai
                        </p>
                        <p>
                          <strong>TELEPHONE:</strong> +91 987 654 3210
                        </p>
                        <p>
                          <strong>EMAIL:</strong> sharmanikhil67696@gmail.com
                        </p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="widget_menu">
                    <h3>Newsletter</h3>
                    <div class="information_f">
                      <p>
                        Subscribe by our newsletter and get updates everyday.
                      </p>
                    </div>
                    <div class="form_sub">
                      <form>
                        <fieldset>
                          <div class="field">
                            <input
                              type="email"
                              placeholder="Enter Your Mail"
                              name="email"
                            />
                            <input type="submit" value="Subscribe" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end  */}
      <div class="cpy_">
        <p>© 2022 All Rights Reserved</p>
      </div>
    </>
  );
}
export default Home;
