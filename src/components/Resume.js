import React, { Component } from 'react'
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className="date">
                          {item.DateOfJoining} - {item.DateOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="three columns main-col">
            <p>{resumeData.frontEndSkillsDescription}</p>
            <div className="bars">
              <ul className="skills">
                {resumeData.frontEndskills &&
                  resumeData.frontEndskills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
          <div className="three columns main-col">
            <p>{resumeData.backEndSkillsDescription}</p>
            <div className="bars">
              <ul className="skills">
                {resumeData.backEndSkills &&
                  resumeData.backEndSkills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
          <div className="three columns main-col">
            <p>{resumeData.devToolsDescription}</p>
            <div className="bars">
              <ul className="skills">
                {resumeData.devToolsSkills &&
                  resumeData.devToolsSkills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        ></span>
                        <em>{item.skillname}</em>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
