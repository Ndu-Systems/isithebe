<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->PolicyId)) {
    $PolicyId          = $data->PolicyId;
    $BenefitId          = $data->BenefitId;
    $CreateUserId          = $data->CreateUserId;
    $StatusId          = $data->StatusId;

    
    $check = $conn->prepare("SELECT * FROM policybenefits WHERE PolicyId = ? AND BenefitId =?");
    $check->execute(array(
        $PolicyId,$BenefitId
    ));
    if ($check->rowCount() > 0) {
        die(json_encode('POLICY_BENEFIT_HOLDER_EXIST'));
    }
    
    $result = $conn->prepare("INSERT INTO policybenefits(PolicyBenefitId, PolicyId, BenefitId, CreateUserId, CreateDate, StatusId) 
                                                VALUES (UUID(),?,?,?,now(),?)");
    if ($result->execute(array(
        $PolicyId,
        $BenefitId,
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