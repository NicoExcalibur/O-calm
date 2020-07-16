<?php

class FavoriteEndpoint {

    public function __construct()
    {
      add_action('rest_api_init', [$this, 'favorite_endpoint']);
    }

    public function favorite_endpoint($request) {
        register_rest_route('ocalm-settings/v1', 'video/favorite', [
          'methods' => 'POST',
          'callback' => function() {
            return 'test OK ';
          }
        ]);
    }
    

}
// on récupère dc un post, tu rajoutera ton code après :D