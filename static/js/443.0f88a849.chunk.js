(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[443],{3120:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var i=e(7083),r=e(7106),a=e(184),c=(0,a.jsx)(r.Z,{style:{fontSize:24}});function o(n){return(0,a.jsx)(i.Z,{size:"large",spinning:void 0!==n.isLoading&&n.isLoading,indicator:c})}},9256:function(n,t,e){"use strict";e.d(t,{F:function(){return u},ts:function(){return l},xu:function(){return s}});var i=e(6106),r=e(914),a=e(1333),c=e(3120),o=e(184);function l(n){return(0,o.jsxs)("div",{className:"my-box",children:[(0,o.jsxs)(i.Z,{gutter:12,children:[(0,o.jsx)(r.Z,{span:12,children:(0,o.jsx)(a.Z,{orientation:"left",style:{borderTopColor:"#000"},children:(0,o.jsx)("h2",{style:{fontWeight:"bold"},children:n.title})})}),(0,o.jsx)(r.Z,{span:12,style:{textAlign:"right",paddingTop:"15px"},children:void 0!==n.buttonList?n.buttonList():""})]}),(0,o.jsx)(c.Z,{isLoading:n.isLoading}),(0,o.jsx)("div",{className:"my-box-children",style:{opacity:!0===n.isLoading?.2:1},children:n.children})]})}function s(n){return(0,o.jsxs)("div",{className:"".concat(!1!==n.showBox?"box":"box-no-border"," ").concat(n.className),style:n.style,children:[(0,o.jsx)(c.Z,{isLoading:n.isLoading}),(0,o.jsx)("div",{style:{display:!0===n.isLoading?"none":""},children:n.children})]})}function u(n){return(0,o.jsx)("div",{className:"box ".concat(n.className),children:(0,o.jsx)("div",{children:n.children})})}},443:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return a}});var i=e(9256),r=e(184);function a(){return(0,r.jsx)(i.ts,{title:"Trang ch\u1ee7",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Th\u1ed1ng k\xea s\u1ed1 ti\u1ec1n MoneyManage"}),(0,r.jsx)("li",{children:"Th\u1ed1ng k\xea gi\xe1 CCQ g\u1ea7n nh\u1ea5t"}),(0,r.jsx)("li",{children:"C\xe1c task c\u1ea7n l\xe0m"}),(0,r.jsx)("li",{children:"C\xe1c task s\u1eafp h\u1ebft h\u1ea1n/ tr\u1ec5 h\u1ea1n"}),(0,r.jsxs)("li",{children:["Version m\u1edbi nh\u1ea5t:",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Frontend: "}),(0,r.jsx)("li",{children:"Backend: "}),(0,r.jsx)("li",{children:"Database: "})]})]})]})})}},1333:function(n,t,e){"use strict";var i=e(7462),r=e(4942),a=e(1694),c=e.n(a),o=e(2791),l=e(1929),s=function(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(n);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(e[i[r]]=n[i[r]])}return e};t.Z=function(n){var t,e=o.useContext(l.E_),a=e.getPrefixCls,u=e.direction,d=n.prefixCls,f=n.type,p=void 0===f?"horizontal":f,m=n.orientation,v=void 0===m?"center":m,h=n.orientationMargin,x=n.className,y=n.children,g=n.dashed,b=n.plain,j=s(n,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),N=a("divider",d),Z=v.length>0?"-".concat(v):v,C=!!y,E="left"===v&&null!=h,O="right"===v&&null!=h,w=c()(N,"".concat(N,"-").concat(p),(t={},(0,r.Z)(t,"".concat(N,"-with-text"),C),(0,r.Z)(t,"".concat(N,"-with-text").concat(Z),C),(0,r.Z)(t,"".concat(N,"-dashed"),!!g),(0,r.Z)(t,"".concat(N,"-plain"),!!b),(0,r.Z)(t,"".concat(N,"-rtl"),"rtl"===u),(0,r.Z)(t,"".concat(N,"-no-default-orientation-margin-left"),E),(0,r.Z)(t,"".concat(N,"-no-default-orientation-margin-right"),O),t),x),T=(0,i.Z)((0,i.Z)({},E&&{marginLeft:h}),O&&{marginRight:h});return o.createElement("div",(0,i.Z)({className:w},j,{role:"separator"}),y&&"vertical"!==p&&o.createElement("span",{className:"".concat(N,"-inner-text"),style:T},y))}},7083:function(n,t,e){"use strict";var i=e(7462),r=e(4942),a=e(9439),c=e(1694),o=e.n(c),l=e(8573),s=e.n(l),u=e(1818),d=e(2791),f=e(1929),p=e(1113),m=e(9393),v=function(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(n);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(e[i[r]]=n[i[r]])}return e},h=((0,m.b)("small","default","large"),null);var x=function(n){var t=n.spinPrefixCls,e=n.spinning,c=void 0===e||e,l=n.delay,m=n.className,x=n.size,y=void 0===x?"default":x,g=n.tip,b=n.wrapperClassName,j=n.style,N=n.children,Z=v(n,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),C=d.useState((function(){return c&&!function(n,t){return!!n&&!!t&&!isNaN(Number(t))}(c,l)})),E=(0,a.Z)(C,2),O=E[0],w=E[1];d.useEffect((function(){var n=s()((function(){w(c)}),l);return n(),function(){var t;null===(t=null===n||void 0===n?void 0:n.cancel)||void 0===t||t.call(n)}}),[l,c]);var T=function(e){var a,c=e.direction,l=o()(t,(a={},(0,r.Z)(a,"".concat(t,"-sm"),"small"===y),(0,r.Z)(a,"".concat(t,"-lg"),"large"===y),(0,r.Z)(a,"".concat(t,"-spinning"),O),(0,r.Z)(a,"".concat(t,"-show-text"),!!g),(0,r.Z)(a,"".concat(t,"-rtl"),"rtl"===c),a),m),s=(0,u.Z)(Z,["indicator","prefixCls"]),f=d.createElement("div",(0,i.Z)({},s,{style:j,className:l,"aria-live":"polite","aria-busy":O}),function(n,t){var e=t.indicator,i="".concat(n,"-dot");return null===e?null:(0,p.l$)(e)?(0,p.Tm)(e,{className:o()(e.props.className,i)}):(0,p.l$)(h)?(0,p.Tm)(h,{className:o()(h.props.className,i)}):d.createElement("span",{className:o()(i,"".concat(n,"-dot-spin"))},d.createElement("i",{className:"".concat(n,"-dot-item")}),d.createElement("i",{className:"".concat(n,"-dot-item")}),d.createElement("i",{className:"".concat(n,"-dot-item")}),d.createElement("i",{className:"".concat(n,"-dot-item")}))}(t,n),g?d.createElement("div",{className:"".concat(t,"-text")},g):null);if("undefined"!==typeof N){var v=o()("".concat(t,"-container"),(0,r.Z)({},"".concat(t,"-blur"),O));return d.createElement("div",(0,i.Z)({},s,{className:o()("".concat(t,"-nested-loading"),b)}),O&&d.createElement("div",{key:"loading"},f),d.createElement("div",{className:v,key:"container"},N))}return f};return d.createElement(f.C,null,T)},y=function(n){var t=n.prefixCls,e=(0,d.useContext(f.E_).getPrefixCls)("spin",t),r=(0,i.Z)((0,i.Z)({},n),{spinPrefixCls:e});return d.createElement(x,(0,i.Z)({},r))};y.setDefaultIndicator=function(n){h=n},t.Z=y},821:function(n,t,e){var i=e(6050),r=/^\s+/;n.exports=function(n){return n?n.slice(0,i(n)+1).replace(r,""):n}},6050:function(n){var t=/\s/;n.exports=function(n){for(var e=n.length;e--&&t.test(n.charAt(e)););return e}},8573:function(n,t,e){var i=e(8092),r=e(72),a=e(2582),c=Math.max,o=Math.min;n.exports=function(n,t,e){var l,s,u,d,f,p,m=0,v=!1,h=!1,x=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(t){var e=l,i=s;return l=s=void 0,m=t,d=n.apply(i,e)}function g(n){return m=n,f=setTimeout(j,t),v?y(n):d}function b(n){var e=n-p;return void 0===p||e>=t||e<0||h&&n-m>=u}function j(){var n=r();if(b(n))return N(n);f=setTimeout(j,function(n){var e=t-(n-p);return h?o(e,u-(n-m)):e}(n))}function N(n){return f=void 0,x&&l?y(n):(l=s=void 0,d)}function Z(){var n=r(),e=b(n);if(l=arguments,s=this,p=n,e){if(void 0===f)return g(p);if(h)return clearTimeout(f),f=setTimeout(j,t),y(p)}return void 0===f&&(f=setTimeout(j,t)),d}return t=a(t)||0,i(e)&&(v=!!e.leading,u=(h="maxWait"in e)?c(a(e.maxWait)||0,t):u,x="trailing"in e?!!e.trailing:x),Z.cancel=function(){void 0!==f&&clearTimeout(f),m=0,l=p=s=f=void 0},Z.flush=function(){return void 0===f?d:N(r())},Z}},152:function(n,t,e){var i=e(9066),r=e(3141);n.exports=function(n){return"symbol"==typeof n||r(n)&&"[object Symbol]"==i(n)}},72:function(n,t,e){var i=e(7009);n.exports=function(){return i.Date.now()}},2582:function(n,t,e){var i=e(821),r=e(8092),a=e(152),c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(a(n))return NaN;if(r(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=r(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=i(n);var e=o.test(n);return e||l.test(n)?s(n.slice(2),e?2:8):c.test(n)?NaN:+n}}}]);
//# sourceMappingURL=443.0f88a849.chunk.js.map