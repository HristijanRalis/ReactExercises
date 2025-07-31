import type React from "react";
import { Card } from "../Card/Card";
import "./GreenCard.css";

interface GreenCardProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const GreenCard = ({ icon, children }: GreenCardProps) => {
  return (
    <Card icon={icon} customClassName="greenCard">
      {children}
    </Card>
  );
};
