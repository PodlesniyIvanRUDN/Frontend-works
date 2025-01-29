
function createStudentsList(allStudents){
    let ul = document.createElement('ul');
    for (student of allStudents){
        if(student.hasOwnProperty('name') && student.hasOwnProperty('age')){
            let li = document.createElement('li');
            let h2 = document.createElement('h2');
            h2.textContent = student.name;
            let span = document.createElement('span');
            span.textContent = student.age;
            li.appendChild(h2);
            li.appendChild(span);
            ul.appendChild(li);
        }
    }
    document.body.appendChild(ul);
}

let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ];
let button = document.createElement('button');
button.textContent = 'push it';
button.addEventListener("click", function () {
    createStudentsList(allStudents)
 });
document.body.appendChild(button);