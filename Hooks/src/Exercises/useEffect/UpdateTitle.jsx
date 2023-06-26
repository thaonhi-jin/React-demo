import React, { useEffect, useState } from "react";
/**
 * Requirement: Nhập dữ liệu trong input và thay đổi title theo dữ liệu
 */
function UpdateTitle() {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    document.title = title;
  });
  return (
    <div>
      <input type="text" onChange={handleTitleChange} />
    </div>
  );
}

export default UpdateTitle;
