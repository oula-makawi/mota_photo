
// FILTERS

jQuery(document).ready(function($) {
    function initializeFilters() {
        // Définir les filtres par défaut comme "all"
        let activeCategory = 'all';
        let activeFormat = 'all';
        let activeSortByDate = 'all';

        // Initialiser les valeurs des filtres dans les éléments HTML
        $('#categories').val(activeCategory);
        $('#formats').val(activeFormat);
        $('#sort-by-date').val(activeSortByDate);

        // Vérifie si au moins un des filtres est actif
        function areFiltersActive() {
            return activeCategory !== 'all' || activeFormat !== 'all' || activeSortByDate !== 'all';
        }

        // Ajouter un événement 'change' aux éléments de filtre
        $('#categories, #formats, #sort-by-date').on('change', function() {
            ajaxFilter();
        });

        // Fonction pour exécuter la requête Ajax lorsque les filtres changent
        function ajaxFilter() {
            // Récupérer les valeurs actuelles des filtres
            let category = $('#categories').val();
            let format = $('#formats').val();
            let sortByDate = $('#sort-by-date').val();

            // Mettre à jour les variables de filtres actifs
            activeCategory = category;
            activeFormat = format;
            activeSortByDate = sortByDate;

            // Masquer le bouton "Load More" si un filtre est actif
            if (areFiltersActive()) {
                $('#load-more').hide();
            }

            // Récupérer le nonce pour la sécurité
            const nonce = $('#my-ajax-nonce').val();

            // Définir les paramètres de la requête Ajax
            const params = {
                action: 'ajaxFilter',
                category: category,
                format: format,
                sortByDate: sortByDate,
                nonce: nonce
            };

            // Exécuter la requête Ajax
            $.ajax({
                url: myAjax.ajaxurl,
                method: 'POST',
                data: params,
                dataType: 'html', // Spécifier que la réponse attendue est du HTML
                success: function(response) {
                    // Mettre à jour le contenu de la galerie avec la réponse HTML
                    $('.gallery-container').html(response);

                    // Afficher le bouton "Load More" si aucun filtre n'est actif
                    if (!areFiltersActive()) {
                        $('#load-more').show();
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Afficher un message d'erreur en cas de problème avec la requête Ajax
                    console.error("Ajax failed:", textStatus, errorThrown);
                }
            });
        }
    }

    // Initialiser les filtres
    initializeFilters();
});
