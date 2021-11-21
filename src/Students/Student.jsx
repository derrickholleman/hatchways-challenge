import React, { useState } from "react";
import "./Student.css";
import getAverage from "../utils/getAverage";

const Student = ({ student }) => {
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
            <p className="student-email">Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {studentAverage}%</p>
            {showGrades && <ul className="student-grades">{gradesList}</ul>}
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
              -
            </button>
          ) : (
            <button
              className="toggle-button"
              aria-label="toggle grades"
              aria-expanded={showGrades}
              onClick={toggleGrades}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Student;
