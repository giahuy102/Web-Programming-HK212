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
}
