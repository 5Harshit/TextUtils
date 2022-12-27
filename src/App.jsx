import React, { useState } from 'react';
import './App.css'
import Navbar from './Component/Layouts/Navbar';
import TextForm from './Component/Layouts/TextForm';
import Alert from './Component/Layouts/Alert';
import About from './Component/Layouts/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [txt, setTxt] = useState('Enable Dark Mode');


  const showAlert = (message, message1, type) => {
    setAlert({
      msg: message,
      msg1: message1,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setTxt("Enable Light Mode")
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("You are now in dark mode", "success", "info")

    } else {
      setTxt("Enable Dark Mode")
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("You are now in light mode", "success", "success")


    }
  }

  return (
    <React.Fragment>
      <Router>

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} txt={txt} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  )
}
export default App;