document.addEventListener('DOMContentLoaded', (event) => {
    let musica = document.getElementById('guerraFondo');
    let seccion = document.getElementById('s4');
    let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
        musica.play();
        } else {
        musica.pause();
        }
    });
    }, {threshold: 0.5});
    observer.observe(seccion);
});