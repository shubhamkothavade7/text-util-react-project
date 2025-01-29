import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  const [bgMode, setBgMode] = useState('light');
  const [toggleTextColor, setColor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (status, message) => {
    setAlert({
      status: status,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleInput = () => {
    if (bgMode === 'light') {
      console.log('enter in if cond');
      setBgMode('dark');
      setColor('light');
      document.body.style.backgroundColor = '#06062f';
      showAlert("success", "set to dark mode")
    } else {
      console.log('enter in else part');
      setBgMode('light');
      setColor('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "set to light mode");
    }

  }
  console.log('the alert is ', alert);
  console.log('the bg mode is ', bgMode)
  console.log('the bg mode is from the toggleTextClr ', toggleTextColor);

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
