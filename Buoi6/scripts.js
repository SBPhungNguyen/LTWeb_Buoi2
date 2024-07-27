document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementById('close');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            filterGallery(category);
        });
    });

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        searchGallery(query);
    });

    function filterGallery(category) {
        galleryItems.forEach(item => {
            if (category === 'all') {
                item.style.display = 'block';
            } else {
                item.style.display = item.classList.contains(category) ? 'block' : 'none';
            }
        });
    }

    function searchGallery(query) {
        galleryItems.forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            item.style.display = title.includes(query) ? 'block' : 'none';
        });
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const imgSrc = this.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
        });
    });

    close.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    // Show all images by default
    filterGallery('all');
});
