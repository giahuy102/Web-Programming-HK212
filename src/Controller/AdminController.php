<?php

namespace App\Controller;

class AdminController {
    function admin_test($request) {
        $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        header('Content-type: application/json');
        echo json_encode($arr);
    }

    function create($request) {
        $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        header('Content-type: application/json');
        echo json_encode($arr);
    }
}


?>