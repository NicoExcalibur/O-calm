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
      // oui là on dois cherche tout les fav du user
      
      global $wpdb;

      $this->wpdb = $wpdb;
      $this->table = $wpdb->prefix . 'favorites';
      $user_id = get_current_user_id();

      // on récupère un array d'objets
      $favs = $wpdb->get_results("SELECT * FROM {$this->table} WHERE user_id={$user_id}");  // ici on a une tab avec id, post_id, user_id ? ok
      //print_r($favs);
      $myFav = [];
      // ici on filtre le post_id, donc on récupère le post_id
      foreach ($favs as $fav){
       $myFav[] = $fav->post_id; // la on a le post_id on veut rajouté le id dans oui c fabio on a fait ça hier fid      comment le ID fav on le rajouté là ici, oui style $fav->id faut juste rajouté le id. oui mais comment rajouter plusieurs entré non
      }

      //print_r($myFav); die();
      // on affiche les post qu'on veut avec leur id. 
      $args = array(
        'posts_per_page' => 100,
        'post_type' => 'video', 
        'post__in' => $myFav); 
    
    $posts = get_posts($args);
    return $posts; // on a que les post donc pas de id du fav. sinon il faut trouvé le moyen de cherche le user_id et post_id pour remonté au id. genre in_array en cherchant. ou faudrai le rajouté

    //$result = array_merge($favs, $fav);

    //print_r($result);
   
  }
  
  public function add_favorite($request = null) {
    // faire un if pour dire si on est connecté
    if (is_user_logged_in()) {
        $response = [];
        $parameters = $request->get_json_params();
        $user_id = get_current_user_id();
        $post_id = intval($parameters['post_id']);
        $data = array( $user_id, $post_id);
        if ($post_id !== 0) {
          $response = new WP_REST_Response($data);
          $this->insert($user_id, $post_id, $response);
        }
        else{

          $response = new WP_REST_Response(400); // pour que ça marche pour eux faux pull sur le serveur là on peut testé en local insomnia 
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