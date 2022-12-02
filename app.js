
function enviar() {

    let nombre = document.getElementById("name").value;
    let edad = document.getElementById("age").value;
    let profesion = document.getElementById("work").value;
    if (edad < 18) {
        alert("El usuario es menor de dad")
    }
}