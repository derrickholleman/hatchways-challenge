import { useState } from "react";
import "./App.css";
import Students from "./Students/Students";
import SearchbyName from "./Search/Search";

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <SearchbyName
        students={students}
        setFilteredStudents={setFilteredStudents}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Students
        students={students}
        setStudents={setStudents}
        searchText={searchText}
        filteredStudents={filteredStudents}
      />
    </div>
  );
}

export default App;
