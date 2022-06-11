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
$router->post("/^\/dashboard\/membership\/block\/[0-9]+$/", array($adminController, 'block_one_membership'));
$router->post("/^\/dashboard\/membership\/unblock\/[0-9]+$/", array($adminController, 'unblock_one_membership'));
$router->get("/^\/dashboard\/newsComment$/", array($adminController, 'get_all_news_comment'));
$router->get("/^\/dashboard\/contact$/", array($adminController, 'get_all_contact'));
$router->get("/^\/dashboard\/publicInfo$/", array($adminController, 'get_public_info'));
$router->post("/^\/dashboard\/publicInfoEdit$/", array($adminController, 'edit_public_info'));
$router->run();


