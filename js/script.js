
//Pestañas estados

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remover la clase 'abierto' de todas las pestañas y contenidos
        tabs.forEach(tab => tab.classList.remove("abierta"));
        contents.forEach(content => content.classList.remove("abierto"));

        // Activar la pestaña y el contenido correspondiente
        tab.classList.add("abierta");
        document.getElementById(`content-${tab.dataset.tab}`).classList.add("abierto");
    });
});