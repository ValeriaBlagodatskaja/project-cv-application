import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import Accordion from "./components/Accordion";
import CV from "./components/CV";
import "./App.css";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("Valeria Blagodatskaja");
  const [email, setEmail] = useState("valeria@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+37255850441");
  const [address, setAddress] = useState("Tallinn, Estonia");

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  const [company, setCompany] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startJobDate, setStartJobDate] = useState("");
  const [endJobDate, setEndJobDate] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [description, setDescription] = useState("");

  const [educationVisible, setEducationVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  console.log(fullName, email, phoneNumber, address);

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
            educationInfo={[
              {
                school: "Best School",
                degree: "bakalaurus",
                startDate: "02.2023",
                endDate: "01.2024",
                location: "Tallinn, Estonia",
              },
              {
                school: "Best School",
                degree: "bakalaurus",
                startDate: "02.2023",
                endDate: "01.2024",
                location: "Tallinn, Estonia",
              },
            ]}
            experienceInfo={[
              {
                company: "Microsoft",
                positionTitle: "Front-end Developer",
                startJobDate: "02.2024",
                endJobDate: "03.2025",
                jobLocation: "New York, USA",
                description:
                  "Developing new product features based on business requirements",
              },
              {
                company: "Microsoft",
                positionTitle: "Front-end Developer",
                startJobDate: "02.2024",
                endJobDate: "03.2025",
                jobLocation: "New York, USA",
                description:
                  "Developing new product features based on business requirements",
              },
            ]}
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
                      <Button color="dark">Save</Button>
                    </div>
                  </div>
                </>
              )}
              {!educationVisible && (
                <Button
                  icon="+"
                  color="dark"
                  onClick={() => setEducationVisible(true)}
                >
                  Add education
                </Button>
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
                      <Button color="dark">Save</Button>
                    </div>
                  </div>
                </>
              )}
              {!experienceVisible && (
                <Button
                  icon="+"
                  color="dark"
                  onClick={() => setExperienceVisible(true)}
                >
                  Add experience
                </Button>
              )}
            </Accordion>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
