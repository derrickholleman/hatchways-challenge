import { useEffect } from "react";
import Student from "./Student";

function Students({
  students,
  setStudents,
  searchByNameText,
  searchByTagText,
  filteredStudents,
  tags,
  setTags,
  filteredStudentsByTag,
  isFiltering,
  setIsFiltering,
}) {
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

  useEffect(() => {
    if (searchByNameText.length > 0 || searchByTagText.length > 0) {
      setIsFiltering(true);
    } else {
      setIsFiltering(false);
    }
  }, [setIsFiltering, searchByNameText.length, searchByTagText.length]);

  let doubleFilteredList;

  if (students.students) {
    doubleFilteredList = filteredStudentsByTag.filter(
      (student) =>
        student.firstName
          .toLowerCase()
          .includes(searchByNameText.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchByNameText.toLowerCase())
    );
  }

  return (
    <div>
      {students.students && (
        <div>
          {/* filter by both tag and name */}
          {searchByNameText.length > 0 &&
            searchByTagText.length > 0 &&
            doubleFilteredList.map((student) => (
              <Student
                key={student.id}
                student={student}
                tags={tags}
                setTags={setTags}
              />
            ))}

          {/* filter by name */}
          {searchByNameText.length > 0 &&
            searchByTagText.length === 0 &&
            filteredStudents.map((student) => (
              <Student
                key={student.id}
                student={student}
                tags={tags}
                setTags={setTags}
              />
            ))}

          {/* filter by tag */}
          {searchByTagText.length > 0 &&
            searchByNameText.length === 0 &&
            filteredStudentsByTag.map((student) => (
              <Student
                key={student.id}
                student={student}
                tags={tags}
                setTags={setTags}
              />
            ))}

          {/* default rendered list */}
          {!isFiltering &&
            students.students.map((student) => (
              <Student
                key={student.id}
                student={student}
                tags={tags}
                setTags={setTags}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Students;
