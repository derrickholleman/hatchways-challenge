import React, { useState } from "react";
import "./Student.css";
import getAverage from "../utils/getAverage";
import { v4 as uuidv4 } from "uuid";

const Student = ({ student, tags, setTags }) => {
  const initialTagState = {
    tagId: uuidv4(),
    studentId: student.id,
    content: "",
  };
  const [showGrades, setShowGrades] = useState(false);
  const [tag, setTag] = useState({ ...initialTagState });
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

  const handleSetTag = (e) => {
    setTag({
      ...tag,
      content: e.target.value,
    });
  };

  const handleSubmitTags = (e) => {
    e.preventDefault();
    setTags([...tags, tag]);
    setTag({ ...initialTagState });
  };

  const tagsList = tags.map((tag, index) => {
    return <p key={index}>{tag.content}</p>;
  });

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

            <div className="tags">{tagsList}</div>
            <form onSubmit={handleSubmitTags}>
              <input
                type="text"
                placeholder="Add a tag"
                value={tag.content}
                onChange={handleSetTag}
              />
              <input type="submit" style={{ display: "none" }} />
            </form>
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
