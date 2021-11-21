import React, { useEffect } from "react";
import "./Search.css";

const Search = ({
  students,
  setFilteredStudents,
  searchText,
  setSearchText,
}) => {
  useEffect(() => {
    if (students.students) {
      let filteredStudents = students.students.filter(
        (student) =>
          student.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          student.lastName.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredStudents(filteredStudents);
    }
  }, [searchText, setFilteredStudents, students.students]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Search;
