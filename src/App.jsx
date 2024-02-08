import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import Accordion from "./components/Accordion";
import CV from "./components/CV";
import "./App.css";
import { useState } from "react";
import exampleCVData from "../ExampleCVData";

function App() {
  const [fullName, setFullName] = useState("Valeria Blagodatskaja");
  const [email, setEmail] = useState("valeria@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+37255850441");
  const [address, setAddress] = useState("Tallinn, Estonia");

  const [school, setSchool] = useState("Best School");
  const [degree, setDegree] = useState("bakalaurus");
  const [startDate, setStartDate] = useState("02.2023");
  const [endDate, setEndDate] = useState("02.2024");
  const [location, setLocation] = useState("Tallinn, Estonia");

  const [company, setCompany] = useState("Microsoft");
  const [positionTitle, setPositionTitle] = useState("Front-end Developer");
  const [startJobDate, setStartJobDate] = useState("06.2022");
  const [endJobDate, setEndJobDate] = useState("01.2024");
  const [jobLocation, setJobLocation] = useState("New York, USA");
  const [description, setDescription] = useState(
    "Developing new product features based on business requirements"
  );

  const [educationVisible, setEducationVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  const [educationInfo, setEducationInfo] = useState(
    exampleCVData.educationInfo
  );

  const [experienceInfo, setExperienceInfo] = useState(
    exampleCVData.experienceInfo
  );

  const [selectedSchool, setSelectedSchool] = useState(null);

  const showSchoolDetails = (schoolName) => {
    const foundSchool = educationInfo.find((edu) => edu.school === schoolName);
    if (foundSchool) {
      setSelectedSchool(foundSchool);
      setSchool(foundSchool.school);
      setDegree(foundSchool.degree);
      setStartDate(foundSchool.startDate);
      setEndDate(foundSchool.endDate);
      setLocation(foundSchool.location);
      setEducationVisible(true);
    }
  };

  const [selectedCompany, setSelectedCompany] = useState(null);

  const showCompanyDetails = (companyName) => {
    const foundCompany = experienceInfo.find(
      (exp) => exp.company === companyName
    );
    if (foundCompany) {
      setSelectedCompany(foundCompany);
      setCompany(foundCompany.company);
      setPositionTitle(foundCompany.positionTitle);
      setStartJobDate(foundCompany.startJobDate);
      setEndJobDate(foundCompany.endJobDate);
      setJobLocation(foundCompany.jobLocation);
      setDescription(foundCompany.description);
      setExperienceVisible(true);
    }
  };

  const handleSave = (category) => {
    if (category === "education") {
      const newData = {
        school,
        degree,
        startDate,
        endDate,
        location,
      };
      setEducationInfo((prevData) => [...prevData, newData]);
      setEducationVisible(false);
    } else if (category === "experience") {
      const newData = {
        company,
        positionTitle,
        startJobDate,
        endJobDate,
        jobLocation,
        description,
      };
      setExperienceInfo((prevData) => [...prevData, newData]);
      setExperienceVisible(false);
    }
  };

  return (
    <div className="flex-col-gaps">
      <div className="edit-preview-container">
        <div className="preview-container">
          <CV
            personalInfo={{
              fullName: fullName,
              email: email,
              phoneNumber: phoneNumber,
              address: address,
            }}
            educationInfo={educationInfo}
            experienceInfo={experienceInfo}
          />
        </div>
        <div className="edit-container">
          <Card>
            <h3 className="title">Personal information</h3>
            <Input
              label="Full name"
              type="text"
              placeholder="John Doe"
              setValue={setFullName}
              value={fullName}
            />
            <Input
              label="Email"
              type="email"
              placeholder="john.doe@gmail.com"
              setValue={setEmail}
              value={email}
            />
            <Input
              label="Phone number"
              type="tel"
              placeholder="+37256862022"
              setValue={setPhoneNumber}
              value={phoneNumber}
            />
            <Input
              label="Address"
              type="text"
              placeholder="Tallinn, Estonia"
              setValue={setAddress}
              value={address}
            />
          </Card>
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
                      onClick={() => setEducationVisible(false)}
                      icon="trash"
                    >
                      Delete
                    </Button>
                    <div className="cancel-save-container">
                      <Button onClick={() => setEducationVisible(false)}>
                        Cancel
                      </Button>
                      <Button
                        onClick={() => handleSave("education")}
                        color="dark"
                      >
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
                      setEducationVisible(true);
                      setSelectedSchool(null);
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
                      onClick={() => setExperienceVisible(false)}
                      icon="trash"
                    >
                      Delete
                    </Button>
                    <div className="cancel-save-container">
                      <Button onClick={() => setExperienceVisible(false)}>
                        Cancel
                      </Button>
                      <Button
                        onClick={() => handleSave("experience")}
                        color="dark"
                      >
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
                      setExperienceVisible(true);
                      setSelectedCompany(null);
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
        </div>
      </div>
    </div>
  );
}

export default App;
