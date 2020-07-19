<?php
class recentlyViewedVideo {
    public function __construct()
    {
      //  exit('coucou');
      add_action('rest_api_init', [$this, 'recentlyvideo_endpoints']);
    }
    // j'ai mis le serveur c 
    public function recentlyvideo_endpoints($request) {
        register_rest_route('ocalm-settings/v1', 'video/recent', [
          'methods' => 'POST',
          'callback' => function() {
              return 'test OK ';
          }
        ]);
      }

    public function table_create()
    {
        global $wpdb;
        $table_name = "wp_video_viewed";

        if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") == $table_name) {
        //k 
        
        }
        else{
            $this->wpdb = $wpdb;
            $this->table = $wpdb->prefix . 'video_viewed';

            $sql = "CREATE TABLE {$this->table} (
            `id` INT NOT NULL AUTO_INCREMENT,
            `user_id` BIGINT UNSIGNED NOT NULL,
            `post_id` INT NOT NULL, 
            PRIMARY KEY (id)
            );";

            $this->wpdb->query($sql);
        }
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function table_uninstall()
    { 
        global $wpdb;
  
        $this->wpdb = $wpdb;
        $this->table = $wpdb->prefix . 'video_viewed';
        
        $sql = "DROP TABLE {$this->table};";
  
        $this->wpdb->query($sql);
    }

    /**
     * Activation function
     *
     * @return void
     */
    public function activation()
    {
        $this->table_create();
    
    }

    /**
     * Deactivation function
     *
     * @return void
     */
    public function deactivation()
    {
        $this->table_uninstall();
    }
}