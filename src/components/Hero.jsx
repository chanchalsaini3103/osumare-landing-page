import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css";
import logo from "../images/logo192.png";
import google from "../images/icons/google.png";
import facebook from "../images/icons/facebook.png";
import github from "../images/icons/github.png";
import pinterest from "../images/icons/pinterest.png";
import youtube from "../images/icons/youtube.png";
import icon1 from "../images/icons/interface.png";
import icon2 from "../images/icons/airplane.png";
import icon3 from "../images/icons/support.png";
import icon4 from "../images/icons/log-in.png";
import phoneDemo from "../images/phone-demo.png";
import teamGuy from "../images/team-guy.png";
import GetStartedForm from "./GetStartedForm";
import ThankYouModal from "./ThankYouModal";
import userImg from "../images/user.png";
const featureIcons = [icon1, icon2, icon3, icon4];
const icons = { google, facebook, github, pinterest, youtube };

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    const handleShowThankYou = () => setShowThankYou(true);
    window.addEventListener("showThankYou", handleShowThankYou);
    return () => window.removeEventListener("showThankYou", handleShowThankYou);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm custom-navbar">
        <div className="container-fluid px-4">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Logo" width="32" height="32" className="me-2" />
            <span className="fw-bold fs-5">do <span className="text-dark">List</span></span>
          </a>
          <div className="collapse navbar-collapse justify-content-between">
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item"><a className="nav-link text-dark" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">More Option</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Contact</a></li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-danger px-4">Log In</button>
              <button className="btn btn-danger px-4">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Simplify Your Life with Our Todo App</h1>
          <p className="text-muted mt-3 mb-4">
            Stay organized and boost your productivity with our intuitive todo website.<br />
            Experience a modern approach to task management that fits your lifestyle.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-danger rounded-pill px-4" onClick={() => setShowForm(true)}>Get started</button>
            <button className="btn btn-outline-danger rounded-pill px-4">Learn more</button>
          </div>

          {showForm && (
            <div className="modal-overlay">
              <GetStartedForm
                onClose={() => setShowForm(false)}
                onSubmit={(formData) => {
                  setSubmittedData((prev) => [...prev, formData]);
                  setShowForm(false);
                  setTimeout(() => window.dispatchEvent(new Event("showThankYou")), 300);
                }}
              />
            </div>
          )}

          {showThankYou && (
            <div className="modal-overlay">
              <ThankYouModal onClose={() => setShowThankYou(false)} />
            </div>
          )}

          <div className="row mt-5 align-items-center">
            <div className="col-md-6 mb-3">
              <div className="promo-box p-4 text-white text-start">
                <h2 className="gradient-heading">
                  <span className="shade-1">Organize.</span><br />
                  <span className="shade-2">Achieve.</span><br />
                  <span className="shade-3">Relax.</span>
                </h2>
                <p>Turn clutter into clarity, chaos into control, and dreams into done. Bold visions into market success.</p>
                <div className="button-group">
                  <button className="custom-btn primary-btn">Get Started Today</button>
                  <button className="custom-btn secondary-btn">Discover Features</button>
                </div>
              </div>
            </div>



            <div className="col-md-6 mb-3">
              <img src={teamGuy} className="img-fluid rounded" alt="Our Team" />
            </div>
          </div>
 <div className="d-flex justify-content-center align-items-center gap-4 mt-4 flex-wrap">
            {Object.entries(icons).map(([name, src]) => (
              <img key={name} src={src} alt={name} width="150" />
            ))}
          </div>
        </div>
      </section>



<section className="features py-5 text-center bg-white">
        <div className="container">
          <h2 className="mb-4">Transform Your Productivity with Our Innovative To-Do List Features</h2>
          <div className="row mt-4">
            {["User-Friendly Interface", "Collaborate & Share Effortlessly", "Effortless Collaboration", "Seamless Access"].map((title, i) => (
              <div className="col-md-3 col-6 mb-4" key={i}>
                <img src={featureIcons[i]} alt={title} width="48" className="mb-3" />
                <h5>{title}</h5>
                <p className="text-muted">
                  {i === 0 && "Our platform offers seamless task management to boost your efficiency."}
                  {i === 1 && "Invite team members to work together and achieve your goals faster."}
                  {i === 2 && "Invite team members to work together and achieve your goals faster."}
                  {i === 3 && "Stay connected and manage your tasks on the go with ease."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section py-5">
        <div className="container">
          <h3 className="text-center fw-bold text-dark">Customer Testimonials</h3>
          <p className="text-muted text-center mb-5">This tool has transformed my productivity and organization!</p>
          <div className="row row-cols-1 row-cols-md-2 align-items-center justify-content-center g-4">
            <div className="col">
              <div className="testimonial-card p-4 h-100">
                <p className="fs-5 fw-semibold mb-4">"Using this website has made my tasks so much easier! I can't imagine my day without it."</p>
                <div className="d-flex align-items-center mt-3">
                  <img src={userImg} alt="User" width="40" className="rounded-circle me-3" />
                  <div>
                    <strong>Sherri Cronin</strong><br />
                    <span className="text-muted">Project Manager, TechCorp</span>
                  </div>
                </div>
                <div className="mt-4 d-flex gap-2">
                  <button className="nav-circle">&lt;</button>
                  <button className="nav-circle">&gt;</button>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="testimonial-image-frame d-inline-block">
                <img src={userImg} alt="User" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

         

      <section className="cta-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={phoneDemo} alt="User" className="img-fluid rounded w-100" style={{ maxHeight: "350px", objectFit: "cover" }} />
            </div>
            <div className="col-md-6 text-start">
              <h2 className="fw-bold mb-3">Start Organizing Your Life Today</h2>
              <p className="text-muted mb-4">Join us now and transform your productivity with our intuitive to-do list platform!</p>
              <div className="d-flex gap-3">
                <button className="btn btn-danger px-4">Sign Up</button>
                <button className="btn btn-outline-danger px-4">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {submittedData.length > 0 && (
        <div className="container submitted-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Gender</th>
                <th>Language</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((item, idx) => (
                <tr key={idx}>
                  <td><input type="checkbox" /></td>
                  <td>{item.firstName} {item.lastName}</td>
                  <td>{item.gender}</td>
                  <td>{item.languages.join(", ")}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <footer className="footer pt-5 pb-4 bg-white border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="d-flex align-items-center mb-3">
                <img src={logo} alt="Logo" width="32" height="32" className="me-2" />
                <h5 className="mb-0 fw-bold">do <span className="text-dark">List</span></h5>
              </div>
              <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
              <div className="input-group mb-2">
                <input type="email" className="form-control" placeholder="Your email here" />
                <button className="btn btn-danger px-4">Join</button>
              </div>
              <small className="text-muted">By subscribing, you consent to our <a href="#">Privacy Policy</a> and agree to receive updates.</small>
            </div>
            <div className="col-md-2 mb-4">
              <h6 className="fw-bold mb-3">Useful Links</h6>
              <ul className="list-unstyled text-muted">
                <li><a href="#">Home Page</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Blog Posts</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Resources</h6>
              <ul className="list-unstyled text-muted">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">User Guide</a></li>
                <li><a href="#">Community Forum</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold mb-3">Connect With Us</h6>
              <ul className="list-unstyled text-muted">
                <li><i className="fab fa-facebook me-2"></i> Facebook</li>
                <li><i className="fab fa-instagram me-2"></i> Instagram</li>
                <li><i className="fab fa-x-twitter me-2"></i> X</li>
                <li><i className="fab fa-linkedin me-2"></i> LinkedIn</li>
                <li><i className="fab fa-youtube me-2"></i> YouTube</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-column flex-md-row justify-content-between text-muted small">
            <div>© 2024 Osumare. All rights reserved.</div>
            <div className="d-flex gap-3">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;