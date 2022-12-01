import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import StartForm from "./Pages/StartForm";
import SignUpBiz from "./Pages/SignUpBiz";
import Form from "./components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start-form" element={<StartForm />} />
          <Route path="/sign-up/biz-details" element={<SignUpBiz />} />
          <Route path="/conditional-form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
