import Card from "./Card/Card";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Accordion from "./Accordion/Accordion";
import { EducationInfoProps } from "./CV/CV";
import { EducationInfo } from "../../ExampleCVData";

interface EducationInfoCardProps extends EducationInfoProps {
  setSchool: React.Dispatch<React.SetStateAction<string>>;
  setDegree: React.Dispatch<React.SetStateAction<string>>;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  handleSave: (type: string) => void;
  handleDelete: (type: string, selectedSchool: EducationInfo | null) => void;
  selectedSchool: EducationInfo | null;
  setSelectedSchool?: React.Dispatch<
    React.SetStateAction<EducationInfo | null>
  >;
  educationVisible: boolean;
  setEducationVisible: React.Dispatch<React.SetStateAction<boolean>>;
  showSchoolDetails: (school: string) => void;
  educationInfo: EducationInfoProps[];
}

function EducationInfoCard({
  school,
  setSchool,
  degree,
  setDegree,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
  handleSave,
  handleDelete,
  selectedSchool,
  setSelectedSchool,
  educationVisible,
  setEducationVisible,
  showSchoolDetails,
  educationInfo,
}: EducationInfoCardProps) {
  return (
    <Card>
      <Accordion title="Education">
        {educationVisible && (
          <>
            <Input
              label="School"
              type="text"
              placeholder="School Name"
              setValue={setSchool}
              value={school}
              className="input"
            />
            <Input
              label="Degree"
              type="text"
              placeholder="Degree"
              setValue={setDegree}
              value={degree}
              className="input"
            />
            <Input
              label="Start Date"
              type="month"
              placeholder="Start Date"
              setValue={setStartDate}
              value={startDate}
              className="input"
            />
            <Input
              label="End Date"
              type="month"
              placeholder="End Date"
              setValue={setEndDate}
              value={endDate}
              className="input"
            />
            <Input
              label="Location"
              type="text"
              placeholder="Location"
              setValue={setLocation}
              value={location}
              className="input"
            />
            <div className="buttons-container">
              <Button
                onClick={() => handleDelete("education", selectedSchool)}
                icon="trash"
              >
                Delete
              </Button>
              <div className="cancel-save-container">
                <Button onClick={() => setEducationVisible(false)}>
                  Cancel
                </Button>
                <Button onClick={() => handleSave("education")} color="dark">
                  Save
                </Button>
              </div>
            </div>
          </>
        )}
        {!educationVisible && (
          <div className="education-buttons-container">
            <div className="school-buttons-container">
              {educationInfo.map(({ school }) => (
                <Button
                  className="button school-button"
                  key={school}
                  onClick={() => showSchoolDetails(school)}
                >
                  {school}
                </Button>
              ))}
            </div>
            <Button
              icon="+"
              color="dark"
              onClick={() => {
                if (setSelectedSchool) {
                  setSelectedSchool(null);
                }
                setEducationVisible(true);
                setSchool("");
                setDegree("");
                setStartDate("");
                setEndDate("");
                setLocation("");
              }}
            >
              Add education
            </Button>
          </div>
        )}
      </Accordion>
    </Card>
  );
}

export default EducationInfoCard;
