<?php

class OcalmRestApi {

  public function __construct()
  {
    add_action('rest_api_init', [$this, 'metaFields']);       
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

  // Pas besoin du request et type ??
  public function getMetaCustomFields($object, $field_name, $request, $type)
  {
    return get_post_meta($object['id'], $field_name, true);
  }
}