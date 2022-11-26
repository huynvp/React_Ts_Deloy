"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[476],{5527:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(1413),a=n(2791),o={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:e}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z",fill:t}},{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",fill:e}}]}},name:"check-circle",theme:"twotone"},c=n(4291),i=function(e,t){return a.createElement(c.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:o}))};i.displayName="CheckCircleTwoTone";var l=a.forwardRef(i)},5594:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(4942),a=n(1002),o=n(7462),c=n(1694),i=n.n(c),l=n(5207),u=n(2791),s=n(1929),f=n(1113),d=n(4466);function v(e){return d.Y.includes(e)}var m=function(e){var t,n=e.className,a=e.prefixCls,c=e.style,l=e.color,f=e.children,d=e.text,m=e.placement,p=void 0===m?"end":m,b=u.useContext(s.E_),h=b.getPrefixCls,y=b.direction,g=h("ribbon",a),Z=v(l),E=i()(g,"".concat(g,"-placement-").concat(p),(t={},(0,r.Z)(t,"".concat(g,"-rtl"),"rtl"===y),(0,r.Z)(t,"".concat(g,"-color-").concat(l),Z),t),n),C={},w={};return l&&!Z&&(C.background=l,w.color=l),u.createElement("div",{className:"".concat(g,"-wrapper")},f,u.createElement("div",{className:E,style:(0,o.Z)((0,o.Z)({},C),c)},u.createElement("span",{className:"".concat(g,"-text")},d),u.createElement("div",{className:"".concat(g,"-corner"),style:w})))},p=n(9439);function b(e){var t,n=e.prefixCls,r=e.value,a=e.current,o=e.offset,c=void 0===o?0:o;return c&&(t={position:"absolute",top:"".concat(c,"00%"),left:0}),u.createElement("span",{style:t,className:i()("".concat(n,"-only-unit"),{current:a})},r)}function h(e,t,n){for(var r=e,a=0;(r+10)%10!==t;)r+=n,a+=n;return a}function y(e){var t,n,r=e.prefixCls,a=e.count,c=e.value,i=Number(c),l=Math.abs(a),s=u.useState(i),f=(0,p.Z)(s,2),d=f[0],v=f[1],m=u.useState(l),y=(0,p.Z)(m,2),g=y[0],Z=y[1],E=function(){v(i),Z(l)};if(u.useEffect((function(){var e=setTimeout((function(){E()}),1e3);return function(){clearTimeout(e)}}),[i]),d===i||Number.isNaN(i)||Number.isNaN(d))t=[u.createElement(b,(0,o.Z)({},e,{key:i,current:!0}))],n={transition:"none"};else{t=[];for(var C=i+10,w=[],x=i;x<=C;x+=1)w.push(x);var N=w.findIndex((function(e){return e%10===d}));t=w.map((function(t,n){var r=t%10;return u.createElement(b,(0,o.Z)({},e,{key:t,value:r,offset:n-N,current:n===N}))})),n={transform:"translateY(".concat(-h(d,i,g<l?1:-1),"00%)")}}return u.createElement("span",{className:"".concat(r,"-only"),style:n,onTransitionEnd:E},t)}var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},Z=function(e){var t=e.prefixCls,n=e.count,r=e.className,a=e.motionClassName,c=e.style,l=e.title,d=e.show,v=e.component,m=void 0===v?"sup":v,p=e.children,b=g(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),h=(0,u.useContext(s.E_).getPrefixCls)("scroll-number",t),Z=(0,o.Z)((0,o.Z)({},b),{"data-show":d,style:c,className:i()(h,r,a),title:l}),E=n;if(n&&Number(n)%1===0){var C=String(n).split("");E=C.map((function(e,t){return u.createElement(y,{prefixCls:h,count:Number(n),value:e,key:C.length-t})}))}return c&&c.borderColor&&(Z.style=(0,o.Z)((0,o.Z)({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),p?(0,f.Tm)(p,(function(e){return{className:i()("".concat(h,"-custom-component"),null===e||void 0===e?void 0:e.className,a)}})):u.createElement(m,Z,E)},E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},C=function(e){var t,n,c=e.prefixCls,d=e.scrollNumberPrefixCls,m=e.children,p=e.status,b=e.text,h=e.color,y=e.count,g=void 0===y?null:y,C=e.overflowCount,w=void 0===C?99:C,x=e.dot,N=void 0!==x&&x,k=e.size,P=void 0===k?"default":k,R=e.title,T=e.offset,O=e.style,S=e.className,I=e.showZero,M=void 0!==I&&I,A=E(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),L=u.useContext(s.E_),B=L.getPrefixCls,j=L.direction,D=B("badge",c),V=g>w?"".concat(w,"+"):g,z="0"===V||0===V,K=(null!==p&&void 0!==p||null!==h&&void 0!==h)&&(null===g||z),W=N&&!z,q=W?"":V,F=(0,u.useMemo)((function(){return(null===q||void 0===q||""===q||z&&!M)&&!W}),[q,z,M,W]),_=(0,u.useRef)(g);F||(_.current=g);var H=_.current,Y=(0,u.useRef)(q);F||(Y.current=q);var G=Y.current,X=(0,u.useRef)(W);F||(X.current=W);var J=(0,u.useMemo)((function(){if(!T)return(0,o.Z)({},O);var e={marginTop:T[1]};return"rtl"===j?e.left=parseInt(T[0],10):e.right=-parseInt(T[0],10),(0,o.Z)((0,o.Z)({},e),O)}),[j,T,O]),U=null!==R&&void 0!==R?R:"string"===typeof H||"number"===typeof H?H:void 0,Q=F||!b?null:u.createElement("span",{className:"".concat(D,"-status-text")},b),$=H&&"object"===(0,a.Z)(H)?(0,f.Tm)(H,(function(e){return{style:(0,o.Z)((0,o.Z)({},J),e.style)}})):void 0,ee=i()((t={},(0,r.Z)(t,"".concat(D,"-status-dot"),K),(0,r.Z)(t,"".concat(D,"-status-").concat(p),!!p),(0,r.Z)(t,"".concat(D,"-status-").concat(h),v(h)),t)),te={};h&&!v(h)&&(te.background=h);var ne=i()(D,(n={},(0,r.Z)(n,"".concat(D,"-status"),K),(0,r.Z)(n,"".concat(D,"-not-a-wrapper"),!m),(0,r.Z)(n,"".concat(D,"-rtl"),"rtl"===j),n),S);if(!m&&K){var re=J.color;return u.createElement("span",(0,o.Z)({},A,{className:ne,style:J}),u.createElement("span",{className:ee,style:te}),b&&u.createElement("span",{style:{color:re},className:"".concat(D,"-status-text")},b))}return u.createElement("span",(0,o.Z)({},A,{className:ne}),m,u.createElement(l.Z,{visible:!F,motionName:"".concat(D,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,n=e.className,a=B("scroll-number",d),c=X.current,l=i()((t={},(0,r.Z)(t,"".concat(D,"-dot"),c),(0,r.Z)(t,"".concat(D,"-count"),!c),(0,r.Z)(t,"".concat(D,"-count-sm"),"small"===P),(0,r.Z)(t,"".concat(D,"-multiple-words"),!c&&G&&G.toString().length>1),(0,r.Z)(t,"".concat(D,"-status-").concat(p),!!p),(0,r.Z)(t,"".concat(D,"-status-").concat(h),v(h)),t)),s=(0,o.Z)({},J);return h&&!v(h)&&((s=s||{}).background=h),u.createElement(Z,{prefixCls:a,show:!F,motionClassName:n,className:l,count:G,title:U,style:s,key:"scrollNumber"},$)})),Q)};C.Ribbon=m;var w=C},3940:function(e,t,n){n.d(t,{Z:function(){return fe}});var r=n(4942),a=n(7462),o=n(732),c=n(5033),i=n(1413),l=n(2791),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},s=n(4291),f=function(e,t){return l.createElement(s.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:u}))};f.displayName="PlusOutlined";var d=l.forwardRef(f),v=n(1694),m=n.n(v),p=n(9439),b=n(1002),h=n(4925),y=n(3786),g=n(5179),Z=n(5207),E=(0,l.createContext)(null);var C=l.forwardRef((function(e,t){var n=e.prefixCls,r=e.className,a=e.style,o=e.id,c=e.active,i=e.tabKey,u=e.children;return l.createElement("div",{id:o&&"".concat(o,"-panel-").concat(i),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(i),"aria-hidden":!c,style:a,className:m()(n,c&&"".concat(n,"-active"),r),ref:t},u)})),w=["key","forceRender","style","className"];function x(e){var t=e.id,n=e.activeKey,o=e.animated,c=e.tabPosition,u=e.destroyInactiveTabPane,s=l.useContext(E),f=s.prefixCls,d=s.tabs,v=o.tabPane,p="".concat(f,"-tabpane");return l.createElement("div",{className:m()("".concat(f,"-content-holder"))},l.createElement("div",{className:m()("".concat(f,"-content"),"".concat(f,"-content-").concat(c),(0,r.Z)({},"".concat(f,"-content-animated"),v))},d.map((function(e){var r=e.key,c=e.forceRender,s=e.style,f=e.className,d=(0,h.Z)(e,w),b=r===n;return l.createElement(Z.Z,(0,a.Z)({key:r,visible:b,forceRender:c,removeOnLeave:!!u,leavedClassName:"".concat(p,"-hidden")},o.tabPaneMotion),(function(e,n){var o=e.style,c=e.className;return l.createElement(C,(0,a.Z)({},d,{prefixCls:p,id:t,tabKey:r,animated:v,active:b,style:(0,i.Z)((0,i.Z)({},s),o),className:m()(f,c),ref:n}))}))}))))}var N=n(3433),k=n(5314),P=n(8834),R=n(8829);function T(e){var t=(0,l.useRef)(),n=(0,l.useRef)(!1);return(0,l.useEffect)((function(){return n.current=!1,function(){n.current=!0,k.Z.cancel(t.current)}}),[]),function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];n.current||(k.Z.cancel(t.current),t.current=(0,k.Z)((function(){e.apply(void 0,a)})))}}var O=n(1354);function S(e,t){var n,a=e.prefixCls,o=e.id,c=e.active,i=e.tab,u=i.key,s=i.label,f=i.disabled,d=i.closeIcon,v=e.closable,p=e.renderWrapper,b=e.removeAriaLabel,h=e.editable,y=e.onClick,g=e.onRemove,Z=e.onFocus,E=e.style,C="".concat(a,"-tab");l.useEffect((function(){return g}),[]);var w=h&&!1!==v&&!f;function x(e){f||y(e)}var N=l.createElement("div",{key:u,ref:t,className:m()(C,(n={},(0,r.Z)(n,"".concat(C,"-with-remove"),w),(0,r.Z)(n,"".concat(C,"-active"),c),(0,r.Z)(n,"".concat(C,"-disabled"),f),n)),style:E,onClick:x},l.createElement("div",{role:"tab","aria-selected":c,id:o&&"".concat(o,"-tab-").concat(u),className:"".concat(C,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[O.Z.SPACE,O.Z.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:Z},s),w&&l.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(C,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:u,event:t})}},d||h.removeIcon||"\xd7"));return p?p(N):N}var I=l.forwardRef(S),M={width:0,height:0,left:0,top:0};var A={width:0,height:0,left:0,top:0,right:0};var L=n(2257),B=n(3241);function j(e,t){var n=e.prefixCls,r=e.editable,a=e.locale,o=e.style;return r&&!1!==r.showAdd?l.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===a||void 0===a?void 0:a.addAriaLabel)||"Add tab",onClick:function(e){r.onEdit("add",{event:e})}},r.addIcon||"+"):null}var D=l.forwardRef(j);function V(e,t){var n=e.prefixCls,a=e.id,o=e.tabs,c=e.locale,i=e.mobile,u=e.moreIcon,s=void 0===u?"More":u,f=e.moreTransitionName,d=e.style,v=e.className,b=e.editable,h=e.tabBarGutter,y=e.rtl,g=e.removeAriaLabel,Z=e.onTabClick,E=e.getPopupContainer,C=e.popupClassName,w=(0,l.useState)(!1),x=(0,p.Z)(w,2),N=x[0],k=x[1],P=(0,l.useState)(null),R=(0,p.Z)(P,2),T=R[0],S=R[1],I="".concat(a,"-more-popup"),M="".concat(n,"-dropdown"),A=null!==T?"".concat(I,"-").concat(T):null,j=null===c||void 0===c?void 0:c.dropdownAriaLabel;var V=l.createElement(L.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;Z(t,n),k(!1)},prefixCls:"".concat(M,"-menu"),id:I,tabIndex:-1,role:"listbox","aria-activedescendant":A,selectedKeys:[T],"aria-label":void 0!==j?j:"expanded dropdown"},o.map((function(e){var t=b&&!1!==e.closable&&!e.disabled;return l.createElement(L.sN,{key:e.key,id:"".concat(I,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},l.createElement("span",null,e.label),t&&l.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(M,"-menu-item-remove"),onClick:function(t){var n,r;t.stopPropagation(),n=t,r=e.key,n.preventDefault(),n.stopPropagation(),b.onEdit("remove",{key:r,event:n})}},e.closeIcon||b.removeIcon||"\xd7"))})));function z(e){for(var t=o.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===T}))||0,r=t.length,a=0;a<r;a+=1){var c=t[n=(n+e+r)%r];if(!c.disabled)return void S(c.key)}}(0,l.useEffect)((function(){var e=document.getElementById(A);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[T]),(0,l.useEffect)((function(){N||S(null)}),[N]);var K=(0,r.Z)({},y?"marginRight":"marginLeft",h);o.length||(K.visibility="hidden",K.order=1);var W=m()((0,r.Z)({},"".concat(M,"-rtl"),y)),q=i?null:l.createElement(B.Z,{prefixCls:M,overlay:V,trigger:["hover"],visible:!!o.length&&N,transitionName:f,onVisibleChange:k,overlayClassName:m()(W,C),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E},l.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:K,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":I,id:"".concat(a,"-more"),"aria-expanded":N,onKeyDown:function(e){var t=e.which;if(N)switch(t){case O.Z.UP:z(-1),e.preventDefault();break;case O.Z.DOWN:z(1),e.preventDefault();break;case O.Z.ESC:k(!1);break;case O.Z.SPACE:case O.Z.ENTER:null!==T&&Z(T,e)}else[O.Z.DOWN,O.Z.SPACE,O.Z.ENTER].includes(t)&&(k(!0),e.preventDefault())}},s));return l.createElement("div",{className:m()("".concat(n,"-nav-operations"),v),style:d,ref:t},q,l.createElement(D,{prefixCls:n,locale:c,editable:b}))}var z=l.memo(l.forwardRef(V),(function(e,t){return t.tabMoving})),K=Math.pow(.995,20);function W(e,t){var n=l.useRef(e),r=l.useState({}),a=(0,p.Z)(r,2)[1];return[n.current,function(e){var r="function"===typeof e?e(n.current):e;r!==n.current&&t(r,n.current),n.current=r,a({})}]}function q(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}var F=l.forwardRef((function(e,t){var n,r=e.position,a=e.prefixCls,o=e.extra;if(!o)return null;var c={};return"object"!==(0,b.Z)(o)||l.isValidElement(o)?c.right=o:c=o,"right"===r&&(n=c.right),"left"===r&&(n=c.left),n?l.createElement("div",{className:"".concat(a,"-extra-content"),ref:t},n):null})),_=function(e){var t=e.current||{},n=t.offsetWidth,r=void 0===n?0:n,a=t.offsetHeight;return[r,void 0===a?0:a]},H=function(e,t){return e[t?0:1]};function Y(e,t){var n,o=l.useContext(E),c=o.prefixCls,u=o.tabs,s=e.className,f=e.style,d=e.id,v=e.animated,b=e.activeKey,h=e.rtl,y=e.extra,g=e.editable,Z=e.locale,C=e.tabPosition,w=e.tabBarGutter,x=e.children,O=e.onTabClick,S=e.onTabScroll,L=(0,l.useRef)(),B=(0,l.useRef)(),j=(0,l.useRef)(),V=(0,l.useRef)(),Y=(0,l.useRef)(),G=(0,l.useRef)(),X=(0,l.useRef)(),J=function(){var e=(0,l.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,l.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),U=(0,p.Z)(J,2),Q=U[0],$=U[1],ee="top"===C||"bottom"===C,te=W(0,(function(e,t){ee&&S&&S({direction:e>t?"left":"right"})})),ne=(0,p.Z)(te,2),re=ne[0],ae=ne[1],oe=W(0,(function(e,t){!ee&&S&&S({direction:e>t?"top":"bottom"})})),ce=(0,p.Z)(oe,2),ie=ce[0],le=ce[1],ue=(0,l.useState)([0,0]),se=(0,p.Z)(ue,2),fe=se[0],de=se[1],ve=(0,l.useState)([0,0]),me=(0,p.Z)(ve,2),pe=me[0],be=me[1],he=(0,l.useState)([0,0]),ye=(0,p.Z)(he,2),ge=ye[0],Ze=ye[1],Ee=(0,l.useState)([0,0]),Ce=(0,p.Z)(Ee,2),we=Ce[0],xe=Ce[1],Ne=function(e){var t=(0,l.useRef)([]),n=(0,l.useState)({}),r=(0,p.Z)(n,2)[1],a=(0,l.useRef)("function"===typeof e?e():e),o=T((function(){var e=a.current;t.current.forEach((function(t){e=t(e)})),t.current=[],a.current=e,r({})}));return[a.current,function(e){t.current.push(e),o()}]}(new Map),ke=(0,p.Z)(Ne,2),Pe=ke[0],Re=ke[1],Te=function(e,t,n){return(0,l.useMemo)((function(){for(var n,r=new Map,a=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||M,o=a.left+a.width,c=0;c<e.length;c+=1){var l,u=e[c].key,s=t.get(u);s||(s=t.get(null===(l=e[c-1])||void 0===l?void 0:l.key)||M);var f=r.get(u)||(0,i.Z)({},s);f.right=o-f.left-f.width,r.set(u,f)}return r}),[e.map((function(e){return e.key})).join("_"),t,n])}(u,Pe,pe[0]),Oe=H(fe,ee),Se=H(pe,ee),Ie=H(ge,ee),Me=H(we,ee),Ae=Oe<Se+Ie?Oe-Me:Oe-Ie,Le="".concat(c,"-nav-operations-hidden"),Be=0,je=0;function De(e){return e<Be?Be:e>je?je:e}ee&&h?(Be=0,je=Math.max(0,Se-Ae)):(Be=Math.min(0,Ae-Se),je=0);var Ve=(0,l.useRef)(),ze=(0,l.useState)(),Ke=(0,p.Z)(ze,2),We=Ke[0],qe=Ke[1];function Fe(){qe(Date.now())}function _e(){window.clearTimeout(Ve.current)}!function(e,t){var n=(0,l.useState)(),r=(0,p.Z)(n,2),a=r[0],o=r[1],c=(0,l.useState)(0),i=(0,p.Z)(c,2),u=i[0],s=i[1],f=(0,l.useState)(0),d=(0,p.Z)(f,2),v=d[0],m=d[1],b=(0,l.useState)(),h=(0,p.Z)(b,2),y=h[0],g=h[1],Z=(0,l.useRef)(),E=(0,l.useRef)(),C=(0,l.useRef)(null);C.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,r=t.screenY;o({x:n,y:r}),window.clearInterval(Z.current)},onTouchMove:function(e){if(a){e.preventDefault();var n=e.touches[0],r=n.screenX,c=n.screenY;o({x:r,y:c});var i=r-a.x,l=c-a.y;t(i,l);var f=Date.now();s(f),m(f-u),g({x:i,y:l})}},onTouchEnd:function(){if(a&&(o(null),g(null),y)){var e=y.x/v,n=y.y/v,r=Math.abs(e),c=Math.abs(n);if(Math.max(r,c)<.1)return;var i=e,l=n;Z.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(Z.current):t(20*(i*=K),20*(l*=K))}),20)}},onWheel:function(e){var n=e.deltaX,r=e.deltaY,a=0,o=Math.abs(n),c=Math.abs(r);o===c?a="x"===E.current?n:r:o>c?(a=n,E.current="x"):(a=r,E.current="y"),t(-a,-a)&&e.preventDefault()}},l.useEffect((function(){function t(e){C.current.onTouchMove(e)}function n(e){C.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){C.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){C.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(V,(function(e,t){function n(e,t){e((function(e){return De(e+t)}))}return!(Oe>=Se)&&(ee?n(ae,e):n(le,t),_e(),Fe(),!0)})),(0,l.useEffect)((function(){return _e(),We&&(Ve.current=window.setTimeout((function(){qe(0)}),100)),_e}),[We]);var He=function(e,t,n,r,a,o,c){var i,u,s,f=c.tabs,d=c.tabPosition,v=c.rtl;return["top","bottom"].includes(d)?(i="width",u=v?"right":"left",s=Math.abs(n)):(i="height",u="top",s=-n),(0,l.useMemo)((function(){if(!f.length)return[0,0];for(var n=f.length,r=n,a=0;a<n;a+=1){var o=e.get(f[a].key)||A;if(o[u]+o[i]>s+t){r=a-1;break}}for(var c=0,l=n-1;l>=0;l-=1)if((e.get(f[l].key)||A)[u]<s){c=l+1;break}return[c,r]}),[e,t,r,a,o,s,d,f.map((function(e){return e.key})).join("_"),v])}(Te,Ae,ee?re:ie,Se,Ie,Me,(0,i.Z)((0,i.Z)({},e),{},{tabs:u})),Ye=(0,p.Z)(He,2),Ge=Ye[0],Xe=Ye[1],Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=Te.get(e)||{width:0,height:0,left:0,right:0,top:0};if(ee){var n=re;h?t.right<re?n=t.right:t.right+t.width>re+Ae&&(n=t.right+t.width-Ae):t.left<-re?n=-t.left:t.left+t.width>-re+Ae&&(n=-(t.left+t.width-Ae)),le(0),ae(De(n))}else{var r=ie;t.top<-ie?r=-t.top:t.top+t.height>-ie+Ae&&(r=-(t.top+t.height-Ae)),ae(0),le(De(r))}},Ue={};"top"===C||"bottom"===C?Ue[h?"marginRight":"marginLeft"]=w:Ue.marginTop=w;var Qe=u.map((function(e,t){var n=e.key;return l.createElement(I,{id:d,prefixCls:c,key:n,tab:e,style:0===t?void 0:Ue,closable:e.closable,editable:g,active:n===b,renderWrapper:x,removeAriaLabel:null===Z||void 0===Z?void 0:Z.removeAriaLabel,ref:Q(n),onClick:function(e){O(n,e)},onRemove:function(){$(n)},onFocus:function(){Je(n),Fe(),V.current&&(h||(V.current.scrollLeft=0),V.current.scrollTop=0)}})})),$e=T((function(){var e=_(L),t=_(B),n=_(j);de([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var r=_(X);Ze(r);var a=_(G);xe(a);var o=_(Y);be([o[0]-r[0],o[1]-r[1]]),Re((function(){var e=new Map;return u.forEach((function(t){var n=t.key,r=Q(n).current;r&&e.set(n,{width:r.offsetWidth,height:r.offsetHeight,left:r.offsetLeft,top:r.offsetTop})})),e}))})),et=u.slice(0,Ge),tt=u.slice(Xe+1),nt=[].concat((0,N.Z)(et),(0,N.Z)(tt)),rt=(0,l.useState)(),at=(0,p.Z)(rt,2),ot=at[0],ct=at[1],it=Te.get(b),lt=(0,l.useRef)();function ut(){k.Z.cancel(lt.current)}(0,l.useEffect)((function(){var e={};return it&&(ee?(h?e.right=it.right:e.left=it.left,e.width=it.width):(e.top=it.top,e.height=it.height)),ut(),lt.current=(0,k.Z)((function(){ct(e)})),ut}),[it,ee,h]),(0,l.useEffect)((function(){Je()}),[b,q(it),q(Te),ee]),(0,l.useEffect)((function(){$e()}),[h]);var st,ft,dt,vt,mt=!!nt.length,pt="".concat(c,"-nav-wrap");return ee?h?(ft=re>0,st=re+Oe<Se):(st=re<0,ft=-re+Oe<Se):(dt=ie<0,vt=-ie+Oe<Se),l.createElement(R.Z,{onResize:$e},l.createElement("div",{ref:(0,P.x1)(t,L),role:"tablist",className:m()("".concat(c,"-nav"),s),style:f,onKeyDown:function(){Fe()}},l.createElement(F,{ref:B,position:"left",extra:y,prefixCls:c}),l.createElement("div",{className:m()(pt,(n={},(0,r.Z)(n,"".concat(pt,"-ping-left"),st),(0,r.Z)(n,"".concat(pt,"-ping-right"),ft),(0,r.Z)(n,"".concat(pt,"-ping-top"),dt),(0,r.Z)(n,"".concat(pt,"-ping-bottom"),vt),n)),ref:V},l.createElement(R.Z,{onResize:$e},l.createElement("div",{ref:Y,className:"".concat(c,"-nav-list"),style:{transform:"translate(".concat(re,"px, ").concat(ie,"px)"),transition:We?"none":void 0}},Qe,l.createElement(D,{ref:X,prefixCls:c,locale:Z,editable:g,style:(0,i.Z)((0,i.Z)({},0===Qe.length?void 0:Ue),{},{visibility:mt?"hidden":null})}),l.createElement("div",{className:m()("".concat(c,"-ink-bar"),(0,r.Z)({},"".concat(c,"-ink-bar-animated"),v.inkBar)),style:ot})))),l.createElement(z,(0,a.Z)({},e,{removeAriaLabel:null===Z||void 0===Z?void 0:Z.removeAriaLabel,ref:G,prefixCls:c,tabs:nt,className:!mt&&Le,tabMoving:!!We})),l.createElement(F,{ref:j,position:"right",extra:y,prefixCls:c})))}var G=l.forwardRef(Y),X=["renderTabBar"],J=["label","key"];function U(e){var t=e.renderTabBar,n=(0,h.Z)(e,X),r=(0,l.useContext)(E).tabs;return t?t((0,i.Z)((0,i.Z)({},n),{},{panes:r.map((function(e){var t=e.label,n=e.key,r=(0,h.Z)(e,J);return l.createElement(C,(0,a.Z)({tab:t,key:n,tabKey:n},r))}))}),G):l.createElement(G,n)}n(632);var Q=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],$=0;function ee(e,t){var n,o=e.id,c=e.prefixCls,u=void 0===c?"rc-tabs":c,s=e.className,f=e.items,d=e.direction,v=e.activeKey,Z=e.defaultActiveKey,C=e.editable,w=e.animated,N=e.tabPosition,k=void 0===N?"top":N,P=e.tabBarGutter,R=e.tabBarStyle,T=e.tabBarExtraContent,O=e.locale,S=e.moreIcon,I=e.moreTransitionName,M=e.destroyInactiveTabPane,A=e.renderTabBar,L=e.onChange,B=e.onTabClick,j=e.onTabScroll,D=e.getPopupContainer,V=e.popupClassName,z=(0,h.Z)(e,Q),K=l.useMemo((function(){return(f||[]).filter((function(e){return e&&"object"===(0,b.Z)(e)&&"key"in e}))}),[f]),W="rtl"===d,q=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,i.Z)({inkBar:!0},"object"===(0,b.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(w),F=(0,l.useState)(!1),_=(0,p.Z)(F,2),H=_[0],Y=_[1];(0,l.useEffect)((function(){Y((0,y.Z)())}),[]);var G=(0,g.Z)((function(){var e;return null===(e=K[0])||void 0===e?void 0:e.key}),{value:v,defaultValue:Z}),X=(0,p.Z)(G,2),J=X[0],ee=X[1],te=(0,l.useState)((function(){return K.findIndex((function(e){return e.key===J}))})),ne=(0,p.Z)(te,2),re=ne[0],ae=ne[1];(0,l.useEffect)((function(){var e,t=K.findIndex((function(e){return e.key===J}));-1===t&&(t=Math.max(0,Math.min(re,K.length-1)),ee(null===(e=K[t])||void 0===e?void 0:e.key));ae(t)}),[K.map((function(e){return e.key})).join("_"),J,re]);var oe=(0,g.Z)(null,{value:o}),ce=(0,p.Z)(oe,2),ie=ce[0],le=ce[1];(0,l.useEffect)((function(){o||(le("rc-tabs-".concat($)),$+=1)}),[]);var ue={id:ie,activeKey:J,animated:q,tabPosition:k,rtl:W,mobile:H},se=(0,i.Z)((0,i.Z)({},ue),{},{editable:C,locale:O,moreIcon:S,moreTransitionName:I,tabBarGutter:P,onTabClick:function(e,t){null===B||void 0===B||B(e,t);var n=e!==J;ee(e),n&&(null===L||void 0===L||L(e))},onTabScroll:j,extra:T,style:R,panes:null,getPopupContainer:D,popupClassName:V});return l.createElement(E.Provider,{value:{tabs:K,prefixCls:u}},l.createElement("div",(0,a.Z)({ref:t,id:o,className:m()(u,"".concat(u,"-").concat(k),(n={},(0,r.Z)(n,"".concat(u,"-mobile"),H),(0,r.Z)(n,"".concat(u,"-editable"),C),(0,r.Z)(n,"".concat(u,"-rtl"),W),n),s)},z),undefined,l.createElement(U,(0,a.Z)({},se,{renderTabBar:A})),l.createElement(x,(0,a.Z)({destroyInactiveTabPane:M},ue,{animated:q}))))}var te=l.forwardRef(ee),ne=n(1929),re=n(1815),ae=n(9464),oe={motionAppear:!1,motionEnter:!0,motionLeave:!0};var ce=n(5501),ie=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var le=function(){return null},ue=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function se(e){var t,n=e.type,i=e.className,u=e.size,s=e.onEdit,f=e.hideAdd,v=e.centered,p=e.addIcon,h=e.children,y=e.items,g=e.animated,Z=ue(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),E=Z.prefixCls,C=Z.moreIcon,w=void 0===C?l.createElement(c.Z,null):C,x=l.useContext(ne.E_),N=x.getPrefixCls,k=x.direction,P=x.getPopupContainer,R=N("tabs",E);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,r=t.event;null===s||void 0===s||s("add"===e?r:n,e)},removeIcon:l.createElement(o.Z,null),addIcon:p||l.createElement(d,null),showAdd:!0!==f});var T=N(),O=function(e,t){return e||function(e){return e.filter((function(e){return e}))}((0,ce.Z)(t).map((function(e){if(l.isValidElement(e)){var t=e.key,n=e.props||{},r=n.tab,o=ie(n,["tab"]);return(0,a.Z)((0,a.Z)({key:String(t)},o),{label:r})}return null})))}(y,h),S=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,a.Z)({inkBar:!0},"object"===(0,b.Z)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,a.Z)((0,a.Z)({},oe),{motionName:(0,ae.mL)(e,"switch")})),t}(R,g);return l.createElement(re.Z.Consumer,null,(function(e){var o,c=void 0!==u?u:e;return l.createElement(te,(0,a.Z)({direction:k,getPopupContainer:P,moreTransitionName:"".concat(T,"-slide-up")},Z,{items:O,className:m()((o={},(0,r.Z)(o,"".concat(R,"-").concat(c),c),(0,r.Z)(o,"".concat(R,"-card"),["card","editable-card"].includes(n)),(0,r.Z)(o,"".concat(R,"-editable-card"),"editable-card"===n),(0,r.Z)(o,"".concat(R,"-centered"),v),o),i),editable:t,moreIcon:w,prefixCls:R,animated:S}))}))}se.TabPane=le;var fe=se},3241:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(4942),a=n(1413),o=n(9439),c=n(4925),i=n(2791),l=n(2378),u=n(1694),s=n.n(u),f={adjustX:1,adjustY:1},d=[0,0],v={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:d},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:d},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:d}},m=n(1354),p=n(5314),b=n(3502),h=m.Z.ESC,y=m.Z.TAB;var g=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Z(e,t){var n=e.arrow,u=void 0!==n&&n,f=e.prefixCls,d=void 0===f?"rc-dropdown":f,m=e.transitionName,Z=e.animation,E=e.align,C=e.placement,w=void 0===C?"bottomLeft":C,x=e.placements,N=void 0===x?v:x,k=e.getPopupContainer,P=e.showAction,R=e.hideAction,T=e.overlayClassName,O=e.overlayStyle,S=e.visible,I=e.trigger,M=void 0===I?["hover"]:I,A=e.autoFocus,L=(0,c.Z)(e,g),B=i.useState(),j=(0,o.Z)(B,2),D=j[0],V=j[1],z="visible"in e?S:D,K=i.useRef(null);i.useImperativeHandle(t,(function(){return K.current})),function(e){var t=e.visible,n=e.setTriggerVisible,r=e.triggerRef,a=e.onVisibleChange,o=e.autoFocus,c=i.useRef(!1),l=function(){var e,o,c,i;t&&r.current&&(null===(e=r.current)||void 0===e||null===(o=e.triggerRef)||void 0===o||null===(c=o.current)||void 0===c||null===(i=c.focus)||void 0===i||i.call(c),n(!1),"function"===typeof a&&a(!1))},u=function(){var e,t,n,a,o=(0,b.tS)(null===(e=r.current)||void 0===e||null===(t=e.popupRef)||void 0===t||null===(n=t.current)||void 0===n||null===(a=n.getElement)||void 0===a?void 0:a.call(n))[0];return!!(null===o||void 0===o?void 0:o.focus)&&(o.focus(),c.current=!0,!0)},s=function(e){switch(e.keyCode){case h:l();break;case y:var t=!1;c.current||(t=u()),t?e.preventDefault():l()}};i.useEffect((function(){return t?(window.addEventListener("keydown",s),o&&(0,p.Z)(u,3),function(){window.removeEventListener("keydown",s),c.current=!1}):function(){c.current=!1}}),[t])}({visible:z,setTriggerVisible:V,triggerRef:K,onVisibleChange:e.onVisibleChange,autoFocus:A});var W=function(){var t=function(){var t=e.overlay;return"function"===typeof t?t():t}();return i.createElement(i.Fragment,null,u&&i.createElement("div",{className:"".concat(d,"-arrow")}),t)},q=R;return q||-1===M.indexOf("contextMenu")||(q=["click"]),i.createElement(l.Z,(0,a.Z)((0,a.Z)({builtinPlacements:N},L),{},{prefixCls:d,ref:K,popupClassName:s()(T,(0,r.Z)({},"".concat(d,"-show-arrow"),u)),popupStyle:O,action:M,showAction:P,hideAction:q||[],popupPlacement:w,popupAlign:E,popupTransitionName:m,popupAnimation:Z,popupVisible:z,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?W:W(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;V(t),"function"===typeof n&&n(t)},onPopupClick:function(t){var n=e.onOverlayClick;V(!1),n&&n(t)},getPopupContainer:k}),function(){var t=e.children,n=t.props?t.props:{},r=s()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(d,"-open")}());return z&&t?i.cloneElement(t,{className:r}):t}())}var E=i.forwardRef(Z)}}]);
//# sourceMappingURL=476.bd0d41ca.chunk.js.map