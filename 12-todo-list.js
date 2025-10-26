const todolist=JSON.parse(localStorage.getItem('todolist'))||[];


renderTodoList();

function renderTodoList(){
  let todoListHTML ='';
  // localStorage.setItem('todolist',JSON.stringify(todolist));

  for(let i=0;i<todolist.length;i++){
    const todoObject=todolist[i];
    // const name=todoObject.name;
    // const dueDate=todoObject.dueDate;
    // const{name}=todoObject;
    // const{dueDate}=todoObject;
    const{name,dueDate}=todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todolist.splice(${i},1);
      localStorage.setItem('todolist',JSON.stringify(todolist));
      renderTodoList();
    "
    class="delete-todo-button">Delete
    </button>
    `;
    todoListHTML += html;

  }


  document.querySelector('.js-todo-list')
  .innerHTML=todoListHTML;
}

// localStorage.setItem('todolist',JSON.stringify(todolist));

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name=inputElement.value;

  const dateInputElement=document.querySelector('.js-due-date-input');
  const dueDate=dateInputElement.value;

  todolist.push({
    // name:name,
    // dueDate:dueDate
    name,
    dueDate
  });

  localStorage.setItem('todolist',JSON.stringify(todolist));
  inputElement.value='';
  renderTodoList();
  
}