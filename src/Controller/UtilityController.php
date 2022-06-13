<?php


namespace App\Controller;
use App\Model\NewsModel;

use \Firebase\JWT\JWT;

class UtilityController {
    public $newsModel;
    
    function __construct() {
        $this->newsModel = new NewsModel();
    }

    function get_all_news($request) {
        $result = $this->newsModel->get_all_news();
        echo json_encode($result);
    }

    function get_one_news($request) {
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri, 10);
        $id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->newsModel->get_one_news($id);
        echo json_encode($result);
    }
}


?>