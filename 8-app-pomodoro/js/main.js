const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.getElementById("bAdd");
const itTask = document.getElementById("itTask");
const form = document.getElementById("form");
const taskName = document.getElementById("taskName");
const timeValue = document.getElementById("value");

renderTime()

form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    if(itTask.value !== ''){
        createTask(itTask.value);
        itTask.value = '';
        renderTask();
    }
})

const createTask = (value)=>{
    const newTask = {
        title: value,
        completed: false
    }

    tasks.unshift(newTask);
}


const renderTask = ()=>{
    const html = tasks.map(task =>{
        return`<div class="task">
            <div class="title-task">${task.title}</div>
            <div class="completed">${task.completed ? `<span class="done">¡Done!</span>`:`<button class="start-button">Start</button>`}
        </div></div>`;
    })

    const tasksContainer = document.querySelector("#tasks");
    tasksContainer.innerHTML = html.join();

    const startButtons = document.querySelectorAll(".start-button");

    startButtons.forEach((button, indexButton) => {
        button.addEventListener("click", ()=>{

            if(!timer && !timerBreak){
                startButtonHandler(indexButton);
                button.textContent = "In progress...";
                changeColorBtn(button);
            }
        })    
    });
}

const startButtonHandler = (buttonInTask)=>{
    time = 25 * 60;
    taskName.textContent = tasks[buttonInTask].title;

    changeColorTimer(time);

    timer = setInterval(()=>{
        timeHandler(buttonInTask);
    }, 1000);
}

const timeHandler = (buttonInTask)=>{
    time--;
    renderTime();

    if(time === 0){
        clearInterval(timer);
        doneTask(buttonInTask);
        timer = null; //Se limpian los timer
        renderTask();
        startBreak(buttonInTask);
    }
}

const startBreak = (buttonInTask)=>{
    time = 5 * 60;
    taskName.textContent = 'Break';

    changeColorTimer(time);

    timerBreak = setInterval(()=>{
        timeBreakHandler(buttonInTask)

    }, 1000)
}

const timeBreakHandler = ()=>{
    time--;
    renderTime();

    if(time === 0){
        clearInterval(timerBreak);
        timerBreak = null; //Se limpian los timer
        taskName.textContent = '';
        renderTask();
    }
}

function renderTime(){
    
        const minutes = parseInt(time / 60);
        const seconds = parseInt(time % 60);
    
        timeValue.textContent = `${minutes<10 ? '0' : ''}${minutes}:${seconds<10 ? '0' : ''}${seconds}`
}

const doneTask= (buttonInTask)=>{
    tasks[buttonInTask].completed = true;
    changeColorTimer(true);
}

function changeColorTimer(value){
    if(time >= 5){
        timeValue.style.color = "#81FF45";
    }else{
        if(time <=5){
            timeValue.style.color= "#3F8CFF";
        }else{
            timeValue.style.color = "#000000d9";
        }
    }
}

function changeColorBtn(btn){
    if(btn.style.backgroundColor !== "#ffb813"){
        btn.style.backgroundColor = "#ffb813";
    }
}