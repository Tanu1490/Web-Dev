const todoListArray = [];

function renderTodoList(){
   let todolistHtml = ``;
for(let i = 0 ; i<todoListArray.length ; i++){
   const todo = todoListArray[i];
   const html = `<p>${todo}</p>`;
   todolistHtml += html;

}

console.log(todolistHtml)
document.querySelector('.ListText').innerHTML = todolistHtml;

}

function addTasks(){
  const inputElement = document.querySelector('.js-inputValue');

  todoListArray.push(inputElement.value)

  console.log(todoListArray);

  inputElement.value = '';

  renderTodoList();
}

