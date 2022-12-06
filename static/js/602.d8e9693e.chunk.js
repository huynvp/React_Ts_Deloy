"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[602],{7335:function(e,t,n){n.d(t,{H:function(){return y}});var a=n(5671),o=n(3144),s=n(940),c=n(2409),r=n(7123),u=n(3344),l=n(6106),i=n(914),v=n(6435),d=n(5581),f=n(2426),p=n.n(f),k=n(184),g=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,k.jsx)(s.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(g.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(r.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return p()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(r.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return p()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,k.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})}},{key:"NumberColSpan",value:function(t){return(0,k.jsx)("div",{children:(0,k.jsxs)(l.Z,{className:t.className,children:[(0,k.jsx)(i.Z,{span:t.colSpan1,children:(0,k.jsx)("span",{children:t.label})}),(0,k.jsx)(i.Z,{span:t.colSpan2,children:(0,k.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(v.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=s.Z.TextArea;return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=s.Z.Password;return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=s.Z.Search;return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(d.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"File",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(s.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},3120:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7083),o=n(7106),s=n(184),c=(0,s.jsx)(o.Z,{style:{fontSize:24}});function r(e){return(0,s.jsx)(a.Z,{size:"large",spinning:void 0!==e.isLoading&&e.isLoading,indicator:c})}},9256:function(e,t,n){n.d(t,{ts:function(){return u},xu:function(){return l}});var a=n(6106),o=n(914),s=n(1333),c=n(3120),r=n(184);function u(e){return(0,r.jsxs)("div",{className:"my-box",children:[(0,r.jsxs)(a.Z,{gutter:12,children:[(0,r.jsx)(o.Z,{span:12,children:(0,r.jsx)(s.Z,{orientation:"left",style:{borderTopColor:"#000"},children:(0,r.jsx)("h2",{style:{fontWeight:"bold"},children:e.title})})}),(0,r.jsx)(o.Z,{span:12,style:{textAlign:"right",paddingTop:"15px"},children:void 0!==e.buttonList?e.buttonList():""})]}),(0,r.jsx)(c.Z,{isLoading:e.isLoading}),(0,r.jsx)("div",{className:"my-box-children",style:{opacity:!0===e.isLoading?.2:1},children:e.children})]})}function l(e){return(0,r.jsxs)("div",{className:"".concat(!1!==e.showBox?"box":"box-no-border"," ").concat(e.className),style:e.style,children:[(0,r.jsx)(c.Z,{isLoading:e.isLoading}),(0,r.jsx)("div",{style:{display:!0===e.isLoading?"none":""},children:e.children})]})}},7602:function(e,t,n){n.d(t,{M:function(){return f},Z:function(){return p}});var a=n(9439),o=n(7528),s=n(6106),c=n(914),r=n(2409),u=n(2791),l=n(4492),i=n(7335),v=n(9256),d=n(184);function f(e){var t=e.projectKey,n=e.type,o=e.label,s=e.value,c=e.setValue,r=(0,u.useState)([]),v=(0,a.Z)(r,2),f=v[0],p=v[1],k=(0,u.useCallback)((function(){l.RC.SearchByType(t,n).then((function(e){if(e.isSuccess){var t=e.data.map((function(e,t){return{key:t,label:e.value,value:e.id}}));p(t)}}))}),[t,n]);return(0,u.useEffect)((function(){k()}),[k]),(0,d.jsx)("div",{children:(0,d.jsx)(i.H.Select,{label:o,options:f,value:s,setValue:c})})}function p(e){var t=e.projectKey,n=e.label,f=e.value,p=e.setValue,k=(0,u.useState)([]),g=(0,a.Z)(k,2),y=g[0],j=g[1],b=(0,u.useCallback)((function(){l.RC.SearchByType(t,7).then((function(e){if(e.isSuccess){var t=e.data.map((function(e,t){return{key:t,label:e.value,value:e.value}}));j(t)}}))}),[t]);return(0,u.useEffect)((function(){b()}),[b]),(0,d.jsxs)(s.Z,{gutter:12,children:[(0,d.jsx)(c.Z,{span:12,children:(0,d.jsx)(i.H.Select,{label:n,value:f,setValue:function(e){p(""!==f?f+","+e:e)},options:y})}),(0,d.jsx)(c.Z,{span:12,children:(0,d.jsx)(v.xu,{children:(0,d.jsx)(r.Z.Item,{children:function(){var e=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"];if(""!==f)return f.split(",").map((function(t,n){return(0,d.jsx)(o.Z,{onClick:function(){!function(e){var t=f.split(","),n=t.splice(e+1,t.length);p(n.length>0?n.toString(","):"")}(n)},color:e[Math.floor(11*Math.random())],children:t},n)}))}()})})})]})}},4492:function(e,t,n){n.d(t,{NX:function(){return u},RC:function(){return l},Su:function(){return i},Zg:function(){return v},bY:function(){return c},gU:function(){return r},jz:function(){return d}});var a=n(5671),o=n(3144),s=n(1285),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(s.b.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.b.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.b.SendReq(n,"Post",t)}},{key:"GetList",value:function(e){var t="v2/tools/taskManages/projects?".concat(e.generateQueryString());return s.b.SendReq(t,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return s.b.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return s.b.SendReq(t,"Get")}},{key:"Add",value:function(e){return s.b.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return s.b.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return s.b.SendReq(n,"Delete")}}]),e}(),r=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return s.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return s.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.b.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.b.SendReq(o,"Delete")}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return s.b.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.b.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return s.b.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="tools/tasks/projects/".concat(e,"/settings/query?type=").concat(t);return s.b.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return s.b.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return s.b.SendReq(t,"Get",void 0,!0)}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return s.b.SendReq(n,"Get")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,o){var c="tools/tasks/projects/".concat(e,"/documents/folders?").concat(t.generateQueryString());return s.T.Get(c,n,a,o)}},{key:"GetDetail",value:function(e,t,n,a,o){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t);return s.T.Get(c,n,a,o)}},{key:"Add",value:function(e,t,n,a,o){var c="tools/tasks/projects/".concat(e,"/documents/folders");return s.T.Post(c,t,n,a,o)}},{key:"Edit",value:function(e,t,n,a,o,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t);return s.T.Put(r,n,a,o,c)}},{key:"Delete",value:function(e,t,n,a,o,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.T.Delete(r,a,o,c)}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,o){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs");return s.T.Get(c,n,a,o)}},{key:"GetDetail",value:function(e,t,n,a,o,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n);return s.T.Get(r,a,o,c)}},{key:"Add",value:function(e,t,n,a,o,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs");return s.T.Post(r,n,a,o,c)}},{key:"Edit",value:function(e,t,n,a,o,c,r){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n);return s.T.Put(u,a,o,c,r)}},{key:"Delete",value:function(e,t,n,a,o,c,r){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.T.Delete(u,o,c,r)}},{key:"RunApi",value:function(e,t,n,a,o,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"/runApi");return s.T.Post(r,{},a,o,c)}},{key:"SaveResponse",value:function(e,t,n,a,o,c,r){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"/responses");return s.T.Post(u,a,o,c,r)}}]),e}()}}]);
//# sourceMappingURL=602.d8e9693e.chunk.js.map