<?php

namespace App\Core;

class Request {
    function __construct() {

    }

    public function getUri() {
        return $_SERVER['REQUEST_URI'];
    }

    public function getMethod() {
        return $_SERVER['REQUEST_METHOD'];
    }

    public function isExist($param) {
        return isset($_GET[$param]);
    }

    public function getInput($param) {
        if ($this->getMethod() == 'GET') return $_GET[$param];
        else if ($this->getMethod() == 'POST') return $_POST[$param];
    }


}


?>