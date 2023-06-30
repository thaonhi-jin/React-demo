import "./App.css";
import { Route, Routes } from "react-router-dom";
// ----------------- Pages ------------------------
import HomePage from "./Exercises/Pages/HomePage";

// ----------------- useState------------------------
import DisplayList from "./Exercises/useState/DisplayList";
import Counter from "./Exercises/useState/Counter";
import Input from "./Exercises/useState/Input";
import Toggle from "./Exercises/useState/Toggle";
import CharacterCounter from "./Exercises/useState/CharacterCounter";
import RandomGifts from "./Exercises/useState/RandomGifts";
import TodoApp from "./Exercises/useState/TodoApp";

// ----------------- useEffect------------------------
import UpdateTitle from "./Exercises/useEffect/UpdateTitle";
import Fetching from "./Exercises/useEffect/Fetching";
import CountDown from "./Exercises/useEffect/CountDown";
import ValidateInput from "./Exercises/useEffect/ValidateInput";

// ----------------- useRef ------------------------
import CountDownRef from "./Exercises/useRef/CountDownRef";
import TrackingState from "./Exercises/useRef/TrackingState";
import AutoFocus from "./Exercises/useRef/AutoFocus";

// ----------------- useReducer ------------------------
import CounterReducer from "./Exercises/useReducer/Counter";
import HandleForm from "./Exercises/useReducer/HandleForm";

// ----------------- useReducer ------------------------
import ToggleTheme from "./Exercises/useContext/Parent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* useState */}
        <Route
          path="/usestate/character-counter"
          element={<CharacterCounter />}
        />
        <Route path="/usestate/counter" element={<Counter />} />
        <Route path="/usestate/display-list" element={<DisplayList />} />
        <Route path="/usestate/input" element={<Input />} />
        <Route path="/usestate/random-gift" element={<RandomGifts />} />
        <Route path="/usestate/to-do-app" element={<TodoApp />} />
        <Route path="/usestate/toggle" element={<Toggle />} />

        {/* useEffect */}
        <Route path="/useeffect/count-down" element={<CountDown />} />
        <Route path="/useeffect/fetching" element={<Fetching />} />
        <Route path="/useeffect/update-title" element={<UpdateTitle />} />
        <Route path="/useeffect/validation" element={<ValidateInput />} />

        {/* useRef */}
        <Route path="/useref/autofocus" element={<AutoFocus />} />
        <Route path="/useref/count-down-ref" element={<CountDownRef />} />
        <Route path="/useref/track-state" element={<TrackingState />} />

        {/* useReducer */}
        <Route
          path="/usereducer/counter-reducer"
          element={<CounterReducer />}
        />
        <Route path="/usereducer/handle-form" element={<HandleForm />} />

        {/* useContext */}
        <Route path="/usecontext/toggle-theme" element={<ToggleTheme />} />
      </Routes>
    </div>
  );
}

export default App;
