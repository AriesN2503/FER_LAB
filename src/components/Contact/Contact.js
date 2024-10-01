import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions about our orchids? We'd love to hear from you!</p>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        <div className="contact-info">
          <h2>Our Information</h2>
          <p>
            <strong>Address:</strong> Lô E2a-7, Đường D1 Khu Công nghệ cao, P. Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh
          </p>
          <p>
            <strong>Phone:</strong> 028 7300 1866
          </p>
          <p>
            <strong>Email:</strong> daihocfpt@fpt.edu.vn
          </p>
          <p>
            <strong>Hours:</strong> Monday - Saturday: 8am - 5pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
