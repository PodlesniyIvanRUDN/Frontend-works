// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).

function dataToJson(data){
    return JSON.stringify(data);
}

function jsonToData(data){
    return JSON.parse(data);
}

function getListData(name){
    let data = localStorage.getItem(name);
    return data ? jsonToData(data): [];
}

//add to List function
function addToList(name, arrayOfTasks){
    let data = dataToJson(arrayOfTasks);
    localStorage.setItem(name, data);
}

//Remove from list
function removeFromList(key,id){

    let list = getListData(key);


    let tmpList = [];
    for(let i = 0; i < list.length; i++){

        if(Number(id) !== list[i].id){
            tmpList.push(list[i]);
        }
    }

    addToList(key, tmpList)
}

function convertToDate(birthdayString){
    let tmpDate1 = birthdayString.replaceAll('.', '/');
    let dateParts = tmpDate1.split("/");
    let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
    return dateObject;
}


//sort by Name
function sortByName( studentsList){
    for(let i = 0; i < studentsList.length; i++){
        for(let j = 0; j < studentsList.length-i-1; j++){
        let fullName1 = studentsList[j].name + ' ' + studentsList[j].surname + ' ' + studentsList[j].lastname;
        let fullName2 = studentsList[j+1].name + ' ' + studentsList[j+1].surname + ' ' + studentsList[j+1].lastname;

        if( ( (fullName1).localeCompare( fullName2) === 1) && (direction === true) ){ 
            let tmp =studentsList[j]
            studentsList[j] = studentsList[j+1];
            studentsList[j+1] = tmp;
            }
        else if(( (fullName1).localeCompare( fullName2) === -1) && (direction === false)){
            let tmp =studentsList[j+1]
            studentsList[j+1] = studentsList[j];
            studentsList[j] = tmp;
            }
        }
    }
    direction = !direction;
    document.querySelectorAll('.student__data').forEach(e => e.remove());
    renderStudentsTable(studentsList);

}
//sort by birthday
function sortByBirthday( studentsList){
    for(let i = 0; i < studentsList.length; i++){
        for(let j = 0; j < studentsList.length-i-1; j++){


            let tmpDate1 = convertToDate(studentsList[j].birthday);
            let tmpDate2 = convertToDate(studentsList[j+1].birthday);


        if((tmpDate1 > tmpDate2) && (direction === true)){ 
            let tmp =studentsList[j]

            studentsList[j] = studentsList[j+1];
            studentsList[j+1] = tmp;

            }
        else if((tmpDate1 < tmpDate2) && (direction === false)){ 
            let tmp =studentsList[j+1]

            studentsList[j+1] = studentsList[j];
            studentsList[j] = tmp;
            }

        }
    }
    direction = !direction;
    document.querySelectorAll('.student__data').forEach(e => e.remove());
    renderStudentsTable(studentsList);
}

//sort by date
function sortByDate( studentsList){
    for(let i = 0; i < studentsList.length; i++){
        for(let j = 0; j < studentsList.length-i-1; j++){
        if( (studentsList[j].studyStart)>(studentsList[j+1].studyStart) && (direction === true)){ 
            let tmp =studentsList[j]
            studentsList[j] = studentsList[j+1];
            studentsList[j+1] = tmp;
            }
        else if (direction === false){
            let tmp =studentsList[j+1]
            studentsList[j+1] = studentsList[j];
            studentsList[j] = tmp;
            }
        }
    }

    direction = !direction;
    document.querySelectorAll('.student__data').forEach(e => e.remove());
    renderStudentsTable(studentsList);
}

function sortByFaculty( studentsList){
    for(let i = 0; i < studentsList.length; i++){
        for(let j = 0; j < studentsList.length-i-1; j++){
        if ( ( (studentsList[j].faculty).localeCompare(studentsList[j+1].faculty) === 1) && (direction === true)){ 
            let tmp =studentsList[j]
            studentsList[j] = studentsList[j+1];
            studentsList[j+1] = tmp;
            }
        else if (direction === false){
            let tmp =studentsList[j+1]
            studentsList[j+1] = studentsList[j];
            studentsList[j] = tmp;
            }
        }
    }

    direction = !direction;
    document.querySelectorAll('.student__data').forEach(e => e.remove());
    renderStudentsTable(studentsList);
}

//clear all alerts
function clearAlert(removableObj){
    if(removableObj.length > 0){
        for(let obj of removableObj){
            obj.remove();
        }
    }
}



function selectSort(id,  studentsList){

    switch(id){

        case 'fio-sort':
            sortByName(studentsList);
            break;

        case 'bd-sort':
            sortByBirthday(studentsList);
            break;

        case 'ed-sort':
            sortByDate(studentsList);
            break;

        case 'faculty-sort':
            sortByFaculty(studentsList);
                break;

    }

}



function filterAll(desiredStudent, filters, studentsList){
    let filtered = [...studentsList];
    let removalIndex;
    let removeElements = [];
    console.log('Required filters', filters);
    if (filters === 0){
        return;
    }
    else{
        let filtrations = 0;
        console.log('keys',Object.entries(desiredStudent));
        //first Name filter
        if((desiredStudent.name !== '' )){
            console.log('FAIL');
            for(let student of filtered){
                let fullName = student.name + ' ' + student.surname + ' ' + student.lastname;
                console.log(fullName.includes(desiredStudent.name));
                if((fullName.includes(desiredStudent.name)) === false){
                    removalIndex = student;
                    if(removeElements.includes(removalIndex) === false)
                        removeElements.push(removalIndex);
                }
            }
            filtrations+=1;
        }
        console.log('FIRST FILTRATION',filtrations)
        //end of first name filters
        if(filtrations === filters){
            console.log('CLEAR', removeElements);
            if(removeElements.length === filtered.length)
            return '';
            else{
                filtered = filtered.filter(item => !removeElements.includes(item))
                return filtered;
            }
        }


            //birthday
        if(desiredStudent.finish !== ''  ){
            for(let student of filtered){
                //console.log(student.studyStart + 4,'===', desiredStudent.finish)
                if((student.studyStart + 4) !== Number(desiredStudent.finish)){
                    removalIndex = student;
                    if(removeElements.includes(removalIndex) === false)
                        removeElements.push(removalIndex);
                    }
                }
            filtrations+=1;
        }

        console.log('SECOND FILTRATION',filtrations)

        if(filtrations === filters){
            console.log('CLEAR', removeElements);
            if(removeElements.length === filtered.length)
            return '';
            else{
                filtered = filtered.filter(item => !removeElements.includes(item))
                return filtered;
            }
        }

        //studyStart

        if(desiredStudent.studyStart !== 0  ){
            console.log('here');
            for(let student of filtered){
                console.log(desiredStudent.studyStart)
                if((student.studyStart) !== Number(desiredStudent.studyStart)){
                    removalIndex = student;
                    if(removeElements.includes(removalIndex) === false)
                        removeElements.push(removalIndex);
                    }
                }
            filtrations+=1;
        }

        if(filtrations === filters){
            console.log('CLEAR', removeElements);
            if(removeElements.length === filtered.length)
            return '';
            else{
                filtered = filtered.filter(item => !removeElements.includes(item))
                return filtered;
            }
        }

        if(desiredStudent.faculty !== " "){
            for(let student of filtered){
                console.log(student.faculty, '===',  desiredStudent.faculty)
                if(student.faculty !== desiredStudent.faculty){
                    removalIndex = student;
                    if(removeElements.includes(removalIndex) === false)
                        removeElements.push(removalIndex);
                    }
                }
                filtrations+=1;
        }

        if(filtrations === filters){
            console.log('CLEAR', removeElements);
            if(removeElements.length === filtered.length)
            return '';
            else{
                filtered = filtered.filter(item => !removeElements.includes(item))
                console.log('faculty filter',Object.values(filtered));
                return filtered;
            }
        }
        
        

    }
}

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.
let key = 'students';
let studentsList = getListData(key);
console.log(studentsList.length);
let direction = true;
let today = new Date().toLocaleDateString();
let todayYear = new Date().getFullYear()
console.log('Today year', todayYear);
let convertedToday = convertToDate(today);
let form = document.getElementsByClassName('student-add-form')[0];
let sideBarForm = document.getElementById("sidebar-form");
let container =document.getElementsByClassName('student_data')[0];
let unfilterButton = document.getElementById('unfilter');
let revealButton = document.getElementById('reveal');
let filterButton = document.getElementById('filter')
let sideBar = document.getElementById('sidenav');
let sideBarStatus = false;
let filtered = false;

renderStudentsTable(studentsList);

revealButton.addEventListener('click', function() {
    if(sideBarStatus === false)
    sideBar.style.display = "flex";
    else
    sideBar.style.display = "none";
    sideBarStatus = !sideBarStatus;
})

//filters
sideBarForm.addEventListener('submit', function(e){

    e.preventDefault();
    
    let filters = 0;

    let alertSpan = document.createElement('span');
    alertSpan.classList.add('removable');
    let removableObj = document.getElementsByClassName('removable');

    let desiredName = document.getElementById("fname-filter").value;

    if (desiredName.length >= 2){
        filters+=1;
    }

    let desiredBDay = document.getElementById('finish-year-filter').value;

    if (((desiredBDay !== 0) && ( (Number(desiredBDay) > 1924)) ) ){
        filters+=1;
    }

    let desiredEdStart = document.getElementById('ed-year-filter').value;

    if (  (desiredEdStart !== '') && (Number(desiredEdStart) < (Number(todayYear) ))  ){
        filters+=1;
    }
    let desiredFaculty = document.getElementById('faculty-filter').value;

    if((desiredFaculty.length >= 2)){
        filters+=1;
    }



    if(filters === 0)
        return;

    let desiredStudent = {
        name: desiredName,
        finish:desiredBDay,
        studyStart:Number(desiredEdStart),
        faculty:desiredFaculty
    }

    let needed = filterAll(desiredStudent, filters, studentsList);
    console.log('filter status', needed.length !== 0);
    console.log('catch is ', needed);
         

    if(needed.length === 0 ){
        clearAlert(removableObj);
        alertSpan.textContent = 'No such students';
        alertSpan.style.color = 'red';
        filterButton.append(alertSpan); 
        return;       
    }

    if(removableObj.length !== 0){
        clearAlert(removableObj);
     }
    
    if(needed.length !== 0 && filtered === false){
        document.querySelectorAll('.student__data').forEach(e => e.remove());
        studentsList = [...needed];
        renderStudentsTable(needed);
        filtered = true;
    }

    else if(filtered === true){
        needed = filterAll(desiredStudent, filters, needed);
        console.log(studentsList.length);
        studentsList = [...needed];
        document.querySelectorAll('.student__data').forEach(e => e.remove());
        renderStudentsTable(needed);

    }
    
    console.log('Desired student', desiredStudent);

})

//remove filters
unfilterButton.addEventListener('submit', function() {
    
    document.querySelectorAll('.student__data').forEach(e => e.remove());
    renderStudentsTable(studentsList);
    })


    form.addEventListener('submit', function(e) {
        let removableObj = document.getElementsByClassName('removable');
        e.preventDefault();
        let fName = document.getElementById("fname").value;
        let mName = document.getElementById("mname").value;
        let lName = document.getElementById("lname").value;
        let bDay = new Date(document.getElementById("bday").value).toLocaleDateString();
        let edStart = document.getElementById('ed-year').value;
        let faculty = document.getElementById('faculty').value;
        let alertSpan = document.createElement('span');
        alertSpan.classList.add('removable');
        let nameCheck = (fName.length <  2);
        let middleCheck =(mName.length <  2);
        let lastCheck = (lName.length <  2);
        let bdayYear = new Date(document.getElementById("bday").value).getFullYear();
        console.log(typeof bdayYear);
            
            let formContainer = document.getElementsByClassName('form__container')[0];


            if(nameCheck){
                clearAlert(removableObj);
                alertSpan.textContent = 'First Name input is invalid';
                alertSpan.style.color = 'red';
                formContainer.append(alertSpan);
                return;
            }

            if(middleCheck){
                clearAlert(removableObj);
                alertSpan.textContent = 'Middle name input is invalid';
                alertSpan.style.color = 'red';
                formContainer.append(alertSpan);
                return;
            }

            if(lastCheck){
                clearAlert(removableObj);
                alertSpan.textContent = 'Last name input is invalid';
                alertSpan.style.color = 'red';
                formContainer.append(alertSpan);
                return;
            }            

            if((( Number(edStart) - bdayYear )<= 15 ) || (edStart < bdayYear) || ( Number(edStart) < 2000) ){
                clearAlert(removableObj);
                alertSpan.textContent = 'Education start date is invalid';
                alertSpan.style.color = 'red';
                formContainer.append(alertSpan);
                return;
            }

            if(faculty.length <= 2){
                clearAlert(removableObj);
                alertSpan.textContent = 'Faculty name is invalid';
                alertSpan.style.color = 'red';
                formContainer.append(alertSpan);
                return;
            }

            if((bDay === 'Invalid Date') || ( (Number(bDay.substring(6,10)) < 1924)) || ( convertToDate(bDay) > convertedToday ) ){
                clearAlert(removableObj);
                alertSpan.textContent = 'Birthday date is invalid';
                alertSpan.style.color = 'red';
                formContainer.append(alertSpan);
                return;
            }

        let studentObj = {
             name:fName,
             surname:mName,
             lastname:lName,
             birthday:bDay,
             studyStart:Number(edStart),
             faculty:faculty
         };

         if(removableObj.length !== 0){
            clearAlert(removableObj);
         }

         let inputs = document.getElementsByClassName('input');
         for (input of inputs){
            input.value ='';
         }

        let student = getStudentItem(studentObj);
        studentsList.push(studentObj);
        addToList(key,studentsList);
        container.append(student);
        })

    //sorting stuff
    let spanListeners = document.getElementsByClassName('student__data-head');

    for(let span of spanListeners){
        
        span.addEventListener('click', function(){
            let id = span.id;
            selectSort(id,studentsList);
        })

    }

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

function getStudentItem(studentObj) {
    console.log(studentObj)
    let studentInfo = document.createElement('div');
    studentInfo.classList.add('student__data');
    let nameInfo = document.createElement('span');
    nameInfo.classList.add('student__data-section', 'col-md-3');
    nameInfo.textContent =  studentObj.name + ' ' + studentObj.surname + ' ' + studentObj.lastname;
    let bDay = document.createElement('span');
    let years = (Number(studentObj.birthday.substring(6,10)));
    let month =new Date(studentObj.birthday).getMonth();
    let day = new Date(studentObj.birthday).getDate();
    let today = new Date();
    let age = '';
    console.log('op1', (studentObj.birthday))
    if((today.getMonth() >= month)&&(today.getDate > day)){
        age = today.getFullYear() - years;
        console.log('op1',age);
    }
    else{
        age = today.getFullYear() - years - 1;;
    }
    bDay.textContent =  studentObj.birthday + ' ' + '(' + age + ' лет )';
    bDay.classList.add('student__data-section', 'col-md-3');
    let edStart = document.createElement('span');
    let course = today.getFullYear() - studentObj.studyStart;
    let courseData = course > 4 ? ' (Закончил)': ' (' + course + ' курс)';
    edStart.textContent = studentObj.studyStart + courseData;
    edStart.classList.add('student__data-section', 'col-md-3');
    let faculty = document.createElement('span');
    faculty.textContent = studentObj.faculty;
    faculty.classList.add('student__data-section', 'col-md-3');
    
    studentInfo.append(nameInfo);
    studentInfo.append(bDay);
    studentInfo.append(edStart);
    studentInfo.append(faculty);
    return studentInfo;

}

// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

function renderStudentsTable(studentsList) {

    for(let student of studentsList){
        
        container.append(getStudentItem(student));

    }

}

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.


// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
