<?php

class Add_favorite {

  public function __construct()
  {
    add_action('rest_api_init', [$this, 'favorite_endpoint']);
  }

  public function favorite_endpoint($request) {
      register_rest_route('ocalm-settings/v1', 'video/favorite', [
        'methods' => 'POST',
        'callback' => [$this, 'get_favorite']
      ]);
  }

  public function get_favorite($request = null) {
    
    $response = [];
    $parameters = $request->get_json_params();
    $user_id = intval($parameters['user_id']);
    $post_id = intval($parameters['post_id']);
    $data = array( $user_id, $post_id); 
    
    $response = new WP_REST_Response( $data );

    $this->insert($user_id, $post_id, $response);
    return $response;
    
  }
  // https://developer.wordpress.org/reference/classes/wpdb/
  public function insert($user_id, $post_id, $response) { 

    global $wpdb;
    //https://developer.wordpress.org/reference/classes/wpdb/#top

    $this->wpdb = $wpdb;
    $this->table = $wpdb->prefix . 'favorites';
    
    $wpdb->insert( 
      $this->table, 
      array( 
        'user_id' => $user_id, 
        'post_id' => $post_id
      ), 
      array( 
        '%d', 
        '%d' 
      ) 
    );
    return new WP_REST_Response($response, 200);
  }


  public function custom_table()
  {
      global $wpdb;

      $this->wpdb = $wpdb;
      $this->table = $wpdb->prefix . 'favorites';

      $sql = "CREATE TABLE {$this->table} (
      `id` INT NOT NULL AUTO_INCREMENT,
      `user_id` INT NOT NULL,
      `post_id` INT NOT NULL, 
      PRIMARY KEY (id)
      );";
          
      $this->wpdb->query($sql);
  }

  // function that drop the custom_table
  public function custom_table_uninstall()
  { 
      global $wpdb;

      $this->wpdb = $wpdb;
      $this->table = $wpdb->prefix . 'favorites';
      
      $sql = "DROP TABLE {$this->table};";

      $this->wpdb->query($sql);
  }

  // callbacks
  public function activation()
  {
      $this->custom_table();
  
  }

  public function deactivation()
  {
      $this->custom_table_uninstall();
  }
}