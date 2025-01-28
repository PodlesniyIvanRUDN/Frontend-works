import { useState } from 'react'
import './App.css'
import { SearchableList } from './SearchableList'

const List = [
  {
    id:"1" ,
    title:"alpha"
  },
  {
    id: "2",
    title: "bravo"
  },
  {
    id:"3",
    title: "charlie"
  }
]

function App() {

  return (
    <SearchableList list={List}/>
  )
}

export default App
