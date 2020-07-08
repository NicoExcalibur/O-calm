<?php

class Ocalm_role
{
    public function addCap()
    {
        // J'ajoute des capacités aux rôles existants

        $array_roles = [
            'Administrateur',
            'Editeur'
        ];

        foreach ($array_roles as $role_name) {

            $role = get_role($role_name);
            $role->add_cap('publish_posts');
            $role->add_cap('edit_posts');
        }

        // $role = get_role('author');
        // $role->remove_cap('delete_published_posts');
    }

    public function removeRole()
    {
        remove_role('Auteur');
    }

    public function activation()
    {
        $this->addRole();
        $this->addCap();
    }

    public function deactivation()
    {
        $this->removeRole();
    }
}