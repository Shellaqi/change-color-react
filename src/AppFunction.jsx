import { useState, useEffect } from "react";
import colors from './common/colors';
import './app.scss'

function AppFunction() {
  const [currentIndexColor, setState] = useState("");
  
  useEffect(() => {
    //Runs only on the first render
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];
    document.body.style.backgroundColor = color;
    setState(randomIndex)
  }, []);

  return (
    <div id="app">
    <h1 id="current-color">{colors[currentIndexColor]}</h1>

    <div className="colors">
            {
                colors.map((color,index) =>
                    <button key={index}
                      style={{backgroundColor: color}}
                      className={index === currentIndexColor ? 'active' : ''}
                      onClick={() => {
                          document.body.style.backgroundColor = color;
                          setState(index)
                      }}
                      >
                      {color}
                    </button>
                )
            }      
    </div>
  </div>    
  );
}

export default AppFunction;
