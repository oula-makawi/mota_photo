<?php
/**
 * The template for displaying single posts and pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>

<main id="site-content">
<div class="hero">
<!-- */mettre photo du fond/* -->
<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo_nathalie.png" 
alt="Logo <?php echo bloginfo('name'); ?>">
<h1 class="site-title">PHOTOGRAPHE EVENT</h1>
</div>	

</main><!-- #site-content -->


<?php
get_footer();
