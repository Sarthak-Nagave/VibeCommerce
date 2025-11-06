import React from "react";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export function Dialog({ open = false, children }: DialogProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children }: { children?: React.ReactNode }) {
  return <div className="mt-2">{children}</div>;
}

export function DialogHeader({ children }: { children?: React.ReactNode }) {
  return <div className="mb-2">{children}</div>;
}

export function DialogTitle({ children }: { children?: React.ReactNode }) {
  return <h2 className="text-lg font-semibold text-gray-900">{children}</h2>;
}
