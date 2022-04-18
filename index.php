<?php



$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH)
);

// echo "<br> uri: $uri";
// $temp = __DIR__.'/public'.$uri;
// echo "<br> $temp";

if ($uri !== '/' && file_exists(__DIR__.'/public'.$uri)) {
    return false;
}

// $str = "/Example/90";
// $pattern = "/^\/example\/[0-9]+$/i";
// echo preg_match($pattern, $str);

echo "<br> index.php";

require_once __DIR__.'/public/index.php';

echo "<br> below";


// Sample array
// $data = array("a" => "Apple", "b" => "Ball", "c" => "Cat");

// header("Content-Type: application/json");
// echo json_encode($data);
// exit();