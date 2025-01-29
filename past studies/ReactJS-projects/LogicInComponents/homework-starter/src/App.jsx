import { CardList } from './CardList';
import { useList } from './useList';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client'
import './App.css';
import { useRef } from 'react';


export const App = () => {
  
  const input = useRef();

  const { list, createItem,setNewItem, setItemTitle, toggleItem, deleteItem } = useList([]);


  const handleClick = (event) => {
      if((input.current.value).length !== 0){
        setNewItem(input.current.value);
      }
      else{
        createItem();
      }
  }



  return (
    <div className="app">
      <h1>Список покупок</h1>
      <input type='text' ref={input}/>
      <button className="create-button" onClick={ handleClick}>{/*  createItem*/}
        Новый элемент
      </button>

      <CardList
        list={list}
        onItemTitleChange={setItemTitle}
        onItemToggle={toggleItem}
        onItemDelete={deleteItem}
      />


    </div>
  );
};
