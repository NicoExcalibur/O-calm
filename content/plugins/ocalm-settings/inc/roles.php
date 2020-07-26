<?php

class Ocalm_role
{
    public function __construct()
    {
        // Add simple_role capabilities, priority must be after the initial role definition.
        add_action('init', [$this, 'removeDefaultRoles']);
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
    
    public function removeRole()
    {
        remove_role('oclockien');    
    }
    
    // Removes the default roles we do not need
    function removeDefaultRoles() {
        
        remove_role( 'contributor' );
        remove_role( 'editor' );
        remove_role( 'author' );  
    } 
    
    public function activation()
    {
        $this->addRole();
       // $this->removeDefaultRoles();
    }

    public function deactivation()
    {
        $this->removeRole();
    }
}