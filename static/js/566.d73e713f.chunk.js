"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[566],{8071:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(9439),i=n(2684),s=n(8885),o=n(2409),r=n(2791),u=n(3120),c=n(3778),l=n(7335),d=n(184);function f(e){var t=e.readonly,n=e.muityChoose;void 0===n&&(n=!1);var f=(0,r.useState)(!1),k=(0,a.Z)(f,2),y=k[0],v=k[1];return(0,r.useEffect)((function(){}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.H.Input,{label:e.label,onClick:function(){!0!==t&&v(!0)},readOnly:!0,value:e.resultName}),(0,d.jsx)(s.Z,{placement:"top",open:y&&!t,onClose:function(){v(!1)},children:(0,d.jsxs)("div",{children:[(0,d.jsx)(u.Z,{isLoading:e.isLoading}),(0,d.jsx)(i.O,{value:"X\xf3a t\xecm ki\u1ebfm",onClick:function(){e.setResultKey(""),e.setResultName("")}}),(0,d.jsx)(l.H.Input,{readOnly:!0,label:"K\u1ebft qu\u1ea3",value:e.resultName}),(0,d.jsx)(o.Z,{children:(0,d.jsx)(l.H.Search,{label:"T\xecm ki\u1ebfm",onSearch:function(t){e.onSearch(t)}})}),e.dataSearch.map((function(t,a){return(0,d.jsx)(i.O,{value:t.value,onClick:function(){return function(t){if(console.log(t),!0===n){var a=e.resultName.split(",");if(-1!==c.Fn.GetIndexInArrayStr(a,t.value))return void console.log("EXIST ARRAY");e.setResultKey("".concat(e.resultKey).concat(""!==e.resultKey?", ":"").concat(t.key)),e.setResultName("".concat(e.resultName).concat(""!==e.resultName?", ":"").concat(t.value))}else e.setResultKey(t.key),e.setResultName(t.value)}(t)}},t.key)}))]})})]})}},1566:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(9439),i=n(2791),s=n(7309),o=n(8787),r=n(2496),u=n(3778),c=n(2684),l=n(8885),d=n(2409),f=n(8071),k=n(184);function y(e){var t=(0,i.useState)(""),n=(0,a.Z)(t,2),s=n[0],o=n[1],y=(0,i.useState)(""),v=(0,a.Z)(y,2),m=v[0],S=v[1],g=(0,i.useState)(""),h=(0,a.Z)(g,2),D=h[0],L=h[1],x=(0,i.useState)(""),Z=(0,a.Z)(x,2),j=Z[0],p=Z[1],b=(0,i.useState)([]),C=(0,a.Z)(b,2),I=C[0],w=C[1],G=(0,i.useState)([]),N=(0,a.Z)(G,2),K=N[0],O=N[1],R=e.setIsLoading,T=(0,i.useCallback)((function(){R(!0),r.rG.GetDetailLinkStored(e.keyData,(function(e){var t=e.data.data;o(t.storedOrigin.name),S(t.storedOrigin.key),L(t.storedDest.name),p(t.storedDest.key)}),void 0,(function(){R(!1)}))}),[e.keyData,R]);return(0,i.useEffect)((function(){void 0!==e.keyData&&T()}),[T,e.keyData]),(0,k.jsx)("div",{children:(0,k.jsx)(l.Z,{title:void 0===e.keyData?"Th\xeam m\u1edbi li\xean k\u1ebft":"Ch\u1ec9nh s\u1eeda li\xean k\u1ebft",open:e.visible,onClose:function(){e.setVisible(!1),void 0!==e.keyData&&e.setKeyData(void 0)},children:(0,k.jsxs)(d.Z,{layout:"vertical",children:[(0,k.jsx)(f.Z,{label:"Stored ngu\u1ed3n",onSearch:function(t){e.setIsLoading(!0),r.rG.SearchName(t,(function(e){w(e.data.data)}),void 0,(function(){e.setIsLoading(!1)}))},dataSearch:I,resultKey:m,resultName:s,setResultKey:S,setResultName:o,isLoading:e.isLoading}),(0,k.jsx)(f.Z,{label:"Stored \u0111\xedch",onSearch:function(t){e.setIsLoading(!0),r.rG.SearchName(t,(function(e){O(e.data.data)}),void 0,(function(){e.setIsLoading(!1)}))},dataSearch:K,resultKey:j,resultName:D,setResultKey:p,setResultName:L,isLoading:e.isLoading}),(0,k.jsx)(c.O,{value:void 0===e.keyData?"Th\xeam":"Ch\u1ec9nh s\u1eeda",onClick:function(){var t={storedOriginKey:m,storedDestKey:j};e.setIsLoading(!0),void 0===e.keyData?function(t){r.rG.AddLinkStored(t,(function(t){u.Fn.PrintMsgSuccess(t),e.loadData()}),(function(){e.setIsLoading(!1)}))}(t):function(t){r.rG.GetDetailLinkStored(e.keyData,(function(n){t=u.Fn.GetTimestamp(n,t),r.rG.EditLinkStored(e.keyData,t,(function(t){u.Fn.PrintMsgSuccess(t),e.loadData()}),(function(){e.setIsLoading(!1)}))}),(function(){e.setIsLoading(!1)}))}(t)},type:"success"})]})})})}var v=n(2611),m=n(3977),S=n(698),g=n(9256);function h(){var e=[new v.Dw({title:"STT",key:"stt"}),new v.Dw({title:"Stored ngu\u1ed3n",key:"storedOrigin"}),new v.Dw({title:"Stored li\xean k\u1ebft",key:"storedDest"}),new v.Dw({title:"H\xe0nh \u0111\u1ed9ng",key:"action",render:function(e,t){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(s.Z,{type:"link",onClick:function(){var e;e=t.key,B(e),E(!0)},children:"Ch\u1ec9nh s\u1eeda"}),(0,k.jsx)(o.Z,{title:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng?",onConfirm:function(){var e;e=t.key,w(!0),r.rG.GetDetailLinkStored(e,(function(t){r.rG.DeleteLinkStored(e,u.Fn.GetTimestamp(t),(function(e){u.Fn.PrintMsgSuccess(e),M()}),(function(){w(!1)}))}),(function(){w(!1)}))},children:(0,k.jsx)(s.Z,{type:"link",children:"X\xf3a"})})]})}})],t=(0,i.useState)(new S.C),n=(0,a.Z)(t,2),l=n[0],d=n[1],f=(0,i.useState)(new S.D),h=(0,a.Z)(f,2),D=h[0],L=h[1],x=(0,i.useState)([]),Z=(0,a.Z)(x,2),j=Z[0],p=Z[1],b=(0,i.useState)(!1),C=(0,a.Z)(b,2),I=C[0],w=C[1],G=(0,i.useState)(!1),N=(0,a.Z)(G,2),K=N[0],O=N[1],R=(0,i.useState)(!1),T=(0,a.Z)(R,2),F=T[0],E=T[1],A=(0,i.useState)(void 0),H=(0,a.Z)(A,2),P=H[0],B=H[1],M=(0,i.useCallback)((function(){w(!0);var e=new v.LY(D.pageNumber,D.pageSize,l);r.rG.GetLinkStored(void 0,e,(function(e){L(new S.D(e));var t=e.data.data.pagedData.map((function(e,t){return{stt:t+1,key:e.key,storedOrigin:e.storedOrigin.name,storedDest:e.storedDest.name}}));p(t)}),void 0,(function(){w(!1)}))}),[D.pageNumber,D.pageSize,l]);function V(){O(!0)}return(0,i.useEffect)((function(){M()}),[M]),(0,k.jsxs)(g.ts,{title:"Li\xean k\u1ebft stored",buttonList:function(){return(0,k.jsx)(c.O,{type:"primary",value:"Th\xeam m\u1edbi",onClick:V})},children:[(0,k.jsx)(m.Z,{pageInfo:D,setPageInfo:L,orderBy:l,setOrderBy:d,column:e,dataSource:j,loading:I,loadData:M}),(0,k.jsx)(y,{visible:K,setVisible:O,isLoading:I,setIsLoading:w,loadData:M}),(0,k.jsx)(y,{keyData:P,setKeyData:B,visible:F,setVisible:E,isLoading:I,setIsLoading:w,loadData:M})]})}}}]);
//# sourceMappingURL=566.d73e713f.chunk.js.map