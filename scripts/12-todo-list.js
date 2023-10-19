const todoList = [{

  name: 'make dinner',
  dueDate: '2023-09-16'

}, {

  name: 'wash dishes',
  dueDate: '2023-09-16'

}]

function addKeyDown(event) {

  if (event.key === 'Enter') {

    addTodo()

  }

}


function addTodo() {
  
  const inputElement = document.querySelector('.js-name-input')

  const name = inputElement.value

  const dueDateInputElement = document.querySelector('.js-due-date-input')

  const dueDate = dueDateInputElement.value

  todoList.push({
    // name: name,
    // dueDate: dueDate.   If the property and the variable name are the same we can just
    // type it out once. The lines below do the same as the lines above
    name,
    dueDate
  })

  inputElement.value = ''
  dueDateInputElement.value = ''

  renderTodoList()
  
}

function renderTodoList() {

  let todoListHTML = ''

  todoList.forEach(function(todoObject, index) {
    const {name, dueDate} = todoObject
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="
            todoList.splice(${index}, 1)
            renderTodoList()
          ">
          Delete
        </button>
      `

    todoListHTML += html

  })

  document.querySelector('.js-todo-list').innerHTML = todoListHTML

}