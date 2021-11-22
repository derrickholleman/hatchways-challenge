import { useState } from "react";
import "./App.css";
import Students from "./Students/Students";
import Search from "./Search/Search";

function App() {
  const [isFiltering, setIsFiltering] = useState(false)
  const [students, setStudents] = useState([]);
  const [filteredStudentsByName, setFilteredStudentsByName] = useState([]);
  const [filteredStudentsByTag, setFilteredStudentsByTag] = useState([]);
  const [searchByNameText, setSearchByNameText] = useState("");
  const [searchByTagText, setSearchByTagText] = useState("");
  const [tags, setTags] = useState([]);

  return (
    <div className="App">
      <Search
        students={students}
        tags={tags}
        setFilteredStudentsByName={setFilteredStudentsByName}
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
        filteredStudentsByName={filteredStudentsByName}
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
