import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';

function Shop () {

    const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <>
        
        {/* <section className="categories overflow-hidden">
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
        </section> */}
        <section id="new-arrival" className="new-arrival product-carousel py-5 position-relative overflow-hidden">
            <div className="container">
              <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
                <h4 className="text-uppercase">Our All Product</h4>
                <a href="index.html" className="btn-link">View All Products</a>
              </div>
              <div className="swiper product-swiper open-up" data-aos="zoom-out">
                <div className="row swiper-wrapper d-flex">
                    {products.length > 0 ? (
                        products.slice(0, 17).map((product) => (   
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
                                      <NavLink to={`/product/${product.id}`} className="text-decoration-none" data-after="Add to cart"><span>{product.price + "$"}</span></NavLink>
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
    </>
  )
}

export default Shop
