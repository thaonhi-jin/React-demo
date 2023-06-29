import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, Delete } from "./ShoppingSlice";
import { MdDelete } from "react-icons/md";

function ShoppingList() {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.shoppingList);
  // const [item, setItem] = useState("");
  const inputRef = useRef();
  const handleAddBtn = () => {
    dispatch(Add(inputRef.current.value));
    inputRef.current.value = "";
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Your shopping list</h1>
      <label htmlFor="list">What you need to buy</label>
      <br />
      <br />
      <input
        type="text"
        id="list"
        ref={inputRef}
        // onChange={(e) => {
        //   setItem(e.target.value);
        // }}
      />
      <button onClick={handleAddBtn}>Add</button>
      <br />
      <ul>
        {itemList
          ? itemList.map((item, index) => (
              <li key={index}>
                {item} <MdDelete onClick={() => dispatch(Delete(index))} />
              </li>
            ))
          : "Your list is empty!"}
      </ul>
    </div>
  );
}

export default ShoppingList;
