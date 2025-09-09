// src/components/ui/Button/Button.tsx
import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
}
