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

  return (
    <div>
      {students.students && (
        <div>
          {searchByNameText.length > 0 && searchByTagText.length === 0 &&
            filteredStudents.map((student, index) => (
              <Student
                key={index}
                student={student}
                tags={tags}
                setTags={setTags}
              />
            ))}

          {searchByTagText.length > 0 && searchByNameText.length === 0 &&
            filteredStudentsByTag.map((student, index) => (
              <Student
                key={index}
                student={student}
                tags={tags}
                setTags={setTags}
              />
            ))}

          {!isFiltering &&
            students.students.map((student, index) => (
              <Student
                key={index}
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
