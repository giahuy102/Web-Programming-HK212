<?php
namespace App\Model;

use mysqli;
use PDO;

class NewsModel {
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






}