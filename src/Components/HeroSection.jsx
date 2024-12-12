import React from "react";

function HeroSection() {
  return (
    <section
  className="flex items-center justify-center text-center text-white"
  style={{
    minWidth: "100%",
    height: "100vh", // Maintain the view height
    maxWidth: "1920px",
    backgroundImage: "url('background.png')", // Add your image URL here
    backgroundSize: "cover", // Ensure the image covers the entire area
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Avoid repeating the image
  }}
>
      <div className="max-w-4xl">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Welcome to Our Professional Services
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl font-light mb-8 leading-relaxed">
          We provide top-notch solutions tailored to meet your needs. Let us
          help you achieve your goals with our dedicated team and innovative
          strategies.
        </p>

        {/* Call-to-Action Button */}
        <button className="bg-orange-500 text-white-600 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
