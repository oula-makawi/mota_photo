// Déclarez les variables 
let lightbox, closeIcon, prevButton, nextButton;
let currentIndex = 0; // Suivre l'index de la photo actuellement affichée dans la lightbox

function initializeLightbox() {
    // Initialisez les variables à l'intérieur de la fonction pour garantir que le DOM est prêt

    lightbox = document.querySelector(".lightbox");

   /*   élément est utilisé pour fermer la lightbox*/ 
    closeIcon = document.querySelector(".lightbox__close");
    /*Cet élément permet de naviguer vers l'image précédente*/
    prevButton = document.querySelector(".lightbox__prev");
    /* élément permet de naviguer vers l'image suivante*/
    nextButton = document.querySelector(".lightbox__next");

    // Attachez un gestionnaire d'événement de clic à tous les éléments avec la classe "fullsize" dans le document
    document.addEventListener('click', function(event) {
       /* Vérifie si l'élément cliqué (event.target) contient la classe fullsize,le code à l'intérieur du bloc if sera exécuté*/
        if (event.target.classList.contains('fullsize')) {
            openLightbox(event.target.closest('.photo-suggested'));
        }
    });
    // Gestionnaire d'événement de clic à l'icône de fermeture de la lightbox
    closeIcon.addEventListener('click', closeLightbox); 

    // Gestionnaire d'événement de clic au bouton précédent de la lightbox
    prevButton.addEventListener('click', showPreviousPhoto); 

    // Gestionnaire d'événement de clic au bouton suivant de la lightbox
    nextButton.addEventListener('click', showNextPhoto); 

// Fonction appelée lorsque l'utilisateur clique sur une image avec la classe "fullsize"
    function openLightbox(photo) {
        // Récupère les informations de la photo cliquée 
        const photoSrc = photo.getAttribute('data-photo-src');
        const photoRef = photo.getAttribute('data-photo-ref');
        const photoCategory = photo.getAttribute('data-photo-category');
     
        // Met à jour le contenu de la lightbox avec ces informations 
        document.querySelector('.lightbox-photo').setAttribute('src', photoSrc);
        document.querySelector('.lightbox__ref').textContent = photoRef;
        document.querySelector('.lightbox__category').textContent = photoCategory;

        // Mettre à jour l'index de la photo actuelle
        currentIndex = Array.from(document.querySelectorAll(".photo-suggested")).indexOf(photo);
        // Ajoute la classe "active" à la lightbox pour l'afficher
        lightbox.classList.add("active");

    }

    function closeLightbox() {
        // Fonction masque la lightbox en supprimant la classe "active "//
        lightbox.classList.remove("active");

    }

 function showPreviousPhoto() {
        // Met à jour l'index de la photo actuelle pour afficher la photo précédente
        const photos = document.querySelectorAll(".photo-suggested");
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;

        const prevPhoto = photos[currentIndex];

        // Appeler la fonction openLightbox() pour afficher les informations de la photo précédente
        openLightbox(prevPhoto);
    }
    function showNextPhoto() {
        // Met à jour l'index de la photo actuelle pour afficher la photo suivante
        const photos = document.querySelectorAll(".photo-suggested");
        currentIndex = (currentIndex + 1) % photos.length;

        const nextPhoto = photos[currentIndex];

        // Appeler la fonction openLightbox() pour afficher les informations de la photo suivante
        openLightbox(nextPhoto);
    }
}

// Utiliser l'écouteur d'événements DOMContentLoaded pour attendre que le document soit prêt
document.addEventListener('DOMContentLoaded', function() {
    initializeLightbox();
});
