"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[7517],{7517:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var l=a(9439),u=a(2409),t=a(2791),r=a(7689),i=a(1087),o=a(9223),s=a(1927),c=a(7335),d=a(9256),h=a(2684),v=a(184);function f(){var e=(0,r.s0)(),n=(0,t.useState)(""),a=(0,l.Z)(n,2),f=a[0],g=a[1],x=(0,t.useState)(""),m=(0,l.Z)(x,2),b=m[0],j=m[1],C=(0,t.useState)(!1),k=(0,l.Z)(C,2),y=k[0],Z=k[1];return(0,v.jsx)(d.ts,{title:"\u0110\u0103ng nh\u1eadp",isLoading:y,children:(0,v.jsxs)(u.Z,{layout:"vertical",onSubmitCapture:function(){Z(!0),s.e.CheckLogin(new o.W(f,b)).then((function(n){n.isSuccess&&(new o.r(n.data),e("/"))})).finally((function(){Z(!1)}))},children:[(0,v.jsx)(c.H.Input,{label:"T\xean \u0111\u0103ng nh\u1eadp",value:f,setValue:g}),(0,v.jsx)(c.H.Password,{label:"M\u1eadt kh\u1ea9u",value:b,setValue:j}),(0,v.jsxs)("p",{children:["Qu\xean m\u1eadt kh\u1ea9u, nh\u1ea5n v\xe0o ",(0,v.jsx)(i.rU,{to:"/forgotPassword",children:"\u0111\xe2y"})," \u0111\u1ec3 l\u1ea5y l\u1ea1i m\u1eadt kh\u1ea9u"]}),(0,v.jsx)(h.O,{htmlType:"submit",value:"\u0110\u0103ng nh\u1eadp",type:"primary"})]})})}},7335:function(e,n,a){a.d(n,{H:function(){return b}});var l=a(5671),u=a(3144),t=a(940),r=a(2409),i=a(7123),o=a(1081),s=a(6106),c=a(914),d=a(6435),h=a(5581),v=a(2014),f=a(2426),g=a.n(f),x=a(184),m=function(){function e(){(0,l.Z)(this,e)}return(0,u.Z)(e,null,[{key:"Input",value:function(e){return(0,x.jsx)(t.Z,{onClick:e.onClick,value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),b=function(){function e(){(0,l.Z)(this,e)}return(0,u.Z)(e,null,[{key:"Input",value:function(e){return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(m.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(i.Z,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return g()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(i.Z,{showTime:!0,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return g()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(o.Z,{min:e.min,max:e.max,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)}})})}},{key:"NumberColSpan",value:function(n){return(0,x.jsx)("div",{children:(0,x.jsxs)(s.Z,{className:n.className,children:[(0,x.jsx)(c.Z,{span:n.colSpan1,children:(0,x.jsx)("span",{children:n.label})}),(0,x.jsx)(c.Z,{span:n.colSpan2,children:(0,x.jsx)(e.Number,{min:n.min,max:n.max,value:n.value,setValue:n.setValue})})]})})}},{key:"Select",value:function(e){return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"TextArea",value:function(e){var n=t.Z.TextArea;return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Password",value:function(e){var n=t.Z.Password;return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Search",value:function(e){var n=t.Z.Search;return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(n,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Switch",value:function(e){return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(h.Z,{loading:e.loading,checked:e.value,onChange:function(n){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"Checkbox",value:function(e){return(0,x.jsx)(v.Z,{checked:e.value,onChange:function(n){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(n.target.checked),void 0!==e.onChange&&e.onChange(n.target.checked)},children:e.label})}},{key:"File",value:function(e){return(0,x.jsx)(r.Z.Item,{label:e.label,children:(0,x.jsx)(t.Z,{type:"file",onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.files[0])}})})}}]),e}()}}]);
//# sourceMappingURL=7517.6bfc8c22.chunk.js.map