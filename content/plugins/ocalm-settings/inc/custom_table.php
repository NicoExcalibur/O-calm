<?php

if (!defined('WPINC')) {
    die;
}

class Custom_table
{

    // function that create a custom table in the DB
    public function custom_table()
    {
        global $wpdb;
        $table_name = "wp_favorites";

        if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") == $table_name) {
        //k 
        
        }
        else{
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
