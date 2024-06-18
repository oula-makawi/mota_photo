// Menu nav burger
function initializeMenu() {
    // Sélection des éléments du DOM
    const menuBurger = document.querySelector("#menu_burger");
    const openBtn = document.querySelector("#openBtn");
    const closeBtn = document.querySelector("#closeBtn");
// Ajout des écouteurs d'événements pour les boutons d'ouverture et de fermeture du menu
    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
// Fonction pour ouvrir le menu
    function openMenu() {
        menuBurger.classList.add("active");// Ajout de la classe "active" pour afficher le menu
    }
// Fonction pour fermer le menu
    function closeMenu() {
        menuBurger.classList.remove("active");// Suppression de la classe "active" pour masquer le menu
    }
}


    
    
