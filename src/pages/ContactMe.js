import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        form.current,
        process.env.YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="contentPages">
      <h2>Contact Me</h2>
      <div className="contentIndiv">
        <Form className='formContainer' style={styles.formContainer} ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="user_name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="user_email" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textArea" name="message" />
            </Form.Group>
            <Button type="submit" value="Send">
              Send
            </Button>
          </Form>
        </div>
    </main>
  );
};

const styles = {
  formContainer: {
    background: '#181818',
    border: 'none',
    borderRadius: '5px',
  }
}

export default ContactMe;
