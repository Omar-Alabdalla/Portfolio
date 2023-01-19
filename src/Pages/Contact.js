import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { Container, Button, ButtonGroup } from "react-bootstrap";

import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";

import React from "react";
import "./Contact.scss";

function Contact() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8b5jakg",
        "template_0ryg91a",
        refForm.current,
        "fU0XeKspegZeHEbaT"
      )
      .then(
        (result) => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          alert("Error sending message!");
        }
      );
  };
  return (
    <Container>
      <div class="contact-section">
        <div className="text-zone">
          {" "}
          <h1>Contact Me</h1>
          <p></p>
          <div className="Contact-Form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="Email"
                    name="Email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li className="half">
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    required
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="Socials">
        <ButtonGroup vertical aria-label="Basic Example">
          <Button
            href="https://www.linkedin.com/in/omar-alabdalla/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </Button>
          <Button
            href="https://github.com/Omar-Alabdalla"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </Button>
          <Button
            href="mailto: omar.alabdalla04@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineMail />
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default Contact;
