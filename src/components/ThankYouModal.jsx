import React from "react";

const ThankYouModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="glass-modal text-center">
        <div style={{ fontSize: "2rem" }}>❤️</div>
        <h5 className="fw-bold mt-3">Thank you for connect with us.</h5>
        <p className="text-muted">Our team will contacting with you soon</p>
        <button className="btn btn-danger mt-3 w-100" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
};



export default ThankYouModal;
