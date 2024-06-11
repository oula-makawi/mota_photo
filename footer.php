

<footer>
    <div class="modal-overlay">    
            <?php get_template_part('assets/template-parts/contact-form'); ?>
        </div>
        <?php get_template_part('assets/template-parts/lightbox'); ?>
        <?php wp_nav_menu(array('theme_location' => 'footer')); ?>    
    </footer>
    <?php wp_footer(); ?>
</body>
</html>