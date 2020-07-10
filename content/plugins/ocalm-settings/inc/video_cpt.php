<?php

// security to make sure we are in a WP environnement
if (!defined('WPINC')) {
  die;
}

// creation of a POO class in order to create our custom post type
class Video_cpt 
{

  // construct fonction that will be instencied 
    public function __construct()
    {
      add_action('init', [$this, 'create_cpt']);
      add_action('init', [$this, 'create_taxo']);
    }
  
  // declaration of the CPT
    public function create_cpt()
    {
      $labels = [
        'name'               => 'Vidéos',
        'singular_name'      => 'vidéo',
        'menu_name'          => 'oCalm',
        'name_admin_bar'     => 'vidéo',
        'add_new'            => 'Ajouter une vidéo',
        'add_new_item'       => 'Ajouter une nouvelle vidéo',
        'new_item'           => 'Nouvelle vidéo',
        'edit_item'          => 'Editer une vidéo',
        'view_item'          => 'Voir la vidéo',
        'all_items'          => 'Voir toutes les vidéos',
        'search_items'       => 'Rechercher une vidéo',
        'not_found'          => 'Aucune vidéo trouvée',
        'not_found_in_trash' => 'Aucune vidéo trouvée dans la corbeille',
      ];
  
      $args = [
        'label' => 'Vidéos',
        'labels' => $labels,
        'public' => true,
        'hierarchical' => false,
        'show_in_rest' => true,
        'menu_position' => 4,
        'menu_icon' => 'dashicons-video-alt3',
        'supports' => [
          'title',
          'categories',
          'editor',
          'excerpt',
          'thumbnail',
          'custom-fields'
        ],
        'has_archive' => true,
        'rewrite' => [
          'slug' => 'videos',
          'with_front' => true
        ]
  
      ];
      // registration of the CPT
      register_post_type('video', $args);
    }

    // declaration of the category taxonomy
    public function create_taxo()
    {
        $labels = [
            'name'                       => 'Catégories',
            'singular_name'              => 'Catégorie',
            'menu_name'                  => 'Catégories',
            'all_items'                  => 'Toutes les catégories',
            'new_item_name'              => 'Nouvelle catégorie',
            'add_new_item'               => 'Ajouter une catégorie',
            'update_item'                => 'Mettre à jour une catégorie',
            'edit_item'                  => 'Editer une catégorie',
            'view_item'                  => 'Voir toutes les catégories',
            'separate_items_with_commas' => 'Séparer les catégories avec une virgule',
            'add_or_remove_items'        => 'Ajouter ou supprimer une catégorie',
            'choose_from_most_used'      => 'Choisir parmis les catégories les plus utilisées',
            'popular_items'              => 'Catégories populaires',
            'search_items'               => 'Rechercher une catégorie',
            'not_found'                  => 'Aucune catégorie trouvée',
            'items_list'                 => 'Lister les catégories',
        ];

        $args = [
            'labels'        => $labels,
            'hierarchical'  => true,
            'public'        => true,
            'show_in_rest'  => true,
            'rewrite' => array( 'slug' => 'video_categorie' ),
            'rest_base'          => 'video_categorie',
            'rest_controller_class' => 'WP_REST_Terms_Controller',
        ];
        // registration of the taxo
        register_taxonomy('categorie', 'video', $args);


        // declaration of the author taxonomy
        $labels = [
            'name'                       => 'Auteurs',
            'singular_name'              => 'Auteur',
            'menu_name'                  => 'Auteurs',
            'all_items'                  => 'Tous les auteurs',
            'new_item_name'              => 'Nouvel auteur',
            'add_new_item'               => 'Ajouter un auteur',
            'update_item'                => 'Mettre à jour un auteur',
            'edit_item'                  => 'Editer un auteur',
            'view_item'                  => 'Voir tous les auteurs',
            'separate_items_with_commas' => 'Séparer les auteurs avec une virgule',
            'add_or_remove_items'        => 'Ajouter ou supprimer un auteur',
            'choose_from_most_used'      => 'Choisir parmis les auteurs les plus utilisés',
            'popular_items'              => 'Auteurs populaires',
            'search_items'               => 'Rechercher un auteur',
            'not_found'                  => 'Aucun auteur trouvé',
            'items_list'                 => 'Lister les auteurs',
            'items_list_navigation'      => 'Lister les auteurs',
        ];

        $args = [
            'labels'            => $labels,
            'hierarchical'      => false,
            'public'            => true,
            'show_in_rest'  => true,
            'rewrite' => array( 'slug' => 'video_auteur' ),
            'rest_base'          => 'video_auteur',
            'rest_controller_class' => 'WP_REST_Terms_Controller',
        ];
        // registration of the taxo
        register_taxonomy('auteur', 'video', $args);


        // declaration of the time taxonomy
        $labels = [
          'name'                       => 'Durées',
          'singular_name'              => 'Durée',
          'menu_name'                  => 'Durées',
          'all_items'                  => 'Tous les durées',
          'new_item_name'              => 'Nouvelle durée',
          'add_new_item'               => 'Ajouter une durée',
          'update_item'                => 'Mettre à jour une durée',
          'edit_item'                  => 'Editer une durée',
          'view_item'                  => 'Voir toutes les durées',
          'separate_items_with_commas' => 'Séparer les durées avec une virgule',
          'add_or_remove_items'        => 'Ajouter ou supprimer une durée',
          'choose_from_most_used'      => 'Choisir parmis les durées les plus utilisés',
          'popular_items'              => 'Durées populaires',
          'search_items'               => 'Rechercher une durée',
          'not_found'                  => 'Aucune durée trouvée',
          'items_list'                 => 'Lister les durées',
          'items_list_navigation'      => 'Lister les durées',
      ];

      $args = [
          'labels'            => $labels,
          'hierarchical'      => false,
          'public'            => true,
          'show_in_rest'  => true,
          'rewrite' => array( 'slug' => 'video_duree' ),
          'rest_base'          => 'video_duree',
          'rest_controller_class' => 'WP_REST_Terms_Controller',
      ];
      // registration of the taxo
      register_taxonomy('duree', 'video', $args);
    }

    // for each activation and deactivation, we rewrite the url rules
    public function activation()
    {
        $this->create_cpt();
        $this->create_taxo();

        flush_rewrite_rules();
    }

    public function deactivation()
    {
        flush_rewrite_rules();
    }
 
}



