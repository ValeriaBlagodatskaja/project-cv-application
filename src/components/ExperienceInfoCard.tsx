import Card from "./Card/Card";
import Input from "./Input/Input";
import Button from "./Button/Button";
import Accordion from "./Accordion/Accordion";
import { ExperienceInfoProps } from "./CV/CV";
import { ExperienceInfo } from "../../ExampleCVData";

interface ExperienceInfoCardProps extends ExperienceInfoProps {
  setCompany: React.Dispatch<React.SetStateAction<string>>;
  setPositionTitle: React.Dispatch<React.SetStateAction<string>>;
  setStartJobDate: React.Dispatch<React.SetStateAction<string>>;
  setEndJobDate: React.Dispatch<React.SetStateAction<string>>;
  setJobLocation: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  handleSave: (type: string) => void;
  handleDelete: (type: string, selectedCompany: ExperienceInfo | null) => void;
  selectedCompany: ExperienceInfo | null;
  setSelectedCompany?: React.Dispatch<
    React.SetStateAction<ExperienceInfo | null>
  >;
  experienceVisible: boolean;
  setExperienceVisible: React.Dispatch<React.SetStateAction<boolean>>;
  showCompanyDetails: (school: string) => void;
  experienceInfo: ExperienceInfoProps[];
}

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
}: ExperienceInfoCardProps) {
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
              className="input"
            />
            <Input
              label="Position Title"
              type="text"
              placeholder="Position Title"
              setValue={setPositionTitle}
              value={positionTitle}
              className="input"
            />
            <Input
              label="Start Date"
              type="month"
              placeholder="Start Date"
              setValue={setStartJobDate}
              value={startJobDate}
              className="input"
            />
            <Input
              label="End Date"
              type="month"
              placeholder="End Date"
              setValue={setEndJobDate}
              value={endJobDate}
              className="input"
            />
            <Input
              label="Location"
              type="text"
              placeholder="Location"
              setValue={setJobLocation}
              value={jobLocation}
              className="input"
            />
            <Input
              label="Description"
              type="text"
              placeholder="Description"
              setValue={setDescription}
              value={description}
              className="input"
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
                if (setSelectedCompany) {
                  setSelectedCompany(null);
                }
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
