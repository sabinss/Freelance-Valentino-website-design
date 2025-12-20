import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import Hero from "./Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
