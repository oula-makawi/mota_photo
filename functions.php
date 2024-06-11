<?php
// Fonction pour charger les styles et scripts du thème parent et du thème enfant
function twentytwenty_child_enqueue_styles() {
    // Styles du thème parent
    wp_enqueue_style('twentytwenty-style', get_template_directory_uri() . '/style.css');

    // Styles du thème enfant
    wp_enqueue_style('twentytwenty-child-style', get_stylesheet_directory_uri() . '/style.css', array('twentytwenty-style'), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'twentytwenty_child_enqueue_styles');

