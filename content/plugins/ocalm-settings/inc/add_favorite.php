<?php

class Add_favorite {

  public function __construct()
  {
    add_action('rest_api_init', [$this, 'favorite_endpoint']);
  }

  public function favorite_endpoint($request) {
      register_rest_route('ocalm-settings/v1', 'video/favorite', [
        'methods' => 'POST',
        'callback' => [$this, 'add_favorite']
      ]);
      
      register_rest_route('ocalm-settings/v1', 'video/favorite', [
        'methods' => 'GET',
        'callback' => [$this, 'get_favorite']
      ]);
  }
  public function get_favorite ()
  {
      // oui là on dois cherche tout les fav du user
      
      global $wpdb;

      $this->wpdb = $wpdb;
      $this->table = $wpdb->prefix . 'favorites';
      $user_id = get_current_user_id();

      // on récupère un array d'objets
      $favs = $wpdb->get_results("SELECT * FROM {$this->table} WHERE user_id={$user_id}");
      
      $myFav = [];
      foreach ($favs as $fav){
       $myFav[] = $fav->post_id;   
      }

      //print_r($myFav); die();

      $args = array(
        'post_type' => 'video',
        'post__in' => $myFav); 
    
    $posts = get_posts($args);
    return $posts;
      //$favPost = $wpdb->get_results("SELECT * FROM {$wpdb->prefix . 'posts'} WHERE id IN ($myFav)");
      // oui mais je pense qui manque un gros truc lol
      // get_results() renvoit un array
      /*
      $wpdb->get_results( '
      SELECT * 
      FROM wp_favoris 
      WHERE user_id="get_current_user_id()"'
    );  */   
  }
  
  public function add_favorite($request = null) {
    // faire un if pour dire si on est connecté
    if (is_user_logged_in()) {
        $response = [];
        $parameters = $request->get_json_params();
        $user_id = get_current_user_id();
        $post_id = intval($parameters['post_id']);
        $data = array( $user_id, $post_id);
    
        $response = new WP_REST_Response($data);

        $this->insert($user_id, $post_id, $response);
        return $response;
    } 
  }
  // https://developer.wordpress.org/reference/classes/wpdb/
  public function insert($user_id, $post_id, $response) { 

    global $wpdb;
    
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