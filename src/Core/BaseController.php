<?php

namespace App\Core;

class BaseController {
    function __construct() {
        
    }

    protected function view($name, $arg_array = []) {
        return require(__DIR__ . '/../View/' . $name . '.php');
    }
}


?>