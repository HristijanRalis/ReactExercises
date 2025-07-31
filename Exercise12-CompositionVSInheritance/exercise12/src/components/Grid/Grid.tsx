import type React from "react";

interface GridProps {
  children?: React.ReactNode;
}

export const Grid = ({ children }: GridProps) => {
  return <div className="grid">{children}</div>;
};
