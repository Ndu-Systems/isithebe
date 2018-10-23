<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
$data = json_decode(file_get_contents("php://input"));

if (isset($data->Email) )
{  
    $Email          = $data->Email;
    $UserId         = $data->UserId;
    $FirstName      = $data->FirstName;
    $Surname        = $data->Surname;
    $City           = $data->City;
    $ContactNumbers = $data->Cellphone;
    $AddressLine1   = $data->AddressLine1;
    $AddressLine2   = $data->AddressLine2;
    $AddressLine3   = $data->AddressLine3; 
    $PostCode       = $data->PostCode;
    $CreateUserId   = $data->CreateUserId;
    $CreateDate     = $data->CreateDate;
    $ModifyUserId   = $data->ModifyUserId;
    $StatusId       = $data->StatusId;
    $Role           = $data->Role;
    $Password       = $data->Password;
    $Benefactor     = $data->Benefactor;
    $IDNumber       =  $data->IDNumber;  

	$result = $conn->prepare("SELECT * FROM users WHERE UserId = ?"); 
	$result->execute(array($UserId));
		if ($result->rowCount() == 1) 
		{
                $result = $conn->prepare("                
                UPDATE users SET 
                FirstName=?,
                Surname=?,     
                Email=?,
                Password=?,
                ContactNumbers=?,
                AddressLine1=?,
                AddressLine2=?,
                AddressLine3=?,
                City=?,
                PostCode=?,
                IDNumber=?,
                Role=?,
                Benefactor=?,
                CreateUserId=?,
                CreateDate=?,                             
                ModifyUserId=?,
                ModifyDate= Now(),
                StatusId=?
                WHERE UserId = ?
                "); 
				if($result->execute(array(
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
                $Role,
                $Benefactor,
                $CreateUserId,
                $CreateDate,       
                $ModifyUserId,   
                $StatusId,
                $UserId))){
					echo 1;
				}
                else
                {
					echo json_encode("error while trying update client, please try again");
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