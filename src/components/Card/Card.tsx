import clsx from "clsx";
import "./Card.css";
import { ReactNode } from "react";
interface AccordionProps {
  className?: string;
  children?: ReactNode;
}

export default function Card({ children, className }: AccordionProps) {
  return <div className={clsx("card", className)}>{children}</div>;
}
