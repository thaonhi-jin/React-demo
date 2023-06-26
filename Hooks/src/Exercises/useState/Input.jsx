import React from "react";
import { useState } from "react";

/*
2. Controlled Input Field
    Create an input field component that allows a user to type in text and displays the text in real-time.

    Expectations:
        - Every time the user types something in the input field, the text should update in the text element
        - You should use the useState hook to keep track of the text state
    
    Extension:
        - Get value from radio Input
        - Get value from checkbox Input
        - Get value from <select>
        
 */

function Input() {
  const [textInput, setTextInput] = useState("");
  const [radioInput, setRadioInput] = useState("");
  const [checkboxInput, setCheckboxInput] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const radioPhones = ["samsung", "iphone", "oppo", "realme", "huawei"];
  const [checkedIndex, setCheckedIndex] = useState(0);
  const checkboxFilms = [
    "Anime",
    "Horror",
    "Action",
    "Romantic",
    "Sitcom",
    "Documentary",
  ];
  const [checkedFilmIndex, setCheckedFilmIndex] = useState([]);
  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };
  const handleRadioChange = (e) => {
    setRadioInput(e.target.value);
  };
  const handleCheckboxChange = (e) => {
    setCheckboxInput((prevState) => [...prevState, e.target.value]);
  };
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };
  const handleFilmOption = (index) => {
    // xử lý nếu option đã được chọn, click lại sẽ biến mất
    if (checkedFilmIndex.includes(index)) {
      setCheckedFilmIndex(
        checkedFilmIndex.filter((checkedIndex) => checkedIndex !== index)
      );
    } else {
      setCheckedFilmIndex((prevState) => [...prevState, index]);
    }
  };
  return (
    <div>
      <div className="text">
        <input type="text" onChange={handleTextChange} />
        <br />
        <p>Input Text: {textInput}</p>
      </div>

      <hr />
      <div className="radio">
        <p>Do you love me? ^^</p>
        {/* Checked can use or not */}
        {/* Using onClick & function(e) outside */}
        <input
          type="radio"
          id="yes"
          name="love"
          value="yes"
          //   checked={radioInput === "yes"}
          onClick={handleRadioChange}
        />
        <label htmlFor="yes">Yuppp :3</label>
        <br />

        {/* Using onChange & function(e) inside */}
        <input
          type="radio"
          id="no"
          name="love"
          value="no"
          //   checked={radioInput === "no"}
          onChange={(e) => setRadioInput(e.target.value)}
        />
        <label htmlFor="no">No -.-</label>
        <br />

        <p>Input radio: {radioInput}</p>
      </div>

      <hr />
      <div className="radio">
        <p>Which phone do you want to buy?</p>
        {radioPhones.map((phone, index) => (
          <div key={index}>
            <input
              type="radio"
              name="phone"
              checked={checkedIndex === index}
              onChange={() => setCheckedIndex(index)}
            />
            {phone}
          </div>
        ))}
        <p>You choose: {radioPhones[checkedIndex]} </p>
      </div>

      <hr />
      <div className="checkbox">
        <p>Which type of films do you like below?</p>

        <input
          type="checkbox"
          name="anime"
          id="anime"
          value="anime"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="anime">Anime</label>
        <br />

        <input
          type="checkbox"
          name="horror"
          id="horror"
          value="horror"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="horror">Horror</label>
        <br />

        <input
          type="checkbox"
          name="action"
          id="action"
          value="action"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="action">Action</label>
        <br />

        <input
          type="checkbox"
          name="romantic"
          id="romantic"
          value="romantic"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="romantic">Romantic</label>
        <br />

        <input
          type="checkbox"
          name="sitcom"
          id="sitcom"
          value="sitcom"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="sitcom">Sitcom</label>
        <br />

        <input
          type="checkbox"
          name="documentary"
          id="documentary"
          value="documentary"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="documentary">Documentary</label>
        <br />
        <p>Input Checkbox: {checkboxInput.join(" , ")}</p>
      </div>

      <hr />
      <div className="checkbox">
        <p>Which type of films do you like below? - Part 2</p>
        {checkboxFilms.map((film, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={checkedFilmIndex.includes(index)}
              onChange={() => handleFilmOption(index)}
              // or onChange={() => setCheckedFilmIndex((prevState) => [...prevState, index])}
              // why not onChange = {handleFilmOption(index)}
            />
            {film}
          </div>
        ))}
        <p>
          You choose:
          {checkedFilmIndex
            .map((checkedIndex) => checkboxFilms[checkedIndex])
            .join(" , ")}
        </p>
      </div>

      <hr />
      <div className="select">
        <label for="cars">Choose a car:</label>
        <select name="cars" id="cars" onChange={handleSelectChange}>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
        <p>You selected: {selectValue}</p>
      </div>
    </div>
  );
}

export default Input;
