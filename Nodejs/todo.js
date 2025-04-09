const fs = require('fs');
const fileName = "./NodeJS/todo.json";


function loadfiletask(){
    try{
    const databuffer = fs.readFileSync(fileName);
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
    }catch (error)
    {
        return []
    }
}

const saveFileTodo = (tasks) => {
    const databuffer = JSON.stringify(tasks);
    fs.writeFileSync(fileName,databuffer);
}

const addfile = (task) => {
    const tasks = loadfiletask();
    tasks.push({task});
    saveFileTodo(tasks);
    console.log(`Task ${task} added to file`);
}

const listfile = () =>{
    const tasks = loadfiletask();
    tasks.forEach((task,index) => console.log(`${index +1} - ${task.task}`))
}

function removefile(taskno){
    const tasks = loadfiletask();
    tasks.splice((taskno-1),1)
    saveFileTodo(tasks);

}

const command = process.argv[2];
const arg = process.argv[3];

if(command === "add"){
    addfile(arg);
}else if(command === "list"){
    listfile();
}else if(command === "remove"){
    removefile(arg);
}else{
    console.log("Command Not Found");
}
