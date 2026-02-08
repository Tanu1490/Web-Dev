const todoList = [
  {
    task: "make dinner",
    dueDate: "2022-12-5",
  },
  {
    task: "Do dishes",
    dueDate: "2022-10-6",
  },
];

renderTodoList();
function renderTodoList() {
  let todoListHTML = ``;
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const task = todoObject.task;
    // const dueDate = todoObject.dueDate;

    //shortcut for above when property and var name is same

    const { task, dueDate } = todoObject; //can also add both in one place

    const html = `
    <div>${task} </div>
    <div>${dueDate}</div>
    <button class="delete-btn" onClick = "
       todoList.splice(${i},1);
       renderTodoList();
    ">Delete</button>

 `;
    todoListHTML += html;
  }

 
  document.querySelector(".showhtml").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const task = inputElement.value;

  const dateElement = document.querySelector(".date");

  const dueDate = dateElement.value;



  todoList.push({
    // task: task,
    // dueDate: dueDate,

    //when property and value have same name use shorthand property

    task,
    dueDate
  });

  inputElement.value = "";
  renderTodoList();
}
