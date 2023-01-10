"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[4876],{7335:function(e,t,n){n.d(t,{H:function(){return S}});var a=n(5671),o=n(3144),s=n(940),c=n(2409),r=n(7123),i=n(1081),u=n(6106),l=n(914),v=n(6435),d=n(5581),f=n(2014),g=n(2426),p=n.n(g),k=n(184),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,k.jsx)(s.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),S=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(y.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(r.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return p()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(r.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return p()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(i.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})})}},{key:"NumberColSpan",value:function(t){return(0,k.jsx)("div",{children:(0,k.jsxs)(u.Z,{className:t.className,children:[(0,k.jsx)(l.Z,{span:t.colSpan1,children:(0,k.jsx)("span",{children:t.label})}),(0,k.jsx)(l.Z,{span:t.colSpan2,children:(0,k.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(v.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=s.Z.TextArea;return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=s.Z.Password;return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=s.Z.Search;return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(d.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"Checkbox",value:function(e){return(0,k.jsx)(f.Z,{checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t.target.checked),void 0!==e.onChange&&e.onChange(t.target.checked)},children:e.label})}},{key:"File",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(s.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},4876:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(9439),o=n(2069),s=n(2791),c=n(9256),r=n(7335),i=n(2684),u=n(5349),l=n(7689),v=n(3778),d=n(184);function f(e){var t=e.setIsLoading,n=(0,s.useState)(),o=(0,a.Z)(n,2),f=o[0],g=o[1],p=(0,l.UO)().key;return(0,d.jsxs)(c.xu,{children:[(0,d.jsx)(i.O,{type:"primary",onClick:function(){t(!0),u.RC.Export(p).then((function(e){if(e.isSuccess){var t=new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),n=URL.createObjectURL(t);window.open(n)}})).finally((function(){t(!1)}))},value:"Export file"}),(0,d.jsx)(i.O,{type:"success",onClick:function(){!function(){t(!0);var e=new FormData;f&&e.append("file",f);u.RC.Import(p,e).then((function(e){e.isSuccess&&v.Fn.PrintMsgSuccess(e)})).finally((function(){return t(!1)}))}()},value:"Import file",disabled:void 0===f}),(0,d.jsx)(r.H.File,{value:f,setValue:g})]})}var g=n(6106),p=n(914),k=n(8885),y=n(2409),S=n(1830),h=n.n(S);function b(e){var t=(0,s.useState)(""),n=(0,a.Z)(t,2),o=n[0],c=n[1],l=e.isLoading,f=e.setIsLoading,g=e.projectKey,p=e.keyData,S=e.visible,b=e.setVisible,m=e.type,j=e.loadData,R=(0,s.useCallback)((function(){void 0!==p&&(f(!0),u.RC.GetDetailSettingStatus(g,p).then((function(e){e.isSuccess&&c(e.data.value)})).finally((function(){return f(!1)})))}),[g,p,f]);function x(){b(!1)}return(0,s.useEffect)((function(){R()}),[R]),(0,d.jsx)(k.Z,{open:S,onClose:x,title:void 0!==p?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi",children:(0,d.jsxs)(y.Z,{layout:"vertical",onSubmitCapture:function(){var e={value:o,type:m};f(!0),void 0!==p?function(e){u.RC.GetDetailSettingStatus(g,p).then((function(t){t.isSuccess?(e=v.Fn.GetTimestampV2(t,e),u.RC.EditSettingStatus(g,p,e).then((function(e){e.isSuccess&&(v.Fn.PrintMsgSuccessV2(e),j())})).finally((function(){return f(!1)}))):f(!1)}))}(e):function(e){u.RC.AddSettingStatus(g,e).then((function(e){e.isSuccess&&(v.Fn.PrintMsgSuccessV2(e),j())})).finally((function(){return f(!1)}))}(e)},children:[(0,d.jsx)(r.H.Input,{label:"Gi\xe1 tr\u1ecb",value:o,setValue:c}),(0,d.jsx)(i.O,{htmlType:"submit",isLoading:l,type:"success",value:void 0!==p?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi"}),(0,d.jsx)(i.O,{type:"danger",isLoading:l,onClick:function(){h().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng?"}).then((function(e){e.isConfirmed&&(f(!0),u.RC.GetDetailSettingStatus(g,p).then((function(e){e.isSuccess?u.RC.DeleteSettingStatus(g,p,v.Fn.GetTimestampV2(e)).then((function(e){e.isSuccess&&(v.Fn.PrintMsgSuccessV2(e),x(),j())})).finally((function(){return f(!1)})):f(!1)})))}))},value:"X\xf3a"})]})})}function m(e){var t=(0,l.UO)().key,n=(0,s.useState)([]),o=(0,a.Z)(n,2),r=o[0],v=o[1],f=(0,s.useState)(!1),k=(0,a.Z)(f,2),y=k[0],S=k[1],h=(0,s.useState)(!1),m=(0,a.Z)(h,2),j=m[0],R=m[1],x=(0,s.useState)(void 0),M=(0,a.Z)(x,2),C=M[0],Z=M[1],q=e.isLoading,G=e.setIsLoading,D=e.type,L=(0,s.useCallback)((function(){G(!0),u.RC.GetListSettingStatus(t,D).then((function(e){e.isSuccess&&v(e.data)})).finally((function(){return G(!1)}))}),[t,D,G]);return(0,s.useEffect)((function(){L()}),[L]),(0,d.jsxs)(c.xu,{children:[(0,d.jsx)(i.O,{type:"primary",value:"Th\xeam m\u1edbi",onClick:function(){S(!0)}}),r.map((function(e,t){return(0,d.jsx)(c.xu,{children:(0,d.jsxs)(g.Z,{gutter:12,children:[(0,d.jsx)(p.Z,{span:12,children:e.value}),(0,d.jsx)(p.Z,{span:12,style:{textAlign:"right"},children:(0,d.jsx)(i.O,{onClick:function(){var t;t=e.key,R(!0),Z(t)},value:"Ch\u1ec9nh s\u1eeda"})})]})},t)})),(0,d.jsx)(b,{projectKey:t,type:D,visible:y,setVisible:S,isLoading:q,setIsLoading:G,loadData:L}),(0,d.jsx)(b,{projectKey:t,type:D,visible:j,setVisible:R,isLoading:q,setIsLoading:G,keyData:C,loadData:L})]})}var j=n(5594),R=n(5527);function x(e){var t=(0,s.useState)(""),n=(0,a.Z)(t,2),o=n[0],c=n[1],l=(0,s.useState)(""),f=(0,a.Z)(l,2),g=f[0],p=f[1],S=(0,s.useState)(!1),b=(0,a.Z)(S,2),m=b[0],j=b[1],R=(0,s.useState)(!1),x=(0,a.Z)(R,2),M=x[0],C=x[1],Z=e.title,q=e.isLoading,G=e.setIsLoading,D=e.projectKey,L=e.keyData,w=e.visible,I=e.setVisible,V=e.loadData,P=(0,s.useCallback)((function(){void 0!==L&&(G(!0),u.RC.GetDetailSettingStatus(D,L).then((function(e){if(e.isSuccess){var t=e.data;c(t.value),p(t.type),j(t.isNew),C(t.isClosed)}})).finally((function(){return G(!1)})))}),[L,D,G]);function T(){I(!1)}return(0,s.useEffect)((function(){P()}),[P]),(0,d.jsx)(k.Z,{title:Z,open:w,onClose:T,children:(0,d.jsxs)(y.Z,{layout:"vertical",onSubmitCapture:function(){var e={value:o,type:g,isNew:m,isClosed:M};G(!0),void 0===L?function(e){u.RC.AddSettingStatus(D,e).then((function(e){e.isSuccess&&(v.Fn.PrintMsgSuccessV2(e),V(),T())})).finally((function(){G(!1)}))}(e):function(e){u.RC.GetDetailSettingStatus(D,L).then((function(t){t.isSuccess?(e=v.Fn.GetTimestampV2(t,e),u.RC.EditSettingStatus(D,L,e).then((function(e){e.isSuccess&&(v.Fn.PrintMsgSuccessV2(e),V())})).finally((function(){return G(!1)}))):G(!1)}))}(e)},children:[(0,d.jsx)(r.H.Input,{label:"Gi\xe1 tr\u1ecb",value:o,setValue:c}),(0,d.jsx)(r.H.Select,{label:"Lo\u1ea1i tr\u1ea1ng th\xe1i",options:[{key:"1",label:"Tr\u1ea1ng th\xe1i d\u1ef1 \xe1n",value:1},{key:"2",label:"Tr\u1ea1ng th\xe1i sprint",value:2},{key:"3",label:"Tr\u1ea1ng th\xe1i c\xf4ng vi\u1ec7c",value:3},{key:"4",label:"Tr\u1ea1ng th\xe1i v\u1ea5n \u0111\u1ec1",value:4}],value:g,setValue:p}),(0,d.jsx)(r.H.Switch,{label:"Tr\u1ea1ng th\xe1i m\u1edbi",value:m,setValue:j}),(0,d.jsx)(r.H.Switch,{label:"Tr\u1ea1ng th\xe1i \u0111\xf3ng",value:M,setValue:C}),(0,d.jsx)(i.O,{type:"success",htmlType:"submit",isLoading:q,value:void 0!==L?"S\u1eeda":"Th\xeam"}),(0,d.jsx)(i.O,{type:"danger",value:"X\xf3a",isLoading:q,onClick:function(){h().fire({title:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng",showConfirmButton:!0,showDenyButton:!0}).then((function(e){e.isConfirmed&&(G(!0),u.RC.GetDetailSettingStatus(D,L).then((function(e){e.isSuccess&&u.RC.DeleteSettingStatus(D,L,v.Fn.GetTimestampV2(e)).then((function(e){e.isSuccess&&(v.Fn.PrintMsgSuccessV2(e),V(),T())}))})))}))}})]})})}function M(e){var t=(0,l.UO)().key,n=(0,s.useState)([]),o=(0,a.Z)(n,2),r=o[0],v=o[1],f=(0,s.useState)(!1),k=(0,a.Z)(f,2),y=k[0],S=k[1],h=(0,s.useState)(),b=(0,a.Z)(h,2),m=b[0],M=b[1],C=(0,s.useState)(!1),Z=(0,a.Z)(C,2),q=Z[0],G=Z[1],D=e.isLoading,L=e.setIsLoading,w=(0,s.useCallback)((function(){L(!0),u.RC.GetListSettingStatus(t,"1,2,3,4").then((function(e){e.isSuccess&&v(e.data)})).finally((function(){return L(!1)}))}),[t,L]);function I(e){var t="",n="";switch(e){case 1:t="Tr\u1ea1ng th\xe1i d\u1ef1 \xe1n",n="blue";break;case 2:t="Tr\u1ea1ng th\xe1i sprint",n="red";break;case 3:t="Tr\u1ea1ng th\xe1i c\xf4ng vi\u1ec7c",n="yellow";break;case 4:t="Tr\u1ea1ng th\xe1i v\u1ea5n \u0111\u1ec1",n="green"}return(0,d.jsx)(j.Z,{color:n,text:t})}return(0,s.useEffect)((function(){w()}),[w]),(0,d.jsxs)(c.xu,{title:"Qu\u1ea3n l\xfd tr\u1ea1ng th\xe1i",children:[(0,d.jsx)(i.O,{type:"primary",value:"Th\xeam tr\u1ea1ng th\xe1i",onClick:function(){S(!0)}}),(0,d.jsx)(g.Z,{gutter:12,children:r.map((function(e,t){return(0,d.jsx)(p.Z,{span:4,onClick:function(){var t;t=e.key,M(t),G(!0)},children:(0,d.jsxs)(c.xu,{children:[(0,d.jsxs)("p",{children:["Value: ",e.value]}),(0,d.jsxs)("p",{children:["Lo\u1ea1i: ",I(e.type)]}),(0,d.jsxs)("p",{children:["Tr\u1ea1ng th\xe1i m\u1edbi: ",e.isNew?(0,d.jsx)(R.Z,{twoToneColor:"#52c41a"}):""," "]}),(0,d.jsxs)("p",{children:["Tr\u1ea1ng th\xe1i \u0111\xf3ng: ",e.isClosed?(0,d.jsx)(R.Z,{twoToneColor:"#52c41a"}):""]})]})},t)}))}),(0,d.jsx)(x,{title:"Th\xeam m\u1edbi tr\u1ea1ng th\xe1i",projectKey:t,visible:y,setVisible:S,loadData:w,isLoading:D,setIsLoading:L}),(0,d.jsx)(x,{title:"S\u1eeda \u0111\u1ed5i tr\u1ea1ng th\xe1i",keyData:m,projectKey:t,visible:q,setVisible:G,loadData:w,isLoading:D,setIsLoading:L})]})}function C(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=t[0],r=t[1],i=[{label:"Tr\u1ea1ng th\xe1i",key:"item_1",children:(0,d.jsx)(M,{isLoading:n,setIsLoading:r})},{label:"\u0110\u1ed9 \u01b0u ti\xean",key:"item_2",children:(0,d.jsx)(m,{isLoading:n,setIsLoading:r,type:5})},{label:"M\u1ee9c \u0111\u1ed9 \u1ea3nh h\u01b0\u1edfng",key:"item_3",children:(0,d.jsx)(m,{isLoading:n,setIsLoading:r,type:6})},{label:"Qu\u1ea3n l\xfd tag",key:"item_4",children:(0,d.jsx)(m,{isLoading:n,setIsLoading:r,type:7})},{label:"Lo\u1ea1i v\u1ea5n \u0111\u1ec1",key:"item_5",children:(0,d.jsx)(m,{isLoading:n,setIsLoading:r,type:8})},{label:"Xu\u1ea5t file",key:"item_6",children:(0,d.jsx)(f,{isLoading:n,setIsLoading:r})}];return(0,d.jsx)(c.ts,{title:"C\xe0i \u0111\u1eb7t d\u1ef1 \xe1n",isLoading:n,children:(0,d.jsx)(o.Z,{defaultActiveKey:"item_1",centered:!0,items:i})})}},3778:function(e,t,n){n.d(t,{Fn:function(){return c}});var a=n(5671),o=n(3144),s=n(3118),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){s.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){s.ZP.success(e.data.message)}},{key:"PrintMsgSuccessV2",value:function(e){s.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,t,n,a){return(a.pageNumber-1)*a.pageSize+n+1}}]),e}();c.GetIndexInArray=function(e,t,n){for(var a=-1,o=0;o<e.length;o++)if(e[o][t]===n){a=o;break}return a},c.GetIndexInArrayStr=function(e,t){for(var n=-1,a=0;a<e.length;a++)if(e[a].trim()===t.trim()){n=a;break}return n},c.SetPageInfo=function(e,t,n,a){var o=e.data.data.pageInfo;t(o.totalCount),n(o.currentPage),a(o.pageSize)},c.GetTimestamp=function(e,t){try{return null===t||void 0===t?e.data.data.timestamp:(t.timestamp=e.data.data.timestamp,t)}catch(n){console.log(n)}},c.GetTimestampV2=function(e,t){try{return null===t||void 0===t?e.data.timestamp:(t.timestamp=e.data.timestamp,t)}catch(n){console.log(n)}}},5349:function(e,t,n){n.d(t,{GH:function(){return k},Lc:function(){return p},NX:function(){return i},RC:function(){return u},Su:function(){return l},Tz:function(){return f},Zg:function(){return v},bY:function(){return c},gU:function(){return r},iL:function(){return y},jz:function(){return d},zy:function(){return g}});var a=n(5671),o=n(3144),s=n(1285),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(s.b.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetStatistic",value:function(){return s.b.SendReq("v2/tools/taskManages/projects/statistic","Get")}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.b.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.b.SendReq(n,"Post",t)}},{key:"GetList",value:function(e){var t="v2/tools/taskManages/projects?".concat(e.generateQueryString());return s.b.SendReq(t,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return s.b.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return s.b.SendReq(t,"Get")}},{key:"Add",value:function(e){return s.b.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return s.b.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return s.b.SendReq(n,"Delete")}}]),e}(),r=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return s.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return s.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.b.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.b.SendReq(o,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return s.b.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.b.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return s.b.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/query?type=").concat(t);return s.b.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return s.b.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return s.b.SendReq(t,"Get",void 0,!0)}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return s.b.SendReq(n,"Get")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return s.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return s.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return s.b.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.b.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/exec");return s.b.SendReq(a,"Get")}},{key:"Query",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/apis/query?q=").concat(t);return s.b.SendReq(n,"Get")}}]),e}(),f=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Getlist",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return s.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a);return s.b.SendReq(o,"Get")}},{key:"SaveResponse",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return s.b.SendReq(o,"Post",a)}},{key:"Delete",value:function(e,t,n,a,o){var c="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a,"?timestamp=").concat(encodeURIComponent(o));return s.b.SendReq(c,"Delete")}}]),e}(),g=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e){var t="v2/tools/taskManages/workflows?".concat(e.generateQueryString());return s.b.SendReq(t,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}}]),e}(),p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details?").concat(e.generateQueryString(),"&orders=true");return s.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return s.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details");return s.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return s.b.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.b.SendReq(o,"Delete")}},{key:"SwapOrder",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details/").concat(e,"/swapOrders?isNext=").concat(a);return s.b.SendReq(o,"Post")}}]),e}(),k=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories?").concat(e.generateQueryString());return s.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e);return s.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories");return s.b.SendReq(a,"Post",e)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e);return s.b.SendReq(o,"Put",t)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e,"?timestamp=").concat(encodeURIComponent(t));return s.b.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e,"/exec");return s.b.SendReq(a,"Get")}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(t,"/documentApi/public?").concat(e.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}},{key:"GetListDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return s.b.SendReq(n,"Get")}},{key:"UpdateDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return s.b.SendReq(a,"Post",n)}}]),e}()}}]);
//# sourceMappingURL=4876.7917bc3e.chunk.js.map