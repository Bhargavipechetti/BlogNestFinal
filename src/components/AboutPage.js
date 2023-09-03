import React from "react";

function AboutPage() {
  return (
    <div className="container about-content fade-in">
      <h1 className="about-title">About Our BlogNest</h1>

      {/* Blog Post Previews */}
      <div className="blog-previews">
        <div className="blog-preview">
          <h2>Why BlogNest ?</h2>
          <p>
            Because new latest updates about the world changing Technologies
            like Artificial Intelligence,Machine Learning etc...
          </p>
          <a href="/blog/post1" className="read-more">
            Read More
          </a>
        </div>
        <div className="blog-preview">
          <h2>Our Mission</h2>
          <p>
            At our BlogNest , our mission is to share knowledge and inspiration,
            connect with like-minded individuals, explore the new latest
            Technologies etc. We are driven by a passion for good content and a
            commitment to providing our readers with an enriching and
            enlightening experience.
          </p>
          <a href="/blog/post2" className="read-more">
            Read More
          </a>
        </div>
        {/* Add more blog previews here */}
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <h2>About Us</h2>
        <p className="about-modify">
          Welcome to our blog! We are passionate about sharing valuable
          information and insights with our readers. Our mission is to provide
          engaging and informative content on a wide range of topics.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
