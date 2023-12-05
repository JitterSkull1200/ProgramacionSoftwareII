class Gasto {
    constructor(id, cantidad, categoria, descripcion) {
        this.id = id;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }
}

class ControlGastos{
    constructor(){
        this.gastos = JSON.parse(localStorage.getItem("gastos")) || [];
    }

    agregarGastos(cantidad, categoria, descripcion){
        let nuevoId = 1;
        if(this.gastos.length > 0){
            const ids = this.gastos.map(g => g.id);
            nuevoId = Math.max(...ids)+1;
        }
        const gasto = new Gasto(nuevoId, cantidad, categoria, descripcion);

        this.gastos.push(gasto);

        localStorage.setItem("gastos",JSON.stringify(this.gastos));

        return gasto;

    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(g => g.id !== id);
        localStorage.setItem("gastos",JSON.stringify(this.gastos));
        this.obtenerTotal
    }

    obtenerTotal(){
        let total = 0;
        //this.gastos.forEach(g => total += g.cantidad);
        for (let gasto of this.gastos){
            total += gasto.cantidad;
        }
        return total;
    }

}

const control = new ControlGastos();
const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");

document.addEventListener("DOMContentLoaded",() => {
    for(let gasto of control.gastos){
        actualizarIU(gasto);
    }
    calcularTotal();
});

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;

    const gasto = control.agregarGastos(cantidad, categoria, descripcion);

    actualizarIU(gasto);
});

function actualizarIU(gasto){
    const li = document.createElement("li");
    li.innerHTML = `${gasto.categoria},${gasto.cantidad},${gasto.descripcion}`;

    const boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.onclick = function() {
        control.eliminarGasto(gasto.id);
        lista.removeChild(li);
        calcularTotal();
    };
    li.appendChild(boton);
    lista.appendChild(li);

    calcularTotal();
};

function calcularTotal() {
    const total = document.getElementById("total");

    total.innerHTML = "Total $" + control.obtenerTotal();
}

