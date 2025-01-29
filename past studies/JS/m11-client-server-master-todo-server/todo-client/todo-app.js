
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


    //item
    function createToDoItemElement(object, {onDone,onDelete}){
        let item = document.createElement('li');
        let state = document.createElement('span');

        state.classList.add('status-text')
    //state.textContent = (object.status? 'Готово':'Не готово');
        if(object.done){
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
        deleteButton.textContent = 'Удалить';


        doneButton.addEventListener('click', function() {
            item.classList.toggle('list-group-item-success',object.status);
                onDone({object, element:item});


        });

        deleteButton.addEventListener('click', function() {
            onDelete({object, element:item});
        })



        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(state);
        item.append(buttonGroup);
        return item;
    
    }

    //list
    function createToDoList(){
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    async  function createToDoApp(container, title = 'title', owner ){

        alert(owner);
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createToDoForm();
        let todoList = createToDoList();
        const handlers = {
            onDone({object, element:item}){
                console.log((object));
                object.done = !object.done;
                fetch(`http://localhost:3000/api/todos/${object.id}` , {
                    method:'PATCH',
                    body: JSON.stringify({done: object.done}),
                    headers: {
                        'Content-Type':'application/json',
                    }
                })
            },
            onDelete({object, element}){
                if(!confirm('U sure bud ?')){
                    return;
                }
                element.remove();
                fetch(`http://localhost:3000/api/todos/${object.id}` , {
                    method:'DELETE',
                })
            },
        };
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        const response = await fetch(`http://localhost:3000/api/todos?owner=${owner}`);
        const todoItemList = await response.json();
        console.log(todoItemList.length)
        todoItemList.forEach(todoItem => {
            const todoItemElement = createToDoItemElement(todoItem, handlers);
            todoList.append(todoItemElement);
        });

        //disable input btn
        todoItemForm.input.addEventListener('input', function(){
            if(todoItemForm.input.value.length !== 0){
                todoItemForm.button.disabled = false;
            }
            else{  todoItemForm.button.disabled = true;}
        });
        //


        let arrayOfTasks = getListData(owner);

        //autofill todo's

        ///
        

        //new segments
        todoItemForm.form.addEventListener('submit', async e => {

            e.preventDefault();

            if(!todoItemForm.input.value){
                return;
            }

            const response = await fetch('http://localhost:3000/api/todos', {
                method: 'POST',
                body:JSON.stringify(
                    {
                        name: todoItemForm.input.value.trim(),
                        owner
                    }),
                headers: {
                    'Content-Type':'application/json',
                }
            });

            const todoItem = await response.json();


            let todoItemElement =createToDoItemElement(todoItem, handlers);
  

            todoList.append(todoItemElement);


 


            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true;

        });

    }

    window.createTodoApp = createToDoApp;

})();