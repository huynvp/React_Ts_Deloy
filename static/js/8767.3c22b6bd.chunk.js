"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[8767],{7335:function(e,n,t){t.d(n,{H:function(){return k}});var a=t(5671),u=t(3144),l=t(940),r=t(2409),o=t(7123),i=t(1081),s=t(6106),c=t(914),v=t(6435),d=t(5581),f=t(2426),m=t.n(f),b=t(184),g=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"Input",value:function(e){return(0,b.jsx)(l.Z,{onClick:e.onClick,value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),k=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"Input",value:function(e){return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(g.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(o.Z,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return m()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(o.Z,{showTime:!0,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return m()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(i.Z,{min:e.min,max:e.max,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)}})})}},{key:"NumberColSpan",value:function(n){return(0,b.jsx)("div",{children:(0,b.jsxs)(s.Z,{className:n.className,children:[(0,b.jsx)(c.Z,{span:n.colSpan1,children:(0,b.jsx)("span",{children:n.label})}),(0,b.jsx)(c.Z,{span:n.colSpan2,children:(0,b.jsx)(e.Number,{min:n.min,max:n.max,value:n.value,setValue:n.setValue})})]})})}},{key:"Select",value:function(e){return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(v.Z,{options:e.options,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"TextArea",value:function(e){var n=l.Z.TextArea;return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Password",value:function(e){var n=l.Z.Password;return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Search",value:function(e){var n=l.Z.Search;return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(n,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Switch",value:function(e){return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(d.Z,{loading:e.loading,checked:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"File",value:function(e){return(0,b.jsx)(r.Z.Item,{label:e.label,children:(0,b.jsx)(l.Z,{type:"file",onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.files[0])}})})}}]),e}()},8767:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(9439),u=t(9683),l=t(9256),r=t(8398),o=t(2791),i=t(2496),s=t(2684),c=t(7335),v=t(6106),d=t(914),f=t(2426),m=t.n(f),b=t(184);function g(){var e=(0,o.useState)(50),n=(0,a.Z)(e,2),t=n[0],r=n[1],f=(0,o.useState)({labels:[],datasets:[{label:"Load time",data:[],borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]}),g=(0,a.Z)(f,2),k=g[0],y=g[1],p=(0,o.useState)({labels:[],datasets:[{label:"Load time",data:[],borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]}),h=(0,a.Z)(p,2),S=h[0],C=h[1],x=(0,o.useCallback)((function(){i.Cp.GetChart(t).then((function(e){if(e.isSuccess){var n=e.data.listLabels.map((function(e){return m()(e).format("DD/MM/YYYY HH:mm:ss")}));y({labels:n,datasets:[{label:"Load time",data:e.data.listValueCountRequests,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]}),C({labels:n,datasets:[{label:"Load time avg",data:e.data.listValueAvgLoadTimes,borderColor:"rgb(29, 115, 238)",backgroundColor:"rgba(29, 115, 238, 0.5)"},{label:"Load time max",data:e.data.listValueMaxLoadTimes,borderColor:"rgb(255, 195, 0)",backgroundColor:"rgba(255, 195, 0, 0.5)"},{label:"Load time min",data:e.data.listValueMinLoadTimes,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"}]})}}))}),[t]);return(0,o.useEffect)((function(){x();var e=setInterval((function(){x()}),5e3);return function(){clearInterval(e)}}),[x]),(0,b.jsxs)(l.ts,{title:"Bi\u1ec3u \u0111\u1ed3",children:[(0,b.jsxs)(v.Z,{children:[(0,b.jsx)(d.Z,{span:12,children:(0,b.jsx)(s.O,{value:"Reload Data",onClick:x})}),(0,b.jsx)(d.Z,{span:12,children:(0,b.jsx)(c.H.Select,{options:[{key:50,value:50,label:50},{key:100,value:100,label:100},{key:150,value:150,label:150},{key:200,value:200,label:200},{key:250,value:250,label:250}],value:t,setValue:r})})]}),(0,b.jsx)(u.x1,{options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Count request chart"}}},data:k}),(0,b.jsx)(u.x1,{options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Load time server chart"}}},data:S})]})}r.kL.register(r.uw,r.f$,r.od,r.jn,r.Dx,r.u,r.De)},2496:function(e,n,t){t.d(n,{Cp:function(){return s},KH:function(){return c},PH:function(){return r},eV:function(){return o},hl:function(){return v},rG:function(){return i}});var a=t(5671),u=t(3144),l=t(1285),r=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/templates?".concat(e.generateQueryString());return l.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/templates/".concat(e);return l.b.SendReq(n,"Get")}},{key:"Detail",value:function(e){var n="v2/mails/templates/".concat(e);return l.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return l.b.SendReq("v2/mails/templates","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/templates/".concat(e);return l.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/templates/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return l.b.SendReq(t,"Delete")}}]),e}(),o=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/apps?".concat(e.generateQueryString());return l.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/apps/".concat(e);return l.b.SendReq(n,"get")}},{key:"Add",value:function(e){return l.b.SendReq("v2/mails/apps","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/apps/".concat(e);return l.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/apps/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return l.b.SendReq(t,"Delete")}},{key:"GetTemplate",value:function(e){var n="v2/mails/apps/".concat(e,"/templates");return l.b.SendReq(n,"Get")}},{key:"SaveTemplate",value:function(e,n){var t="v2/mails/apps/".concat(e,"/templates");return l.b.SendReq(t,"Put",n)}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e,n,t,a){}},{key:"GetDetail",value:function(e,n,t,a){}},{key:"Add",value:function(e,n,t,a){}},{key:"Edit",value:function(e,n,t,a,u){}},{key:"Delete",value:function(e,n,t,a,u){}},{key:"SearchName",value:function(e,n,t,a){}},{key:"GetLinkStored",value:function(e,n,t,a,u){}},{key:"GetDetailLinkStored",value:function(e,n,t,a){}},{key:"AddLinkStored",value:function(e,n,t,a){}},{key:"EditLinkStored",value:function(e,n,t,a,u){}},{key:"DeleteLinkStored",value:function(e,n,t,a,u){}}]),e}(),s=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(){return l.b.SendReq("v2/mains/logging","Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/logging/".concat(e);return l.b.SendReq(n,"Get")}},{key:"GetListLogAction",value:function(e){var n="v2/mains/logging/logActions?".concat(e.generateQueryString());return l.b.SendReq(n,"Get")}},{key:"ReportDetail",value:function(){return l.b.SendReq("v2/mains/logging/report","Get")}},{key:"GetChart",value:function(e){var n="v2/mains/logging/chart?numberItem=".concat(e);return l.b.SendReq(n,"Get")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/versionManages?".concat(e.generateQueryString());return l.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/versionManages/".concat(e);return l.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return l.b.SendReq("v2/mains/versionManages","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/versionManages/".concat(e);return l.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/versionManages/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return l.b.SendReq(t,"Delete")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/menus?".concat(e.generateQueryString());return l.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/menus/".concat(e);return l.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return l.b.SendReq("v2/mains/menus","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/menus/".concat(e);return l.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/menus/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return l.b.SendReq(t,"Delete")}},{key:"Query",value:function(e){var n="v2/mains/menus/query?q=".concat(e);return l.b.SendReq(n,"Get")}}]),e}()}}]);
//# sourceMappingURL=8767.3c22b6bd.chunk.js.map