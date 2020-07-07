<?php

if (!defined('WPINC')) {
    die;
}

class Custom_table{
    // function that create a custom table in the DB 
    function custom_table () {
        global $wpdb;

        $this->wpdb = $wpdb;
        $this->table = $wpdb->prefix . 'favorites';

        $sql = "CREATE TABLE {$this->table} (
        `id` INT NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
        );";

        $this->wpdb->query($sql);      
    }
}
