
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

window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector("#parallax__bg");
  
    if (window.innerWidth > 1182) {
      let scrollPos = window.scrollY;
      parallaxBg.style.transform = `translateY(${scrollPos * 0.5}px)`;
    } else {
      parallaxBg.style.transform = 'translateY(0px)';
    }
  });