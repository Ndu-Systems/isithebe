export const IS_LOCAL = true;
let api = 'http://www.isithebe.co.za/api';
let web = 'http://www.isithebe.co.za';
if (IS_LOCAL) {
    api = 'http://localhost:8080/isithebe/api';
    web = 'http://localhost:4200';
}

export const   API_URL = api;
export const  WEB_HOST = web;
export const  USER_EXIST = 'USER_EXIST';
export const  ACTIVE_POLICY_CODE = 1;
export const  SELECTED_POLICY = "selectedPolicyFromPolicyPage";

