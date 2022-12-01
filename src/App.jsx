import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../src/Pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
