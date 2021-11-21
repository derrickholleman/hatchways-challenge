import { useEffect } from "react";
import Student from "./Student";

function Students({ students, setStudents, searchText, filteredStudents }) {
  useEffect(() => {
    async function getStudents() {
      const studentsRes = await fetch(
        "https://api.hatchways.io/assessment/students"
      );
      const studentsJSON = await studentsRes.json();
      setStudents(studentsJSON);
    }
    if (students) {
      getStudents();
    }

    // eslint-disable-next-line
  }, [students.length, setStudents]);

  return (
    <div>
      {students.students && (
        <div>
          {searchText.length > 0
            ? filteredStudents.map((student) => (
                <Student key={student.id} student={student} />
              ))
            : students.students.map((student) => (
                <Student key={student.id} student={student} />
              ))}
        </div>
      )}
    </div>
  );
}

export default Students;