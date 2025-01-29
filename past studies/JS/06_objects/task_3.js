let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
]
 

function filter(arr, prop, value) {
  let filteredArray = []
  for(object of arr){
      if(object.hasOwnProperty(prop) && object[prop] === value){
      filteredArray.push(object);
      }
  }
  return filteredArray;
}
  // Здесь решение задачи
  // arr - массив объектов
  // prop - свойство по которому производится фильтрация
  // value - значение свойства по которому производится фильтрация


  let resultArray = filter(objects, 'name', 'Иван');
  console.log( Object.values(resultArray))
