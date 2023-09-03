import React from "react";
import { Link } from "react-router-dom";

function Home() {
  // Dummy data for blog post intros
  const blogPostIntros = [
    {
      id: 1,
      title: "Unleashing the Power of 5G Technology: A New Era of Connectivity",
      content:
        "In today's digital age, connectivity is not just a convenience; it's an integral part of our lives. Enter 5G technology, the latest and most significant leap in the realm of wireless communication. 5G promises to revolutionize the way we connect, communicate, and conduct business, ushering in a new era of possibilities.Understanding 5G TechnologAt its core, 5G, short for the fifth generation of wireless technology, is all about speed, low latency, and massive connectivity. It represents a giant leap forward from its predecessor, 4G/LTE, offering data transmission speeds up to 100 times faster. But 5G is not just about speed; it's about creating a robust and intelligent network that can support the growing demands of the Internet of Things (IoT), augmented reality (AR), virtual reality (VR), autonomous vehicles, and more"
    },
    {
      id: 2,
      title: "The Rise of Artificial Intelligence in Healthcare",
      content:
        "In recent years, artificial intelligence (AI) has made remarkable strides across various industries, but perhaps its most profound impact has been in healthcare. The integration of AI into the healthcare sector has ushered in a new era of diagnosis, treatment, and patient care.n conclusion, artificial intelligence is poised to transform healthcare in unprecedented ways. From more accurate diagnoses to personalized treatment plans and drug discovery, AI offers a brighter and more efficient future for healthcare. As technology continues to advance, the healthcare industry must embrace these innovations while safeguarding patient interests and ethical principles. The synergy of human expertise and AI capabilities holds the promise of healthier lives and improved healthcare outcomes for all."
    },
    {
      id: 3,
      title: "User-Centric Design in Modern Software Development",
      content:
        "In today's fast-paced digital landscape, the success of any software or application largely depends on how well it caters to the needs and preferences of its users. User-centric design has emerged as a fundamental principle in modern software development, emphasizing the importance of putting users at the center of the design and development process. In this blog post, we'll explore the key aspects of user-centric design and its significance in creating software that not only functions flawlessly but also provides an exceptional user experience.Understanding User-Centric DesignUser-centric design, often referred to as user-centered design (UCD), is an iterative design process that prioritizes the end-users throughout the development lifecycle. It involves continuous feedback, testing, and refinement to ensure that the final product aligns with user expectations and goals.ConclusionIn the era of digital transformation, user-centric design is not just a buzzword but a critical approach to building successful software products. By prioritizing user needs and preferences, software developers can create solutions that are not only functional but also provide outstanding user experiences. In a world where users have endless options, catering to their needs can make all the difference between success and obscurity in the market."
    }
  ];

  return (
    <div className="container home-content fade-in">
      <h1 className="fade-in">Welcome to Our BlogNest</h1>

      {blogPostIntros.map((post) => (
        <div key={post.id} className="blog-intro">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`/blog/${post.id}`} className="read-more">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
