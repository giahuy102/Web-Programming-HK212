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
        $json = file_get_contents("php://input");
        $_POST = json_decode($json, true);
        $temp = json_decode('', true);
        // echo $_POST['name'];
        echo $_POST['name'];
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

    function get_product_comment($request){
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri);
        $product_id = (int)($split_uri[count($split_uri) - 2]);
        $result = $this->modelAdmin->get_comment_by_product_id($product_id);
        echo json_encode($result);
    }

    function add_product_comment($request){
        $_POST = json_decode(file_get_contents("php://input"), true);
        $member_id = $_POST['member_id'];
        $content = $_POST['content'];

        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri);
        $product_id = (int)($split_uri[count($split_uri) - 2]);
        $result = $this->modelAdmin->add_comment($product_id, $member_id, $content);
        echo json_encode($result);
    }

    function get_user_by_id($request){
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri);
        $user_id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->get_user_db_by_id($user_id);
        echo json_encode($result);
    }

    function update_user_by_id($request){
        $_POST = json_decode(file_get_contents("php://input"), true);
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $uri = $_SERVER['REQUEST_URI'];
        $split_uri = explode("/", $uri);
        $user_id = (int)($split_uri[count($split_uri) - 1]);
        $result = $this->modelAdmin->update_user_db_by_id($user_id, $email, $phone);
        echo json_encode($result);
    }
}
