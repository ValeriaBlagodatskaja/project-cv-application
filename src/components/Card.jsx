import clsx from "clsx";
import "./Card.css";

export default function Card({ children, className }) {
  return <div className={clsx("card", className)}>{children}</div>;
}
