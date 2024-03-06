import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, ReactNode } from "react";
import clsx from "clsx";
import "./Accordion.css";

interface AccordionProps {
  title: string;
  className?: string;
  children?: ReactNode;
}

export default function Accordion({
  title,
  className,
  children,
}: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="accordion" onClick={() => setOpen(!open)}>
        <h3 className="title">{title}</h3>
        <RiArrowDropDownLine
          className={clsx("arrow", open && "active", className)}
        />
      </button>
      {open && children}
    </div>
  );
}
