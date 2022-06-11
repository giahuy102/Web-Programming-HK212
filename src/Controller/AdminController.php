<?php

namespace App\Controller;

use App\Model\AdminModel;



class AdminController
{
    public AdminModel $modelAdmin;

    function __construct() {
        $this->modelAdmin = new AdminModel();
    }

    function admin_test($request) {
        // $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        // header('Content-type: application/json');
        // echo json_encode($arr);

        $member_list = $this->modelAdmin->admin_test();
        echo json_encode($member_list);
    }

    function get_all_membership($request) {
        $result = $this->modelAdmin->get_all_membership();
        echo json_encode($result);
    }

    function get_one_membership($request) {
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri, 10);
        $id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->get_one_membership($id);
        echo json_encode($result);
    }

    function edit_one_membership($request) {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $newID = $_POST['id'];
        $newUsername = $_POST['username'];
        $newEmail = $_POST['email'];
        $newPhoneNumber = $_POST['phone_number'];

        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri, 10);
        $id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->edit_one_membership((int)$id, (int)$newID, $newUsername, $newPhoneNumber, $newEmail);
        echo json_encode($result);
    }

    function delete_one_membership($request) {
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri, 10);
        $id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->delete_one_membership($id);
        echo json_encode($result);
    }

    function get_all_contact($request) {
        $result = $this->modelAdmin->get_all_contact();
        echo json_encode($result);
    }

    function create($request) {
        // $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        // header('Content-type: application/json');
        // echo json_encode($arr);
        $_POST = json_decode(file_get_contents("php://input"), true);
        echo $_POST['name'] . $_POST['age'] . $_POST['cc'];
    }
}
