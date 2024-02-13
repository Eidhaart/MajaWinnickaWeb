import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaCheckCircle } from "react-icons/fa"; // Import the check icon
import "./ContactModal.css"; // Ensure this path is correct

const ContactModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ql3afjs",
        "template_b73kxxn",
        e.target,
        "aGkGxnB6hR4iyLYW6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Update state to indicate submission was successful
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClose = () => {
    onClose(); // Close the modal
    setIsSubmitted(false); // Reset submission state for next use
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose}>
          &times;
        </button>
        {isSubmitted ? (
          <div className="thank-you-message">
            <FaCheckCircle
              size="3em"
              color="green"
              style={{ marginRight: "10px", verticalAlign: "middle" }}
            />
            <div style={{ display: "inline-block", verticalAlign: "middle" }}>
              <h2>Thank You!</h2>
              <p>We will get back to you as soon as Possible.</p>
            </div>
            <button onClick={handleClose} className="submit-btn">
              Close
            </button>
          </div>
        ) : (
          <>
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={sendEmail}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
