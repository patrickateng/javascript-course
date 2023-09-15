const todoList = [{

  name: 'make dinner',
  dueDate: '2022-09-14'

}, {

  name: 'wash dishes',
  dueDate: '2022-09-14'

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

  console.log(todoList)

  inputElement.value = ''
  dueDateInputElement.value = ''

  renderTodoList()
  
}

function renderTodoList() {

  let todoListHTML = ''

  for (let i = 0; i < todoList.length; i++) {

    const todoObject = todoList[i]
    // const name = todoObject.name   this means the same as the next line
    const {name, dueDate} = todoObject
    // const dueDate = todoObject.dueDate   This line has been included in the object above.
    const html = `
        <P>
          ${name} ${dueDate}
            <button class="" onclick="
              todoList.splice(${i}, 1)
              renderTodoList()
            ">Delete</button>
        </p>
      `

    todoListHTML += html

  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML

}