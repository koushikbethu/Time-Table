const todoList=[]
display()

function display(){
  let List=''

  for(let i=0;i<todoList.length;i++){
    const Object=todoList[i]
    const {name,date,time}=Object

    const html=`
      <div>${name}</div>
      <div>${date}</div>
      <div>${time}</div>
      <button onclick="
        todoList.splice(${i},1)
        display()
      " class="delete">Delete</button>
      `
    List += html
  }

  document.querySelector('.js-list').innerHTML=List
}

function addTodo(){
  const inputElement=document.querySelector('.js-name')
  const name=inputElement.value

  const dateElement=document.querySelector('.js-date')
  const date=dateElement.value

  const timeElement=document.querySelector('.js-time')
  const time=timeElement.value

  todoList.push(
    {
      name,date,time
    }
  )

  inputElement.value=''
  dateElement.value=''
  timeElement.value=''
  display()
}