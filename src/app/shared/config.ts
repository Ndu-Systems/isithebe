import * as $ from "jquery";

export const IS_LOCAL = false;
let api = "https://www.isithebe.co.za/api";
let web = "https://www.isithebe.co.za";
if (IS_LOCAL) {
    api = "http://localhost:8080/isithebe/api";
    web = "http://localhost:4200";
}

export const API_URL = api;
export const WEB_HOST = web;
export const USER_EXIST = "USER_EXIST";
export const USER_NOT_FOUND = "USER_NOT_FOUND";
export const POLICY_HOLDER_EXIST = "POLICY_HOLDER_EXIST";
export const POLICY_BENEFIT_HOLDER_EXIST = "POLICY_BENEFIT_HOLDER_EXIST";
export const BENEFICIARY_HOLDER_EXIST = "BENEFICIARY_HOLDER_EXIST";
export const ACTIVE_POLICY_CODE = 1;
export const SELECTED_POLICY = "selectedPolicyFromPolicyPage";
export const SELECTED_CLIENT = "selectedClientFromClientPage";
export const CURRENT_LOGGED_IN_USER = "currentUser";
export const CALL_ME_BACK_CRITACAL_NUMBER_OF_DAYS: number = 3;
export const EMAIL_SERVER = "http://www.isithebe.co.za/api/email.php";

export function loadScreen() {
    $(".loading-screen").fadeIn("slow");
}
export function stopLoadingScreen() {
    $(".loading-screen").fadeOut("slow");
}
