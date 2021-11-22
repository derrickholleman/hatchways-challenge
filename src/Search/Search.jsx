import React, { useEffect } from "react";
import "./Search.css";

const Search = ({
  students,
  setFilteredStudentsByName,
  searchByNameText,
  setSearchByNameText,
  searchByTagText,
  setSearchByTagText,
  tags,
  setFilteredStudentsByTag
}) => {
  // filter by name
  useEffect(() => {
    if (students.students) {
      let filteredStudents = students.students.filter(
        (student) =>
          student.firstName
            .toLowerCase()
            .includes(searchByNameText.toLowerCase()) ||
          student.lastName
            .toLowerCase()
            .includes(searchByNameText.toLowerCase())
      );

      setFilteredStudentsByName(filteredStudents);
    }
  }, [searchByNameText, setFilteredStudentsByName, students.students]);

  // filter by tags
  useEffect(() => {
    if (students.students) {
      let filteredTags = tags.filter((tag) =>
        tag.content.toLowerCase().includes(searchByTagText.toLowerCase())
      );

      let studentMatches = []

      filteredTags.forEach((tag) => {
        students.students.forEach((student) => {
          if (tag.studentId === student.id) {
            studentMatches.push(student)
          }
        });
      });

      // make sure array has no duplicates
      setFilteredStudentsByTag([...new Set(studentMatches)])
    }
  }, [searchByTagText, tags, setFilteredStudentsByTag, students.students]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchByNameText}
        onChange={(e) => setSearchByNameText(e.target.value)}
        placeholder="Search by name"
      />
      <input
        type="text"
        value={searchByTagText}
        onChange={(e) => setSearchByTagText(e.target.value)}
        placeholder="Search by tag"
      />
    </div>
  );
};

export default Search;
