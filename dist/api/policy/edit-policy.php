<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Description) )
{  
    $Description        = $data->Description;
    $PolicyId           = $data->PolicyId;
    $Amount             = $data->Amount;
    $ModifyUserId       = $data->ModifyUserId;
    $StatusId           = $data->StatusId;   

	$result = $conn->prepare("SELECT * FROM policies WHERE PolicyId = ?"); 
	$result->execute(array($PolicyId));
		if ($result->rowCount() == 1) 
		{
                $result = $conn->prepare("                
                    UPDATE policies SET
                    Description=?,
                    Amount=?,
                    ModifyUserId=?,
                    ModifyDate=Now(),
                    StatusId=?
                    WHERE PolicyId =?
                "); 
				if($result->execute(array(
                    $Description,
                    $Amount,
                    $ModifyUserId,
                    $StatusId,
                    $PolicyId
                ))){
					echo 1;
				}
                else
                {
					echo json_encode("error while trying update policy, please try again");
				}		
		}
		else{
			
			echo json_encode("500");
		}       
	
}
else 
{

	echo json_encode( "500");
}
?>