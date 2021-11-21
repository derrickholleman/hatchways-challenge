import { useState } from "react";
import "./App.css";
import Students from "./Students/Students";
import SearchbyName from "./Search/Search";

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchByNameText, setSearchByNameText] = useState("");
  const [tags, setTags] = useState([])

  return (
    <div className="App">
      <SearchbyName
        students={students}
        setFilteredStudents={setFilteredStudents}
        searchByNameText={searchByNameText}
        setSearchByNameText={setSearchByNameText}
      />
      <Students
        students={students}
        setStudents={setStudents}
        searchByNameText={searchByNameText}
        filteredStudents={filteredStudents}
        tags={tags}
        setTags={setTags}
      />
    </div>
  );
}

export default App;
