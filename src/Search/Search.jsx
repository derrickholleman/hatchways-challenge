import React, { useEffect } from "react";
import "./Search.css";

const Search = ({
  students,
  setFilteredStudents,
  searchByNameText,
  setSearchByNameText,
}) => {
  useEffect(() => {
    if (students.students) {
      let filteredStudents = students.students.filter(
        (student) =>
          student.firstName.toLowerCase().includes(searchByNameText.toLowerCase()) ||
          student.lastName.toLowerCase().includes(searchByNameText.toLowerCase())
      );

      setFilteredStudents(filteredStudents);
    }
  }, [searchByNameText, setFilteredStudents, students.students]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchByNameText}
        onChange={(e) => setSearchByNameText(e.target.value)}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Search;
