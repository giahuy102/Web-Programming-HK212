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

        $query = "SELECT * FROM _user";
        $result = mysqli_query($connection, $query);
        $members_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $members_list[] = $member;
        }
        return $members_list;
        // return $result;
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
        $query = "SELECT * FROM MANAGES_COMMENT_NEWS_USER, _COMMENT, NEWS, _MEMBER, _USER WHERE ID_COMMENT = _COMMENT.ID AND ID_NEWS = NEWS.ID AND ID_MEMBER = _MEMBER.ID AND _MEMBER.ID = _USER.ID";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
    }

    function get_all_product_comment() {
        $connection = $this->connectDB();
        $query = "SELECT * FROM MANAGES_COMMENT_PRODUCT_USER, _COMMENT, PRODUCT, _MEMBER, _USER WHERE ID_COMMENT = _COMMENT.ID AND ID_PRODUCT = PRODUCT.ID AND ID_MEMBER = _MEMBER.ID AND _MEMBER.ID = _USER.ID";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
    }

    function block_news_comment($id_comment, $id_news) {
        $connection = $this->connectDB();
        $query = " UPDATE manages_comment_news_user SET VISIBLE = " . 0 . " WHERE ID_COMMENT = " . $id_comment . " AND ID_NEWS = " . $id_news;
        $result = mysqli_query($connection, $query);

        $query = "SELECT * FROM MANAGES_COMMENT_NEWS_USER, _COMMENT, NEWS, _MEMBER, _USER WHERE ID_COMMENT = _COMMENT.ID AND ID_NEWS = NEWS.ID AND ID_MEMBER = _MEMBER.ID AND _MEMBER.ID = _USER.ID";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
    }

    function unblock_news_comment($id_comment, $id_news) {
        $connection = $this->connectDB();
        $query = " UPDATE manages_comment_news_user SET VISIBLE = " . 1 . " WHERE ID_COMMENT = " . $id_comment . " AND ID_NEWS = " . $id_news;
        $result = mysqli_query($connection, $query);

        $query = "SELECT * FROM MANAGES_COMMENT_NEWS_USER, _COMMENT, NEWS, _MEMBER, _USER WHERE ID_COMMENT = _COMMENT.ID AND ID_NEWS = NEWS.ID AND ID_MEMBER = _MEMBER.ID AND _MEMBER.ID = _USER.ID";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
    }

    function block_product_comment($id_comment, $id_product) {
        $connection = $this->connectDB();
        $query = " UPDATE manages_comment_product_user SET VISIBLE = " . 0 . " WHERE ID_COMMENT = " . $id_comment . " AND ID_PRODUCT = " . $id_product;
        $result = mysqli_query($connection, $query);

        $query = "SELECT * FROM MANAGES_COMMENT_PRODUCT_USER, _COMMENT, PRODUCT, _MEMBER, _USER WHERE ID_COMMENT = _COMMENT.ID AND ID_PRODUCT = PRODUCT.ID AND ID_MEMBER = _MEMBER.ID AND _MEMBER.ID = _USER.ID";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
    }

    function unblock_product_comment($id_comment, $id_product) {
        $connection = $this->connectDB();
        $query = " UPDATE manages_comment_product_user SET VISIBLE = " . 1 . " WHERE ID_COMMENT = " . $id_comment . " AND ID_PRODUCT = " . $id_product;
        $result = mysqli_query($connection, $query);
        
        $query = "SELECT * FROM MANAGES_COMMENT_PRODUCT_USER, _COMMENT, PRODUCT, _MEMBER, _USER WHERE ID_COMMENT = _COMMENT.ID AND ID_PRODUCT = PRODUCT.ID AND ID_MEMBER = _MEMBER.ID AND _MEMBER.ID = _USER.ID";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
    }

    function get_all_order_member() {
        $connection = $this->connectDB();
        $query = "SELECT * FROM CONTAINS_MEMBER_PRODUCT, ORDER_MEMBER, PRODUCT, _USER WHERE ID_ORDER_MEMBER = ORDER_MEMBER.ID AND ID_PRODUCT = PRODUCT.ID AND _USER.ID = ID_MEMBER";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
        // return "get all order members";
    }
    
    function get_all_order_member_total_price() {
        $connection = $this->connectDB();
        $query = "SELECT ID_ORDER_MEMBER, USERNAME, sum(TOTAL_PRICE_MEMBER) AS TOTAL_PRICE_MEMBER FROM CONTAINS_MEMBER_PRODUCT, ORDER_MEMBER, PRODUCT, _USER WHERE ID_ORDER_MEMBER = ORDER_MEMBER.ID AND ID_PRODUCT = PRODUCT.ID AND _USER.ID = ID_MEMBER GROUP BY ID_ORDER_MEMBER";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
        // return "get_all_order_member_price";
    }

    function delete_one_order_member($id) {
        $connection = $this->connectDB();
        $query = " DELETE FROM contains_member_product WHERE ID_ORDER_MEMBER = " . $id;
        $result = mysqli_query($connection, $query);

        $query = "SELECT ID_ORDER_MEMBER, USERNAME, sum(TOTAL_PRICE_MEMBER) AS TOTAL_PRICE_MEMBER FROM CONTAINS_MEMBER_PRODUCT, ORDER_MEMBER, PRODUCT, _USER WHERE ID_ORDER_MEMBER = ORDER_MEMBER.ID AND ID_PRODUCT = PRODUCT.ID AND _USER.ID = ID_MEMBER GROUP BY ID_ORDER_MEMBER";
        $result = mysqli_query($connection, $query);
        $members_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $members_list[] = $member;
        }
        return $members_list;
        // return "delete_one_order";
    }

    function get_one_order_member($id) {
        $connection = $this->connectDB();
        $query = "SELECT * FROM contains_member_product, product WHERE ID_ORDER_MEMBER=$id AND ID_PRODUCT = PRODUCT.ID";
        $result = mysqli_query($connection, $query);
        $members_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $members_list[] = $member;
        }
        return $members_list;
    }

    function get_one_order_member_total_price($id) {
        $connection = $this->connectDB();
        $query = "SELECT ID_ORDER_MEMBER, sum(TOTAL_PRICE_MEMBER) AS TOTAL_PRICE_MEMBER FROM CONTAINS_MEMBER_PRODUCT, ORDER_MEMBER, PRODUCT, _USER WHERE ID_ORDER_MEMBER = ORDER_MEMBER.ID AND ID_PRODUCT = PRODUCT.ID AND _USER.ID = ID_MEMBER AND ID_ORDER_MEMBER = $id GROUP BY ID_ORDER_MEMBER ";
        $result = mysqli_query($connection, $query);
        return mysqli_fetch_assoc($result);
    }


    function get_all_order_customer_total_price() {
        $connection = $this->connectDB();
        $query = "SELECT ID_ORDER_CUSTOMER, CUSNAME, sum(TOTAL_PRICE_CUSTOMER) AS TOTAL_PRICE_CUSTOMER FROM CONTAINS_CUSTOMER_PRODUCT, ORDER_CUSTOMER, PRODUCT, _CUSTOMER WHERE ID_ORDER_CUSTOMER = ORDER_CUSTOMER.ID AND ID_PRODUCT = PRODUCT.ID AND _CUSTOMER.ID = ID_CUSTOMER GROUP BY ID_ORDER_CUSTOMER";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
    }

    function delete_one_order_customer($id) {
        $connection = $this->connectDB();
        $query = " DELETE FROM contains_customer_product WHERE ID_ORDER_CUSTOMER = " . $id;
        $result = mysqli_query($connection, $query);

        $query = "SELECT ID_ORDER_CUSTOMER, CUSNAME, sum(TOTAL_PRICE_CUSTOMER) AS TOTAL_PRICE_CUSTOMER FROM CONTAINS_CUSTOMER_PRODUCT, ORDER_CUSTOMER, PRODUCT, _CUSTOMER WHERE ID_ORDER_CUSTOMER = ORDER_CUSTOMER.ID AND ID_PRODUCT = PRODUCT.ID AND _CUSTOMER.ID = ID_CUSTOMER GROUP BY ID_ORDER_CUSTOMER";
        $result = mysqli_query($connection, $query);
        $members_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $members_list[] = $member;
        }
        return $members_list;

        // return "delete_one_order_customer" . $id;
    }

    function get_one_order_customer($id) {
        $connection = $this->connectDB();
        $query = "SELECT * FROM contains_customer_product, product WHERE ID_ORDER_CUSTOMER=$id AND ID_PRODUCT = PRODUCT.ID";
        $result = mysqli_query($connection, $query);
        $members_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $members_list[] = $member;
        }
        return $members_list;
    }

    function get_one_order_customer_total_price($id) {
        $connection = $this->connectDB();
        $query = "SELECT ID_ORDER_CUSTOMER, sum(TOTAL_PRICE_CUSTOMER) AS TOTAL_PRICE_CUSTOMER FROM CONTAINS_CUSTOMER_PRODUCT, ORDER_CUSTOMER, PRODUCT, _CUSTOMER WHERE ID_ORDER_CUSTOMER = ORDER_CUSTOMER.ID AND ID_PRODUCT = PRODUCT.ID AND _CUSTOMER.ID = ID_CUSTOMER AND ID_ORDER_CUSTOMER = $id GROUP BY ID_ORDER_CUSTOMER ";
        $result = mysqli_query($connection, $query);
        return mysqli_fetch_assoc($result);
    }
}
