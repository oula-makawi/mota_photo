<div class="lightbox-container">
    <div id="lightbox" class="lightbox">
       <div class="lightbox__content">
        <!-- */ élément pour afficher la catégorie de l'image ou du contenu affiché dans la lightbox */ -->
            <span class="lightbox__category"></span>
            <span class="lightbox__ref"></span>
            <!-- */Une image représentant un bouton de fermeture pour la lightbox*/     -->      
            <img class="lightbox__close" src="<?php echo get_stylesheet_directory_uri() . '/assets/img/lightbox_crossmark.png'; ?>" alt="croix">
            <span class="lightbox__prev">&#8592; Précédente</span><!--La flèche gauche est représentée par le caractère &#8592  -->
            <div class="lightbox__photoContainer">
            <!-- */l'image sera définie dynamiquement*/ -->
                <img class="lightbox-photo" src="" alt="" >
            </div>
            <!-- */La flèche droite est représentée par le caractère &#8594;*/ -->
            <span class="lightbox__next">Suivante &#8594;</span>
        </div>
    </div>

    