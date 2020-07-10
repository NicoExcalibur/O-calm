<?php

if (!defined('WPINC')) {
    die;
}

class Add_favorite
{

    // function that add datas in the custom table
    public function add_favorite()
    {
        global $wpdb;
  
        $this->wpdb = $wpdb;
        $this->table = $wpdb->prefix . 'favorites';

        $this->wpdb->insert(
            $this->table,
            [
                'user_id'=> 2,//get_current_user_id(),
                'post_id' => 1,//get_the_ID(),
            ],
            [
              '%d',
              '%d',
            ]
          );
            
    }
}
