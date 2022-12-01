import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../src/Pages/SignUp";
import HomePage from "./Pages/HomePage";
import Form2 from "./components/Form2/Form2";
import { Form } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/conditional-form" element={<Form />} />
          <Route path="/Form2" element={<Form2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
