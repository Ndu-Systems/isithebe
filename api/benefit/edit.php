<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Description) )
{  
    $Description        = $data->Description;
    $BenefitId           = $data->BenefitId;
    $Amount             = $data->Amount;     
    $StatusId           = $data->StatusId;   

	$result = $conn->prepare("SELECT * FROM benefits WHERE BenefitId = ?"); 
	$result->execute(array($BenefitId));
		if ($result->rowCount() == 1) 
		{
                $result = $conn->prepare("                
                    UPDATE benefits SET
                    Description=?,
                    Amount=?,                     
                    StatusId=?
                    WHERE BenefitId =?
                "); 
				if($result->execute(array(
                    $Description,
                    $Amount,
                    $StatusId,
                    $BenefitId
                ))){
					echo 1;
				}
                else
                {
					echo json_encode("error while trying update benefit, please try again");
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