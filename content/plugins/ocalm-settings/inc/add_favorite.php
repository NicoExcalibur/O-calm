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

    register_rest_route('ocalm-settings/v1', 'video/favorite', [
      'methods' => 'DELETE',
      'callback' => [$this, 'delete_favorite']
    ]);
  }
  public function get_favorite ()
  {
    // we retrieve all the favs from the user
    if (is_user_logged_in()) {
   
      global $wpdb;

      $this->wpdb = $wpdb;
      $this->table = $wpdb->prefix . 'favorites';
      $user_id = get_current_user_id();

        // we retrieve an array of objects
      $favs = $wpdb->get_results("SELECT * FROM {$this->table} WHERE user_id={$user_id}");  // ici on a une tab avec id, post_id, user_id ? ok

      if (!empty($favs)) {
        $myFav = [];
        
        foreach ($favs as $fav) {
          $myFav[] = $fav->post_id; // la on a le post_id on veut rajouté le id dans oui c fabio on a fait ça hier fid      comment le ID fav on le rajouté là ici, oui style $fav->id faut juste rajouté le id. oui mais comment rajouter plusieurs entré non
        }

        //print_r($myFav); die();
        // we send the posts with their id
        $args = array(
          'posts_per_page' => 100,
          'post_type' => 'video',
          'post__in' => $myFav);

        $posts = get_posts($args);
        return $posts;
      } 

    //print_r($result);
    }
  }
  
  public function add_favorite($request = null) {
    // faire un if pour dire si on est connecté
    if (is_user_logged_in()) {
      global $wpdb;
    
      $this->wpdb = $wpdb;
      $this->table = $wpdb->prefix . 'favorites';
      $response = [];
      $parameters = $request->get_json_params();
      $user_id = get_current_user_id();
      $post_id = intval($parameters['post_id']);
      $data = array( $user_id, $post_id);
     
      $verifyFav = $wpdb->get_results("SELECT * FROM {$this->table} WHERE user_id={$user_id} AND post_id={$post_id}");

     //print_r($verifyFav); die(); // ici 
      



      if(empty($verifyFav)) {
          if ($post_id !== 0) {
             $response = new WP_REST_Response($data, 200);
              $this->insert($user_id, $post_id, $response);
          } else {
              $response = new WP_REST_Response('Le favori ne s\'est pas enregisté', 400);
          }
      } else {
        $response = new WP_REST_Response('Vous avez déjà ce favori', 400);
      }

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

  public function delete_favorite($request = null)
  {
    
    $parameters = $request->get_json_params();
    $post_id = intval($parameters['post_id']);

    global $wpdb;
    
    $this->wpdb = $wpdb;
    $this->table = $wpdb->prefix . 'favorites';
    $user_id = get_current_user_id();

    $delFav = $wpdb->get_results("DELETE FROM {$this->table} WHERE user_id={$user_id} AND post_id={$post_id}");
    return $delFav; 
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

  // function that drop(delete) the custom_table
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