<?php



$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);


if ($uri !== '/' && file_exists(__DIR__.'/public'.$uri)) {
    return false;
}

require_once __DIR__.'/public/index.php';


// Sample array
// $data = array("a" => "Apple", "b" => "Ball", "c" => "Cat");

// header("Content-Type: application/json");
// echo json_encode($data);
// exit();