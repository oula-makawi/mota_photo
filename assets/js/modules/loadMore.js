//loadmore

//loadMore = document.getElementById('load-more');
// JavaScript avec jQuery pour gérer le chargement supplémentaire de posts

jQuery(document).ready(function($) {

    const loadMore = $('#load-more'); // Sélectionner le bouton "Load More" par son ID

    function initializeLoadMore() {
        let currentPage = 1; // Variable pour suivre le numéro de la page actuelle des posts chargés

        loadMore.on('click', function(event) {
            event.preventDefault(); // Empêcher l'action par défaut du clic

            currentPage++; // Incrémenter la page à chaque clic

            $.ajax({
                url: ajax_object.ajax_url, // URL vers admin-ajax.php fourni par WordPress
                type: 'POST',
                data: {
                    action: 'loadMore', // Action à appeler dans votre hook PHP
                    paged: currentPage // Numéro de page à charger
                },
                success: function(response) {
                    const data = JSON.parse(response); // Parser la réponse JSON reçue
                    const galleryContainer = $('.gallery-container'); // Sélectionner le conteneur des posts

                    galleryContainer.append(data.html); // Ajouter le contenu HTML des nouveaux posts

                    checkIfMorePosts(data); // Vérifier s'il y a plus de posts à charger
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error); // Afficher l'erreur en cas d'échec de la requête
                }
            });
        });
    }

    function checkIfMorePosts(res) {
        if (!res.has_more_posts) {
            loadMore.hide(); // Masquer le bouton "Load More" s'il n'y a plus de posts à charger
            console.log('No more posts to load.');
        } else {
            loadMore.show(); // Afficher le bouton "Load More" s'il y a encore des posts à charger
            console.log('More posts available.');
        }
    }

    initializeLoadMore(); // Initialiser la gestion du chargement supplémentaire de posts

});

