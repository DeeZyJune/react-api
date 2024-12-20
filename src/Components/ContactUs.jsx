import React, {useEffect, useState} from 'react'

function ContactUs() {

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
    </>
  )
}

export default ContactUs
