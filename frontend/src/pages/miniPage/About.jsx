import React from "react";
import AboutImg from "../../assets/about.jpeg";

const About = () => {
  return (
    <div className="bg-white text-primary container mx-auto p-2">
      <div className="md:flex md:items-center md:justify-between md:px-24 py-8">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-left md:text-4xl text-3xl font-medium md:leading-tight">
            About Us
          </h2>
          <p>
            Welcome to{" "}
            <a href="/" className="text-blue-400 underline">
              SRBlogs.com
            </a>
            , your go-to destination for exploring the latest trends, insights,
            and innovations in the world of technology.
          </p>
          <p>
            At SRBlogs, we are passionate about sharing knowledge and empowering
            tech enthusiasts, professionals, and beginners alike. Our blogs
            cover a wide array of topics, including software development,
            emerging technologies, programming tips, tools, and industry best
            practices.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={AboutImg}
            alt="About Us"
            className="rounded-lg"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-24">
        {/* Card 1 */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Our Mission</h3>
          <p>
            Our mission is to simplify complex tech concepts and make them
            accessible to everyone. We strive to inspire learning, foster
            creativity, and encourage growth in the ever-evolving tech industry.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Who We Are</h3>
          <p>
            We are a team of tech enthusiasts and problem-solvers, dedicated to
            providing high-quality, well-researched, and engaging content. Our
            blogs are designed to add value to your journey.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
          <p>
            Our blogs provide comprehensive and actionable insights, driven by a
            passion for technology and a commitment to fostering a supportive
            community.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Join Us on This Journey</h3>
          <p>
            Explore, learn, and grow with us. Whether you’re a seasoned
            developer or just starting out, there’s something here for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
