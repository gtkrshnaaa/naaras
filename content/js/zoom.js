// fitting body into zoom
function setZoomFactor() {
// Mendapatkan lebar body dengan penambahan 3px
const bodyWidth = document.body.clientWidth + 3;

// Mendapatkan lebar jendela browser
const windowWidth = window.innerWidth;

// Menghitung faktor zoom
const zoomFactor = windowWidth / bodyWidth;

// Mengatur zoom browser
document.body.style.zoom = zoomFactor;
}

document.addEventListener('DOMContentLoaded', setZoomFactor);

window.addEventListener('resize', function() {
setZoomFactor();
});

