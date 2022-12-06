"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[876],{7335:function(e,t,n){n.d(t,{H:function(){return h}});var a=n(5671),s=n(3144),o=n(940),i=n(2409),c=n(7123),u=n(3344),r=n(6106),l=n(914),d=n(6435),v=n(5581),f=n(2426),g=n.n(f),p=n(184),y=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"Input",value:function(e){return(0,p.jsx)(o.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),h=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"Input",value:function(e){return(0,p.jsx)(i.Z.Item,{label:e.label,children:(0,p.jsx)(y.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,p.jsx)(i.Z.Item,{label:e.label,children:(0,p.jsx)(c.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return g()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,p.jsx)(i.Z.Item,{label:e.label,children:(0,p.jsx)(c.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return g()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,p.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})}},{key:"NumberColSpan",value:function(t){return(0,p.jsx)("div",{children:(0,p.jsxs)(r.Z,{className:t.className,children:[(0,p.jsx)(l.Z,{span:t.colSpan1,children:(0,p.jsx)("span",{children:t.label})}),(0,p.jsx)(l.Z,{span:t.colSpan2,children:(0,p.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,p.jsx)(i.Z.Item,{label:e.label,children:(0,p.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=o.Z.TextArea;return(0,p.jsx)(i.Z.Item,{label:e.label,children:(0,p.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=o.Z.Password;return(0,p.jsx)(i.Z.Item,{label:e.label,children:(0,p.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=o.Z.Search;return(0,p.jsx)(i.Z.Item,{label:e.label,children:(0,p.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,p.jsx)(i.Z.Item,{label:e.label,children:(0,p.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"File",value:function(e){return(0,p.jsx)(i.Z.Item,{label:e.label,children:(0,p.jsx)(o.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},3120:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7083),s=n(7106),o=n(184),i=(0,o.jsx)(s.Z,{style:{fontSize:24}});function c(e){return(0,o.jsx)(a.Z,{size:"large",spinning:void 0!==e.isLoading&&e.isLoading,indicator:i})}},9256:function(e,t,n){n.d(t,{ts:function(){return u},xu:function(){return r}});var a=n(6106),s=n(914),o=n(1333),i=n(3120),c=n(184);function u(e){return(0,c.jsxs)("div",{className:"my-box",children:[(0,c.jsxs)(a.Z,{gutter:12,children:[(0,c.jsx)(s.Z,{span:12,children:(0,c.jsx)(o.Z,{orientation:"left",style:{borderTopColor:"#000"},children:(0,c.jsx)("h2",{style:{fontWeight:"bold"},children:e.title})})}),(0,c.jsx)(s.Z,{span:12,style:{textAlign:"right",paddingTop:"15px"},children:void 0!==e.buttonList?e.buttonList():""})]}),(0,c.jsx)(i.Z,{isLoading:e.isLoading}),(0,c.jsx)("div",{className:"my-box-children",style:{opacity:!0===e.isLoading?.2:1},children:e.children})]})}function r(e){return(0,c.jsxs)("div",{className:"".concat(!1!==e.showBox?"box":"box-no-border"," ").concat(e.className),style:e.style,children:[(0,c.jsx)(i.Z,{isLoading:e.isLoading}),(0,c.jsx)("div",{style:{display:!0===e.isLoading?"none":""},children:e.children})]})}},4876:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(9439),s=n(3940),o=n(2791),i=n(9256),c=n(7335),u=n(2684),r=n(4492),l=n(7689),d=n(3778),v=n(184);function f(e){var t=e.setIsLoading,n=(0,o.useState)(),s=(0,a.Z)(n,2),f=s[0],g=s[1],p=(0,l.UO)().key;return(0,v.jsxs)(i.xu,{children:[(0,v.jsx)(u.O,{type:"primary",onClick:function(){t(!0),r.RC.Export(p).then((function(e){if(e.isSuccess){var t=new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),n=URL.createObjectURL(t);window.open(n)}})).finally((function(){t(!1)}))},value:"Export file"}),(0,v.jsx)(u.O,{type:"success",onClick:function(){!function(){t(!0);var e=new FormData;f&&e.append("file",f);r.RC.Import(p,e).then((function(e){e.isSuccess&&d.Fn.PrintMsgSuccess(e)})).finally((function(){return t(!1)}))}()},value:"Import file",disabled:void 0===f}),(0,v.jsx)(c.H.File,{value:f,setValue:g})]})}var g=n(6106),p=n(914),y=n(8885),h=n(2409),k=n(1830),S=n.n(k);function j(e){var t=(0,o.useState)(""),n=(0,a.Z)(t,2),s=n[0],i=n[1],l=e.isLoading,f=e.setIsLoading,g=e.projectKey,p=e.keyData,k=e.visible,j=e.setVisible,m=e.type,b=e.loadData,x=(0,o.useCallback)((function(){void 0!==p&&(f(!0),r.RC.GetDetailSettingStatus(g,p).then((function(e){e.isSuccess&&i(e.data.value)})).finally((function(){return f(!1)})))}),[g,p,f]);function C(){j(!1)}return(0,o.useEffect)((function(){x()}),[x]),(0,v.jsx)(y.Z,{open:k,onClose:C,title:void 0!==p?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi",children:(0,v.jsxs)(h.Z,{layout:"vertical",onSubmitCapture:function(){var e={value:s,type:m};f(!0),void 0!==p?function(e){r.RC.GetDetailSettingStatus(g,p).then((function(t){t.isSuccess?(e=d.Fn.GetTimestampV2(t,e),r.RC.EditSettingStatus(g,p,e).then((function(e){e.isSuccess&&(d.Fn.PrintMsgSuccessV2(e),b())})).finally((function(){return f(!1)}))):f(!1)}))}(e):function(e){r.RC.AddSettingStatus(g,e).then((function(e){e.isSuccess&&(d.Fn.PrintMsgSuccessV2(e),b())})).finally((function(){return f(!1)}))}(e)},children:[(0,v.jsx)(c.H.Input,{label:"Gi\xe1 tr\u1ecb",value:s,setValue:i}),(0,v.jsx)(u.O,{htmlType:"submit",isLoading:l,type:"success",value:void 0!==p?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi"}),(0,v.jsx)(u.O,{type:"danger",isLoading:l,onClick:function(){S().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng?"}).then((function(e){e.isConfirmed&&(f(!0),r.RC.GetDetailSettingStatus(g,p).then((function(e){e.isSuccess?r.RC.DeleteSettingStatus(g,p,d.Fn.GetTimestampV2(e)).then((function(e){e.isSuccess&&(d.Fn.PrintMsgSuccessV2(e),C(),b())})).finally((function(){return f(!1)})):f(!1)})))}))},value:"X\xf3a"})]})})}function m(e){var t=(0,l.UO)().key,n=(0,o.useState)([]),s=(0,a.Z)(n,2),c=s[0],d=s[1],f=(0,o.useState)(!1),y=(0,a.Z)(f,2),h=y[0],k=y[1],S=(0,o.useState)(!1),m=(0,a.Z)(S,2),b=m[0],x=m[1],C=(0,o.useState)(void 0),Z=(0,a.Z)(C,2),L=Z[0],R=Z[1],D=e.isLoading,G=e.setIsLoading,T=e.type,V=(0,o.useCallback)((function(){G(!0),r.RC.GetListSettingStatus(t,T).then((function(e){e.isSuccess&&d(e.data)})).finally((function(){return G(!1)}))}),[t,T,G]);return(0,o.useEffect)((function(){V()}),[V]),(0,v.jsxs)(i.xu,{children:[(0,v.jsx)(u.O,{type:"primary",value:"Th\xeam m\u1edbi",onClick:function(){k(!0)}}),c.map((function(e,t){return(0,v.jsx)(i.xu,{children:(0,v.jsxs)(g.Z,{gutter:12,children:[(0,v.jsx)(p.Z,{span:12,children:e.value}),(0,v.jsx)(p.Z,{span:12,style:{textAlign:"right"},children:(0,v.jsx)(u.O,{onClick:function(){var t;t=e.key,x(!0),R(t)},value:"Ch\u1ec9nh s\u1eeda"})})]})},t)})),(0,v.jsx)(j,{projectKey:t,type:T,visible:h,setVisible:k,isLoading:D,setIsLoading:G,loadData:V}),(0,v.jsx)(j,{projectKey:t,type:T,visible:b,setVisible:x,isLoading:D,setIsLoading:G,keyData:L,loadData:V})]})}var b=n(5594),x=n(5527);function C(e){var t=(0,o.useState)(""),n=(0,a.Z)(t,2),s=n[0],i=n[1],l=(0,o.useState)(""),f=(0,a.Z)(l,2),g=f[0],p=f[1],k=(0,o.useState)(!1),j=(0,a.Z)(k,2),m=j[0],b=j[1],x=(0,o.useState)(!1),C=(0,a.Z)(x,2),Z=C[0],L=C[1],R=e.title,D=e.isLoading,G=e.setIsLoading,T=e.projectKey,V=e.keyData,M=e.visible,q=e.setVisible,I=e.loadData,P=(0,o.useCallback)((function(){void 0!==V&&(G(!0),r.RC.GetDetailSettingStatus(T,V).then((function(e){if(e.isSuccess){var t=e.data;i(t.value),p(t.type),b(t.isNew),L(t.isClosed)}})).finally((function(){return G(!1)})))}),[V,T,G]);function w(){q(!1)}return(0,o.useEffect)((function(){P()}),[P]),(0,v.jsx)(y.Z,{title:R,open:M,onClose:w,children:(0,v.jsxs)(h.Z,{layout:"vertical",onSubmitCapture:function(){var e={value:s,type:g,isNew:m,isClosed:Z};G(!0),void 0===V?function(e){r.RC.AddSettingStatus(T,e).then((function(e){e.isSuccess&&(d.Fn.PrintMsgSuccessV2(e),I(),w())})).finally((function(){G(!1)}))}(e):function(e){r.RC.GetDetailSettingStatus(T,V).then((function(t){t.isSuccess?(e=d.Fn.GetTimestampV2(t,e),r.RC.EditSettingStatus(T,V,e).then((function(e){e.isSuccess&&(d.Fn.PrintMsgSuccessV2(e),I())})).finally((function(){return G(!1)}))):G(!1)}))}(e)},children:[(0,v.jsx)(c.H.Input,{label:"Gi\xe1 tr\u1ecb",value:s,setValue:i}),(0,v.jsx)(c.H.Select,{label:"Lo\u1ea1i tr\u1ea1ng th\xe1i",options:[{key:"1",label:"Tr\u1ea1ng th\xe1i d\u1ef1 \xe1n",value:1},{key:"2",label:"Tr\u1ea1ng th\xe1i sprint",value:2},{key:"3",label:"Tr\u1ea1ng th\xe1i c\xf4ng vi\u1ec7c",value:3},{key:"4",label:"Tr\u1ea1ng th\xe1i v\u1ea5n \u0111\u1ec1",value:4}],value:g,setValue:p}),(0,v.jsx)(c.H.Switch,{label:"Tr\u1ea1ng th\xe1i m\u1edbi",value:m,setValue:b}),(0,v.jsx)(c.H.Switch,{label:"Tr\u1ea1ng th\xe1i \u0111\xf3ng",value:Z,setValue:L}),(0,v.jsx)(u.O,{type:"success",htmlType:"submit",isLoading:D,value:void 0!==V?"S\u1eeda":"Th\xeam"}),(0,v.jsx)(u.O,{type:"danger",value:"X\xf3a",isLoading:D,onClick:function(){S().fire({title:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng",showConfirmButton:!0,showDenyButton:!0}).then((function(e){e.isConfirmed&&(G(!0),r.RC.GetDetailSettingStatus(T,V).then((function(e){e.isSuccess&&r.RC.DeleteSettingStatus(T,V,d.Fn.GetTimestampV2(e)).then((function(e){e.isSuccess&&(d.Fn.PrintMsgSuccessV2(e),I(),w())}))})))}))}})]})})}function Z(e){var t=(0,l.UO)().key,n=(0,o.useState)([]),s=(0,a.Z)(n,2),c=s[0],d=s[1],f=(0,o.useState)(!1),y=(0,a.Z)(f,2),h=y[0],k=y[1],S=(0,o.useState)(),j=(0,a.Z)(S,2),m=j[0],Z=j[1],L=(0,o.useState)(!1),R=(0,a.Z)(L,2),D=R[0],G=R[1],T=e.isLoading,V=e.setIsLoading,M=(0,o.useCallback)((function(){V(!0),r.RC.GetListSettingStatus(t,"1,2,3,4").then((function(e){e.isSuccess&&d(e.data)})).finally((function(){return V(!1)}))}),[t,V]);function q(e){var t="",n="";switch(e){case 1:t="Tr\u1ea1ng th\xe1i d\u1ef1 \xe1n",n="blue";break;case 2:t="Tr\u1ea1ng th\xe1i sprint",n="red";break;case 3:t="Tr\u1ea1ng th\xe1i c\xf4ng vi\u1ec7c",n="yellow";break;case 4:t="Tr\u1ea1ng th\xe1i v\u1ea5n \u0111\u1ec1",n="green"}return(0,v.jsx)(b.Z,{color:n,text:t})}return(0,o.useEffect)((function(){M()}),[M]),(0,v.jsxs)(i.xu,{title:"Qu\u1ea3n l\xfd tr\u1ea1ng th\xe1i",children:[(0,v.jsx)(u.O,{type:"primary",value:"Th\xeam tr\u1ea1ng th\xe1i",onClick:function(){k(!0)}}),(0,v.jsx)(g.Z,{gutter:12,children:c.map((function(e,t){return(0,v.jsx)(p.Z,{span:4,onClick:function(){var t;t=e.key,Z(t),G(!0)},children:(0,v.jsxs)(i.xu,{children:[(0,v.jsxs)("p",{children:["Value: ",e.value]}),(0,v.jsxs)("p",{children:["Lo\u1ea1i: ",q(e.type)]}),(0,v.jsxs)("p",{children:["Tr\u1ea1ng th\xe1i m\u1edbi: ",e.isNew?(0,v.jsx)(x.Z,{twoToneColor:"#52c41a"}):""," "]}),(0,v.jsxs)("p",{children:["Tr\u1ea1ng th\xe1i \u0111\xf3ng: ",e.isClosed?(0,v.jsx)(x.Z,{twoToneColor:"#52c41a"}):""]})]})},t)}))}),(0,v.jsx)(C,{title:"Th\xeam m\u1edbi tr\u1ea1ng th\xe1i",projectKey:t,visible:h,setVisible:k,loadData:M,isLoading:T,setIsLoading:V}),(0,v.jsx)(C,{title:"S\u1eeda \u0111\u1ed5i tr\u1ea1ng th\xe1i",keyData:m,projectKey:t,visible:D,setVisible:G,loadData:M,isLoading:T,setIsLoading:V})]})}function L(){var e=(0,o.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],u=[{label:"Tr\u1ea1ng th\xe1i",key:"item_1",children:(0,v.jsx)(Z,{isLoading:n,setIsLoading:c})},{label:"\u0110\u1ed9 \u01b0u ti\xean",key:"item_2",children:(0,v.jsx)(m,{isLoading:n,setIsLoading:c,type:5})},{label:"M\u1ee9c \u0111\u1ed9 \u1ea3nh h\u01b0\u1edfng",key:"item_3",children:(0,v.jsx)(m,{isLoading:n,setIsLoading:c,type:6})},{label:"Qu\u1ea3n l\xfd tag",key:"item_4",children:(0,v.jsx)(m,{isLoading:n,setIsLoading:c,type:7})},{label:"Lo\u1ea1i v\u1ea5n \u0111\u1ec1",key:"item_5",children:(0,v.jsx)(m,{isLoading:n,setIsLoading:c,type:8})},{label:"Xu\u1ea5t file",key:"item_6",children:(0,v.jsx)(f,{isLoading:n,setIsLoading:c})}];return(0,v.jsx)(i.ts,{title:"C\xe0i \u0111\u1eb7t d\u1ef1 \xe1n",isLoading:n,children:(0,v.jsx)(s.Z,{defaultActiveKey:"item_1",centered:!0,items:u})})}},4492:function(e,t,n){n.d(t,{NX:function(){return u},RC:function(){return r},Su:function(){return l},Zg:function(){return d},bY:function(){return i},gU:function(){return c},jz:function(){return v}});var a=n(5671),s=n(3144),o=n(1285),i=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(o.b.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return o.b.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return o.b.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return o.b.SendReq(n,"Post",t)}},{key:"GetList",value:function(e){var t="v2/tools/taskManages/projects?".concat(e.generateQueryString());return o.b.SendReq(t,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return o.b.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return o.b.SendReq(t,"Get")}},{key:"Add",value:function(e){return o.b.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return o.b.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return o.b.SendReq(n,"Delete")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return o.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return o.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return o.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return o.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.b.SendReq(a,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return o.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return o.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return o.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return o.b.SendReq(s,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return o.b.SendReq(s,"Delete")}}]),e}(),r=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return o.b.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return o.b.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return o.b.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return o.b.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.b.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="tools/tasks/projects/".concat(e,"/settings/query?type=").concat(t);return o.b.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return o.b.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return o.b.SendReq(t,"Get",void 0,!0)}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return o.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return o.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return o.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return o.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.b.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return o.b.SendReq(n,"Get")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,s){var i="tools/tasks/projects/".concat(e,"/documents/folders?").concat(t.generateQueryString());return o.T.Get(i,n,a,s)}},{key:"GetDetail",value:function(e,t,n,a,s){var i="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t);return o.T.Get(i,n,a,s)}},{key:"Add",value:function(e,t,n,a,s){var i="tools/tasks/projects/".concat(e,"/documents/folders");return o.T.Post(i,t,n,a,s)}},{key:"Edit",value:function(e,t,n,a,s,i){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t);return o.T.Put(c,n,a,s,i)}},{key:"Delete",value:function(e,t,n,a,s,i){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.T.Delete(c,a,s,i)}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,s){var i="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs");return o.T.Get(i,n,a,s)}},{key:"GetDetail",value:function(e,t,n,a,s,i){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n);return o.T.Get(c,a,s,i)}},{key:"Add",value:function(e,t,n,a,s,i){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs");return o.T.Post(c,n,a,s,i)}},{key:"Edit",value:function(e,t,n,a,s,i,c){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n);return o.T.Put(u,a,s,i,c)}},{key:"Delete",value:function(e,t,n,a,s,i,c){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return o.T.Delete(u,s,i,c)}},{key:"RunApi",value:function(e,t,n,a,s,i){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"/runApi");return o.T.Post(c,{},a,s,i)}},{key:"SaveResponse",value:function(e,t,n,a,s,i,c){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"/responses");return o.T.Post(u,a,s,i,c)}}]),e}()}}]);
//# sourceMappingURL=876.527dfb13.chunk.js.map