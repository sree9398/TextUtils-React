import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

// import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (color) => {
    // if (mode === "dark") {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("Light mode has been enabled ", "success");
    // } else {
    //   setMode("dark");
    //   document.body.style.backgroundColor = "#042743";
    //   showAlert("Dark mode has been enabled ", "success");
    // }
    setMode(color);
    document.body.style.backgroundColor = color;
    showAlert(`${color} mode has been enabled `, "success");
    document.title = `TextUtils-${color}Mode`;
    // setInterval(() => {
    //   document.title="Install TextUtils Now 🙂";
    // }, 3000);
    // setInterval(() => {
    //   document.title="Have A great day";
    // }, 3000);
  };

  return (
    <>
      <Router>
        {/* <NavBar title="TextUtils" home="www.google.com"  mode={mode}/> */}
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
         <Routes>
            <Route path="/about" element={<About mode={mode}/>} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter text to analyze"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
