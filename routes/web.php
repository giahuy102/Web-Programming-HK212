<?php

use App\Core\Router as Router;

use App\Controller\ExampleController;
use App\Controller\AdminController;

$exampleController = new ExampleController();
$adminController = new AdminController();

$router = new Router();
$router->get("/^\/example\/[0-9]+(\?[a-z0-9=&]*)?$/i", array($exampleController, 'example'));
$router->get("/^\/admin\/membership$/", array($adminController, 'admin_test'));

$router->post("/^\/admin\/create$/", array($adminController, 'create'));

$router->get("/^\/dashboard\/membership$/", array($adminController, 'get_all_membership'));
$router->get("/^\/dashboard\/membership\/detail\/[0-9]+$/", array($adminController, 'get_one_membership'));
$router->post("/^\/dashboard\/membership\/edit\/[0-9]+$/", array($adminController, 'edit_one_membership'));
$router->post("/^\/dashboard\/membership\/delete\/[0-9]+$/", array($adminController, 'delete_one_membership'));
$router->get("/^\/dashboard\/contact$/", array($adminController, 'get_all_contact'));
$router->run();
<<<<<<< HEAD
=======


>>>>>>> origin/NhanVoNguyen
