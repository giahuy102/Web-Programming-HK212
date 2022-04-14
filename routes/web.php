<?php

use App\Core\Router as Router;

use App\Controller\ExampleController;
$exampleController = new ExampleController();


$router = new Router();
$router->get('/example', array($exampleController, 'example'));

$router->run();



?>