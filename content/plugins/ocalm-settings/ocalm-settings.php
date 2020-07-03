<?php
/*
Plugin Name: Ocalm Settings
Description: Réglages de Ocalm
Author: Fidia, Nico, Vincent
Version: 1.0.0
*/

// Sécurisation du plugin
if (!defined('WPINC')) {die();}

// Inclusion des différentes classes necessaire au plugin
require plugin_dir_path(__FILE__) . 'inc/cpt.php';
require plugin_dir_path(__FILE__) . 'inc/api_rest.php';

//