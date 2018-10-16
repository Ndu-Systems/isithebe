<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Name)) {
    $Name = $data->Name;
    $Cellphone= $data->Cellphone;
    $UserId= $data->UserId;   
    
    $result = $conn->prepare("INSERT INTO callbacks(CallBackId, Name, Cellphone, UserId, CallDate, IsCalled, StatusId) 
    VALUES (uuid(),?,?,?,now(),false,1)");
    if ($result->execute(array( 
        $Name,
        $Cellphone,
        $UserId        
     ))) {
        echo 1;
    } else {
        echo json_encode("error while trying create callback, please try again");
    }    
    
} else {
    
    echo json_encode("500");
}
?>