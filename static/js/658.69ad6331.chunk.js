"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[658],{4104:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(184);function i(e){return(0,a.jsx)("h3",{children:e.value})}},6822:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(9439),i=n(8787),s=n(2791),u=n(3778),l=n(2611),o=n(2496),r=n(2684),c=n(698),d=n(3977),f=n(4104),y=n(8885),v=n(1095),k=n(7335),D=n(3120),h=n(8071),g=n(184);function p(e){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),i=n[0],l=n[1],c=(0,s.useState)(null),d=(0,a.Z)(c,2),f=d[0],p=d[1],m=(0,s.useState)(null),x=(0,a.Z)(m,2),b=x[0],S=x[1],Z=(0,s.useState)(null),j=(0,a.Z)(Z,2),w=j[0],L=j[1],I=(0,s.useState)(null),C=(0,a.Z)(I,2),T=C[0],G=C[1],P=e.setIsLoading,F=(0,s.useCallback)((function(){void 0!==e.keyData&&(P(!0),o.hl.GetDetail(e.keyData,(function(e){var t=e.data.data;L(t.title),G(t.route),null!==t.parent&&(p(t.parent.key),S(t.parent.title+" - "+t.parent.route))}),void 0,(function(){P(!1)})))}),[e.keyData,P]);return(0,s.useEffect)((function(){F()}),[F]),(0,g.jsxs)(y.Z,{visible:e.visible,title:void 0===e.keyData?"Th\xeam m\u1edbi menu":"Ch\u1ec9nh s\u1eeda menu",onClose:function(){e.setVisible(!1),void 0!==e.keyData&&e.setKeyData(void 0),L(null),G(null),p(null),S(null)},children:[(0,g.jsx)(D.Z,{isLoading:e.isLoading}),(0,g.jsxs)(v.Z,{layout:"vertical",children:[(0,g.jsx)(k.Do,{label:"Title",value:w,setValue:L}),(0,g.jsx)(k.Do,{label:"Route",value:T,setValue:G}),(0,g.jsx)(h.Z,{label:"Parent",onSearch:function(t){e.setIsLoading(!0),o.hl.Query(t,(function(e){l(e.data.data)}),void 0,(function(){e.setIsLoading(!1)}))},dataSearch:i,resultKey:f,resultName:b,setResultKey:p,setResultName:S,isLoading:e.isLoading}),(0,g.jsx)(r.O,{value:void 0===e.keyData?"Th\xeam m\u1edbi":"Ch\u1ec9nh s\u1eeda",type:"success",onClick:function(){var t={title:w,route:T,parentKey:void 0===f||""===f||null===f?null:f};e.setIsLoading(!0),void 0===e.keyData?function(t){o.hl.Add(t,(function(t){u.Fn.PrintMsgSuccess(t),e.loadData()}),(function(){e.setIsLoading(!1)}))}(t):function(t){o.hl.GetDetail(e.keyData,(function(n){t=u.Fn.GetTimestamp(n,t),o.hl.Edit(e.keyData,t,(function(t){u.Fn.PrintMsgSuccess(t),e.loadData()}),(function(){e.setIsLoading(!1)}))}),(function(){e.setIsLoading(!1)}))}(t)}})]})]})}function m(){var e=[new l.Dw({title:"STT",dataIndex:"stt",key:"stt",disabled:!0}),new l.Dw({title:"Title",dataIndex:"title",key:"title"}),new l.Dw({title:"Route",dataIndex:"route",key:"route"}),new l.Dw({title:"Parent",dataIndex:"parent",key:"parentTitle"}),new l.Dw({title:"Action",key:"action",disabled:!0,render:function(e,t){return(0,g.jsxs)("div",{children:[(0,g.jsx)(r.O,{type:"link",value:"Ch\u1ec9nh s\u1eeda",onClick:function(){var e;e=t.key,O(!0),E(e)}}),(0,g.jsx)(i.Z,{title:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng?",onConfirm:function(){var e;e=t.key,I(!0),o.hl.GetDetail(e,(function(t){o.hl.Delete(e,u.Fn.GetTimestamp(t),(function(e){u.Fn.PrintMsgSuccess(e),M()}),(function(){I(!1)}))}),(function(){I(!1)}))},children:(0,g.jsx)(r.O,{type:"link",value:"X\xf3a"})})]})}})],t=(0,s.useState)(new c.D),n=(0,a.Z)(t,2),y=n[0],v=n[1],k=(0,s.useState)(new c.C),D=(0,a.Z)(k,2),h=D[0],m=D[1],x=(0,s.useState)([]),b=(0,a.Z)(x,2),S=b[0],Z=b[1],j=(0,s.useState)(!1),w=(0,a.Z)(j,2),L=w[0],I=w[1],C=(0,s.useState)(!1),T=(0,a.Z)(C,2),G=T[0],P=T[1],F=(0,s.useState)(!1),K=(0,a.Z)(F,2),N=K[0],O=K[1],R=(0,s.useState)(void 0),V=(0,a.Z)(R,2),B=V[0],E=V[1],M=(0,s.useCallback)((function(){I(!0),o.hl.GetList(y.pageNumber,y.pageSize,h,(function(e){v(new c.D(e));var t=e.data.data.pagedData.map((function(e,t){return{stt:t+1,key:e.key,title:e.title,route:e.route,parent:null===e.parent?"*** Root ***":e.parent.title}}));Z(t)}),void 0,(function(){I(!1)}))}),[y.pageNumber,y.pageSize,h]);return(0,s.useEffect)((function(){M()}),[M]),(0,g.jsxs)("div",{className:"my-box",children:[(0,g.jsx)(f.Z,{value:"Qu\u1ea3n l\xfd menu"}),(0,g.jsx)(r.O,{type:"primary",value:"Th\xeam m\u1edbi",onClick:function(){P(!0)}}),(0,g.jsx)(d.Z,{pageInfo:y,setPageInfo:v,column:e,dataSource:S,loading:L,loadData:M,orderBy:h,setOrderBy:m}),(0,g.jsx)(p,{visible:G,setVisible:P,isLoading:L,setIsLoading:I,loadData:M}),(0,g.jsx)(p,{keyData:B,setKeyData:E,visible:N,setVisible:O,isLoading:L,setIsLoading:I,loadData:M})]})}}}]);
//# sourceMappingURL=658.69ad6331.chunk.js.map