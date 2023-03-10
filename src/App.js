import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [chooseClr, setChooseClr] = "light";
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlertMesg = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlertMesg("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlertMesg("Light mode has been enabled", "success");
    }
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar
          title="Text Changer"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlertMesg={showAlertMesg}
                  heading="Analyze your Text"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            />

            <Route exact path="/about" element={<About mode={mode}  />} />
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
