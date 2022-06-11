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
        // $connection = $this->connectDB();
        // $query = "UPDATE public_information SET NAME_COMPANY = '" . $newCompanyName . "' , ADDRESS_COMPANY = '" . $newAddress . "' , EMAIL = '" . $newEmail . "' , PHONENUMBER = '" . $newPhoneNumber . "' WHERE TAX_ID = " . $taxID;
        // $result = mysqli_query($connection, $query);
        // return $result;
        return "get all news comment";
    }
}
