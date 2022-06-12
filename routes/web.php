<?php

use App\Core\Router as Router;

use App\Controller\ExampleController;
$exampleController = new ExampleController();

use App\Controller\AdminController;
$adminController = new AdminController();

use App\Controller\AuthController;
$authController = new AuthController();


$router = new Router();
$router->get("/^\/example\/[0-9]+(\?[a-z0-9=&]*)?$/i", array($exampleController, 'example'));//call method example of $exampleController object
$router->get("/\/admin\/membership/", array($adminController, 'admin_test'));











$router->post("/^\/user\/register$/", array($authController, 'register'));
$router->post("/^\/user\/login$/", array($authController, 'login'));

$router->run();

?>