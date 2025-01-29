// Обязательная часть задания
function getOlderUser (user1, user2){
  if (user1.age > user2.age)
      return user1.name;
  else if (user2.age > user1.age)
      return user2.name;
  else return '';
}


let user1={
  name: 'Игорь',
  age: 17
}

let user2={
  name: 'Оля',
  age: 20
}
console.log(`\n Task -- 1 \n`);
let result = getOlderUser(user1, user2);
if( result !== "")
    console.log(`The oldest user is ${result} \n`)
else console.log('Equal age \n')



// // Не обязательная часть задания
console.log(`Task -- 2 \n`);

function getOlderUserArray(allUsers){
  let oldestTmp = allUsers[0]
  for (let i = 0; i < allUsers.length; i++){
      if(oldestTmp.hasOwnProperty("age") && allUsers[i].hasOwnProperty("age") && (allUsers[i].age > oldestTmp.age)){
          for (let key in result) {
              oldestTmp = allUsers[i];
              }
          }
      }
      return oldestTmp.name;
  }
  
  let allUsers=[
   {name: 'Валя', age: 10},
   { name: 'Таня',age: 24},
   {name: 'Рома',age: 20},
   {name: 'Надя', age: 34},
   {name: 'Антон', age: 70}
  ]
  let oldestTmp =  getOlderUserArray(allUsers);
  console.log(`The oldest user is ${oldestTmp} \n`)

