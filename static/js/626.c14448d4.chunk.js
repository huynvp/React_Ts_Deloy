"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[626],{7335:function(e,t,n){n.d(t,{H:function(){return y}});var a=n(5671),s=n(3144),o=n(940),c=n(1095),r=n(7123),u=n(3344),i=n(6106),l=n(914),d=n(6435),v=n(5581),f=n(2426),h=n.n(f),p=n(184),g=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"Input",value:function(e){return(0,p.jsx)(o.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"Input",value:function(e){return(0,p.jsx)(c.Z.Item,{label:e.label,children:(0,p.jsx)(g.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,p.jsx)(c.Z.Item,{label:e.label,children:(0,p.jsx)(r.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return h()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,p.jsx)(c.Z.Item,{label:e.label,children:(0,p.jsx)(r.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return h()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,p.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})}},{key:"NumberColSpan",value:function(t){return(0,p.jsx)("div",{children:(0,p.jsxs)(i.Z,{className:t.className,children:[(0,p.jsx)(l.Z,{span:t.colSpan1,children:(0,p.jsx)("span",{children:t.label})}),(0,p.jsx)(l.Z,{span:t.colSpan2,children:(0,p.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,p.jsx)(c.Z.Item,{label:e.label,children:(0,p.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=o.Z.TextArea;return(0,p.jsx)(c.Z.Item,{label:e.label,children:(0,p.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=o.Z.Password;return(0,p.jsx)(c.Z.Item,{label:e.label,children:(0,p.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=o.Z.Search;return(0,p.jsx)(c.Z.Item,{label:e.label,children:(0,p.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,p.jsx)(c.Z.Item,{label:e.label,children:(0,p.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"File",value:function(e){return(0,p.jsx)(c.Z.Item,{label:e.label,children:(0,p.jsx)(o.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},8071:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(9439),s=n(2684),o=n(8885),c=n(1095),r=n(2791),u=n(3120),i=n(3778),l=n(7335),d=n(184);function v(e){var t=e.muityChoose;void 0===t&&(t=!1);var n=(0,r.useState)(!1),v=(0,a.Z)(n,2),f=v[0],h=v[1];return(0,r.useEffect)((function(){}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(l.H.Input,{label:e.label,onClick:function(){h(!0)},readOnly:!0,value:e.resultName}),(0,d.jsx)(o.Z,{placement:"top",open:f,onClose:function(){h(!1)},children:(0,d.jsxs)("div",{children:[(0,d.jsx)(u.Z,{isLoading:e.isLoading}),(0,d.jsx)(s.O,{value:"X\xf3a t\xecm ki\u1ebfm",onClick:function(){e.setResultKey(""),e.setResultName("")}}),(0,d.jsx)(l.H.Input,{readOnly:!0,label:"K\u1ebft qu\u1ea3",value:e.resultName}),(0,d.jsx)(c.Z,{children:(0,d.jsx)(l.H.Search,{label:"T\xecm ki\u1ebfm",onSearch:function(t){e.onSearch(t)}})}),e.dataSearch.map((function(n,a){return(0,d.jsx)(s.O,{value:n.value,onClick:function(){return function(n){if(console.log(n),!0===t){var a=e.resultName.split(",");if(-1!==i.Fn.GetIndexInArrayStr(a,n.value))return void console.log("EXIST ARRAY");e.setResultKey("".concat(e.resultKey).concat(""!==e.resultKey?", ":"").concat(n.key)),e.setResultName("".concat(e.resultName).concat(""!==e.resultName?", ":"").concat(n.value))}else e.setResultKey(n.key),e.setResultName(n.value)}(n)}},n.key)}))]})})]})}},698:function(e,t,n){n.d(t,{C:function(){return c},D:function(){return o}});var a=n(5671),s=n(3144),o=function(){function e(t){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==t){var n=t.data.pageInfo;this.total=n.totalCount,this.pageNumber=n.currentPage,this.pageSize=n.pageSize}}return(0,s.Z)(e,[{key:"handleChangePage",value:function(t,n,a){this.pageNumber=t,this.pageSize=n,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(t,n,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(t,n){n(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:t}}}))}}]),e}(),c=function(){function e(t,n){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==t&&(this.column=t,this.esc=n)}return(0,s.Z)(e,[{key:"setColumn",value:function(t,n){n(new e(t,this.esc))}},{key:"setDesc",value:function(t,n){n(new e(this.column,t))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(9439),s=n(6106),o=n(914),c=n(5581),r=n(9221),u=n(8245),i=n(2791),l=n(7335),d=n(9256),v=n(2684),f=(n(1708),n(184));function h(e){var t=e.pageInfo,n=e.orderBy,h=(0,i.useState)([]),p=(0,a.Z)(h,2),g=p[0],y=p[1],k=(0,i.useState)(100),j=(0,a.Z)(k,2),m=j[0],x=j[1],S=e.loadData;(0,i.useEffect)((function(){var e=setInterval((function(){x(m-1),1===m&&(x(100),S())}),1e3);return function(){return clearInterval(e)}}),[m,x,S]);var b=(0,i.useCallback)((function(){if(void 0!==e.column){var t=e.column.map((function(e,t){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}}),[]);y(t)}}),[e.column]);return(0,i.useEffect)((function(){b()}),[b]),(0,f.jsxs)("div",{className:"my_table",children:[(0,f.jsx)(d.xu,{children:(0,f.jsxs)(s.Z,{gutter:16,children:[(0,f.jsx)(o.Z,{span:6,children:(0,f.jsx)(v.O,{type:"secondary",value:"Refresh data in ".concat(m),onClick:function(){e.loadData()}})}),(0,f.jsx)(o.Z,{span:12,children:(0,f.jsx)(l.H.Select,{value:null===n||void 0===n?void 0:n.column,onChange:function(t){n.setColumn(t,e.setOrderBy)},options:e.column})}),(0,f.jsx)(o.Z,{span:6,children:(0,f.jsx)(c.Z,{disabled:""===(null===n||void 0===n?void 0:n.column),checked:null===n||void 0===n?void 0:n.esc,onChange:function(t){console.log(t),n.setDesc(t,e.setOrderBy)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,f.jsx)(o.Z,{span:12,children:(0,f.jsx)(r.Z,{style:{display:t.showPagination?"":"none"},current:t.pageNumber,disabled:e.loading,onChange:function(n,a){t.handleChangePage(n,a,e.setPageInfo)},pageSize:t.pageSize,total:t.total})})]})}),(0,f.jsx)(u.Z,{scroll:{y:e.scroll},rowClassName:e.rowClassName,style:{paddingTop:"10px"},bordered:!0,loading:e.loading,pagination:!1,dataSource:e.dataSource,size:"small",columns:g})]})}},8776:function(e,t,n){n.d(t,{E:function(){return r},y:function(){return c}});var a=n(2426),s=n.n(a),o=n(184);function c(e){var t="";return t=void 0!==e.value&&""!==e.value&&null!==e.value?s()(e.value).format("DD/MM/YYYY"):"",(0,o.jsx)("span",{children:t})}function r(e){var t="";return t=void 0!==e.value&&""!==e.value&&null!==e.value?s()(e.value).format("DD/MM/YYYY HH:mm:ss"):"",(0,o.jsx)("span",{children:t})}},7602:function(e,t,n){n.d(t,{M:function(){return f},Z:function(){return h}});var a=n(9439),s=n(7528),o=n(6106),c=n(914),r=n(1095),u=n(2791),i=n(4492),l=n(7335),d=n(9256),v=n(184);function f(e){var t=e.projectKey,n=e.type,s=(0,u.useState)([]),o=(0,a.Z)(s,2),c=o[0],r=o[1],d=(0,u.useCallback)((function(){i.RC.SearchByType(t,n).then((function(e){if(e.isSuccess){var t=e.data.map((function(e,t){return{key:t,label:e.value,value:e.id}}));r(t)}}))}),[t,n]);return(0,u.useEffect)((function(){d()}),[d]),(0,v.jsx)("div",{children:(0,v.jsx)(l.H.Select,{label:e.label,options:c,value:e.value,setValue:e.setValue})})}function h(e){var t=e.projectKey,n=(0,u.useState)([]),f=(0,a.Z)(n,2),h=f[0],p=f[1],g=(0,u.useCallback)((function(){i.RC.SearchByType(t,7).then((function(e){if(e.isSuccess){var t=e.data.map((function(e,t){return{key:t,label:e.value,value:e.value}}));p(t)}}))}),[t]);return(0,u.useEffect)((function(){g()}),[g]),(0,v.jsxs)(o.Z,{gutter:12,children:[(0,v.jsx)(c.Z,{span:12,children:(0,v.jsx)(l.H.Select,{label:e.label,value:e.value,setValue:function(t){e.setValue(""!==e.value?e.value+","+t:t),console.log(t)},options:h})}),(0,v.jsx)(c.Z,{span:12,children:(0,v.jsx)(d.xu,{children:(0,v.jsx)(r.Z.Item,{children:function(){var t=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"];if(""!==e.value)return e.value.split(",").map((function(n,a){return(0,v.jsx)(s.Z,{onClick:function(){!function(t){var n=e.value.split(","),a=n.splice(t+1,n.length);e.setValue(a.length>0?a.toString(","):"")}(a)},color:t[Math.floor(11*Math.random())],children:n},a)}))}()})})})]})}},4626:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(9439),s=n(6106),o=n(914),c=n(1095),r=n(2426),u=n.n(r),i=n(2791),l=n(7689),d=n(1087),v=n(1830),f=n.n(v),h=n(3778),p=n(4492),g=n(7335),y=n(9256),k=n(2684),j=n(8071),m=n(7602),x=n(1333),S=n(2611),b=n(698),Z=n(3977),C=n(8776),D=n(184);function R(e){var t=[new S.Dw({title:"STT",key:"stt",render:function(e,t,n){return h.Fn.RenderSTT(e,t,n,o)}}),new S.Dw({title:"Lo\u1ea1i",key:"type",render:function(e){var t="";switch(e){case 1:t="D\u1ef1 \xe1n";break;case 2:t="Sprint";break;case 3:t="C\xe0i \u0111\u1eb7t"}return(0,D.jsx)("span",{children:t})}}),new S.Dw({title:"H\xe0nh \u0111\u1ed9ng",key:"action"}),new S.Dw({title:"Ng\u01b0\u1eddi d\xf9ng",key:"user",render:function(e){return(0,D.jsx)("span",{children:e.name})}}),new S.Dw({title:"Th\u1eddi gian",key:"createdAt",render:function(e){return(0,D.jsx)(C.E,{value:e})}})],n=(0,i.useState)(new b.D),s=(0,a.Z)(n,2),o=s[0],c=s[1],r=(0,i.useState)(new b.C),u=(0,a.Z)(r,2),l=u[0],d=u[1],v=(0,i.useState)([]),f=(0,a.Z)(v,2),g=f[0],k=f[1],j=e.setIsLoading,m=(0,i.useCallback)((function(){j(!0);var t=new S.LY(o.pageNumber,o.pageSize,l);p.bY.GetLog(e.projectKey,t).then((function(e){e.isSuccess&&(c(new b.D(e)),k(e.data.pagedData))})).finally((function(){j(!1)}))}),[e.projectKey,j,o.pageNumber,o.pageSize,l]);return(0,i.useEffect)((function(){m()}),[m]),(0,D.jsxs)(y.xu,{showBox:!1,children:[(0,D.jsx)(x.Z,{orientation:"left",style:{borderTopColor:"#000"},children:(0,D.jsx)("h4",{style:{fontWeight:"bold"},children:"Nh\u1eadt k\xfd ho\u1ea1t \u0111\u1ed9ng"})}),(0,D.jsx)(Z.Z,{pageInfo:o,setPageInfo:c,orderBy:l,setOrderBy:d,column:t,dataSource:g,loading:e.IsLoading,loadData:m})]})}function w(){var e=(0,l.s0)(),t=(0,i.useState)(!1),n=(0,a.Z)(t,2),r=n[0],v=n[1],x=(0,i.useState)(""),S=(0,a.Z)(x,2),b=S[0],Z=S[1],C=(0,i.useState)(""),w=(0,a.Z)(C,2),I=w[0],T=w[1],M=(0,i.useState)(0),G=(0,a.Z)(M,2),N=G[0],V=G[1],P=(0,i.useState)(""),q=(0,a.Z)(P,2),O=q[0],Y=q[1],L=(0,i.useState)(""),B=(0,a.Z)(L,2),z=B[0],E=B[1],A=(0,i.useState)(""),H=(0,a.Z)(A,2),K=H[0],U=H[1],Q=(0,i.useState)(u()()),F=(0,a.Z)(Q,2),X=F[0],_=F[1],W=(0,i.useState)(u()()),J=(0,a.Z)(W,2),$=J[0],ee=J[1],te=(0,i.useState)([]),ne=(0,a.Z)(te,2),ae=ne[0],se=ne[1],oe=(0,l.UO)().key,ce=(0,i.useCallback)((function(){void 0!==oe&&(v(!0),p.bY.GetDetail(oe).then((function(e){if(e.isSuccess){var t=e.data;Z(t.name),T(t.content),U(t.tag.toString()),V(t.status.id),_(u()(t.createdAt)),ee(u()(t.updatedAt));var n=t.parent;null!==n&&(Y(n.key),E(n.name))}})).finally((function(){v(!1)})))}),[oe]);return(0,i.useEffect)((function(){ce()}),[ce]),(0,D.jsxs)(y.ts,{title:"Chi ti\u1ebft d\u1ef1 \xe1n",isLoading:r,children:[(0,D.jsxs)(y.xu,{children:[(0,D.jsx)("p",{children:"Danh s\xe1ch c\xe1c ch\u1ee9c n\u0103ng"}),(0,D.jsxs)(s.Z,{children:[(0,D.jsx)(o.Z,{span:4,children:(0,D.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(oe,"/sprint"),children:(0,D.jsx)(k.O,{disabled:void 0===oe,type:"primary",value:"Qu\u1ea3n l\xfd sprint"})})}),(0,D.jsx)(o.Z,{span:4,children:(0,D.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(oe,"/settings"),children:(0,D.jsx)(k.O,{disabled:void 0===oe,type:"secondary",value:"C\xe0i \u0111\u1eb7t"})})}),(0,D.jsx)(o.Z,{span:4,children:(0,D.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(oe,"/dailyReport"),children:(0,D.jsx)(k.O,{disabled:void 0===oe,type:"dark",value:"Daily report"})})}),(0,D.jsx)(o.Z,{span:4,children:(0,D.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(oe,"/clone"),children:(0,D.jsx)(k.O,{disabled:void 0===oe,type:"warning",value:"Clone d\u1ef1 \xe1n"})})}),(0,D.jsx)(o.Z,{span:4,children:(0,D.jsx)(d.rU,{to:"/tools/tasks/projects/".concat(oe,"/codeManage"),children:(0,D.jsx)(k.O,{disabled:void 0===oe,type:"success",value:"Code Manage"})})})]})]}),(0,D.jsx)(c.Z,{layout:"vertical",onSubmitCapture:function(){var t={name:b,content:I,statusId:N,tag:K.split(","),parentKey:""===O?null:O};v(!0),void 0===oe?function(t){p.bY.Add(t).then((function(t){t.isSuccess&&(h.Fn.PrintMsgSuccessV2(t),e("/tools/tasks/projects/".concat(t.data.key)))})).finally((function(){v(!1)}))}(t):function(e){p.bY.GetDetail(oe).then((function(t){t.isSuccess&&(e=h.Fn.GetTimestampV2(t,e),p.bY.Edit(oe,e).then((function(e){e.isSuccess&&h.Fn.PrintMsgSuccessV2(e)})).finally((function(){v(!1)})))}))}(t)},children:(0,D.jsxs)(s.Z,{gutter:12,children:[(0,D.jsx)(o.Z,{span:8,children:(0,D.jsx)(g.H.Input,{readOnly:!0,label:"M\xe3 d\u1ef1 \xe1n",value:oe,setValue:void 0})}),(0,D.jsx)(o.Z,{span:16,children:(0,D.jsx)(g.H.Input,{label:"T\xean d\u1ef1 \xe1n",value:b,setValue:Z})}),(0,D.jsx)(o.Z,{span:24,children:(0,D.jsx)(g.H.TextArea,{label:"N\u1ed9i dung",value:I,setValue:T})}),(0,D.jsx)(o.Z,{span:24,children:(0,D.jsx)(m.Z,{projectKey:oe,label:"Tag",value:K,setValue:U})}),(0,D.jsx)(o.Z,{span:12,children:(0,D.jsx)(j.Z,{label:"D\u1ef1 \xe1n cha",muityChoose:!1,onSearch:function(e){v(!0),p.bY.Search(e).then((function(e){e.isSuccess&&se(e.data)})).finally((function(){v(!1)}))},resultKey:O,resultName:z,setResultKey:Y,setResultName:E,dataSearch:ae,isLoading:r})}),(0,D.jsx)(o.Z,{span:12,children:(0,D.jsx)(m.M,{label:"Tr\u1ea1ng th\xe1i",projectKey:oe,type:"1",value:N,setValue:V})}),(0,D.jsx)(o.Z,{span:12,children:(0,D.jsx)(g.H.DateTimePicker,{label:"Ng\xe0y t\u1ea1o",readOnly:!0,value:X,setValue:_})}),(0,D.jsx)(o.Z,{span:12,children:(0,D.jsx)(g.H.DateTimePicker,{label:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i c\xf9ng",readOnly:!0,value:$,setValue:ee})}),(0,D.jsx)(o.Z,{span:8,children:(0,D.jsx)(k.O,{htmlType:"submit",type:"success",value:void 0===oe?"Th\xeam m\u1edbi":"Ch\u1ec9nh s\u1eeda"})}),(0,D.jsx)(o.Z,{span:8,children:(0,D.jsx)(k.O,{onClick:function(){f().fire({title:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a d\u1ef1 \xe1n n\xe0y kh\xf4ng?",showDenyButton:!0,confirmButtonText:"C\xf3",denyButtonText:"Kh\xf4ng"}).then((function(t){t.isConfirmed&&(v(!0),p.bY.GetDetail(oe).then((function(t){t.isSuccess&&p.bY.Delete(oe,h.Fn.GetTimestampV2(t)).then((function(t){t.isSuccess&&(h.Fn.PrintMsgSuccessV2(t),e("/tools/tasks/projects"))})).finally((function(){v(!1)}))})))}))},disabled:void 0===oe,type:"danger",value:"X\xf3a"})}),(0,D.jsx)(o.Z,{span:8,children:(0,D.jsx)(d.rU,{to:"/tools/tasks/projects",children:(0,D.jsx)(k.O,{type:"warning",value:"H\u1ee7y"})})})]})}),(0,D.jsx)(R,{projectKey:oe,isLoading:r,setIsLoading:v})]})}},2611:function(e,t,n){n.d(t,{Dw:function(){return o},LY:function(){return c}});var a=n(3144),s=n(5671),o=(0,a.Z)((function e(t){(0,s.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=t.title,this.key=t.key,void 0===t.dataIndex?this.dataIndex=t.key:this.dataIndex=t.dataIndex,this.render=t.render,this.className=t.className,this.width=t.width,this.label=t.title,this.value=t.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==t.disabled&&(this.disabled=t.disabled)})),c=function(){function e(t,n,a){(0,s.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=t,this.pageSize=n,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},4492:function(e,t,n){n.d(t,{NX:function(){return u},RC:function(){return i},Su:function(){return l},Zg:function(){return d},bY:function(){return c},gU:function(){return r},jz:function(){return v}});var a=n(5671),s=n(3144),o=n(1285),c=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(o.b.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return o.b.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return o.b.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return o.b.SendReq(n,"Post",t)}},{key:"GetList",value:function(e){var t="v2/tools/taskManages/projects?".concat(e.generateQueryString());return o.b.SendReq(t,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return o.b.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return o.b.SendReq(t,"Get")}},{key:"Add",value:function(e){return o.b.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return o.b.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return o.b.SendReq(n,"Delete")}}]),e}(),r=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return o.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return o.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return o.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return o.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.b.SendReq(a,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return o.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return o.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return o.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return o.b.SendReq(s,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var s="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return o.b.SendReq(s,"Delete")}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return o.b.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return o.b.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return o.b.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return o.b.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.b.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="tools/tasks/projects/".concat(e,"/settings/query?type=").concat(t);return o.b.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return o.b.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return o.b.SendReq(t,"Get",void 0,!0)}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,s){var c="tools/tasks/projects/".concat(e,"/workflow/variables?").concat(t.generateQueryString());return o.T.Get(c,n,a,s)}},{key:"GetDetail",value:function(e,t,n,a,s){var c="tools/tasks/projects/".concat(e,"/workflow/variables/").concat(t);return o.T.Get(c,n,a,s)}},{key:"Add",value:function(e,t,n,a,s){var c="tools/tasks/projects/".concat(e,"/workflow/variables");return o.T.Post(c,t,n,a,s)}},{key:"Edit",value:function(e,t,n,a,s,c){var r="tools/tasks/projects/".concat(e,"/workflow/variables/").concat(t);return o.T.Put(r,n,a,s,c)}},{key:"Delete",value:function(e,t,n,a,s,c){var r="tools/tasks/projects/".concat(e,"/workflow/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.T.Delete(r,a,s,c)}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,s){var c="tools/tasks/projects/".concat(e,"/documents/folders?").concat(t.generateQueryString());return o.T.Get(c,n,a,s)}},{key:"GetDetail",value:function(e,t,n,a,s){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t);return o.T.Get(c,n,a,s)}},{key:"Add",value:function(e,t,n,a,s){var c="tools/tasks/projects/".concat(e,"/documents/folders");return o.T.Post(c,t,n,a,s)}},{key:"Edit",value:function(e,t,n,a,s,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t);return o.T.Put(r,n,a,s,c)}},{key:"Delete",value:function(e,t,n,a,s,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return o.T.Delete(r,a,s,c)}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,s){var c="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs");return o.T.Get(c,n,a,s)}},{key:"GetDetail",value:function(e,t,n,a,s,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n);return o.T.Get(r,a,s,c)}},{key:"Add",value:function(e,t,n,a,s,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs");return o.T.Post(r,n,a,s,c)}},{key:"Edit",value:function(e,t,n,a,s,c,r){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n);return o.T.Put(u,a,s,c,r)}},{key:"Delete",value:function(e,t,n,a,s,c,r){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return o.T.Delete(u,s,c,r)}},{key:"RunApi",value:function(e,t,n,a,s,c){var r="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"/runApi");return o.T.Post(r,{},a,s,c)}},{key:"SaveResponse",value:function(e,t,n,a,s,c,r){var u="tools/tasks/projects/".concat(e,"/documents/folders/").concat(t,"/apiDocs/").concat(n,"/responses");return o.T.Post(u,a,s,c,r)}}]),e}()}}]);
//# sourceMappingURL=626.c14448d4.chunk.js.map