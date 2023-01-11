"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[367],{5367:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(9439),u=t(2409),i=t(2791),r=t(7689),c=t(1830),o=t.n(c),s=t(3778),l=t(2496),v=t(6449),f=t(9256),m=t(2684),d=t(184);function p(){var e=(0,i.useState)(!1),n=(0,a.Z)(e,2),t=n[0],c=n[1],p=(0,i.useState)(""),y=(0,a.Z)(p,2),k=y[0],S=y[1],g=(0,i.useState)(""),h=(0,a.Z)(g,2),G=h[0],R=h[1],q=(0,i.useState)(""),P=(0,a.Z)(q,2),D=P[0],Z=P[1],I=(0,r.UO)().key,b=(0,r.s0)(),x=(0,i.useCallback)((function(){void 0!==I&&(c(!0),l.PH.GetDetail(I).then((function(e){e.isSuccess&&(S(e.data.code),R(e.data.title),Z(e.data.content))})).finally((function(){return c(!1)})))}),[I]);return(0,i.useEffect)((function(){x()}),[x]),(0,d.jsx)(f.ts,{isLoading:t,title:void 0===I?"Th\xeam template":"Ch\u1ec9nh s\u1eeda tenplate",children:(0,d.jsx)(f.xu,{children:(0,d.jsxs)(u.Z,{layout:"vertical",onSubmitCapture:function(){var e={title:G,code:k,content:D};c(!0),void 0===I?function(e){l.PH.Add(e).then((function(e){e.isSuccess&&s.Fn.PrintMsgSuccess(e)})).finally((function(){return c(!1)}))}(e):function(e){l.PH.Detail(I).then((function(n){n.isSuccess?(e=s.Fn.GetTimestamp(n,e),l.PH.Edit(I,e).then((function(e){e.isSuccess&&s.Fn.PrintMsgSuccess(e)})).finally((function(){return c(!1)}))):c(!1)}))}(e)},children:[(0,d.jsx)(v.H.Input,{label:"Code",value:k,setValue:S}),(0,d.jsx)(v.H.Input,{label:"Ti\xeau \u0111\u1ec1",value:G,setValue:R}),(0,d.jsx)(v.H.TextArea,{label:"N\u1ed9i dung",value:D,setValue:Z}),(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:D},className:"preview"}),(0,d.jsx)("hr",{}),(0,d.jsx)(m.O,{value:void 0===I?"Th\xeam":"Ch\u1ec9nh s\u1eeda",htmlType:"submit",type:"success"}),(0,d.jsx)(m.O,{type:"danger",value:"X\xf3a",onClick:function(){o().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a template n\xe0y kh\xf4ng?"}).then((function(e){e.isConfirmed&&l.PH.Detail(I).then((function(e){e.isSuccess?l.PH.Delete(I,s.Fn.GetTimestamp(e)).then((function(e){e.isSuccess&&(s.Fn.PrintMsgSuccess(e),b("/admin/template"))})).finally((function(){return c(!1)})):c(!1)}))}))}})]})})})}},3778:function(e,n,t){t.d(n,{Fn:function(){return r}});var a=t(5671),u=t(3144),i=t(8062),r=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){i.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){i.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,n,t,a){return(a.pageNumber-1)*a.pageSize+t+1}},{key:"PrintMsgSuccess_no_use",value:function(e){i.ZP.success(e.data.message)}}]),e}();r.GetIndexInArray=function(e,n,t){for(var a=-1,u=0;u<e.length;u++)if(e[u][n]===t){a=u;break}return a},r.GetIndexInArrayStr=function(e,n){for(var t=-1,a=0;a<e.length;a++)if(e[a].trim()===n.trim()){t=a;break}return t},r.SetPageInfo=function(e,n,t,a){var u=e.data.data.pageInfo;n(u.totalCount),t(u.currentPage),a(u.pageSize)},r.GetTimestamp=function(e,n){try{return null===n||void 0===n?e.data.timestamp:(n.timestamp=e.data.timestamp,n)}catch(t){console.log(t)}},r.GetTimestamp_no_use=function(e,n){try{return null===n||void 0===n?e.data.data.timestamp:(n.timestamp=e.data.data.timestamp,n)}catch(t){console.log(t)}}},2496:function(e,n,t){t.d(n,{Cp:function(){return s},KH:function(){return l},PH:function(){return r},eV:function(){return c},hl:function(){return v},rG:function(){return o}});var a=t(5671),u=t(3144),i=t(1285),r=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/templates?".concat(e.generateQueryString());return i.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/templates/".concat(e);return i.p.SendReq(n,"Get")}},{key:"Detail",value:function(e){var n="v2/mails/templates/".concat(e);return i.p.SendReq(n,"Get")}},{key:"Add",value:function(e){return i.p.SendReq("v2/mails/templates","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/templates/".concat(e);return i.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/templates/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.p.SendReq(t,"Delete")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/apps?".concat(e.generateQueryString());return i.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/apps/".concat(e);return i.p.SendReq(n,"get")}},{key:"Add",value:function(e){return i.p.SendReq("v2/mails/apps","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/apps/".concat(e);return i.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/apps/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.p.SendReq(t,"Delete")}},{key:"GetTemplate",value:function(e){var n="v2/mails/apps/".concat(e,"/templates");return i.p.SendReq(n,"Get")}},{key:"SaveTemplate",value:function(e,n){var t="v2/mails/apps/".concat(e,"/templates");return i.p.SendReq(t,"Put",n)}}]),e}(),o=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e,n,t,a){}},{key:"GetDetail",value:function(e,n,t,a){}},{key:"Add",value:function(e,n,t,a){}},{key:"Edit",value:function(e,n,t,a,u){}},{key:"Delete",value:function(e,n,t,a,u){}},{key:"SearchName",value:function(e,n,t,a){}},{key:"GetLinkStored",value:function(e,n,t,a,u){}},{key:"GetDetailLinkStored",value:function(e,n,t,a){}},{key:"AddLinkStored",value:function(e,n,t,a){}},{key:"EditLinkStored",value:function(e,n,t,a,u){}},{key:"DeleteLinkStored",value:function(e,n,t,a,u){}}]),e}(),s=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(){return i.p.SendReq("v2/mains/logging","Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/logging/".concat(e);return i.p.SendReq(n,"Get")}},{key:"GetListLogAction",value:function(e){var n="v2/mains/logging/logActions?".concat(e.generateQueryString());return i.p.SendReq(n,"Get")}},{key:"ReportDetail",value:function(){return i.p.SendReq("v2/mains/logging/report","Get")}},{key:"GetChart",value:function(e){var n="v2/mains/logging/chart?numberItem=".concat(e);return i.p.SendReq(n,"Get")}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/versionManages?".concat(e.generateQueryString());return i.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/versionManages/".concat(e);return i.p.SendReq(n,"Get")}},{key:"Add",value:function(e){return i.p.SendReq("v2/mains/versionManages","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/versionManages/".concat(e);return i.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/versionManages/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.p.SendReq(t,"Delete")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/menus?".concat(e.generateQueryString());return i.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/menus/".concat(e);return i.p.SendReq(n,"Get")}},{key:"Add",value:function(e){return i.p.SendReq("v2/mains/menus","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/menus/".concat(e);return i.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/menus/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.p.SendReq(t,"Delete")}},{key:"Query",value:function(e){var n="v2/mains/menus/query?q=".concat(e);return i.p.SendReq(n,"Get")}}]),e}()}}]);
//# sourceMappingURL=367.d919eb74.chunk.js.map