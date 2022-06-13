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
// dashboard/newsComment/block/1/2      ---> 1 is id_comment, 2 is id_news
$router->post("/^\/dashboard\/newsComment\/block\/[0-9]+\/[0-9]+$/", array($adminController, 'block_news_comment'));
// dashboard/newsComment/unblock/1/2      ---> 1 is id_comment, 2 is id_news
$router->post("/^\/dashboard\/newsComment\/unblock\/[0-9]+\/[0-9]+$/", array($adminController, 'unblock_news_comment'));
$router->get("/^\/dashboard\/productComment$/", array($adminController, 'get_all_product_comment'));
// dashboard/productComment/block/1/2      ---> 1 is id_comment, 2 is id_product
$router->post("/^\/dashboard\/productComment\/block\/[0-9]+\/[0-9]+$/", array($adminController, 'block_product_comment'));
// dashboard/productComment/unblock/1/2      ---> 1 is id_comment, 2 is id_product
$router->post("/^\/dashboard\/productComment\/unblock\/[0-9]+\/[0-9]+$/", array($adminController, 'unblock_product_comment'));
$router->get("/^\/dashboard\/contact$/", array($adminController, 'get_all_contact'));

$router->get("/^\/dashboard\/image-storage\/[0-9]+$/", array($adminController, 'get_image_of_admin'));
$router->post("/^\/dashboard\/image-storage\/create$/", array($adminController, 'create_one_image'));

$router->get("/^\/dashboard\/news$/", array($adminController, 'get_all_news'));
$router->get("/^\/dashboard\/news\/detail\/[0-9]+$/", array($adminController, 'get_one_news'));
$router->post("/^\/dashboard\/news\/create$/", array($adminController, 'create_one_news'));
$router->post("/^\/dashboard\/news\/edit$/", array($adminController, 'edit_one_news'));
$router->post("/^\/dashboard\/news\/delete\/[0-9]+$/", array($adminController, 'delete_one_news'));

$router->get("/^\/dashboard\/category$/", array($adminController, 'get_all_category'));
$router->post("/^\/dashboard\/category\/delete\/[0-9]+$/", array($adminController, 'delete_one_category'));
$router->post("/^\/dashboard\/category\/create$/", array($adminController, 'create_one_category'));
$router->post("/^\/dashboard\/category\/edit$/", array($adminController, 'edit_one_category'));

$router->get("/^\/dashboard\/product$/", array($adminController, 'get_all_product_join_category'));
$router->post("/^\/dashboard\/product\/create$/", array($adminController, 'create_one_product'));
$router->get("/^\/dashboard\/product\/detail\/[0-9]+$/", array($adminController, 'get_one_product'));


$router->get("/^\/dashboard\/publicInfo$/", array($adminController, 'get_public_info'));
$router->post("/^\/dashboard\/publicInfoEdit$/", array($adminController, 'edit_public_info'));

$router->get("/^\/home\/product\/[0-9]+\/comment$/", array($adminController, 'get_product_comment'));
$router->post("/^\/home\/product\/[0-9]+\/comment$/", array($adminController, 'add_product_comment'));
$router->get("/^\/home\/user\/[0-9]+$/", array($adminController, 'get_user_by_id'));
$router->post("/^\/home\/user\/[0-9]+$/", array($adminController, 'update_user_by_id'));
$router->run();


