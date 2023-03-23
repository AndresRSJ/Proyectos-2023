const body = document.getElementById("body"),
      button = document.getElementById("change__color"),
      colorTitle = document.getElementById("color__title");

const R = ["00", "33", "66", "99", "CC", "FF"];
const G = ["00", "33", "66", "99", "CC", "FF"];
const B = ["00", "33", "66", "99", "CC", "FF"];
      
let safeColor = [];
      
for(let r=0; r<R.length; r++){
    for(let g=0; g<G.length; g++){
        for(let b=0; b<B.length; b++){
            safeColor.push("#"+R[r]+G[g]+B[b]);
        }
    }
}

button.addEventListener("click", (ev)=>{
    const colorBody = randomColor(safeColor);
    body.style.backgroundColor = colorBody;
    changeTitleColor(colorBody)
})

function randomColor(colors){
    const index = Math.round(Math.random()*colors.length)
    const color = colors[index];
    return color;
}

function changeTitleColor(color){
   colorTitle.textContent = color;
}

