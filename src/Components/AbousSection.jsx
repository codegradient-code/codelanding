import React from "react";

function AboutSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Unlock Your Brand's Full Potential with Expert Marketing Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="./aboutus.png"
            alt="Marketing Solutions"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
