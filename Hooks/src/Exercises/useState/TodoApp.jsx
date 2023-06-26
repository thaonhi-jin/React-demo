import React, { useState } from "react";

function TodoApp() {
  const [todoList, setToDoList] = useState([]);
  //có thể dùng localStorage để lưu lại list sau khi load lại trang, đoạn xử lý logic có thể thêm vào callback dùng làm intialState
  const [item, setItem] = useState(""); //tạo ra item để lưu giá trị cuối cùng sau khi nhập Input xong
  //(vì onChange lắng nghe bất kì thay đổi nhỏ nào, ở đây là lắng nghe từng kí tự) -> cần có biến để lưu giá trị nhập hoàn chỉnh
  const handleAddList = () => {
    setToDoList((prev) => [...prev, item]);
    setItem("");
  };
  const handleDoneItem = (doneItem) => {
    setToDoList(todoList.filter((item) => item !== doneItem));
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={item} // điền value ở đây để điều chỉnh giá trị hiển thị ra giao diện, ở đây sẽ xóa sau khi add thành công
      />
      <button onClick={handleAddList}>Add</button>
      <ul>
        {todoList
          ? todoList.map((item) => (
              <div>
                <input type="checkbox" onClick={() => handleDoneItem(item)} />{" "}
                {item}
              </div>
            ))
          : "Please add what to do!"}
      </ul>
    </div>
  );
}

export default TodoApp;
