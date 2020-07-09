<?php

class Ocalm_role
{
    public function addRole()
    {
        add_role('oclockien', 'oClockien',
        [
            'read' => true,
        ]);
        
        $role = get_role('oclockien');
        
        //Creer des post
        $role->add_cap('create_posts');
        //Éditer ses post
        $role->add_cap('edit_posts');
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