const todoList = []

function addTodo() {

  const inputElement = document.querySelector('.js-todo-list-input')

  const name = inputElement.value

  todoList.push(name)

  console.log(todoList)

  inputElement.value = ''

  renderTodoList()

}

function renderTodoList() {

  let todoListHTML = ''

  for(let i = 0; i < todoList.length; i++) {

    const name = todoList[i]

    const html = `
      <p>${name} <button onclick="
    
      todoList.splice(${i}, 1)
      renderTodoList()
      ">
      Delete
      </button>
      </p>
      `

    todoListHTML += html

  }

  document.querySelector('.js-todo-List-output').innerHTML = todoListHTML

}