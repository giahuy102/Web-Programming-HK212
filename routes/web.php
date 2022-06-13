<?php

use App\Core\Router as Router;

use App\Controller\ExampleController;
$exampleController = new ExampleController();

use App\Controller\AdminController;
$adminController = new AdminController();

use App\Controller\AuthController;
$authController = new AuthController();

use App\Controller\UtilityController;
$utilityController = new UtilityController();


$router = new Router();
$router->get("/^\/example\/[0-9]+(\?[a-z0-9=&]*)?$/i", array($exampleController, 'example'));//call method example of $exampleController object
$router->get("/\/admin\/membership/", array($adminController, 'admin_test'));











$router->post("/^\/user\/register$/", array($authController, 'register'));
$router->post("/^\/user\/login$/", array($authController, 'login'));


$router->get("/^\/dashboard\/news$/", array($utilityControler, 'get_all_news'));
$router->get("/^\/dashboard\/news\/detail\/[0-9]+$/", array($utilityControler, 'get_one_news'));


$router->run();

?>