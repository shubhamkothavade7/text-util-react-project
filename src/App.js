import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Correctly using HashRouter

function App() {
  const [bgMode, setBgMode] = useState('light');
  const [toggleTextColor, setColor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (status, message) => {
    setAlert({
      status: status,
      message: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleInput = () => {
    if (bgMode === 'light') {
      setBgMode('dark');
      setColor('light');
      document.body.style.backgroundColor = '#06062f';
      showAlert("success", "Set to dark mode");
    } else {
      setBgMode('light');
      setColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "Set to light mode");
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={bgMode} toggleInput={toggleInput} toggleTextColor={toggleTextColor} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm name="Enter the text to analysis" mode={bgMode} alert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
