let addtask = document.getElementById("poppup");
const btn = document.getElementsByTagName("button")

function openpoppup(){
    addtask.classList.add("getinfoopen");
}

function closepoppup(){
    addtask.classList.remove("getinfoopen");
}

btn[0].addEventListener("click", (e) => {
    openpoppup()
})
btn[1].addEventListener("click", (e) => {
    closepoppup()
})