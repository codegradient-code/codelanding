import React from "react";

function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
        {/* Stat 1 */}
        <div className="border-r border-gray-200 last:border-none">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">800K</h2>
          <p className="text-lg text-gray-600 mb-6">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 100 12 6 6 0 100-12zm0 11a5 5 0 110-10 5 5 0 010 10zm-3-5a3 3 0 016 0 3 3 0 01-6 0z" />
            </svg>
            Subscriber
          </button>
        </div>

        {/* Stat 2 */}
        <div className="border-r border-gray-200 last:border-none">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">96%</h2>
          <p className="text-lg text-gray-600 mb-6">
            Tempor Incididunt Ut Labore Et Dolore Magna Aliqua
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 10l7-7m0 0l7 7M12 3v13" />
            </svg>
            Job Success
          </button>
        </div>

        {/* Stat 3 */}
        <div>
          <h2 className="text-6xl font-bold text-gray-900 mb-4">15+</h2>
          <p className="text-lg text-gray-600 mb-6">
            Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 3h14l1 2H2l1-2zM1 6h18v11H1V6zm11 5v4m-4-4v4" />
            </svg>
            Years Experience
          </button>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
