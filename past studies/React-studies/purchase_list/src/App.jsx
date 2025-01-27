import { useState } from 'react'
import './App.css'
import { PurchaseList } from './PurchaseList'




function App() {
  return (
    <PurchaseList items = {list} onChange ={setDone}/>
  )

}

export default App
