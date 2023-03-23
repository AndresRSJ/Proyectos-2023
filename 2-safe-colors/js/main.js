const containerColor = document.getElementById("container__colors");

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


createTable()

function createTable(){
    const fragment = document.createDocumentFragment();
    for(let i=0; i<safeColor.length; i++){
        const elemColor = document.createElement("div");
        elemColor.classList.add("container__color");
        elemColor.textContent = safeColor[i];
        elemColor.style.backgroundColor = safeColor[i];

        fragment.appendChild(elemColor);
    }

    containerColor.appendChild(fragment);
}


containerColor.addEventListener("click", (ev)=>{
    navigator.clipboard.writeText(ev.target.innerHTML);
    console.log(ev)

})

