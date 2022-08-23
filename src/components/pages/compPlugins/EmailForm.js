import React, { useState } from 'react';

const styles = {
  label: {
    textAlign: 'left',
    display: 'block'
  },
  input: {
    width: '98%',
    height: 30,
    margin: '5px 0',
    padding: '3px 7px',
    fontSize: '17px',
    borderRadius: 3
  },
  form: {
    marginBottom: 40
  },
  control: {
    margin: '20px 0'
  }
};

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
        // 'Content-Type': 'http://localhost:5000/contact'
        "Content-Type": "application/json;charset=utf-8",
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
    <div style={styles.contentIndiv}>
      {/* className="container"  */}
      <h3 className='title'>Can't wait? Email me now!</h3>
      <form onSubmit={handleSubmit}>
        <div style={styles.control}>
          <label htmlFor="name" style={styles.label}>
            Name{' '}
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.control}>
          <label htmlFor="email" style={styles.label}>
            Email{' '}
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.control}>
          <label htmlFor="message" style={styles.label}>
            Message{' '}
          </label>
          <input
            type="textarea"
            id="message"
            placeholder="Your Message"
            style={styles.input}
            required
          />
        </div>

        <button className="btn" type="submit">
          {status}
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
