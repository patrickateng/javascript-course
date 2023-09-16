const todoList = [{

  name: '',
  dueDate: ''

}]

function addKeyDown(event) {

  if (event.key === 'Enter') {

    addTodo()

  }

}

function addTodo() {

  const inputElement = document.querySelector('.js-todo')

  const name = inputElement.value

  const dueDateInput = document.querySelector('.js-todo-dueDate')

  const dueDate = dueDateInput.value

  todoList.push({name, dueDate})

  console.log(todoList)

  inputElement.value = ''

  renderTodoList()


}

function renderTodoList() {

  let todoListHtml = ''

  for (let i = 0; i < todoList.length; i++) {

    const todoObject = todoList[i]

    const {name, dueDate} = todoObject

    const html = `<p>

        ${name} ${dueDate}

          <button class="delete-button" onclick="
        
            todoList.splice(${i}, 1)
            renderTodoList()
        
          ">
            Delete
            
          </button>
    
      </p>`

    todoListHtml += html

  }

  document.querySelector('.js-todo-list').innerHTML = todoListHtml

}