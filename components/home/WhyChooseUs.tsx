import React from "react";
import { Card } from "../ui/Card";
import { Icon } from "lucide-react";
import { PiChatCircleDotsLight } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import { BsBag } from "react-icons/bs";

export default function WhyChooseUs() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f5f5f5] pb-10">
      <p className="text-primary mb-4 font-bold"> Why Choose Us?</p>
      <h1 className="text-xl font-bold sm:text-4xl"> Your Path to Fashion Excellence</h1>
      <p className="mt-5 w-90 text-center text-sm text-gray-400 sm:w-170">
        Discover why hundreds of students choose Valentino Institute of Fashion and Design for their fashion education.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <Card
          icon={<PiChatCircleDotsLight />}
          title="Creative Excellence"
          description="Industry-standard curriculum designed by fashion experts with hands-on practical training."
        />
        <Card
          icon={<LuUsers />}
          title="Expert Faculty"
          description="Learn from experienced professionals who have worked with top fashion brands."
        />
        <Card
          icon={<SlBadge />}
          title="Recognized Diploma"
          description="Internationally recognized certifications that open doors to global opportunities."
        />
        <Card
          icon={<BsBag />}
          title="Career Support"
          description="Dedicated placement assistance and industry connections for your dream career."
        />
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col items-center justify-center bg-[#f5f5f5] pb-10">
<p className="text-primary font-bold"> Why Choose Us?</p>
<h1 className="text-4xl font-bold"> Your Path to Fashion Excellence</h1>
<p className="mt-5 w-170 text-center text-gray-400">
  Discover why hundreds of students choose Valentino Institute of Fashion and Design for their fashion education.
</p>
<div className="mt-10 flex flex-wrap gap-10">
  <Card
    icon={<PiChatCircleDotsLight />}
    title="Creative Excellence"
    description="Industry-standard curriculum designed by fashion experts with hands-on practical training."
  />
  <Card
    icon={<PiChatCircleDotsLight />}
    title="Expert Faculty"
    description="Industry-standard curriculum designed by fashion experts with hands-on practical training."
  />
  <Card
    icon={<PiChatCircleDotsLight />}
    title="Recognized Diploma"
    description="Industry-standard curriculum designed by fashion experts with hands-on practical training."
  />
  <Card
    icon={<PiChatCircleDotsLight />}
    title="Career Support"
    description="Industry-standard curriculum designed by fashion experts with hands-on practical training."
  />
</div>
</div> */
}
