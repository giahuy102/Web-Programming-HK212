<?php
namespace App\Model;

use mysqli;
use PDO;

class UserModel {
    function connectDB() {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $connection = mysqli_connect($servername, $username, $password);
        
        if (!$connection){
            die('Could not connect: ' . mysqli_connect_error());
        }
        $db_selected = mysqli_select_db($connection, 'RESTAURANT_2022');
        if (!$db_selected){
            die('Cant use cars: '. mysqli_error($connection));
        }
        return $connection;
    }

    function addMember($role, $username, $password, $email, $phoneNumber, $address, $name, $avatar){

        $connection = $this->connectDB();

        $query = "insert into _USER(_ROLE, USERNAME, USER_PASSWORD, EMAIL, PHONENUMBER, _ADDRESS, _NAME, AVATAR) VALUE('" . $role . "','" . $username . "','" . $password . "','" . $email . "','" . $phoneNumber . "','" . $address . "','" . $name . "','" . $avatar ."')";
        $result = NULL;
        $result = mysqli_query($connection, $query);
        // try {
        //     $result = mysqli_query($connection, $query);
        // }
        // catch (Exception $e) {
        //     echo array(
        //         "message" => $e->getMessage()
        //     );
        // }

        if ($result) {
            $last_id = mysqli_insert_id($connection);
            $q = "insert into _MEMBER(ID) VALUE(" . $last_id . ")";
            if (mysqli_query($connection, $q)) return TRUE;
            return FALSE;
        }
        return FALSE;
    
    }

    function findUserByPhone($phoneNumber) {
        
        $connection = $this->connectDB();
        $query = "SELECT * FROM _USER WHERE PHONENUMBER = ". $phoneNumber;


        $result = mysqli_query($connection, $query);

        return mysqli_fetch_assoc($result);
    }







}