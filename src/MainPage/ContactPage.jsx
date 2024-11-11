import React, { useState } from "react";
import { useAddNewContactformMutation } from '../services/projectApi';
import './contactPage.scss'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [addContact] = useAddNewContactformMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContact(formData).unwrap();
      console.log("Form Submitted", formData);
      setFormData({ name: "", email: "", message: "", number: "" }); // Clear form
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Drop Me a Message</h2>
        <p>
          I’d love to connect! Whether you have a project in mind, a collaboration opportunity, or just want to chat, feel free to reach out.
        </p>
        <div className="contact-details">
          <p>📞 +91 7778827774</p>
          <p>📧 sonusindih99@gmail.com</p>
          <p>Udaipur, Rajasthan</p>
        </div>
      </div>
      
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Contact No."
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
