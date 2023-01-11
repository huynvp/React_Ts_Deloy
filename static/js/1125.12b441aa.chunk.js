"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[1125],{7335:function(e,t,n){n.d(t,{H:function(){return j}});var a=n(5671),o=n(3144),c=n(8047),s=n(2409),r=n(7123),u=n(1081),l=n(6106),i=n(914),v=n(6435),d=n(5581),p=n(2014),f=n(438),k=n.n(f),g=n(184),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,g.jsx)(c.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),j=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(y.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(r.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return k()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(r.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return k()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})})}},{key:"NumberColSpan",value:function(t){return(0,g.jsx)("div",{children:(0,g.jsxs)(l.Z,{className:t.className,children:[(0,g.jsx)(i.Z,{span:t.colSpan1,children:(0,g.jsx)("span",{children:t.label})}),(0,g.jsx)(i.Z,{span:t.colSpan2,children:(0,g.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(v.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=c.Z.TextArea;return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=c.Z.Password;return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=c.Z.Search;return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(d.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"Checkbox",value:function(e){return(0,g.jsx)(p.Z,{checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t.target.checked),void 0!==e.onChange&&e.onChange(t.target.checked)},children:e.label})}},{key:"File",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(c.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},2820:function(e,t,n){n.d(t,{C:function(){return s},R1:function(){return c},xv:function(){return o}});var a=n(184);function o(e){var t=e.children;return(0,a.jsx)("span",{children:t})}function c(e){var t=e.value;return(0,a.jsx)("strong",{children:t})}function s(e){var t=e.children;return(0,a.jsx)("span",{style:{wordBreak:"break-all"},children:t})}},8658:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(3433),o=n(7335),c=n(184);function s(e){var t,n,s,r,u,l,i,v,d,p,f,k,g,y,j,S,m,h,R,x;function M(t,n){var o=e.data;void 0===o[n]&&(o[n]={}),o[n].key=t,e.setData((0,a.Z)(e.data))}function q(t,n){var o=e.data;void 0===o[n]&&(o[n]={}),o[n].value=t,e.setData((0,a.Z)(e.data))}return(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:"Headers"}),(0,c.jsx)(o.H.Input,{label:"Key 1",value:null===(t=e.data[0])||void 0===t?void 0:t.key,setValue:function(e){M(e,0)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 1",value:null===(n=e.data[0])||void 0===n?void 0:n.value,setValue:function(e){q(e,0)}}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.H.Input,{label:"Key 2",value:null===(s=e.data[1])||void 0===s?void 0:s.key,setValue:function(e){M(e,1)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 2",value:null===(r=e.data[1])||void 0===r?void 0:r.value,setValue:function(e){q(e,1)}}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.H.Input,{label:"Key 3",value:null===(u=e.data[2])||void 0===u?void 0:u.key,setValue:function(e){M(e,2)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 3",value:null===(l=e.data[2])||void 0===l?void 0:l.value,setValue:function(e){q(e,2)}}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.H.Input,{label:"Key 4",value:null===(i=e.data[3])||void 0===i?void 0:i.key,setValue:function(e){M(e,3)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 4",value:null===(v=e.data[3])||void 0===v?void 0:v.value,setValue:function(e){q(e,3)}}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.H.Input,{label:"Key 5",value:null===(d=e.data[4])||void 0===d?void 0:d.key,setValue:function(e){M(e,4)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 5",value:null===(p=e.data[4])||void 0===p?void 0:p.value,setValue:function(e){q(e,4)}}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.H.Input,{label:"Key 6",value:null===(f=e.data[5])||void 0===f?void 0:f.key,setValue:function(e){M(e,5)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 6",value:null===(k=e.data[5])||void 0===k?void 0:k.value,setValue:function(e){q(e,5)}}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.H.Input,{label:"Key 7",value:null===(g=e.data[6])||void 0===g?void 0:g.key,setValue:function(e){M(e,6)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 7",value:null===(y=e.data[6])||void 0===y?void 0:y.value,setValue:function(e){q(e,6)}}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.H.Input,{label:"Key 8",value:null===(j=e.data[7])||void 0===j?void 0:j.key,setValue:function(e){M(e,7)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 8",value:null===(S=e.data[7])||void 0===S?void 0:S.value,setValue:function(e){q(e,7)}}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.H.Input,{label:"Key 9",value:null===(m=e.data[8])||void 0===m?void 0:m.key,setValue:function(e){M(e,8)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 9",value:null===(h=e.data[8])||void 0===h?void 0:h.value,setValue:function(e){q(e,8)}}),(0,c.jsx)("hr",{}),(0,c.jsx)(o.H.Input,{label:"Key 10",value:null===(R=e.data[9])||void 0===R?void 0:R.key,setValue:function(e){M(e,9)}}),(0,c.jsx)(o.H.TextArea,{label:"Value 10",value:null===(x=e.data[9])||void 0===x?void 0:x.value,setValue:function(e){q(e,9)}}),(0,c.jsx)("hr",{})]})}},3778:function(e,t,n){n.d(t,{Fn:function(){return s}});var a=n(5671),o=n(3144),c=n(8062),s=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){c.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){c.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,t,n,a){return(a.pageNumber-1)*a.pageSize+n+1}},{key:"PrintMsgSuccess_no_use",value:function(e){c.ZP.success(e.data.message)}}]),e}();s.GetIndexInArray=function(e,t,n){for(var a=-1,o=0;o<e.length;o++)if(e[o][t]===n){a=o;break}return a},s.GetIndexInArrayStr=function(e,t){for(var n=-1,a=0;a<e.length;a++)if(e[a].trim()===t.trim()){n=a;break}return n},s.SetPageInfo=function(e,t,n,a){var o=e.data.data.pageInfo;t(o.totalCount),n(o.currentPage),a(o.pageSize)},s.GetTimestamp=function(e,t){try{return null===t||void 0===t?e.data.timestamp:(t.timestamp=e.data.timestamp,t)}catch(n){console.log(n)}},s.GetTimestamp_no_use=function(e,t){try{return null===t||void 0===t?e.data.data.timestamp:(t.timestamp=e.data.data.timestamp,t)}catch(n){console.log(n)}}},5349:function(e,t,n){n.d(t,{GH:function(){return g},Lc:function(){return k},NX:function(){return u},RC:function(){return l},Su:function(){return i},Tz:function(){return p},Zg:function(){return v},bY:function(){return s},gU:function(){return r},iL:function(){return y},jz:function(){return d},zy:function(){return f}});var a=n(5671),o=n(3144),c=n(1285),s=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(c.p.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetStatistic",value:function(){return c.p.SendReq("v2/tools/taskManages/projects/statistic","Get")}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return c.p.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return c.p.SendReq(n,"Post",t)}},{key:"GetList",value:function(e){var t="v2/tools/taskManages/projects?".concat(e.generateQueryString());return c.p.SendReq(t,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return c.p.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return c.p.SendReq(t,"Get")}},{key:"Add",value:function(e){return c.p.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return c.p.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return c.p.SendReq(n,"Delete")}}]),e}(),r=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return c.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return c.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return c.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return c.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return c.p.SendReq(o,"Delete")}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return c.p.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return c.p.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return c.p.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/query?type=").concat(t);return c.p.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return c.p.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return c.p.SendReq(t,"Get",void 0,!0)}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return c.p.SendReq(n,"Get")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders?").concat(t.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return c.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return c.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return c.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return c.p.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/exec");return c.p.SendReq(a,"Get")}},{key:"Query",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/apis/query?q=").concat(t);return c.p.SendReq(n,"Get")}}]),e}(),p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Getlist",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return c.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a);return c.p.SendReq(o,"Get")}},{key:"SaveResponse",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return c.p.SendReq(o,"Post",a)}},{key:"Delete",value:function(e,t,n,a,o){var s="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a,"?timestamp=").concat(encodeURIComponent(o));return c.p.SendReq(s,"Delete")}}]),e}(),f=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e){var t="v2/tools/taskManages/workflows?".concat(e.generateQueryString());return c.p.SendReq(t,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}}]),e}(),k=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details?").concat(e.generateQueryString(),"&orders=true");return c.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return c.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details");return c.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return c.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return c.p.SendReq(o,"Delete")}},{key:"SwapOrder",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details/").concat(e,"/swapOrders?isNext=").concat(a);return c.p.SendReq(o,"Post")}}]),e}(),g=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories?").concat(e.generateQueryString());return c.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e);return c.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories");return c.p.SendReq(a,"Post",e)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e);return c.p.SendReq(o,"Put",t)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e,"?timestamp=").concat(encodeURIComponent(t));return c.p.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e,"/exec");return c.p.SendReq(a,"Get")}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(t,"/documentApi/public?").concat(e.generateQueryString());return c.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return c.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public");return c.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return c.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return c.p.SendReq(a,"Delete")}},{key:"GetListDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return c.p.SendReq(n,"Get")}},{key:"UpdateDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return c.p.SendReq(a,"Post",n)}}]),e}()},7121:function(){}}]);
//# sourceMappingURL=1125.12b441aa.chunk.js.map