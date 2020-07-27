<?php
/*
Plugin Name: oCalm Settings
Description: Réglages de oCalm
Author: Fidia, Nico, Vincent
Version: 1.0.0
*/

// Plugin security to make sure of wp environnement
if (!defined('WPINC')) {die();}

// Adding the differents class needed 
require plugin_dir_path(__FILE__) . 'inc/video_cpt.php';
require plugin_dir_path(__FILE__) . 'inc/delete_account.php';
require plugin_dir_path(__FILE__) . 'inc/add_favorite.php';
require plugin_dir_path(__FILE__) . 'inc/roles.php';
require plugin_dir_path(__FILE__) . 'inc/rest_api.php';


// Video cpt and taxo
$video_cpt = new Video_cpt();

register_activation_hook(__FILE__, [$video_cpt, 'activation']);
register_deactivation_hook(__FILE__, [$video_cpt, 'deactivation']);

// Api rest
$calm_rest_api = new OcalmRestApi();

// Roles
$ocalm_role = new Ocalm_role();

register_activation_hook(__FILE__, [$ocalm_role, 'activation']);
register_deactivation_hook(__FILE__, [$ocalm_role, 'deactivation']);

// Create a favorite table + Add a favorite post in DB 
$add_favorite = new Add_favorite();

register_activation_hook( __FILE__,[$add_favorite, 'activation']);
register_deactivation_hook( __FILE__,[$add_favorite, 'deactivation']); 

// Delete user account 
$delete_account = new Delete_account();


add_action ('template_redirect', 'my_custom_redirect');
function my_custom_redirect() {
    //if ( isset( $_POST['subscribe'] ) ) {
        $redirect = 'http://34.239.127.180/';
        wp_redirect($redirect);
        exit;
    //}
}      
