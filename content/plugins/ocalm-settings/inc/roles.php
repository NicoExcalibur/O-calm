<?php

class Ocalm_role
{
    public function __construct()
    {
        // removes the useless default roles
        add_action('init', [$this, 'removeDefaultRoles']);
    }
    public function addRole()
    {
        add_role('oclockien', 'oClockien',
        [
            'read' => true,
        ]);
        
        $role = get_role('oclockien');
    
        // capabilities
        $role->add_cap('create_posts');
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
    }

    public function deactivation()
    {
        $this->removeRole();
    }
}