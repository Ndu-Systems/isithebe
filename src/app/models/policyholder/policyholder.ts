export interface IPolicyholder {
    PolicyHolderId?: string;
    PolicyId: string;
    UserId: string;
    PolicyTypeId: number;
    PolicyName: string;
    SoldDate?: Date;
    PremiumAmount: number;
    CreateUserId: number;
    CreateDate?: Date;
    ModifyUserId?: number;
    ModifyDate?: Date;
    StatusId: number;
}
