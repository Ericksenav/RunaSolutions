document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        const formData = new FormData(form);

        // Simulación del envío de datos (aquí puedes integrar tu lógica backend)
        console.log('Nombre:', formData.get('name'));
        console.log('Correo Electrónico:', formData.get('email'));
        console.log('Asunto:', formData.get('subject'));
        console.log('Mensaje:', formData.get('message'));

        // Simulación de éxito
        alert('Formulario enviado con éxito!');

        // Resetea el formulario después de enviar
        form.reset();
    });
});
