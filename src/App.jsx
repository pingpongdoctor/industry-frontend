import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartForm from "./Pages/StartForm";
import Form from "./components/Form/Form";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Form />
        <Routes>
          <Route path="/start-form" element={<StartForm />} />
          <Route path="/conditional-form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
