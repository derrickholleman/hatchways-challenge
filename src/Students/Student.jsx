import React, { useState } from "react";
import "./Student.css";
import getAverage from "../utils/getAverage";
import Tags from './Tags'
import "bootstrap-icons/font/bootstrap-icons.css"

const Student = ({ student, tags, setTags }) => {
  const [showGrades, setShowGrades] = useState(false);
  const studentAverage = getAverage(student.grades);

  const gradesList = student.grades.map((grade, index) => {
    return (
      <li key={index}>
        Test {index + 1}: {grade}%
      </li>
    );
  });

  const toggleGrades = () => {
    setShowGrades(!showGrades);
  };

  return (
    <div>
      <div className="student-container">
        <div style={{ display: "flex" }}>
          <div className="student-photo">
            <img src={student.pic} alt="student" />
          </div>

          <div className="student-information">
            <h2 className="student-name">
              {student.firstName} {student.lastName}
            </h2>
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {studentAverage}%</p>

            {showGrades && <ul className="student-grades">{gradesList}</ul>}
            <Tags tags={tags} setTags={setTags} student={student}/>
          </div>
        </div>

        <div>
          {showGrades ? (
            <button
              className="toggle-button"
              aria-label="toggle grades"
              aria-expanded={showGrades}
              onClick={toggleGrades}
            >
            <i class="bi bi-dash"></i>
            </button>
          ) : (
            <button
              className="toggle-button"
              aria-label="toggle grades"
              aria-expanded={showGrades}
              onClick={toggleGrades}
            >
            <i class="bi bi-plus"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;
