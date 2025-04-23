
// ------------------------------------------------------------------------
//        Script para Pestañas (tabs) en las páginas de los relatos
// ------------------------------------------------------------------------


// seleccionar todos los elementos que tengan la clase tab y contenido
const listaTabs = document.querySelectorAll(".tab");
const listaBloques = document.querySelectorAll(".contenido");

// para cada item de la lista de tabs
listaTabs.forEach((tab, idx) => {
    // console.log(tab);
    // posición lista de Tabs
    console.log(listaTabs[idx]);
    console.log(listaBloques[idx]);

    //escuchar si se hace click
    tab.addEventListener("click", () => {
        // a todos los bloques sacamos la clase .abierto 
        listaBloques.forEach((bloque, i) => {
            bloque.classList.remove("abierto");
            listaTabs[i].classList.remove("abierto");
        });


        // y agregamos la clase .abierto al bloque que nos interesa según idx
        listaBloques[idx].classList.add("abierto");
        listaTabs[idx].classList.add("abierto");

    })
});



