import { useState } from "react";
import "./Contact.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  topic: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const whatsappNumber = "+12402002516"; // No '+' for wa.me links
    const textMessage = `Hello, I am ${formData.firstName} ${formData.lastName}. My email is ${formData.email}, and my phone number is ${formData.phoneNumber}. I would like to talk about ${formData.topic}. Here's my message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    window.open(whatsappURL, "_blank");
    window.location.reload();
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="ctn-h3">Get In Touch</p>
        <h2 className="ctn-h2">Contact Me</h2>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phoneNumber" className="contact--label">
            <span className="text-md">Whatsapp Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="topic"
            name="topic"
            className="contact--input text-md"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select One...</option>
            <option value="Crypto Investment">Crypto Investment</option>
            <option value="Web Development">Trading</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows={8}
            placeholder="Type your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <div>
          <button className="btn btn-github contact--form--btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
