<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->ItemId)) {
    
	$ItemId = $data->ItemId; 
	$TableName = $data->TableName; 
	$Reason =   $data->Reason; 
	$CreateUserId = $data->CreateUserId;	 
	$ModifyUserId =$data->CreateUserId;
    $StatusId= 1;   

    $result = $conn->prepare("INSERT INTO archives 
    (ArchiveId, ItemId, TableName, Reason, CreateUserId, CreateDate, ModifyUserId,ModifyDate, StatusId) 
    VALUES (uuid(), ?, ?, ?, ?, now(), ?, now(), ?)");
    if ($result->execute(array( 
            $ItemId,
            $TableName,
            $Reason,
            $CreateUserId,
            $ModifyUserId,
            $StatusId
     ))) {
        echo 1;
    } else {
        echo json_encode("error while trying archive, please try again");
    }    
    
} else {
    
    echo json_encode("500");
}
?>