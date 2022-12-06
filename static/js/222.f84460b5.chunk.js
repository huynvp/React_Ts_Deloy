"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[222],{7335:function(e,t,n){n.d(t,{H:function(){return y}});var a=n(5671),o=n(3144),s=n(940),i=n(2409),u=n(7123),c=n(3344),r=n(6106),l=n(914),d=n(6435),v=n(5581),f=n(2426),h=n.n(f),g=n(184),p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,g.jsx)(s.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,g.jsx)(i.Z.Item,{label:e.label,children:(0,g.jsx)(p.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,g.jsx)(i.Z.Item,{label:e.label,children:(0,g.jsx)(u.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return h()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,g.jsx)(i.Z.Item,{label:e.label,children:(0,g.jsx)(u.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return h()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,g.jsx)(c.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})}},{key:"NumberColSpan",value:function(t){return(0,g.jsx)("div",{children:(0,g.jsxs)(r.Z,{className:t.className,children:[(0,g.jsx)(l.Z,{span:t.colSpan1,children:(0,g.jsx)("span",{children:t.label})}),(0,g.jsx)(l.Z,{span:t.colSpan2,children:(0,g.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,g.jsx)(i.Z.Item,{label:e.label,children:(0,g.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=s.Z.TextArea;return(0,g.jsx)(i.Z.Item,{label:e.label,children:(0,g.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=s.Z.Password;return(0,g.jsx)(i.Z.Item,{label:e.label,children:(0,g.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=s.Z.Search;return(0,g.jsx)(i.Z.Item,{label:e.label,children:(0,g.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,g.jsx)(i.Z.Item,{label:e.label,children:(0,g.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"File",value:function(e){return(0,g.jsx)(i.Z.Item,{label:e.label,children:(0,g.jsx)(s.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},3120:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7083),o=n(7106),s=n(184),i=(0,s.jsx)(o.Z,{style:{fontSize:24}});function u(e){return(0,s.jsx)(a.Z,{size:"large",spinning:void 0!==e.isLoading&&e.isLoading,indicator:i})}},9256:function(e,t,n){n.d(t,{ts:function(){return c},xu:function(){return r}});var a=n(6106),o=n(914),s=n(1333),i=n(3120),u=n(184);function c(e){return(0,u.jsxs)("div",{className:"my-box",children:[(0,u.jsxs)(a.Z,{gutter:12,children:[(0,u.jsx)(o.Z,{span:12,children:(0,u.jsx)(s.Z,{orientation:"left",style:{borderTopColor:"#000"},children:(0,u.jsx)("h2",{style:{fontWeight:"bold"},children:e.title})})}),(0,u.jsx)(o.Z,{span:12,style:{textAlign:"right",paddingTop:"15px"},children:void 0!==e.buttonList?e.buttonList():""})]}),(0,u.jsx)(i.Z,{isLoading:e.isLoading}),(0,u.jsx)("div",{className:"my-box-children",style:{opacity:!0===e.isLoading?.2:1},children:e.children})]})}function r(e){return(0,u.jsxs)("div",{className:"".concat(!1!==e.showBox?"box":"box-no-border"," ").concat(e.className),style:e.style,children:[(0,u.jsx)(i.Z,{isLoading:e.isLoading}),(0,u.jsx)("div",{style:{display:!0===e.isLoading?"none":""},children:e.children})]})}},698:function(e,t,n){n.d(t,{C:function(){return i},D:function(){return s}});var a=n(5671),o=n(3144),s=function(){function e(t){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==t){var n=t.data.pageInfo;this.total=n.totalCount,this.pageNumber=n.currentPage,this.pageSize=n.pageSize}}return(0,o.Z)(e,[{key:"handleChangePage",value:function(t,n,a){this.pageNumber=t,this.pageSize=n,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(t,n,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(t,n){n(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:t}}}))}}]),e}(),i=function(){function e(t,n){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==t&&(this.column=t,this.esc=n)}return(0,o.Z)(e,[{key:"setColumn",value:function(t,n){n(new e(t,this.esc))}},{key:"setDesc",value:function(t,n){n(new e(this.column,t))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(9439),o=n(6106),s=n(914),i=n(5581),u=n(9221),c=n(8245),r=n(2791),l=n(7335),d=n(9256),v=n(2684),f=(n(1708),n(184));function h(e){var t=e.pageInfo,n=e.orderBy,h=(0,r.useState)([]),g=(0,a.Z)(h,2),p=g[0],y=g[1],k=(0,r.useState)(100),m=(0,a.Z)(k,2),j=m[0],S=m[1],b=e.loadData;(0,r.useEffect)((function(){var e=setInterval((function(){S(j-1),1===j&&(S(100),b())}),1e3);return function(){return clearInterval(e)}}),[j,S,b]);var x=(0,r.useCallback)((function(){if(void 0!==e.column){var t=e.column.map((function(e,t){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}}),[]);y(t)}}),[e.column]);return(0,r.useEffect)((function(){x()}),[x]),(0,f.jsxs)("div",{className:"my_table",children:[(0,f.jsx)(d.xu,{children:(0,f.jsxs)(o.Z,{gutter:16,children:[(0,f.jsx)(s.Z,{span:6,children:(0,f.jsx)(v.O,{type:"secondary",value:"Refresh data in ".concat(j),onClick:function(){e.loadData()}})}),(0,f.jsx)(s.Z,{span:12,children:(0,f.jsx)(l.H.Select,{value:null===n||void 0===n?void 0:n.column,onChange:function(t){n.setColumn(t,e.setOrderBy)},options:e.column})}),(0,f.jsx)(s.Z,{span:6,children:(0,f.jsx)(i.Z,{disabled:""===(null===n||void 0===n?void 0:n.column),checked:null===n||void 0===n?void 0:n.esc,onChange:function(t){console.log(t),n.setDesc(t,e.setOrderBy)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,f.jsx)(s.Z,{span:12,children:(0,f.jsx)(u.Z,{style:{display:t.showPagination?"":"none"},current:t.pageNumber,disabled:e.loading,onChange:function(n,a){t.handleChangePage(n,a,e.setPageInfo)},pageSize:t.pageSize,total:t.total})})]})}),(0,f.jsx)(c.Z,{scroll:{y:e.scroll},rowClassName:e.rowClassName,style:{paddingTop:"10px"},bordered:!0,loading:e.loading,pagination:!1,dataSource:e.dataSource,size:"small",columns:p})]})}},8776:function(e,t,n){n.d(t,{E:function(){return u},y:function(){return i}});var a=n(2426),o=n.n(a),s=n(184);function i(e){var t="";return t=void 0!==e.value&&""!==e.value&&null!==e.value?o()(e.value).format("DD/MM/YYYY"):"",(0,s.jsx)("span",{children:t})}function u(e){var t="";return t=void 0!==e.value&&""!==e.value&&null!==e.value?o()(e.value).format("DD/MM/YYYY HH:mm:ss"):"",(0,s.jsx)("span",{children:t})}},9222:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(9439),o=n(2791),s=n(7689),i=n(3778),u=n(2611),c=n(4492),r=n(9256),l=n(2684),d=n(698),v=n(3977),f=n(8776),h=n(8885),g=n(2409),p=n(6106),y=n(914),k=n(7335),m=n(184);function j(e){var t=e.visible,n=e.setVisible,s=e.keyData,i=e.projectKey,u=(0,o.useState)([]),l=(0,a.Z)(u,2),d=l[0],v=l[1],g=(0,o.useCallback)((function(){void 0!==s&&!1!==t&&c.Su.GetHistory(i,s).then((function(e){e.isSuccess&&v(e.data.pagedData)}))}),[s,i,t]);return(0,o.useEffect)((function(){g()}),[g]),(0,m.jsx)("div",{children:(0,m.jsx)(h.Z,{open:t,onClose:function(){n(!1)},children:d.map((function(e,t){return(0,m.jsxs)(r.xu,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"Gi\xe1 tr\u1ecb: "}),e.value]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"Th\u1eddi gian thay \u0111\u1ed5i: "}),(0,m.jsx)(f.E,{value:e.updatedAt})]})]},t)}))})})}function S(e){var t=(0,o.useState)(""),n=(0,a.Z)(t,2),s=n[0],u=n[1],r=(0,o.useState)(""),d=(0,a.Z)(r,2),v=d[0],f=d[1],S=(0,o.useState)(""),b=(0,a.Z)(S,2),x=b[0],Z=b[1],C=(0,o.useState)(!1),D=(0,a.Z)(C,2),G=D[0],R=D[1],V=e.loadData,M=e.keyData,I=e.setKeyData,q=e.projectKey,w=e.isLoading,L=e.setIsLoading,P=e.visible,T=e.setVisible,N=(0,o.useCallback)((function(){void 0!==M&&(L(!0),c.Su.GetDetail(q,M).then((function(e){e.isSuccess&&(u(e.data.name),f(e.data.initalValue),Z(e.data.currentValue))})).finally((function(){return L(!1)})))}),[M,q,L]);function z(){u(""),Z(""),f(""),T(!1),void 0!==I&&I(void 0)}return(0,o.useEffect)((function(){N()}),[N]),(0,m.jsxs)(h.Z,{open:P,onClose:z,title:void 0!==M?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi",children:[(0,m.jsxs)(g.Z,{onSubmitCapture:function(){var e={name:s,initalValue:v,currentValue:x};L(!0),void 0!==M?function(e){c.Su.GetDetail(q,M).then((function(t){t.isSuccess?(e=i.Fn.GetTimestampV2(t,e),c.Su.Edit(q,M,e).then((function(e){e.isSuccess?(i.Fn.PrintMsgSuccessV2(e),V()):L(!1)}))):L(!1)}))}(e):function(e){c.Su.Add(q,e).then((function(e){e.isSuccess&&(i.Fn.PrintMsgSuccessV2(e),z(),T(!1),V())})).finally((function(){return L(!1)}))}(e)},layout:"vertical",children:[(0,m.jsx)(k.H.Input,{label:"T\xean",value:s,setValue:u}),(0,m.jsx)(k.H.Input,{label:"Gi\xe1 tr\u1ecb kh\u1edfi t\u1ea1o",readOnly:void 0!==M,onChange:function(e){Z(e)},value:v,setValue:f}),(0,m.jsx)(k.H.Input,{label:"Gi\xe1 tr\u1ecb hi\u1ec7n t\u1ea1i",readOnly:void 0===M,value:x,setValue:Z}),(0,m.jsx)(p.Z,{children:(0,m.jsx)(y.Z,{children:(0,m.jsx)(l.O,{type:"link",value:"L\u1ecbch s\u1eed thay \u0111\u1ed5i",onClick:function(){R(!0)}})})}),(0,m.jsx)(l.O,{htmlType:"submit",type:"success",isLoading:w,value:void 0===M?"Th\xeam m\u1edbi":"Ch\u1ec9nh s\u1eeda"}),(0,m.jsx)(l.O,{type:"danger",onClick:function(){e.setIsLoading(!0),c.Su.GetDetail(q,M).then((function(e){e.isSuccess?c.Su.Delete(q,M,i.Fn.GetTimestampV2(e)).then((function(e){e.isSuccess?(i.Fn.PrintMsgSuccessV2(e),z(),T(!1),V()):L(!1)})):L(!1)}))},disabled:void 0===M,isLoading:w,value:"X\xf3a"})]}),(0,m.jsx)(j,{visible:G,setVisible:R,keyData:M,projectKey:q})]})}function b(){var e=(0,s.UO)().key,t=[new u.Dw({title:"STT",key:"stt",render:function(e,t,n){return i.Fn.RenderSTT(e,t,n,j)}}),new u.Dw({title:"T\xean",key:"name",render:function(e,t){return(0,m.jsx)(l.O,{type:"link",value:e,onClick:function(){var e;e=t.key,Y(e),z(!0)}})}}),new u.Dw({title:"Gi\xe1 tr\u1ecb kh\u1edfi t\u1ea1o",key:"initalValue"}),new u.Dw({title:"Gi\xe1 tr\u1ecb hi\u1ec7n t\u1ea1i",key:"currentValue"}),new u.Dw({title:"Ng\xe0y t\u1ea1o",key:"createdAt",render:function(e){return(0,m.jsx)(f.E,{value:e})}}),new u.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i",key:"updatedAt",render:function(e){return(0,m.jsx)(f.E,{value:e})}})],n=(0,o.useState)(!1),h=(0,a.Z)(n,2),g=h[0],p=h[1],y=(0,o.useState)(new d.D),k=(0,a.Z)(y,2),j=k[0],b=k[1],x=(0,o.useState)(new d.C),Z=(0,a.Z)(x,2),C=Z[0],D=Z[1],G=(0,o.useState)([]),R=(0,a.Z)(G,2),V=R[0],M=R[1],I=(0,o.useState)(!1),q=(0,a.Z)(I,2),w=q[0],L=q[1],P=(0,o.useState)(!1),T=(0,a.Z)(P,2),N=T[0],z=T[1],O=(0,o.useState)(),A=(0,a.Z)(O,2),E=A[0],Y=A[1],B=(0,o.useCallback)((function(){p(!0);var t=new u.LY(j.pageNumber,j.pageSize,C);c.Su.GetList(e,t).then((function(e){if(e.isSuccess){var t=e.data.pagedData.map((function(e,t){return{key:e.key,stt:t+1,name:e.name,initalValue:e.initalValue,currentValue:e.currentValue,createdAt:e.createdAt,updatedAt:e.updatedAt}}));M(t)}})).finally((function(){p(!1)}))}),[e,j.pageNumber,j.pageSize,C]);return(0,o.useEffect)((function(){B()}),[B]),(0,m.jsxs)(r.ts,{title:"Qu\u1ea3n l\xfd bi\u1ebfn",isLoading:g,children:[(0,m.jsx)(l.O,{type:"primary",value:"Th\xeam m\u1edbi",onClick:function(){L(!0)}}),(0,m.jsx)(v.Z,{pageInfo:j,setPageInfo:b,orderBy:C,setOrderBy:D,column:t,dataSource:V,loading:g,loadData:B}),(0,m.jsx)(S,{isLoading:g,setIsLoading:p,visible:w,setVisible:L,projectKey:e,loadData:B}),(0,m.jsx)(S,{isLoading:g,setIsLoading:p,visible:N,setVisible:z,keyData:E,setKeyData:Y,projectKey:e,loadData:B})]})}},2611:function(e,t,n){n.d(t,{Dw:function(){return s},LY:function(){return i}});var a=n(3144),o=n(5671),s=(0,a.Z)((function e(t){(0,o.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=t.title,this.key=t.key,void 0===t.dataIndex?this.dataIndex=t.key:this.dataIndex=t.dataIndex,this.render=t.render,this.className=t.className,this.width=t.width,this.label=t.title,this.value=t.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==t.disabled&&(this.disabled=t.disabled)})),i=function(){function e(t,n,a){(0,o.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=t,this.pageSize=n,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},4492:function(e,t,n){n.d(t,{NX:function(){return c},RC:function(){return r},Su:function(){return l},Zg:function(){return d},bY:function(){return i},gU:function(){return u},jz:function(){return v}});var a=n(5671),o=n(3144),s=n(1285),i=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(s.b.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.b.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.b.SendReq(n,"Post",t)}},{key:"GetList",value:function(e){var t="v2/tools/taskManages/projects?".concat(e.generateQueryString());return s.b.SendReq(t,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return s.b.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return s.b.SendReq(t,"Get")}},{key:"Add",value:function(e){return s.b.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return s.b.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return s.b.SendReq(n,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return s.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return s.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.b.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.b.SendReq(o,"Delete")}}]),e}(),r=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return s.b.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.b.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return s.b.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="tools/tasks/projects/".concat(e,"/settings/query?type=").concat(t);return s.b.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return s.b.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return s.b.SendReq(t,"Get",void 0,!0)}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return s.b.SendReq(n,"Get")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,o){var i="tools/tasks/projects/".concat(e,"/documents/folders?").concat(t.generateQueryString());return s.T.Get(i,n,a,o)}},{key:"GetDetail",value:function(e,t,n,a,o){var i="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t);return s.T.Get(i,n,a,o)}},{key:"Add",value:function(e,t,n,a,o){var i="tools/tasks/projects/".concat(e,"/documents/folders");return s.T.Post(i,t,n,a,o)}},{key:"Edit",value:function(e,t,n,a,o,i){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t);return s.T.Put(u,n,a,o,i)}},{key:"Delete",value:function(e,t,n,a,o,i){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.T.Delete(u,a,o,i)}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,o){var i="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs");return s.T.Get(i,n,a,o)}},{key:"GetDetail",value:function(e,t,n,a,o,i){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n);return s.T.Get(u,a,o,i)}},{key:"Add",value:function(e,t,n,a,o,i){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs");return s.T.Post(u,n,a,o,i)}},{key:"Edit",value:function(e,t,n,a,o,i,u){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n);return s.T.Put(c,a,o,i,u)}},{key:"Delete",value:function(e,t,n,a,o,i,u){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.T.Delete(c,o,i,u)}},{key:"RunApi",value:function(e,t,n,a,o,i){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"/runApi");return s.T.Post(u,{},a,o,i)}},{key:"SaveResponse",value:function(e,t,n,a,o,i,u){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"/responses");return s.T.Post(c,a,o,i,u)}}]),e}()}}]);
//# sourceMappingURL=222.f84460b5.chunk.js.map