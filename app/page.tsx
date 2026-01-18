import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import Hero from "./Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import WhoCanJoinUs from "@/components/home/WhoCanJoinUs";
import { Careers } from "@/components/home/Careare";
import { CTA } from "@/components/home/CTA";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <FeaturedCourses />
      <WhoCanJoinUs />
      <Careers />
      <CTA />
    </div>
  );
};

export default Home;
