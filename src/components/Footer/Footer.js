import "./Footer.scss";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div className="footer ">
      <footer className="text-center ">
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/about">About us</Link>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/products">Products</Link>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/awards">Awards</Link>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/help">Help</Link>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/contact">Contact</Link>
                </h6>
              </div>
            </div>
          </section>
          <hr className="my-4" />
          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 content">
                <p>Welcome to our Orchid Shopping Web! We offer a wide range of beautiful and exotic orchids for you to choose from. Whether you're a seasoned orchid enthusiast or a beginner, we have something for everyone. Happy shopping!</p>
              </div>
            </div>
          </section>
          <section className="text-center mb-5 sec">
            <Link to="" className="me-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="" className="me-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="" className="me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="" className="me-4">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="" className="me-4">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4">
              <i className="fab fa-github"></i>
            </Link>
          </section>
        </div>
        <div className="text-center p-3 last">
          <p>
            <small>2024 Orchids Shopp - All rights reserved</small>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
