import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Form />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
