import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../src/Pages/SignUp";
import Welcome from "./Pages/Welcome";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/welcome" element={<Welcome />} />s */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
