"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[822],{7335:function(e,n,t){t.d(n,{H:function(){return y}});var a=t(5671),u=t(3144),i=t(940),r=t(1095),l=t(7123),o=t(3344),s=t(6106),c=t(914),d=t(6435),v=t(5581),f=t(2426),h=t.n(f),m=t(184),g=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"Input",value:function(e){return(0,m.jsx)(i.Z,{onClick:e.onClick,value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"Input",value:function(e){return(0,m.jsx)(r.Z.Item,{label:e.label,children:(0,m.jsx)(g.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,m.jsx)(r.Z.Item,{label:e.label,children:(0,m.jsx)(l.Z,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return h()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,m.jsx)(r.Z.Item,{label:e.label,children:(0,m.jsx)(l.Z,{showTime:!0,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return h()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,m.jsx)(o.Z,{min:e.min,max:e.max,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)}})}},{key:"NumberColSpan",value:function(n){return(0,m.jsx)("div",{children:(0,m.jsxs)(s.Z,{className:n.className,children:[(0,m.jsx)(c.Z,{span:n.colSpan1,children:(0,m.jsx)("span",{children:n.label})}),(0,m.jsx)(c.Z,{span:n.colSpan2,children:(0,m.jsx)(e.Number,{min:n.min,max:n.max,value:n.value,setValue:n.setValue})})]})})}},{key:"Select",value:function(e){return(0,m.jsx)(r.Z.Item,{label:e.label,children:(0,m.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"TextArea",value:function(e){var n=i.Z.TextArea;return(0,m.jsx)(r.Z.Item,{label:e.label,children:(0,m.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Password",value:function(e){var n=i.Z.Password;return(0,m.jsx)(r.Z.Item,{label:e.label,children:(0,m.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Search",value:function(e){var n=i.Z.Search;return(0,m.jsx)(r.Z.Item,{label:e.label,children:(0,m.jsx)(n,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Switch",value:function(e){return(0,m.jsx)(r.Z.Item,{label:e.label,children:(0,m.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"File",value:function(e){return(0,m.jsx)(r.Z.Item,{label:e.label,children:(0,m.jsx)(i.Z,{type:"file",onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.files[0])}})})}}]),e}()},8071:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(9439),u=t(2684),i=t(8885),r=t(1095),l=t(2791),o=t(3120),s=t(3778),c=t(7335),d=t(184);function v(e){var n=e.muityChoose;void 0===n&&(n=!1);var t=(0,l.useState)(!1),v=(0,a.Z)(t,2),f=v[0],h=v[1];return(0,l.useEffect)((function(){}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(c.H.Input,{label:e.label,onClick:function(){h(!0)},readOnly:!0,value:e.resultName}),(0,d.jsx)(i.Z,{placement:"top",open:f,onClose:function(){h(!1)},children:(0,d.jsxs)("div",{children:[(0,d.jsx)(o.Z,{isLoading:e.isLoading}),(0,d.jsx)(u.O,{value:"X\xf3a t\xecm ki\u1ebfm",onClick:function(){e.setResultKey(""),e.setResultName("")}}),(0,d.jsx)(c.H.Input,{readOnly:!0,label:"K\u1ebft qu\u1ea3",value:e.resultName}),(0,d.jsx)(r.Z,{children:(0,d.jsx)(c.H.Search,{label:"T\xecm ki\u1ebfm",onSearch:function(n){e.onSearch(n)}})}),e.dataSearch.map((function(t,a){return(0,d.jsx)(u.O,{value:t.value,onClick:function(){return function(t){if(console.log(t),!0===n){var a=e.resultName.split(",");if(-1!==s.Fn.GetIndexInArrayStr(a,t.value))return void console.log("EXIST ARRAY");e.setResultKey("".concat(e.resultKey).concat(""!==e.resultKey?", ":"").concat(t.key)),e.setResultName("".concat(e.resultName).concat(""!==e.resultName?", ":"").concat(t.value))}else e.setResultKey(t.key),e.setResultName(t.value)}(t)}},t.key)}))]})})]})}},698:function(e,n,t){t.d(n,{C:function(){return r},D:function(){return i}});var a=t(5671),u=t(3144),i=function(){function e(n){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==n){var t=n.data.pageInfo;this.total=t.totalCount,this.pageNumber=t.currentPage,this.pageSize=t.pageSize}}return(0,u.Z)(e,[{key:"handleChangePage",value:function(n,t,a){this.pageNumber=n,this.pageSize=t,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(n,t,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(n,t){t(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:n}}}))}}]),e}(),r=function(){function e(n,t){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==n&&(this.column=n,this.esc=t)}return(0,u.Z)(e,[{key:"setColumn",value:function(n,t){t(new e(n,this.esc))}},{key:"setDesc",value:function(n,t){t(new e(this.column,n))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(9439),u=t(6106),i=t(914),r=t(5581),l=t(9221),o=t(8245),s=t(2791),c=t(7335),d=t(9256),v=t(2684),f=(t(1708),t(184));function h(e){var n=e.pageInfo,t=e.orderBy,h=(0,s.useState)([]),m=(0,a.Z)(h,2),g=m[0],y=m[1],p=(0,s.useState)(100),k=(0,a.Z)(p,2),S=k[0],b=k[1],x=e.loadData;(0,s.useEffect)((function(){var e=setInterval((function(){b(S-1),1===S&&(b(100),x())}),1e3);return function(){return clearInterval(e)}}),[S,b,x]);var Z=(0,s.useCallback)((function(){if(void 0!==e.column){var n=e.column.map((function(e,n){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}}),[]);y(n)}}),[e.column]);return(0,s.useEffect)((function(){Z()}),[Z]),(0,f.jsxs)("div",{className:"my_table",children:[(0,f.jsx)(d.xu,{children:(0,f.jsxs)(u.Z,{gutter:16,children:[(0,f.jsx)(i.Z,{span:6,children:(0,f.jsx)(v.O,{type:"secondary",value:"Refresh data in ".concat(S),onClick:function(){e.loadData()}})}),(0,f.jsx)(i.Z,{span:12,children:(0,f.jsx)(c.H.Select,{value:null===t||void 0===t?void 0:t.column,onChange:function(n){t.setColumn(n,e.setOrderBy)},options:e.column})}),(0,f.jsx)(i.Z,{span:6,children:(0,f.jsx)(r.Z,{disabled:""===(null===t||void 0===t?void 0:t.column),checked:null===t||void 0===t?void 0:t.esc,onChange:function(n){console.log(n),t.setDesc(n,e.setOrderBy)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,f.jsx)(i.Z,{span:12,children:(0,f.jsx)(l.Z,{style:{display:n.showPagination?"":"none"},current:n.pageNumber,disabled:e.loading,onChange:function(t,a){n.handleChangePage(t,a,e.setPageInfo)},pageSize:n.pageSize,total:n.total})})]})}),(0,f.jsx)(o.Z,{scroll:{y:e.scroll},rowClassName:e.rowClassName,style:{paddingTop:"10px"},bordered:!0,loading:e.loading,pagination:!1,dataSource:e.dataSource,size:"small",columns:g})]})}},8776:function(e,n,t){t.d(n,{E:function(){return l},y:function(){return r}});var a=t(2426),u=t.n(a),i=t(184);function r(e){var n="";return n=void 0!==e.value&&""!==e.value&&null!==e.value?u()(e.value).format("DD/MM/YYYY"):"",(0,i.jsx)("span",{children:n})}function l(e){var n="";return n=void 0!==e.value&&""!==e.value&&null!==e.value?u()(e.value).format("DD/MM/YYYY HH:mm:ss"):"",(0,i.jsx)("span",{children:n})}},6822:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var a=t(9439),u=t(2791),i=t(3778),r=t(2611),l=t(2496),o=t(9256),s=t(2684),c=t(698),d=t(3977),v=t(8776),f=t(8885),h=t(1095),m=t(1830),g=t.n(m),y=t(7335),p=t(8071),k=t(184);function S(e){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),r=t[0],o=t[1],c=(0,u.useState)(null),d=(0,a.Z)(c,2),v=d[0],m=d[1],S=(0,u.useState)(null),b=(0,a.Z)(S,2),x=b[0],Z=b[1],C=(0,u.useState)(null),j=(0,a.Z)(C,2),D=j[0],R=j[1],G=(0,u.useState)(null),I=(0,a.Z)(G,2),w=I[0],N=I[1],q=e.isLoading,V=e.setIsLoading,P=e.keyData,T=e.setKeyData,L=e.visible,M=e.setVisible,O=e.loadData,z=(0,u.useCallback)((function(){void 0!==P&&(V(!0),l.hl.GetDetail(P).then((function(e){e.isSuccess&&(R(e.data.title),N(e.data.route),null!==e.data.parent&&(m(e.data.parent.key),Z(e.data.parent.title+" - "+e.data.parent.route)))})).finally((function(){return V(!1)})))}),[P,V]);function Y(){M(!1),void 0!==P&&T(void 0),R(null),N(null),m(null),Z(null)}return(0,u.useEffect)((function(){z()}),[z]),(0,k.jsx)(f.Z,{open:L,title:void 0===P?"Th\xeam m\u1edbi menu":"Ch\u1ec9nh s\u1eeda menu",onClose:Y,children:(0,k.jsxs)(h.Z,{layout:"vertical",children:[(0,k.jsx)(y.H.Input,{label:"Title",value:D,setValue:R}),(0,k.jsx)(y.H.Input,{label:"Route",value:w,setValue:N}),(0,k.jsx)(p.Z,{label:"Parent",onSearch:function(e){V(!0),l.hl.Query(e).then((function(e){e.isSuccess&&o(e.data)})).finally((function(){return V(!1)}))},dataSearch:r,resultKey:v,resultName:x,setResultKey:m,setResultName:Z,isLoading:q}),(0,k.jsx)(s.O,{value:void 0===P?"Th\xeam m\u1edbi":"Ch\u1ec9nh s\u1eeda",type:"success",isLoading:q,onClick:function(){var e={title:D,route:w,parentKey:void 0===v||""===v||null===v?null:v};V(!0),void 0===P?function(e){l.hl.Add(e).then((function(e){e.isSuccess?(i.Fn.PrintMsgSuccessV2(e),O()):V(!1)})).finally((function(){return V(!1)}))}(e):function(e){l.hl.GetDetail(P).then((function(n){n.isSuccess&&(e=i.Fn.GetTimestampV2(n,e),l.hl.Edit(P,e).then((function(e){e.isSuccess?(i.Fn.PrintMsgSuccessV2(e),O()):V(!1)})).finally((function(){return V(!1)})))}))}(e)}}),(0,k.jsx)(s.O,{value:"X\xf3a",type:"danger",isLoading:q,onClick:function(e){g().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng?"}).then((function(e){e.isConfirmed&&l.hl.GetDetail(P).then((function(e){e.isSuccess&&l.hl.Delete(P,i.Fn.GetTimestampV2(e)).then((function(e){e.isSuccess?(i.Fn.PrintMsgSuccessV2(e),O(),Y()):V(!1)})).finally((function(){return V(!1)}))}))}))}})]})})}function b(){var e=[new r.Dw({title:"STT",key:"stt",render:function(e,n,t){return i.Fn.RenderSTT(e,n,t,f)}}),new r.Dw({title:"Title",key:"title",render:function(e,n){return(0,k.jsx)(s.O,{type:"link",value:e,onClick:function(){var e;e=n.key,L(!0),Y(e)}})}}),new r.Dw({title:"Route",key:"route"}),new r.Dw({title:"Parent",key:"parent",render:function(e){return(0,k.jsx)("span",{children:null===e?"*** Root ***":e.title})}}),new r.Dw({title:"Ng\xe0y t\u1ea1o",key:"createdAt",render:function(e){return(0,k.jsx)(v.E,{value:e})}}),new r.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i",key:"updatedAt",render:function(e){return(0,k.jsx)(v.E,{value:e})}})],n=(0,u.useState)(new c.D),t=(0,a.Z)(n,2),f=t[0],h=t[1],m=(0,u.useState)(new c.C),g=(0,a.Z)(m,2),y=g[0],p=g[1],b=(0,u.useState)([]),x=(0,a.Z)(b,2),Z=x[0],C=x[1],j=(0,u.useState)(!1),D=(0,a.Z)(j,2),R=D[0],G=D[1],I=(0,u.useState)(!1),w=(0,a.Z)(I,2),N=w[0],q=w[1],V=(0,u.useState)(!1),P=(0,a.Z)(V,2),T=P[0],L=P[1],M=(0,u.useState)(void 0),O=(0,a.Z)(M,2),z=O[0],Y=O[1],A=(0,u.useCallback)((function(){G(!0);var e=new r.LY(f.pageNumber,f.pageSize,y);l.hl.GetList(e).then((function(e){e.isSuccess&&(h(new c.D(e)),C(e.data.pagedData))})).finally((function(){return G(!1)}))}),[f.pageNumber,f.pageSize,y]);function E(){q(!0)}return(0,u.useEffect)((function(){A()}),[A]),(0,k.jsxs)(o.ts,{title:"Qu\u1ea3n l\xfd menu",isLoading:R,buttonList:function(){return(0,k.jsx)(s.O,{type:"primary",value:"Th\xeam m\u1edbi",onClick:E})},children:[(0,k.jsx)(d.Z,{pageInfo:f,setPageInfo:h,column:e,dataSource:Z,loading:R,loadData:A,orderBy:y,setOrderBy:p}),(0,k.jsx)(S,{visible:N,setVisible:q,isLoading:R,setIsLoading:G,loadData:A}),(0,k.jsx)(S,{keyData:z,setKeyData:Y,visible:T,setVisible:L,isLoading:R,setIsLoading:G,loadData:A})]})}},2611:function(e,n,t){t.d(n,{Dw:function(){return i},LY:function(){return r}});var a=t(3144),u=t(5671),i=(0,a.Z)((function e(n){(0,u.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=n.title,this.key=n.key,void 0===n.dataIndex?this.dataIndex=n.key:this.dataIndex=n.dataIndex,this.render=n.render,this.className=n.className,this.width=n.width,this.label=n.title,this.value=n.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==n.disabled&&(this.disabled=n.disabled)})),r=function(){function e(n,t,a){(0,u.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=n,this.pageSize=t,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},2496:function(e,n,t){t.d(n,{Cp:function(){return s},KH:function(){return c},PH:function(){return r},eV:function(){return l},hl:function(){return d},rG:function(){return o}});var a=t(5671),u=t(3144),i=t(1285),r=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/templates?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/templates/".concat(e);return i.b.SendReq(n,"Get")}},{key:"Detail",value:function(e){var n="v2/mails/templates/".concat(e);return i.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return i.b.SendReq("v2/mails/templates","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/templates/".concat(e);return i.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/templates/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.b.SendReq(t,"Delete")}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/apps?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/apps/".concat(e);return i.b.SendReq(n,"get")}},{key:"Add",value:function(e){return i.b.SendReq("v2/mails/apps","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/apps/".concat(e);return i.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/apps/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.b.SendReq(t,"Delete")}},{key:"GetTemplate",value:function(e){var n="v2/mails/apps/".concat(e,"/templates");return i.b.SendReq(n,"Get")}},{key:"SaveTemplate",value:function(e,n){var t="v2/mails/apps/".concat(e,"/templates");return i.b.SendReq(t,"Put",n)}}]),e}(),o=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e,n,t,a){var u="storedManage?".concat(e.generateQueryString());return i.T.Get(u,n,t,a)}},{key:"GetDetail",value:function(e,n,t,a){var u="storedManage/".concat(e);return i.T.Get(u,n,t,a)}},{key:"Add",value:function(e,n,t,a){return i.T.Post("storedManage",e,n,t,a)}},{key:"Edit",value:function(e,n,t,a,u){var r="storedManage/".concat(e);return i.T.Put(r,n,t,a,u)}},{key:"Delete",value:function(e,n,t,a,u){var r="storedManage/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.T.Delete(r,t,a,u)}},{key:"SearchName",value:function(e,n,t,a){var u="storedManage/queryStored?query=".concat(e);return i.T.Get(u,n,t,a)}},{key:"GetLinkStored",value:function(e,n,t,a,u){var r;return r=void 0!==e?"storedManage/".concat(e,"/linkStored"):"storedManage/linkStored?".concat(null===n||void 0===n?void 0:n.generateQueryString()),i.T.Get(r,t,a,u)}},{key:"GetDetailLinkStored",value:function(e,n,t,a){var u="storedManage/linkStored/".concat(e);return i.T.Get(u,n,t,a)}},{key:"AddLinkStored",value:function(e,n,t,a){return i.T.Post("storedManage/linkStored",e,n,t,a)}},{key:"EditLinkStored",value:function(e,n,t,a,u){var r="storedManage/linkStored/".concat(e);return i.T.Put(r,n,t,a,u)}},{key:"DeleteLinkStored",value:function(e,n,t,a,u){var r="storedManage/linkStored/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.T.Delete(r,t,a,u)}}]),e}(),s=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(){return i.b.SendReq("v2/mains/logging","Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/logging/".concat(e);return i.b.SendReq(n,"Get")}},{key:"GetListLogAction",value:function(e){var n="v2/mains/logging/logActions?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"ReportDetail",value:function(){return i.b.SendReq("v2/mains/logging/report","Get")}},{key:"GetChart",value:function(e){var n="v2/mains/logging/chart?numberItem=".concat(e);return i.b.SendReq(n,"Get")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/versionManages?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/versionManages/".concat(e);return i.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return i.b.SendReq("v2/mains/versionManages","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/versionManages/".concat(e);return i.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/versionManages/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.b.SendReq(t,"Delete")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,u.Z)(e,null,[{key:"GetList",value:function(e){var n="admin/menus?".concat(e.generateQueryString());return i.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="admin/menus/".concat(e);return i.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return i.b.SendReq("admin/menus","Post",e)}},{key:"Edit",value:function(e,n){var t="admin/menus/".concat(e);return i.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="admin/menus/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return i.b.SendReq(t,"Delete")}},{key:"Query",value:function(e){var n="admin/menus/query?data=".concat(e);return i.b.SendReq(n,"Get")}}]),e}()}}]);
//# sourceMappingURL=822.643561bb.chunk.js.map