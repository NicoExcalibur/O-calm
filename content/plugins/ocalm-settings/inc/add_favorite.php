<?php

if (!defined('WPINC')) {
    die;
}

class Add_favorite
{

    public function __construct()
    {
        // Récupération de l'instance wpdb
        // https://codex.wordpress.org/Class_Reference/wpdb
        global $wpdb;

        $this->wpdb = $wpdb;
        $this->table = $wpdb->prefix . 'favorites';
    }


    // function that add datas in the custom table
    public function add_favorite()
    {
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

    // function that checks if a post is favorite or not 
    public function check_status($id)
    {
        $prepared = $this->wpdb->prepare(
            "
                SELECT post_id
                FROM {$this->table}
                WHERE id = %d;
            ",
            $id);
      
        return $this->wpdb->get_var($prepared);
        var_dump($prepared);
    }
}
