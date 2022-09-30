"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[367],{5527:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1413),r=n(2791),o={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z",fill:t}},{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",fill:e}}]}},name:"check-circle",theme:"twotone"},c=n(4291),i=function(e,t){return r.createElement(c.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:o}))};i.displayName="CheckCircleTwoTone";var l=r.forwardRef(i)},5594:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(4942),r=n(1002),o=n(7462),c=n(1694),i=n.n(c),l=n(5207),u=n(2791),s=n(1929),f=n(1113),d=n(4466);function v(e){return-1!==d.Y.indexOf(e)}var m=function(e){var t,n=e.className,r=e.prefixCls,c=e.style,l=e.color,f=e.children,d=e.text,m=e.placement,p=void 0===m?"end":m,b=u.useContext(s.E_),h=b.getPrefixCls,y=b.direction,Z=h("ribbon",r),g=v(l),E=i()(Z,"".concat(Z,"-placement-").concat(p),(t={},(0,a.Z)(t,"".concat(Z,"-rtl"),"rtl"===y),(0,a.Z)(t,"".concat(Z,"-color-").concat(l),g),t),n),x={},w={};return l&&!g&&(x.background=l,w.color=l),u.createElement("div",{className:"".concat(Z,"-wrapper")},f,u.createElement("div",{className:E,style:(0,o.Z)((0,o.Z)({},x),c)},u.createElement("span",{className:"".concat(Z,"-text")},d),u.createElement("div",{className:"".concat(Z,"-corner"),style:w})))},p=n(9439);function b(e){var t,n=e.prefixCls,a=e.value,r=e.current,o=e.offset,c=void 0===o?0:o;return c&&(t={position:"absolute",top:"".concat(c,"00%"),left:0}),u.createElement("span",{style:t,className:i()("".concat(n,"-only-unit"),{current:r})},a)}function h(e,t,n){for(var a=e,r=0;(a+10)%10!==t;)a+=n,r+=n;return r}function y(e){var t,n,a=e.prefixCls,r=e.count,c=e.value,i=Number(c),l=Math.abs(r),s=u.useState(i),f=(0,p.Z)(s,2),d=f[0],v=f[1],m=u.useState(l),y=(0,p.Z)(m,2),Z=y[0],g=y[1],E=function(){v(i),g(l)};if(u.useEffect((function(){var e=setTimeout((function(){E()}),1e3);return function(){clearTimeout(e)}}),[i]),d===i||Number.isNaN(i)||Number.isNaN(d))t=[u.createElement(b,(0,o.Z)({},e,{key:i,current:!0}))],n={transition:"none"};else{t=[];for(var x=i+10,w=[],C=i;C<=x;C+=1)w.push(C);var N=w.findIndex((function(e){return e%10===d}));t=w.map((function(t,n){var a=t%10;return u.createElement(b,(0,o.Z)({},e,{key:t,value:a,offset:n-N,current:n===N}))})),n={transform:"translateY(".concat(-h(d,i,Z<l?1:-1),"00%)")}}return u.createElement("span",{className:"".concat(a,"-only"),style:n,onTransitionEnd:E},t)}var Z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},g=function(e){var t=e.prefixCls,n=e.count,a=e.className,r=e.motionClassName,c=e.style,l=e.title,d=e.show,v=e.component,m=void 0===v?"sup":v,p=e.children,b=Z(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),h=(0,u.useContext(s.E_).getPrefixCls)("scroll-number",t),g=(0,o.Z)((0,o.Z)({},b),{"data-show":d,style:c,className:i()(h,a,r),title:l}),E=n;if(n&&Number(n)%1===0){var x=String(n).split("");E=x.map((function(e,t){return u.createElement(y,{prefixCls:h,count:Number(n),value:e,key:x.length-t})}))}return c&&c.borderColor&&(g.style=(0,o.Z)((0,o.Z)({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),p?(0,f.Tm)(p,(function(e){return{className:i()("".concat(h,"-custom-component"),null===e||void 0===e?void 0:e.className,r)}})):u.createElement(m,g,E)},E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},x=function(e){var t,n,c=e.prefixCls,d=e.scrollNumberPrefixCls,m=e.children,p=e.status,b=e.text,h=e.color,y=e.count,Z=void 0===y?null:y,x=e.overflowCount,w=void 0===x?99:x,C=e.dot,N=void 0!==C&&C,k=e.size,P=void 0===k?"default":k,T=e.title,S=e.offset,I=e.style,O=e.className,R=e.showZero,M=void 0!==R&&R,B=E(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),j=u.useContext(s.E_),L=j.getPrefixCls,A=j.direction,D=L("badge",c),z=Z>w?"".concat(w,"+"):Z,K=null!==p&&void 0!==p||null!==h&&void 0!==h,W="0"===z||0===z,q=N&&!W,_=q?"":z,H=(0,u.useMemo)((function(){return(null===_||void 0===_||""===_||W&&!M)&&!q}),[_,W,M,q]),V=(0,u.useRef)(Z);H||(V.current=Z);var G=V.current,Y=(0,u.useRef)(_);H||(Y.current=_);var F=Y.current,X=(0,u.useRef)(q);H||(X.current=q);var U=(0,u.useMemo)((function(){if(!S)return(0,o.Z)({},I);var e={marginTop:S[1]};return"rtl"===A?e.left=parseInt(S[0],10):e.right=-parseInt(S[0],10),(0,o.Z)((0,o.Z)({},e),I)}),[A,S,I]),J=null!==T&&void 0!==T?T:"string"===typeof G||"number"===typeof G?G:void 0,Q=H||!b?null:u.createElement("span",{className:"".concat(D,"-status-text")},b),$=G&&"object"===(0,r.Z)(G)?(0,f.Tm)(G,(function(e){return{style:(0,o.Z)((0,o.Z)({},U),e.style)}})):void 0,ee=i()((t={},(0,a.Z)(t,"".concat(D,"-status-dot"),K),(0,a.Z)(t,"".concat(D,"-status-").concat(p),!!p),(0,a.Z)(t,"".concat(D,"-status-").concat(h),v(h)),t)),te={};h&&!v(h)&&(te.background=h);var ne=i()(D,(n={},(0,a.Z)(n,"".concat(D,"-status"),K),(0,a.Z)(n,"".concat(D,"-not-a-wrapper"),!m),(0,a.Z)(n,"".concat(D,"-rtl"),"rtl"===A),n),O);if(!m&&K){var ae=U.color;return u.createElement("span",(0,o.Z)({},B,{className:ne,style:U}),u.createElement("span",{className:ee,style:te}),b&&u.createElement("span",{style:{color:ae},className:"".concat(D,"-status-text")},b))}return u.createElement("span",(0,o.Z)({},B,{className:ne}),m,u.createElement(l.Z,{visible:!H,motionName:"".concat(D,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,n=e.className,r=L("scroll-number",d),c=X.current,l=i()((t={},(0,a.Z)(t,"".concat(D,"-dot"),c),(0,a.Z)(t,"".concat(D,"-count"),!c),(0,a.Z)(t,"".concat(D,"-count-sm"),"small"===P),(0,a.Z)(t,"".concat(D,"-multiple-words"),!c&&F&&F.toString().length>1),(0,a.Z)(t,"".concat(D,"-status-").concat(p),!!p),(0,a.Z)(t,"".concat(D,"-status-").concat(h),v(h)),t)),s=(0,o.Z)({},U);return h&&!v(h)&&((s=s||{}).background=h),u.createElement(g,{prefixCls:r,show:!H,motionClassName:n,className:l,count:F,title:J,style:s,key:"scrollNumber"},$)})),Q)};x.Ribbon=m;var w=x},228:function(e,t,n){n.d(t,{Z:function(){return ie}});var a=n(4942),r=n(7462),o=n(732),c=n(5033),i=n(1413),l=n(2791),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(4291),f=function(e,t){return l.createElement(s.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:u}))};f.displayName="PlusOutlined";var d=l.forwardRef(f),v=n(1694),m=n.n(v),p=n(9439),b=n(1002),h=n(4925),y=n(3786),Z=n(5179),g=n(5207),E=(0,l.createContext)(null);var x=l.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.style,o=e.id,c=e.active,i=e.tabKey,u=e.children;return l.createElement("div",{id:o&&"".concat(o,"-panel-").concat(i),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(i),"aria-hidden":!c,style:r,className:m()(n,c&&"".concat(n,"-active"),a),ref:t},u)})),w=["key","forceRender","style","className"];function C(e){var t=e.id,n=e.activeKey,o=e.animated,c=e.tabPosition,u=e.destroyInactiveTabPane,s=l.useContext(E),f=s.prefixCls,d=s.tabs,v=o.tabPane,p="".concat(f,"-tabpane");return l.createElement("div",{className:m()("".concat(f,"-content-holder"))},l.createElement("div",{className:m()("".concat(f,"-content"),"".concat(f,"-content-").concat(c),(0,a.Z)({},"".concat(f,"-content-animated"),v))},d.map((function(e){var a=e.key,c=e.forceRender,s=e.style,f=e.className,d=(0,h.Z)(e,w),b=a===n;return l.createElement(g.Z,(0,r.Z)({key:a,visible:b,forceRender:c,removeOnLeave:!!u,leavedClassName:"".concat(p,"-hidden")},o.tabPaneMotion),(function(e,n){var o=e.style,c=e.className;return l.createElement(x,(0,r.Z)({},d,{prefixCls:p,id:t,tabKey:a,animated:v,active:b,style:(0,i.Z)((0,i.Z)({},s),o),className:m()(f,c),ref:n}))}))}))))}var N=n(3433),k=n(5314),P=n(8829);function T(e){var t=(0,l.useRef)(),n=(0,l.useRef)(!1);return(0,l.useEffect)((function(){return n.current=!1,function(){n.current=!0,k.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(k.Z.cancel(t.current),t.current=(0,k.Z)((function(){e.apply(void 0,r)})))}}var S=n(1354);function I(e,t){var n,r=e.prefixCls,o=e.id,c=e.active,i=e.tab,u=i.key,s=i.label,f=i.disabled,d=i.closeIcon,v=e.closable,p=e.renderWrapper,b=e.removeAriaLabel,h=e.editable,y=e.onClick,Z=e.onRemove,g=e.onFocus,E=e.style,x="".concat(r,"-tab");l.useEffect((function(){return Z}),[]);var w=h&&!1!==v&&!f;function C(e){f||y(e)}var N=l.createElement("div",{key:u,ref:t,className:m()(x,(n={},(0,a.Z)(n,"".concat(x,"-with-remove"),w),(0,a.Z)(n,"".concat(x,"-active"),c),(0,a.Z)(n,"".concat(x,"-disabled"),f),n)),style:E,onClick:C},l.createElement("div",{role:"tab","aria-selected":c,id:o&&"".concat(o,"-tab-").concat(u),className:"".concat(x,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),C(e)},onKeyDown:function(e){[S.Z.SPACE,S.Z.ENTER].includes(e.which)&&(e.preventDefault(),C(e))},onFocus:g},s),w&&l.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(x,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:u,event:t})}},d||h.removeIcon||"\xd7"));return p?p(N):N}var O=l.forwardRef(I),R={width:0,height:0,left:0,top:0};var M={width:0,height:0,left:0,top:0,right:0};var B=n(2257),j=n(3241);function L(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var A=l.forwardRef(L);function D(e,t){var n=e.prefixCls,r=e.id,o=e.tabs,c=e.locale,i=e.mobile,u=e.moreIcon,s=void 0===u?"More":u,f=e.moreTransitionName,d=e.style,v=e.className,b=e.editable,h=e.tabBarGutter,y=e.rtl,Z=e.removeAriaLabel,g=e.onTabClick,E=e.getPopupContainer,x=e.popupClassName,w=(0,l.useState)(!1),C=(0,p.Z)(w,2),N=C[0],k=C[1],P=(0,l.useState)(null),T=(0,p.Z)(P,2),I=T[0],O=T[1],R="".concat(r,"-more-popup"),M="".concat(n,"-dropdown"),L=null!==I?"".concat(R,"-").concat(I):null,D=null===c||void 0===c?void 0:c.dropdownAriaLabel;var z=l.createElement(B.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),k(!1)},prefixCls:"".concat(M,"-menu"),id:R,tabIndex:-1,role:"listbox","aria-activedescendant":L,selectedKeys:[I],"aria-label":void 0!==D?D:"expanded dropdown"},o.map((function(e){var t=b&&!1!==e.closable&&!e.disabled;return l.createElement(B.sN,{key:e.key,id:"".concat(R,"-").concat(e.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.label),t&&l.createElement("button",{type:"button","aria-label":Z||"remove",tabIndex:0,className:"".concat(M,"-menu-item-remove"),onClick:function(t){var n,a;t.stopPropagation(),n=t,a=e.key,n.preventDefault(),n.stopPropagation(),b.onEdit("remove",{key:a,event:n})}},e.closeIcon||b.removeIcon||"\xd7"))})));function K(e){for(var t=o.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===I}))||0,a=t.length,r=0;r<a;r+=1){var c=t[n=(n+e+a)%a];if(!c.disabled)return void O(c.key)}}(0,l.useEffect)((function(){var e=document.getElementById(L);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[I]),(0,l.useEffect)((function(){N||O(null)}),[N]);var W=(0,a.Z)({},y?"marginRight":"marginLeft",h);o.length||(W.visibility="hidden",W.order=1);var q=m()((0,a.Z)({},"".concat(M,"-rtl"),y)),_=i?null:l.createElement(j.Z,{prefixCls:M,overlay:z,trigger:["hover"],visible:!!o.length&&N,transitionName:f,onVisibleChange:k,overlayClassName:m()(q,x),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:W,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":R,id:"".concat(r,"-more"),"aria-expanded":N,onKeyDown:function(e){var t=e.which;if(N)switch(t){case S.Z.UP:K(-1),e.preventDefault();break;case S.Z.DOWN:K(1),e.preventDefault();break;case S.Z.ESC:k(!1);break;case S.Z.SPACE:case S.Z.ENTER:null!==I&&g(I,e)}else[S.Z.DOWN,S.Z.SPACE,S.Z.ENTER].includes(t)&&(k(!0),e.preventDefault())}},s));return l.createElement("div",{className:m()("".concat(n,"-nav-operations"),v),style:d,ref:t},_,l.createElement(A,{prefixCls:n,locale:c,editable:b}))}var z=l.memo(l.forwardRef(D),(function(e,t){return t.tabMoving})),K=Math.pow(.995,20);function W(e,t){var n=l.useRef(e),a=l.useState({}),r=(0,p.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var q=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o={};return r&&"object"===(0,b.Z)(r)&&!l.isValidElement(r)?o=r:o.right=r,"right"===n&&(t=o.right),"left"===n&&(t=o.left),t?l.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function _(e,t){var n,o=l.useContext(E),c=o.prefixCls,u=o.tabs,s=e.className,f=e.style,d=e.id,v=e.animated,b=e.activeKey,h=e.rtl,y=e.extra,Z=e.editable,g=e.locale,x=e.tabPosition,w=e.tabBarGutter,C=e.children,S=e.onTabClick,I=e.onTabScroll,B=(0,l.useRef)(),j=(0,l.useRef)(),L=(0,l.useRef)(),D=(0,l.useRef)(),_=function(){var e=(0,l.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,l.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),H=(0,p.Z)(_,2),V=H[0],G=H[1],Y="top"===x||"bottom"===x,F=W(0,(function(e,t){Y&&I&&I({direction:e>t?"left":"right"})})),X=(0,p.Z)(F,2),U=X[0],J=X[1],Q=W(0,(function(e,t){!Y&&I&&I({direction:e>t?"top":"bottom"})})),$=(0,p.Z)(Q,2),ee=$[0],te=$[1],ne=(0,l.useState)(0),ae=(0,p.Z)(ne,2),re=ae[0],oe=ae[1],ce=(0,l.useState)(0),ie=(0,p.Z)(ce,2),le=ie[0],ue=ie[1],se=(0,l.useState)(null),fe=(0,p.Z)(se,2),de=fe[0],ve=fe[1],me=(0,l.useState)(null),pe=(0,p.Z)(me,2),be=pe[0],he=pe[1],ye=(0,l.useState)(0),Ze=(0,p.Z)(ye,2),ge=Ze[0],Ee=Ze[1],xe=(0,l.useState)(0),we=(0,p.Z)(xe,2),Ce=we[0],Ne=we[1],ke=function(e){var t=(0,l.useRef)([]),n=(0,l.useState)({}),a=(0,p.Z)(n,2)[1],r=(0,l.useRef)("function"===typeof e?e():e),o=T((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),o()}]}(new Map),Pe=(0,p.Z)(ke,2),Te=Pe[0],Se=Pe[1],Ie=function(e,t,n){return(0,l.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||R,o=r.left+r.width,c=0;c<e.length;c+=1){var l,u=e[c].key,s=t.get(u);s||(s=t.get(null===(l=e[c-1])||void 0===l?void 0:l.key)||R);var f=a.get(u)||(0,i.Z)({},s);f.right=o-f.left-f.width,a.set(u,f)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(u,Te,re),Oe="".concat(c,"-nav-operations-hidden"),Re=0,Me=0;function Be(e){return e<Re?Re:e>Me?Me:e}Y?h?(Re=0,Me=Math.max(0,re-de)):(Re=Math.min(0,de-re),Me=0):(Re=Math.min(0,be-le),Me=0);var je=(0,l.useRef)(),Le=(0,l.useState)(),Ae=(0,p.Z)(Le,2),De=Ae[0],ze=Ae[1];function Ke(){ze(Date.now())}function We(){window.clearTimeout(je.current)}function qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=Ie.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Y){var n=U;h?t.right<U?n=t.right:t.right+t.width>U+de&&(n=t.right+t.width-de):t.left<-U?n=-t.left:t.left+t.width>-U+de&&(n=-(t.left+t.width-de)),te(0),J(Be(n))}else{var a=ee;t.top<-ee?a=-t.top:t.top+t.height>-ee+be&&(a=-(t.top+t.height-be)),J(0),te(Be(a))}}!function(e,t){var n=(0,l.useState)(),a=(0,p.Z)(n,2),r=a[0],o=a[1],c=(0,l.useState)(0),i=(0,p.Z)(c,2),u=i[0],s=i[1],f=(0,l.useState)(0),d=(0,p.Z)(f,2),v=d[0],m=d[1],b=(0,l.useState)(),h=(0,p.Z)(b,2),y=h[0],Z=h[1],g=(0,l.useRef)(),E=(0,l.useRef)(),x=(0,l.useRef)(null);x.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,c=n.screenY;o({x:a,y:c});var i=a-r.x,l=c-r.y;t(i,l);var f=Date.now();s(f),m(f-u),Z({x:i,y:l})}},onTouchEnd:function(){if(r&&(o(null),Z(null),y)){var e=y.x/v,n=y.y/v,a=Math.abs(e),c=Math.abs(n);if(Math.max(a,c)<.1)return;var i=e,l=n;g.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(g.current):t(20*(i*=K),20*(l*=K))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),c=Math.abs(a);o===c?r="x"===E.current?n:a:o>c?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},l.useEffect((function(){function t(e){x.current.onTouchMove(e)}function n(e){x.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){x.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){x.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(B,(function(e,t){function n(e,t){e((function(e){return Be(e+t)}))}if(Y){if(de>=re)return!1;n(J,e)}else{if(be>=le)return!1;n(te,t)}return We(),Ke(),!0})),(0,l.useEffect)((function(){return We(),De&&(je.current=window.setTimeout((function(){ze(0)}),100)),We}),[De]);var _e=function(e,t,n,a,r){var o,c,i,u=r.tabs,s=r.tabPosition,f=r.rtl;["top","bottom"].includes(s)?(o="width",c=f?"right":"left",i=Math.abs(t.left)):(o="height",c="top",i=-t.top);var d=t[o],v=n[o],m=a[o],p=d;return v+m>d&&v<d&&(p=d-m),(0,l.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||M;if(r[c]+r[o]>i+p){n=a-1;break}}for(var l=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||M)[c]<i){l=s+1;break}return[l,n]}),[e,i,p,s,u.map((function(e){return e.key})).join("_"),f])}(Ie,{width:de,height:be,left:U,top:ee},{width:re,height:le},{width:ge,height:Ce},(0,i.Z)((0,i.Z)({},e),{},{tabs:u})),He=(0,p.Z)(_e,2),Ve=He[0],Ge=He[1],Ye={};"top"===x||"bottom"===x?Ye[h?"marginRight":"marginLeft"]=w:Ye.marginTop=w;var Fe=u.map((function(e,t){var n=e.key;return l.createElement(O,{id:d,prefixCls:c,key:n,tab:e,style:0===t?void 0:Ye,closable:e.closable,editable:Z,active:n===b,renderWrapper:C,removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,ref:V(n),onClick:function(e){S(n,e)},onRemove:function(){G(n)},onFocus:function(){qe(n),Ke(),B.current&&(h||(B.current.scrollLeft=0),B.current.scrollTop=0)}})})),Xe=T((function(){var e,t,n,a,r,o,c=(null===(e=B.current)||void 0===e?void 0:e.offsetWidth)||0,i=(null===(t=B.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(n=D.current)||void 0===n?void 0:n.offsetWidth)||0,s=(null===(a=D.current)||void 0===a?void 0:a.offsetHeight)||0;ve(c),he(i),Ee(l),Ne(s);var f=((null===(r=j.current)||void 0===r?void 0:r.offsetWidth)||0)-l,d=((null===(o=j.current)||void 0===o?void 0:o.offsetHeight)||0)-s;oe(f),ue(d),Se((function(){var e=new Map;return u.forEach((function(t){var n=t.key,a=V(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),Ue=u.slice(0,Ve),Je=u.slice(Ge+1),Qe=[].concat((0,N.Z)(Ue),(0,N.Z)(Je)),$e=(0,l.useState)(),et=(0,p.Z)($e,2),tt=et[0],nt=et[1],at=Ie.get(b),rt=(0,l.useRef)();function ot(){k.Z.cancel(rt.current)}(0,l.useEffect)((function(){var e={};return at&&(Y?(h?e.right=at.right:e.left=at.left,e.width=at.width):(e.top=at.top,e.height=at.height)),ot(),rt.current=(0,k.Z)((function(){nt(e)})),ot}),[at,Y,h]),(0,l.useEffect)((function(){qe()}),[b,at,Ie,Y]),(0,l.useEffect)((function(){Xe()}),[h,w,b,u.map((function(e){return e.key})).join("_")]);var ct,it,lt,ut,st=!!Qe.length,ft="".concat(c,"-nav-wrap");return Y?h?(it=U>0,ct=U+de<re):(ct=U<0,it=-U+de<re):(lt=ee<0,ut=-ee+be<le),l.createElement("div",{ref:t,role:"tablist",className:m()("".concat(c,"-nav"),s),style:f,onKeyDown:function(){Ke()}},l.createElement(q,{position:"left",extra:y,prefixCls:c}),l.createElement(P.Z,{onResize:Xe},l.createElement("div",{className:m()(ft,(n={},(0,a.Z)(n,"".concat(ft,"-ping-left"),ct),(0,a.Z)(n,"".concat(ft,"-ping-right"),it),(0,a.Z)(n,"".concat(ft,"-ping-top"),lt),(0,a.Z)(n,"".concat(ft,"-ping-bottom"),ut),n)),ref:B},l.createElement(P.Z,{onResize:Xe},l.createElement("div",{ref:j,className:"".concat(c,"-nav-list"),style:{transform:"translate(".concat(U,"px, ").concat(ee,"px)"),transition:De?"none":void 0}},Fe,l.createElement(A,{ref:D,prefixCls:c,locale:g,editable:Z,style:(0,i.Z)((0,i.Z)({},0===Fe.length?void 0:Ye),{},{visibility:st?"hidden":null})}),l.createElement("div",{className:m()("".concat(c,"-ink-bar"),(0,a.Z)({},"".concat(c,"-ink-bar-animated"),v.inkBar)),style:tt}))))),l.createElement(z,(0,r.Z)({},e,{removeAriaLabel:null===g||void 0===g?void 0:g.removeAriaLabel,ref:L,prefixCls:c,tabs:Qe,className:!st&&Oe,tabMoving:!!De})),l.createElement(q,{position:"right",extra:y,prefixCls:c}))}var H=l.forwardRef(_),V=["renderTabBar"],G=["label","key"];function Y(e){var t=e.renderTabBar,n=(0,h.Z)(e,V),a=(0,l.useContext)(E).tabs;return t?t((0,i.Z)((0,i.Z)({},n),{},{panes:a.map((function(e){var t=e.label,n=e.key,a=(0,h.Z)(e,G);return l.createElement(x,(0,r.Z)({tab:t,key:n,tabKey:n},a))}))}),H):l.createElement(H,n)}n(632);var F=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],X=0;function U(e,t){var n,o=e.id,c=e.prefixCls,u=void 0===c?"rc-tabs":c,s=e.className,f=e.items,d=e.direction,v=e.activeKey,g=e.defaultActiveKey,x=e.editable,w=e.animated,N=e.tabPosition,k=void 0===N?"top":N,P=e.tabBarGutter,T=e.tabBarStyle,S=e.tabBarExtraContent,I=e.locale,O=e.moreIcon,R=e.moreTransitionName,M=e.destroyInactiveTabPane,B=e.renderTabBar,j=e.onChange,L=e.onTabClick,A=e.onTabScroll,D=e.getPopupContainer,z=e.popupClassName,K=(0,h.Z)(e,F),W=l.useMemo((function(){return(f||[]).filter((function(e){return e&&"object"===(0,b.Z)(e)&&"key"in e}))}),[f]),q="rtl"===d,_=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,i.Z)({inkBar:!0},"object"===(0,b.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(w),H=(0,l.useState)(!1),V=(0,p.Z)(H,2),G=V[0],U=V[1];(0,l.useEffect)((function(){U((0,y.Z)())}),[]);var J=(0,Z.Z)((function(){var e;return null===(e=W[0])||void 0===e?void 0:e.key}),{value:v,defaultValue:g}),Q=(0,p.Z)(J,2),$=Q[0],ee=Q[1],te=(0,l.useState)((function(){return W.findIndex((function(e){return e.key===$}))})),ne=(0,p.Z)(te,2),ae=ne[0],re=ne[1];(0,l.useEffect)((function(){var e,t=W.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,W.length-1)),ee(null===(e=W[t])||void 0===e?void 0:e.key));re(t)}),[W.map((function(e){return e.key})).join("_"),$,ae]);var oe=(0,Z.Z)(null,{value:o}),ce=(0,p.Z)(oe,2),ie=ce[0],le=ce[1];(0,l.useEffect)((function(){o||(le("rc-tabs-".concat(X)),X+=1)}),[]);var ue={id:ie,activeKey:$,animated:_,tabPosition:k,rtl:q,mobile:G},se=(0,i.Z)((0,i.Z)({},ue),{},{editable:x,locale:I,moreIcon:O,moreTransitionName:R,tabBarGutter:P,onTabClick:function(e,t){null===L||void 0===L||L(e,t);var n=e!==$;ee(e),n&&(null===j||void 0===j||j(e))},onTabScroll:A,extra:S,style:T,panes:null,getPopupContainer:D,popupClassName:z});return l.createElement(E.Provider,{value:{tabs:W,prefixCls:u}},l.createElement("div",(0,r.Z)({ref:t,id:o,className:m()(u,"".concat(u,"-").concat(k),(n={},(0,a.Z)(n,"".concat(u,"-mobile"),G),(0,a.Z)(n,"".concat(u,"-editable"),x),(0,a.Z)(n,"".concat(u,"-rtl"),q),n),s)},K),undefined,l.createElement(Y,(0,r.Z)({},se,{renderTabBar:B})),l.createElement(C,(0,r.Z)({destroyInactiveTabPane:M},ue,{animated:_}))))}var J=l.forwardRef(U),Q=n(1929),$=n(1815),ee=n(9464),te={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ne=n(5501),ae=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var re=function(){return null},oe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function ce(e){var t,n=e.type,i=e.className,u=e.size,s=e.onEdit,f=e.hideAdd,v=e.centered,p=e.addIcon,h=e.children,y=e.items,Z=e.animated,g=oe(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),E=g.prefixCls,x=g.moreIcon,w=void 0===x?l.createElement(c.Z,null):x,C=l.useContext(Q.E_),N=C.getPrefixCls,k=C.direction,P=N("tabs",E);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===s||void 0===s||s("add"===e?a:n,e)},removeIcon:l.createElement(o.Z,null),addIcon:p||l.createElement(d,null),showAdd:!0!==f});var T=N(),S=function(e,t){return e||function(e){return e.filter((function(e){return e}))}((0,ne.Z)(t).map((function(e){if(l.isValidElement(e)){var t=e.key,n=e.props||{},a=n.tab,o=ae(n,["tab"]);return(0,r.Z)((0,r.Z)({key:String(t)},o),{label:a})}return null})))}(y,h),I=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,r.Z)({inkBar:!0},"object"===(0,b.Z)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,r.Z)((0,r.Z)({},te),{motionName:(0,ee.mL)(e,"switch")})),t}(P,Z);return l.createElement($.Z.Consumer,null,(function(e){var o,c=void 0!==u?u:e;return l.createElement(J,(0,r.Z)({direction:k,moreTransitionName:"".concat(T,"-slide-up")},g,{items:S,className:m()((o={},(0,a.Z)(o,"".concat(P,"-").concat(c),c),(0,a.Z)(o,"".concat(P,"-card"),["card","editable-card"].includes(n)),(0,a.Z)(o,"".concat(P,"-editable-card"),"editable-card"===n),(0,a.Z)(o,"".concat(P,"-centered"),v),o),i),editable:t,moreIcon:w,prefixCls:P,animated:I}))}))}ce.TabPane=re;var ie=ce}}]);
//# sourceMappingURL=367.1c4a3575.chunk.js.map