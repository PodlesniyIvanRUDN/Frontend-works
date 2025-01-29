
( function() {

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
        console.log(typeof id, 'i am tired halp');
        let list = getListData(key);
        console.log('something here', list);

        let tmpList = [];
        for(let i = 0; i < list.length; i++){
            console.log( list[i].id , 'ID left');
            console.log(Number(id), 'ID right');
            if(Number(id) !== list[i].id){
                tmpList.push(list[i]);
                console.log("IT HAPPENED")
            }
        }
        console.log(tmpList.length, 'is cleaned array' );
        console.log(tmpList, 'is array' )
        addToList(key, tmpList)
    }



    //title
    function createAppTitle(title){
        let appTitle = document.createElement('h2')
        appTitle.innerHTML = title;
        return appTitle;
    }

    //form
    function createToDoForm(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');
        button.disabled = 'true';
        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'input your next work';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Add new work';
        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }

    //id
    function getId(){
        let left = 0;
        let right = 2*Math.pow(10,7);
        let range = Math.abs(left-right)
        let RNG_1 = Math.round(Math.random()*range) + Math.min(left,right);
        return RNG_1;
    }

    //item
    function createToDoItem(object){
        let item = document.createElement('li');
        let state = document.createElement('span');

        state.classList.add('status-text')
        state.textContent = (object.status? 'Готово':'Не готово');
        if(object.status){
            item.classList.toggle('list-group-item-success')

        }
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = object.name;
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add ('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить'
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(state);
        item.append(buttonGroup);
        return { item, doneButton, deleteButton,state};
    
    }

    //list
    function createToDoList(){
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createToDoApp(container, title = 'title', key = 'my' ){
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createToDoForm();
        let todoList = createToDoList();
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        todoItemForm.input.addEventListener('input', function(){
            if(todoItemForm.input.value.length !== 0){
                todoItemForm.button.disabled = false;
            }
            else{  todoItemForm.button.disabled = true;}
        });

        let arrayOfTasks = getListData(key);


        for(let task of arrayOfTasks){
            let todoItem =createToDoItem(task);
            
            addToList(key,arrayOfTasks);
            
            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');
                for(let i = 0; i < arrayOfTasks.length; i++){
                    if(arrayOfTasks[i].id === task.id){
                        task.status = !task.status;
                        let statusText = task.status?'Готово':'Не готово';
                        todoItem.state.textContent = statusText;
                    }
                    addToList(key,arrayOfTasks);
                }
                
            });

            todoList.append(todoItem.item);

            todoItem.deleteButton.addEventListener('click', function() {
                if(confirm('U sure bud ?')){
                    let tmpId = todoItem.item.id;
                    removeFromList(key,tmpId);
                    for (let val = 0; val < arrayOfTasks.length; val++){
                        if(arrayOfTasks[val].id === task.id){
                                arrayOfTasks.splice(val,1);
                        }
                    }
                    addToList(key,arrayOfTasks);
                    todoItem.item.remove();
                }
                console.log('processed', arrayOfTasks)
            })
        }
        

        //new segments
        todoItemForm.form.addEventListener('submit', function(e) {

            e.preventDefault();

            if(!todoItemForm.input.value){
                return;
            }

            let object = {
                name:todoItemForm.input.value,
                status:false,
                id: getId( )
            }

            let todoItem =createToDoItem(object);
  
            arrayOfTasks.push(object);
            addToList(key, arrayOfTasks);
            todoList.append(todoItem.item);

            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');
                for(let i = 0; i < arrayOfTasks.length; i++){
                    if(arrayOfTasks[i].id === object.id){
                        object.status = !object.status;
                    }
                    let statusText = object.status?'Готово':'Не готово';
                    todoItem.state.textContent = statusText;
                    addToList(key,arrayOfTasks);
                }
            });

            todoItem.deleteButton.addEventListener('click', function() {
                if(confirm('U sure bud ?')){
                    let tmpId = todoItem.item.id;
                    removeFromList(key,tmpId);
                    for (let val = 0; val < arrayOfTasks.length; val++){
                        if(arrayOfTasks[val].id === object.id){
                                arrayOfTasks.splice(val,1);
                        }
                    }
                    addToList(key,arrayOfTasks);
                    todoItem.item.remove();
                }
                console.log('processed', arrayOfTasks)
            })
 


            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true;

        });

    }

    window.createTodoApp = createToDoApp;

})();