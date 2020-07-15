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

    // function that links the user and the post and retrieve it
    
    public function retrieve_favorite()
    {
        $prepared = $this->wpdb->prepare(
            "
            SELECT user_login,post_ID
            FROM wp_users
            INNER JOIN {$this->table}
            ON wp_users.ID = {$this->table}.user_id
            INNER JOIN wp_posts
            ON wp_posts.ID = {$this->table}.post_id
        "
        );
        
        return $this->wpdb->get_var($prepared);
    }
}
