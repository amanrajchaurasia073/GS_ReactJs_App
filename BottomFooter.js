import React, { useState } from "react";
import "./BottomFooter.css";

const BottomFooter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation applied to it
    let formIsValid = true;
    const newErrors = {};

    if (!formData.name) {
      formIsValid = false;
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      formIsValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Email is invalid";
    }

    if (!formData.message) {
      formIsValid = false;
      newErrors.message = "Message is required";
    }

    if (formIsValid) {
      setIsSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bottom-footer">
      <div class="container text-center">
        <div class="col-sm-4"></div>

        <div class="col-sm-8">
          <h2 className="get-in-msg">GET IN TOUCH</h2>
          {isSubmitted ? (
            <p>Thank you for your message!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label>Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>
              <button className="Send-btn" type="submit">
                Send
              </button>
            </form>
          )}
        </div>
      </div>

      <br />
      <div className="copyright">&copy; 2022 All Rights Reserved By SG</div>
    </div>
  );
};

export default BottomFooter;
