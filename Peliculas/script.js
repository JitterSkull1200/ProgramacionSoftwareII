var editando = false;
var filaEditada = null;
document.getElementById("form_1").addEventListener('submit', function (e) {

    e.preventDefault();

    var pelicula = {
        titulo: document.getElementById("titulo").value,
        anio: document.getElementById("anio").value,
        duracion: document.getElementById("duracion").value,
        generos: document.getElementById("generos").value,
        director: document.getElementById("director").value,
        sinopsis: document.getElementById("sinopsis").value
    }


    if (editando) {
        editarPelicula(pelicula, filaEditada);
    } else {
        agregarPelicula(pelicula);
    }

    this.reset();

});

function agregarPelicula(pelicula) {
    var tbody = document.getElementById("cuerpoTabla");

    var fila = document.createElement("tr");

    for (var key in pelicula) {
        var td = document.createElement("td");
        td.textContent = pelicula[key];
        fila.appendChild(td);
    }
    var td = document.createElement("td");
    var boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.classList.add('btn', 'btn-danger');
    boton.onclick = function () {
        tbody.removeChild(fila)
    }
    var td = document.createElement("td");
    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add('btn', 'btn-success');
    btnEditar.onclick = function () {
        llenadoFormulario(fila);
        filaEditada = fila;
        editando = true;
    }
    td.appendChild(boton);
    td.appendChild(btnEditar);
    fila.appendChild(td);
    tbody.appendChild(fila);

}
function llenadoFormulario(fila) {
    document.getElementById("titulo").value = fila.children[0].innerHTML;
    document.getElementById("anio").value = fila.children[1].innerHTML;
    document.getElementById("duracion").value = fila.children[2].innerHTML;
    document.getElementById("generos").value = fila.children[3].innerHTML;
    document.getElementById("director").value = fila.children[4].innerHTML;
    document.getElementById("sinopsis").value = fila.children[5].innerHTML;
}
function editarPelicula(pelicula, fila) {
    fila.children[0].innerHTML = pelicula.titulo;
    fila.children[1].innerHTML = pelicula.anio;
    fila.children[2].innerHTML = pelicula.duracion;
    fila.children[3].innerHTML = pelicula.generos;
    fila.children[4].innerHTML = pelicula.director;
    fila.children[5].innerHTML = pelicula.sinopsis;
    editando = false;
    filaEditada = null;
}