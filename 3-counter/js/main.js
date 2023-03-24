const counterNum = document.getElementById("counter__number"),
      buttonDec = document.getElementById("counter__decrease"),
      buttonRes = document.getElementById("counter__reset"),
      buttonInc = document.getElementById("counter__increase");

const operations={
    decrease: function(elem){
        let actualizeNum = parseInt(elem.textContent) - 1;
        elem.textContent = actualizeNum;
        changeColor(counterNum);
    },
    reset: function(elem){
        elem.textContent = 0;
        changeColor(counterNum);
    },
    increase: function(elem){
        let actualizeNum = parseInt(elem.textContent) + 1;
        elem.textContent = actualizeNum;
        changeColor(counterNum);
    },
}
    
buttonDec.addEventListener("click", (ev)=>{
    ev.preventDefault();
    changeNumber("decrease", counterNum);
})
buttonRes.addEventListener("click", (ev)=>{
    ev.preventDefault();
    changeNumber("reset", counterNum);
})
buttonInc.addEventListener("click", (ev)=>{
    ev.preventDefault();
    changeNumber("increase", counterNum);
})

function changeNumber(operation, elem){
   operations[operation](elem);
}

function changeColor(elem){
    let actuallyNum = parseInt(elem.textContent);
    if(actuallyNum === 0){
        elem.style.color = "#bfb500";
    }else if(actuallyNum < 0){
        elem.style.color = "#77070b";
    }else{
        elem.style.color = "green";
    }
}
