import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import clsx from "clsx";
import "./Accordion.css";

export default function Accordion({ title, className, children }) {
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
