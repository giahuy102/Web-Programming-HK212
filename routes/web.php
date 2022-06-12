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
$router->get("/^\/dashboard\/publicInfo$/", array($adminController, 'get_public_info'));
$router->post("/^\/dashboard\/publicInfoEdit$/", array($adminController, 'edit_public_info'));
// $router->get("/^\/dashboard\/orderMember$/", array($adminController, 'get_all_order_member'));
$router->get("/^\/dashboard\/orderMemberPrice$/", array($adminController, 'get_all_order_member_total_price'));
$router->post("/^\/dashboard\/orderMember\/delete\/[0-9]+$/", array($adminController, 'delete_one_order'));
$router->get("/^\/dashboard\/orderMember\/detail\/[0-9]+$/", array($adminController, 'get_one_order'));
// for total price in detail order page
$router->get("/^\/dashboard\/orderMember\/total_price\/[0-9]+$/", array($adminController, 'get_one_order_member_total_price'));
$router->run();


