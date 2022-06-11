<?php

namespace App\Core;


class Router {

    private $handlers;
    private $request;

    function  __construct() {
        $this->handlers = array();
        $this->request = new Request();
    }

    public function get($uri, $callback) {
        $this->addHandler($uri, 'GET', $callback);
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
        // print_r($this->handlers[$method . $uri]);
    }

    public function run() {
        $requestPath = $this->request->getUri();
        $requestMethod = $this->request->getMethod();
        $callback = null;
        foreach ($this->handlers as $handler) {
            if (preg_match($handler['uri'], $requestPath) && $handler['method'] == $requestMethod) {
                $callback = $handler['callback'];
            }
        }
        if ($callback) call_user_func($callback, $this->request);
    }
}



?>  