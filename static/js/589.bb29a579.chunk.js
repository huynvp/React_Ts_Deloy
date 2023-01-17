"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[589],{7335:function(e,t,n){n.d(t,{H:function(){return S}});var a=n(5671),o=n(3144),c=n(8047),s=n(2409),r=n(7123),u=n(1081),l=n(6106),i=n(914),v=n(6435),p=n(5581),d=n(2014),f=n(438),k=n.n(f),g=n(184),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,g.jsx)(c.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),S=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(y.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(r.Z,{value:k()(e.value),onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return k()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(r.Z,{showTime:!0,value:k()(e.value),onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return k()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})})}},{key:"NumberColSpan",value:function(t){return(0,g.jsx)("div",{children:(0,g.jsxs)(l.Z,{className:t.className,children:[(0,g.jsx)(i.Z,{span:t.colSpan1,children:(0,g.jsx)("span",{children:t.label})}),(0,g.jsx)(i.Z,{span:t.colSpan2,children:(0,g.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(v.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=c.Z.TextArea;return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=c.Z.Password;return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=c.Z.Search;return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(p.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"Checkbox",value:function(e){return(0,g.jsx)(d.Z,{checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t.target.checked),void 0!==e.onChange&&e.onChange(t.target.checked)},children:e.label})}},{key:"File",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(c.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},8589:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(9439),o=n(8062),c=n(2409),s=n(2791),r=n(7689),u=n(1830),l=n.n(u),i=n(3778),v=n(5349),p=n(7335),d=n(9256),f=n(2684),k=n(3433),g=n(6106),y=n(914),S=n(1087),m=n(184);function j(e){var t=e.projectKey,n=e.keyEdit,o=(0,s.useState)([]),c=(0,a.Z)(o,2),r=c[0],u=c[1],l=(0,s.useState)(),j=(0,a.Z)(l,2),h=j[0],M=j[1],R=(0,s.useCallback)((function(){v.bt.GetListDetail(t,n).then((function(e){e.isSuccess&&u(e.data)}))}),[t,n]);function q(e,t){r[t].check=e,u((0,k.Z)(r))}return(0,s.useEffect)((function(){R()}),[R]),(0,m.jsx)(d.xu,{children:(0,m.jsxs)(g.Z,{gutter:12,children:[(0,m.jsx)(y.Z,{span:24,children:(0,m.jsx)(p.H.Checkbox,{label:"Check all",value:h,setValue:M,onChange:function(e){r.map((function(t,n){return r[n].check=e,u((0,k.Z)(r)),1}))}})}),(0,m.jsx)(y.Z,{span:24,children:r.map((function(e,n){return(0,m.jsx)(d.xu,{children:(0,m.jsxs)(g.Z,{children:[(0,m.jsx)(y.Z,{span:12,children:(0,m.jsx)(S.rU,{to:"/tools/tasks/projects/".concat(t,"/codeManage/document/").concat(e.folderKey,"/apis/").concat(e.apiKey),children:e.name})}),(0,m.jsx)(y.Z,{span:12,children:(0,m.jsx)(p.H.Switch,{value:e.check,setValue:function(e){return q(e,n)}})})]})},n)}))}),(0,m.jsx)(y.Z,{span:24,children:(0,m.jsx)(f.O,{type:"success",value:"L\u01b0u danh s\xe1ch public API",onClick:function(){var e={details:r};v.bt.UpdateDetail(t,n,e).then((function(e){e.isSuccess&&i.Fn.PrintMsgSuccess(e)}))}})})]})})}function h(e){var t=(0,r.UO)().key,n=(0,r.UO)().projectKey,u=(0,s.useState)(!1),k=(0,a.Z)(u,2),g=k[0],y=k[1],S=(0,r.s0)(),h=(0,s.useState)(""),M=(0,a.Z)(h,2),R=M[0],q=M[1],G=(0,s.useState)(!1),b=(0,a.Z)(G,2),Z=b[0],x=b[1],C=(0,s.useCallback)((function(){void 0!==t&&(y(!0),v.bt.GetDetail(n,t).then((function(e){e.isSuccess&&(q(e.data.name),x(e.data.status))})).finally((function(){return y(!1)})))}),[y,n,t]);function D(e){var n="".concat(window.location.origin,"/docApis/").concat(t);0===e?(navigator.clipboard.writeText(n),o.ZP.success("Save link to clipboard")):S("/docApis/".concat(t))}return(0,s.useEffect)((function(){C()}),[C]),(0,m.jsx)(d.ts,{title:"Ch\u1ec9nh s\u1eeda",isLoading:g,children:(0,m.jsxs)(c.Z,{layout:"vertical",onSubmitCapture:function(){var e={name:R,status:Z?1:0};y(!0),void 0!==t?function(e){v.bt.GetDetail(n,t).then((function(a){a.isSuccess?(e=i.Fn.GetTimestamp(a,e),v.bt.Edit(n,t,e).then((function(e){e.isSuccess&&i.Fn.PrintMsgSuccess(e)})).finally((function(){return y(!1)}))):y(!1)}))}(e):function(e){v.bt.Add(n,e).then((function(e){e.isSuccess?(i.Fn.PrintMsgSuccess(e),S("/tools/tasks/projects/".concat(n,"/codeManage/document/publish/edit/").concat(e.data.key))):y(!1)}))}(e)},children:[(0,m.jsx)(p.H.Input,{label:"T\xean",value:R,setValue:q}),(0,m.jsx)(p.H.Switch,{label:"Public",value:Z,setValue:x,readOnly:void 0===t}),(0,m.jsx)(f.O,{htmlType:"submit",type:"success",isLoading:g,value:void 0!==t?"Ch\u1ec9nh s\u1eeda":"Th\xeam"}),(0,m.jsx)(f.O,{type:"danger",value:"X\xf3a",onClick:function(){l().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a data n\xe0y kh\xf4ng?"}).then((function(e){e.isConfirmed&&v.bt.GetDetail(n,t).then((function(e){e.isSuccess?v.bt.Delete(n,t,i.Fn.GetTimestamp(e)).then((function(e){e.isSuccess?(i.Fn.PrintMsgSuccess(e),S("/tools/tasks/projects/".concat(n,"/codeManage/document/publish"))):y(!1)})):y(!1)}))}))}}),(0,m.jsx)(f.O,{value:"Get link",type:"secondary",onClick:function(){D(0)}}),(0,m.jsx)(f.O,{value:"Go to public page",type:"warning",onClick:function(){D(1)}}),(0,m.jsx)(j,{projectKey:n,keyEdit:t})]})})}},3778:function(e,t,n){n.d(t,{Fn:function(){return s}});var a=n(5671),o=n(3144),c=n(8062),s=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){c.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){c.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,t,n,a){return(a.pageNumber-1)*a.pageSize+n+1}},{key:"PrintMsgSuccess_no_use",value:function(e){c.ZP.success(e.data.message)}}]),e}();s.GetIndexInArray=function(e,t,n){for(var a=-1,o=0;o<e.length;o++)if(e[o][t]===n){a=o;break}return a},s.GetIndexInArrayStr=function(e,t){for(var n=-1,a=0;a<e.length;a++)if(e[a].trim()===t.trim()){n=a;break}return n},s.SetPageInfo=function(e,t,n,a){var o=e.data.data.pageInfo;t(o.totalCount),n(o.currentPage),a(o.pageSize)},s.GetTimestamp=function(e,t){try{return null===t||void 0===t?e.data.timestamp:(t.timestamp=e.data.timestamp,t)}catch(n){console.log(n)}},s.GetTimestamp_no_use=function(e,t){try{return null===t||void 0===t?e.data.data.timestamp:(t.timestamp=e.data.data.timestamp,t)}catch(n){console.log(n)}}},5349:function(e,t,n){n.d(t,{GH:function(){return g},Lc:function(){return k},NX:function(){return u},RC:function(){return l},Su:function(){return i},Tz:function(){return d},Zg:function(){return v},bY:function(){return s},bt:function(){return y},gU:function(){return r},jz:function(){return p},zy:function(){return f}});var a=n(5671),o=n(3144),c=n(1285),s=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(c.p.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetStatistic",value:function(){return c.p.SendReq("v2/tools/taskManages/projects/statistic","Get")}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return c.p.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return c.p.SendReq(n,"Post",t)}},{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects?".concat(e.generateQueryString(),"&showIsClosed=").concat(t);return c.p.SendReq(n,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return c.p.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return c.p.SendReq(t,"Get")}},{key:"Add",value:function(e){return c.p.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return c.p.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return c.p.SendReq(n,"Delete")}}]),e}(),r=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return c.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return c.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return c.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return c.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return c.p.SendReq(o,"Delete")}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return c.p.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return c.p.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return c.p.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/query?type=").concat(t);return c.p.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return c.p.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return c.p.SendReq(t,"Get",void 0,!0)}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return c.p.SendReq(n,"Get")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders?").concat(t.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}}]),e}(),p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return c.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return c.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return c.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return c.p.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/exec");return c.p.SendReq(a,"Get")}},{key:"Query",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/apis/query?q=").concat(t);return c.p.SendReq(n,"Get")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Getlist",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return c.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a);return c.p.SendReq(o,"Get")}},{key:"SaveResponse",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return c.p.SendReq(o,"Post",a)}},{key:"Delete",value:function(e,t,n,a,o){var s="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a,"?timestamp=").concat(encodeURIComponent(o));return c.p.SendReq(s,"Delete")}}]),e}(),f=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e){var t="v2/tools/taskManages/workflows?".concat(e.generateQueryString());return c.p.SendReq(t,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}}]),e}(),k=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details?").concat(e.generateQueryString(),"&orders=true");return c.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return c.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details");return c.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return c.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return c.p.SendReq(o,"Delete")}},{key:"SwapOrder",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details/").concat(e,"/swapOrders?isNext=").concat(a);return c.p.SendReq(o,"Post")}}]),e}(),g=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories?").concat(e.generateQueryString());return c.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e);return c.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories");return c.p.SendReq(a,"Post",e)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e);return c.p.SendReq(o,"Put",t)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e,"?timestamp=").concat(encodeURIComponent(t));return c.p.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e,"/exec");return c.p.SendReq(a,"Get")}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(t,"/documentApi/public?").concat(e.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}},{key:"GetListDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return c.p.SendReq(n,"Get")}},{key:"UpdateDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return c.p.SendReq(a,"Post",n)}},{key:"GetListPublicDocument",value:function(e,t){return c.p.SendReqV2({url:"v2/tools/taskManages/publicDocuments/".concat(e,"?replaceVar=").concat(t),method:c.O.Get,isNoAuth:!0})}},{key:"GetListPublicDocumentResponse",value:function(e,t){return c.p.SendReqV2({url:"v2/tools/taskManages/publicDocuments/".concat(e,"/responses/").concat(t),method:c.O.Get,isNoAuth:!0})}}]),e}()}}]);
//# sourceMappingURL=589.bb29a579.chunk.js.map