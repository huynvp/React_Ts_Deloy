"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[376],{8376:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var i=n(9439),s=n(8885),a=n(1095),u=n(6106),c=n(914),o=n(2426),l=n.n(o),r=n(2791),f=n(1087),d=n(1830),y=n.n(d),h=n(3778),g=n(4492),m=n(7335),p=n(2684),v=n(7602),x=n(184);function b(t){var e=(0,r.useState)(""),n=(0,i.Z)(e,2),o=n[0],d=n[1],b=(0,r.useState)(l()()),j=(0,i.Z)(b,2),D=j[0],S=j[1],k=(0,r.useState)(l()()),C=(0,i.Z)(k,2),T=C[0],V=C[1],Z=(0,r.useState)(),M=(0,i.Z)(Z,2),F=M[0],U=M[1],w=t.projectKey,G=t.keyData,L=t.setKeyData,P=t.isLoading,B=t.setIsLoading,K=t.visible,H=t.setVisible,E=t.loadData,I=(0,r.useCallback)((function(){void 0!==G&&(B(!0),g.gU.GetDetail(w,G).then((function(t){if(t.isSuccess){var e=t.data;d(e.name),S(l()(e.dateFrom)),V(l()(e.dateTo)),U(e.status.id)}})).finally((function(){return B(!1)})))}),[w,G,B]);function N(){H(!1),d(""),S(l()()),V(l()()),void 0!==L&&L(void 0)}return(0,r.useEffect)((function(){I()}),[I]),(0,x.jsx)(s.Z,{title:"Chi ti\u1ebft",open:K,onClose:N,children:(0,x.jsxs)(a.Z,{layout:"vertical",onSubmitCapture:function(){var t={name:o,dateFrom:D.format("yyyy-MM-DD"),dateTo:T.format("yyyy-MM-DD"),status:F};B(!0),void 0!==G?function(t){g.gU.GetDetail(w,G).then((function(e){e.isSuccess?(t=h.Fn.GetTimestampV2(e,t),g.gU.Edit(w,G,t).then((function(t){t.isSuccess&&(h.Fn.PrintMsgSuccessV2(t),N(),E())})).finally((function(){return B(!1)}))):B(!1)}))}(t):function(t){g.gU.Add(w,t).then((function(t){t.isSuccess&&(h.Fn.PrintMsgSuccessV2(t),N(),E())})).finally((function(){return B(!1)}))}(t)},children:[(0,x.jsx)(m.H.Input,{label:"T\xean giai \u0111o\u1ea1n",value:o,setValue:d}),(0,x.jsx)(m.H.DatePicker,{label:"Ng\xe0y b\u1eaft \u0111\u1ea7u",value:D,setValue:S}),(0,x.jsx)(m.H.DatePicker,{label:"Ng\xe0y k\u1ebft th\xfac",value:T,setValue:V}),(0,x.jsx)(v.M,{label:"Tr\u1ea1ng th\xe1i",projectKey:w,type:2,value:F,setValue:U}),(0,x.jsxs)(u.Z,{gutter:24,children:[(0,x.jsx)(c.Z,{span:"12",children:(0,x.jsx)(p.O,{isLoading:P,htmlType:"submit",type:"success",value:void 0!==G?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi"})}),(0,x.jsx)(c.Z,{children:(0,x.jsx)(p.O,{isLoading:P,type:"danger",disabled:void 0===G,onClick:function(){y().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a sprint n\xe0y kh\xf4ng?",showDenyButton:!0,confirmButtonText:"C\xf3",denyButtonText:"Kh\xf4ng"}).then((function(t){t.isConfirmed&&(B(!0),g.gU.GetDetail(w,G).then((function(t){t.isSuccess?g.gU.Delete(w,G,h.Fn.GetTimestampV2(t)).then((function(t){t.isSuccess&&(h.Fn.PrintMsgSuccessV2(t),N(),E())})).finally((function(){return B(!1)})):B(!1)})))}))},value:"X\xf3a sprint"})})]}),(0,x.jsx)(f.rU,{to:"/tools/tasks/projects/".concat(w,"/sprint/").concat(G,"/toDoList"),children:"Qu\u1ea3n l\xfd vi\u1ec7c c\u1ea7n l\xe0m"})]})})}}}]);
//# sourceMappingURL=376.81cebc89.chunk.js.map