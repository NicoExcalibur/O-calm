# o-calm

## Présentation du projet : 
O’Calm est une plateforme de streaming audio et vidéo orientée vers la relaxation, s’adressant à tout type de public. 
- Présentation vidéo du projet : https://youtu.be/sSp3eACAeU0?t=3371

## Définir les besoins et objectifs : 

* afficher des vidéos / pistes audio
* trier par session courte / moyenne / longue
* interface
* gestion des utilisateurs -> login / compte / bdd des utilisateurs 
* inscription -> rôles / admin / qui peut poster un son ou pas 
* pistes à télécharger / hors ligne ? 
* interface utilisateur -> profil (modifier/supprimer) / playlists / favoris

## Fonctionnalités : 

### UTILISATEUR : 
* rechercher son et vidéo
* écouter son et vidéo 
* s’inscrire
* pseudo / mail / mdp
* se connecter
* se déconnecter
* supprimer son compte
* parcourir les catégories sur la page d’accueil
* voir les derniers morceaux et dernières vidéos écoutées/visionnées
* ajouter des vidéos en favoris

## Technos :

 | WORDPRESS:| REACT:|
 |-------------:|----------:|
|  composer     |  router |
|  plugins  |  redux |
|  CPT |  sass |
|  Taxonomies |  axios |
|acf||
|REST API||
|custom table||

### Possibles évolutions : 

* Possibilité de créer des playlists (avec des noms et tout)
* Possibilité de télécharger des pistes (mode hors ligne)
* Possibilité de choisir un avatar pour son compte
* Questionnaire qui va permettre à l’application de proposer un mantra personnalisé
* Possibilité de personnaliser sa page perso
* Possibilité de voir des sons proposés en fonction de ses goûts
* Reprendre son écoute ou son visionnage où l’user en était

## USER STORIES :

* En tant qu’utilisateur je veux : 
* pouvoir me créer un compte en donnant un email, pseudo et mot de passe
* pouvoir me connecter à mon compte en rentrant mon email et mot de passe
* pouvoir me déconnecter en cliquant sur un bouton de déconnexion
* pouvoir supprimer mon compte grâce à un bouton dans le profil et valider la pop-up de validation
* pouvoir écouter des pistes audio en y accédant sur une single page
* pouvoir regarder des vidéos en y accédant sur une single page
* pouvoir mettre en favoris des pistes/vidéos en cliquant sur une icône dans un coin de la vignette
* pouvoir retrouver mes favoris dans un onglet dédié 
* pouvoir parcourir les catégories dans l’onglet “parcourir”
* pouvoir rechercher une piste/vidéo dans l’onglet “parcourir” et dans la barre de recherche rapide de l’accueil
* pouvoir accéder au site sur mobile comme sur ordi/tablette(numérique pas chocolat)
* pouvoir accéder aux pistes/vidéos écoutées récemment sur la page d’accueil

## RÔLES : 
* product owner => *Fidia*
* scrum master => *Manon*
* lead dev back => *Vincent*
* lead dev front => *Axel*
* git master => *Nicolas*
 
