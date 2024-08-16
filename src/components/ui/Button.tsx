// src/components/ui/Button.tsx
"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  action?: "addToCart" | "viewDetails";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  href,
  action,
  ...props
}) => {
  const baseStyle = "font-bold py-2 px-4 rounded transition-colors";
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    outline:
      "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
  };

  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
