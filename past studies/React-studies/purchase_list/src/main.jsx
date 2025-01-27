/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRoot} from 'react-dom/client'
import './index.css'
import { PurchaseList } from './PurchaseList.jsx'

let root = document.getElementById("root")
const reactRoot = createRoot (root);


let list =[
  {
    id:crypto.randomUUID(),
    title: "alpha",
    status: false
  },
  {
    id:crypto.randomUUID(),
    title: "bravo",
    status: true
  }
]

function setDone(id){
  (list.find((value) => (value.id === id))).status = true;
}

function render(){
  console.log(list)
  reactRoot.render(<PurchaseList list = {list} onDelete ={setDone}/>)
}

render();



