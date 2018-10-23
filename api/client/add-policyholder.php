<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->UserId)) {
    $CreateUserId          = $data->CreateUserId;
    $PolicyId          = $data->PolicyId;
    $PolicyName          = $data->PolicyName;
    $PolicyTypeId          = $data->PolicyTypeId;
    $StatusId          = $data->StatusId;
    $UserId          = $data->UserId;
    $PremiumAmount          = $data->PremiumAmount;
    
    $check = $conn->prepare("SELECT * FROM policyholder WHERE PolicyId = ? AND UserId =?");
    $check->execute(array(
        $PolicyId,$UserId
    ));
    if ($check->rowCount() > 0) {
        die(json_encode('POLICY_HOLDER_EXIST'));
    }
    
    $result = $conn->prepare("INSERT INTO policyholder(PolicyHolderId, PolicyId, UserId, PolicyTypeId, PolicyName, SoldDate, PremiumAmount, CreateUserId, CreateDate, ModifyUserId, ModifyDate, StatusId)   
                            VALUES (uuid(),?,?,?,?,now(),?,?,now(),?,now(),?)");
    if ($result->execute(array(
        $PolicyId,
        $UserId,
        $PolicyTypeId,
        $PolicyName,
        $PremiumAmount,
        $CreateUserId,
        $CreateUserId,
        $StatusId
        
    ))) {
        echo 1;
    } else {
        echo json_encode("error while trying create policy holder, please try again");
    }
    
    
} else {
    
    echo json_encode("500");
}
?>