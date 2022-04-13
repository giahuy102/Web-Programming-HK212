<?php

use App\Core\Router as Router;

use App\Controller\ContactController;
$contactController = new ContactController();


$router = new Router();
$router->get('/hihi', function() {
    echo "Hihi";
});




$router->get('/afaf', function() {
    echo "Hihi";
});

$router->get('/contact', $contactController->test());

$router->run();



?>