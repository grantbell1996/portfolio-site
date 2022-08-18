import React from "react";
import ".//Resume.css";
import resume from "../files/Resume.pdf"

export const Resume = () => {
  return (
    <>
      <div className="resume_body">
        <div className="resume_block">
          <div className="resume_header">Technical Experience</div>
          <div className="resume_sub_header">Full Stack Software Developer</div>
          <div className="resume_sub_header">Nashville Software School</div>
          <div className="resume_text_body">
            <div>
              Intensive full-time, six months software development bootcamp
              focusing on Python/Django development fundamentals and problem
              solving. The final three months of the program being executed in a
              simulated company environment with SCRUM methodology.
            </div>
            <ul>
              <li>
                Daily hands on application of OOP fundamentals through group and
                individual projects
              </li>
              <li>
                Created single page applications in JavaScript, as well as in
                the React framework
              </li>
              <li>
                Project management/tracking with GitHub project boards and issue
                tracking
              </li>
              <li>Source code/version control with Git/GitHub</li>
              <li>Solution Design: white-boarding and wireframes</li>
              <li>
                Leveraged Django for creating and editing server-generated web
                applications
              </li>
              <li>Created RESTful API’s with Django REST framework</li>
              <li>Retrieved and stored database information with SQLite</li>
              <li>Practiced testing with Python’s unit test framework</li>
            </ul>
          </div>
        </div>
        <div className="resume_block">
          <div className="resume_header">Professional Experience</div>
          <div className="resume_sub_header">Commercial HVAC Technician</div>
          <div className="resume_sub_header">A-Action-Air</div>
          <div className="resume_text_body">
            <ul>
              <li>Hung air duct and AC units</li>
              <li>Had to be able to read and explain blueprints</li>
              <li>
                Needed to be certified for new tasks when the job site required
              </li>
              <li>
                Delegated tasks to crew members according to daily to-do lists
              </li>
              <li>Regularly ordered and pick up needed supplies for the job</li>
            </ul>
          </div>
          <div className="resume_sub_header">Furniture Truck Delivery Driver</div>
          <div className="resume_sub_header">Clark's White Glove Delivery</div>
          <div className="resume_text_body">
            <ul>
              <li>Understanding and picking warehouse inventory</li>
              <li>Customer Service and communication skills</li>
              <li>Filling out delivery receipts and returns</li>
              <li>Operating a dispatch to keep in touch with the home office</li>
              <li>Regularly took trucks in for maintenance and repair</li>
            </ul>
          </div>
          <div className="resume_sub_header">Team Captain</div>
          <div className="resume_sub_header">Two Men and a Truck</div>
          <div className="resume_text_body">
            <ul>
              <li>Learned to how to efficiently and safely pack moving trucks</li>
              <li>Provided a team of movers with strategies on how to complete moves in a certain time frame</li>
              <li>Handled all face to face customer requests and concerns</li>
              <li>Took payment and filled out customer receipts</li>
            </ul>
          </div>
        </div>
        <div className="edu_panel"> 
        <div className="edu_block">
          <div className="resume_header">Education</div>
          <ul> 
          <li className="edu_title">Nashville Software School</li>
          <li className="edu_title">Blackman High School</li>
          </ul>
        </div>
        <a className="resume_link" href={resume}>Download my resume here!</a>
        </div>
      </div>
      <div className="resume_header">Certificates</div>
    </>
  );
};
