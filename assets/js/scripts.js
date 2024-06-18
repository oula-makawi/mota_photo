console.log("Script chargé");


document.addEventListener('DOMContentLoaded', function() {
    // Vide le stockage local du navigateur
    localStorage.clear();
    // Initialise le menu de navigation burger
    initializeMenu();
    // Initialise la modal
    initializeModal();
    // Initialise les positions des flèches
    initializeArrowPositions();
    // Initialise Select2
    initializeSelect2();
    // Initialise les filtres
    initializeFilters();
    // Initialise le chargement supplémentaire
    initializeLoadMore();
    // Initialise la lightbox
    initializeLightbox();


});

