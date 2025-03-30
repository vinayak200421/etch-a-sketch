const grid=document.querySelector("#container");
const n=prompt("Enter size of grid");
for(let i=0;i<n*n;i++){
    const div = document.createElement("div");
    div.classList.add("div");
    grid.appendChild(div);
   
    div.onmousemove=()=> div.style.backgroundColor="black";
}

