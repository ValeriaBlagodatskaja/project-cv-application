import clsx from "clsx";
import "./Button.css";
import Plus from "../../assets/plus.svg?react";
import Trash from "../../assets/trash.svg?react";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  icon?: "+" | "trash";
  color?: "dark";
  onClick: () => void;
}

export default function Button({
  children,
  className,
  icon,
  color,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx("button", color === "dark" && "dark", className)}
    >
      <div className="button-container">
        {icon === "+" && <Plus className="svg" />}
        {icon === "trash" && <Trash className="svg" />}
        {children}
      </div>
    </button>
  );
}
