
// FILTERS

function initializeFilters() {//Ces variables stockent les valeurs actuelles des filtres
    let activeCategory = 'all';
    let activeFormat = 'all';
    let activeSortByDate = 'all';

    document.getElementById('categories').value = activeCategory;
    document.getElementById('formats').value = activeFormat;
    document.getElementById('sort-by-date').value = activeSortByDate;

    function areFiltersActive() {
 //vérifier si l'un des filtres est actif (différent de 'all'). Retourne true si au moins un filtre est actif, sinon false       
        return activeCategory !== 'all' || activeFormat !== 'all' || activeSortByDate !== 'all';
    }

    //Sélectionner tous les éléments avec les IDs categories, formats, et sort-by-date
    //et ajouter un gestionnaire d'événements change à chacun
    //Lorsque l'un de ces éléments change, la fonction ajaxFilter est appelée
    document.querySelectorAll('#categories, #formats, #sort-by-date').forEach(function(element) {
        element.addEventListener('change', function() {
            ajaxFilter();
        });
    });

    function ajaxFilter() {
        //sélectionner les valeurs actuelles des filtres categories, formats, et sort-by-date.
        let category = document.getElementById('categories').value;
        let format = document.getElementById('formats').value;
        let sortByDate = document.getElementById('sort-by-date').value;

        //Mettre à jour les variables activeCategory, activeFormat, et activeSortByDate avec les nouvelles valeurs des filtres
        activeCategory = category;
        activeFormat = format;
        activeSortByDate = sortByDate;

        //Si au moins un des filtres est actif, cache le bouton "Load More"
        if (areFiltersActive()) {
            document.getElementById('load-more').style.display = 'none';
        }

        //Créer une nouvelle requête XMLHttpRequest
        const xhr = new XMLHttpRequest();
        //la configurer pour envoyer une requête POST asynchrone à l'URL spécifiée
        xhr.open('POST', './wp-admin/admin-ajax.php', true);
        //Définir l'en-tête de la requête pour indiquer que les données sont envoyées sous forme application/x-www-form-urlencoded
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        xhr.onreadystatechange = function() {
        //Déclarer une fonction de rappel pour gérer les changements d'état de la requête.
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {//Si la requête est terminée et a réussi (statut 200)
                    const response = xhr.responseText;// parser la réponse
                    //et mettre à jour le contenu de l'élément avec la classe gallery-container.
                    document.querySelector('.gallery-container').innerHTML = response;

                    //Si aucun filtre n'est actif, affiche le bouton "Load More
                    if (!areFiltersActive()) {
                        document.getElementById('load-more').style.display = 'block';
                    }
                }
            }
        };
//Construire les paramètres de la requête en encodant les valeurs des filtres, puis envoiyer la requête avec ces paramètres.
        const params = `action=ajaxFilter&category=${category}&format=${format}&sortByDate=${sortByDate}`;
        xhr.send(params);
    }
}

// Initialize the filters
initializeFilters();