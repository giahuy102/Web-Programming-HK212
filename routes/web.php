<?php

use App\Core\Router as Router;

use App\Controller\ExampleController;
$exampleController = new ExampleController();




$router = new Router();
$router->get("/^\/example\/[0-9]+(\?[a-z0-9=&]*)?$/i", array($exampleController, 'example'));//call method example of $exampleController object
    
$router->run();

?>