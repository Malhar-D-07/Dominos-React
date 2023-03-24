import logo from "./logo.svg";
import "./App.css";
import handleSubmit from "./handles/handleData";
import { useRef } from "react";
import { handleFetchWithCollectionName } from "./handles/handleData";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import OutlinedTextField from "./reusable-components/InputFields/OutlinedTextField/OutlinedTextField";
function App() {
  const dataRef = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit("Pizzas", { data: {} }, "ListAllPizzas");
    dataRef.current.value = "";
  };

  return (
    <>
      {/* <div className="App">
        <form onSubmit={submithandler}>
          <input type="text" ref={dataRef} />
          <button type="submit">Save</button>
        </form>
      </div>

      <button
        onClick={() => {
          handleFetchWithCollectionName("test");
        }}
      >
        Get Data
      </button> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/1" element={<OutlinedTextField />} />
      </Routes>
    </>
  );
}

export default App;
