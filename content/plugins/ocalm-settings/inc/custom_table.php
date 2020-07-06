<?php

// function that create a custom table in the DB 
function ocalm_custom_table_install () {
    global $wpdb;

    $favorites = $wpdb->wp_ . "favorites";

    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $favorites (
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
    ) $charset_collate;";

    dbDelta( $sql );    
}

