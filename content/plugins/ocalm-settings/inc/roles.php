<?php

class Ocalm_role
{
    public function __construct()
    {
        // Add simple_role capabilities, priority must be after the initial role definition.
        add_action( 'init', [$this,'wporg_simple_role_caps'], 11 );
    }
    public function addRole()
    {
        add_role('oclockien', 'oClockien',
        [
            'read' => true,
        ]);
        
        $role = get_role('oclockien');
        
        // Creat post
        $role->add_cap('create_posts');
        // Edit post
        $role->add_cap('edit_posts');
    }
   
    public function wporg_simple_role_caps() {
        // Gets the role object.
       // $user_can = $_POST; oui

     //   print_r($user_can); die();
        // if()
        // {}
        $role = get_role( 'subscriber' ); // manque un ti truuuuc Vincent
        // Add a new capability.
        $role->add_cap( 'delete_users', false );

    }
   

    public function removeRole()
    {
        remove_role('oclockien');
        
    }

    public function activation()
    {
        $this->addRole();
    }

    public function deactivation()
    {
        $this->removeRole();
    }
}