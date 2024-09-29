import React from "react";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gray-900 text-white flex items-center justify-center">
      {/* Content Over Image */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Discover Your Favorite Songs
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Explore, edit, and manage your music collection with ease!
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
