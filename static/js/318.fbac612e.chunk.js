"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[318,376],{698:function(e,t,n){n.d(t,{C:function(){return r},D:function(){return s}});var a=n(5671),i=n(3144),s=function(){function e(t){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==t){var n=t.data.pageInfo;this.total=n.totalCount,this.pageNumber=n.currentPage,this.pageSize=n.pageSize}}return(0,i.Z)(e,[{key:"handleChangePage",value:function(t,n,a){this.pageNumber=t,this.pageSize=n,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(t,n,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(t,n){n(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:t}}}))}}]),e}(),r=function(){function e(t,n){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==t&&(this.column=t,this.esc=n)}return(0,i.Z)(e,[{key:"setColumn",value:function(t,n){n(new e(t,this.esc))}},{key:"setDesc",value:function(t,n){n(new e(this.column,t))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(9439),i=n(6106),s=n(914),r=n(5581),o=n(9221),c=n(1738),l=n(2791),u=n(7335),d=n(9256),f=n(2684),h=(n(1708),n(184));function m(e){var t=e.column,n=e.setOrderBy,m=e.setPageInfo,p=e.loading,v=e.dataSource,g=e.scroll,y=e.rowClassName,x=e.loadData,b=e.pageInfo,Z=e.orderBy,C=(0,l.useState)([]),N=(0,a.Z)(C,2),j=N[0],S=N[1],w=(0,l.useState)(100),k=(0,a.Z)(w,2),D=k[0],E=k[1];(0,l.useEffect)((function(){var e=setInterval((function(){E(D-1),1===D&&(E(100),x())}),1e3);return function(){return clearInterval(e)}}),[D,E,x]);var O=(0,l.useCallback)((function(){void 0!==t&&S(t.map((function(e,t){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}})))}),[t]);return(0,l.useEffect)((function(){O()}),[O]),(0,h.jsxs)("div",{className:"my_table",children:[(0,h.jsx)(d.xu,{children:(0,h.jsxs)(i.Z,{gutter:16,children:[(0,h.jsx)(s.Z,{span:6,children:(0,h.jsx)(f.O,{type:"secondary",value:"Refresh data in ".concat(D),isLoading:p,onClick:function(){x()}})}),(0,h.jsx)(s.Z,{span:12,children:(0,h.jsx)(u.H.Select,{value:null===Z||void 0===Z?void 0:Z.column,onChange:function(e){Z.setColumn(e,n)},options:t})}),(0,h.jsx)(s.Z,{span:6,children:(0,h.jsx)(r.Z,{disabled:""===(null===Z||void 0===Z?void 0:Z.column),checked:null===Z||void 0===Z?void 0:Z.esc,onChange:function(e){Z.setDesc(e,n)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,h.jsx)(s.Z,{span:12,children:(0,h.jsx)(o.Z,{style:{display:b.showPagination?"":"none"},current:b.pageNumber,disabled:p,onChange:function(e,t){b.handleChangePage(e,t,m)},pageSize:b.pageSize,total:b.total})})]})}),(0,h.jsx)(c.Z,{scroll:{y:g},rowClassName:y,style:{paddingTop:"10px"},bordered:!0,loading:p,pagination:!1,dataSource:v,size:"small",columns:j})]})}},8776:function(e,t,n){n.d(t,{E:function(){return o},y:function(){return r}});var a=n(438),i=n.n(a),s=n(184);function r(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?i()(t.timeLocal).format("DD/MM/YYYY"):"";return(0,s.jsx)("span",{children:n})}function o(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?i()(t.timeLocal).format("DD/MM/YYYY HH:mm:ss"):"";return(0,s.jsx)("span",{children:n})}},8376:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(9439),i=n(8885),s=n(2409),r=n(6106),o=n(914),c=n(438),l=n.n(c),u=n(2791),d=n(1087),f=n(1830),h=n.n(f),m=n(3778),p=n(5349),v=n(7335),g=n(2684),y=n(7602),x=n(184);function b(e){var t=(0,u.useState)(""),n=(0,a.Z)(t,2),c=n[0],f=n[1],b=(0,u.useState)(l()()),Z=(0,a.Z)(b,2),C=Z[0],N=Z[1],j=(0,u.useState)(l()()),S=(0,a.Z)(j,2),w=S[0],k=S[1],D=(0,u.useState)(),E=(0,a.Z)(D,2),O=E[0],T=E[1],P=e.projectKey,I=e.keyData,z=e.setKeyData,L=e.isLoading,B=e.setIsLoading,M=e.visible,Y=e.setVisible,U=e.loadData,F=(0,u.useCallback)((function(){void 0!==I&&(B(!0),p.gU.GetDetail(P,I).then((function(e){if(e.isSuccess){var t=e.data;f(t.name),N(l()(t.dateFrom.timeUTC)),k(l()(t.dateTo.timeUTC)),T(t.status.id)}})).finally((function(){return B(!1)})))}),[P,I,B]);function V(){Y(!1),f(""),N(l()()),k(l()()),void 0!==z&&z(void 0)}return(0,u.useEffect)((function(){F()}),[F]),(0,x.jsx)(i.Z,{title:"Chi ti\u1ebft",open:M,onClose:V,children:(0,x.jsxs)(s.Z,{layout:"vertical",onSubmitCapture:function(){var e={name:c,dateFrom:C.format("yyyy-MM-DD"),dateTo:w.format("yyyy-MM-DD"),status:O};B(!0),void 0!==I?function(e){p.gU.GetDetail(P,I).then((function(t){t.isSuccess?(e=m.Fn.GetTimestamp(t,e),p.gU.Edit(P,I,e).then((function(e){e.isSuccess&&(m.Fn.PrintMsgSuccess(e),V(),U())})).finally((function(){return B(!1)}))):B(!1)}))}(e):function(e){p.gU.Add(P,e).then((function(e){e.isSuccess&&(m.Fn.PrintMsgSuccess(e),V(),U())})).finally((function(){return B(!1)}))}(e)},children:[(0,x.jsx)(v.H.Input,{label:"T\xean giai \u0111o\u1ea1n",value:c,setValue:f}),(0,x.jsx)(v.H.DatePicker,{label:"Ng\xe0y b\u1eaft \u0111\u1ea7u",value:C,setValue:N}),(0,x.jsx)(v.H.DatePicker,{label:"Ng\xe0y k\u1ebft th\xfac",value:w,setValue:k}),(0,x.jsx)(y.M,{label:"Tr\u1ea1ng th\xe1i",projectKey:P,type:2,value:O,setValue:T}),(0,x.jsxs)(r.Z,{gutter:24,children:[(0,x.jsx)(o.Z,{span:"12",children:(0,x.jsx)(g.O,{isLoading:L,htmlType:"submit",type:"success",value:void 0!==I?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi"})}),(0,x.jsx)(o.Z,{children:(0,x.jsx)(g.O,{isLoading:L,type:"danger",disabled:void 0===I,onClick:function(){h().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a sprint n\xe0y kh\xf4ng?",showDenyButton:!0,confirmButtonText:"C\xf3",denyButtonText:"Kh\xf4ng"}).then((function(e){e.isConfirmed&&(B(!0),p.gU.GetDetail(P,I).then((function(e){e.isSuccess?p.gU.Delete(P,I,m.Fn.GetTimestamp(e)).then((function(e){e.isSuccess&&(m.Fn.PrintMsgSuccess(e),V(),U())})).finally((function(){return B(!1)})):B(!1)})))}))},value:"X\xf3a sprint"})})]}),(0,x.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(P,"/sprint/").concat(I,"/toDoList"),children:"Qu\u1ea3n l\xfd vi\u1ec7c c\u1ea7n l\xe0m"})]})})}},1318:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(9439),i=n(5594),s=n(6106),r=n(914),o=n(2791),c=n(7689),l=n(5349),u=n(9256),d=n(2684),f=n(8776),h=n(8376),m=(n(7121),n(3977)),p=n(698),v=n(2611),g=n(3778),y=n(184);function x(){var e=(0,o.useState)(!1),t=(0,a.Z)(e,2),n=t[0],x=t[1],b=(0,o.useState)([]),Z=(0,a.Z)(b,2),C=Z[0],N=Z[1],j=(0,o.useState)(!1),S=(0,a.Z)(j,2),w=S[0],k=S[1],D=(0,o.useState)(!1),E=(0,a.Z)(D,2),O=E[0],T=E[1],P=(0,o.useState)(void 0),I=(0,a.Z)(P,2),z=I[0],L=I[1],B=(0,o.useState)(),M=(0,a.Z)(B,2),Y=M[0],U=M[1],F=(0,o.useState)(new p.D),V=(0,a.Z)(F,2),G=V[0],K=V[1],H=(0,o.useState)(new p.C),R=(0,a.Z)(H,2),Q=R[0],_=R[1],A=[new v.Dw({title:"STT",key:"stt",render:function(e,t,n){return g.Fn.RenderSTT(e,t,n,G)}}),new v.Dw({title:"N\u1ed9i dung",key:"name",render:function(e,t){return(0,y.jsx)(d.O,{type:"link",value:e,onClick:function(){var e;e=t.key,T(!0),L(e)}})}}),new v.Dw({title:"Tr\u1ea1ng th\xe1i",key:"status",render:function(e,t){var n,a,s,r,o=null===(n=t.status)||void 0===n?void 0:n.value;return r=null!==(a=t.status)&&void 0!==a&&a.isNew?"warning":null!==(s=t.status)&&void 0!==s&&s.isClosed?"error":"processing",(0,y.jsx)(i.Z,{status:r,text:o})}}),new v.Dw({title:"Ng\xe0y b\u1eaft \u0111\u1ea7u",key:"dateFrom",render:function(e){return(0,y.jsx)(f.y,{value:e})}}),new v.Dw({title:"Ng\xe0y k\u1ebft th\xfac",key:"dateTo",render:function(e){return(0,y.jsx)(f.y,{value:e})}})],X=(0,c.UO)().key,q=(0,o.useCallback)((function(){x(!0);var e=new v.LY(G.pageNumber,G.pageSize,Q);l.gU.GetList(X,e).then((function(e){e.isSuccess&&(K(new p.D(e)),N(e.data.pagedData),0!==e.data.pagedData.length&&U(e.data.pagedData[0].project.name))})).finally((function(){return x(!1)}))}),[x,X,G.pageNumber,G.pageSize,Q]);function J(){k(!0)}return(0,o.useEffect)((function(){q()}),[q]),(0,y.jsxs)(u.ts,{title:"Qu\u1ea3n l\xfd giai \u0111o\u1ea1n",isLoading:n,buttonList:function(){return(0,y.jsx)(d.O,{type:"primary",value:"Th\xeam m\u1edbi",onClick:J})},children:[(0,y.jsxs)(s.Z,{gutter:12,children:[(0,y.jsx)(r.Z,{span:24,children:(0,y.jsxs)("h3",{children:[(0,y.jsx)("strong",{children:"T\xean d\u1ef1 \xe1n: "}),Y]})}),(0,y.jsx)(r.Z,{span:6,children:(0,y.jsx)(u.xu,{children:"C\xf4ng vi\u1ec7c m\u1edbi ch\u01b0a x\u1eed l\xfd"})}),(0,y.jsx)(r.Z,{span:6,children:(0,y.jsx)(u.xu,{children:"C\xf4ng vi\u1ec7c c\u1ea7n l\xe0m"})}),(0,y.jsx)(r.Z,{span:6,children:(0,y.jsx)(u.xu,{children:"C\xf4ng vi\u1ec7c s\u1eafp h\u1ebft h\u1ea1n"})}),(0,y.jsx)(r.Z,{span:6,children:(0,y.jsx)(u.xu,{children:"V\u1ea5n \u0111\u1ec1 ch\u01b0a \u0111\u01b0\u1ee3c gi\u1ea3i quy\u1ebft"})})]}),(0,y.jsx)(m.Z,{pageInfo:G,setPageInfo:K,orderBy:Q,setOrderBy:_,loadData:q,column:A,dataSource:C,loading:n}),(0,y.jsx)(h.default,{projectKey:X,visible:w,setVisible:k,isLoading:n,setIsLoading:x,loadData:q}),(0,y.jsx)(h.default,{keyData:z,setKeyData:L,projectKey:X,visible:O,setVisible:T,isLoading:n,setIsLoading:x,loadData:q})]})}},2611:function(e,t,n){n.d(t,{Dw:function(){return s},LY:function(){return r}});var a=n(3144),i=n(5671),s=(0,a.Z)((function e(t){(0,i.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=t.title,this.key=t.key,void 0===t.dataIndex?this.dataIndex=t.key:this.dataIndex=t.dataIndex,this.render=t.render,this.className=t.className,this.width=t.width,this.label=t.title,this.value=t.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==t.disabled&&(this.disabled=t.disabled)})),r=function(){function e(t,n,a){(0,i.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=t,this.pageSize=n,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},5594:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(4942),i=n(1002),s=n(7462),r=n(1694),o=n.n(r),c=n(5207),l=n(2791),u=n(1929),d=n(1113),f=n(4466);function h(e){return f.Y.includes(e)}var m=function(e){var t,n=e.className,i=e.prefixCls,r=e.style,c=e.color,d=e.children,f=e.text,m=e.placement,p=void 0===m?"end":m,v=l.useContext(u.E_),g=v.getPrefixCls,y=v.direction,x=g("ribbon",i),b=h(c),Z=o()(x,"".concat(x,"-placement-").concat(p),(t={},(0,a.Z)(t,"".concat(x,"-rtl"),"rtl"===y),(0,a.Z)(t,"".concat(x,"-color-").concat(c),b),t),n),C={},N={};return c&&!b&&(C.background=c,N.color=c),l.createElement("div",{className:"".concat(x,"-wrapper")},d,l.createElement("div",{className:Z,style:(0,s.Z)((0,s.Z)({},C),r)},l.createElement("span",{className:"".concat(x,"-text")},f),l.createElement("div",{className:"".concat(x,"-corner"),style:N})))},p=n(9439);function v(e){var t,n=e.prefixCls,a=e.value,i=e.current,s=e.offset,r=void 0===s?0:s;return r&&(t={position:"absolute",top:"".concat(r,"00%"),left:0}),l.createElement("span",{style:t,className:o()("".concat(n,"-only-unit"),{current:i})},a)}function g(e,t,n){for(var a=e,i=0;(a+10)%10!==t;)a+=n,i+=n;return i}function y(e){var t,n,a=e.prefixCls,i=e.count,r=e.value,o=Number(r),c=Math.abs(i),u=l.useState(o),d=(0,p.Z)(u,2),f=d[0],h=d[1],m=l.useState(c),y=(0,p.Z)(m,2),x=y[0],b=y[1],Z=function(){h(o),b(c)};if(l.useEffect((function(){var e=setTimeout((function(){Z()}),1e3);return function(){clearTimeout(e)}}),[o]),f===o||Number.isNaN(o)||Number.isNaN(f))t=[l.createElement(v,(0,s.Z)({},e,{key:o,current:!0}))],n={transition:"none"};else{t=[];for(var C=o+10,N=[],j=o;j<=C;j+=1)N.push(j);var S=N.findIndex((function(e){return e%10===f}));t=N.map((function(t,n){var a=t%10;return l.createElement(v,(0,s.Z)({},e,{key:t,value:a,offset:n-S,current:n===S}))})),n={transform:"translateY(".concat(-g(f,o,x<c?1:-1),"00%)")}}return l.createElement("span",{className:"".concat(a,"-only"),style:n,onTransitionEnd:Z},t)}var x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},b=function(e){var t=e.prefixCls,n=e.count,a=e.className,i=e.motionClassName,r=e.style,c=e.title,f=e.show,h=e.component,m=void 0===h?"sup":h,p=e.children,v=x(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),g=(0,l.useContext(u.E_).getPrefixCls)("scroll-number",t),b=(0,s.Z)((0,s.Z)({},v),{"data-show":f,style:r,className:o()(g,a,i),title:c}),Z=n;if(n&&Number(n)%1===0){var C=String(n).split("");Z=C.map((function(e,t){return l.createElement(y,{prefixCls:g,count:Number(n),value:e,key:C.length-t})}))}return r&&r.borderColor&&(b.style=(0,s.Z)((0,s.Z)({},r),{boxShadow:"0 0 0 1px ".concat(r.borderColor," inset")})),p?(0,d.Tm)(p,(function(e){return{className:o()("".concat(g,"-custom-component"),null===e||void 0===e?void 0:e.className,i)}})):l.createElement(m,b,Z)},Z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},C=function(e){var t,n,r=e.prefixCls,f=e.scrollNumberPrefixCls,m=e.children,p=e.status,v=e.text,g=e.color,y=e.count,x=void 0===y?null:y,C=e.overflowCount,N=void 0===C?99:C,j=e.dot,S=void 0!==j&&j,w=e.size,k=void 0===w?"default":w,D=e.title,E=e.offset,O=e.style,T=e.className,P=e.showZero,I=void 0!==P&&P,z=Z(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),L=l.useContext(u.E_),B=L.getPrefixCls,M=L.direction,Y=B("badge",r),U=x>N?"".concat(N,"+"):x,F="0"===U||0===U,V=(null!==p&&void 0!==p||null!==g&&void 0!==g)&&(null===x||F&&!I),G=S&&!F,K=G?"":U,H=(0,l.useMemo)((function(){return(null===K||void 0===K||""===K||F&&!I)&&!G}),[K,F,I,G]),R=(0,l.useRef)(x);H||(R.current=x);var Q=R.current,_=(0,l.useRef)(K);H||(_.current=K);var A=_.current,X=(0,l.useRef)(G);H||(X.current=G);var q=(0,l.useMemo)((function(){if(!E)return(0,s.Z)({},O);var e={marginTop:E[1]};return"rtl"===M?e.left=parseInt(E[0],10):e.right=-parseInt(E[0],10),(0,s.Z)((0,s.Z)({},e),O)}),[M,E,O]),J=null!==D&&void 0!==D?D:"string"===typeof Q||"number"===typeof Q?Q:void 0,W=H||!v?null:l.createElement("span",{className:"".concat(Y,"-status-text")},v),$=Q&&"object"===(0,i.Z)(Q)?(0,d.Tm)(Q,(function(e){return{style:(0,s.Z)((0,s.Z)({},q),e.style)}})):void 0,ee=o()((t={},(0,a.Z)(t,"".concat(Y,"-status-dot"),V),(0,a.Z)(t,"".concat(Y,"-status-").concat(p),!!p),(0,a.Z)(t,"".concat(Y,"-status-").concat(g),h(g)),t)),te={};g&&!h(g)&&(te.background=g);var ne=o()(Y,(n={},(0,a.Z)(n,"".concat(Y,"-status"),V),(0,a.Z)(n,"".concat(Y,"-not-a-wrapper"),!m),(0,a.Z)(n,"".concat(Y,"-rtl"),"rtl"===M),n),T);if(!m&&V){var ae=q.color;return l.createElement("span",(0,s.Z)({},z,{className:ne,style:q}),l.createElement("span",{className:ee,style:te}),v&&l.createElement("span",{style:{color:ae},className:"".concat(Y,"-status-text")},v))}return l.createElement("span",(0,s.Z)({},z,{className:ne}),m,l.createElement(c.default,{visible:!H,motionName:"".concat(Y,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,n=e.className,i=B("scroll-number",f),r=X.current,c=o()((t={},(0,a.Z)(t,"".concat(Y,"-dot"),r),(0,a.Z)(t,"".concat(Y,"-count"),!r),(0,a.Z)(t,"".concat(Y,"-count-sm"),"small"===k),(0,a.Z)(t,"".concat(Y,"-multiple-words"),!r&&A&&A.toString().length>1),(0,a.Z)(t,"".concat(Y,"-status-").concat(p),!!p),(0,a.Z)(t,"".concat(Y,"-status-").concat(g),h(g)),t)),u=(0,s.Z)({},q);return g&&!h(g)&&((u=u||{}).background=g),l.createElement(b,{prefixCls:i,show:!H,motionClassName:n,className:c,count:A,title:J,style:u,key:"scrollNumber"},$)})),W)};C.Ribbon=m;var N=C},7121:function(){}}]);
//# sourceMappingURL=318.fbac612e.chunk.js.map