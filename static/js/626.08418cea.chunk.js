"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[626],{8071:function(e,t,n){n.d(t,{Z:function(){return h}});var s=n(9439),a=n(2684),i=n(8885),o=n(2409),r=n(2791),l=n(3120),c=n(3778),u=n(7335),d=n(184);function h(e){var t=e.muityChoose;void 0===t&&(t=!1);var n=(0,r.useState)(!1),h=(0,s.Z)(n,2),f=h[0],p=h[1];return(0,r.useEffect)((function(){}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(u.H.Input,{label:e.label,onClick:function(){p(!0)},readOnly:!0,value:e.resultName}),(0,d.jsx)(i.Z,{placement:"top",open:f,onClose:function(){p(!1)},children:(0,d.jsxs)("div",{children:[(0,d.jsx)(l.Z,{isLoading:e.isLoading}),(0,d.jsx)(a.O,{value:"X\xf3a t\xecm ki\u1ebfm",onClick:function(){e.setResultKey(""),e.setResultName("")}}),(0,d.jsx)(u.H.Input,{readOnly:!0,label:"K\u1ebft qu\u1ea3",value:e.resultName}),(0,d.jsx)(o.Z,{children:(0,d.jsx)(u.H.Search,{label:"T\xecm ki\u1ebfm",onSearch:function(t){e.onSearch(t)}})}),e.dataSearch.map((function(n,s){return(0,d.jsx)(a.O,{value:n.value,onClick:function(){return function(n){if(console.log(n),!0===t){var s=e.resultName.split(",");if(-1!==c.Fn.GetIndexInArrayStr(s,n.value))return void console.log("EXIST ARRAY");e.setResultKey("".concat(e.resultKey).concat(""!==e.resultKey?", ":"").concat(n.key)),e.setResultName("".concat(e.resultName).concat(""!==e.resultName?", ":"").concat(n.value))}else e.setResultKey(n.key),e.setResultName(n.value)}(n)}},n.key)}))]})})]})}},698:function(e,t,n){n.d(t,{C:function(){return o},D:function(){return i}});var s=n(5671),a=n(3144),i=function(){function e(t){if((0,s.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==t){var n=t.data.pageInfo;this.total=n.totalCount,this.pageNumber=n.currentPage,this.pageSize=n.pageSize}}return(0,a.Z)(e,[{key:"handleChangePage",value:function(t,n,s){this.pageNumber=t,this.pageSize=n,s(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(t,n,s){s(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(t,n){n(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:t}}}))}}]),e}(),o=function(){function e(t,n){(0,s.Z)(this,e),this.column="",this.esc=!1,void 0!==t&&(this.column=t,this.esc=n)}return(0,a.Z)(e,[{key:"setColumn",value:function(t,n){n(new e(t,this.esc))}},{key:"setDesc",value:function(t,n){n(new e(this.column,t))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,t,n){n.d(t,{Z:function(){return p}});var s=n(9439),a=n(6106),i=n(914),o=n(5581),r=n(9221),l=n(8245),c=n(2791),u=n(7335),d=n(9256),h=n(2684),f=(n(1708),n(184));function p(e){var t=e.column,n=e.setOrderBy,p=e.setPageInfo,g=e.loading,y=e.dataSource,v=e.scroll,x=e.rowClassName,j=e.loadData,m=e.pageInfo,S=e.orderBy,b=(0,c.useState)([]),Z=(0,s.Z)(b,2),k=Z[0],C=Z[1],w=(0,c.useState)(100),N=(0,s.Z)(w,2),D=N[0],I=N[1];(0,c.useEffect)((function(){var e=setInterval((function(){I(D-1),1===D&&(I(100),j())}),1e3);return function(){return clearInterval(e)}}),[D,I,j]);var O=(0,c.useCallback)((function(){void 0!==t&&C(t.map((function(e,t){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}})))}),[t]);return(0,c.useEffect)((function(){O()}),[O]),(0,f.jsxs)("div",{className:"my_table",children:[(0,f.jsx)(d.xu,{children:(0,f.jsxs)(a.Z,{gutter:16,children:[(0,f.jsx)(i.Z,{span:6,children:(0,f.jsx)(h.O,{type:"secondary",value:"Refresh data in ".concat(D),isLoading:g,onClick:function(){j()}})}),(0,f.jsx)(i.Z,{span:12,children:(0,f.jsx)(u.H.Select,{value:null===S||void 0===S?void 0:S.column,onChange:function(e){S.setColumn(e,n)},options:t})}),(0,f.jsx)(i.Z,{span:6,children:(0,f.jsx)(o.Z,{disabled:""===(null===S||void 0===S?void 0:S.column),checked:null===S||void 0===S?void 0:S.esc,onChange:function(e){S.setDesc(e,n)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,f.jsx)(i.Z,{span:12,children:(0,f.jsx)(r.Z,{style:{display:m.showPagination?"":"none"},current:m.pageNumber,disabled:g,onChange:function(e,t){m.handleChangePage(e,t,p)},pageSize:m.pageSize,total:m.total})})]})}),(0,f.jsx)(l.Z,{scroll:{y:v},rowClassName:x,style:{paddingTop:"10px"},bordered:!0,loading:g,pagination:!1,dataSource:y,size:"small",columns:k})]})}},8776:function(e,t,n){n.d(t,{E:function(){return r},y:function(){return o}});var s=n(2426),a=n.n(s),i=n(184);function o(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?a()(t).format("DD/MM/YYYY"):"";return(0,i.jsx)("span",{children:n})}function r(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?a()(t).format("DD/MM/YYYY HH:mm:ss"):"";return(0,i.jsx)("span",{children:n})}},4626:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var s=n(9439),a=n(6106),i=n(914),o=n(2409),r=n(2426),l=n.n(r),c=n(2791),u=n(7689),d=n(1087),h=n(1830),f=n.n(h),p=n(3778),g=n(4492),y=n(7335),v=n(9256),x=n(2684),j=n(8071),m=n(7602),S=n(1333),b=n(2611),Z=n(698),k=n(3977),C=n(8776),w=n(184);function N(e){var t=[new b.Dw({title:"STT",key:"stt",render:function(e,t,n){return p.Fn.RenderSTT(e,t,n,i)}}),new b.Dw({title:"Lo\u1ea1i",key:"type",render:function(e){var t="";switch(e){case 1:t="D\u1ef1 \xe1n";break;case 2:t="Sprint";break;case 3:t="C\xe0i \u0111\u1eb7t"}return(0,w.jsx)("span",{children:t})}}),new b.Dw({title:"H\xe0nh \u0111\u1ed9ng",key:"action"}),new b.Dw({title:"Ng\u01b0\u1eddi d\xf9ng",key:"user",render:function(e){return(0,w.jsx)("span",{children:e.name})}}),new b.Dw({title:"Th\u1eddi gian",key:"createdAt",render:function(e){return(0,w.jsx)(C.E,{value:e})}})],n=(0,c.useState)(new Z.D),a=(0,s.Z)(n,2),i=a[0],o=a[1],r=(0,c.useState)(new Z.C),l=(0,s.Z)(r,2),u=l[0],d=l[1],h=(0,c.useState)([]),f=(0,s.Z)(h,2),y=f[0],x=f[1],j=e.isLoading,m=e.setIsLoading,N=e.projectKey,D=(0,c.useCallback)((function(){m(!0);var e=new b.LY(i.pageNumber,i.pageSize,u);g.bY.GetLog(N,e).then((function(e){e.isSuccess&&(o(new Z.D(e)),x(e.data.pagedData))})).finally((function(){m(!1)}))}),[N,m,i.pageNumber,i.pageSize,u]);return(0,c.useEffect)((function(){D()}),[D]),(0,w.jsxs)(v.xu,{showBox:!1,children:[(0,w.jsx)(S.Z,{orientation:"left",style:{borderTopColor:"#000"},children:(0,w.jsx)("h4",{style:{fontWeight:"bold"},children:"Nh\u1eadt k\xfd ho\u1ea1t \u0111\u1ed9ng"})}),(0,w.jsx)(k.Z,{pageInfo:i,setPageInfo:o,orderBy:u,setOrderBy:d,column:t,dataSource:y,loading:j,loadData:D})]})}function D(){var e=(0,u.s0)(),t=(0,c.useState)(!1),n=(0,s.Z)(t,2),r=n[0],h=n[1],S=(0,c.useState)(""),b=(0,s.Z)(S,2),Z=b[0],k=b[1],C=(0,c.useState)(""),D=(0,s.Z)(C,2),I=D[0],O=D[1],T=(0,c.useState)(0),z=(0,s.Z)(T,2),Y=z[0],B=z[1],P=(0,c.useState)(""),K=(0,s.Z)(P,2),H=K[0],L=K[1],R=(0,c.useState)(""),V=(0,s.Z)(R,2),M=V[0],E=V[1],A=(0,c.useState)(""),G=(0,s.Z)(A,2),F=G[0],U=G[1],Q=(0,c.useState)(l()()),X=(0,s.Z)(Q,2),q=X[0],W=X[1],_=(0,c.useState)(l()()),J=(0,s.Z)(_,2),$=J[0],ee=J[1],te=(0,c.useState)([]),ne=(0,s.Z)(te,2),se=ne[0],ae=ne[1],ie=(0,u.UO)().key,oe=(0,c.useCallback)((function(){void 0!==ie&&(h(!0),g.bY.GetDetail(ie).then((function(e){if(e.isSuccess){var t=e.data;k(t.name),O(t.content),U(t.tag.toString()),B(t.status.id),W(l()(t.createdAt)),ee(l()(t.updatedAt));var n=t.parent;null!==n&&(L(n.key),E(n.name))}})).finally((function(){h(!1)})))}),[ie]);return(0,c.useEffect)((function(){oe()}),[oe]),(0,w.jsxs)(v.ts,{title:"Chi ti\u1ebft d\u1ef1 \xe1n",isLoading:r,children:[(0,w.jsxs)(v.xu,{children:[(0,w.jsx)("p",{children:"Danh s\xe1ch c\xe1c ch\u1ee9c n\u0103ng"}),(0,w.jsxs)(a.Z,{children:[(0,w.jsx)(i.Z,{span:4,children:(0,w.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(ie,"/sprint"),children:(0,w.jsx)(x.O,{disabled:void 0===ie,type:"primary",value:"Qu\u1ea3n l\xfd sprint"})})}),(0,w.jsx)(i.Z,{span:4,children:(0,w.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(ie,"/settings"),children:(0,w.jsx)(x.O,{disabled:void 0===ie,type:"secondary",value:"C\xe0i \u0111\u1eb7t"})})}),(0,w.jsx)(i.Z,{span:4,children:(0,w.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(ie,"/dailyReport"),children:(0,w.jsx)(x.O,{disabled:void 0===ie,type:"dark",value:"Daily report"})})}),(0,w.jsx)(i.Z,{span:4,children:(0,w.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(ie,"/clone"),children:(0,w.jsx)(x.O,{disabled:void 0===ie,type:"warning",value:"Clone d\u1ef1 \xe1n"})})}),(0,w.jsx)(i.Z,{span:4,children:(0,w.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(ie,"/codeManage"),children:(0,w.jsx)(x.O,{disabled:void 0===ie,type:"success",value:"Code Manage"})})})]})]}),(0,w.jsx)(o.Z,{layout:"vertical",onSubmitCapture:function(){var t={name:Z,content:I,statusId:Y,tag:F.split(","),parentKey:""===H?null:H};h(!0),void 0===ie?function(t){g.bY.Add(t).then((function(t){t.isSuccess&&(p.Fn.PrintMsgSuccessV2(t),e("/tools/tasks/projects/".concat(t.data.key)))})).finally((function(){h(!1)}))}(t):function(e){g.bY.GetDetail(ie).then((function(t){t.isSuccess&&(e=p.Fn.GetTimestampV2(t,e),g.bY.Edit(ie,e).then((function(e){e.isSuccess&&p.Fn.PrintMsgSuccessV2(e)})).finally((function(){h(!1)})))}))}(t)},children:(0,w.jsxs)(a.Z,{gutter:12,children:[(0,w.jsx)(i.Z,{span:8,children:(0,w.jsx)(y.H.Input,{readOnly:!0,label:"M\xe3 d\u1ef1 \xe1n",value:ie,setValue:void 0})}),(0,w.jsx)(i.Z,{span:16,children:(0,w.jsx)(y.H.Input,{label:"T\xean d\u1ef1 \xe1n",value:Z,setValue:k})}),(0,w.jsx)(i.Z,{span:24,children:(0,w.jsx)(y.H.TextArea,{label:"N\u1ed9i dung",value:I,setValue:O})}),(0,w.jsx)(i.Z,{span:24,children:(0,w.jsx)(m.Z,{projectKey:ie,label:"Tag",value:F,setValue:U})}),(0,w.jsx)(i.Z,{span:12,children:(0,w.jsx)(j.Z,{label:"D\u1ef1 \xe1n cha",muityChoose:!1,onSearch:function(e){h(!0),g.bY.Search(e).then((function(e){e.isSuccess&&ae(e.data)})).finally((function(){h(!1)}))},resultKey:H,resultName:M,setResultKey:L,setResultName:E,dataSearch:se,isLoading:r})}),(0,w.jsx)(i.Z,{span:12,children:(0,w.jsx)(m.M,{label:"Tr\u1ea1ng th\xe1i",projectKey:ie,type:"1",value:Y,setValue:B})}),(0,w.jsx)(i.Z,{span:12,children:(0,w.jsx)(y.H.DateTimePicker,{label:"Ng\xe0y t\u1ea1o",readOnly:!0,value:q,setValue:W})}),(0,w.jsx)(i.Z,{span:12,children:(0,w.jsx)(y.H.DateTimePicker,{label:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i c\xf9ng",readOnly:!0,value:$,setValue:ee})}),(0,w.jsx)(i.Z,{span:8,children:(0,w.jsx)(x.O,{htmlType:"submit",type:"success",value:void 0===ie?"Th\xeam m\u1edbi":"Ch\u1ec9nh s\u1eeda"})}),(0,w.jsx)(i.Z,{span:8,children:(0,w.jsx)(x.O,{onClick:function(){f().fire({title:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a d\u1ef1 \xe1n n\xe0y kh\xf4ng?",showDenyButton:!0,confirmButtonText:"C\xf3",denyButtonText:"Kh\xf4ng"}).then((function(t){t.isConfirmed&&(h(!0),g.bY.GetDetail(ie).then((function(t){t.isSuccess&&g.bY.Delete(ie,p.Fn.GetTimestampV2(t)).then((function(t){t.isSuccess&&(p.Fn.PrintMsgSuccessV2(t),e("/tools/tasks/projects"))})).finally((function(){h(!1)}))})))}))},disabled:void 0===ie,type:"danger",value:"X\xf3a"})}),(0,w.jsx)(i.Z,{span:8,children:(0,w.jsx)(d.rU,{to:"/tools/tasks/projects",children:(0,w.jsx)(x.O,{type:"warning",value:"H\u1ee7y"})})})]})}),(0,w.jsx)(N,{projectKey:ie,isLoading:r,setIsLoading:h})]})}},2611:function(e,t,n){n.d(t,{Dw:function(){return i},LY:function(){return o}});var s=n(3144),a=n(5671),i=(0,s.Z)((function e(t){(0,a.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=t.title,this.key=t.key,void 0===t.dataIndex?this.dataIndex=t.key:this.dataIndex=t.dataIndex,this.render=t.render,this.className=t.className,this.width=t.width,this.label=t.title,this.value=t.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==t.disabled&&(this.disabled=t.disabled)})),o=function(){function e(t,n,s){(0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=t,this.pageSize=n,this.orderBy=s}return(0,s.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()}}]);
//# sourceMappingURL=626.08418cea.chunk.js.map