const new_task_tag = document.querySelector("#task")
const task_list_tag = document.querySelector("#list")
let tasks = []

if(localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"))}
else{
    tasks = [{ text: "3 Litre Su İç", class: [] , display: ""}]}

const showTasks = () => {
    tasks.forEach( (task) =>{
        let new_task = document.createElement("li")
        let new_span = document.createElement("span")
        new_span.classList = ["close"]
        let new_button = document.createElement("button")
        new_button.innerHTML= "X"
        new_task.innerHTML = `${task.text}`
        new_task.classList = task.class
        new_task.style.display = task.display
        task_list_tag.appendChild(new_task)
        new_task.appendChild(new_span)
        new_span.appendChild(new_button)
        new_button.type = "click"
        new_button.onclick= task_delete
        new_task.onclick= task_status
    })
}

const newElement = () => {
    let task_control = new_task_tag.value
    task_control =task_control.replace(/\s/g, '') // regex for removing whitespaces

    if(!new_task_tag.value || !task_control){
        $("#liveToast-error").toast('show')
    }
    else{
        $("#liveToast-success").toast('show')
        let new_task = document.createElement("li")
        let new_span = document.createElement("span")
        new_span.classList = ["close"]
        let new_button = document.createElement("button")
        new_button.innerHTML= "X"
        new_task.innerHTML = `${new_task_tag.value}`
        task_list_tag.appendChild(new_task)
        new_task.appendChild(new_span)
        new_span.appendChild(new_button)
        new_button.type = "click"
        new_button.onclick= task_delete
        new_task.onclick= task_status
        tasks.push({text:new_task_tag.value, class: [], display: ""})
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    new_task_tag.value = ""
}

const task_status = () => {
    let element = event.target
    element.classList[0]== "checked" ?  element.classList = [] : element.classList = ["checked"]
    tasks.forEach((task) => {
        if(element.innerHTML.indexOf(task.text) != -1){
            if(element.classList[0]== "checked") task.class = ["checked"]
            else task.class = []
        }
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

const task_delete = () => {
    let element= event.target.parentElement.parentElement
    element.style.display = "none"
    tasks.forEach((task) => {
        if(element.innerHTML.indexOf(task.text) != -1) task.display = "none"
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

showTasks()