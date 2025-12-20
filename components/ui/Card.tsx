import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="group flex h-65 w-70 flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105">
      <span className="text-primary hover:bg-primary text-4xl transition-transform group-hover:scale-125 hover:rounded-md hover:p-2 hover:text-white">
        {props.icon}
      </span>
      <h3 className="mt-6 text-xl font-bold">{props.title}</h3>
      <p className="mt-3 text-center text-sm leading-relaxed text-gray-400">{props.description}</p>
    </div>
  );
};
