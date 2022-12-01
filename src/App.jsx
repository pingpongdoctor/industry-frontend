import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartForm from "./Pages/StartForm";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/start-form" element={<StartForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
