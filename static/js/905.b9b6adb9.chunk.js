"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[905],{1905:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var t=a(9439),u=a(2409),l=a(2791),r=a(1087),i=a(3778),o=a(1927),s=a(7335),c=a(9256),v=a(2684),d=a(184);function f(){var e=(0,l.useState)(!1),n=(0,t.Z)(e,2),a=n[0],f=n[1],m=(0,l.useState)(""),h=(0,t.Z)(m,2),g=h[0],y=h[1],x=(0,l.useState)(""),p=(0,t.Z)(x,2),k=p[0],b=p[1];return(0,d.jsx)(c.ts,{title:"Qu\xean m\u1eadt kh\u1ea9u",children:(0,d.jsxs)(u.Z,{layout:"vertical",children:[(0,d.jsx)(s.H.Input,{label:"T\xean \u0111\u0103ng nh\u1eadp",value:g,setValue:y}),(0,d.jsx)(v.O,{value:"G\u1eedi m\xe3 OTP",isLoading:a,onClick:function(){f(!0);var e={email:g};o.e.RequestForgotPassword(e).then((function(e){e.isSuccess&&i.Fn.PrintMsgSuccessV2(e)})).finally((function(){return f(!1)}))}}),(0,d.jsx)(s.H.Password,{label:"OTP",value:k,setValue:b}),(0,d.jsxs)("p",{children:["Nh\u1ea5n v\xe0o ",(0,d.jsx)(r.rU,{to:"login",children:"\u0111\xe2y"})," \u0111\u1ec3 tr\u1edf v\u1ec1 trang \u0111\u0103ng nh\u1eadp"]}),(0,d.jsx)(v.O,{value:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",isLoading:a,onClick:function(){f(!0);var e={email:g,otp:k};o.e.VerifyForgotPassword(e).then((function(e){e.isSuccess&&i.Fn.PrintMsgSuccessV2(e)})).finally((function(){return f(!1)}))}})]})})}},7335:function(e,n,a){a.d(n,{H:function(){return y}});var t=a(5671),u=a(3144),l=a(940),r=a(2409),i=a(7123),o=a(3344),s=a(6106),c=a(914),v=a(6435),d=a(5581),f=a(2426),m=a.n(f),h=a(184),g=function(){function e(){(0,t.Z)(this,e)}return(0,u.Z)(e,null,[{key:"Input",value:function(e){return(0,h.jsx)(l.Z,{onClick:e.onClick,value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),y=function(){function e(){(0,t.Z)(this,e)}return(0,u.Z)(e,null,[{key:"Input",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(g.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(i.Z,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return m()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(i.Z,{showTime:!0,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return m()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,h.jsx)(o.Z,{min:e.min,max:e.max,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)}})}},{key:"NumberColSpan",value:function(n){return(0,h.jsx)("div",{children:(0,h.jsxs)(s.Z,{className:n.className,children:[(0,h.jsx)(c.Z,{span:n.colSpan1,children:(0,h.jsx)("span",{children:n.label})}),(0,h.jsx)(c.Z,{span:n.colSpan2,children:(0,h.jsx)(e.Number,{min:n.min,max:n.max,value:n.value,setValue:n.setValue})})]})})}},{key:"Select",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(v.Z,{options:e.options,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"TextArea",value:function(e){var n=l.Z.TextArea;return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Password",value:function(e){var n=l.Z.Password;return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Search",value:function(e){var n=l.Z.Search;return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(n,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Switch",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(d.Z,{loading:e.loading,checked:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"File",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(l.Z,{type:"file",onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.files[0])}})})}}]),e}()},3778:function(e,n,a){a.d(n,{Fn:function(){return r}});var t=a(5671),u=a(3144),l=a(3118),r=function(){function e(){(0,t.Z)(this,e)}return(0,u.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){l.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){l.ZP.success(e.data.message)}},{key:"PrintMsgSuccessV2",value:function(e){l.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,n,a,t){return(t.pageNumber-1)*t.pageSize+a+1}}]),e}();r.GetIndexInArray=function(e,n,a){for(var t=-1,u=0;u<e.length;u++)if(e[u][n]===a){t=u;break}return t},r.GetIndexInArrayStr=function(e,n){for(var a=-1,t=0;t<e.length;t++)if(e[t].trim()===n.trim()){a=t;break}return a},r.SetPageInfo=function(e,n,a,t){var u=e.data.data.pageInfo;n(u.totalCount),a(u.currentPage),t(u.pageSize)},r.GetTimestamp=function(e,n){try{return null===n||void 0===n?e.data.data.timestamp:(n.timestamp=e.data.data.timestamp,n)}catch(a){console.log(a)}},r.GetTimestampV2=function(e,n){try{return null===n||void 0===n?e.data.timestamp:(n.timestamp=e.data.timestamp,n)}catch(a){console.log(a)}}}}]);
//# sourceMappingURL=905.b9b6adb9.chunk.js.map