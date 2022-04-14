<?php


namespace App\Controller;


class ExampleController {
    function example($request) {
        
        $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        header('Content-type: application/json');
        echo json_encode($arr);
        // return new Response(200, ['Content-type' => 'application/json'], $t);
    }
}


?>