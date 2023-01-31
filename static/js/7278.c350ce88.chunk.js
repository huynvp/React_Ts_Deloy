"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[7278],{7278:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var u=t(9439),a=t(6435),r=t(2791),i=t(1087),c=t(2496),o=t(9256),l=t(2684),s=t(184);function v(){var e=(0,r.useState)(!1),n=(0,u.Z)(e,2),t=n[0],v=n[1],d=(0,r.useState)([]),p=(0,u.Z)(d,2),f=p[0],m=p[1],y=(0,r.useState)(""),k=(0,u.Z)(y,2),S=k[0],g=k[1],R=(0,r.useCallback)((function(){v(!0),c.Cp.GetList().then((function(e){e.isSuccess&&m(e.data.map((function(e,n){return{label:e,value:e,key:n}})))})).finally((function(){return v(!1)}))}),[]);return(0,r.useEffect)((function(){R()}),[R]),(0,s.jsxs)(o.ts,{title:"Log h\u1ec7 th\u1ed1ng",isLoading:t,buttonList:function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(i.rU,{to:"/admin/logAction",children:[" ",(0,s.jsx)(l.O,{type:"primary",value:"Log action"})]}),(0,s.jsxs)(i.rU,{to:"/admin/chart",children:[" ",(0,s.jsx)(l.O,{type:"secondary",value:"Chart"})]}),(0,s.jsxs)(i.rU,{to:"/admin/logStored",children:[" ",(0,s.jsx)(l.O,{type:"success",value:"Log stored procedure"})]})]})},children:[(0,s.jsx)(a.Z,{onChange:function(e){v(!0),c.Cp.GetDetail(e).then((function(e){e.isSuccess&&g(e.data)})).finally((function(){return v(!1)}))},options:f}),(0,s.jsx)("div",{children:(0,s.jsx)("pre",{className:"terminal",children:S})})]})}},2496:function(e,n,t){t.d(n,{Cp:function(){return l},KH:function(){return s},PH:function(){return i},br:function(){return d},eV:function(){return c},hl:function(){return v},rG:function(){return o}});var u=t(5671),a=t(3144),r=t(1285),i=function(){function e(){(0,u.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/templates?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/templates/".concat(e);return r.p.SendReq(n,"Get")}},{key:"Detail",value:function(e){var n="v2/mails/templates/".concat(e);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e){return r.p.SendReq("v2/mails/templates","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/templates/".concat(e);return r.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/templates/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(t,"Delete")}}]),e}(),c=function(){function e(){(0,u.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/apps?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/apps/".concat(e);return r.p.SendReq(n,"get")}},{key:"Add",value:function(e){return r.p.SendReq("v2/mails/apps","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/apps/".concat(e);return r.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/apps/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(t,"Delete")}},{key:"GetTemplate",value:function(e){var n="v2/mails/apps/".concat(e,"/templates");return r.p.SendReq(n,"Get")}},{key:"SaveTemplate",value:function(e,n){var t="v2/mails/apps/".concat(e,"/templates");return r.p.SendReq(t,"Put",n)}}]),e}(),o=function(){function e(){(0,u.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e,n,t,u){}},{key:"GetDetail",value:function(e,n,t,u){}},{key:"Add",value:function(e,n,t,u){}},{key:"Edit",value:function(e,n,t,u,a){}},{key:"Delete",value:function(e,n,t,u,a){}},{key:"SearchName",value:function(e,n,t,u){}},{key:"GetLinkStored",value:function(e,n,t,u,a){}},{key:"GetDetailLinkStored",value:function(e,n,t,u){}},{key:"AddLinkStored",value:function(e,n,t,u){}},{key:"EditLinkStored",value:function(e,n,t,u,a){}},{key:"DeleteLinkStored",value:function(e,n,t,u,a){}}]),e}(),l=function(){function e(){(0,u.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(){return r.p.SendReq("v2/mains/logging","Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/logging/".concat(e);return r.p.SendReq(n,"Get")}},{key:"GetListLogAction",value:function(e){var n="v2/mains/logging/logActions?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"ReportDetail",value:function(){return r.p.SendReq("v2/mains/logging/report","Get")}},{key:"GetChart",value:function(e){var n="v2/mains/logging/chart?numberItem=".concat(e);return r.p.SendReq(n,"Get")}}]),e}(),s=function(){function e(){(0,u.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/versionManages?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/versionManages/".concat(e);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e){return r.p.SendReq("v2/mains/versionManages","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/versionManages/".concat(e);return r.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/versionManages/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(t,"Delete")}}]),e}(),v=function(){function e(){(0,u.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/menus?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/menus/".concat(e);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e){return r.p.SendReq("v2/mains/menus","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/menus/".concat(e);return r.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/menus/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(t,"Delete")}},{key:"Query",value:function(e){var n="v2/mains/menus/query?q=".concat(e);return r.p.SendReq(n,"Get")}}]),e}(),d=function(){function e(){(0,u.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e){return r.p.SendReqV2({url:"v2/helpers/partners?".concat(e.generateQueryString()),method:r.O.Get})}},{key:"GetDetail",value:function(e){return r.p.SendReqV2({url:"v2/helpers/partners/".concat(e),method:r.O.Get})}},{key:"Add",value:function(e){return r.p.SendReqV2({url:"v2/helpers/partners",method:r.O.Post,data:e})}},{key:"Edit",value:function(e,n){return r.p.SendReqV2({url:"v2/helpers/partners/".concat(e),method:r.O.Put,data:n})}},{key:"Delete",value:function(e,n){return r.p.SendReqV2({url:"v2/helpers/partners/".concat(e,"?timestamp=").concat(encodeURIComponent(n)),method:r.O.Delete})}}]),e}()}}]);
//# sourceMappingURL=7278.c350ce88.chunk.js.map