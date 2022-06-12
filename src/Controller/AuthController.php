<?php


namespace App\Controller;
use App\Model\UserModel;

use \Firebase\JWT\JWT;

class AuthController {
    public $userModel;
    
    function __construct() {
        $this->userModel = new UserModel();
    }


    function register($request) {
        $data = json_decode(file_get_contents("php://input"));
        // $a = $this->userModel->addMember('member', $data->username, $data->password, $data->email, $data->phoneNumber, $data->address, $data->name);
        if ($this->userModel->addMember('member', $data->username, $data->password, $data->email, $data->phoneNumber, $data->address, $data->name, '')) {
            http_response_code(200);
            echo json_encode(array("message" => "Success"));        
        }
        else {
            http_response_code(400);
            echo json_encode(array("message" => "Failed"));
        
        }
    }

    function login($request) {
 
        $data = json_decode(file_get_contents("php://input"));
        $result = $this->userModel->findUserByPhone($data->phoneNumber);


        if ($result && $data->password == $result['USER_PASSWORD']) {



            $secret_key = "legiahuy09122001";
            $issuer_claim = "THE_ISSUER"; // this can be the servername
            $audience_claim = "THE_AUDIENCE";
            $issuedat_claim = time(); // issued at
            $token = array(
                "iss" => $issuer_claim,
                "aud" => $audience_claim,
                "iat" => $issuedat_claim,
                "data" => array(
                    "id" => $result['ID'],
                    "username" => $result['USERNAME'],
                    "phoneNumber" => $result['PHONENUMBER'],
                    "email" => $result['EMAIL']
                )
            );

            http_response_code(200);

            $jwt = JWT::encode($token, $secret_key, 'HS256');

            echo json_encode(
                array(
                    "message" => "Login success",
                    "jwt_data" => array(
                        "jwt" => $jwt,
                        "id" => $result['ID'],
                        "email" => $result['EMAIL'],
                        "username" => $result['USERNAME']
                    )

                )
            );


        }
        else {

            http_response_code(401);
            echo json_encode(array("message" => "Login failed."));
        }
    }

}


?>