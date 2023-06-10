import {BrowserRouter, Routes, Route} from "react-router-dom";
import Albums from "./pages/Albums"
import Add from "./pages/Add"
import Update from "./pages/Update"
import "./style.css"

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Albums/>}/>
          <Route path = "/update/:id" element = {<Update/>}/>
          <Route path = "/add" element = {<Add/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
