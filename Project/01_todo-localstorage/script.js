document.addEventListener("DOMContentLoaded",() => {
    const todoinput=document.getElementById("todo-input");
    const todolist=document.getElementById("todo-list");
    const addtaskbtn=document.getElementById("add-task-btn");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => readtask(task));

    addtaskbtn.addEventListener("click",() => {
        const tasktext = todoinput.value.trim();
        if (tasktext=="") return;

        const newtask = {
            id: Date.now(),
            text: tasktext,
            completed: false,
        }

        tasks.push(newtask);
        savetasks();
        readtask(newtask);
        todoinput.value="";
        console.log(tasks);

    });

    function readtask(task){
        const li = document.createElement("li");
        li.setAttribute("Data-id",task.id);
        if (task.completed) li.classList.add("completed");
        li.innerHTML =`
            <span>${task.text}</span>
            <button>delete</button>
        `;
        li.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return ;
            task.completed = !task.completed
            li.classList.toggle("completed");
            savetasks(); 
        })
        li.querySelector("button").addEventListener("click", (e) => {
            e.stopPropagation();
            console.log(tasks);
            tasks = tasks.filter((t) => t.id !== task.id);
            li.remove();
            savetasks();
        })
        todolist.appendChild(li);
    }

    function savetasks(){
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
});