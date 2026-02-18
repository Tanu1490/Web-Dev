let todoList = [
  {
    task: "make dinner",
    dueDate: "2022-12-5",
  },
  {
    task: "Do dishes",
    dueDate: "2022-10-6",
  },
]; 

// ------------------------------------------
// When loading the page, load from localStorage.

let list_In_LC = localStorage.getItem('todoList');
if(list_In_LC){
  todoList = JSON.parse(list_In_LC);
}


// const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
//   name: 'make dinner',
//   dueDate: '2022-12-22'
// }, {
//   name: 'wash dishes',
//   dueDate: '2022-12-22'
// }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = ``;

  // ------------used forEach instead of for loop
  todoList.forEach(function(todoObject , index){

    const { task, dueDate } = todoObject; 
    const html = `
    <div>${task} </div>
    <div>${dueDate}</div>
    <button class="delete-btn" onClick = "
       todoList.splice(${index},1);
       saveToStorage();
       renderTodoList();
    ">Delete</button>

 `;

    todoListHTML += html;
  })

//   for (let i = 0; i < todoList.length; i++) {
//    const todoObject = todoList[i];
//     // const task = todoObject.task;
//     // const dueDate = todoObject.dueDate;

//     //shortcut for above when property and var name is same

//     const { task, dueDate } = todoObject; //can also add both in one place

//     const html = `
//     <div>${task} </div>
//     <div>${dueDate}</div>
//     <button class="delete-btn" onClick = "
//        todoList.splice(${i},1);
//        saveToStorage();
//        renderTodoList();
//     ">Delete</button>

//  `;

//     todoListHTML += html;
//   }

 
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
  dateElement.value = ""
  renderTodoList();
  saveToStorage();

}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}