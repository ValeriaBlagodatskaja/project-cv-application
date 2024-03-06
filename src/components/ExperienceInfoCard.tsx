import Card from "./Card/Card";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Accordion from "./Accordion/Accordion";

function ExperienceInfoCard({
  company,
  setCompany,
  positionTitle,
  setPositionTitle,
  startJobDate,
  setStartJobDate,
  endJobDate,
  setEndJobDate,
  jobLocation,
  setJobLocation,
  description,
  setDescription,
  handleSave,
  handleDelete,
  selectedCompany,
  setSelectedCompany,
  experienceVisible,
  setExperienceVisible,
  showCompanyDetails,
  experienceInfo,
}) {
  return (
    <Card>
      <Accordion title="Experience">
        {experienceVisible && (
          <>
            <Input
              label="Company"
              type="text"
              placeholder="Company Name"
              setValue={setCompany}
              value={company}
            />
            <Input
              label="Position Title"
              type="text"
              placeholder="Position Title"
              setValue={setPositionTitle}
              value={positionTitle}
            />
            <Input
              label="Start Date"
              type="month"
              placeholder="Start Date"
              setValue={setStartJobDate}
              value={startJobDate}
            />
            <Input
              label="End Date"
              type="month"
              placeholder="End Date"
              setValue={setEndJobDate}
              value={endJobDate}
            />
            <Input
              label="Location"
              type="text"
              placeholder="Location"
              setValue={setJobLocation}
              value={jobLocation}
            />
            <Input
              label="Description"
              type="text"
              placeholder="Description"
              setValue={setDescription}
              value={description}
            />
            <div className="buttons-container">
              <Button
                onClick={() => handleDelete("experience", selectedCompany)}
                icon="trash"
              >
                Delete
              </Button>
              <div className="cancel-save-container">
                <Button onClick={() => setExperienceVisible(false)}>
                  Cancel
                </Button>
                <Button onClick={() => handleSave("experience")} color="dark">
                  Save
                </Button>
              </div>
            </div>
          </>
        )}
        {!experienceVisible && (
          <div className="experience-buttons-container">
            <div className="company-buttons-container">
              {experienceInfo.map(({ company }) => (
                <Button
                  className="button company-button"
                  key={company}
                  onClick={() => showCompanyDetails(company)}
                >
                  {company}
                </Button>
              ))}
            </div>
            <Button
              icon="+"
              color="dark"
              onClick={() => {
                setSelectedCompany(null);
                setExperienceVisible(true);
                setCompany("");
                setPositionTitle("");
                setStartJobDate("");
                setEndJobDate("");
                setJobLocation("");
                setDescription("");
              }}
            >
              Add experience
            </Button>
          </div>
        )}
      </Accordion>
    </Card>
  );
}

export default ExperienceInfoCard;
