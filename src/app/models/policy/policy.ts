export interface Policy {
    PolicyId: string;
    Description: string;
    Amount: string;
    CreateUserId: string;
    CreateDate: string;
    ModifyUserId: string;
    ModifyDate: string;
    StatusId: string;
}
export interface IPolicyBenefit {
PolicyBenefitId?: string ; 
 PolicyId: string ; 
 BenefitId: string ; 
 CreateUserId: string ; 
 CreateDate?: Date ; 
 ModifyUserId?: string ; 
 ModifyDate?: Date ; 
 StatusId: number ; 
}