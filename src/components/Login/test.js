/* eslint-disable object-shorthand */
/* eslint-disable func-names */
import '../scss/main.scss';
const axios = require('axios');

const app = {
  baseUri: 'http://localhost/WP-Support-oCooking/',
  jsonUrl: 'wp-json/wp/v2/',
  jwtUrl: 'wp-json/jwt-auth/v1/',
  loginModal: document.querySelector('.loginModal'),
  createRecipeModal: document.querySelector('.createRecipeModal'),
  overlayElement: document.querySelector('.overlay'),

  init: function () {
    console.log('init');
    // Méthode qui contient tous les eventListeners executés au lancement de l'app
    app.initEventListeners();

    // Transformer le <textarea> d'ajout de recette en wysiwyg (avec tinymce)
    tinymce.init({
      selector: '#content',
      plugins: 'link image media',
      // media_filter_html: false
    });

    // Transformer les <textarea> de modification de recette en wysiwyg
    tinymce.init({
      selector: '#edit-content',
      plugins: 'link image',
    });

    // app.openLoginModal();

    app
      .verifyIfUserIsLoggedIn()
      .then(app.loadRecipeList)
      .catch(app.openLoginModal);
  },

  initEventListeners: function () {
    // Fermeture des modals
    const closeModalButtons = document.querySelectorAll('.closeModal');

    // closeModalButtons.forEach(function(closeModalButton){
    //   // console.log(closeModalButton);
    // });

    // Fait exactement la même chose que ci-dessous

    // Avec une expression de fonction fléchée ES6 (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)
    closeModalButtons.forEach((closeModalButton) =>
      closeModalButton.addEventListener('click', app.handleCloseModal)
    );

    // On cible les boutons d'ajout de recette
    const addRecipeButtons = document.querySelectorAll('.addRecipe');
    addRecipeButtons.forEach((addRecipeButton) =>
      addRecipeButton.addEventListener('click', app.handleOpenCreateRecipeModal)
    );

    // On cible le bouton de modification de recette dans la modal "détail recette"
    const seeRecipeModal = document.querySelector('.seeRecipeModal');
    const editRecipeButtonInSeeRecipeModal = seeRecipeModal.querySelector(
      '.editRecipe'
    );
    editRecipeButtonInSeeRecipeModal.addEventListener(
      'click',
      app.handleEditRecipeFromSee
    );

    // On cible le bouton de suppression de recette dans la modal "détail recette"
    const deleteRecipeButtonInSeeRecipeModal = seeRecipeModal.querySelector(
      '.deleteRecipe'
    );
    deleteRecipeButtonInSeeRecipeModal.addEventListener(
      'click',
      app.handleDeleteRecipeFromSee
    );

    // Ecoute de la soumission du formulaire d'ajout de recette
    const createRecipeForm = app.createRecipeModal.querySelector(
      '.createRecipeForm'
    );
    createRecipeForm.addEventListener('submit', app.handleCreateRecipe);

    // Ecouter la soumission du formulaire de modification de recette
    const editRecipeModal = document.querySelector('.editRecipeModal');
    const editRecipeForm = editRecipeModal.querySelector('form');
    editRecipeForm.addEventListener('submit', app.handleEditRecipeFormSubmit);

    // Ecoute de la soumission du formulaire de login
    const loginModalForm = app.loginModal.querySelector('.loginForm');
    loginModalForm.addEventListener('submit', app.handleLoginFormSubmit);

    // Ecoute de la soumission du formulaire de suppression
    const deleteRecipeModal = document.querySelector(
      '.deleteRecipeConfirmationModal'
    );
    const deleteRecipeModalForm = deleteRecipeModal.querySelector('form');
    deleteRecipeModalForm.addEventListener(
      'submit',
      app.handleDeleteRecipeFormSubmit
    );
  },

  verifyIfUserIsLoggedIn: function () {
    // je créé une promesse
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
    const verifyIfUserIsLoggedInPromise = new Promise(function (
      resolve,
      reject
    ) {
      // Si l'utilisateur est connecté
      // (token présent et valide)
      if (app.getToken()) {
        // on vérifie la validité du token
        axios({
          method: 'post',
          url: app.baseUri + app.jwtUrl + 'token/validate',
          headers: { Authorization: 'Bearer ' + app.getToken() },
        })
          // token valide
          .then(resolve)
          // token invalide
          .catch(reject);
      } else {
        // je n'ai pas de token
        reject();
      }
    });

    return verifyIfUserIsLoggedInPromise;
  },

  loadRecipeList: function () {
    app.showOverlay();

    // Permet de récupérer la liste des recettes
    axios({
      method: 'get',
      url: app.baseUri + app.jsonUrl + 'recipe',
      headers: { Authorization: 'Bearer ' + app.getToken() },
      params: {
        status: 'any',
        per_page: 50,
        //...
      },
    })
      .then(function (response) {
        // console.log(app.getResponseRecipe(response));
        const recipesArray = app.getResponseRecipe(response);

        const recipeListContainer = document.querySelector('.recipe-list');
        recipeListContainer.innerHTML = '';

        // on utilise la méthode forEach sur l'array "recipesArray"
        // qui contient la liste des recettes
        // pour chaque item, on appelle la méthode displayRecipeListItem qui récupère la recette courante (callback)
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach
        recipesArray.forEach(app.displayRecipeListItem);

        app.hideOverlay();
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  displayRecipeListItem: function (recipe) {
    // permet d'afficher une recette dans la liste
    // console.log(recipe);

    // 1. On récupère le template d'un élément de la liste des recettes
    const recipeListItemTemplate = document.querySelector(
      '#recipe-list-item-template'
    );
    // console.log(recipeListItemTemplate);

    // 2. On récupère le contenu du <template>
    // Qui est un DocumentFragment (https://developer.mozilla.org/fr/docs/Web/API/DocumentFragment)
    const recipeListItemTemplateContent = recipeListItemTemplate.content;
    // console.log(recipeListItemTemplateContent);

    // 3. On récupère le premier enfant de ce "Document"
    const recipeListItemTemplateContentElement =
      recipeListItemTemplateContent.firstElementChild;
    // console.log(recipeListItemTemplateContentElement);

    // 4. On créé un clone de l'élément
    // + de ses enfants (true)
    const recipeListItem = recipeListItemTemplateContentElement.cloneNode(true);

    // On cible le bouton d'affichage de la recette
    const showRecipeButton = recipeListItem.querySelector('.showRecipe');
    // console.log(showRecipeButton);
    // Puis on pose un eventListener dessus
    showRecipeButton.addEventListener('click', app.handleShowRecipe);

    // On cible le bouton de modification de recette
    const editRecipeButton = recipeListItem.querySelector('.editRecipe');
    // Puis on pose un eventListener
    editRecipeButton.addEventListener('click', app.handleEditRecipe);

    // On cible le bouton de suppression de recette
    const deleteRecipeButton = recipeListItem.querySelector('.deleteRecipe');
    deleteRecipeButton.addEventListener('click', app.handleDeleteRecipe);

    // 5. On modifie le clone
    // On y ajoute un titre
    const recipeListItemTitle = recipeListItem.querySelector('.recipeTitle');
    recipeListItemTitle.innerHTML = recipe.title.rendered;

    // On ajoute un ou des datasets sur notre élément
    // On peut alors y stocker, l'ID, etc...
    // Ce dataset pourra ensuite être exploité pour l'affichage d'une recette, etc...
    // https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/dataset
    recipeListItem.dataset.recipeId = recipe.id;
    recipeListItem.dataset.recipeStatus = recipe.status;
    recipeListItem.dataset.recipeTitle = recipe.title.rendered;

    // 6. On ajoute ce clone comme un enfant de la liste
    const recipeList = document.querySelector('.recipe-list');
    recipeList.appendChild(recipeListItem);
  },

  handleCreateRecipe: function (event) {
    event.preventDefault();

    const createRecipeForm = event.target;

    const createRecipeFormData = new FormData(createRecipeForm);

    const newRecipe = {};

    newRecipe.title = createRecipeFormData.get('title');
    newRecipe.content = tinymce.get('content').getContent();
    newRecipe.preparation = createRecipeFormData.get('preparation-time');
    newRecipe.temps_de_cuisson = createRecipeFormData.get('cooking-time');
    newRecipe.prix = createRecipeFormData.get('cost-per-person');
    newRecipe.status = 'publish';

    console.log(newRecipe);

    axios({
      method: 'post',
      url: app.baseUri + app.jsonUrl + 'recipe',
      headers: { Authorization: 'Bearer ' + app.getToken() },
      params: newRecipe,
    })
      .then(app.handleCloseModal(event))
      .then(app.emptyRecipeForm)
      .then(app.loadRecipeList);
  },

  handleEditRecipeFromSee: function (event) {
    // on passe par cette méthode "intermédiaire" pour récupérer l'event du click sur le bouton "détail recette" et donc fermer la modal "détail recette"

    // permet de mettre à jour une recette
    app.handleEditRecipe(event);
    // permet de fermer la modal DE DETAIL D'UNE RECETTE
    app.handleCloseModal(event);
  },

  handleDeleteRecipeFromSee: function (event) {
    // Remplir la modal de suppression
    app.fillDeleteRecipeModal(event);
    // Ouvrir la modal de suppression
    app.openDeleteRecipeModal();
    // Fermer la modal "détail recette"
    app.handleCloseModal(event);
  },

  handleEditRecipe: function (event) {
    // si on est dans une modal
    if (event.target.closest('.modal') != null) {
      var recipeItem = event.target.closest('.modal');
    }
    // sinon, on est dans un <tr> (élément de liste)
    else {
      var recipeItem = event.target.closest('.recipe');
    }

    const recipeId = recipeItem.dataset.recipeId;

    console.log(recipeId);
    // Avec l'ID récupéré, on souhaite éditer la recette

    // 1. Requête axios, methode GET pour récupérer les infos de la recette
    axios({
      method: 'get',
      url: app.baseUri + app.jsonUrl + 'recipe/' + recipeId,
      headers: { Authorization: 'Bearer ' + app.getToken() },
    })
      .then(app.getResponseRecipe)
      // 2. Remplissage de la modal d'édition avec les infos
      .then(app.fillEditRecipeModal)
      // 3. Affichage de la modal
      .then(app.openEditRecipeModal);
  },

  handleEditRecipeFormSubmit: function (event) {
    // 1. Récupérer les données du formulaire
    event.preventDefault();

    const editRecipeForm = event.target;

    const editRecipeFormData = new FormData(editRecipeForm);

    const recipe = {};

    recipe.title = editRecipeFormData.get('title');
    recipe.content = tinymce.get('edit-content').getContent();
    recipe.preparation = editRecipeFormData.get('preparation-time');
    recipe.temps_de_cuisson = editRecipeFormData.get('cooking-time');
    recipe.prix = editRecipeFormData.get('cost-per-person');

    // console.log(recipe);

    const recipeId = editRecipeFormData.get('id');

    // 2. Requête Axios en POST sur LA recette à modifier
    axios({
      method: 'post',
      url: app.baseUri + app.jsonUrl + 'recipe/' + recipeId,
      headers: { Authorization: 'Bearer ' + app.getToken() },
      params: recipe,
    })
      // 3. Fermeture de la modal
      .then(app.handleCloseModal(event))
      // 4. Rechargement de la liste des recettes
      .then(app.loadRecipeList);
  },

  handleShowRecipe: function (event) {
    // Permet d'afficher la modal avec les détails de la recette
    const showRecipeButton = event.currentTarget;
    const recipeListItem = showRecipeButton.closest('.recipe');
    const recipeId = recipeListItem.dataset.recipeId;

    // Permet de récupérer une recette
    axios({
      method: 'get',
      url: app.baseUri + app.jsonUrl + 'recipe/' + recipeId,
      headers: { Authorization: 'Bearer ' + app.getToken() },
    })
      // récupération de l'objet recette à partir de la réponse de l'API
      .then(app.getResponseRecipe)
      // on rempli ensuite la modal avec les infos récupérés
      .then(app.fillSeeRecipeModal)
      // on affiche (on ouvre) la modal
      .then(app.openSeeRecipeModal)
      .catch(function (error) {
        console.log(error);
      });
  },

  handleLoginFormSubmit: function (event) {
    // On annule le comportement par défaut (soumission du form en GET donc rechargement de la page)
    event.preventDefault();
    console.log('soumission du form');
    const loginForm = event.currentTarget;

    // récupérer les données saisies par l'utilisateur (user et password)

    // première méthode
    // console.log(loginForm.querySelector('input[name="username"]').value);
    // console.log(loginForm.querySelector('input[name="password"]').value);

    // deuxième méthode avec FormData
    // https://developer.mozilla.org/fr/docs/Web/API/FormData
    const loginFormData = new FormData(loginForm);
    const loginInfos = {};

    // console.log(loginFormData.get('password'));

    loginInfos.username = loginFormData.get('username');
    loginInfos.password = loginFormData.get('password');

    console.log(loginInfos);

    // requête Axios pour récupérer le token à partir du user / password
    axios
      .post(app.baseUri + app.jwtUrl + 'token', loginInfos)

      // on récupère le token dans la reponse
      .then(app.getResponseToken)

      // on le stock
      .then(app.storeToken)

      // on ferme la modal de login
      .then(app.handleCloseModal(event))

      // on recharge la liste des recettes
      .then(app.loadRecipeList)

      // erreur de login
      .catch(app.loginError);
  },

  handleDeleteRecipe: function (event) {
    // remplissage de la modal de suppression
    app.fillDeleteRecipeModal(event);
    // affichage de la modal de suppression
    app.openDeleteRecipeModal();
  },

  handleDeleteRecipeFormSubmit: function (event) {
    event.preventDefault();

    const deleteForm = event.target;

    const deleteRecipeFormData = new FormData(deleteForm);

    const recipeId = deleteRecipeFormData.get('recipe-id');

    axios({
      method: 'delete',
      url: app.baseUri + app.jsonUrl + 'recipe/' + recipeId,
      headers: { Authorization: 'Bearer ' + app.getToken() },
      params: {
        force: true, // permet de bypasser la corbeille (suppression définitive)
      },
    })
      .then(app.handleCloseModal(event))
      .then(app.loadRecipeList);
  },

  fillDeleteRecipeModal: function (event) {
    // si on est dans une modal
    if (event.target.closest('.modal') != null) {
      var recipeItem = event.target.closest('.modal');
    }
    // sinon, on est dans un <tr> (élément de liste)
    else {
      var recipeItem = event.target.closest('.recipe');
    }

    const recipeId = recipeItem.dataset.recipeId;
    const recipeTitle = recipeItem.dataset.recipeTitle;

    // console.log(recipeId, recipeTitle);

    const deleteRecipeModal = document.querySelector(
      '.deleteRecipeConfirmationModal'
    );
    const deleteRecipeModalTitle = deleteRecipeModal.querySelector(
      '.recipeTitle'
    );
    deleteRecipeModalTitle.innerHTML = recipeTitle;

    const deleteRecipeModalIdInput = deleteRecipeModal.querySelector(
      '.recipeId'
    );
    deleteRecipeModalIdInput.value = recipeId;
  },

  openDeleteRecipeModal: function () {
    const deleteRecipeModal = document.querySelector(
      '.deleteRecipeConfirmationModal'
    );
    deleteRecipeModal.classList.add('is-active');
  },

  fillSeeRecipeModal: function (recipe) {
    const seeRecipeModal = document.querySelector('.seeRecipeModal');

    seeRecipeModal.dataset.recipeId = recipe.id;
    seeRecipeModal.dataset.recipeTitle = recipe.title.rendered;

    // Titre
    const recipeTitleModal = seeRecipeModal.querySelector('.recipeTitle');
    recipeTitleModal.innerHTML = recipe.title.rendered;

    // Contenu
    const recipeContentModal = seeRecipeModal.querySelector('.recipeContent');
    recipeContentModal.innerHTML = recipe.content.rendered;

    // Image
    const recipeImage = seeRecipeModal.querySelector('.recipeImage');
    recipeImage.src = recipe.thumbnail;

    // Temps de préparation
    const recipePreparationTime = seeRecipeModal.querySelector(
      '.recipePreparationTime'
    );
    recipePreparationTime.textContent = recipe.preparation;

    // Temps de cuisson
    const recipeCookingTime = seeRecipeModal.querySelector(
      '.recipeCookingTime'
    );
    recipeCookingTime.textContent = recipe.temps_de_cuisson;

    // Coût par personne
    const recipeCostPerPerson = seeRecipeModal.querySelector(
      '.recipeCostPerPerson'
    );
    recipeCostPerPerson.textContent = recipe.prix;
  },

  decodeHtml: function (html) {
    // méthode permettant de décoder du HTML (par exemple "&rsquo;" => "'")
    // on créé un élément de type textarea
    var txt = document.createElement('textarea');
    // on y colle notre string
    txt.innerHTML = html;
    // on retourne sa valeur
    return txt.value;
  },

  fillEditRecipeModal: function (recipe) {
    const editRecipeModal = document.querySelector('.editRecipeModal');

    // ID dans l'input hidden
    const recipeIdModal = editRecipeModal.querySelector('[name=id]');
    recipeIdModal.value = recipe.id;

    // Titre
    const recipeTitleModal = editRecipeModal.querySelector('#edit-title');
    recipeTitleModal.value = app.decodeHtml(recipe.title.rendered);

    // Contenu
    const recipeContentModal = editRecipeModal.querySelector('#edit-content');
    // recipeContentModal.value = recipe.content.rendered;
    // console.log(recipe.content.rendered);
    tinymce.get('edit-content').setContent(recipe.content.rendered);

    // Temps de préparation
    const recipePreparationTimeModal = editRecipeModal.querySelector(
      '#edit-preparation-time'
    );
    recipePreparationTimeModal.value = recipe.preparation;

    // Temps de cuisson
    const recipeCookingTimeModal = editRecipeModal.querySelector(
      '#edit-cooking-time'
    );
    recipeCookingTimeModal.value = recipe.temps_de_cuisson;

    // Prix par personne
    const recipeCostPerPersonModal = editRecipeModal.querySelector(
      '#edit-cost-per-person'
    );
    recipeCostPerPersonModal.value = recipe.prix;
  },

  emptyRecipeForm: function () {
    const createRecipeForm = document.querySelector('.createRecipeForm');
    createRecipeForm.reset();
    tinymce.get('content').resetContent('');
  },

  handleCloseModal: function (event) {
    // Méthode de fermeture de modal
    // event.target => element sur lequel l'événement se produit
    // event.currentTarget => element sur lequel j'ai posé un écouteur d'événement
    // console.log(event.currentTarget.closest('.modal'));
    const modalToClose = event.currentTarget.closest('.modal');
    modalToClose.classList.remove('is-active');
  },

  handleOpenCreateRecipeModal: function () {
    app.createRecipeModal.classList.add('is-active');
  },

  openEditRecipeModal: function () {
    // Permet d'ouvrir la modal
    const editRecipeModal = document.querySelector('.editRecipeModal');
    editRecipeModal.classList.add('is-active');
  },

  openSeeRecipeModal: function () {
    // Permet d'ouvrir la modal
    const seeRecipeModal = document.querySelector('.seeRecipeModal');
    seeRecipeModal.classList.add('is-active');
  },

  openLoginModal: function () {
    app.loginModal.classList.add('is-active');
  },

  getResponseRecipe: function (response) {
    // Permet de récupérer la partie "data" d'une réponse Axios
    return response.data;
  },

  getResponseToken: function (response) {
    console.log(response);
    return response.data.token;
  },

  getToken: function () {
    return localStorage.getItem('token');
    // on peut aussi utiliser simplement sessionStorage
    // return sessionStorage.getItem('token');
  },

  storeToken: function (token) {
    localStorage.setItem('token', token);
    // on peut aussi utiliser simplement sessionStorage
    // sessionStorage.setItem('token', token);
  },

  loginError: function (error) {
    app.showError(error);
    app.openLoginModal();
  },

  showError: function (error) {
    // console.log(error);
    alert(error);
  },

  showOverlay: function () {
    app.overlayElement.classList.remove('is-hidden');
  },

  hideOverlay: function () {
    app.overlayElement.classList.add('is-hidden');
  },
};

document.addEventListener('DOMContentLoaded', app.init);
