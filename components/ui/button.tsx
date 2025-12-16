import React from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, variant = "primary", size = "md", className, ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-2 rounded-md font-medium text-white transition-colors";

  const variants = {
    // primary: "bg-[#f40b80] hover:bg-[#d90970]",
    primary: "bg-primary hover:bg-primary-hover",
    secondary: "bg-gray-600 hover:bg-gray-700",
    outline: "bg-transparent border border-[#f40b80] text-[#f40b80] hover:bg-[#f40b80] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button className={twMerge(baseStyle, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
};
