const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
let currentImageIndex;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox(img.src, img.alt);
    });
});

function openLightbox(src, alt) {
    lightbox.style.display = 'block';
    lightboxImg.src = src;
    lightboxImg.alt = alt;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        const prevImg = galleryImages[currentImageIndex];
        openLightbox(prevImg.src, prevImg.alt);
    }
}

function nextImage() {
    if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
        const nextImg = galleryImages[currentImageIndex];
        openLightbox(nextImg.src, nextImg.alt);
    }
}
