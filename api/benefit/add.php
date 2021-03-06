<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Description)) {
    $Description = $data->Description;
    $Amount= $data->Amount;
    $CreateUserId = $data->CreateUserId;
    $StatusId= 1;   
    
    $result = $conn->prepare("INSERT INTO benefits(BenefitId, Description, Amount, CreatUserId, CreateDate, ModifyUserId, ModifyDate, StatusId)
    VALUES (uuid(),?,?,?,Now(),?,Now(),?)");
    if ($result->execute(array( 
        $Description,
        $Amount,
        $CreateUserId,
        $CreateUserId,
        $StatusId        
     ))) {
        echo 1;
    } else {
        echo json_encode("error while trying create benefit, please try again");
    }    
    
} else {
    
    echo json_encode("500");
}
?>