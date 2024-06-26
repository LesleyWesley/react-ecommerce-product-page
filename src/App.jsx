import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./components/MainPage.jsx"
import Header from "./components/Header.jsx"


function App() {
  return (
      <MainPage>
        <Header />
      </MainPage>
  )
}

export default App
