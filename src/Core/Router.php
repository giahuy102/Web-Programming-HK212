<?php

namespace App\Core;


class Router {

    private $handlers;
    private $request;

    function  __construct() {
        $this->handlers = array();
        $this->request = new Request();
        // if ($this->request->getInput('a') == null) echo 9999;
        // print_r($this->request->getInput('b'));
    }

    public function get($uri, $callback) {
        $this->addHandler($uri, 'GET', $callback);

        
        // print_r($this->request->getUri());
        

        // $this->handlers['GET'][$uri] = [
        //     'uri' => $uri,
        //     'method' => 'GET',
        //     'callback' => $callback
        // ];
        // print_r($this->handlers);
        // $this->run();

        
        // print_r($_SERVER);

        // print_r($_GET);
        // print_r($_REQUEST);
        // print_r($this->request->getInput('a'));
        // print_r($this->request->getInput('b'));
        // print_r(dirname(__FILE__));
        // print_r(__DIR__);
    }

    public function post($uri, $callback) {
        $this->addHandler($uri, 'POST', $callback);
    }

    private function addHandler($uri, $method, $callback) {
        $this->handlers[$method . $uri] = [
            'uri' => $uri,
            'method' => $method,
            'callback' => $callback
        ];
    }

    public function run() {
        $requestPath = $this->request->getUri();
        // $requestPath = $requestUri['PATH'];
        $requestMethod = $this->request->getMethod();
        // print_r($_SERVER['REQUEST_URI']);
        $callback = null;
        foreach ($this->handlers as $handler) {
            // if ($handler['uri'] == $requestPath && $handler['method'] == $requestMethod) {
            //     $callback = $handler['callback'];
            // }
            if (preg_match($handler['uri'], $requestPath) && $handler['method'] == $requestMethod) {
                $callback = $handler['callback'];
            }
        }
        if ($callback) call_user_func($callback, $this->request);
    }
}



?>  