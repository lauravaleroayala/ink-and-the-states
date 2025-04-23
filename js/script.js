
// ------------------------------------------------------------------------
// Script para Pestañas (tabs) en las páginas de los relatos
// ------------------------------------------------------------------------

const listaTabs = document.querySelectorAll(".tab");
const listaBloques = document.querySelectorAll(".contenido");


listaTabs.forEach((tab, idx) => {
    // console.log(tab);
    // posición lista de Tabs
    console.log(listaTabs[idx]);
    console.log(listaBloques[idx]);

    tab.addEventListener("click", () => {
        // a todos los bloques sacamos la clase .abierto 
        listaBloques.forEach((bloque, i) => {
            bloque.classList.remove("abierto");
            listaTabs[i].classList.remove("abierto");
        });


        // y agregamos la clase .abierto al bloque que nos interesa

        listaBloques[idx].classList.add("abierto");
        listaTabs[idx].classList.add("abierto");

    })
});

// ------------------------------------------------------------------------
//     Script para Acordeón en la página de viajar a USA
// ------------------------------------------------------------------------



const lista_items = document.querySelectorAll('.acordeon__item');


lista_items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});



// ------------------------------------------------------------------------
//     Script para efecto Parallax en la img del hero de index.html (Home)
// ------------------------------------------------------------------------

function ParallaxEffect() {
    const parallaxBg = document.querySelector("#parallax__bg");



    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        console.log(scrollPos);
        //mover el fondo
        //velocidad 0.5 significa que se mueve al 50% de la velocidad del scroll
        parallaxBg.style.transform = `translateY(${scrollPos * 0.5}px) `;



    });


}


if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(min-width: 1182px)').matches) {
   // no aplicar efectos de parallax si está en una pantalla pequeña o se ha elegido la opción de reducir animaciones
    console.log("No aplicar parallax");

} else {
    //aplicar efectos de parallax
    ParallaxEffect();
    console.log("Aplicar parallax");
}

