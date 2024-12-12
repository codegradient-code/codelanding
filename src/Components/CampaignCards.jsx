import React from 'react';

const CampaignCards = () => {
  return (
    <div className="flex flex-col items-center px-4 py-16 bg-gray-50 mt-4 relative z-10">
      <h2 className="text-4xl font-bold text-center mb-4 max-w-3xl">
        Partner with us to build powerful marketing campaigns that reach your target audience
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition h-52 bg-white">
          <div className="mb-4 text-4xl">⚙️</div>
          <h3 className="font-bold text-lg mb-2">Marketing</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Card 2 (Highlighted) */}
        <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg bg-lime-400 hover:shadow-lg transition h-52">
          <div className="mb-4 text-4xl">📊</div>
          <h3 className="font-bold text-lg mb-2 text-gray-900">Analysis</h3>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition h-52 bg-white">
          <div className="mb-4 text-4xl">♻️</div>
          <h3 className="font-bold text-lg mb-2">Recycle</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCards;
