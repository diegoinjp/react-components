import React from 'react';

export interface GradientType {
  children: React.ReactNode;
  p?: number;
}

export default function GradientPanel({ children, p = 1 }: GradientType) {
  return (
    <div
      style={{ padding: `${p}rem` }}
      className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 background-animate">
      {children}
    </div>
  );
}
