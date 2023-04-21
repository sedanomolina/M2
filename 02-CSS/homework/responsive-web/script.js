
// Obtener todos los botones de navegación
var navButtons = document.querySelectorAll('.nav-btn');

// Iterar a través de los botones y aplicar la clase enfocada en el botón actual

navButtons.forEach(button => {
    let href = button.getAttribute('href');
    location.href.endsWith(href) && button.classList.add('focado');
})

// ---------------------------------


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('👋 Ahora visitarás mi código en GitHub, en 4, 3, 2,...✨', 'success')
    })
}
// ---------------------------------

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault(); // evitar el comportamiento predeterminado del botón

        // agregar una demora de 3 segundos antes de redirigir a otra página
        setTimeout(() => {
            window.location.href = 'https://github.com/sedanomolina/M2/tree/main/02-CSS/homework/responsive-web';
        }, 3000);
    });
});
