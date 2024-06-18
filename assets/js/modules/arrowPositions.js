function initializeArrowPositions() {
    // Sélectionner tous les éléments avec la classe "arrow-left"et "arrow-right"
    var arrowLeft = document.querySelectorAll('.arrow-left');
    var arrowRight = document.querySelectorAll('.arrow-right');

    if (arrowLeft.length && !arrowRight.length) {
        arrowLeft.forEach(function(element) {
            element.addEventListener('mouseover', handleArrowMouseOver);
            element.addEventListener('mouseout', handleArrowMouseOut);
        });
    }

    function handleArrowMouseOver() {
        var thumbnailLeft = document.querySelector('.hover-thumbnail.thumbnail-left');
        if (thumbnailLeft) {
            thumbnailLeft.style.display = 'block';
            thumbnailLeft.style.top = '-80px';
            thumbnailLeft.style.left = '-55px';
        }
    }

    function handleArrowMouseOut() {
        var thumbnailLeft = document.querySelector('.hover-thumbnail.thumbnail-left');
        if (thumbnailLeft) {
            thumbnailLeft.style.display = 'none';
        }
    }
}