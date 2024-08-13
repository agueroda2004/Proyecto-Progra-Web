$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tenisId = urlParams.get("id");
        
    if (tenisId) {
        // Supongamos que 'tenis' es una lista de tenis cargada globalmente
        // O podrías hacer una solicitud AJAX para obtener el tenisItem basado en tenisId
        const tenisItem = tenis.find(item => item._id == tenisId);

        if (tenisItem) {
            $('#tenisImage1').attr('src', tenisItem.image1);
            $('#tenisImage2').attr('src', tenisItem.image2);
            $('#tenisName').html(`<span class="texto__ubicacion">${tenisItem.categories} | Hombre | ${tenisItem._id}</span> <br><br> ${tenisItem.name}`);
            $('#tenisPrice').html(`<span class="texto__precio">${tenisItem.price}</span>`);
            $('#tenisStock').text("Stock: " + tenisItem.Stock);
            $('#tenisDisponibilidad').text(tenisItem.Disponible || "En línea / Tienda");
            $('#tenisDescripcion').html(`<p>${tenisItem.Descripcion}</p>`);
            
            if (tenisItem.reviews && tenisItem.reviews.length > 0) {
                tenisItem.reviews.forEach(review => {
                    $('#tenisReviews').append(`
                        <div class= "Contenedor_resenna">
                            <strong>${review.user}</strong> (${review.rating} estrellas):
                            <p>${review.comment}</p>
                        </div>
                    `);
                });
            }
        } else {
            console.log('Tenis no encontrado');
        }
    } else {
        console.log('ID de tenis no proporcionado');
    }
});

document.getElementById('menuButton').addEventListener('click', function () {
    document.getElementById('Menu').classList.toggle('open');
});

document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('Menu').classList.remove('open');
});

