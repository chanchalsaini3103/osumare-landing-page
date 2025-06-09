import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm custom-navbar">
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo192.png" alt="Logo" width="32" height="32" className="me-2" />
          <span className="fw-bold fs-5">do <span className="text-dark">List</span></span>
        </a>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4">
            <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Features</a></li>
            <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">More Option</a></li>
            <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Contact</a></li>
          </ul>
          <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
            <button className="btn btn-outline-danger px-4">Log In</button>
            <button className="btn btn-danger px-4">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
