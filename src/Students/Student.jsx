import React from "react";
import "./Student.css";

const Student = ({ student }) => {
  function getAverage() {
    let total = student.grades.reduce(
      (acc, grade) => (acc += Number(grade)),
      0
    );
    let average = total / student.grades.length;
    return average;
  }
  const studentAverage = getAverage();

  return (
    <div>
      <div className="student-container">
        <div className="student-photo">
          <img src={student.pic} alt="student" />
        </div>

        <div className="student-information">
          <h2 className="student-name">{student.firstName} {student.lastName}</h2>
          <p className="student-email">Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p>Average: {studentAverage}%</p>
        </div>
      </div>
    </div>
  );
};

export default Student;
