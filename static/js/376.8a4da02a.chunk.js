"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[376],{8376:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var a=n(9439),i=n(8885),s=n(1095),o=n(6106),u=n(914),c=n(2426),l=n.n(c),r=n(2791),d=n(1830),y=n.n(d),f=n(3778),g=n(4492),D=n(7335),p=n(2684),h=n(7602),j=n(184);function k(t){var e=(0,r.useState)(""),n=(0,a.Z)(e,2),c=n[0],d=n[1],k=(0,r.useState)(l()()),m=(0,a.Z)(k,2),v=m[0],x=m[1],b=(0,r.useState)(l()()),K=(0,a.Z)(b,2),L=K[0],C=K[1],T=(0,r.useState)(),Z=(0,a.Z)(T,2),I=Z[0],M=Z[1],S=t.setIsLoading,F=(0,r.useCallback)((function(){void 0!==t.keyData&&(S(!0),g.gU.GetDetail(t.projectKey,t.keyData,(function(t){var e=t.data.data;d(e.name),x(l()(e.dateFrom)),C(l()(e.dateTo)),M(e.status)}),void 0,(function(){S(!1)})))}),[t.projectKey,t.keyData,S]);function U(){t.setVisible(!1),d(""),x(l()()),C(l()()),void 0!==t.setKeyData&&t.setKeyData(void 0)}return(0,r.useEffect)((function(){F()}),[F]),(0,j.jsx)(i.Z,{title:"Chi ti\u1ebft",open:t.visible,onClose:U,children:(0,j.jsxs)(s.Z,{layout:"vertical",onSubmitCapture:function(){var e={name:c,dateFrom:v.format("yyyy-MM-DD"),dateTo:L.format("yyyy-MM-DD"),status:I};S(!0),void 0!==t.keyData?function(e){g.gU.GetDetail(t.projectKey,t.keyData,(function(n){e=f.Fn.GetTimestamp(n,e),g.gU.Edit(t.projectKey,t.keyData,e,(function(e){f.Fn.PrintMsgSuccess(e),U(),t.loadData()}),(function(){t.setIsLoading(!1)}))}),(function(){t.setIsLoading(!1)}))}(e):function(e){g.gU.Add(t.projectKey,e,(function(e){f.Fn.PrintMsgSuccess(e),U(),t.loadData()}),(function(){t.setIsLoading(!1)}))}(e)},children:[(0,j.jsx)(D.H.Input,{label:"T\xean giai \u0111o\u1ea1n",value:c,setValue:d}),(0,j.jsx)(D.H.DatePicker,{label:"Ng\xe0y b\u1eaft \u0111\u1ea7u",value:v,setValue:x}),(0,j.jsx)(D.H.DatePicker,{label:"Ng\xe0y k\u1ebft th\xfac",value:L,setValue:C}),(0,j.jsx)(h.M,{label:"Tr\u1ea1ng th\xe1i",projectKey:t.projectKey,type:2,value:I,setValue:M}),(0,j.jsxs)(o.Z,{gutter:24,children:[(0,j.jsx)(u.Z,{span:"12",children:(0,j.jsx)(p.O,{isLoading:t.isLoading,htmlType:"submit",type:"success",value:void 0!==t.keyData?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi"})}),(0,j.jsx)(u.Z,{children:(0,j.jsx)(p.O,{isLoading:t.isLoading,type:"danger",disabled:void 0===t.keyData,onClick:function(){y().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a sprint n\xe0y kh\xf4ng?",showDenyButton:!0,confirmButtonText:"C\xf3",denyButtonText:"Kh\xf4ng"}).then((function(e){e.isConfirmed&&(t.setIsLoading(!0),g.gU.GetDetail(t.projectKey,t.keyData,(function(e){g.gU.Delete(t.projectKey,t.keyData,f.Fn.GetTimestamp(e),(function(e){f.Fn.PrintMsgSuccess(e),U(),t.loadData()}),(function(){t.setIsLoading(!1)}))}),(function(){t.setIsLoading(!1)})))}))},value:"X\xf3a sprint"})})]})]})})}}}]);
//# sourceMappingURL=376.8a4da02a.chunk.js.map