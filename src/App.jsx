import CV from "./components/CV/CV";
import "./App.css";
import { useState } from "react";
import exampleCVData from "../ExampleCVData";
import PersonalInfoCard from "./components/PersonalInfoCard";
import EducationInfoCard from "./components/EducationInfoCard";
import ExperienceInfoCard from "./components/ExperienceInfoCard";

function App() {
  const [fullName, setFullName] = useState("Valeria Blagodatskaja");
  const [email, setEmail] = useState("valeria@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("+37255850441");
  const [address, setAddress] = useState("Tallinn, Estonia");

  const [school, setSchool] = useState("Tallinn University of Technolgy");
  const [degree, setDegree] = useState("Bachelor of information technology");
  const [startDate, setStartDate] = useState("2019-09");
  const [endDate, setEndDate] = useState("2022-06");
  const [location, setLocation] = useState("Tallinn, Estonia");

  const [company, setCompany] = useState("Umbrella Inc.");
  const [positionTitle, setPositionTitle] = useState("UX & UI Designer");
  const [startJobDate, setStartJobDate] = useState("2021-07");
  const [endJobDate, setEndJobDate] = useState("");
  const [jobLocation, setJobLocation] = useState("New York, USA");
  const [description, setDescription] = useState(
    "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"
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

  const [selectedCompany, setSelectedCompany] = useState(null);

  const [schoolButtons, setSchoolButtons] = useState(
    educationInfo.map((education) => education.school)
  );

  const [companyButtons, setCompanyButtons] = useState(
    experienceInfo.map((experience) => experience.company)
  );

  const showSchoolDetails = (schoolName) => {
    const foundSchool = educationInfo.find(
      (education) => education.school === schoolName
    );
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

  const showCompanyDetails = (companyName) => {
    const foundCompany = experienceInfo.find(
      (experience) => experience.company === companyName
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

      if (selectedSchool) {
        const updatedEducationInfo = educationInfo.map((education) =>
          education.school === selectedSchool.school ? newData : education
        );

        setEducationInfo(updatedEducationInfo);
        setSchoolButtons(
          updatedEducationInfo.map((education) => education.school)
        );
      } else {
        setEducationInfo((prevData) => [...prevData, newData]);
        setSchoolButtons([...schoolButtons, school]);
      }
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
      if (selectedCompany) {
        const updatedExperienceInfo = experienceInfo.map((experience) =>
          experience.company === selectedCompany.company ? newData : experience
        );

        setExperienceInfo(updatedExperienceInfo);
        setCompanyButtons(
          updatedExperienceInfo.map((experience) => experience.company)
        );
      } else {
        setExperienceInfo((prevData) => [...prevData, newData]);
        setCompanyButtons([...companyButtons, company]);
      }
      setExperienceVisible(false);
    }
  };

  const handleDelete = (category, selectedItem) => {
    if (category === "education") {
      const updatedEducationInfo = educationInfo.filter(
        (education) => education.school !== selectedItem.school
      );
      setEducationInfo(updatedEducationInfo);
      setSelectedSchool(null);
      setEducationVisible(false);
    } else if (category === "experience") {
      const updatedExperienceInfo = experienceInfo.filter(
        (exp) => exp.company !== selectedItem.company
      );
      setExperienceInfo(updatedExperienceInfo);
      setSelectedCompany(null);
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
          <PersonalInfoCard
            fullName={fullName}
            setFullName={setFullName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            address={address}
            setAddress={setAddress}
          />
          <EducationInfoCard
            school={school}
            setSchool={setSchool}
            degree={degree}
            setDegree={setDegree}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            location={location}
            setLocation={setLocation}
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedSchool={selectedSchool}
            setSelectedSchool={setSelectedSchool}
            educationVisible={educationVisible}
            setEducationVisible={setEducationVisible}
            showSchoolDetails={showSchoolDetails}
            educationInfo={educationInfo}
          />
          <ExperienceInfoCard
            company={company}
            setCompany={setCompany}
            positionTitle={positionTitle}
            setPositionTitle={setPositionTitle}
            startJobDate={startJobDate}
            setStartJobDate={setStartJobDate}
            endJobDate={endJobDate}
            setEndJobDate={setEndJobDate}
            jobLocation={jobLocation}
            setJobLocation={setJobLocation}
            description={description}
            setDescription={setDescription}
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
            experienceVisible={experienceVisible}
            setExperienceVisible={setExperienceVisible}
            showCompanyDetails={showCompanyDetails}
            experienceInfo={experienceInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
