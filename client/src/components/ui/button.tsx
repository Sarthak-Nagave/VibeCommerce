import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
