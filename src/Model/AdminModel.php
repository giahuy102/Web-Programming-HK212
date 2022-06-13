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
        $query = "SELECT * FROM MANAGES_COMMENT_NEWS_USER, _COMMENT, NEWS, _MEMBER, _USER WHERE ID_COMMENT = _COMMENT.ID AND ID_NEWS = NEWS.ID AND ID_MEMBER = _MEMBER.ID AND _MEMBER.ID = _USER.ID";
        $result = mysqli_query($connection, $query);
        $news_comment_list = array();
        while($member = mysqli_fetch_assoc($result)){
            $news_comment_list[] = $member;
        }
        return $news_comment_list;
    }

    function get_comment_by_product_id($product_id){
        $connection = $this->connectDB();
        $query = "SELECT _comment.ID, ID_MEMBER, CONTENT, AVATAR, _user._NAME FROM manages_comment_product_user JOIN _comment ON ID_COMMENT = _comment.ID JOIN _user ON ID_MEMBER = _user.ID WHERE (manages_comment_product_user.ID_PRODUCT = ". $product_id. ") ORDER BY CREATED_AT";
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
    
    function get_all_news() {
        $connection = $this->connectDB();
        $query = "SELECT * FROM NEWS";
        $result = mysqli_query($connection, $query);
        $news_list = array();
        while($news = mysqli_fetch_assoc($result)) {
            $news_list[] = $news;
        }
        return $news_list;
    }

    function get_one_news($id) {
        $connection = $this->connectDB();
        $query = "SELECT * FROM NEWS WHERE ID=$id";
        $result = mysqli_query($connection, $query);
        return mysqli_fetch_assoc($result);
    }

    function update_user_db_by_id($user_id, $name, $email, $phone, $address){
        $connection = $this->connectDB();
        $query = "UPDATE _user SET _NAME = '". $name ."',EMAIL = '". $email ."', PHONENUMBER = '". $phone."', _ADDRESS = '". $address."' WHERE ID = ". $user_id;
        $result = mysqli_query($connection, $query);
    }
    
    function create_one_news($title, $content, $id_admin) {
        $connection = $this->connectDB();
        $query = "INSERT INTO NEWS(TITLE, CONTENT_NEWS, CREATED_AT, ID_ADMIN) VALUE('" . $title . "', '" . $content . "', NOW(), '" . $id_admin . "')";
        $result = mysqli_query($connection, $query);
    }

    function edit_one_news($id, $title, $content) {
        $connection = $this->connectDB();
        $query = "UPDATE NEWS SET TITLE = '" . $title . "', CONTENT_NEWS = '" . $content . "' WHERE ID = " . $id;
        $result = mysqli_query($connection, $query);
    }

    function delete_one_news ($id) {
        $connection = $this->connectDB();
        $query = "DELETE FROM NEWS WHERE ID = " . $id;
        $result = mysqli_query($connection, $query);
        return $result;
    }

    function get_all_category() {
        $connection = $this->connectDB();
        $query = "SELECT * FROM CATEGORY ORDER BY ID";
        $result = mysqli_query($connection, $query);
        $category_list = array();
        while($category = mysqli_fetch_assoc($result)) {
            $category_list[] = $category;
        }
        return $category_list;
    }

    function delete_one_category ($id) {
        $connection = $this->connectDB();
        $query = "DELETE FROM CATEGORY WHERE ID = " . $id;
        $result = mysqli_query($connection, $query);
        return $result;
    }

    function create_one_category($name) {
        $connection = $this->connectDB();
        $query = "INSERT INTO CATEGORY(NAME) VALUE('" . $name . "')";
        $result = mysqli_query($connection, $query);
    }

    function edit_one_category($id, $name) {
        $connection = $this->connectDB();
        $query = "UPDATE CATEGORY SET NAME = '" . $name . "' WHERE ID = " . $id;
        $result = mysqli_query($connection, $query);
    }

    function get_all_product_join_category() {
        $connection = $this->connectDB();
        $query = "SELECT PRODUCT.ID, PRODUCT.NAME, PRICE, IMAGE, _DESCRIPTION, TOTAL_LIKES_PRODUCT, CREATE_AT, ID_CATEGORY, CATEGORY.NAME AS NAME_CATEGORY FROM PRODUCT , CATEGORY WHERE PRODUCT.ID_CATEGORY = CATEGORY.ID ORDER BY PRODUCT.ID";
        $result = mysqli_query($connection, $query);
        $category_list = array();
        while($category = mysqli_fetch_assoc($result)) {
            $category_list[] = $category;
        }
        return $category_list;
    }

    function create_one_product($name, $price, $description, $image, $category_id) {
        $connection = $this->connectDB();
        $query = "INSERT INTO PRODUCT(NAME, PRICE, IMAGE, _DESCRIPTION, CREATE_AT, ID_CATEGORY) VALUE('" . $name . "', " . $price . ", '" . $image . "', '" . $description . "', NOW(), " . $category_id . ")";
        $result = mysqli_query($connection, $query);
    }

    function get_one_product($id) {
        $connection = $this->connectDB();
        $query = "SELECT PRODUCT.ID, PRODUCT.NAME, PRICE, IMAGE, _DESCRIPTION, TOTAL_LIKES_PRODUCT, CREATE_AT, ID_CATEGORY, CATEGORY.NAME AS NAME_CATEGORY FROM PRODUCT , CATEGORY WHERE PRODUCT.ID_CATEGORY = CATEGORY.ID AND PRODUCT.ID = " . $id;
        $result = mysqli_query($connection, $query);
        return mysqli_fetch_assoc($result);
    }

    function edit_one_product($id, $name, $price, $description, $image, $category_id) {
        $connection = $this->connectDB();
        $query = "UPDATE PRODUCT SET NAME = '" . $name . "', PRICE = " . $price . ", IMAGE = '" . $image . "', _DESCRIPTION = '" . $description . "', ID_CATEGORY = " . $category_id . " WHERE ID = " . $id;
        $result = mysqli_query($connection, $query);
    }

    function delete_one_product ($id) {
        $connection = $this->connectDB();
        $query = "DELETE FROM PRODUCT WHERE ID = " . $id;
        $result = mysqli_query($connection, $query);
        return $result;
    }

    function update_avatar_source($user_id, $avatar){
        $connection = $this->connectDB();
        $query = "UPDATE _user SET AVATAR = '". $avatar ."' WHERE ID = ". $user_id;
        $result = mysqli_query($connection, $query);
        return $this->get_user_db_by_id($user_id);
    }

    function get_password_by_user_id($user_id){
        $connection = $this->connectDB();
        $query = "SELECT USER_PASSWORD FROM _USER WHERE ID = ". $user_id;
        $result = mysqli_query($connection, $query);
        return mysqli_fetch_assoc($result);
    }

    function update_password_by_user_id($user_id, $newpassword){
        $connection = $this->connectDB();
        $query = "UPDATE _user SET USER_PASSWORD = '". $newpassword ."' WHERE ID = ". $user_id;
        $result = mysqli_query($connection, $query);
        return $result;
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
