(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[443],{3120:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var i=t(7083),r=t(7106),a=t(184),s=(0,a.jsx)(r.Z,{style:{fontSize:24}});function c(n){return(0,a.jsx)(i.Z,{size:"large",spinning:void 0!==n.isLoading&&n.isLoading,indicator:s})}},9256:function(n,e,t){"use strict";t.d(e,{F:function(){return o},ts:function(){return s},xu:function(){return c}});var i=t(3120),r=t(4104),a=t(184);function s(n){return(0,a.jsxs)("div",{className:"my-box",children:[(0,a.jsx)(r.Z,{value:n.title}),(0,a.jsx)(i.Z,{isLoading:n.isLoading}),(0,a.jsx)("div",{className:"my-box-children",style:{opacity:!0===n.isLoading?.2:1},children:n.children})]})}function c(n){return(0,a.jsxs)("div",{className:"".concat(!1!==n.showBox?"box":"box-no-border"," ").concat(n.className),style:n.style,children:[(0,a.jsx)(i.Z,{isLoading:n.isLoading}),(0,a.jsx)("div",{style:{display:!0===n.isLoading?"none":""},children:n.children})]})}function o(n){return(0,a.jsx)("div",{className:"box ".concat(n.className),children:(0,a.jsx)("div",{children:n.children})})}},4104:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var i=t(9256),r=t(184);function a(n){return(0,r.jsx)(i.F,{className:"box-title",children:(0,r.jsx)("h3",{children:n.value})})}},443:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var i=t(9256),r=t(184);function a(){return(0,r.jsx)(i.ts,{title:"Trang ch\u1ee7",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Th\u1ed1ng k\xea s\u1ed1 ti\u1ec1n MoneyManage"}),(0,r.jsx)("li",{children:"Th\u1ed1ng k\xea gi\xe1 CCQ g\u1ea7n nh\u1ea5t"}),(0,r.jsx)("li",{children:"C\xe1c task c\u1ea7n l\xe0m"}),(0,r.jsx)("li",{children:"C\xe1c task s\u1eafp h\u1ebft h\u1ea1n/ tr\u1ec5 h\u1ea1n"}),(0,r.jsxs)("li",{children:["Version m\u1edbi nh\u1ea5t:",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Frontend: "}),(0,r.jsx)("li",{children:"Backend: "}),(0,r.jsx)("li",{children:"Database: "})]})]})]})})}},7083:function(n,e,t){"use strict";var i=t(7462),r=t(4942),a=t(5671),s=t(3144),c=t(136),o=t(7277),l=t(1694),u=t.n(l),p=t(8573),d=t.n(p),f=t(1818),m=t(2791),v=t(1929),h=t(1113),x=t(5072),g=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]])}return t},y=((0,x.b)("small","default","large"),null);var N=function(n){(0,c.Z)(t,n);var e=(0,o.Z)(t);function t(n){var s;(0,a.Z)(this,t),(s=e.call(this,n)).debouncifyUpdateSpinning=function(n){var e=(n||s.props).delay;e&&(s.cancelExistingSpin(),s.updateSpinning=d()(s.originalUpdateSpinning,e))},s.updateSpinning=function(){var n=s.props.spinning;s.state.spinning!==n&&s.setState({spinning:n})},s.renderSpin=function(n){var e,t=n.direction,a=s.props,c=a.spinPrefixCls,o=a.className,l=a.size,p=a.tip,d=a.wrapperClassName,v=a.style,x=g(a,["spinPrefixCls","className","size","tip","wrapperClassName","style"]),N=s.state.spinning,b=u()(c,(e={},(0,r.Z)(e,"".concat(c,"-sm"),"small"===l),(0,r.Z)(e,"".concat(c,"-lg"),"large"===l),(0,r.Z)(e,"".concat(c,"-spinning"),N),(0,r.Z)(e,"".concat(c,"-show-text"),!!p),(0,r.Z)(e,"".concat(c,"-rtl"),"rtl"===t),e),o),j=(0,f.Z)(x,["spinning","delay","indicator","prefixCls"]),Z=m.createElement("div",(0,i.Z)({},j,{style:v,className:b,"aria-live":"polite","aria-busy":N}),function(n,e){var t=e.indicator,i="".concat(n,"-dot");return null===t?null:(0,h.l$)(t)?(0,h.Tm)(t,{className:u()(t.props.className,i)}):(0,h.l$)(y)?(0,h.Tm)(y,{className:u()(y.props.className,i)}):m.createElement("span",{className:u()(i,"".concat(n,"-dot-spin"))},m.createElement("i",{className:"".concat(n,"-dot-item")}),m.createElement("i",{className:"".concat(n,"-dot-item")}),m.createElement("i",{className:"".concat(n,"-dot-item")}),m.createElement("i",{className:"".concat(n,"-dot-item")}))}(c,s.props),p?m.createElement("div",{className:"".concat(c,"-text")},p):null);if(s.isNestedPattern()){var S=u()("".concat(c,"-container"),(0,r.Z)({},"".concat(c,"-blur"),N));return m.createElement("div",(0,i.Z)({},j,{className:u()("".concat(c,"-nested-loading"),d)}),N&&m.createElement("div",{key:"loading"},Z),m.createElement("div",{className:S,key:"container"},s.props.children))}return Z};var c=n.spinning,o=function(n,e){return!!n&&!!e&&!isNaN(Number(e))}(c,n.delay);return s.state={spinning:c&&!o},s.originalUpdateSpinning=s.updateSpinning,s.debouncifyUpdateSpinning(n),s}return(0,s.Z)(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return m.createElement(v.C,null,this.renderSpin)}}]),t}(m.Component);N.defaultProps={spinning:!0,size:"default",wrapperClassName:""};var b=function(n){var e=n.prefixCls,t=(0,m.useContext(v.E_).getPrefixCls)("spin",e),r=(0,i.Z)((0,i.Z)({},n),{spinPrefixCls:t});return m.createElement(N,(0,i.Z)({},r))};b.setDefaultIndicator=function(n){y=n},e.Z=b},821:function(n,e,t){var i=t(6050),r=/^\s+/;n.exports=function(n){return n?n.slice(0,i(n)+1).replace(r,""):n}},6050:function(n){var e=/\s/;n.exports=function(n){for(var t=n.length;t--&&e.test(n.charAt(t)););return t}},8573:function(n,e,t){var i=t(8092),r=t(72),a=t(2582),s=Math.max,c=Math.min;n.exports=function(n,e,t){var o,l,u,p,d,f,m=0,v=!1,h=!1,x=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(e){var t=o,i=l;return o=l=void 0,m=e,p=n.apply(i,t)}function y(n){return m=n,d=setTimeout(b,e),v?g(n):p}function N(n){var t=n-f;return void 0===f||t>=e||t<0||h&&n-m>=u}function b(){var n=r();if(N(n))return j(n);d=setTimeout(b,function(n){var t=e-(n-f);return h?c(t,u-(n-m)):t}(n))}function j(n){return d=void 0,x&&o?g(n):(o=l=void 0,p)}function Z(){var n=r(),t=N(n);if(o=arguments,l=this,f=n,t){if(void 0===d)return y(f);if(h)return clearTimeout(d),d=setTimeout(b,e),g(f)}return void 0===d&&(d=setTimeout(b,e)),p}return e=a(e)||0,i(t)&&(v=!!t.leading,u=(h="maxWait"in t)?s(a(t.maxWait)||0,e):u,x="trailing"in t?!!t.trailing:x),Z.cancel=function(){void 0!==d&&clearTimeout(d),m=0,o=f=l=d=void 0},Z.flush=function(){return void 0===d?p:j(r())},Z}},152:function(n,e,t){var i=t(9066),r=t(3141);n.exports=function(n){return"symbol"==typeof n||r(n)&&"[object Symbol]"==i(n)}},72:function(n,e,t){var i=t(7009);n.exports=function(){return i.Date.now()}},2582:function(n,e,t){var i=t(821),r=t(8092),a=t(152),s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,o=/^0o[0-7]+$/i,l=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(a(n))return NaN;if(r(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=r(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=i(n);var t=c.test(n);return t||o.test(n)?l(n.slice(2),t?2:8):s.test(n)?NaN:+n}}}]);
//# sourceMappingURL=443.5747fa31.chunk.js.map