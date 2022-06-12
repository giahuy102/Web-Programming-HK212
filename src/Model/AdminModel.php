<?php

namespace App\Model;

use mysqli;
use PDO;

class AdminModel {

    function admin_test() {
        return "vo";
    }

    function connectDB() {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $connection = mysqli_connect($servername, $username, $password);
        if (!$connection){
            die('Could not connect: ' . mysqli_connect_error());
        }
        $db_selected = mysqli_select_db($connection, 'restaurant_2022');
        if (!$db_selected){
            die('Cant use cars: '. mysqli_error($connection));
        }
        return $connection;
    }

    function get_all_membership() {
        $connection = $this->connectDB();
        $query = "SELECT * FROM _user";
        $result = mysqli_query($connection, $query);
        $members_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $members_list[] = $member;
        }
        return $members_list;
    }

    function get_one_membership($id) {
        $connection = $this->connectDB();
        $query = "SELECT * FROM _user WHERE ID=$id";
        $result = mysqli_query($connection, $query);
        return mysqli_fetch_assoc($result);
    }

    function edit_one_membership($id, $newID, $newUsername, $newPhoneNumber, $newEmail) {
        $connection = $this->connectDB();
        // $query = " UPDATE _user SET USERNAME = '". $newUsername . "' WHERE id = ". $id;
        $query = " UPDATE _user SET USERNAME = '". $newUsername . "', PHONENUMBER = '". $newPhoneNumber ."', EMAIL = '". $newEmail .  "', ID = " . $newID . " WHERE ID = ". $id;
        $result = mysqli_query($connection, $query);
    }

    function delete_one_membership($id) {
        $connection = $this->connectDB();
        $query = " DELETE FROM _user WHERE ID = " . $id;
        $result = mysqli_query($connection, $query);
        return $result;
    }

    function block_one_membership($id) {
        $connection = $this->connectDB();
        $query = " UPDATE _user SET _BLOCK = " . 1 . " WHERE ID = " . $id;
        $result = mysqli_query($connection, $query);

        $query = "SELECT * FROM _user";
        $result = mysqli_query($connection, $query);
        $members_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $members_list[] = $member;
        }
        return $members_list;
        // return $result;
    }

    function unblock_one_membership($id) {
        $connection = $this->connectDB();
        $query = " UPDATE _user SET _BLOCK = " . 0 . " WHERE ID = " . $id;
        $result = mysqli_query($connection, $query);
        
        $query = "SELECT * FROM _user";
        $result = mysqli_query($connection, $query);
        $members_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $members_list[] = $member;
        }
        return $members_list;
    }

    function get_all_contact() {
        $connection = $this->connectDB();
        $query = "SELECT * FROM _user";
        $result = mysqli_query($connection, $query);
        $contact_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $contact_list[] = $member;
        }
        return $contact_list;
    }

    function get_image_of_admin($id_admin) {
        $connection = $this->connectDB();
        $query = "SELECT * FROM image_storage WHERE ID_ADMIN = " . $id_admin;
        $result = mysqli_query($connection, $query);
        $image_list = array();
        while($image = mysqli_fetch_assoc($result)) {
            $image_list[] = $image;
        }
        return $image_list;
    }

    function create_one_image($url_img, $position, $id_admin) {
        $connection = $this->connectDB();
        $query = "INSERT INTO image_storage(URL_IMG, POSITION, ID_ADMIN) VALUE('" . $url_img . "','" . $position . "'," . $id_admin . ")";
        $result = mysqli_query($connection, $query);
    }
    
    function get_public_info() {
        $connection = $this->connectDB();
        $query = "SELECT * FROM public_information";
        $result = mysqli_query($connection, $query);
        return mysqli_fetch_assoc($result);
    }

    function edit_public_info($newCompanyName, $newAddress, $newEmail, $newPhoneNumber, $taxID) {
        $connection = $this->connectDB();
        $query = "UPDATE public_information SET NAME_COMPANY = '" . $newCompanyName . "' , ADDRESS_COMPANY = '" . $newAddress . "' , EMAIL = '" . $newEmail . "' , PHONENUMBER = '" . $newPhoneNumber . "' WHERE TAX_ID = " . $taxID;
        $result = mysqli_query($connection, $query);
        return $result;
    }

    function get_all_news_comment() {
        $connection = $this->connectDB();
        $query = "SELECT * FROM MANAGES_COMMENT_NEWS_USER";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $$news_comment_list[] = $member;
        }
        return $news_comment_list;
    }

    function get_comment_by_product_id($product_id){
        $connection = $this->connectDB();
        $query = "SELECT ID, ID_MEMBER, CONTENT FROM manages_comment_product_user JOIN _comment ON ID_COMMENT = ID WHERE (manages_comment_product_user.ID_PRODUCT = ". $product_id. ")";
        $result = mysqli_query($connection, $query);
        $comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $comment_list[] = $member;
        }
        return $comment_list;
    }

    function add_comment($product_id, $member_id, $content){
        $connection = $this->connectDB();
        $query = "INSERT INTO _comment(CONTENT, TOTAL_LIKES) VALUES ('". $content. "', 0);";
        $result = mysqli_query($connection, $query);
        $last_comment_id = mysqli_insert_id($connection);
        $value = "" . $last_comment_id . "," . $product_id . ","  . $member_id;
        $query = "INSERT INTO manages_comment_product_user VALUES (" . $value .");";
        $result = mysqli_query($connection, $query);
        return $this->get_comment_by_product_id($product_id);
    }

    function get_user_db_by_id($user_id){
        $connection = $this->connectDB();
        $query = "SELECT * FROM _USER WHERE ID = ". $user_id;
        $result = mysqli_query($connection, $query);
        return mysqli_fetch_assoc($result);
    }

    function update_user_db_by_id($user_id, $email, $phone){
        $connection = $this->connectDB();
        $query = "UPDATE _user SET EMAIL = '". $email ."', PHONENUMBER = '". $phone."' WHERE ID = ". $user_id;
        $result = mysqli_query($connection, $query);
        return $this->get_user_db_by_id($user_id);
    }
}