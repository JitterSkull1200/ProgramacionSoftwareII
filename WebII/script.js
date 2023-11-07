document.getElementById("form_1").addEventListener('submit', function (e) {
    alert("Click");

    e.preventDefault();

    var estudiante = {
        nombre: document.getElementById("txtNombre").value,
        apellido: document.getElementById("txtApellido").value,
        correo: document.getElementById("txtCorreo").value,
        edad: document.getElementById("txtEdad").value,
        hobbies: document.getElementById("txtHobbies").value
    }

    agregarEstudiante(estudiante);

    this.reset();

});

function agregarEstudiante(estudiante) {
    var tbody = document.getElementById("tablAlumnos");

    var fila = document.createElement("tr");

    for(var key in estudiante){
        var td = document.createElement("td");
        td.textContent = estudiante[key];
        fila.appendChild(td);
    }    
    var td = document.createElement("td");
    var boton = document.createElement("button");
    boton.textContent = "Eliminar"
    boton.classList.add('btn','btn-danger');
    boton.onclick = function(){
        tbody.removeChild(fila)
    }
    td.appendChild(boton);
    fila.appendChild(td);
    tbody.appendChild(fila);

}