import clsx from "clsx";
import "./Button.css";
import Plus from "../assets/plus.svg?react";
import Trash from "../assets/trash.svg?react";

export default function Button({ children, className, icon, color, onClick }) {
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
