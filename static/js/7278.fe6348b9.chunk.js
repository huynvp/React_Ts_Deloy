"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[7278],{7278:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a=t(9439),u=t(6435),i=t(2791),r=t(1087),c=t(2496),o=t(9256),l=t(2684),s=t(184);function v(){var e=(0,i.useState)(!1),n=(0,a.Z)(e,2),t=n[0],v=n[1],d=(0,i.useState)([]),f=(0,a.Z)(d,2),m=f[0],y=f[1],k=(0,i.useState)(""),p=(0,a.Z)(k,2),S=p[0],g=p[1],b=(0,i.useCallback)((function(){v(!0),c.Cp.GetList().then((function(e){e.isSuccess&&y(e.data.map((function(e,n){return{label:e,value:e,key:n}})))})).finally((function(){return v(!1)}))}),[]);return(0,i.useEffect)((function(){b()}),[b]),(0,s.jsxs)(o.ts,{title:"Log h\u1ec7 th\u1ed1ng",isLoading:t,buttonList:function(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.rU,{to:"/admin/logAction",children:[" ",(0,s.jsx)(l.O,{type:"primary",value:"Log action"})]}),(0,s.jsxs)(r.rU,{to:"/admin/chart",children:[" ",(0,s.jsx)(l.O,{type:"secondary",value:"Chart"})]}),(0,s.jsxs)(r.rU,{to:"/admin/logStored",children:[" ",(0,s.jsx)(l.O,{type:"success",value:"Log stored procedure"})]})]})},children:[(0,s.jsx)(u.Z,{onChange:function(e){v(!0),c.Cp.GetDetail(e).then((function(e){e.isSuccess&&g(e.data)})).finally((function(){return v(!1)}))},options:m}),(0,s.jsx)("div",{children:(0,s.jsx)("pre",{className:"terminal",children:S})})]})}},2496:function(e,n,t){t.d(n,{Cp:function(){return l},KH:function(){return s},PH:function(){return r},eV:function(){return c},hl:function(){return v},rG:function(){return o}});var a=t(5671),u=t(3144),i=t(1285),r=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/templates?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/templates/".concat(e);return i.b.SendReq(n,"Get")}},{key:"Detail",value:function(e){var n="v2/mails/templates/".concat(e);return i.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return i.b.SendReq("v2/mails/templates","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/templates/".concat(e);return i.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/templates/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.b.SendReq(t,"Delete")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/apps?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/apps/".concat(e);return i.b.SendReq(n,"get")}},{key:"Add",value:function(e){return i.b.SendReq("v2/mails/apps","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/apps/".concat(e);return i.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/apps/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.b.SendReq(t,"Delete")}},{key:"GetTemplate",value:function(e){var n="v2/mails/apps/".concat(e,"/templates");return i.b.SendReq(n,"Get")}},{key:"SaveTemplate",value:function(e,n){var t="v2/mails/apps/".concat(e,"/templates");return i.b.SendReq(t,"Put",n)}}]),e}(),o=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e,n,t,a){}},{key:"GetDetail",value:function(e,n,t,a){}},{key:"Add",value:function(e,n,t,a){}},{key:"Edit",value:function(e,n,t,a,u){}},{key:"Delete",value:function(e,n,t,a,u){}},{key:"SearchName",value:function(e,n,t,a){}},{key:"GetLinkStored",value:function(e,n,t,a,u){}},{key:"GetDetailLinkStored",value:function(e,n,t,a){}},{key:"AddLinkStored",value:function(e,n,t,a){}},{key:"EditLinkStored",value:function(e,n,t,a,u){}},{key:"DeleteLinkStored",value:function(e,n,t,a,u){}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(){return i.b.SendReq("v2/mains/logging","Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/logging/".concat(e);return i.b.SendReq(n,"Get")}},{key:"GetListLogAction",value:function(e){var n="v2/mains/logging/logActions?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"ReportDetail",value:function(){return i.b.SendReq("v2/mains/logging/report","Get")}},{key:"GetChart",value:function(e){var n="v2/mains/logging/chart?numberItem=".concat(e);return i.b.SendReq(n,"Get")}}]),e}(),s=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/versionManages?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/versionManages/".concat(e);return i.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return i.b.SendReq("v2/mains/versionManages","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/versionManages/".concat(e);return i.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/versionManages/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.b.SendReq(t,"Delete")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/menus?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/menus/".concat(e);return i.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return i.b.SendReq("v2/mains/menus","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/menus/".concat(e);return i.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/menus/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.b.SendReq(t,"Delete")}},{key:"Query",value:function(e){var n="v2/mains/menus/query?q=".concat(e);return i.b.SendReq(n,"Get")}}]),e}()}}]);
//# sourceMappingURL=7278.fe6348b9.chunk.js.map