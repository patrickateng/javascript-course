const todoList = JSON.parse(localStorage.getItem('todoList')) || [{

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

  saveToStorage()
  
}

function renderTodoList() {

  let todoListHTML = ''

  for (let i = 0; i < todoList.length; i++) {

    const todoObject = todoList[i]
    // const name = todoObject.name   this means the same as the next line
    const {name, dueDate} = todoObject
    // const dueDate = todoObject.dueDate   This line has been included in the object above.
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="
            todoList.splice(${i}, 1)
            renderTodoList()
          ">
          Delete
        </button>
      `

    todoListHTML += html

  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML

}

function saveToStorage() {

  localStorage.setItem('todoList', JSON.stringify(todoList))

}