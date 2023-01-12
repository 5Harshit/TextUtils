import React, { useState } from 'react';
import './App.css';
import Navbar from './Component/Layouts/Navbar';
import TextForm from './Component/Layouts/TextForm';
import Alert from './Component/Layouts/Alert';
import About from './Component/Layouts/About';
import {route} from "./Router"


function App() {
 const view = {
  home: <TextForm/>,
  about : <About/>
  }
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

  
 const loadPage=()=>{
  
    return view[route];
 }
  
  
  return (
    <React.Fragment>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} txt={txt} />
        <Alert alert={alert} />
      {loadPage()}
    </React.Fragment>
  )
  
}
export default App;