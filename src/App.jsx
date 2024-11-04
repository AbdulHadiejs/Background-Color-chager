import { useState } from 'react'
import './App.css'
import Button from "./componad/button"


function App() {
  const [color, setColor] = useState("#93931e")


  return( <>
  <div className='container' style={{backgroundColor : color}}>
    <div className='bg-color'>
      <Button 
        setColor={setColor}
        text="Red"
        backgroundColor= "red-bg"
        enterColor= "#dc2626"
      />

      <Button 
        setColor={setColor}
        enterColor= "#16a34a"
        text="green"
        backgroundColor= "green-bg"
      />

      <Button 
        setColor={setColor}
        enterColor= "#2563eb"
        text="Blue"
        backgroundColor= "Blue-bg"
      />

      <Button 
        setColor={setColor}
        enterColor= "#9333ea"
        text="Purple"
        backgroundColor= "Purple-bg"
      />

      <Button 
        setColor={setColor}
        enterColor= "#65a30d"
        text="Lime"
        backgroundColor= "Lime-bg"
      />

      <Button 
        setColor={setColor}
        enterColor= "#4b5563"
        text="Gray"
        backgroundColor= "Gray-bg"
      />

      <Button 
        setColor={setColor}
        enterColor= "#ca8a04"
        text="Yellow"
        backgroundColor= "Yellow-bg"
      />

      <Button 
        setColor={setColor}
        enterColor= "#db2777"
        text="Pink"
        backgroundColor= "Pink-bg"
      />

      <Button 
        setColor={setColor}
        enterColor= "#475569"
        text="Slate"
        backgroundColor= "Slate-bg"
      />

      <Button 
        setColor={setColor}
        enterColor= "#000000"
        text="Black"
        backgroundColor= "Black-bg"
      />

      <Button 
        setColor={setColor}
        enterColor= "#cbd5e1"
        text="White"
        backgroundColor= "White-bg"
      />
      </div>
    </div>
    </>
  )
}

export default App
