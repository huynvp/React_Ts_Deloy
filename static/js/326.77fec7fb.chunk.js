"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[326],{8776:function(t,e,n){n.d(e,{E:function(){return c},y:function(){return s}});var o=n(2426),r=n.n(o),a=n(184);function s(t){var e="";return e=void 0!==t.value&&""!==t.value&&null!==t.value?r()(t.value).format("DD/MM/YYYY"):"",(0,a.jsx)("span",{children:e})}function c(t){var e="";return e=void 0!==t.value&&""!==t.value&&null!==t.value?r()(t.value).format("DD/MM/YYYY HH:mm:ss"):"",(0,a.jsx)("span",{children:e})}},4326:function(t,e,n){n.r(e),n.d(e,{default:function(){return k}});var o=n(9439),r=n(3046),a=n(7528),s=n(5594),c=n(2791),u=n(1087),i=n(2611),l=n(4492),d=n(9256),f=n(2684),v=n(698),p=n(50),m=n(8776),y=n(184);function k(){var t=[new i.Dw({title:"STT",key:"stt"}),new i.Dw({title:"QR Code",key:"qrCode",render:function(t,e){return(0,y.jsx)(r.Z,{src:l.bY.GetQrCode(e.key),width:100,height:100})}}),new i.Dw({title:"T\xean",key:"name",render:function(t,e){return(0,y.jsx)(u.rU,{to:"/tools/tasks/projects/".concat(e.key),children:t})}}),new i.Dw({title:"N\u1ed9i dung",key:"content"}),new i.Dw({title:"Tag",key:"tag",render:function(t){var e=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"];return t.map((function(t,n){return(0,y.jsx)(a.Z,{color:e[Math.floor(11*Math.random())],children:t},n)}))}}),new i.Dw({title:"Tr\u1ea1ng th\xe1i",key:"status",render:function(t,e){var n,o=e.statusText;return n=e.statusIsNew?"warning":e.statusIsClosed?"error":"processing",(0,y.jsx)(s.Z,{status:n,text:o})}}),new i.Dw({title:"Ng\xe0y t\u1ea1o",key:"createdAt",render:function(t){return(0,y.jsx)(m.E,{value:t})}}),new i.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i c\xf9ng",key:"updatedAt",render:function(t){return(0,y.jsx)(m.E,{value:t})}})],e=(0,c.useState)(new v.D),n=(0,o.Z)(e,2),k=n[0],h=n[1],g=(0,c.useState)(new v.C),b=(0,o.Z)(g,2),w=b[0],Z=b[1],j=(0,c.useState)([]),N=(0,o.Z)(j,2),x=N[0],T=N[1],S=(0,c.useState)(!1),C=(0,o.Z)(S,2),D=C[0],E=C[1],O=(0,c.useCallback)((function(){E(!0);var t=new i.LY(k.pageNumber,k.pageSize,w);l.bY.GetList(t,(function(t){var e=t.data.data.pagedData.map((function(t,e){return{key:t.key,stt:e+1,name:t.name,content:t.content,tag:t.tag,status:t.status,statusText:t.statusText,statusIsClosed:t.statusIsClosed,statusIsNew:t.statusIsNew,createdAt:t.createdAt,updatedAt:t.updatedAt}}));T(e)}),void 0,(function(){E(!1)}))}),[k.pageNumber,k.pageSize,w]);return(0,c.useEffect)((function(){O()}),[O]),(0,y.jsxs)(d.ts,{title:"Qu\u1ea3n l\xfd d\u1ef1 \xe1n",children:[(0,y.jsx)(u.rU,{to:"/tools/tasks/projects/add",children:(0,y.jsx)(f.O,{value:"Th\xeam d\u1ef1 \xe1n m\u1edbi"})}),(0,y.jsx)(p.Z,{scroll:500,pageInfo:k,setPageInfo:h,orderBy:w,setOrderBy:Z,column:t,dataSource:x,loading:D,loadData:O})]})}},2611:function(t,e,n){n.d(e,{Dw:function(){return a},LY:function(){return s}});var o=n(3144),r=n(5671),a=(0,o.Z)((function t(e){(0,r.Z)(this,t),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=e.title,this.key=e.key,void 0===e.dataIndex?this.dataIndex=e.key:this.dataIndex=e.dataIndex,this.render=e.render,this.className=e.className,this.width=e.width,this.label=e.title,this.value=e.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==e.disabled&&(this.disabled=e.disabled)})),s=function(){function t(e,n,o){(0,r.Z)(this,t),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=e,this.pageSize=n,this.orderBy=o}return(0,o.Z)(t,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),t}()},4492:function(t,e,n){n.d(e,{NX:function(){return u},RC:function(){return i},Su:function(){return l},bY:function(){return s},gU:function(){return c}});var o=n(5671),r=n(3144),a=n(1285),s=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"GetQrCode",value:function(t){return"".concat(a.T.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(t)}},{key:"GetClone",value:function(t,e,n,o){var r="tools/tasks/projects/".concat(t,"/duplicate");return a.T.Get(r,e,n,o)}},{key:"ProcessClone",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/duplicate");return a.T.Post(s,e,n,o,r)}},{key:"GetList",value:function(t,e,n,o){var r="tools/tasks/projects?".concat(t.generateQueryString());return a.T.Get(r,e,n,o)}},{key:"GetDetail",value:function(t,e,n,o){var r="tools/tasks/projects/".concat(t);return a.T.Get(r,e,n,o)}},{key:"Search",value:function(t,e,n,o){var r="tools/tasks/projects/query?q=".concat(t);return a.T.Get(r,e,n,o)}},{key:"Add",value:function(t,e,n,o){return console.log(t),a.T.Post("tools/tasks/projects",t,e,n,o)}},{key:"Edit",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t);return a.T.Put(s,e,n,o,r)}},{key:"Delete",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"?timestamp=").concat(encodeURIComponent(e));return a.T.Delete(s,n,o,r)}}]),t}(),c=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"GetList",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/sprints").concat(void 0===e?"":"?"+(null===e||void 0===e?void 0:e.generateQueryString()));return a.T.Get(s,n,o,r)}},{key:"GetDetail",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/sprints/").concat(e);return a.T.Get(s,n,o,r)}},{key:"Add",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/sprints");return a.T.Post(s,e,n,o,r)}},{key:"Edit",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/sprints/").concat(e);return a.T.Put(c,n,o,r,s)}},{key:"Delete",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"?timestamp=").concat(encodeURIComponent(n));return a.T.Delete(c,o,r,s)}}]),t}(),u=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"GetList",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return a.T.Get(c,o,r,s)}},{key:"GetDetail",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists/").concat(n);return a.T.Get(c,o,r,s)}},{key:"Add",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists");return a.T.Post(c,n,o,r,s)}},{key:"Edit",value:function(t,e,n,o,r,s,c){var u="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists/").concat(n);return a.T.Put(u,o,r,s,c)}},{key:"Delete",value:function(t,e,n,o,r,s,c){var u="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(o));return a.T.Delete(u,r,s,c)}}]),t}(),i=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"GetListSettingStatus",value:function(t,e,n,o){var r="tools/tasks/projects/".concat(t,"/settingStatus");return a.T.Get(r,e,n,o)}},{key:"GetDetailSettingStatus",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/settingStatus/").concat(e);return a.T.Get(s,n,o,r)}},{key:"AddSettingStatus",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/settingStatus");return a.T.Post(s,e,n,o,r)}},{key:"EditSettingStatus",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/settingStatus/").concat(e);return a.T.Put(c,n,o,r,s)}},{key:"DeleteSettingStatus",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/settingStatus/").concat(e,"?timestamp=").concat(encodeURIComponent(n));return a.T.Delete(c,o,r,s)}},{key:"GetListSettingOther",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/settingOther?type=").concat(e);return a.T.Get(s,n,o,r)}},{key:"GetDetailSettingOther",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/settingOther/").concat(e);return a.T.Get(s,n,o,r)}},{key:"AddSettingOther",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/settingOther");return a.T.Post(s,e,n,o,r)}},{key:"EditSettingOther",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/settingOther/").concat(e);return a.T.Put(c,n,o,r,s)}},{key:"DeleteSettingOther",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/settingOther/").concat(e,"?timestamp=").concat(encodeURIComponent(n));return a.T.Delete(c,o,r,s)}},{key:"SearchByType",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/settings/query?type=").concat(e);return a.T.Get(s,n,o,r)}}]),t}(),l=function(){function t(){(0,o.Z)(this,t)}return(0,r.Z)(t,null,[{key:"GetList",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/workflow/variables?").concat(e.generateQueryString());return a.T.Get(s,n,o,r)}},{key:"GetDetail",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/workflow/variables/").concat(e);return a.T.Get(s,n,o,r)}},{key:"Add",value:function(t,e,n,o,r){var s="tools/tasks/projects/".concat(t,"/workflow/variables");return a.T.Post(s,e,n,o,r)}},{key:"Edit",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/workflow/variables/").concat(e);return a.T.Put(c,n,o,r,s)}},{key:"Delete",value:function(t,e,n,o,r,s){var c="tools/tasks/projects/".concat(t,"/workflow/variables/").concat(e,"?timestamp=").concat(encodeURIComponent(n));return a.T.Delete(c,o,r,s)}}]),t}()},5594:function(t,e,n){n.d(e,{Z:function(){return j}});var o=n(4942),r=n(1002),a=n(7462),s=n(1694),c=n.n(s),u=n(5207),i=n(2791),l=n(1929),d=n(1113),f=n(4466);function v(t){return-1!==f.Y.indexOf(t)}var p=function(t){var e,n=t.className,r=t.prefixCls,s=t.style,u=t.color,d=t.children,f=t.text,p=t.placement,m=void 0===p?"end":p,y=i.useContext(l.E_),k=y.getPrefixCls,h=y.direction,g=k("ribbon",r),b=v(u),w=c()(g,"".concat(g,"-placement-").concat(m),(e={},(0,o.Z)(e,"".concat(g,"-rtl"),"rtl"===h),(0,o.Z)(e,"".concat(g,"-color-").concat(u),b),e),n),Z={},j={};return u&&!b&&(Z.background=u,j.color=u),i.createElement("div",{className:"".concat(g,"-wrapper")},d,i.createElement("div",{className:w,style:(0,a.Z)((0,a.Z)({},Z),s)},i.createElement("span",{className:"".concat(g,"-text")},f),i.createElement("div",{className:"".concat(g,"-corner"),style:j})))},m=n(9439);function y(t){var e,n=t.prefixCls,o=t.value,r=t.current,a=t.offset,s=void 0===a?0:a;return s&&(e={position:"absolute",top:"".concat(s,"00%"),left:0}),i.createElement("span",{style:e,className:c()("".concat(n,"-only-unit"),{current:r})},o)}function k(t,e,n){for(var o=t,r=0;(o+10)%10!==e;)o+=n,r+=n;return r}function h(t){var e,n,o=t.prefixCls,r=t.count,s=t.value,c=Number(s),u=Math.abs(r),l=i.useState(c),d=(0,m.Z)(l,2),f=d[0],v=d[1],p=i.useState(u),h=(0,m.Z)(p,2),g=h[0],b=h[1],w=function(){v(c),b(u)};if(i.useEffect((function(){var t=setTimeout((function(){w()}),1e3);return function(){clearTimeout(t)}}),[c]),f===c||Number.isNaN(c)||Number.isNaN(f))e=[i.createElement(y,(0,a.Z)({},t,{key:c,current:!0}))],n={transition:"none"};else{e=[];for(var Z=c+10,j=[],N=c;N<=Z;N+=1)j.push(N);var x=j.findIndex((function(t){return t%10===f}));e=j.map((function(e,n){var o=e%10;return i.createElement(y,(0,a.Z)({},t,{key:e,value:o,offset:n-x,current:n===x}))})),n={transform:"translateY(".concat(-k(f,c,g<u?1:-1),"00%)")}}return i.createElement("span",{className:"".concat(o,"-only"),style:n,onTransitionEnd:w},e)}var g=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n},b=function(t){var e=t.prefixCls,n=t.count,o=t.className,r=t.motionClassName,s=t.style,u=t.title,f=t.show,v=t.component,p=void 0===v?"sup":v,m=t.children,y=g(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),k=(0,i.useContext(l.E_).getPrefixCls)("scroll-number",e),b=(0,a.Z)((0,a.Z)({},y),{"data-show":f,style:s,className:c()(k,o,r),title:u}),w=n;if(n&&Number(n)%1===0){var Z=String(n).split("");w=Z.map((function(t,e){return i.createElement(h,{prefixCls:k,count:Number(n),value:t,key:Z.length-e})}))}return s&&s.borderColor&&(b.style=(0,a.Z)((0,a.Z)({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),m?(0,d.Tm)(m,(function(t){return{className:c()("".concat(k,"-custom-component"),null===t||void 0===t?void 0:t.className,r)}})):i.createElement(p,b,w)},w=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n},Z=function(t){var e,n,s=t.prefixCls,f=t.scrollNumberPrefixCls,p=t.children,m=t.status,y=t.text,k=t.color,h=t.count,g=void 0===h?null:h,Z=t.overflowCount,j=void 0===Z?99:Z,N=t.dot,x=void 0!==N&&N,T=t.size,S=void 0===T?"default":T,C=t.title,D=t.offset,E=t.style,O=t.className,G=t.showZero,P=void 0!==G&&G,I=w(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),L=i.useContext(l.E_),Y=L.getPrefixCls,A=L.direction,R=Y("badge",s),M=g>j?"".concat(j,"+"):g,Q=null!==m&&void 0!==m||null!==k&&void 0!==k,U="0"===M||0===M,z=x&&!U,B=z?"":M,q=(0,i.useMemo)((function(){return(null===B||void 0===B||""===B||U&&!P)&&!z}),[B,U,P,z]),_=(0,i.useRef)(g);q||(_.current=g);var H=_.current,X=(0,i.useRef)(B);q||(X.current=B);var F=X.current,J=(0,i.useRef)(z);q||(J.current=z);var K=(0,i.useMemo)((function(){if(!D)return(0,a.Z)({},E);var t={marginTop:D[1]};return"rtl"===A?t.left=parseInt(D[0],10):t.right=-parseInt(D[0],10),(0,a.Z)((0,a.Z)({},t),E)}),[A,D,E]),V=null!==C&&void 0!==C?C:"string"===typeof H||"number"===typeof H?H:void 0,W=q||!y?null:i.createElement("span",{className:"".concat(R,"-status-text")},y),$=H&&"object"===(0,r.Z)(H)?(0,d.Tm)(H,(function(t){return{style:(0,a.Z)((0,a.Z)({},K),t.style)}})):void 0,tt=c()((e={},(0,o.Z)(e,"".concat(R,"-status-dot"),Q),(0,o.Z)(e,"".concat(R,"-status-").concat(m),!!m),(0,o.Z)(e,"".concat(R,"-status-").concat(k),v(k)),e)),et={};k&&!v(k)&&(et.background=k);var nt=c()(R,(n={},(0,o.Z)(n,"".concat(R,"-status"),Q),(0,o.Z)(n,"".concat(R,"-not-a-wrapper"),!p),(0,o.Z)(n,"".concat(R,"-rtl"),"rtl"===A),n),O);if(!p&&Q){var ot=K.color;return i.createElement("span",(0,a.Z)({},I,{className:nt,style:K}),i.createElement("span",{className:tt,style:et}),y&&i.createElement("span",{style:{color:ot},className:"".concat(R,"-status-text")},y))}return i.createElement("span",(0,a.Z)({},I,{className:nt}),p,i.createElement(u.Z,{visible:!q,motionName:"".concat(R,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(t){var e,n=t.className,r=Y("scroll-number",f),s=J.current,u=c()((e={},(0,o.Z)(e,"".concat(R,"-dot"),s),(0,o.Z)(e,"".concat(R,"-count"),!s),(0,o.Z)(e,"".concat(R,"-count-sm"),"small"===S),(0,o.Z)(e,"".concat(R,"-multiple-words"),!s&&F&&F.toString().length>1),(0,o.Z)(e,"".concat(R,"-status-").concat(m),!!m),(0,o.Z)(e,"".concat(R,"-status-").concat(k),v(k)),e)),l=(0,a.Z)({},K);return k&&!v(k)&&((l=l||{}).background=k),i.createElement(b,{prefixCls:r,show:!q,motionClassName:n,className:u,count:F,title:V,style:l,key:"scrollNumber"},$)})),W)};Z.Ribbon=p;var j=Z}}]);
//# sourceMappingURL=326.77fec7fb.chunk.js.map