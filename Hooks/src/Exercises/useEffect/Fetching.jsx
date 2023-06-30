import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

/**
 * Requirement: User tự chọn 1 trong các option sau: posts, comments, albums,...
 * Giao diện sẽ render dữ liệu được lấy từ trang https://jsonplaceholder.typicode.com/ tương ứng với từng option
 */
function Fetching() {
  const [option, setOption] = useState("");
  const [list, setList] = useState([]);
  const handleOptionChange = (e) => {
    setOption(e.target.value);
  };
  //   console.log(list);
  //   console.log(option);
  useEffect(() => {
    // console.log("hi2");
    // console.log(list);

    fetch(`https://jsonplaceholder.typicode.com/${option}`)
      .then((res) => res.json())
      .then((list) => setList(list));
  }, [option]);
  return (
    <div>
      <select
        name="renderOption"
        id="renderOption"
        onChange={handleOptionChange}
      >
        <option value="" selected disabled>
          --
        </option>
        <option value="posts">Posts</option>
        <option value="comments">Comments</option>
        <option value="albums">Albums</option>
        <option value="photos">Photos</option>
        <option value="todos">Todos</option>
        <option value="users">Users</option>
      </select>
      <p>You choose: {option}</p>
      <p>This is {option} list for you</p>
      <ul>
        {list
          ? list.map((item, index) => (
              <li key={index}>{item.title ?? item.name}</li>
            ))
          : "You haven't chosen yet!"}
      </ul>
      {/* {console.log("hi1")} */}

      <NavLink to="/">
        <Button
          variant="outlined"
          style={{
            color: "green",
            borderColor: "green",
            margin: "20px",
          }}
          startIcon={
            <ArrowRightAltIcon style={{ transform: "rotate(180deg)" }} />
          }
        >
          Back
        </Button>
      </NavLink>
    </div>
  );
}

export default Fetching;
