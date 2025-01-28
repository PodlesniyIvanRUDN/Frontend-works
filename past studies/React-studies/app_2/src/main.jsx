import './index.css';
import {createRoot} from 'react-dom/client'
import { TermList } from './TermList';
const form = document.getElementById('add-description');

let terms = loadTermlist();
let descriptionList = document.getElementById("description-list")
const reactRoot = createRoot (descriptionList);
reactRoot.render(<TermList terms = {terms}/>)

function saveTermList(terms){
    localStorage.setItem("TermList", JSON.stringify(terms))
}

function loadTermlist(){
  const rawData = localStorage.getItem("TermList");
  if(!rawData){
    return [];
  }
  return JSON.parse(rawData);
}



function render(){
  saveTermList(terms);
  reactRoot.render(<TermList terms = {terms} onDelete ={deleteItem}/>)
}

function addTerm(title, description){
  terms.push({title, description, id:crypto.randomUUID()});
  terms.sort ((value1, value2) => (value1.title < value2.title ? -1: 1))
  render();

}

function deleteItem(id){
    terms = terms.filter((value) => (value.id !== id ))
    render();
}

form.addEventListener('submit', (event) => {
  // Отменяем поведение по умолчанию
  event.preventDefault();



  // Получаем значения полей формы
  const title = form.elements['title'].value;
  const description = form.elements['description'].value;

  // Сбрасываем форму
  form.reset();

  // Выводим термин в консоль
  addTerm(title, description);
});
