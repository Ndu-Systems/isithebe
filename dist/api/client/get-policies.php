<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";

$rows  = array();

$result = $conn->prepare("SELECT * FROM policies WHERE StatusId = ?");
$result->execute(array(
   1
));
if ($result->rowCount() > 0) {
    while ($row = $result->fetch(PDO::FETCH_OBJ)) {
        $policy = new Policy();

        $policy->PolicyId             = $row->PolicyId;
        $policy->Description             = $row->Description;
        $policy->Amount             = $row->Amount;
        $policy->CreateUserId             = $row->CreateUserId;
        $policy->CreateDate             = $row->CreateDate;
        $policy->ModifyUserId             = $row->ModifyUserId;
        $policy->ModifyDate             = $row->ModifyDate;
        $policy->StatusId             = $row->StatusId;
    
		$policy->GetBenefits($conn);
        $rows[] = $policy;

    }
}
echo json_encode($rows);

class Policy {
    public $PolicyId;
    public $Description;
    public $Amount;
    public $CreateUserId;
    public $CreateDate;
    public $ModifyUserId;
    public $ModifyDate;
    public $StatusId;

    public $benefits;
    public $benefitTotal;
    public $totalAmpount;



    function GetBenefits($conn){
        $result    = $conn->prepare("
        SELECT * FROM policybenefits 
       right join  benefits on policybenefits.BenefitId = benefits.BenefitId 
       WHERE PolicyId =?
        ");
        $result->execute(array(
            $this->PolicyId
		));
        if ($result->rowCount() > 0) {

            $benefitsLS  = array();
            while ($row = $result->fetch(PDO::FETCH_OBJ)) {
                $benefit = new Benefit();
				$benefit->BenefitId = $row->BenefitId;
				$benefit->Description = $row->Description;
				$benefit->Amount = $row->Amount;
				$benefit->StatusId = $row->StatusId;

                $benefitsLS[] = $benefit;
            }
            // get totals
            $tot = 0;
            $totBen = 0;
            foreach ($benefitsLS as $bef) {
                $totBen =   $totBen + $bef->Amount;
            }
            $this->benefitTotal =  $totBen;
            $this->totalAmpount =  $totBen +   $this->Amount;
            $this->benefits = $benefitsLS;
		}else{
            $this->benefitTotal = 0;
            $this->totalAmpount = $this->Amount;
            $this->benefits = [];
        }
    }
}


class Benefit {

    public $BenefitId; 
    public $Description;
    public $Amount; 
    public $StatusId;
}


?>