(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"24Yq":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(n){for(var e in n)l.hasOwnProperty(e)||(l[e]=n[e])}(e("DqLj"))},"4lDY":function(n,l,e){"use strict";e.d(l,"a",function(){return c});var t=e("CcnG"),i=e("Ip0R"),u=e("o1U6"),r=e("e5OV"),o=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.closeHandler()&&t),t},null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\xd7"]))],null,null)}function s(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["role","alert"]],[[8,"className",0]],null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,a)),t["\u0275did"](2,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),t["\u0275ncd"](null,0)],function(n,l){n(l,2,0,l.component.dismissible)},function(n,l){var e=l.component;n(l,0,0,"alert alert-"+e.type+(e.dismissible?" alert-dismissible":""))})}var c=t["\u0275ccf"]("ngb-alert",u.a,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ngb-alert",[],null,null,null,s,o)),t["\u0275did"](1,49152,null,0,u.a,[r.a],null,null)],null,null)},{dismissible:"dismissible",type:"type"},{close:"close"},["*"])},B58V:function(n,l,e){"use strict";var t=e("mrSG").__decorate;Object.defineProperty(l,"__esModule",{value:!0});var i=e("CcnG"),u=e("DtyJ");l.TreeDragDropService=function(){function n(){this.dragStartSource=new u.Subject,this.dragStopSource=new u.Subject,this.dragStart$=this.dragStartSource.asObservable(),this.dragStop$=this.dragStopSource.asObservable()}return n.prototype.startDrag=function(n){this.dragStartSource.next(n)},n.prototype.stopDrag=function(n){this.dragStopSource.next(n)},t([i.Injectable()],n)}()},CFL1:function(n,l,e){"use strict";e.d(l,"a",function(){return r});var t=e("VJzw"),i=e("CcnG"),u=e("t/Na"),r=function(){function n(n){this.httpClient=n,this.url=t.a}return n.ngInjectableDef=i.defineInjectable({factory:function(){return new n(i.inject(u.c))},token:n,providedIn:"root"}),n}()},D6tJ:function(n,l,e){"use strict";e.d(l,"a",function(){return r});var t=e("VJzw"),i=e("CcnG"),u=e("t/Na"),r=function(){function n(n){this.httpClient=n,this.url=t.a}return n.prototype.logCallBack=function(n){return this.httpClient.post(this.url+"/callback/add.php",n)},n.prototype.editCallBack=function(n){return this.httpClient.post(this.url+"/callback/edit.php",n)},n.ngInjectableDef=i.defineInjectable({factory:function(){return new n(i.inject(u.c))},token:n,providedIn:"root"}),n}()},DqLj:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("sdDj");l.DomHandler=t.DomHandler;var i=e("B58V");l.TreeDragDropService=i.TreeDragDropService;var u=e("oygf");l.ConfirmationService=u.ConfirmationService;var r=e("4Vzq");l.MessageService=r.MessageService},IRyT:function(n,l,e){"use strict";e.d(l,"a",function(){return i});var t=e("VJzw"),i=function(){function n(n){this.httpClient=n,this.url=t.a}return n.prototype.loginUser=function(n,l){return this.httpClient.get(this.url+"/account/SignIn.php?Email="+n+"&Password="+l)},n.prototype.changePassword=function(n){return this.httpClient.post(this.url+"/account/PasswordReset.php",n)},n.prototype.forgotPassword=function(n){return this.httpClient.get(this.url+"/account/ForgotEmail.php?Email="+n)},n}()},P6H5:function(n,l,e){"use strict";e.d(l,"a",function(){return u}),e.d(l,"b",function(){return o});var t=e("CcnG"),i=(e("kbps"),e("Ip0R")),u=(e("sdDj"),e("4Vzq"),t["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function r(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,[["msgel",1]],null,12,"div",[["aria-live","polite"],["class","ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow"]],null,[[null,"click"],[null,"mouseenter"]],function(n,l,e){var t=!0,i=n.component;return"click"===l&&(t=!1!==i.onMessageClick(n.context.index)&&t),"mouseenter"===l&&(t=!1!==i.onMessageHover(n.context.index)&&t),t},null,null)),t["\u0275did"](1,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](2,{"ui-growl-message-info":0,"ui-growl-message-warn":1,"ui-growl-message-error":2,"ui-growl-message-success":3}),(n()(),t["\u0275eld"](3,0,null,null,9,"div",[["class","ui-growl-item"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,0,"div",[["class","ui-growl-icon-close pi pi-times"]],null,[[null,"click"]],function(n,l,e){var i=!0;return"click"===l&&(i=!1!==n.component.remove(n.context.index,t["\u0275nov"](n,0))&&i),i},null,null)),(n()(),t["\u0275eld"](5,0,null,null,2,"span",[["class","ui-growl-image pi"]],null,null,null,null,null)),t["\u0275did"](6,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](7,{"pi-info-circle":0,"pi-exclamation-triangle":1,"pi-times":2,"pi-check":3}),(n()(),t["\u0275eld"](8,0,null,null,3,"div",[["class","ui-growl-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,1,"span",[["class","ui-growl-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](10,null,["",""])),(n()(),t["\u0275eld"](11,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t["\u0275eld"](12,0,null,null,0,"div",[["style","clear: both;"]],null,null,null,null,null))],function(n,l){n(l,1,0,"ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow",n(l,2,0,"info"==l.context.$implicit.severity,"warn"==l.context.$implicit.severity,"error"==l.context.$implicit.severity,"success"==l.context.$implicit.severity)),n(l,6,0,"ui-growl-image pi",n(l,7,0,"info"==l.context.$implicit.severity,"warn"==l.context.$implicit.severity,"error"==l.context.$implicit.severity,"success"==l.context.$implicit.severity))},function(n,l){n(l,10,0,l.context.$implicit.summary),n(l,11,0,l.context.$implicit.detail||"")})}function o(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{containerViewChild:0}),(n()(),t["\u0275eld"](1,0,[[1,0],["container",1]],null,4,"div",[],null,null,null,null,null)),t["\u0275did"](2,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275did"](3,278528,null,0,i.NgStyle,[t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngStyle:[0,"ngStyle"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,r)),t["\u0275did"](5,278528,null,0,i.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.styleClass,"ui-growl ui-widget"),n(l,3,0,e.style),n(l,5,0,e.value)},null)}},"bAr+":function(n,l,e){"use strict";e.d(l,"a",function(){return o}),e.d(l,"b",function(){return h});var t=e("CcnG"),i=(e("3GNW"),e("Ip0R")),u=e("VSng"),r=(e("7LN8"),e("sdDj")),o=(e("oygf"),t["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"animation",definitions:[{type:0,name:"void",styles:{type:6,styles:{transform:"translate3d(0, 25%, 0) scale(0.9)",opacity:0},offset:null},options:void 0},{type:0,name:"visible",styles:{type:6,styles:{transform:"none",opacity:1},offset:null},options:void 0},{type:1,expr:"* => *",animation:{type:4,styles:null,timings:"{{transitionParams}}"},options:null}],options:{}}]}}));function a(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"span",[["class","ui-dialog-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.header)})}function s(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"a",[["href","#"],["role","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.close(e)&&t),t},null,null)),t["\u0275did"](1,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](2,{"ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all":0}),(n()(),t["\u0275eld"](3,0,null,null,0,"span",[["class","pi pi-fw pi-times"]],null,null,null,null,null))],function(n,l){n(l,1,0,n(l,2,0,!0))},null)}function c(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"i",[],null,null,null,null,null)),t["\u0275did"](1,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null)],function(n,l){n(l,1,0,l.component.icon,"ui-confirmdialog-icon")},null)}function d(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","ui-dialog-footer ui-widget-content"]],null,null,null,null,null)),t["\u0275ncd"](null,0)],null,null)}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"button",[["pButton",""],["type","button"]],[[8,"className",0]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.accept()&&t),t},null,null)),t["\u0275prd"](512,null,r.DomHandler,r.DomHandler,[]),t["\u0275did"](2,4341760,null,0,u.ButtonDirective,[t.ElementRef,r.DomHandler],{label:[0,"label"],icon:[1,"icon"]},null)],function(n,l){var e=l.component;n(l,2,0,e.acceptLabel,e.acceptIcon)},function(n,l){n(l,0,0,l.component.acceptButtonStyleClass)})}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"button",[["pButton",""],["type","button"]],[[8,"className",0]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.reject()&&t),t},null,null)),t["\u0275prd"](512,null,r.DomHandler,r.DomHandler,[]),t["\u0275did"](2,4341760,null,0,u.ButtonDirective,[t.ElementRef,r.DomHandler],{label:[0,"label"],icon:[1,"icon"]},null)],function(n,l){var e=l.component;n(l,2,0,e.rejectLabel,e.rejectIcon)},function(n,l){n(l,0,0,l.component.rejectButtonStyleClass)})}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","ui-dialog-footer ui-widget-content"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](2,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,p)),t["\u0275did"](4,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,2,0,e.acceptVisible),n(l,4,0,e.rejectVisible)},null)}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,17,"div",[],[[4,"width","px"],[4,"height","px"],[24,"@animation",0]],[[null,"mousedown"],[null,"@animation.start"]],function(n,l,e){var t=!0,i=n.component;return"mousedown"===l&&(t=!1!==i.moveOnTop()&&t),"@animation.start"===l&&(t=!1!==i.onAnimationStart(e)&&t),t},null,null)),t["\u0275did"](1,278528,null,0,i.NgClass,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2],{ngClass:[0,"ngClass"]},null),t["\u0275pod"](2,{"ui-dialog ui-confirmdialog ui-widget ui-widget-content ui-corner-all ui-shadow":0,"ui-dialog-rtl":1}),t["\u0275pod"](3,{transitionParams:0}),t["\u0275pod"](4,{value:0,params:1}),(n()(),t["\u0275eld"](5,0,null,null,4,"div",[["class","ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,a)),t["\u0275did"](7,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,s)),t["\u0275did"](9,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](10,0,null,null,3,"div",[["class","ui-dialog-content ui-widget-content"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](12,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](13,0,null,null,0,"span",[["class","ui-confirmdialog-message"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,d)),t["\u0275did"](15,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](17,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,n(l,2,0,!0,e.rtl)),n(l,7,0,e.header),n(l,9,0,e.closable),n(l,12,0,e.icon),n(l,15,0,e.footer),n(l,17,0,!e.footer)},function(n,l){var e=l.component;n(l,0,0,e.width,e.height,n(l,4,0,"visible",n(l,3,0,e.transitionOptions))),n(l,13,0,e.message)})}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](1,16384,null,0,i.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.visible)},null)}},d5vW:function(n,l,e){"use strict";e.d(l,"a",function(){return r});var t=e("VJzw"),i=e("CcnG"),u=e("t/Na"),r=function(){function n(n){this.http=n,this.url=t.a}return n.prototype.addClient=function(n){return this.http.post(this.url+"/client/add-client.php",n)},n.prototype.updateClient=function(n){return this.http.post(this.url+"/client/edit-client.php",n)},n.prototype.addPolicyHolder=function(n){return this.http.post(this.url+"/client/add-policyholder.php",n)},n.prototype.addBeneficiary=function(n){return this.http.post(this.url+"/client/add-beneficiary.php",n)},n.prototype.updateBeneficiary=function(n){return this.http.post(this.url+"/client/edit-beneficiary.php",n)},n.prototype.getPolicies=function(){return this.http.get(this.url+"/client/get-policies.php")},n.prototype.getPoliciesAndBens=function(n){return this.http.get(this.url+"/client/get-policies-and-beneficiaries.php?UserId="+n)},n.ngInjectableDef=i.defineInjectable({factory:function(){return new n(i.inject(u.c))},token:n,providedIn:"root"}),n}()},mrnI:function(n,l,e){"use strict";e("IRyT")},o0su:function(n,l,e){"use strict";e("mrnI");var t=e("CFL1"),i=e("D6tJ"),u=e("d5vW");e.d(l,!1,function(){}),e.d(l,!1,function(){return t.a}),e.d(l,!1,function(){return i.a}),e.d(l,!1,function(){return u.a})}}]);