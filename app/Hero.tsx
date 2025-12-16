import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070')`,
        }}
      >
        {/* Dark gradient on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      {/* content */}
      <div className="z-10 text-center">
        <Button className="bg-primary/60 hover:bg-primary/100 rounded-full border border-[#a93970]">
          Admissions open for 2025
        </Button>
        <h1 className="mt-2 text-4xl font-bold text-white sm:text-6xl">
          Crafting Tomorrow's <span className="text-primary">Icons</span> <br /> Today
        </h1>
        <p className="mt-10 font-medium text-white sm:text-lg">
          Nepal's premier institution for Fashion & Interior Design. Transform <br /> your creative passion into a
          prestigious career.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button variant="primary" className="w-[200px]">
            Apply Now
          </Button>
          <Button className="w-[210px] border border-white text-white/80" variant="outline">
            Explore Courses
          </Button>
        </div>

        {/* stats */}
        <div className="text-primary mt-10 flex items-center justify-center gap-4 text-2xl font-bold sm:gap-15 sm:text-4xl">
          <div className="">
            <p>500+</p>
            <p className="text-sm text-white">Graduates</p>
          </div>
          <div>
            <p>6+</p>
            <p className="text-sm text-white">Programs</p>
          </div>
          <div>
            <p>15+</p>
            <p className="text-sm text-white">Years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
