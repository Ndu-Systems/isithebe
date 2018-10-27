<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

$rows  = array();
$UserId =$_GET['UserId'];
if(isset($UserId)){
    $client = new Client();
    $client->UserId =$UserId;
	$client->GetBeneficiaries($conn);
	$client->GetPolicies($conn);
    $rows[] = $client;
}
echo json_encode($rows);


// classes

class Client {
    public $UserId;
    public $Policies;
    public $Beneficiaries;

    
    function GetBeneficiaries($conn){
        $result    = $conn->prepare("
        SELECT * FROM beneficiary WHERE UserId =?
        ");
        $result->execute(array(
            $this->UserId
		));
        if ($result->rowCount() > 0) {

            $benefitsLS  = array();
            while ($row = $result->fetch(PDO::FETCH_OBJ)) {
                $beneficiary = new Beneficiary();
				$beneficiary->beneficiaryId = $row->beneficiaryId;
				$beneficiary->name = $row->name;
				$beneficiary->surname = $row->surname;
				$beneficiary->idnumber = $row->idnumber;
				$beneficiary->type = $row->type;
				$beneficiary->createdate = $row->createdate;
				$beneficiary->ModifyUserId = $row->ModifyUserId;
				$beneficiary->ModifyDate = $row->ModifyDate;
				$beneficiary->CreateUserId = $row->CreateUserId;
				$beneficiary->UserId = $row->UserId;
			
               

                $beneficiaryLS[] = $beneficiary;
            }
            $this->Beneficiaries = $beneficiaryLS;
        
		}
    }

    function GetPolicies($conn){
        $result    = $conn->prepare("SELECT * from policyholder WHERE UserId =?");
        $result->execute(array(
            $this->UserId
		));
        if ($result->rowCount() > 0) {

            $policiesLS  = array();
            while ($row = $result->fetch(PDO::FETCH_OBJ)) {
                $policyHolder = new PolicyHolder();
				$policyHolder->PolicyHolderId = $row->PolicyHolderId;
				$policyHolder->PolicyId = $row->PolicyId;
				$policyHolder->UserId = $row->UserId;
				$policyHolder->PolicyTypeId = $row->PolicyTypeId;
				$policyHolder->PolicyName = $row->PolicyName;
				$policyHolder->SoldDate = $row->SoldDate;
				$policyHolder->PremiumAmount = $row->PremiumAmount;
				$policyHolder->CreateUserId = $row->CreateUserId;
				$policyHolder->CreateDate = $row->CreateDate;
				$policyHolder->ModifyUserId = $row->ModifyUserId;
				$policyHolder->ModifyDate = $row->ModifyDate;
				$policyHolder->StatusId = $row->StatusId;
              
                $policiesLS[] = $policyHolder;
            }
            $this->Policies = $policiesLS;
        
		}
    }


}
class PolicyHolder {
    public $PolicyHolderId;
    public $PolicyId;
    public $UserId;
    public $PolicyTypeId;
    public $PolicyName;
    public $SoldDate;
    public $PremiumAmount;
    public $CreateUserId;
    public $CreateDate;
    public $ModifyUserId;
    public $ModifyDate;
    public $StatusId;
    
}


class Beneficiary {
    public $beneficiaryId;
    public $name;
    public $surname;
    public $idnumber;
    public $type;
    public $createdate;
    public $ModifyUserId;
    public $ModifyDate;
    public $CreateUserId;
    public $UserId;
    
}


?>