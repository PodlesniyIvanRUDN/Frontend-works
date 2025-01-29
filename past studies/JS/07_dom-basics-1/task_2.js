function createStudentCard(studentObj){
    if(studentObj.hasOwnProperty('name') && studentObj.hasOwnProperty('age')){
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        h2.textContent = studentObj.name ;
        let span = document.createElement('span');
        span.textContent = studentObj.age;
        div.appendChild(h2);
        div.appendChild(span);
        document.body.append(div);
    }

}

let studentObj={
    name: 'Игорь',
    age: 17
   }
createStudentCard(studentObj)