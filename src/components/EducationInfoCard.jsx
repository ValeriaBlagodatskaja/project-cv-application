import Card from "./Card/Card";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Accordion from "./Accordion/Accordion";

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
}) {
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
            />
            <Input
              label="Degree"
              type="text"
              placeholder="Degree"
              setValue={setDegree}
              value={degree}
            />
            <Input
              label="Start Date"
              type="month"
              placeholder="Start Date"
              setValue={setStartDate}
              value={startDate}
            />
            <Input
              label="End Date"
              type="month"
              placeholder="End Date"
              setValue={setEndDate}
              value={endDate}
            />
            <Input
              label="Location"
              type="text"
              placeholder="Location"
              setValue={setLocation}
              value={location}
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
                setSelectedSchool(null);
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
