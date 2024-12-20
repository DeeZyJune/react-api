import React,{useState, useEffect} from 'react'

function AboutUs () {
    const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

//   const handleAddItem = (product) => {
//     handleAddToCart(product);
//   }

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
          <section className="collection bg-light position-relative py-5 swiper product-swiper open-up" data-aos="zoom-out">
            <div className="container " >
              <div className="row">
                <div className="collection-item d-flex flex-wrap my-5">
                  <div className="col-md-6 column-container">
                    <div className="image-holder">
                      <img src="images/single-image-2.jpg" alt="collection" className="product-image img-fluid" />
                    </div>
                  </div>
                  <div className="col-md-6 column-container bg-white">
                    <div className="collection-content p-5 m-0 m-md-5">
                      <h3 className="element-title text-uppercase">About Us</h3>
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
    </>
  )
}

export default AboutUs;
