<?php

// function that create a custom table in the DB 
function ocalm_custom_table_install () {
    global $wpdb;

    $favourite = $wpdb->wp_ . "favourite";

    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $favourite (
    id int NOT NULL AUTO_INCREMENT
    ) $charset_collate;";

    dbDelta( $sql );    
}

