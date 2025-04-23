// ------------------------------------------------------------------------
//          Script para Acordeón en la página de viajar a USA
// ------------------------------------------------------------------------


// seleccionar todos los elementos que tengan la clase acordeon__item
const lista_items = document.querySelectorAll('.acordeon__item');

// para cada item del acordeón
lista_items.forEach(item => {
    //escuchar si se hace click
    item.addEventListener("click", () => {
        // y si ese item tiene la clase open se la quita y si no la tiene se le añade
        item.classList.toggle("open");
    });
});
