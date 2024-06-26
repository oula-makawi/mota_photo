// Fonction pour initialiser le comportement de la modale
function initializeModal() {
    // Sélectionner tous les boutons de contact et les éléments du formulaire modale
    const contactBtns = document.querySelectorAll(".menu-item-19 li, .contact-btn");
    const modalForm = document.querySelector(".modal-overlay");
    const formRefDiv = document.querySelector(".wpcf7-form-control-wrap"); // .form ne fonctionne pas

    // Vérifier si les éléments requis sont présents dans le DOM
    if (!modalForm || !formRefDiv ) {
        console.error('Les éléments requis (modalForm ou.. formRefDiv1) ne sont pas trouvés dans le DOM.');
        return;
    }
  
    // Ajouter des écouteurs d'événements click à tous les boutons de contact pour ouvrir le formulaire
    contactBtns.forEach(function(btn) {
        btn.addEventListener('click', openForm);
    });

    // Fonction pour ouvrir le formulaire lorsqu'un bouton de contact est cliqué
    function openForm(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien

        // Obtenir l'élément de contenu de la modale par son ID
        let modalContent = document.getElementById("wpcf7-f6-o1");

        // Vérifier si l'élément de contenu de la modale est présent dans le DOM
        if (!modalContent) {
            console.error('L\'élément modalContent n\'est pas trouvé dans le DOM lors de l\'ouverture du formulaire.');
            return;
        }

        // Obtenir l'élément de valeur de référence à l'intérieur de la modale
        const refValueElement = document.querySelector(".ref-value");

        // Si l'élément de valeur de référence est trouvé, remplir le champ du formulaire
        
        if (refValueElement) {
            const refValue = refValueElement.textContent; // Obtenir le contenu textuel de l'élément de valeur de référence
            const inputField = document.querySelector("input[name='your-subject']"); // Trouver le champ de saisie dans le formulaire
            console.log(inputField );
            // Si le champ de saisie est trouvé, définir sa valeur sur la valeur de référence en majuscules
            if (inputField) {
                inputField.value = refValue.toUpperCase();
            }
        }

        // Rendre la modale visible en ajoutant la classe "active"
        modalForm.classList.add("active");

        // Attacher un écouteur d'événement click pour fermer le formulaire en cliquant à l'extérieur
        document.addEventListener('click', closeFormOutside);

        // Fonction pour fermer le formulaire en cliquant à l'extérieur du contenu de la modale
        function closeFormOutside(event) {
            // S'assurer que modalContent est toujours présent dans le DOM
            if (!modalContent) {
                return;
            }

            // Vérifier si le clic est à l'extérieur du contenu de la modale et pas sur un bouton de contact
            if (!modalContent.contains(event.target) && !Array.from(contactBtns).includes(event.target)) {
                modalForm.classList.remove("active"); // Cacher la modale
                document.removeEventListener('click', closeFormOutside); // Supprimer l'écouteur d'événement
            }
        }
    }
}


// Initialiser le comportement de la modale lorsque le contenu du DOM est complètement chargé
document.addEventListener('DOMContentLoaded', initializeModal);
