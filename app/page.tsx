import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Header } from "@/components/layout/Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
