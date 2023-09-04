import { useEffect, useState } from 'react';
import { createContext } from 'react';
import './App.css';
import ReactSwitch from 'react-switch'

const themeContext=createContext({});

function App() {
  const[theme,setTheme]=useState('light')
  const toggleTheme=()=>{
    setTheme((theme)=>(theme==='light'?'dark':'light'));



    }
    useEffect(()=>{ 
      document.body.className=theme;
    },[theme])
  return (
    <>
    <themeContext.Provider>
   <div>
    <ReactSwitch onChange={toggleTheme} checked={theme==='dark'} checkedIcon={false}/>
   </div>
   
   </themeContext.Provider>
   
   </>
  );
} 

export default App;
