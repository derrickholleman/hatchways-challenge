import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Tags = ({ tags, setTags, student }) => {
  const initialTagState = {
    tagId: uuidv4(),
    studentId: "",
    content: "",
  };
  const [tag, setTag] = useState({ ...initialTagState });

  const handleSetTag = (e) => {
    setTag({
      ...tag,
      studentId: e.target.id,
      content: e.target.value,
    });
  };

  const handleSubmitTags = (e) => {
    e.preventDefault();
      setTags([...tags, tag]);
      setTag({ ...initialTagState });
  };

  // return only the tags where the student id matches the current student who's form is being typed into
  const studentTags = tags.filter((tag) => {
    return tag.studentId === student.id;
  });

  // render filtered tags
  const tagsList = studentTags.map((tag, index) => {
    return <p key={index}>{tag.content}</p>;
  });
  return (
    <div>
      <div className="tags">{tagsList}</div>
      <form onSubmit={handleSubmitTags}>
        <input
          type="text"
          placeholder="Add a tag"
          value={tag.content}
          onChange={handleSetTag}
          id={student.id}
        />
        <input type="submit" style={{ display: "none" }} />
      </form>
    </div>
  );
};

export default Tags;
