(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[278],{3120:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(7083),a=t(7106),r=t(184),o=(0,r.jsx)(a.Z,{style:{fontSize:24}});function c(e){return(0,r.jsx)(i.Z,{size:"large",spinning:void 0!==e.isLoading&&e.isLoading,indicator:o})}},9256:function(e,n,t){"use strict";t.d(n,{t:function(){return o}});var i=t(3120),a=t(4104),r=t(184);function o(e){return(0,r.jsxs)("div",{className:"my-box",children:[(0,r.jsx)(a.Z,{value:e.title}),(0,r.jsx)(i.Z,{isLoading:e.isLoading}),(0,r.jsx)("div",{style:{display:!0===e.isLoading?"none":""},children:e.children})]})}},2684:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var i=t(7309),a=(t(1708),t(184));function r(e){var n=void 0!==e.htmlType?e.htmlType:"button";return(0,a.jsx)(i.Z,{disabled:e.disabled,loading:e.isLoading,htmlType:n,className:"btn_"+e.type,onClick:function(){void 0!==e.onClick&&e.onClick()},children:e.value})}},4104:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var i=t(184);function a(e){return(0,i.jsx)("h3",{children:e.value})}},7278:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var i=t(9439),a=t(6435),r=t(2791),o=t(3504),c=t(2496),u=t(9256),s=t(2684),l=t(184);function f(){var e=(0,r.useState)(!1),n=(0,i.Z)(e,2),t=n[0],f=n[1],d=(0,r.useState)([]),p=(0,i.Z)(d,2),v=p[0],m=p[1],g=(0,r.useState)(""),y=(0,i.Z)(g,2),k=y[0],T=y[1],h=(0,r.useCallback)((function(){f(!0),c.Cp.GetList((function(e){var n=e.data.data.map((function(e,n){return{label:e,value:e,key:n}}));m(n)}),void 0,(function(){f(!1)}))}),[]);return(0,r.useEffect)((function(){h()}),[h]),(0,l.jsxs)(u.t,{title:"Log h\u1ec7 th\u1ed1ng",isLoading:t,children:[(0,l.jsx)(a.Z,{onChange:function(e){f(!0),c.Cp.GetDetail(e,(function(e){T(e.data.data)}),void 0,(function(){f(!1)}))},options:v}),(0,l.jsxs)(o.rU,{to:"/admin/logAction",children:[" ",(0,l.jsx)(s.O,{value:"Log thao t\xe1c ng\u01b0\u1eddi d\xf9ng"})]}),(0,l.jsx)("div",{children:(0,l.jsx)("pre",{className:"terminal",children:k})})]})}},2496:function(e,n,t){"use strict";t.d(n,{Cp:function(){return s},KH:function(){return l},PH:function(){return o},eV:function(){return c},hl:function(){return f},rG:function(){return u}});var i=t(5671),a=t(3144),r=t(1285),o=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e,n,t,i){var a="mails/templates?".concat(e.generateQueryString());return r.T.Get(a,n,t,i)}},{key:"GetDetail",value:function(e,n,t,i){var a="mails/templates/".concat(e);return r.T.Get(a,n,t,i)}},{key:"Detail",value:function(e,n,t,i){var a="mails/templates/".concat(e);return r.T.Get(a,n,t,i)}},{key:"Add",value:function(e,n,t,i){return r.T.Post("mails/templates",e,n,t,i)}},{key:"Edit",value:function(e,n,t,i,a){var o="mails/templates/".concat(e);return r.T.Put(o,n,t,i,a)}},{key:"Delete",value:function(e,n,t,i,a){var o="mails/templates/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.T.Delete(o,t,i,a)}}]),e}(),c=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e,n,t,i){var a="mails/apps?".concat(e.generateQueryString());return r.T.Get(a,n,t,i)}},{key:"GetDetail",value:function(e,n,t,i){var a="mails/apps/".concat(e);return r.T.Get(a,n,t,i)}},{key:"Add",value:function(e,n,t,i){return r.T.Post("mails/apps",e,n,t,i)}},{key:"Edit",value:function(e,n,t,i,a){var o="mails/apps/".concat(e);return r.T.Put(o,n,t,i,a)}},{key:"Delete",value:function(e,n,t,i,a){var o="mails/apps/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.T.Delete(o,t,i,a)}},{key:"SearchTemplate",value:function(e,n,t,i,a){var o="mails/templates/searchName?query=".concat(e,"&appKey=").concat(n);return r.T.Get(o,t,i,a)}},{key:"AssignTemplates",value:function(e,n,t,i){return r.T.Post("mails/assignTemplates",e,n,t,i)}},{key:"RemoveAssignTemplates",value:function(e,n,t,i){var a="mails/removeAssignTemplates?id=".concat(e);return r.T.Delete(a,n,t,i)}}]),e}(),u=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e,n,t,i){var a="storedManage?".concat(e.generateQueryString());return r.T.Get(a,n,t,i)}},{key:"GetDetail",value:function(e,n,t,i){var a="storedManage/".concat(e);return r.T.Get(a,n,t,i)}},{key:"Add",value:function(e,n,t,i){return r.T.Post("storedManage",e,n,t,i)}},{key:"Edit",value:function(e,n,t,i,a){var o="storedManage/".concat(e);return r.T.Put(o,n,t,i,a)}},{key:"Delete",value:function(e,n,t,i,a){var o="storedManage/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.T.Delete(o,t,i,a)}},{key:"SearchName",value:function(e,n,t,i){var a="storedManage/queryStored?query=".concat(e);return r.T.Get(a,n,t,i)}},{key:"GetLinkStored",value:function(e,n,t,i,a){var o;return o=void 0!==e?"storedManage/".concat(e,"/linkStored"):"storedManage/linkStored?".concat(null===n||void 0===n?void 0:n.generateQueryString()),r.T.Get(o,t,i,a)}},{key:"GetDetailLinkStored",value:function(e,n,t,i){var a="storedManage/linkStored/".concat(e);return r.T.Get(a,n,t,i)}},{key:"AddLinkStored",value:function(e,n,t,i){return r.T.Post("storedManage/linkStored",e,n,t,i)}},{key:"EditLinkStored",value:function(e,n,t,i,a){var o="storedManage/linkStored/".concat(e);return r.T.Put(o,n,t,i,a)}},{key:"DeleteLinkStored",value:function(e,n,t,i,a){var o="storedManage/linkStored/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.T.Delete(o,t,i,a)}}]),e}(),s=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e,n,t){return r.T.Get("loggingCli",e,n,t)}},{key:"GetDetail",value:function(e,n,t,i){var a="loggingCli/".concat(e);return r.T.Get(a,n,t,i)}},{key:"GetListLogAction",value:function(e,n,t,i){var a="loggingCli/logActions?".concat(e);return r.T.Get(a,n,t,i)}},{key:"DeleteLogAction",value:function(e,n,t,i){var a="loggingCli/logActions?".concat(e);return r.T.Delete(a,n,t,i)}},{key:"GetChartData",value:function(e,n,t){return r.T.Get("loggingCli/logActions/statistic",e,n,t)}}]),e}(),l=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e,n,t,i){var a="logVersions?".concat(e.generateQueryString());return r.T.Get(a,n,t,i)}},{key:"GetDetail",value:function(e,n,t,i){var a="logVersions/".concat(e);return r.T.Get(a,n,t,i)}},{key:"Add",value:function(e,n,t,i){return r.T.Post("logVersions",e,n,t,i)}},{key:"Edit",value:function(e,n,t,i,a){var o="logVersions/".concat(e);return r.T.Put(o,n,t,i,a)}},{key:"Delete",value:function(e,n,t,i,a){var o="logVersions/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.T.Delete(o,t,i,a)}}]),e}(),f=function(){function e(){(0,i.Z)(this,e)}return(0,a.Z)(e,null,[{key:"GetList",value:function(e,n,t,i,a,o){var c="admin/menus?pageSize=".concat(n,"&pageNumber=").concat(e,"&orderBy=").concat(t.genQueryOrderBy(),"&typeOrder=").concat(t.esc?"asc":"desc");return r.T.Get(c,i,a,o)}},{key:"GetDetail",value:function(e,n,t,i){var a="admin/menus/".concat(e);return r.T.Get(a,n,t,i)}},{key:"Add",value:function(e,n,t,i){return r.T.Post("admin/menus",e,n,t,i)}},{key:"Edit",value:function(e,n,t,i,a){var o="admin/menus/".concat(e);return r.T.Put(o,n,t,i,a)}},{key:"Delete",value:function(e,n,t,i,a){var o="admin/menus/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.T.Delete(o,t,i,a)}},{key:"Query",value:function(e,n,t,i){var a="admin/menus/query?data=".concat(e);return r.T.Get(a,n,t,i)}}]),e}()},7083:function(e,n,t){"use strict";var i=t(7462),a=t(4942),r=t(5671),o=t(3144),c=t(9340),u=t(1129),s=t(1694),l=t.n(s),f=t(8573),d=t.n(f),p=t(1818),v=t(2791),m=t(1929),g=t(1113),y=t(5072),k=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t},T=((0,y.b)("small","default","large"),null);var h=function(e){(0,c.Z)(t,e);var n=(0,u.Z)(t);function t(e){var o;(0,r.Z)(this,t),(o=n.call(this,e)).debouncifyUpdateSpinning=function(e){var n=(e||o.props).delay;n&&(o.cancelExistingSpin(),o.updateSpinning=d()(o.originalUpdateSpinning,n))},o.updateSpinning=function(){var e=o.props.spinning;o.state.spinning!==e&&o.setState({spinning:e})},o.renderSpin=function(e){var n,t=e.direction,r=o.props,c=r.spinPrefixCls,u=r.className,s=r.size,f=r.tip,d=r.wrapperClassName,m=r.style,y=k(r,["spinPrefixCls","className","size","tip","wrapperClassName","style"]),h=o.state.spinning,S=l()(c,(n={},(0,a.Z)(n,"".concat(c,"-sm"),"small"===s),(0,a.Z)(n,"".concat(c,"-lg"),"large"===s),(0,a.Z)(n,"".concat(c,"-spinning"),h),(0,a.Z)(n,"".concat(c,"-show-text"),!!f),(0,a.Z)(n,"".concat(c,"-rtl"),"rtl"===t),n),u),x=(0,p.Z)(y,["spinning","delay","indicator","prefixCls"]),Z=v.createElement("div",(0,i.Z)({},x,{style:m,className:S,"aria-live":"polite","aria-busy":h}),function(e,n){var t=n.indicator,i="".concat(e,"-dot");return null===t?null:(0,g.l$)(t)?(0,g.Tm)(t,{className:l()(t.props.className,i)}):(0,g.l$)(T)?(0,g.Tm)(T,{className:l()(T.props.className,i)}):v.createElement("span",{className:l()(i,"".concat(e,"-dot-spin"))},v.createElement("i",{className:"".concat(e,"-dot-item")}),v.createElement("i",{className:"".concat(e,"-dot-item")}),v.createElement("i",{className:"".concat(e,"-dot-item")}),v.createElement("i",{className:"".concat(e,"-dot-item")}))}(c,o.props),f?v.createElement("div",{className:"".concat(c,"-text")},f):null);if(o.isNestedPattern()){var G=l()("".concat(c,"-container"),(0,a.Z)({},"".concat(c,"-blur"),h));return v.createElement("div",(0,i.Z)({},x,{className:l()("".concat(c,"-nested-loading"),d)}),h&&v.createElement("div",{key:"loading"},Z),v.createElement("div",{className:G,key:"container"},o.props.children))}return Z};var c=e.spinning,u=function(e,n){return!!e&&!!n&&!isNaN(Number(n))}(c,e.delay);return o.state={spinning:c&&!u},o.originalUpdateSpinning=o.updateSpinning,o.debouncifyUpdateSpinning(e),o}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return v.createElement(m.C,null,this.renderSpin)}}]),t}(v.Component);h.defaultProps={spinning:!0,size:"default",wrapperClassName:""};var S=function(e){var n=e.prefixCls,t=(0,v.useContext(m.E_).getPrefixCls)("spin",n),a=(0,i.Z)((0,i.Z)({},e),{spinPrefixCls:t});return v.createElement(h,(0,i.Z)({},a))};S.setDefaultIndicator=function(e){T=e},n.Z=S},821:function(e,n,t){var i=t(6050),a=/^\s+/;e.exports=function(e){return e?e.slice(0,i(e)+1).replace(a,""):e}},6050:function(e){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},8573:function(e,n,t){var i=t(8092),a=t(72),r=t(2582),o=Math.max,c=Math.min;e.exports=function(e,n,t){var u,s,l,f,d,p,v=0,m=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function k(n){var t=u,i=s;return u=s=void 0,v=n,f=e.apply(i,t)}function T(e){return v=e,d=setTimeout(S,n),m?k(e):f}function h(e){var t=e-p;return void 0===p||t>=n||t<0||g&&e-v>=l}function S(){var e=a();if(h(e))return x(e);d=setTimeout(S,function(e){var t=n-(e-p);return g?c(t,l-(e-v)):t}(e))}function x(e){return d=void 0,y&&u?k(e):(u=s=void 0,f)}function Z(){var e=a(),t=h(e);if(u=arguments,s=this,p=e,t){if(void 0===d)return T(p);if(g)return clearTimeout(d),d=setTimeout(S,n),k(p)}return void 0===d&&(d=setTimeout(S,n)),f}return n=r(n)||0,i(t)&&(m=!!t.leading,l=(g="maxWait"in t)?o(r(t.maxWait)||0,n):l,y="trailing"in t?!!t.trailing:y),Z.cancel=function(){void 0!==d&&clearTimeout(d),v=0,u=p=s=d=void 0},Z.flush=function(){return void 0===d?f:x(a())},Z}},152:function(e,n,t){var i=t(9066),a=t(3141);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==i(e)}},72:function(e,n,t){var i=t(7009);e.exports=function(){return i.Date.now()}},2582:function(e,n,t){var i=t(821),a=t(8092),r=t(152),o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(r(e))return NaN;if(a(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=a(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=i(e);var t=c.test(e);return t||u.test(e)?s(e.slice(2),t?2:8):o.test(e)?NaN:+e}},1708:function(){}}]);
//# sourceMappingURL=278.497d8189.chunk.js.map