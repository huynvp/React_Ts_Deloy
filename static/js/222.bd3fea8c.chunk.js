"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[222],{7335:function(e,t,n){n.d(t,{H:function(){return k}});var a=n(5671),o=n(3144),s=n(940),r=n(2409),u=n(7123),i=n(3344),c=n(6106),l=n(914),d=n(6435),v=n(5581),f=n(2426),g=n.n(f),p=n(184),h=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,p.jsx)(s.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),k=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,p.jsx)(r.Z.Item,{label:e.label,children:(0,p.jsx)(h.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,p.jsx)(r.Z.Item,{label:e.label,children:(0,p.jsx)(u.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return g()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,p.jsx)(r.Z.Item,{label:e.label,children:(0,p.jsx)(u.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return g()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,p.jsx)(i.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})}},{key:"NumberColSpan",value:function(t){return(0,p.jsx)("div",{children:(0,p.jsxs)(c.Z,{className:t.className,children:[(0,p.jsx)(l.Z,{span:t.colSpan1,children:(0,p.jsx)("span",{children:t.label})}),(0,p.jsx)(l.Z,{span:t.colSpan2,children:(0,p.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,p.jsx)(r.Z.Item,{label:e.label,children:(0,p.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=s.Z.TextArea;return(0,p.jsx)(r.Z.Item,{label:e.label,children:(0,p.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=s.Z.Password;return(0,p.jsx)(r.Z.Item,{label:e.label,children:(0,p.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=s.Z.Search;return(0,p.jsx)(r.Z.Item,{label:e.label,children:(0,p.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,p.jsx)(r.Z.Item,{label:e.label,children:(0,p.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"File",value:function(e){return(0,p.jsx)(r.Z.Item,{label:e.label,children:(0,p.jsx)(s.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},698:function(e,t,n){n.d(t,{C:function(){return r},D:function(){return s}});var a=n(5671),o=n(3144),s=function(){function e(t){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==t){var n=t.data.pageInfo;this.total=n.totalCount,this.pageNumber=n.currentPage,this.pageSize=n.pageSize}}return(0,o.Z)(e,[{key:"handleChangePage",value:function(t,n,a){this.pageNumber=t,this.pageSize=n,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(t,n,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(t,n){n(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:t}}}))}}]),e}(),r=function(){function e(t,n){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==t&&(this.column=t,this.esc=n)}return(0,o.Z)(e,[{key:"setColumn",value:function(t,n){n(new e(t,this.esc))}},{key:"setDesc",value:function(t,n){n(new e(this.column,t))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(9439),o=n(6106),s=n(914),r=n(5581),u=n(9221),i=n(8245),c=n(2791),l=n(7335),d=n(9256),v=n(2684),f=(n(1708),n(184));function g(e){var t=e.column,n=e.setOrderBy,g=e.setPageInfo,p=e.loading,h=e.dataSource,k=e.scroll,y=e.rowClassName,S=e.loadData,m=e.pageInfo,b=e.orderBy,j=(0,c.useState)([]),x=(0,a.Z)(j,2),Z=x[0],C=x[1],M=(0,c.useState)(100),R=(0,a.Z)(M,2),D=R[0],G=R[1];(0,c.useEffect)((function(){var e=setInterval((function(){G(D-1),1===D&&(G(100),S())}),1e3);return function(){return clearInterval(e)}}),[D,G,S]);var q=(0,c.useCallback)((function(){void 0!==t&&C(t.map((function(e,t){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}})))}),[t]);return(0,c.useEffect)((function(){q()}),[q]),(0,f.jsxs)("div",{className:"my_table",children:[(0,f.jsx)(d.xu,{children:(0,f.jsxs)(o.Z,{gutter:16,children:[(0,f.jsx)(s.Z,{span:6,children:(0,f.jsx)(v.O,{type:"secondary",value:"Refresh data in ".concat(D),isLoading:p,onClick:function(){S()}})}),(0,f.jsx)(s.Z,{span:12,children:(0,f.jsx)(l.H.Select,{value:null===b||void 0===b?void 0:b.column,onChange:function(e){b.setColumn(e,n)},options:t})}),(0,f.jsx)(s.Z,{span:6,children:(0,f.jsx)(r.Z,{disabled:""===(null===b||void 0===b?void 0:b.column),checked:null===b||void 0===b?void 0:b.esc,onChange:function(e){b.setDesc(e,n)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,f.jsx)(s.Z,{span:12,children:(0,f.jsx)(u.Z,{style:{display:m.showPagination?"":"none"},current:m.pageNumber,disabled:p,onChange:function(e,t){m.handleChangePage(e,t,g)},pageSize:m.pageSize,total:m.total})})]})}),(0,f.jsx)(i.Z,{scroll:{y:k},rowClassName:y,style:{paddingTop:"10px"},bordered:!0,loading:p,pagination:!1,dataSource:h,size:"small",columns:Z})]})}},2820:function(e,t,n){n.d(t,{C:function(){return r},R1:function(){return s},xv:function(){return o}});var a=n(184);function o(e){var t=e.children;return(0,a.jsx)("p",{children:t})}function s(e){var t=e.value;return(0,a.jsx)("strong",{children:t})}function r(e){var t=e.children;return(0,a.jsx)("span",{style:{wordBreak:"break-all"},children:t})}},8776:function(e,t,n){n.d(t,{E:function(){return u},y:function(){return r}});var a=n(2426),o=n.n(a),s=n(184);function r(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?o()(t).format("DD/MM/YYYY"):"";return(0,s.jsx)("span",{children:n})}function u(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?o()(t).format("DD/MM/YYYY HH:mm:ss"):"";return(0,s.jsx)("span",{children:n})}},9222:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(9439),o=n(2791),s=n(7689),r=n(3778),u=n(2611),i=n(4492),c=n(9256),l=n(2684),d=n(698),v=n(3977),f=n(2820),g=n(8776),p=n(8885),h=n(2409),k=n(6106),y=n(914),S=n(7335),m=n(184);function b(e){var t=e.visible,n=e.setVisible,s=e.keyData,r=e.projectKey,u=(0,o.useState)([]),l=(0,a.Z)(u,2),d=l[0],v=l[1],h=(0,o.useCallback)((function(){void 0!==s&&!1!==t&&i.Su.GetHistory(r,s).then((function(e){e.isSuccess&&v(e.data.pagedData)}))}),[s,r,t]);return(0,o.useEffect)((function(){h()}),[h]),(0,m.jsx)("div",{children:(0,m.jsx)(p.Z,{open:t,onClose:function(){n(!1)},children:d.map((function(e,t){return(0,m.jsxs)(c.xu,{children:[(0,m.jsxs)(f.xv,{children:[(0,m.jsx)(f.R1,{value:"Gi\xe1 tr\u1ecb: "}),(0,m.jsx)(f.C,{children:e.value})]}),(0,m.jsxs)(f.xv,{children:[(0,m.jsx)(f.R1,{value:"Th\u1eddi gian thay \u0111\u1ed5i: "}),(0,m.jsx)(g.E,{value:e.updatedAt})]})]},t)}))})})}function j(e){var t=(0,o.useState)(""),n=(0,a.Z)(t,2),s=n[0],u=n[1],c=(0,o.useState)(""),d=(0,a.Z)(c,2),v=d[0],f=d[1],g=(0,o.useState)(""),j=(0,a.Z)(g,2),x=j[0],Z=j[1],C=(0,o.useState)(!1),M=(0,a.Z)(C,2),R=M[0],D=M[1],G=e.loadData,q=e.keyData,I=e.setKeyData,P=e.projectKey,V=e.isLoading,w=e.setIsLoading,N=e.visible,L=e.setVisible,T=(0,o.useCallback)((function(){void 0!==q&&(w(!0),i.Su.GetDetail(P,q).then((function(e){e.isSuccess&&(u(e.data.name),f(e.data.initalValue),Z(e.data.currentValue))})).finally((function(){return w(!1)})))}),[q,P,w]);function z(){u(""),Z(""),f(""),L(!1),void 0!==I&&I(void 0)}return(0,o.useEffect)((function(){T()}),[T]),(0,m.jsxs)(p.Z,{open:N,onClose:z,title:void 0!==q?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi",children:[(0,m.jsxs)(h.Z,{onSubmitCapture:function(){var e={name:s,initalValue:v,currentValue:x};w(!0),void 0!==q?function(e){i.Su.GetDetail(P,q).then((function(t){t.isSuccess?(e=r.Fn.GetTimestampV2(t,e),i.Su.Edit(P,q,e).then((function(e){e.isSuccess?(r.Fn.PrintMsgSuccessV2(e),G()):w(!1)}))):w(!1)}))}(e):function(e){i.Su.Add(P,e).then((function(e){e.isSuccess&&(r.Fn.PrintMsgSuccessV2(e),z(),L(!1),G())})).finally((function(){return w(!1)}))}(e)},layout:"vertical",children:[(0,m.jsx)(S.H.Input,{label:"T\xean",value:s,setValue:u}),(0,m.jsx)(S.H.Input,{label:"Gi\xe1 tr\u1ecb kh\u1edfi t\u1ea1o",readOnly:void 0!==q,onChange:function(e){Z(e)},value:v,setValue:f}),(0,m.jsx)(S.H.Input,{label:"Gi\xe1 tr\u1ecb hi\u1ec7n t\u1ea1i",readOnly:void 0===q,value:x,setValue:Z}),(0,m.jsx)(k.Z,{children:(0,m.jsx)(y.Z,{children:(0,m.jsx)(l.O,{type:"link",value:"L\u1ecbch s\u1eed thay \u0111\u1ed5i",onClick:function(){D(!0)}})})}),(0,m.jsx)(l.O,{htmlType:"submit",type:"success",isLoading:V,value:void 0===q?"Th\xeam m\u1edbi":"Ch\u1ec9nh s\u1eeda"}),(0,m.jsx)(l.O,{type:"danger",onClick:function(){e.setIsLoading(!0),i.Su.GetDetail(P,q).then((function(e){e.isSuccess?i.Su.Delete(P,q,r.Fn.GetTimestampV2(e)).then((function(e){e.isSuccess?(r.Fn.PrintMsgSuccessV2(e),z(),L(!1),G()):w(!1)})):w(!1)}))},disabled:void 0===q,isLoading:V,value:"X\xf3a"})]}),(0,m.jsx)(b,{visible:R,setVisible:D,keyData:q,projectKey:P})]})}function x(){var e=(0,s.UO)().key,t=[new u.Dw({title:"STT",key:"stt",render:function(e,t,n){return r.Fn.RenderSTT(e,t,n,b)}}),new u.Dw({title:"T\xean",key:"name",render:function(e,t){return(0,m.jsx)(l.$,{type:"link",value:e,onClick:function(){var e;e=t.key,B(e),E(!0)}})}}),new u.Dw({title:"Gi\xe1 tr\u1ecb kh\u1edfi t\u1ea1o",key:"initalValue"}),new u.Dw({title:"Gi\xe1 tr\u1ecb hi\u1ec7n t\u1ea1i",key:"currentValue",render:function(e){return(0,m.jsx)(f.C,{children:e})}}),new u.Dw({title:"Ng\xe0y t\u1ea1o",key:"createdAt",render:function(e){return(0,m.jsx)(g.E,{value:e})}}),new u.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i",key:"updatedAt",render:function(e){return(0,m.jsx)(g.E,{value:e})}})],n=(0,o.useState)(!1),p=(0,a.Z)(n,2),h=p[0],k=p[1],y=(0,o.useState)(new d.D),S=(0,a.Z)(y,2),b=S[0],x=S[1],Z=(0,o.useState)(new d.C),C=(0,a.Z)(Z,2),M=C[0],R=C[1],D=(0,o.useState)([]),G=(0,a.Z)(D,2),q=G[0],I=G[1],P=(0,o.useState)(!1),V=(0,a.Z)(P,2),w=V[0],N=V[1],L=(0,o.useState)(!1),T=(0,a.Z)(L,2),z=T[0],E=T[1],O=(0,o.useState)(),Y=(0,a.Z)(O,2),A=Y[0],B=Y[1],F=(0,o.useCallback)((function(){k(!0);var t=new u.LY(b.pageNumber,b.pageSize,M);i.Su.GetList(e,t).then((function(e){e.isSuccess&&I(e.data.pagedData)})).finally((function(){k(!1)}))}),[e,b.pageNumber,b.pageSize,M]);return(0,o.useEffect)((function(){F()}),[F]),(0,m.jsxs)(c.ts,{title:"Qu\u1ea3n l\xfd bi\u1ebfn",isLoading:h,children:[(0,m.jsx)(l.O,{type:"primary",value:"Th\xeam m\u1edbi",onClick:function(){N(!0)}}),(0,m.jsx)(v.Z,{pageInfo:b,setPageInfo:x,orderBy:M,setOrderBy:R,column:t,dataSource:q,loading:h,loadData:F}),(0,m.jsx)(j,{isLoading:h,setIsLoading:k,visible:w,setVisible:N,projectKey:e,loadData:F}),(0,m.jsx)(j,{isLoading:h,setIsLoading:k,visible:z,setVisible:E,keyData:A,setKeyData:B,projectKey:e,loadData:F})]})}},3778:function(e,t,n){n.d(t,{Fn:function(){return r}});var a=n(5671),o=n(3144),s=n(3118),r=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){s.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){s.ZP.success(e.data.message)}},{key:"PrintMsgSuccessV2",value:function(e){s.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,t,n,a){return(a.pageNumber-1)*a.pageSize+n+1}}]),e}();r.GetIndexInArray=function(e,t,n){for(var a=-1,o=0;o<e.length;o++)if(e[o][t]===n){a=o;break}return a},r.GetIndexInArrayStr=function(e,t){for(var n=-1,a=0;a<e.length;a++)if(e[a].trim()===t.trim()){n=a;break}return n},r.SetPageInfo=function(e,t,n,a){var o=e.data.data.pageInfo;t(o.totalCount),n(o.currentPage),a(o.pageSize)},r.GetTimestamp=function(e,t){try{return null===t||void 0===t?e.data.data.timestamp:(t.timestamp=e.data.data.timestamp,t)}catch(n){console.log(n)}},r.GetTimestampV2=function(e,t){try{return null===t||void 0===t?e.data.timestamp:(t.timestamp=e.data.timestamp,t)}catch(n){console.log(n)}}},2611:function(e,t,n){n.d(t,{Dw:function(){return s},LY:function(){return r}});var a=n(3144),o=n(5671),s=(0,a.Z)((function e(t){(0,o.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=t.title,this.key=t.key,void 0===t.dataIndex?this.dataIndex=t.key:this.dataIndex=t.dataIndex,this.render=t.render,this.className=t.className,this.width=t.width,this.label=t.title,this.value=t.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==t.disabled&&(this.disabled=t.disabled)})),r=function(){function e(t,n,a){(0,o.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=t,this.pageSize=n,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},4492:function(e,t,n){n.d(t,{NX:function(){return i},RC:function(){return c},Su:function(){return l},Tz:function(){return f},Zg:function(){return d},bY:function(){return r},gU:function(){return u},jz:function(){return v},zy:function(){return g}});var a=n(5671),o=n(3144),s=n(1285),r=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(s.b.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetStatistic",value:function(){return s.b.SendReq("v2/tools/taskManages/projects/statistic","Get")}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.b.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.b.SendReq(n,"Post",t)}},{key:"GetList",value:function(e){var t="v2/tools/taskManages/projects?".concat(e.generateQueryString());return s.b.SendReq(t,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return s.b.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return s.b.SendReq(t,"Get")}},{key:"Add",value:function(e){return s.b.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return s.b.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return s.b.SendReq(n,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return s.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return s.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.b.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.b.SendReq(o,"Delete")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return s.b.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.b.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return s.b.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/query?type=").concat(t);return s.b.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return s.b.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return s.b.SendReq(t,"Get",void 0,!0)}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return s.b.SendReq(n,"Get")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders?").concat(t.generateQueryString());return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return s.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders");return s.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return s.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.b.SendReq(a,"Delete")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return s.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return s.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return s.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return s.b.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.b.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/exec");return s.b.SendReq(a,"Get")}}]),e}(),f=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Getlist",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return s.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a);return s.b.SendReq(o,"Get")}},{key:"SaveResponse",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return s.b.SendReq(o,"Post",a)}},{key:"Delete",value:function(e,t,n,a,o){var r="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a,"?timestamp=").concat(encodeURIComponent(o));return s.b.SendReq(r,"Delete")}}]),e}(),g=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e){var t="v2/tools/taskManages/workflows?".concat(e.generateQueryString());return s.b.SendReq(t,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows");return s.b.SendReq(n,"Post",t)}}]),e}()}}]);
//# sourceMappingURL=222.bd3fea8c.chunk.js.map