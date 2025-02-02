import { useState } from 'react'
import { Provider } from 'react-redux'
import { ApiProvider } from './Context/APiContext'
import store from './store/store'
import Router from './Router'
import './App.css'

function App() {
  return (
    <>  
      <ApiProvider>
        <Router></Router>
      </ApiProvider>
    </>
  )
}

export default App
