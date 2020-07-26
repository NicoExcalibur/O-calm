<?php

class Delete_account {
    
    public function __construct()
    {
        add_action('rest_api_init', [$this, 'delete_endpoint']);
        
    }
    // wp-json/ocalm-settings/v1/users/delete_account
    public function delete_endpoint() {

        register_rest_route('ocalm-settings/v1','users/delete_account', [
            'methods' => 'DELETE',
            'callback' => [$this, 'delete']
        ]);
    }
    //https://stackoverflow.com/questions/22734910/wp-delete-user-function-to-delete-the-user-from-front-end-is-not-working/29542513

    public function delete(){
        if (is_user_logged_in()) {
            add_action('init', [$this, 'delete2']);
            $this->delete2();
        }
    }
    
    public function delete2(){
        if (is_user_logged_in()) {
            //$user_id = get_current_user_id();
            require_once(ABSPATH.'wp-admin/includes/user.php');
        
            $current_user = wp_get_current_user();
            wp_delete_user($current_user->ID);
        }
    }
}