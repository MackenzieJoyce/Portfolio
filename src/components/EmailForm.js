import React, { useState } from 'react';

const EmailForm = () => {
  const [status, setStatus] = useState('Submit');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending now...');

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'http://localhost:5000/contact'
      },
      body: JSON.stringify(details)
    });

    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
    // setEmail('');
    // setMessage('');
  };

  return (
    <div className="container">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name </label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email </label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>

        <div className="form-control">
          <label htmlFor="message">Message </label>
          <input
            type="textarea"
            id="message"
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit">{status}</button>
      </form>
    </div>
  );
};

export default EmailForm;
