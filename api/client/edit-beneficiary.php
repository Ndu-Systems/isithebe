<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->beneficiaryId) )
{  

    $name      = $data->name;
    $surname        = $data->surname;
    $idnumber = $data->idnumber;
    $type = $data->type;
    $ModifyUserId   = $data->ModifyUserId; 
    $beneficiaryId   = $data->beneficiaryId; 

                $result = $conn->prepare("                
                UPDATE beneficiary SET 
                name=?,
                surname=?,     
                idnumber=?,                            
                type=?,                            
                ModifyUserId=?,
                ModifyDate= Now()
                WHERE beneficiaryId = ?
                "); 
				if($result->execute(array(
                $name,
                $surname,     
                $idnumber,
                $type,
                $ModifyUserId,
                $beneficiaryId
                ))){
					echo 1;
				}
                else
                {
					echo json_encode("error while trying update beneficiary, please try again");
				}		
		
		
}
else 
{

	echo json_encode( "500");
}
?>