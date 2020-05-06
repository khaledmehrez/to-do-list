let dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
//

let button = document.getElementById("btn");
let buttonN  =document.getElementById("btnn");

function add(){
    console.log('55')
    
    let CREATE = document.createElement("li");
    let valu = document.getElementById("input").value;
    
    let text = document.createTextNode(valu)
    CREATE.appendChild(text);
     if(valu!=""){
    document.getElementById("List").appendChild(CREATE)
    document.getElementById("List").style.display = "block";}
    
    else 
    alert("Hello! please enter your to-do");
    
}
function deletee(){
   console.log('55')
    document.getElementById("List").style.display = "none";
}


button.addEventListener("click", add)
buttonN.addEventListener("click", deletee)



