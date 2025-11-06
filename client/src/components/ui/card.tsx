import React from "react";

export function Card({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-gray-200 rounded-lg bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return <div className={`px-4 py-3 border-t border-gray-100 ${className}`}>{children}</div>;
}
