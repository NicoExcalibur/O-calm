<?php
/*
Plugin Name: oCalm Settings
Description: Réglages de oCalm
Author: Fidia, Nico, Vincent
Version: 1.0.0
*/

// Sécurisation du plugin
if (!defined('WPINC')) {die();}

// Inclusion des différentes classes necessaire au plugin
require plugin_dir_path(__FILE__) . 'inc/video_cpt.php';
require plugin_dir_path(__FILE__) . 'inc/add_favorite.php';
require plugin_dir_path(__FILE__) . 'inc/roles.php';
require plugin_dir_path(__FILE__) . 'inc/rest_api.php';

//

// CPT RECIPE + TAXO
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