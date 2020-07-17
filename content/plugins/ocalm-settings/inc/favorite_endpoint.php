<?php

class FavoriteEndpoint {

    public function __construct()
    {
      add_action('rest_api_init', [$this, 'favorite_endpoint']);
    }

    public function favorite_endpoint($request) {
        register_rest_route('ocalm-settings/v1', 'video/favorite', [
          'methods' => 'POST',
          'callback' => [$this, 'get_favorite'] //tes
        ]);
    } // en retest
    //ok
    public function get_favorite($request = null) {
      
      //$response = [];
      $parameters = $request->get_json_params();
      $user_id = intval($parameters['user_id']);
      $post_id = intval($parameters['post_id']);
      $data = array( $user_id, $post_id); //plz
      
      $response = new WP_REST_Response( $data );
      // maintenent faut inséré ds la bdd. non :p
      var_dump($data);
      do_action([$this, 'insert'], $response); // euh la je vais de la magie fusion. go on test stp normal
      return new WP_REST_Response($response, 200);
      

    }
    // https://developer.wordpress.org/reference/classes/wpdb/
    public function insert($response)
    { 
     //return var_dump($response);
      // tes
     global $wpdb;
  //https://developer.wordpress.org/reference/classes/wpdb/#top
  
      $this->wpdb = $wpdb;
      $this->table = $wpdb->prefix . 'favorites';
      // c les bon champs? ok. fais un bisous à lou avant pour nous porté chance. rien en bdd? il est là
      $wpdb->query(
        $wpdb->prepare(
          "
          INSERT INTO {$this->table}
          (user_id, post_id)
          VALUES (%d, %d)
          ",
          array(
            $response['user_id'],
            $response['post_id'],
          )
        )

      );

      /*$wpdb->insert( 
        $this->table, 
        array( 
          'user_id' => $response['user_id'], 
          'post_id' => $response['post_id'] 
        ), 
        array( 
          '%d', 
          '%d' 
        ) 
      );*/
      
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