const fechaActual = document.getElementById("fecha");

function mostrar() {
    let fecha = new Date();
    let dia = String(fecha.getDate()).padStart(2, '0');
    let mes = fecha.toLocaleString('es-ES', { month: "long"});
    mes = mes.charAt(0).toUpperCase() + mes.slice(1); // Convertir la primera letra a mayúscula
    let año = fecha.getFullYear();

    return `${dia}/${mes}/${año}`;
}
fechaActual.textContent = mostrar();


function nombreMes() {
    let fecha = new Date();
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let mesActual = meses[fecha.getMonth()];
    return mesActual;
}
const mesActual = document.getElementById("mes");
mesActual.textContent = nombreMes();