import React, { useState } from 'react'
import '../styles/homePage.css'
import { fetchBooks } from '../fetches/fetchBooks'
import { fetchCharacters } from '../fetches/fetchCharacters'

export default function HomePage() {
  
  const buttonPressed = async () => {
    let books = await fetchBooks()
    console.log(books)

    let characters = await fetchCharacters()
    console.log(characters)
  }

  return (
    <div>
      <span>Click button to see data in console</span>
      <br/><br/>
      <button onClick={() => buttonPressed()}>Click me</button>
    </div>
  )
}
