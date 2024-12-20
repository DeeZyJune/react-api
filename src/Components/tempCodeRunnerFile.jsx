import React, {useContext, useEffect, useState} from "react";
import ProductDetails from "../Contexts/ProductDetails";
import Header from "./Header";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";

function Section(handleAddToCart) {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const { isOpen, handleClose } = useContext(SidebarContext);
  console.log(useContext(CartContext))

  const handleAddItem = (product) => {
    handleAddToCart(product);
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


    return (
      <div>
        <div></div>
          {/* billboard */}
          <section id="billboard" className="bg-light py-5">
            <div className="container">
              <div className="row justify-content-center">
                <h1 className="section-title text-center mt-4" data-aos="fade-up">New Collections</h1>
                <div className="col-md-6 text-center" data-aos="fade-up" data-aos-delay={300}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci
                    repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum,
                    quibusdam ex repellat eaque!</p>
                </div>
              </div>

              <div className="row">
                {products.length > 0 ? (
                  products.slice(0, 6).map((product) => (
                    <div className="col-12 col-md-2 mb-6 swiper main-swiper py-4 " data-aos="fade-up" data-aos-delay={600}>
                      <div className="swiper-wrapper d-flex border-animation-left">
                        <div className="swiper-slide">
                          <div className="banner-item image-zoom-effect">
                            <div className="image-holder" style={{background:"white"}}>
                              <a href="#">
                                <img src={product.image} alt={product} className="img-fluid"
                                  style={{width:"100%", height:"250px", objectFit:"contain"}}
                                />
                              </a>
                            </div>
                            <div className="banner-content py-4">
                              <h5 className="element-title text-uppercase">
                                <a href="index.html" className="item-anchor">{product.title}</a>
                              </h5>
                              <p>{product.description.length>100 ? product.description.substring(0, 80) + " ..." : product.description}</p>
                              <div className="btn-left">
                                <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <div className="swiper-pagination" />
                  </div>
                  ))) : (
                      <p>No products available</p>
                )}
                <div className="icon-arrow icon-arrow-left"><svg width={50} height={50} viewBox="0 0 24 24">
                    <use xlinkHref="#arrow-left" />
                  </svg></div>
                <div className="icon-arrow icon-arrow-right"><svg width={50} height={50} viewBox="0 0 24 24">
                    <use xlinkHref="#arrow-right" />
                  </svg></div>
              </div>
            </div>
          </section>
          {/* features */}
          <section className="features py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay={0}>
                  <div className="py-5">
                    <svg width={38} height={38} viewBox="0 0 24 24">
                      <use xlinkHref="#calendar" />
                    </svg>
                    <h4 className="element-title text-capitalize my-3">Book An Appointment</h4>
                    <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                  </div>
                </div>
                <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay={300}>
                  <div className="py-5">
                    <svg width={38} height={38} viewBox="0 0 24 24">
                      <use xlinkHref="#shopping-bag" />
                    </svg>
                    <h4 className="element-title text-capitalize my-3">Pick up in store</h4>
                    <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                  </div>
                </div>
                <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay={600}>
                  <div className="py-5">
                    <svg width={38} height={38} viewBox="0 0 24 24">
                      <use xlinkHref="#gift" />
                    </svg>
                    <h4 className="element-title text-capitalize my-3">Special packaging</h4>
                    <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                  </div>
                </div>
                <div className="col-md-3 text-center" data-aos="fade-in" data-aos-delay={900}>
                  <div className="py-5">
                    <svg width={38} height={38} viewBox="0 0 24 24">
                      <use xlinkHref="#arrow-cycle" />
                    </svg>
                    <h4 className="element-title text-capitalize my-3">free global returns</h4>
                    <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* categories */}
          <section className="categories overflow-hidden">
            <div className="container">
              <div className="open-up" data-aos="zoom-out">
                <div className="row">
                  {products.length > 0 ? (
                    products.slice(10, 14).map((product) => (
                      <div className="col-12 col-md-3 md-4 swiper main-swiper py-4">
                        <div className="cat-item image-zoom-effect">
                          <div className="image-holder" style={{background:"white"}}>
                            <a href="index.html">
                              <img src={product.image} alt="categories" className="product-image img-fluid" 
                                style={{width:"100%", height:"250px", objectFit:"contain"}}
                              />
                            </a>
                          </div>
                          <div className="category-content">
                            <div className="product-button">
                              <a href="index.html" className="btn btn-common text-uppercase" style={{marginLeft:"80px", marginTop:"10px"}}>{product.category}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      ))) : (
                        <p>No products available</p>
                    )}
                </div>
              </div>
            </div>
          </section>
          {/* new arrival */}
          <section id="new-arrival" className="new-arrival product-carousel py-5 position-relative overflow-hidden">
            <div className="container">
              <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
                <h4 className="text-uppercase">Our New Arrivals</h4>
                <a href="index.html" className="btn-link">View All Products</a>
              </div>
              <div className="swiper product-swiper open-up" data-aos="zoom-out">
                <div className="row swiper-wrapper d-flex">
                  {products.length > 0 ? (
                    products.slice(5, 9).map((product) => (   
                      <div className="col-12 col-md-3 md-4 swiper-slide py-5 ">
                            <div className="product-item image-zoom-effect link-effect">
                              <div className="image-holder position-relative" style={{background:"white"}}>
                                <a href="index.html">
                                  <img src={product.image} alt="categories" className="product-image img-fluid"
                                    style={{width:"100%", height:"250px", objectFit:"contain"}}
                                  />
                                </a>
                                <a href="index.html" className="btn-icon btn-wishlist">
                                  <svg width={24} height={24} viewBox="0 0 24 24">
                                    <use xlinkHref="#heart" />
                                  </svg>
                                </a>
                                <div className="product-content">
                                  <h5 className="element-title text-uppercase fs-5 mt-3">
                                <a href="index.html" style={{marginTop:"20px"}}>{product.title}</a>
                                  </h5>
                                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>{product.price + "$"}</span></a>
                                </div>
                              </div>
                            </div>
                      </div>
                      ))) : (
                          <p>No products available</p>
                    )}   
                </div>
                <div className="swiper-pagination" />
              </div>
              <div className="icon-arrow icon-arrow-left"><svg width={50} height={50} viewBox="0 0 24 24">
                  <use xlinkHref="#arrow-left" />
                </svg></div>
              <div className="icon-arrow icon-arrow-right"><svg width={50} height={50} viewBox="0 0 24 24">
                  <use xlinkHref="#arrow-right" />
                </svg></div>
            </div>
          </section>
       
          {/* collection  */}
          <section className="collection bg-light position-relative py-5">
            <div className="container">
              <div className="row">
                <div className="collection-item d-flex flex-wrap my-5">
                  <div className="col-md-6 column-container">
                    <div className="image-holder">
                      <img src="images/single-image-2.jpg" alt="collection" className="product-image img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-6 column-container bg-white">
                    <div className="collection-content p-5 m-0 m-md-5">
                      <h3 className="element-title text-uppercase">Classic winter collection</h3>
                      <p>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu
                        fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam
                        nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis
                        diam sed facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit libero.</p>
                      <a href="#" className="btn btn-dark text-uppercase mt-3">Shop Collection</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* best selling  */}
          <section id="best-sellers" className="best-sellers product-carousel py-5 position-relative overflow-hidden">
            <div className="container">
              <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
                <h4 className="text-uppercase">Best Selling Items</h4>
                <a href="index.html" className="btn-link">View All Products</a>
              </div>
              <div className="swiper product-swiper open-up" data-aos="zoom-out">
                <div className=" row swiper-wrapper d-flex">
                  {products.length > 0 ? (
                      products.slice(15, 19).map((product) => (   
                        <div className="col-12 col-md-3 md-4 swiper-slide py-5">
                          <div className="product-item image-zoom-effect link-effect">
                            <div className="image-holder">
                              <a href="index.html" style={{background:"white"}}>
                                <img src={product.image} alt="categories" className="product-image img-fluid"
                                  style={{width:"100%", height:"250px", objectFit:"contain"}}
                                />
                              </a>
                              <a href="index.html" className="btn-icon btn-wishlist">
                                <svg width={24} height={24} viewBox="0 0 24 24">
                                  <use xlinkHref="#heart" />
                                </svg>
                              </a>
                              <div className="product-content">
                                <h5 className="text-uppercase fs-5 mt-3">
                                  <a href="index.html">{product.title.length>30 ? product.title.substring(0,20) + " . . ." : product.title}</a>
                                </h5>
                                <a href="index.html" className="text-decoration-none" onClick={()=> handleAddItem(product)} data-after="Add to cart"><span>$95.00</span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))) : (
                        <p>No products available</p>
                    )}  
                </div>
                <div className="swiper-pagination" />
              </div>
              <div className="icon-arrow icon-arrow-left"><svg width={50} height={50} viewBox="0 0 24 24">
                  <use xlinkHref="#arrow-left" />
                </svg></div>
              <div className="icon-arrow icon-arrow-right"><svg width={50} height={50} viewBox="0 0 24 24">
                  <use xlinkHref="#arrow-right" />
                </svg></div>
            </div>
          </section>

          <section className="video py-5 overflow-hidden">
            <div className="container-fluid">
              <div className="row">
                <div className="video-content open-up" data-aos="zoom-out">
                  <div className="video-bg">
                    <img src="images/video-image.jpg" alt="video" className="video-image img-fluid" />
                  </div>
                  <div className="video-player">
                    <a className="youtube" href="https://www.youtube.com/embed/pjtsGzQjFM4">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#play" />
                      </svg>
                      <img src="images/text-pattern.png" alt="pattern" className="text-rotate" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="testimonials py-5 bg-light">
            <div className="section-header text-center mt-5">
              <h3 className="section-title">WE LOVE GOOD COMPLIMENT</h3>
            </div>
            <div className="swiper testimonial-swiper overflow-hidden my-5">
              <div className="swiper-wrapper d-flex">
                <div className="swiper-slide">
                  <div className="testimonial-item text-center">
                    <blockquote>
                      <p>“More than expected crazy soft, flexible and best fitted white simple denim shirt.”</p>
                      <div className="review-title text-uppercase">casual way</div>
                    </blockquote>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item text-center">
                    <blockquote>
                      <p>“Best fitted white denim shirt more than expected crazy soft, flexible</p>
                      <div className="review-title text-uppercase">uptop</div>
                    </blockquote>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item text-center">
                    <blockquote>
                      <p>“Best fitted white denim shirt more white denim than expected flexible crazy soft.”</p>
                      <div className="review-title text-uppercase">Denim craze</div>
                    </blockquote>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item text-center">
                    <blockquote>
                      <p>“Best fitted white denim shirt more than expected crazy soft, flexible</p>
                      <div className="review-title text-uppercase">uptop</div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-swiper-pagination d-flex justify-content-center mb-5" />
          </section>

        {/* new arrival */}
          <section id="new-arrival" className="new-arrival product-carousel py-5 position-relative overflow-hidden">
            <div className="container">
              <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
                <h4 className="text-uppercase">Our New Arrivals</h4>
                <a href="index.html" className="btn-link">View All Products</a>
              </div>
              <div className="swiper product-swiper open-up" data-aos="zoom-out">
                <div className="row swiper-wrapper d-flex">
                  {products.length > 0 ? (
                    products.slice(14, 20).map((product) => (   
                      <div className="col-12 col-md-2 md-4 swiper-slide py-4 ">
                            <div className="product-item image-zoom-effect link-effect">
                              <div className="image-holder position-relative" style={{background:"white"}}>
                                <a href="index.html">
                                  <img src={product.image} alt="categories" className="product-image img-fluid"
                                    style={{width:"100%", height:"250px", objectFit:"contain"}}
                                  />
                                </a>
                                <a href="index.html" className="btn-icon btn-wishlist">
                                  <svg width={24} height={24} viewBox="0 0 24 24">
                                    <use xlinkHref="#heart" />
                                  </svg>
                                </a>
                                <div className="product-content">
                                  <h5 className="element-title text-uppercase fs-5 mt-3">
                                <a href="index.html" style={{marginTop:"20px"}}>{product.title.length>30 ? product.title.substring(0,20) + " . . ." : product.title}</a>
                                  </h5>
                                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>{product.price + "$"}</span></a>
                                </div>
                              </div>
                            </div>
                      </div>
                      ))) : (
                          <p>No products available</p>
                    )}   
                </div>
                <div className="swiper-pagination" />
              </div>
              <div className="icon-arrow icon-arrow-left"><svg width={50} height={50} viewBox="0 0 24 24">
                  <use xlinkHref="#arrow-left" />
                </svg></div>
              <div className="icon-arrow icon-arrow-right"><svg width={50} height={50} viewBox="0 0 24 24">
                  <use xlinkHref="#arrow-right" />
                </svg></div>
            </div>
          </section>



        <section className="blog py-5">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
              <h4 className="text-uppercase">Read Blog Posts</h4>
              <a href="index.html" className="btn-link">View All</a>
            </div>
            <div className="row">
              {products.length > 0 ? (
                products.slice(12, 16).map((product) => (   
                  <div className=" col-12 col-md-3 md-6 py-4">
                    <article className="post-item">
                      <div className="post-image" style={{background:"white"}}>
                        <a href="index.html">
                          <img src={product.image} alt="image" className="post-grid-image img-fluid" 
                            style={{width:"100%", height:"250px", objectFit:"contain"}}
                          />
                        </a>
                      </div>
                      <div className="post-content d-flex flex-wrap gap-2 my-3">
                        <div className="post-meta text-uppercase fs-6 text-secondary">
                          <span className="post-category">{product.category}/</span>
                          <span className="meta-day"> jul 11, 2022</span>
                        </div>
                        <h5 className="post-title text-uppercase">
                          <a href="index.html">How to look outstanding in pastel</a>
                        </h5>
                        <p>Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...</p>
                      </div>
                    </article>
                  </div>
                    ))) : (
                      <p>No products available</p>
                )}   
            </div>
          </div>
        </section>

        <section className="logo-bar py-5 my-5">
          <div className="container">
            <div className="row">
              <div className="logo-content d-flex flex-wrap justify-content-between">
                <img src="images/logo1.png" alt="logo" className="logo-image img-fluid" />
                <img src="images/logo2.png" alt="logo" className="logo-image img-fluid" />
                <img src="images/logo3.png" alt="logo" className="logo-image img-fluid" />
                <img src="images/logo4.png" alt="logo" className="logo-image img-fluid" />
                <img src="images/logo5.png" alt="logo" className="logo-image img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter bg-light" style={{background: 'url(images/pattern-bg.png) no-repeat'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 py-5 my-5">
                <div className="subscribe-header text-center pb-3">
                  <h3 className="section-title text-uppercase">Sign Up for our newsletter</h3>
                </div>
                <form id="form" className="d-flex flex-wrap gap-2">
                  <input type="text" name="email" placeholder="Your Email Addresss" className="form-control form-control-lg" />
                  <button className="btn btn-dark btn-lg text-uppercase w-100">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="instagram position-relative">
          <div className="d-flex justify-content-center w-100 position-absolute bottom-0 z-1">
            <a href="https://www.instagram.com/templatesjungle/" className="btn btn-dark px-5">Follow us on Instagram</a>
          </div>
          <div className="row g-0 ">
            {products.length > 0 ? (
              products.slice(12, 18).map((product) => (   
                <div className="col-6 col-sm-4 col-md-2">
                  <div className="insta-item" style={{background:"white"}}>
                    <a href="https://www.instagram.com" target="_blank">
                      <img src={product.image} alt="instagram" className="insta-image img-fluid" 
                        style={{width:"100%", height:"250px", objectFit:"contain"}}
                      />
                    </a>
                  </div>
                </div>
                  ))) : (
                    <p>No products available</p>
              )}  
          </div>
        </section>
      </div>
    )
}

export default Section;