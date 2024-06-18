<?php
get_header();
?>
    <main id="primary" class="site-main">
    <div class="page-content">
         
        <div class="main-content">
            <div class="single-photo-content">
                    <div class="infos-container">
                        <p class=photo-title><?php echo get_the_title()?></p>
                        <p> Référence : <span class="ref-value"><?php echo get_field('reference');?></span></p>                      
                        <p> Catégorie : <?php echo get_the_terms(get_the_ID(), 'categorie')[0]->name; ?></p>                 
                        <p> Format : <?php echo get_the_terms(get_the_ID(), 'format') [0]->name; ?></p>
                        <p> Type : <?php echo get_field('type'); ?></p>
                        <p> Année : <?php echo get_field('date'); ?></p>
                        <div class="line">    
                            <hr>
                        </div>
                    </div>
                <div class="photos-container">
                    <?php if ( has_post_thumbnail() ) : ?>
                      <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="Photographie">
                    <?php else : ?>
                    <p>Aucune image mise en avant trouvée.</p>
                    <?php endif; ?>
                </div>
            </div>
            <div class="contact-content">
                    <div class="contact">
                        <p class="contact-text">Cette photo vous intéresse ?</p>
                        <button class="btn contact-btn">Contact</button>
                    </div>
                    <div class="preview">                    
                        <?php
                        // Récupère les objets des articles précédent et suivant
                        $previouspost = get_previous_post();
                        $nextpost = get_next_post();
                        ?>
                        <div class="arrows">
                            <?php if ($previouspost) : ?>                                
                                <?php
                                // Récupère le champ personnalisé 'photo' pour l'article précédent (si nécessaire)
                                     $previous_photo = get_field('photo', $previouspost->ID); ?>
                                <a href="<?php echo get_permalink($previouspost); ?>" class="arrow-link arrow-left">
                                    <!-- Affiche une flèche pour l'article précédent -->
                                    <img class="arrow arrow-left" src="<?php echo get_template_directory_uri(); ?>/assets/img/arrow-left.svg" alt="Arrow for previous picture">
                                    <div class="hover-thumbnail thumbnail-left">
                                       <!-- Affiche la miniature de l'article précédent -->
                                       <img src="<?php echo get_the_post_thumbnail_url($previouspost->ID, array(81, 71)) ?>" alt="Photo précédente">
                                       <!--Affiche la miniature de la photo du post précédent avec une taille de 81x71 px-->
                                    </div>
                                </a>
                            <?php endif; ?>
                            <?php if ($nextpost) : ?>
                                <?php 
                                // Récupère le champ personnalisé 'photo' pour l'article suivant (si nécessaire)
                                    $next_photo = get_field('photo', $nextpost->ID); ?>
                                <a href="<?php echo get_permalink($nextpost); ?>" class="arrow-link arrow-right">
                                    <!-- Affiche une flèche pour l'article suivant -->
                                    <img class="arrow arrow-right" src="<?php echo get_template_directory_uri(); ?>/assets/img/arrow-right.svg" alt="Arrow for next picture">
                                    <div class="hover-thumbnail thumbnail-right">
                                        <!-- Affiche la miniature de l'article suivant -->
                                        <img src="<?php echo get_the_post_thumbnail_url($nextpost->ID, array(81, 71)) ?>" alt="Photo suivante">
                                    </div>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
            </div>
        </div>
 
    <div class="separator"><!--séparer le contenu visuellement par une ligne horizontale-->
         <hr>
    </div>
    <div>
    <div class="gallery">
                    <p class="you-may-also-like">VOUS AIMEREZ AUSSI</p>
          <div class="gallery-container">
            <?php
             $current_post_id = get_the_ID();//Récupère l'ID de la photo actuelle

             $current_category = get_the_terms($current_post_id, 'categorie');//Récupère les termes de la taxonomie 'categorie' pour la photo actuelle

             if ($current_category && !is_wp_error($current_category)) {//Vérifie si les termes ont été récupérés correctement
             $category_name = $current_category[0]->slug;//Si oui, obtient le slug de la première catégorie
                } else {
                   $category_name = '';//Si non, initialise $category_name à une chaîne vide
                }

             $args = array(//Crée un tableau $args pour les arguments de la requête
                  'post_type' => 'photo',//Spécifie le type de publication (photos)
                  'posts_per_page' => 2,// Limite la requête à 2 photos
                  'orderby' => 'ASC',// Trie les photos par ordre croissant de la saisie à modifier selon le tri par date de prise de vue***
                  'post__not_in' => array($current_post_id),//Exclut la photo actuelle de la requête
                  'tax_query' => array(// Requête basée sur la taxonomie 'categorie' et le slug récupéré
                     array(
                   'taxonomy' => 'categorie',
                   'field' => 'slug',
                   'terms' => $category_name,
                   ),
               ),
            );

            $query = new WP_Query($args);//Exécute la requête avec les arguments définis
            if ($query->have_posts()) {//Vérifie si des photos ont été trouvées
                while ($query->have_posts()) : $query->the_post();//Boucle sur chaque photo trouvée
                   // Inclut le template-part 'photo-block' pour afficher chaque photo
                   get_template_part('assets/template-parts/photo-block');
                endwhile;
            } else {
                  echo '<p> Cette catégorie n\'a pas d\'autres photos. </p>';
            }
            wp_reset_postdata();
            ?>
        </div>

    </div>
   </div>
   <div class="btn-container">
    <a href="<?php echo home_url('/'); ?>"><!--obtenir et imprimer l'URL de la page d'accueil du site WordPress-->
        <span class="btn home-btn">Toutes les photos</span>
    </a>
   </div>
</div>

</main><!-- #main -->
  
<?php
get_footer();
?>