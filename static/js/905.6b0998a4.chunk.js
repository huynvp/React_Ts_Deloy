"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[905],{1905:function(e,n,a){a.r(n),a.d(n,{default:function(){return v}});var u=a(9439),t=a(1095),l=a(2791),r=a(3778),i=a(1927),o=a(7335),s=a(2684),c=a(4104),d=a(184);function v(){var e=(0,l.useState)(!1),n=(0,u.Z)(e,2),a=n[0],v=n[1],f=(0,l.useState)(""),h=(0,u.Z)(f,2),m=h[0],x=h[1],j=(0,l.useState)(""),b=(0,u.Z)(j,2),g=b[0],Z=b[1];return(0,d.jsxs)("div",{className:"my-box",children:[(0,d.jsx)(c.Z,{value:"Qu\xean m\u1eadt kh\u1ea9u"}),(0,d.jsxs)(t.Z,{layout:"vertical",children:[(0,d.jsx)(o.Do,{label:"T\xean \u0111\u0103ng nh\u1eadp",value:m,setValue:x}),(0,d.jsx)(s.O,{value:"G\u1eedi m\xe3 OTP",isLoading:a,onClick:function(){v(!0);var e={userName:m};i.e.RequestForgotPassword(e,(function(e){r.Fn.PrintMsgSuccess(e)}),void 0,(function(){v(!1)}))}}),(0,d.jsx)(o.Do,{label:"OTP",value:g,setValue:Z}),(0,d.jsx)(s.O,{value:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",isLoading:a,onClick:function(){v(!0);var e={userName:m,otp:g};i.e.VerifyForgotPassword(e,(function(e){r.Fn.PrintMsgSuccess(e)}),void 0,(function(){v(!1)}))}})]})]})}},7335:function(e,n,a){a.d(n,{Do:function(){return h},G9:function(){return b},Hn:function(){return Z},J:function(){return m},Jd:function(){return x},PI:function(){return f},WU:function(){return g},bR:function(){return V},ue:function(){return C}});var u=a(8678),t=a(1095),l=a(7123),r=a(3344),i=a(6106),o=a(914),s=a(6435),c=a(2426),d=a.n(c),v=a(184);function f(e){return(0,v.jsx)(u.Z,{onClick:e.onClick,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)},required:e.required,readOnly:e.readOnly})}function h(e){return(0,v.jsx)(t.Z.Item,{label:e.label,children:(0,v.jsx)(f,{onClick:e.onClick,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}function m(e){return(0,v.jsx)(t.Z.Item,{label:e.label,children:(0,v.jsx)(l.Z,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return d()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}function x(e){return(0,v.jsx)(t.Z.Item,{label:e.label,children:(0,v.jsx)(l.Z,{showTime:!0,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return d()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}function j(e){return(0,v.jsx)(r.Z,{min:e.min,max:e.max,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)}})}function b(e){return(0,v.jsx)("div",{children:(0,v.jsxs)(i.Z,{className:e.className,children:[(0,v.jsx)(o.Z,{span:e.colSpan1,children:(0,v.jsx)("span",{children:e.label})}),(0,v.jsx)(o.Z,{span:e.colSpan2,children:(0,v.jsx)(j,{min:e.min,max:e.max,value:e.value,setValue:e.setValue})})]})})}function g(e){return(0,v.jsx)(t.Z.Item,{label:e.label,children:(0,v.jsx)(s.Z,{options:e.options,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}function Z(e){var n=u.Z.TextArea;return(0,v.jsx)(t.Z.Item,{label:e.label,children:(0,v.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}function C(e){var n=u.Z.Password;return(0,v.jsx)(t.Z.Item,{label:e.label,children:(0,v.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)}})})}function V(e){var n=u.Z.Search;return(0,v.jsx)(t.Z.Item,{label:e.label,children:(0,v.jsx)(n,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},2684:function(e,n,a){a.d(n,{O:function(){return l}});var u=a(7309),t=(a(1708),a(184));function l(e){var n=void 0!==e.htmlType?e.htmlType:"button";return(0,t.jsx)(u.Z,{disabled:e.disabled,loading:e.isLoading,htmlType:n,className:"btn_"+e.type,onClick:function(){void 0!==e.onClick&&e.onClick()},children:e.value})}},4104:function(e,n,a){a.d(n,{Z:function(){return t}});var u=a(184);function t(e){return(0,u.jsx)("h3",{children:e.value})}},1708:function(){}}]);
//# sourceMappingURL=905.6b0998a4.chunk.js.map