import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components';
import Home from '../src/pages/Home';
import Quiz from '../src/pages/Quiz'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route key="home" path="/" element={<Home />} />
          <Route key="quiz" path="quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
