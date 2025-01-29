function createStudentCard(name, age){
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.textContent = name;
    let span = document.createElement('span');
    span.textContent = age;
    div.appendChild(h2);
    div.appendChild(span);
    document.body.append(div);


}


createStudentCard('Игорь', 17);