"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[442],{8071:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(9439),o=n(2684),r=n(8885),s=n(1095),c=n(2791),l=n(3120),u=n(3778),i=n(7335),m=n(184);function f(e){var t=e.muityChoose;void 0===t&&(t=!1);var n=(0,c.useState)(!1),f=(0,a.Z)(n,2),d=f[0],p=f[1];return(0,c.useEffect)((function(){}),[]),(0,m.jsxs)("div",{children:[(0,m.jsx)(i.H.Input,{label:e.label,onClick:function(){p(!0)},readOnly:!0,value:e.resultName}),(0,m.jsx)(r.Z,{placement:"top",open:d,onClose:function(){p(!1)},children:(0,m.jsxs)("div",{children:[(0,m.jsx)(l.Z,{isLoading:e.isLoading}),(0,m.jsx)(o.O,{value:"X\xf3a t\xecm ki\u1ebfm",onClick:function(){e.setResultKey(""),e.setResultName("")}}),(0,m.jsx)(i.H.Input,{readOnly:!0,label:"K\u1ebft qu\u1ea3",value:e.resultName}),(0,m.jsx)(s.Z,{children:(0,m.jsx)(i.H.Search,{label:"T\xecm ki\u1ebfm",onSearch:function(t){e.onSearch(t)}})}),e.dataSearch.map((function(n,a){return(0,m.jsx)(o.O,{value:n.name,onClick:function(){return function(n){if(!0===t){var a=e.resultName.split(",");if(-1!==u.Fn.GetIndexInArrayStr(a,n.name))return void console.log("EXIST ARRAY");e.setResultKey("".concat(e.resultKey).concat(""!==e.resultKey?", ":"").concat(n.key)),e.setResultName("".concat(e.resultName).concat(""!==e.resultName?", ":"").concat(n.name))}else e.setResultKey(n.key),e.setResultName(n.name)}(n)}},n.key)}))]})})]})}},8776:function(e,t,n){n.d(t,{E:function(){return c},y:function(){return s}});var a=n(2426),o=n.n(a),r=n(184);function s(e){var t="";return t=void 0!==e.value&&""!==e.value&&null!==e.value?o()(e.value).format("DD/MM/YYYY"):"",(0,r.jsx)("span",{children:t})}function c(e){var t="";return t=void 0!==e.value&&""!==e.value&&null!==e.value?o()(e.value).format("DD/MM/YYYY HH:mm:ss"):"",(0,r.jsx)("span",{children:t})}},9845:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(9439),o=n(2791),r=n(5594),s=n(8787),c=n(3778),l=n(2496),u=n(8885),i=n(1095),m=n(914),f=n(7335),d=n(2684),p=n(8071),v=n(184);function y(e){var t=e.setIsLoading,n=(0,o.useState)(""),r=(0,a.Z)(n,2),s=r[0],y=r[1],h=(0,o.useState)(""),g=(0,a.Z)(h,2),x=g[0],b=g[1],Z=(0,o.useState)(""),k=(0,a.Z)(Z,2),C=k[0],N=k[1],S=(0,o.useState)(0),j=(0,a.Z)(S,2),w=j[0],D=j[1],E=(0,o.useState)([]),O=(0,a.Z)(E,2),I=O[0],T=O[1],L=(0,o.useState)([]),A=(0,a.Z)(L,2),P=A[0],R=A[1],V=(0,o.useState)(""),K=(0,a.Z)(V,2),Y=K[0],M=K[1],H=(0,o.useState)(""),G=(0,a.Z)(H,2),z=G[0],F=G[1],X=(0,o.useCallback)((function(){void 0!==e.keyData&&(t(!0),l.eV.GetDetail(e.keyData,(function(e){var t=e.data.data;y(t.name),b(t.comment),N(t.keySecret),D(t.status),T(t.templates)}),void 0,(function(){t(!1)})))}),[e.keyData,t]);return(0,o.useEffect)((function(){X()}),[X]),(0,v.jsx)(u.Z,{title:void 0===e.keyData?"Th\xeam app m\u1edbi":"C\u1eadp nh\u1eadt th\xf4ng tin app",open:e.visible,onClose:function(){e.onClose(),M(""),F("")},children:(0,v.jsxs)(i.Z,{layout:"vertical",onSubmitCapture:function(){e.setIsLoading(!0);var t={name:s,comment:x,status:w};void 0===e.keyData?function(t){l.eV.Add(t,(function(t){e.loadData(),c.Fn.PrintMsgSuccess(t)}),(function(){e.setIsLoading(!1)}))}(t):function(t){var n=z.split(", ").map((function(t,n){return{appKey:e.keyData,templateCode:t}}));l.eV.AssignTemplates(n,(function(e){console.log(e.data.message)})),l.eV.GetDetail(e.keyData,(function(n){t=c.Fn.GetTimestamp(n,t),l.eV.Edit(e.keyData,t,(function(t){e.loadData(),c.Fn.PrintMsgSuccess(t)}),(function(){e.setIsLoading(!1)}))}),(function(){e.setIsLoading(!1)}))}(t)},children:[(0,v.jsx)(f.H.Input,{label:"T\xean App",value:s,setValue:y}),(0,v.jsx)(f.H.Input,{label:"Ch\xfa th\xedch",value:x,setValue:b}),(0,v.jsx)(f.H.Input,{label:"M\xe3 b\xed m\u1eadt",readOnly:!0,value:C,setValue:N}),(0,v.jsx)(f.H.Select,{label:"Tr\u1ea1ng th\xe1i",value:w,setValue:D,options:[{key:"active",label:"\u0110ang ho\u1ea1t \u0111\u1ed9ng",value:1},{key:"inactive",label:"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng",value:0}]}),(0,v.jsx)(p.Z,{label:"Ch\u1ecdn template",muityChoose:!0,onSearch:function(n){t(!0),l.eV.SearchTemplate(n,e.keyData,(function(e){R(e.data.data)}),void 0,(function(){t(!1)}))},dataSearch:P,resultKey:Y,resultName:z,setResultKey:M,setResultName:F,isLoading:e.isLoading}),(0,v.jsx)(i.Z.Item,{children:I.map((function(e,t){return(0,v.jsxs)(m.Z,{span:24,children:[e.code,(0,v.jsx)(d.O,{value:"X\xf3a",type:"link",onClick:function(){var t;t=e.id,l.eV.RemoveAssignTemplates(t,(function(e){X()}))}})]},t)}))}),(0,v.jsx)(d.O,{isLoading:e.isLoading,htmlType:"submit",value:void 0===e.keyData?"Th\xeam app m\u1edbi":"C\u1eadp nh\u1eadt th\xf4ng tin app"})]})})}var h=n(2611),g=n(3977),x=n(698),b=n(8776),Z=n(9256);function k(){var e=[new h.Dw({title:"STT",key:"stt"}),new h.Dw({title:"T\xean",key:"name"}),new h.Dw({title:"Ch\xfa th\xedch",key:"comment"}),new h.Dw({title:"Key",key:"secret"}),new h.Dw({title:"Tr\u1ea1ng th\xe1i",key:"status",render:function(e){var t={};return t=1===e?{msg:"\u0110ang ho\u1ea1t \u0111\u1ed9ng",color:"blue"}:{msg:"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng",color:"red"},(0,v.jsx)(r.Z,{text:t.msg,color:t.color})}}),new h.Dw({title:"Ng\xe0y th\xeam",key:"createdAt",render:function(e,t){return(0,v.jsx)(b.E,{value:e})}}),new h.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i",key:"updatedAt",render:function(e,t){return(0,v.jsx)(b.E,{value:e})}}),new h.Dw({title:"H\xe0nh \u0111\u1ed9ng",key:"action",render:function(e,t){return(0,v.jsxs)("div",{children:[(0,v.jsx)(d.O,{value:"Ch\u1ec9nh s\u1eeda",type:"link",onClick:function(){var e;e=t.key,G(e),K(!0)}}),(0,v.jsx)(s.Z,{title:"Are you sure to delete this app?",onConfirm:function(){var e;e=t.key,j(!0),l.eV.GetDetail(e,(function(t){l.eV.Delete(e,t.data.data.timestamp,(function(e){c.Fn.PrintMsgSuccess(e),z()}),(function(){j(!1)}))}),(function(){j(!1)}))},children:(0,v.jsx)(d.O,{value:"X\xf3a",type:"link"})})]})}})],t=(0,o.useState)(new x.D),n=(0,a.Z)(t,2),u=n[0],i=n[1],m=(0,o.useState)(new x.C),f=(0,a.Z)(m,2),p=f[0],k=f[1],C=(0,o.useState)(!1),N=(0,a.Z)(C,2),S=N[0],j=N[1],w=(0,o.useState)([]),D=(0,a.Z)(w,2),E=D[0],O=D[1],I=(0,o.useState)(!1),T=(0,a.Z)(I,2),L=T[0],A=T[1],P=(0,o.useState)(!1),R=(0,a.Z)(P,2),V=R[0],K=R[1],Y=(0,o.useState)(void 0),M=(0,a.Z)(Y,2),H=M[0],G=M[1],z=(0,o.useCallback)((function(){j(!0);var e=new h.LY(u.pageNumber,u.pageSize,p);l.eV.GetList(e,(function(e){i(new x.D(e));var t=e.data.data.pagedData.map((function(e,t){return{stt:t+1,key:e.key,name:e.name,comment:e.comment,secret:e.keySecret,status:e.status,createdAt:e.createdAt,updatedAt:e.updatedAt}}));O(t)}),void 0,(function(){j(!1)}))}),[u.pageNumber,u.pageSize,p]);return(0,o.useEffect)((function(){z()}),[z]),(0,v.jsxs)(Z.ts,{title:"Qu\u1ea3n l\xed app mail",isLoading:S,children:[(0,v.jsx)(d.O,{type:"primary",onClick:function(){A(!0)},value:"Th\xeam app m\u1edbi"}),(0,v.jsx)(g.Z,{pageInfo:u,setPageInfo:i,column:e,dataSource:E,loading:S,loadData:z,orderBy:p,setOrderBy:k}),(0,v.jsx)(y,{keyData:void 0,loadData:z,isLoading:S,setIsLoading:j,visible:L,onClose:function(){A(!1)}}),(0,v.jsx)(y,{keyData:H,loadData:z,isLoading:S,setIsLoading:j,visible:V,onClose:function(){G(void 0),K(!1)}})]})}},5594:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(4942),o=n(1002),r=n(7462),s=n(1694),c=n.n(s),l=n(5207),u=n(2791),i=n(1929),m=n(1113),f=n(4466);function d(e){return-1!==f.Y.indexOf(e)}var p=function(e){var t,n=e.className,o=e.prefixCls,s=e.style,l=e.color,m=e.children,f=e.text,p=e.placement,v=void 0===p?"end":p,y=u.useContext(i.E_),h=y.getPrefixCls,g=y.direction,x=h("ribbon",o),b=d(l),Z=c()(x,"".concat(x,"-placement-").concat(v),(t={},(0,a.Z)(t,"".concat(x,"-rtl"),"rtl"===g),(0,a.Z)(t,"".concat(x,"-color-").concat(l),b),t),n),k={},C={};return l&&!b&&(k.background=l,C.color=l),u.createElement("div",{className:"".concat(x,"-wrapper")},m,u.createElement("div",{className:Z,style:(0,r.Z)((0,r.Z)({},k),s)},u.createElement("span",{className:"".concat(x,"-text")},f),u.createElement("div",{className:"".concat(x,"-corner"),style:C})))},v=n(9439);function y(e){var t,n=e.prefixCls,a=e.value,o=e.current,r=e.offset,s=void 0===r?0:r;return s&&(t={position:"absolute",top:"".concat(s,"00%"),left:0}),u.createElement("span",{style:t,className:c()("".concat(n,"-only-unit"),{current:o})},a)}function h(e,t,n){for(var a=e,o=0;(a+10)%10!==t;)a+=n,o+=n;return o}function g(e){var t,n,a=e.prefixCls,o=e.count,s=e.value,c=Number(s),l=Math.abs(o),i=u.useState(c),m=(0,v.Z)(i,2),f=m[0],d=m[1],p=u.useState(l),g=(0,v.Z)(p,2),x=g[0],b=g[1],Z=function(){d(c),b(l)};if(u.useEffect((function(){var e=setTimeout((function(){Z()}),1e3);return function(){clearTimeout(e)}}),[c]),f===c||Number.isNaN(c)||Number.isNaN(f))t=[u.createElement(y,(0,r.Z)({},e,{key:c,current:!0}))],n={transition:"none"};else{t=[];for(var k=c+10,C=[],N=c;N<=k;N+=1)C.push(N);var S=C.findIndex((function(e){return e%10===f}));t=C.map((function(t,n){var a=t%10;return u.createElement(y,(0,r.Z)({},e,{key:t,value:a,offset:n-S,current:n===S}))})),n={transform:"translateY(".concat(-h(f,c,x<l?1:-1),"00%)")}}return u.createElement("span",{className:"".concat(a,"-only"),style:n,onTransitionEnd:Z},t)}var x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},b=function(e){var t=e.prefixCls,n=e.count,a=e.className,o=e.motionClassName,s=e.style,l=e.title,f=e.show,d=e.component,p=void 0===d?"sup":d,v=e.children,y=x(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),h=(0,u.useContext(i.E_).getPrefixCls)("scroll-number",t),b=(0,r.Z)((0,r.Z)({},y),{"data-show":f,style:s,className:c()(h,a,o),title:l}),Z=n;if(n&&Number(n)%1===0){var k=String(n).split("");Z=k.map((function(e,t){return u.createElement(g,{prefixCls:h,count:Number(n),value:e,key:k.length-t})}))}return s&&s.borderColor&&(b.style=(0,r.Z)((0,r.Z)({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),v?(0,m.Tm)(v,(function(e){return{className:c()("".concat(h,"-custom-component"),null===e||void 0===e?void 0:e.className,o)}})):u.createElement(p,b,Z)},Z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},k=function(e){var t,n,s=e.prefixCls,f=e.scrollNumberPrefixCls,p=e.children,v=e.status,y=e.text,h=e.color,g=e.count,x=void 0===g?null:g,k=e.overflowCount,C=void 0===k?99:k,N=e.dot,S=void 0!==N&&N,j=e.size,w=void 0===j?"default":j,D=e.title,E=e.offset,O=e.style,I=e.className,T=e.showZero,L=void 0!==T&&T,A=Z(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),P=u.useContext(i.E_),R=P.getPrefixCls,V=P.direction,K=R("badge",s),Y=x>C?"".concat(C,"+"):x,M=null!==v&&void 0!==v||null!==h&&void 0!==h,H="0"===Y||0===Y,G=S&&!H,z=G?"":Y,F=(0,u.useMemo)((function(){return(null===z||void 0===z||""===z||H&&!L)&&!G}),[z,H,L,G]),X=(0,u.useRef)(x);F||(X.current=x);var _=X.current,B=(0,u.useRef)(z);F||(B.current=z);var q=B.current,Q=(0,u.useRef)(G);F||(Q.current=G);var J=(0,u.useMemo)((function(){if(!E)return(0,r.Z)({},O);var e={marginTop:E[1]};return"rtl"===V?e.left=parseInt(E[0],10):e.right=-parseInt(E[0],10),(0,r.Z)((0,r.Z)({},e),O)}),[V,E,O]),U=null!==D&&void 0!==D?D:"string"===typeof _||"number"===typeof _?_:void 0,W=F||!y?null:u.createElement("span",{className:"".concat(K,"-status-text")},y),$=_&&"object"===(0,o.Z)(_)?(0,m.Tm)(_,(function(e){return{style:(0,r.Z)((0,r.Z)({},J),e.style)}})):void 0,ee=c()((t={},(0,a.Z)(t,"".concat(K,"-status-dot"),M),(0,a.Z)(t,"".concat(K,"-status-").concat(v),!!v),(0,a.Z)(t,"".concat(K,"-status-").concat(h),d(h)),t)),te={};h&&!d(h)&&(te.background=h);var ne=c()(K,(n={},(0,a.Z)(n,"".concat(K,"-status"),M),(0,a.Z)(n,"".concat(K,"-not-a-wrapper"),!p),(0,a.Z)(n,"".concat(K,"-rtl"),"rtl"===V),n),I);if(!p&&M){var ae=J.color;return u.createElement("span",(0,r.Z)({},A,{className:ne,style:J}),u.createElement("span",{className:ee,style:te}),u.createElement("span",{style:{color:ae},className:"".concat(K,"-status-text")},y))}return u.createElement("span",(0,r.Z)({},A,{className:ne}),p,u.createElement(l.Z,{visible:!F,motionName:"".concat(K,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,n=e.className,o=R("scroll-number",f),s=Q.current,l=c()((t={},(0,a.Z)(t,"".concat(K,"-dot"),s),(0,a.Z)(t,"".concat(K,"-count"),!s),(0,a.Z)(t,"".concat(K,"-count-sm"),"small"===w),(0,a.Z)(t,"".concat(K,"-multiple-words"),!s&&q&&q.toString().length>1),(0,a.Z)(t,"".concat(K,"-status-").concat(v),!!v),(0,a.Z)(t,"".concat(K,"-status-").concat(h),d(h)),t)),i=(0,r.Z)({},J);return h&&!d(h)&&((i=i||{}).background=h),u.createElement(b,{prefixCls:o,show:!F,motionClassName:n,className:l,count:q,title:U,style:i,key:"scrollNumber"},$)})),W)};k.Ribbon=p;var C=k}}]);
//# sourceMappingURL=442.c33cd44e.chunk.js.map