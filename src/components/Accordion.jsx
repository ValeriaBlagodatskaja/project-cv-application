import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import Button from "./Button";
import clsx from "clsx";
import "./Accordion.css";

export default function Accordion({ title, className, children }) {
  const [open, setOpen] = useState(false);
  console.log(open);
  const [educationVisible, setEducationVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleAddEducation = () => {
    setEducationVisible(!educationVisible);
    setButtonClicked(true);
  };

  const handleAddExperience = () => {
    setExperienceVisible(!experienceVisible);
    setButtonClicked(true);
  };

  return (
    <div>
      <button className="accordion" onClick={() => setOpen(!open)}>
        <h3 className="title">{title}</h3>
        <RiArrowDropDownLine
          className={clsx("arrow", open && "active", className)}
        />
      </button>

      {title === "Education" && open && (
        <>
          {educationVisible && <div>{children} </div>}
          {!buttonClicked && (
            <Button icon="+" color="dark" onClick={handleAddEducation}>
              Add education
            </Button>
          )}
        </>
      )}

      {title === "Experience" && open && (
        <>
          {experienceVisible && <div>{children} </div>}
          {!buttonClicked && (
            <Button icon="+" color="dark" onClick={handleAddExperience}>
              Add experience
            </Button>
          )}
        </>
      )}
    </div>
  );
}
