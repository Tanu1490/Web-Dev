const todoArray = [] ;


function Add(){
   todoArray.push(document.querySelector('.todo-Input').value);
   console.log(todoArray);
   document.querySelector('.todo-Input').value = '';
}

// let todoListHTML = '';

// function Add2(){
//    todoArray.push(document.querySelector('.todo-Input2').value);
   
  
//    document.querySelector('.todo-Input2').value = '';

//    for(let i = 0; i<todoArray.length;i++){
//     const html = `<p>${todoArray[i]}</p>`;
//     todoListHTML += html;
//    }
//     document.querySelector('.todoTask').innerHTML = todoListHTML; 
// }

