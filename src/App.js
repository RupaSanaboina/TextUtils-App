import React,{ useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert"
import TextForm from "./components/TextForm"

function App() {
  const [mode,setDarkMode] = useState('light');
  const [modeText,setModetext]=useState('Enable dark mode')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000
    )
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setDarkMode("dark")
      document.body.style.backgroundColor="grey"
      setModetext("Disable dark mode")
      showAlert("Dark mode has been enabled","Success")
    }
    else{
      setDarkMode("light")
      document.body.style.backgroundColor="white"
      setModetext("Enable dark mode")
      showAlert("Dark mode has been disabled","Success")
    }
  }
  return (
    
<>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading="Enter the text to Analyze" showAlert={showAlert} mode={mode}/>
<About/>
</div>



    </>
  );
}

export default App;

