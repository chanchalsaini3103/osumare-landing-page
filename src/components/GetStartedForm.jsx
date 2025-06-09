import React, { useState } from "react";
import "../styles/GetStartedForm.css";

const GetStartedForm = ({ onClose, onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState([]);
  const [email, setEmail] = useState("");

  const handleCheckboxChange = (lang) => {
    setLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang]
    );
  };

  const handleSubmit = () => {
    const formData = {
      firstName,
      lastName,
      gender,
      languages,
      email
    };
    onSubmit(formData); 
    onClose();
    setTimeout(() => window.dispatchEvent(new Event("showThankYou")), 300);
  };

  return (
    <div className="glass-modal">
      <button className="close-btn" onClick={onClose}>×</button>
      <h4 className="fw-bold mb-1">Get Started Today!</h4>
      <p className="text-muted mb-4">Fill in your details and take control of your tasks.</p>

      <div className="row mb-3">
        <div className="col">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />
        </div>
        <div className="col">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Gender</label>
        <div className="d-flex gap-3">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="male" value="Male" onChange={(e) => setGender(e.target.value)} />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" id="female" value="Female" onChange={(e) => setGender(e.target.value)} />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Language</label>
        <div className="d-grid gap-2">
          {['English', 'Hindi', 'Marathi'].map((lang, idx) => (
            <div className="form-check" key={idx}>
              <input className="form-check-input" type="checkbox" id={lang} checked={languages.includes(lang)} onChange={() => handleCheckboxChange(lang)} />
              <label className="form-check-label" htmlFor={lang}>{lang}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" />
      </div>

      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="terms" />
        <label className="form-check-label" htmlFor="terms">
          I agree to the <a href="#" className="text-danger">terms and conditions</a>
        </label>
      </div>

      <button className="btn btn-danger w-100" type="button" onClick={handleSubmit}>
        Done
      </button>
    </div>
  );
};

export default GetStartedForm;
