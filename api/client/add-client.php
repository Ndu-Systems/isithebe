<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Email)) {
    $Email          = $data->Email;
    $FirstName      = $data->FirstName;
    $Surname        = $data->Surname;
    $City           = $data->City;
    $ContactNumbers = $data->Cellphone;
    $AddressLine1   = $data->AddressLine1;
    $AddressLine2   = $data->AddressLine2;
    $AddressLine3   = $data->AddressLine3;
    $City           = $data->City;
    $PostCode       = $data->PostCode;
    $CreateUserId   = $data->CreateUserId;
    $ModifyUserId   = $data->CreateUserId;
    $StatusId       = 1;
    $Role           = 'client';
    $Password       = 'Password';
    $Benefactor     = 'na';
    $IDNumber       =  $data->IDNumber;
    $JoiningDate    =  $data->JoiningDate;

    if ($JoiningDate = 0) {
        $JoiningDate = date("Y/m/d");
    }
    // $check = $conn->prepare("SELECT * FROM users WHERE Email = ?");
    // $check->execute(array(
    //     $Email
    // ));
    // if ($check->rowCount() > 0) {
    //     die(json_encode('USER_EXIST'));
    // }

    $result = $conn->prepare("INSERT INTO users( FirstName, Surname,UserId,Email,Password,ContactNumbers,AddressLine1,AddressLine2,AddressLine3,City,PostCode,IDNumber,JoiningDate,Role,Benefactor,CreateUserId,CreateDate,ModifyUserId,ModifyDate,StatusId )
                                                VALUES (?,?,UUID(),?, ?,?,?,?,?,?,?,?,?,?,?,?,now(),?,now(),?)");
    if ($result->execute(array(
        $FirstName,
        $Surname,
        $Email,
        $Password,
        $ContactNumbers,
        $AddressLine1,
        $AddressLine2,
        $AddressLine3,
        $City,
        $PostCode,
        $IDNumber,
        $JoiningDate,
        $Role,
        $Benefactor,
        $CreateUserId,
        $ModifyUserId,
        $StatusId
    ))) {
        echo 1;
    } else {
        echo json_encode("error while trying create client, please try again");
    }
} else {

    echo json_encode("500");
}
