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

    function block_one_membership($request) {
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri, 10);
        $id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->block_one_membership($id);
        echo json_encode($result);
    }

    function unblock_one_membership($request) {
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri, 10);
        $id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->unblock_one_membership($id);
        echo json_encode($result);
    }

    function get_all_contact($request) {
        $result = $this->modelAdmin->get_all_contact();
        echo json_encode($result);
    }

    function get_public_info($request) {
        $result = $this->modelAdmin->get_public_info();
        echo json_encode($result);
    }
    
    function edit_public_info($request) {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $taxID = $_POST['tax_id'];
        $newCompanyName = $_POST['company_name'];
        $newAddress = $_POST['address'];
        $newEmail = $_POST['email'];
        $newPhoneNumber = $_POST['phone_number'];

        $result = $this->modelAdmin->edit_public_info($newCompanyName, $newAddress, $newEmail, $newPhoneNumber, $taxID);
        echo json_encode($result);
    }

    function get_all_news_comment($request) {
        $result = $this->modelAdmin->get_all_news_comment();
        echo json_encode($result);
    }

    function create($request) {
        // $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
        // header('Content-type: application/json');
        // echo json_encode($arr);
        $_POST = json_decode(file_get_contents("php://input"), true);
        echo $_POST['name'] . $_POST['age'] . $_POST['cc'];
    }

    function get_image_of_admin($request) {
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri, 10);
        $id_admin = (int) ($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->get_image_of_admin($id_admin);
        echo json_encode($result);
    }

    function create_one_image($request) {
        // $uri = $_SERVER['REQUEST_URI'];
        // $split_uri = explode("/", $uri, 10);
        // $id_admin = (int) ($split_uri[count($split_uri) - 2]);
        
        $_POST = json_decode(file_get_contents("php://input"), true);
        $newUrl_Image = $_POST['url_img'];
        $newPosition = $_POST['position'];
        $newId_Admin = $_POST['id_admin'];

        $result = $this->modelAdmin->create_one_image($newUrl_Image, $newPosition, (int) $newId_Admin);
        echo json_encode($result);
    }

    function get_all_news($request) {
        $result = $this->modelAdmin->get_all_news();
        echo json_encode($result);
    }

    function get_one_news($request) {
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri, 10);
        $id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->get_one_news($id);
        echo json_encode($result);
    }

    function create_one_news($request) {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $newTitle = $_POST['title'];
        $newContent = $_POST['content'];
        $newId_Admin = $_POST['id_admin'];

        $result = $this->modelAdmin->create_one_news($newTitle, $newContent, (int) $newId_Admin);
        echo json_encode($result);
    }

    function edit_one_news($request) {
        $_POST = json_decode(file_get_contents("php://input"), true);
        $id = $_POST['id'];
        $newTitle = $_POST['title'];
        $newContent = $_POST['content'];
        // $newId_Admin = $_POST['id_admin'];

        $result = $this->modelAdmin->edit_one_news($id, $newTitle, $newContent);
        echo json_encode($result);
    }

    function delete_one_news ($request) {
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri, 10);
        $id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->delete_one_news($id);
        echo json_encode($result);
    }
}
