<?php

class OcalmRestApi {

    public function __construct()
    {
        add_action('rest_api_init', [$this, 'metaFields']);

        add_filter( "rest_work_query", [$this, 'filterRestWorkQuery', 10, 2] );        
    }

    public function metaFields()
  {

    $fields_array = [
      'duree',
      'auteur',
      
    ];

    foreach ($fields_array as $field) {
      register_rest_field(
        'video',
        $field,
        [
          'get_callback' => [$this, 'getMetaCustomFields'],
        ]
      );
    }
  }
  public function getMetaCustomFields($object, $field_name, $request, $type)
  {
    // $object => l'objet (recipe)
    // $field_name => le nom du champ (preparation, temps de cuisson...)
    // var_dump($object);
    return get_post_meta($object['id'], $field_name, true);
  }
  
}