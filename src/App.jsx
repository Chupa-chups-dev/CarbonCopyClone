import { Routes, Route } from "react-router-dom";
import './scss/App.scss'
import Main from "./pages/Main/Main";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
  );
}

export default App;
