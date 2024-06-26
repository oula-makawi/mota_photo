

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nathalie Mota</title>
    <?php wp_head(); ?>
</head>
<body>
    <?php wp_body_open(); ?>
    <header class="header">
    <div class="header__logo">
            <a href="<?php echo esc_url(home_url('/')); ?>" aria-label="Page d'accueil de Nathalie Mota">
            <img src="<?php echo esc_url(get_stylesheet_directory_uri() . '/assets/img/logo_nathalie.png'); ?>" 
                alt="Logo <?php echo esc_attr(get_bloginfo('name')); ?>">
            </a>

			    </div>        
    <div class="header__navDesktop">
 <!--   */ Affiche le menu "Menu principal"/* -->
            <?php wp_nav_menu(array('theme_location' => 'main')); ?>
    </div>
 
<!-- */Cette section gère la navigation pour les écrans mobiles/* -->
    <div class="header__navMobile">
            <div id="menu_burger" class="nav_burger">
                <div class="navMobile-top">
                  <a href="<?php echo home_url( '/' ); ?>" aria-label="Page d'accueil de Nathalie Mota">
				     <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo_nathalie.png" 
				    alt="Logo <?php echo bloginfo('name'); ?>">
			      </a>
                 <!-- */ Un bouton pour fermer le menu burger/* -->
                  <a id="closeBtn" href="#" class="close">&times;</a>
                </div>
                <!-- */ même menu que pour le bureau, mais ici, il est affiché dans le conteneur de navigation mobile*/ -->
                      
                <?php wp_nav_menu(array('theme_location' => 'main')); ?>
            </div>
            <a href="#" id="openBtn">
          
            <span class="burger-icon">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </span>
        </a>          
           
        </div>

    </header>

























