<?php

if (!defined('WPINC')) {
  die;
}

class Video_cpt 
{

    public function __construct()
    {
      add_action('init', [$this, 'create_cpt']);
      add_action('init', [$this, 'create_taxo']);
    }
  

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
          'catégorie',
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
      // https://developer.wordpress.org/reference/functions/register_post_type/
      register_post_type('video', $args);
    }


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
          //   'capabilities'      => [
          //     'manage_terms'  => 'edit_videos',
          //     'edit_terms'    => 'edit_videos',
          //     'delete_terms'  => 'delete_videos',
          //     'assign_terms'  => 'edit_videos',
          // ]
        ];

        register_taxonomy('categorie', 'video', $args);

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
            // 'capabilities'      => [
            //     'manage_terms'  => 'edit_videos',
            //     'edit_terms'    => 'edit_videos',
            //     'delete_terms'  => 'delete_videos',
            //     'assign_terms'  => 'edit_videos',
            // ]
        ];

        register_taxonomy('auteur', 'video', $args);
    }

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



