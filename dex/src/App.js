import "./App.css";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens"
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header"

function App() {
  return(
   <div className="App">
    <Header/>
    <div className="mainWindow">
      <Routes>
        <Route path="/" element={<Swap/>}/>
          <Route path="/" element={<Tokens/>}/>
        
      </Routes>
    </div>
    </div>
    )
}

export default App;
