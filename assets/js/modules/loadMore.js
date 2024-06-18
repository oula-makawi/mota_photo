// LOAD MORE
const loadMore = document.getElementById('load-more');

function initializeLoadMore() {//Déclarer la fonction initializeLoadMore
    let currentPage = 1;// Cette variable suit le numéro de la page actuelle des posts chargés

    loadMore.addEventListener('click', function(event) {
        event.preventDefault();//Empêcher l'action par défaut du clic, qui pourrait être une navigation ou un autre comportement non désiré
        currentPage++;//à chaque clic, on passe à la page suivante des posts

        const xhr = new XMLHttpRequest();//objet Js utilisé pour interagir avec des serveurs via des requêtes HTTP
        //Initialiser une requête POST à l'URL spécifiée
        xhr.open('POST',  './wp-admin/admin-ajax.php', true);//true signifie que la requête est asynchrone
        //Définir l'en-tête HTTP pour la requête, indiquant que les données sont envoyées
        //sous forme application/x-www-form-urlencoded, encodées en UTF-8
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        //Définir une fonction de rappel qui sera exécutée chaque fois que l'état de la requête change
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {//Vérifier si la requête est terminée
                if (xhr.status === 200) {//Vérifier si le statut de la réponse HTTP est 200 (OK), ce qui signifie que la requête a réussi
                    //Analyser le texte de la réponse JSON en un objet JavaScript
                    const response = JSON.parse(xhr.responseText);
                    //Sélectionner l'élément avec la classe gallery-container
                    const galleryContainer = document.querySelector('.gallery-container');
                    //Insèrer le contenu HTML reçu dans la réponse AJAX à la fin du conteneur gallery-container
                    galleryContainer.insertAdjacentHTML('beforeend', response.html);

                    // vérifier s'il y a plus de posts à charger
                    checkIfMorePosts(response);
                }
            }
        };
        //Définir les paramètres à envoyer avec la requête POST(action et numéro de page)
        const params = `action=loadMore&paged=${currentPage}`;
        //Envoiyer la requête avec les paramètres définis
        xhr.send(params);
    });
}
//Déclarer checkIfMorePosts qui prend la réponse de l'AJAX comme paramètre
function checkIfMorePosts(res) {
    //Vérifier si la réponse indique qu'il n'y a plus de posts à charger (has_more_posts est false)
    if (!res.has_more_posts) {
        //cache le bouton loadMore
        loadMore.style.display = 'none';
        //affiche un message dans la console indiquant qu'il n'y a plus de posts
        console.log('Response: Has no more posts');
    } else {
        //bouton loadMore est visible
        loadMore.style.display = 'block';
        //affiche un message dans la console indiquant qu'il y a encore des posts à charger
        console.log('Response: Has more posts');
    }
}
