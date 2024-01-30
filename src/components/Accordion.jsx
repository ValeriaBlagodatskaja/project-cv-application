import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import clsx from "clsx";
import "./Accordion.css";

export default function Accordion({ title, className, children }) {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div>
      <div className="title-container">
        <h3 className="title">{title}</h3>
        <button className="button-arrow" onClick={() => setOpen(!open)}>
          <RiArrowDropDownLine
            className={clsx("arrow", open && "active", className)}
          />
        </button>
      </div>
      {open && children}
    </div>
  );
}
