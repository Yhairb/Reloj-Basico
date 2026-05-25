function mostrarHora() {
    const fecha = new Date();

    let horas = String(fecha.getHours()).padStart(2, '0');
    const min = String(fecha.getMinutes()).padStart(2, '0');
    const seg = String(fecha.getSeconds()).padStart(2, '0');

    const ampm = horas >= 12 ? "PM" : "AM";

    horas = horas % 12 || 12; // Convertir a formato de 12 horas
    horas = String(horas).padStart(2, '0');

    return `${horas}:${min}:${seg} ${ampm}`;
}

setInterval(() => {
    reloj.textContent = mostrarHora();
}, 1000);