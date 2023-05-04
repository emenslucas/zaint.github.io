const elementosAnimar = document.querySelectorAll('.animar-texto');

window.addEventListener('load', () => {
  elementosAnimar.forEach(elemento => {
    elemento.classList.add('activo');
  });
});
