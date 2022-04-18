<?php

use App\Core\Router as Router;

use App\Controller\ExampleController;
$exampleController = new ExampleController();

echo "<br> web.php";

$router = new Router();
$router->get("/^\/example\/[0-9]+(\?[a-z0-9=&]*)?$/i", array($exampleController, 'example'));//call method example of $exampleController object

echo "<br> web1.php";

$router->run();

echo "<br> web2.php";

?>