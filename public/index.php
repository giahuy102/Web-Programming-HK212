<?php


require_once __DIR__.'/../vendor/autoload.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');

// var_dump($_SERVER);
// print_r($_SERVER);

echo "<br> nhanvo";


// require_once __DIR__.'/../vendor/autoload.php';

require_once __DIR__.'/../routes/web.php';



?>