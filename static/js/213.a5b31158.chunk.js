"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[213],{7335:function(e,t,n){n.d(t,{H:function(){return j}});var a=n(5671),s=n(3144),o=n(940),r=n(2409),c=n(7123),u=n(3344),l=n(6106),i=n(914),d=n(6435),v=n(5581),f=n(2426),p=n.n(f),h=n(184),g=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"Input",value:function(e){return(0,h.jsx)(o.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),j=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"Input",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(g.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(c.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return p()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(c.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return p()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,h.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})}},{key:"NumberColSpan",value:function(t){return(0,h.jsx)("div",{children:(0,h.jsxs)(l.Z,{className:t.className,children:[(0,h.jsx)(i.Z,{span:t.colSpan1,children:(0,h.jsx)("span",{children:t.label})}),(0,h.jsx)(i.Z,{span:t.colSpan2,children:(0,h.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=o.Z.TextArea;return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=o.Z.Password;return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=o.Z.Search;return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"File",value:function(e){return(0,h.jsx)(r.Z.Item,{label:e.label,children:(0,h.jsx)(o.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},8776:function(e,t,n){n.d(t,{E:function(){return c},y:function(){return r}});var a=n(2426),s=n.n(a),o=n(184);function r(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?s()(t).format("DD/MM/YYYY"):"";return(0,o.jsx)("span",{children:n})}function c(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?s()(t).format("DD/MM/YYYY HH:mm:ss"):"";return(0,o.jsx)("span",{children:n})}},213:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(9439),s=n(6106),o=n(914),r=n(2791),c=n(7689),u=n(3778),l=n(4492),i=n(7335),d=n(9256),v=n(2684),f=n(8776),p=n(184);function h(){var e=(0,c.UO)().key,t=(0,c.s0)(),n=(0,r.useState)(!1),h=(0,a.Z)(n,2),g=h[0],j=h[1],k=(0,r.useState)(""),y=(0,a.Z)(k,2),S=y[0],x=y[1],m=(0,r.useState)(""),b=(0,a.Z)(m,2),Z=b[0],M=b[1],R=(0,r.useState)(""),q=(0,a.Z)(R,2),G=q[0],D=q[1],C=(0,r.useState)(""),P=(0,a.Z)(C,2),I=P[0],V=P[1],T=(0,r.useState)(""),Y=(0,a.Z)(T,2),N=Y[0],L=Y[1],w=(0,r.useState)(0),A=(0,a.Z)(w,2),E=A[0],F=A[1],O=(0,r.useState)([]),U=(0,a.Z)(O,2),H=U[0],Q=U[1],B=(0,r.useState)([]),z=(0,a.Z)(B,2),X=z[0],_=z[1],K=(0,r.useState)([]),J=(0,a.Z)(K,2),W=J[0],$=J[1],ee=(0,r.useState)([]),te=(0,a.Z)(ee,2),ne=te[0],ae=te[1],se=(0,r.useState)([]),oe=(0,a.Z)(se,2),re=oe[0],ce=oe[1],ue=(0,r.useState)([]),le=(0,a.Z)(ue,2),ie=le[0],de=le[1],ve=(0,r.useState)([]),fe=(0,a.Z)(ve,2),pe=fe[0],he=fe[1],ge=(0,r.useState)([]),je=(0,a.Z)(ge,2),ke=je[0],ye=je[1],Se=(0,r.useState)([]),xe=(0,a.Z)(Se,2),me=xe[0],be=xe[1];function Ze(e){return e.map((function(e,t){return null!==e.isNew?(0,p.jsxs)("li",{children:[e.value,"- Tr\u1ea1ng th\xe1i m\u1edbi: ",(0,p.jsx)("strong",{children:e.isNew?"True":"False"}),"- Tr\u1ea1ng th\xe1i \u0111\xf3ng: ",(0,p.jsx)("strong",{children:e.isClosed?"True":"False"})]},t):(0,p.jsx)("li",{children:e.value},t)}))}return(0,p.jsxs)(d.ts,{isLoading:g,title:"Clone d\u1ef1 \xe1n",children:[(0,p.jsx)(d.xu,{showBox:!1,children:(0,p.jsx)(v.O,{type:"primary",isLoading:g,onClick:function(){j(!0),l.bY.GetClone(e).then((function(e){if(e.isSuccess){var t,n=e.data.project;M(n.name),D(n.content),V(n.tag.toString(",")),L(null===(t=n.parentProject)||void 0===t?void 0:t.name),F(n.status.value),Q(e.data.sprints);for(var a=0;a<e.data.statusSettings.length;a++){var s=e.data.statusSettings[a];1===s.type&&_(s.datas),2===s.type&&$(s.datas),3===s.type&&ae(s.datas),4===s.type&&ce(s.datas),5===s.type&&de(s.datas),6===s.type&&he(s.datas),7===s.type&&ye(s.datas),8===s.type&&be(s.datas)}}})).finally((function(){return j(!1)}))},value:"Get data clone"})}),(0,p.jsx)(d.xu,{showBox:!1,children:(0,p.jsxs)(s.Z,{gutter:24,children:[(0,p.jsx)(o.Z,{span:12,children:(0,p.jsx)(i.H.Input,{label:"Nh\u1eadp OTP",value:S,setValue:x})}),(0,p.jsx)(o.Z,{span:12,children:(0,p.jsx)(v.O,{type:"primary",isLoading:g,onClick:function(){var n={otp:S};j(!0),l.bY.ProcessClone(e,n).then((function(e){e.isSuccess&&(u.Fn.PrintMsgSuccessV2(e),t("/tools/tasks/projects/".concat(e.data.projectKeyNew)))})).finally((function(){return j(!1)}))},value:"X\xe1c nh\u1eadn clone d\u1ef1 \xe1n"})})]})}),(0,p.jsxs)(d.xu,{children:[(0,p.jsx)("h2",{children:"Chi ti\u1ebft d\u1ef1 \xe1n"}),(0,p.jsxs)(s.Z,{gutter:12,children:[(0,p.jsxs)(o.Z,{span:12,children:[(0,p.jsx)("strong",{children:"T\xean d\u1ef1 \xe1n: "}),Z]}),(0,p.jsxs)(o.Z,{span:12,children:[(0,p.jsx)("strong",{children:"Tag: "})," ",I]}),(0,p.jsxs)(o.Z,{span:24,children:[(0,p.jsx)("strong",{children:"N\u1ed9i dung: "}),G]}),(0,p.jsxs)(o.Z,{span:12,children:[(0,p.jsx)("strong",{children:"D\u1ef1 \xe1n cha: "})," ",N]}),(0,p.jsxs)(o.Z,{span:12,children:[(0,p.jsx)("strong",{children:"Tr\u1ea1ng th\xe1i: "})," ",E]})]})]}),(0,p.jsxs)(d.xu,{children:[(0,p.jsx)("h2",{children:"Danh s\xe1ch c\xe1c giai \u0111o\u1ea1n d\u1ef1 \xe1n"}),H.map((function(e,t){return(0,p.jsxs)(d.xu,{children:[(0,p.jsxs)("p",{children:[(0,p.jsxs)("strong",{children:["Giai \u0111o\u1ea1n ",t+1,": "]})," ",e.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Tr\u1ea1ng th\xe1i: "})," ",e.status.value]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Th\u1eddi gian: "}),(0,p.jsx)(f.y,{value:e.dateFrom})," -",(0,p.jsx)(f.y,{value:e.dateTo})]})]},t)}))]}),(0,p.jsxs)(d.xu,{children:[(0,p.jsx)("h2",{children:"Danh s\xe1ch c\xe0i \u0111\u1eb7t d\u1ef1 \xe1n"}),(0,p.jsxs)(s.Z,{gutter:12,children:[(0,p.jsxs)(o.Z,{span:24,children:[(0,p.jsx)("h3",{children:"Danh s\xe1ch tr\u1ea1ng th\xe1i d\u1ef1 \xe1n"}),(0,p.jsx)("ul",{children:Ze(X)})]}),(0,p.jsxs)(o.Z,{span:24,children:[(0,p.jsx)("h3",{children:"Danh s\xe1ch tr\u1ea1ng th\xe1i giai \u0111o\u1ea1n"}),(0,p.jsx)("ul",{children:Ze(W)})]}),(0,p.jsxs)(o.Z,{span:24,children:[(0,p.jsx)("h3",{children:"Danh s\xe1ch tr\u1ea1ng th\xe1i c\xf4ng vi\u1ec7c"}),(0,p.jsx)("ul",{children:Ze(ne)})]}),(0,p.jsxs)(o.Z,{span:24,children:[(0,p.jsx)("h3",{children:"Danh s\xe1ch tr\u1ea1ng th\xe1i v\u1ea5n \u0111\u1ec1"}),(0,p.jsx)("ul",{children:Ze(re)})]}),(0,p.jsxs)(o.Z,{span:24,children:[(0,p.jsx)("h3",{children:"Danh s\xe1ch \u0111\u1ed9 \u01b0u ti\xean"}),(0,p.jsx)("ul",{children:Ze(ie)})]}),(0,p.jsxs)(o.Z,{span:24,children:[(0,p.jsx)("h3",{children:"Danh s\xe1ch m\u1ee9c \u0111\u1ed9 \u1ea3nh h\u01b0\u1edfng"}),(0,p.jsx)("ul",{children:Ze(pe)})]}),(0,p.jsxs)(o.Z,{span:24,children:[(0,p.jsx)("h3",{children:"Danh s\xe1ch Tag"}),(0,p.jsx)("ul",{children:Ze(ke)})]}),(0,p.jsxs)(o.Z,{span:24,children:[(0,p.jsx)("h3",{children:"Danh s\xe1ch lo\u1ea1i v\u1ea5n \u0111\u1ec1"}),(0,p.jsx)("ul",{children:Ze(me)})]})]})]})]})}},3778:function(e,t,n){n.d(t,{Fn:function(){return r}});var a=n(5671),s=n(3144),o=n(3118),r=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){o.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){o.ZP.success(e.data.message)}},{key:"PrintMsgSuccessV2",value:function(e){o.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,t,n,a){return(a.pageNumber-1)*a.pageSize+n+1}}]),e}();r.GetIndexInArray=function(e,t,n){for(var a=-1,s=0;s<e.length;s++)if(e[s][t]===n){a=s;break}return a},r.GetIndexInArrayStr=function(e,t){for(var n=-1,a=0;a<e.length;a++)if(e[a].trim()===t.trim()){n=a;break}return n},r.SetPageInfo=function(e,t,n,a){var s=e.data.data.pageInfo;t(s.totalCount),n(s.currentPage),a(s.pageSize)},r.GetTimestamp=function(e,t){try{return null===t||void 0===t?e.data.data.timestamp:(t.timestamp=e.data.data.timestamp,t)}catch(n){console.log(n)}},r.GetTimestampV2=function(e,t){try{return null===t||void 0===t?e.data.timestamp:(t.timestamp=e.data.timestamp,t)}catch(n){console.log(n)}}},4492:function(e,t,n){n.d(t,{NX:function(){return u},RC:function(){return l},Su:function(){return i},Tz:function(){return f},Zg:function(){return d},bY:function(){return r},gU:function(){return c},jz:function(){return v}});var a=n(5671),s=n(3144),o=n(1285),r=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(o.b.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetStatistic",value:function(){return o.b.SendReq("v2/tools/taskManages/projects/statistic","Get")}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return o.b.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return o.b.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return o.b.SendReq(n,"Post",t)}},{key:"GetList",value:function(e){var t="v2/tools/taskManages/projects?".concat(e.generateQueryString());return o.b.SendReq(t,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return o.b.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return o.b.SendReq(t,"Get")}},{key:"Add",value:function(e){return o.b.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return o.b.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return o.b.SendReq(n,"Delete")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return o.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return o.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return o.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return o.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.b.SendReq(a,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return o.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return o.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return o.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return o.b.SendReq(s,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return o.b.SendReq(s,"Delete")}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return o.b.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return o.b.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return o.b.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return o.b.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.b.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/query?type=").concat(t);return o.b.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return o.b.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return o.b.SendReq(t,"Get",void 0,!0)}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return o.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return o.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return o.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return o.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.b.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return o.b.SendReq(n,"Get")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders?").concat(t.generateQueryString());return o.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return o.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders");return o.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return o.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.b.SendReq(a,"Delete")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return o.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return o.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return o.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return o.b.SendReq(s,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return o.b.SendReq(s,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/exec");return o.b.SendReq(a,"Get")}}]),e}(),f=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"Getlist",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return o.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a);return o.b.SendReq(s,"Get")}},{key:"SaveResponse",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return o.b.SendReq(s,"Post",a)}},{key:"Delete",value:function(e,t,n,a,s){var r="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a,"?timestamp=").concat(encodeURIComponent(s));return o.b.SendReq(r,"Delete")}}]),e}()}}]);
//# sourceMappingURL=213.a5b31158.chunk.js.map