<?php


include_once (get_stylesheet_directory() . '/assets/template-parts/loadMore.php');


// Fonction pour charger les styles et scripts du thème parent et du thème enfant
function twentytwenty_child_enqueue_styles() {
    // Styles du thème parent
    wp_enqueue_style('twentytwenty-style', get_template_directory_uri() . '/style.css');

    // Styles du thème enfant
    wp_enqueue_style('twentytwenty-child-style', get_stylesheet_directory_uri() . '/style.css', array('twentytwenty-style'), wp_get_theme()->get('Version'));

    // Charger jQuery
    wp_enqueue_script('jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js', array(), '3.7.1', true);
// Charger les scripts principaux
    wp_enqueue_script('script', get_stylesheet_directory_uri() . '/assets/js/scripts.js', array('jquery'), null, true);
 
    // Ajouter le style Select2
 wp_enqueue_style('select2-style', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css');
    
 // Ajouter le script Select2
 wp_enqueue_script('select2-script', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js', array('jquery'), null, true);
 
 // Ajouter un script personnalisé pour initialiser Select2 sur les éléments de formulaire
 wp_add_inline_script('select2-script', 'jQuery(document).ready(function($) { $(".selector").select2(); });');

     // Charger les autres scripts nécessaires
        wp_enqueue_script('menu-script', get_stylesheet_directory_uri() . '/assets/js/modules/menu.js', array('jquery'), null, true);
        wp_enqueue_script('modal-script', get_stylesheet_directory_uri() . '/assets/js/modules/modal.js', array('jquery'), null, true);
        wp_enqueue_script('arrow-positions-script', get_stylesheet_directory_uri() . '/assets/js/modules/arrowPositions.js', array('jquery'), null, true);
        wp_enqueue_script('select-2', get_stylesheet_directory_uri() . '/assets/js/modules/select2.js', array('jquery'), null, true);
        wp_enqueue_script('filters', get_stylesheet_directory_uri() . '/assets/js/modules/filters.js', array('jquery'), null, true);
        wp_enqueue_script('load-more', get_stylesheet_directory_uri() . '/assets/js/modules/loadMore.js', array('jquery'), null, true);
        wp_enqueue_script('lightbox', get_stylesheet_directory_uri() . '/assets/js/modules/lightbox.js', array('jquery'), null, true);


          // Localiser les données de script avec wp_localize_script, ce qui permet de passer des variables PHP à mon JavaScript.
    wp_localize_script('modal-script', 'theme_vars', array(  'templateUrl' => get_template_directory_uri()));
    // Localiser le script avec nonce pour la sécurité AJAX
    wp_localize_script('filters', 'myAjax', array( 'ajaxurl' => admin_url('admin-ajax.php'), 'nonce'   => wp_create_nonce('my-ajax-nonce')   ));
    wp_localize_script('load-more', 'ajax_object',
        array('ajax_url' => admin_url('admin-ajax.php'))
    );

}
add_action('wp_enqueue_scripts', 'twentytwenty_child_enqueue_styles');


function add_elements_menus($items, $args) {
    if ($args->theme_location == 'main') { 
        $items .= '<li class="menu-item contact-btn">CONTACT</li>'; // Ajoutez le nouvel élément "CONTACT"
    }
    elseif ($args->theme_location == 'footer') { 
        $items .= '<li class="menu-item"> TOUS DROITS RÉSERVÉS </li>'; // Ajoutez un autre élément au menu de pied de page
    }
    return $items;
}
add_filter('wp_nav_menu_items', 'add_elements_menus', 10, 2);


function my_filter_function() {
    check_ajax_referer('my-ajax-nonce', 'nonce');

    // Votre logique de filtrage ici
    $response_data = 'Contenu filtré'; // Exemple de contenu filtré

    wp_send_json_success($response_data);
}
add_action('wp_ajax_ajaxFilter', 'my_filter_function');
add_action('wp_ajax_nopriv_ajaxFilter', 'my_filter_function');

//enregistrer l'action pour les utilisateurs connectés
add_action('wp_ajax_loadMore', 'loadMore');
//et pour les utilisateurs non connectés 
add_action('wp_ajax_nopriv_loadMore', 'loadMore');

