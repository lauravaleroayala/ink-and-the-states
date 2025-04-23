
// ------------------------------------------------------------------------
//     Script para efecto Parallax en la img del hero de index.html (Home)
// ------------------------------------------------------------------------


// escuchamos si es usuario hace scroll en la pantalla
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector("#parallax__bg");
    // si el ancho es más grande de 1182 px (igual que media query css)
    if (window.innerWidth > 1182) {
      let scrollPos = window.scrollY;
      //mover el fondo
      //velocidad 0.3 significa que se mueve al 30% de la velocidad del scroll
      parallaxBg.style.transform = `translateY(${scrollPos * 0.3}px)`;
      // si el ancho es más pequeño de 1182 px (igual que media query css)
    } else {
        // ponemos el fondo en su posición original
      parallaxBg.style.transform = 'translateY(0px)';
    }
  });