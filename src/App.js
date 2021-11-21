import { useState } from "react";
import "./App.css";
import Students from "./Students/Students";
import SearchbyName from "./Search/Search";

function App() {
  const [isFiltering, setIsFiltering] = useState(false)
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filteredStudentsByTag, setFilteredStudentsByTag] = useState([]);
  const [searchByNameText, setSearchByNameText] = useState("");
  const [searchByTagText, setSearchByTagText] = useState("");
  const [tags, setTags] = useState([]);

  return (
    <div className="App">
      <SearchbyName
        students={students}
        tags={tags}
        setFilteredStudents={setFilteredStudents}
        searchByNameText={searchByNameText}
        setSearchByNameText={setSearchByNameText}
        searchByTagText={searchByTagText}
        setSearchByTagText={setSearchByTagText}
        setFilteredStudentsByTag={setFilteredStudentsByTag}
      />
      <Students
        students={students}
        setStudents={setStudents}
        searchByNameText={searchByNameText}
        searchByTagText={searchByTagText}
        filteredStudents={filteredStudents}
        filteredStudentsByTag={filteredStudentsByTag}
        tags={tags}
        setTags={setTags}
        isFiltering={isFiltering}
        setIsFiltering={setIsFiltering}
      />
    </div>
  );
}

export default App;
