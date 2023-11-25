const boton = document.getElementById("agregar");

boton.onclick = function () {
    AddTask();
}

let tareas = [];

function AddTask() {

    let task = document.getElementById("task").value;

    if (task == "") {
        alert("Agregar tarea");
    } else {

        tareas.push(task);
        let list = document.getElementById("lista");

        let li = document.createElement("li");
        li.setAttribute("type", "checkbox");


        li.innerHTML = task;
        li.onclick = function () {
            li.classList.toggle("tachado");
        }
        let btnDelete = document.createElement("button");
        btnDelete.innerHTML = "X"
        btnDelete.classList.add("btn","btn-danger");
        li.appendChild(btnDelete);
        list.appendChild(li);

        document.getElementById("task").value = "";
        console.log(tareas);

        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

}

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem("tareas")){
        tareas = JSON.parse(localStorage.getItem("tareas"));
        tareas.forEach(function(tarea){
            agregarFromStorage(tarea);
        })
    }
})

function agregarFromStorage(tarea){
let lista = document.getElementById('lista');

let li = document.createElement("li");
li.innerHTML = tarea;
li.onclick = function(){
    li.classList.toggle("tachado");
}
lista.appendChild(li);
}