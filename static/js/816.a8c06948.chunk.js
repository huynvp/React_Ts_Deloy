(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[816],{3120:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var i=e(7083),r=e(7106),a=e(184),s=(0,a.jsx)(r.Z,{style:{fontSize:24}});function c(n){return(0,a.jsx)(i.Z,{size:"large",spinning:void 0!==n.isLoading&&n.isLoading,indicator:s})}},9256:function(n,t,e){"use strict";e.d(t,{t:function(){return s},x:function(){return c}});var i=e(3120),r=e(4104),a=e(184);function s(n){return(0,a.jsxs)("div",{className:"my-box",children:[(0,a.jsx)(r.Z,{value:n.title}),(0,a.jsx)(i.Z,{isLoading:n.isLoading}),(0,a.jsx)("div",{style:{opacity:!0===n.isLoading?.2:1},children:n.children})]})}function c(n){return(0,a.jsxs)("div",{className:"box",children:[(0,a.jsx)(r.Z,{value:n.title}),(0,a.jsx)(i.Z,{isLoading:n.isLoading}),(0,a.jsx)("div",{style:{display:!0===n.isLoading?"none":""},children:n.children})]})}},2684:function(n,t,e){"use strict";e.d(t,{O:function(){return a}});var i=e(7309),r=(e(1708),e(184));function a(n){var t=void 0!==n.htmlType?n.htmlType:"button";return(0,r.jsx)(i.Z,{disabled:n.disabled,loading:n.isLoading,htmlType:t,className:"btn_".concat(n.type," ").concat(n.className),onClick:function(){void 0!==n.onClick&&n.onClick()},children:n.value})}},4104:function(n,t,e){"use strict";e.d(t,{Z:function(){return r}});var i=e(184);function r(n){return(0,i.jsx)("h3",{children:n.value})}},9816:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return d}});var i=e(9256),r=e(6106),a=e(914),s=e(3504),c=e(2684),o=e(184);function l(){return(0,o.jsxs)("div",{children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(a.Z,{span:16,children:(0,o.jsx)("h4",{children:"Th\u1ed1ng k\xea d\u1ef1 \xe1n (Bao nhi\xeau d\u1ef1 \xe1n \u0111ang m\u1edf, bao nhi\xeau c\xe1i \u0111\xe3 \u0111\xf3ng, ....)"})}),(0,o.jsx)(a.Z,{span:8,style:{textAlign:"right"},children:(0,o.jsx)(s.rU,{to:"/tools/tasks/projects",children:(0,o.jsx)(c.O,{value:"Qu\u1ea3n l\xfd d\u1ef1 \xe1n"})})})]}),"123456789"]})}function u(){return(0,o.jsxs)("div",{children:[(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(a.Z,{span:16,children:(0,o.jsx)("h4",{children:"Th\u1ed1ng k\xea task (2 v\xf9ng V\xf9ng 1: C\xe1c task s\u1eafp h\u1ebft h\u1ea1n, c\xe1c task qu\xe1n h\u1ea1n; V\xf9ng 2: C\xe1c task \u0111ang m\u1edf, c\xe1c task \u0111\xe3 \u0111\xf3ng)"})}),(0,o.jsx)(a.Z,{span:8,style:{textAlign:"right"},children:(0,o.jsx)(c.O,{value:"Qu\u1ea3n l\xfd c\xf4ng vi\u1ec7c"})})]}),"123456789"]})}function d(){return(0,o.jsxs)(i.t,{title:"Tool qu\u1ea3n l\xfd c\xf4ng vi\u1ec7c",children:[(0,o.jsx)("div",{className:"box",children:(0,o.jsx)(u,{})}),(0,o.jsx)("div",{className:"box",children:(0,o.jsx)(l,{})}),(0,o.jsx)("div",{className:"box",children:(0,o.jsx)("h3",{children:"Th\u1ed1ng k\xea hi\u1ec7u n\u0103ng test script (Bao nhi\xeau script pass, bao nhi\xeau script \u0111ang pending)"})}),(0,o.jsx)("div",{className:"box",children:(0,o.jsx)("h3",{children:"Danh s\xe1ch c\xe1c th\xf4ng b\xe1o task"})})]})}},7083:function(n,t,e){"use strict";var i=e(7462),r=e(4942),a=e(5671),s=e(3144),c=e(9340),o=e(1129),l=e(1694),u=e.n(l),d=e(8573),p=e.n(d),f=e(1818),v=e(2791),m=e(1929),h=e(1113),g=e(5072),x=function(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(n);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(e[i[r]]=n[i[r]])}return e},y=((0,g.b)("small","default","large"),null);var j=function(n){(0,c.Z)(e,n);var t=(0,o.Z)(e);function e(n){var s;(0,a.Z)(this,e),(s=t.call(this,n)).debouncifyUpdateSpinning=function(n){var t=(n||s.props).delay;t&&(s.cancelExistingSpin(),s.updateSpinning=p()(s.originalUpdateSpinning,t))},s.updateSpinning=function(){var n=s.props.spinning;s.state.spinning!==n&&s.setState({spinning:n})},s.renderSpin=function(n){var t,e=n.direction,a=s.props,c=a.spinPrefixCls,o=a.className,l=a.size,d=a.tip,p=a.wrapperClassName,m=a.style,g=x(a,["spinPrefixCls","className","size","tip","wrapperClassName","style"]),j=s.state.spinning,b=u()(c,(t={},(0,r.Z)(t,"".concat(c,"-sm"),"small"===l),(0,r.Z)(t,"".concat(c,"-lg"),"large"===l),(0,r.Z)(t,"".concat(c,"-spinning"),j),(0,r.Z)(t,"".concat(c,"-show-text"),!!d),(0,r.Z)(t,"".concat(c,"-rtl"),"rtl"===e),t),o),N=(0,f.Z)(g,["spinning","delay","indicator","prefixCls"]),Z=v.createElement("div",(0,i.Z)({},N,{style:m,className:b,"aria-live":"polite","aria-busy":j}),function(n,t){var e=t.indicator,i="".concat(n,"-dot");return null===e?null:(0,h.l$)(e)?(0,h.Tm)(e,{className:u()(e.props.className,i)}):(0,h.l$)(y)?(0,h.Tm)(y,{className:u()(y.props.className,i)}):v.createElement("span",{className:u()(i,"".concat(n,"-dot-spin"))},v.createElement("i",{className:"".concat(n,"-dot-item")}),v.createElement("i",{className:"".concat(n,"-dot-item")}),v.createElement("i",{className:"".concat(n,"-dot-item")}),v.createElement("i",{className:"".concat(n,"-dot-item")}))}(c,s.props),d?v.createElement("div",{className:"".concat(c,"-text")},d):null);if(s.isNestedPattern()){var k=u()("".concat(c,"-container"),(0,r.Z)({},"".concat(c,"-blur"),j));return v.createElement("div",(0,i.Z)({},N,{className:u()("".concat(c,"-nested-loading"),p)}),j&&v.createElement("div",{key:"loading"},Z),v.createElement("div",{className:k,key:"container"},s.props.children))}return Z};var c=n.spinning,o=function(n,t){return!!n&&!!t&&!isNaN(Number(t))}(c,n.delay);return s.state={spinning:c&&!o},s.originalUpdateSpinning=s.updateSpinning,s.debouncifyUpdateSpinning(n),s}return(0,s.Z)(e,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var n=this.updateSpinning;n&&n.cancel&&n.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return v.createElement(m.C,null,this.renderSpin)}}]),e}(v.Component);j.defaultProps={spinning:!0,size:"default",wrapperClassName:""};var b=function(n){var t=n.prefixCls,e=(0,v.useContext(m.E_).getPrefixCls)("spin",t),r=(0,i.Z)((0,i.Z)({},n),{spinPrefixCls:e});return v.createElement(j,(0,i.Z)({},r))};b.setDefaultIndicator=function(n){y=n},t.Z=b},821:function(n,t,e){var i=e(6050),r=/^\s+/;n.exports=function(n){return n?n.slice(0,i(n)+1).replace(r,""):n}},6050:function(n){var t=/\s/;n.exports=function(n){for(var e=n.length;e--&&t.test(n.charAt(e)););return e}},8573:function(n,t,e){var i=e(8092),r=e(72),a=e(2582),s=Math.max,c=Math.min;n.exports=function(n,t,e){var o,l,u,d,p,f,v=0,m=!1,h=!1,g=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function x(t){var e=o,i=l;return o=l=void 0,v=t,d=n.apply(i,e)}function y(n){return v=n,p=setTimeout(b,t),m?x(n):d}function j(n){var e=n-f;return void 0===f||e>=t||e<0||h&&n-v>=u}function b(){var n=r();if(j(n))return N(n);p=setTimeout(b,function(n){var e=t-(n-f);return h?c(e,u-(n-v)):e}(n))}function N(n){return p=void 0,g&&o?x(n):(o=l=void 0,d)}function Z(){var n=r(),e=j(n);if(o=arguments,l=this,f=n,e){if(void 0===p)return y(f);if(h)return clearTimeout(p),p=setTimeout(b,t),x(f)}return void 0===p&&(p=setTimeout(b,t)),d}return t=a(t)||0,i(e)&&(m=!!e.leading,u=(h="maxWait"in e)?s(a(e.maxWait)||0,t):u,g="trailing"in e?!!e.trailing:g),Z.cancel=function(){void 0!==p&&clearTimeout(p),v=0,o=f=l=p=void 0},Z.flush=function(){return void 0===p?d:N(r())},Z}},152:function(n,t,e){var i=e(9066),r=e(3141);n.exports=function(n){return"symbol"==typeof n||r(n)&&"[object Symbol]"==i(n)}},72:function(n,t,e){var i=e(7009);n.exports=function(){return i.Date.now()}},2582:function(n,t,e){var i=e(821),r=e(8092),a=e(152),s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,o=/^0o[0-7]+$/i,l=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(a(n))return NaN;if(r(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=r(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=i(n);var e=c.test(n);return e||o.test(n)?l(n.slice(2),e?2:8):s.test(n)?NaN:+n}},1708:function(){}}]);
//# sourceMappingURL=816.a8c06948.chunk.js.map