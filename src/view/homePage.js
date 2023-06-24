import React, { useState } from 'react'
import '../styles/homePage.css'

export default function HomePage() {
  
  const buttonPressed = () => {
    console.log("test")
  }

  return (
    <div>
      <span>Hi</span>
      <button onClick={() => buttonPressed()}>Click me</button>
    </div>
  )
}
