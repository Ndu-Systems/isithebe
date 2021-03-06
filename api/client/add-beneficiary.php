<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->UserId)) {

    $name = $data->name;
    $surname = $data->surname;
    $idnumber = $data->idnumber; 
    $type = $data->type;
    $ModifyUserId = $data->ModifyUserId;
    $CreateUserId = $data->CreateUserId;
    $UserId  = $data->UserId;
    $StatusId = 1;
    
    $check = $conn->prepare("SELECT * FROM beneficiary WHERE idnumber = ? AND UserId =?");
    $check->execute(array(
        $idnumber,$UserId
    ));
    if ($check->rowCount() > 0) {
        die(json_encode('BENEFICIARY_HOLDER_EXIST'));
    }
     $result = $conn->prepare("INSERT INTO beneficiary(beneficiaryId, name, surname, idnumber, type, createdate, ModifyUserId, ModifyDate, CreateUserId, UserId, StatusId) 
                            VALUES (uuid(),?,?,?,?,Now(),?,Now(),?,?,?)");
    if ($result->execute(array(
        $name,
        $surname,
        $idnumber, 
        $type,
        $ModifyUserId,
        $CreateUserId,
        $UserId,
        $StatusId
    ))) {
        echo 1;
    } else {
        echo json_encode("error while trying createbeneficiary, please try again");
    }
    
    
} else {
    
    echo json_encode("500");
}
?>