import React, { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState(generateRandomColor())

  function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    const hexColor = "#" + randomColor
    const rgbColor = `rgb(${parseInt(randomColor.substr(0,2), 16)}, ${parseInt(randomColor.substr(2,2), 16)}, ${parseInt(randomColor.substr(4,2), 16)})`
    return { hex: hexColor, rgb: rgbColor }
  }


  function handleChangeColor() {
    setColor(generateRandomColor())
  }

  return (
    <div 
    className="App" 
    style={{ 
      backgroundColor: color.hex, 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" }}>
      <p 
      style={{ color: "#fff",
       fontSize: "24px"
        }}>{color.rgb}</p>
        <p 
      style={{ 
        color: "#fff",
       fontSize: "24px"
        }}>{color.hex}</p>
      <button 
      onClick={handleChangeColor} 
      style={{ 
        padding: "10px 20px", 
        fontSize: "16px", 
        cursor: "pointer" 
        }}>Generează Culoare</button>
    </div>
  );
}

export default App;
