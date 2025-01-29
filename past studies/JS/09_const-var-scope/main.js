// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count = 10) {
    let pickMe= [];
    for(let i = 1; i <= (count/2); i+=1){
        pickMe.push(i, i);
    }
    console.log('Pick Me',pickMe);
    return pickMe;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(pickMe) {
    let array = [...pickMe];
    let count = pickMe.length;
    for(let i = 0; i < count; i++){
       let j = Math.floor(Math.random()*Math.abs(count));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log('New array',array);
    return array;

}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function flip(idList,cmpVal,card){
  console.log(card.Object);
  card.Object.classList.toggle('is-flipped');

  idList.push(card.id);
  cmpVal.push(card.value);

  return {idList, cmpVal};
}



function startGame(count = 2, container) {

    let CardArray = [];
    let tmp = createNumbersArray(count);
    tmp = shuffle(tmp);// shuffled array
    let field = document.createElement('div');
    field.classList.add('container', 'card__field');//field for cards
    let cardList = document.createElement('ul');
    cardList.classList.add('card__list');//list for cards
    for(let i = 0; i < tmp. length; i++){
      //creating base for card
      let card = document.createElement('div');
      card.classList.add('card', 'col-sm-2', 'col-md-2');
        //front of the card
        let front = document.createElement('div');
        let frontContent = document.createElement('span');
        frontContent.textContent = 'card';
        front.append(frontContent);
        front.classList.add('card__facade','card__front');
      //back of the card
        let back = document.createElement('div');
        let backContent = document.createElement('span');
        backContent.textContent = tmp[i] ;
        back.append(backContent);
        back.classList.add('card__facade','card__back');
        card.append(front);
        card.append(back);
        card.setAttribute('id' , i);
        let cardObj = {
          Object:card,
          value:tmp[i],
          id:card.id
        };
        CardArray.push(cardObj);
        cardList.append(card);
    }
    console.log(CardArray);
    field.append(cardList);
    container.append(field);
    let cmpVal = [];
    let idList = [];
    let counter = 0;
    for(let card of CardArray){
      console.log(card.value);
      card.Object.addEventListener('click', function() {
        console.log(card.Object);
        if(card.Object.classList.contains('is-flipped')){
          return;
        }

        flip(idList,cmpVal,card);
        console.log('Current counter is ', idList.length);
        console.log('Checked elements ', cmpVal); 
        if(idList.length ===2 && cmpVal[0] === cmpVal[1]){
          console.log('cmpVal is',cmpVal[0]);
          document.getElementById(idList[0]).classList.add('guessed');
          document.getElementById(idList[0]).classList.add('guessed');
          idList = [];
          cmpVal = [];
          counter +=2;
        }

        if(idList.length ===2 && cmpVal[0] !== cmpVal[1]){
          setTimeout( function() {
            document.getElementById(idList[0]).classList.toggle('is-flipped');
            document.getElementById(idList[1]).classList.toggle('is-flipped');
            idList = [];
            cmpVal = [];
          },600)
        }

        console.log('Current value is ', counter);
        if(counter === tmp.length){
          let victoryMSG = document.createElement('span');
          victoryMSG.textContent = 'YOU WON, CONGRATULATIONS !';
          victoryMSG.style.color = 'lime';
          field.append(victoryMSG);
          let replayButttonSpace = document.createElement('div');
          let replayButton = document.createElement('button');
          replayButton.textContent = 'Wanna play again ?';
          replayButton.addEventListener('click', function(){
            location.reload();
          })
          replayButttonSpace.append(replayButton);
          field.append(replayButton);
        }

      });


    }
    
}

  let buttonWrapper = document.querySelector('.game__button__wrapper');
  
  console.log( buttonWrapper);
  let span = document.createElement('span');
  let form = document.getElementById('form');
  let input = document.getElementById('input')
  let button = document. getElementsByClassName('game__button');
  button.disabled = 'true';
  console.log(input);
  input.addEventListener('input', function(){
    if( input.value.length === 0){
         button.disabled = true;
    }
    else{   button.disabled = false;}
});

  form.addEventListener('submit', function(e) {

    e.preventDefault();

    if(!input.value){
        return;
    }
    console.log(input.value);
    let cardNumber = input.value;
    if((cardNumber % 2 !== 0) || (cardNumber > 10) || (cardNumber < 4)){
      span.textContent = 'input valid number';
      span.style.color = 'red';
      console.log( buttonWrapper);
      buttonWrapper.append(span);
      return;
    }
    button.disabled = true;
    input.disabled = true;
    input = '';
    console.log('is Button', button);
    span.remove();
    startGame(cardNumber, document.getElementById('test-field'));
    

  })
 




