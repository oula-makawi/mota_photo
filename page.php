
<!-- //afficher le contenu des pages dans un thème WordPress// -->
<?php
get_header();
?>

	<main id="primary" class="site-main">
		<div class="pages-content">
			<?= get_post_field('post_content', $post->ID) ?>
		</div>
	</main><!-- #main -->

<?php
get_footer();

