<?php

class FavoriteEndpoint {

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
  
      $this->insert($user_id, $post_id,$response); // 
      return $response;
      
/* 
   $this->wpdb->insert(
        $this->table,
        [
          'email' => $_POST['email'],
          'optin_general' => 1,
          'optin_partners' => $optin,
          'fk_user_id' => $fk_user_id,
        ],
        [
          '%s',
          '%d',
          '%d',
          '%d',
        ]
      );
    }
*/
    }
    // https://developer.wordpress.org/reference/classes/wpdb/
    public function insert($user_id, $post_id, $response)
    { 
     //var_dump($_POST['user_id']); die(); //
     //return var_dump($response);

      // tes
     global $wpdb;
  //https://developer.wordpress.org/reference/classes/wpdb/#top
  
      $this->wpdb = $wpdb;
      $this->table = $wpdb->prefix . 'favorites';
      
      $wpdb->insert( 
        $this->table, 
        array( 
          'user_id' => $user_id, 
          'post_id' => $post_id // ta été trop vite lol 
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
  // on récupère dc un post, tu rajoutera ton code après :D :) :O :D
  //atten 5 mn pause WC
  // copie oui ds l'ongl 
  //atten euh faudrai regroupé 
  
  //SELECT user_login,post_ID
  //FROM wp_users
  //INNER JOIN wp_favorites
  //ON wp_users.ID = wp_favorites.user_id
  //INNER JOIN wp_posts
  //ON wp_posts.ID = wp_favorites.post_id