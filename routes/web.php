<?php

use App\Core\Router as Router;

use App\Controller\ExampleController;
use App\Controller\AdminController;

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


$router->post("/^\/admin\/create$/", array($adminController, 'create'));

$router->get("/^\/dashboard\/membership$/", array($adminController, 'get_all_membership'));
$router->get("/^\/dashboard\/membership\/detail\/[0-9]+$/", array($adminController, 'get_one_membership'));
$router->post("/^\/dashboard\/membership\/edit\/[0-9]+$/", array($adminController, 'edit_one_membership'));
$router->post("/^\/dashboard\/membership\/delete\/[0-9]+$/", array($adminController, 'delete_one_membership'));
$router->post("/^\/dashboard\/membership\/block\/[0-9]+$/", array($adminController, 'block_one_membership'));
$router->post("/^\/dashboard\/membership\/unblock\/[0-9]+$/", array($adminController, 'unblock_one_membership'));
$router->get("/^\/dashboard\/newsComment$/", array($adminController, 'get_all_news_comment'));
$router->get("/^\/dashboard\/contact$/", array($adminController, 'get_all_contact'));

$router->get("/^\/dashboard\/image-storage\/[0-9]+$/", array($adminController, 'get_image_of_admin'));
$router->post("/^\/dashboard\/image-storage\/create$/", array($adminController, 'create_one_image'));

$router->get("/^\/dashboard\/publicInfo$/", array($adminController, 'get_public_info'));
$router->post("/^\/dashboard\/publicInfoEdit$/", array($adminController, 'edit_public_info'));

$router->get("/^\/home\/product\/[0-9]+\/comment$/", array($adminController, 'get_product_comment'));
$router->post("/^\/home\/product\/[0-9]+\/comment$/", array($adminController, 'add_product_comment'));
$router->get("/^\/home\/user\/[0-9]+$/", array($adminController, 'get_user_by_id'));
$router->post("/^\/home\/user\/[0-9]+$/", array($adminController, 'update_user_by_id'));

$router->post("/^\/home\/user\/[0-9]+\/imageUpload$/", array($adminController, 'upload_image'));
$router->post("/^\/home\/user\/[0-9]+\/changePassword$/", array($adminController, 'change_password'));
$router->run();


