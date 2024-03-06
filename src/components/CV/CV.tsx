import "./CV.css";
import Message from "../../assets/message.svg?react";
import Phone from "../../assets/phone.svg?react";
import Location from "../../assets/location.svg?react";

export default function CV({ personalInfo, educationInfo, experienceInfo }) {
  const hasSchoolButtons = educationInfo.length > 0;
  const hasCompanyButtons = experienceInfo.length > 0;

  return (
    <div className="resume">
      <section className="personal-info">
        <h1 className="name">{personalInfo.fullName}</h1>
        <div className="personal-info-container">
          <span className="svg-container">
            <Message className="svg-preview" />
            {personalInfo.email}
          </span>
          <span className="svg-container">
            <Phone className="svg-preview" />
            {personalInfo.phoneNumber}
          </span>
          <span className="svg-container">
            <Location className="svg-preview" />
            {personalInfo.address}
          </span>
        </div>
      </section>

      <div className="education-job-container">
        {hasSchoolButtons && (
          <section>
            <h3 className="heading">Education</h3>

            {educationInfo &&
              educationInfo.map(
                ({ school, degree, startDate, endDate, location }) => {
                  return (
                    <div key={startDate + endDate}>
                      <div className="school-details-container">
                        <div className="flex-container">
                          <span className="bold-text">{school}</span>

                          {startDate && (
                            <span className="small-text">
                              {startDate} - {endDate}
                            </span>
                          )}
                        </div>
                        <div className="flex-container">
                          <span className="bold-text">{degree}</span>
                          <span className="small-text">{location}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
          </section>
        )}
        {hasCompanyButtons && (
          <section>
            <h3 className="heading">Experience</h3>

            {experienceInfo &&
              experienceInfo.map(
                ({
                  company,
                  positionTitle,
                  startJobDate,
                  endJobDate,
                  jobLocation,
                  description,
                }) => {
                  return (
                    <div key={company + positionTitle}>
                      <div className="job-details-container">
                        <div className="flex-container">
                          <span className="bold-text">{company}</span>
                          {startJobDate && (
                            <span className="small-text">
                              {startJobDate} - {endJobDate}
                            </span>
                          )}
                        </div>
                        <div className="flex-container">
                          <span className="bold-text">{positionTitle}</span>
                          <span className="small-text">{jobLocation}</span>
                        </div>
                        <p className="description">{description}</p>
                      </div>
                    </div>
                  );
                }
              )}
          </section>
        )}
      </div>
    </div>
  );
}
