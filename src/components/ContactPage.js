import React from "react";

function Contact() {
  return (
    <div className="container contact-content fade-in">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-info">
        <h3>
          You can reach us via email at{" "}
          <a href="mailto:contact@example.com">blogwritemail@gmail.com</a>.
        </h3>
        <h4>Feel free to follow us on social media for updates and more:</h4>
        <ul className="social-links">
          <li>
            <img
              src="https://img.freepik.com/premium-vector/twitter-logo-square-icon_444390-7003.jpg"
              height="50px"
              width="50px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
              height="50px"
              width="50px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://png.pngtree.com/element_our/md/20180626/md_5b321ca31d522.png"
              height="50px"
              width="50px"
              alt=""
            />
          </li>
          <li className="centered">
            <img
              src="https://e7.pngegg.com/pngimages/624/759/png-clipart-linkedin-computer-icons-logo-social-networking-service-facebook-miscellaneous-blue.png"
              height="50px"
              width="50px"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
