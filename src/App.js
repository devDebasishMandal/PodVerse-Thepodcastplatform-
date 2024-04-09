import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUpPage from "../src/Pages/SignUpPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
