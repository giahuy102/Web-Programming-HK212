<?php


namespace App\Controller;

use App\Core\BaseController;

class ContactController extends BaseController {
    function test() {
        return $this->view('contact', ['contact' => 'contact example']);
    }
}


?>