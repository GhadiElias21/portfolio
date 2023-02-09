import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { useState} from "react";
import Contact from "./components/Contact";
function App() {

 

  const [isRussian,setIsRussian]=useState(false)

  const changeLangHandler=(language)=>{
    setIsRussian(language);
  }



  return (
    
    
<div>
     <Navbar  changeLangHandler={changeLangHandler}/>   
     <Home   lang={isRussian}/>
   
     <About lang={isRussian}/>
     <Skills lang={isRussian}/>
    
     <Work   lang={isRussian}/>
     
     <Contact  lang={isRussian}/>
     </div>
  );
}

export default App;
