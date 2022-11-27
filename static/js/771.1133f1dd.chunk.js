"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[771],{7335:function(e,n,t){t.d(n,{H:function(){return p}});var a=t(5671),i=t(3144),r=t(940),o=t(1095),u=t(7123),l=t(3344),s=t(6106),c=t(914),d=t(6435),v=t(5581),f=t(2426),m=t.n(f),h=t(184),g=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"Input",value:function(e){return(0,h.jsx)(r.Z,{onClick:e.onClick,value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),p=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"Input",value:function(e){return(0,h.jsx)(o.Z.Item,{label:e.label,children:(0,h.jsx)(g.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,h.jsx)(o.Z.Item,{label:e.label,children:(0,h.jsx)(u.Z,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return m()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,h.jsx)(o.Z.Item,{label:e.label,children:(0,h.jsx)(u.Z,{showTime:!0,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)},format:function(e){return m()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,h.jsx)(l.Z,{min:e.min,max:e.max,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n)}})}},{key:"NumberColSpan",value:function(n){return(0,h.jsx)("div",{children:(0,h.jsxs)(s.Z,{className:n.className,children:[(0,h.jsx)(c.Z,{span:n.colSpan1,children:(0,h.jsx)("span",{children:n.label})}),(0,h.jsx)(c.Z,{span:n.colSpan2,children:(0,h.jsx)(e.Number,{min:n.min,max:n.max,value:n.value,setValue:n.setValue})})]})})}},{key:"Select",value:function(e){return(0,h.jsx)(o.Z.Item,{label:e.label,children:(0,h.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"TextArea",value:function(e){var n=r.Z.TextArea;return(0,h.jsx)(o.Z.Item,{label:e.label,children:(0,h.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Password",value:function(e){var n=r.Z.Password;return(0,h.jsx)(o.Z.Item,{label:e.label,children:(0,h.jsx)(n,{value:e.value,onChange:function(n){void 0!==e.onChange&&e.onChange(n.target.value),void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Search",value:function(e){var n=r.Z.Search;return(0,h.jsx)(o.Z.Item,{label:e.label,children:(0,h.jsx)(n,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.value)}})})}},{key:"Switch",value:function(e){return(0,h.jsx)(o.Z.Item,{label:e.label,children:(0,h.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(n){void 0!==e.setValue&&e.setValue(n),void 0!==e.onChange&&e.onChange(n)}})})}},{key:"File",value:function(e){return(0,h.jsx)(o.Z.Item,{label:e.label,children:(0,h.jsx)(r.Z,{type:"file",onChange:function(n){void 0!==e.setValue&&e.setValue(n.target.files[0])}})})}}]),e}()},3120:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7083),i=t(7106),r=t(184),o=(0,r.jsx)(i.Z,{style:{fontSize:24}});function u(e){return(0,r.jsx)(a.Z,{size:"large",spinning:void 0!==e.isLoading&&e.isLoading,indicator:o})}},9256:function(e,n,t){t.d(n,{F:function(){return c},ts:function(){return l},xu:function(){return s}});var a=t(6106),i=t(914),r=t(1333),o=t(3120),u=t(184);function l(e){return(0,u.jsxs)("div",{className:"my-box",children:[(0,u.jsxs)(a.Z,{gutter:12,children:[(0,u.jsx)(i.Z,{span:12,children:(0,u.jsx)(r.Z,{orientation:"left",style:{borderTopColor:"#000"},children:(0,u.jsx)("h2",{style:{fontWeight:"bold"},children:e.title})})}),(0,u.jsx)(i.Z,{span:12,style:{textAlign:"right",paddingTop:"15px"},children:void 0!==e.buttonList?e.buttonList():""})]}),(0,u.jsx)(o.Z,{isLoading:e.isLoading}),(0,u.jsx)("div",{className:"my-box-children",style:{opacity:!0===e.isLoading?.2:1},children:e.children})]})}function s(e){return(0,u.jsxs)("div",{className:"".concat(!1!==e.showBox?"box":"box-no-border"," ").concat(e.className),style:e.style,children:[(0,u.jsx)(o.Z,{isLoading:e.isLoading}),(0,u.jsx)("div",{style:{display:!0===e.isLoading?"none":""},children:e.children})]})}function c(e){return(0,u.jsx)("div",{className:"box ".concat(e.className),children:(0,u.jsx)("div",{children:e.children})})}},698:function(e,n,t){t.d(n,{C:function(){return o},D:function(){return r}});var a=t(5671),i=t(3144),r=function(){function e(n){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==n){var t=n.data.pageInfo;this.total=t.totalCount,this.pageNumber=t.currentPage,this.pageSize=t.pageSize}}return(0,i.Z)(e,[{key:"handleChangePage",value:function(n,t,a){this.pageNumber=n,this.pageSize=t,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(n,t,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(n,t){t(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:n}}}))}}]),e}(),o=function(){function e(n,t){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==n&&(this.column=n,this.esc=t)}return(0,i.Z)(e,[{key:"setColumn",value:function(n,t){t(new e(n,this.esc))}},{key:"setDesc",value:function(n,t){t(new e(this.column,n))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(9439),i=t(6106),r=t(914),o=t(5581),u=t(9221),l=t(8245),s=t(2791),c=t(7335),d=t(9256),v=t(2684),f=(t(1708),t(184));function m(e){var n=e.pageInfo,t=e.orderBy,m=(0,s.useState)([]),h=(0,a.Z)(m,2),g=h[0],p=h[1],y=(0,s.useState)(100),b=(0,a.Z)(y,2),x=b[0],k=b[1],S=e.loadData;(0,s.useEffect)((function(){var e=setInterval((function(){k(x-1),1===x&&(k(100),S())}),1e3);return function(){return clearInterval(e)}}),[x,k,S]);var Z=(0,s.useCallback)((function(){if(void 0!==e.column){var n=e.column.map((function(e,n){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}}),[]);p(n)}}),[e.column]);return(0,s.useEffect)((function(){Z()}),[Z]),(0,f.jsxs)("div",{className:"my_table",children:[(0,f.jsx)(d.xu,{children:(0,f.jsxs)(i.Z,{gutter:16,children:[(0,f.jsx)(r.Z,{span:6,children:(0,f.jsx)(v.O,{type:"secondary",value:"Refresh data in ".concat(x),onClick:function(){e.loadData()}})}),(0,f.jsx)(r.Z,{span:12,children:(0,f.jsx)(c.H.Select,{value:null===t||void 0===t?void 0:t.column,onChange:function(n){t.setColumn(n,e.setOrderBy)},options:e.column})}),(0,f.jsx)(r.Z,{span:6,children:(0,f.jsx)(o.Z,{disabled:""===(null===t||void 0===t?void 0:t.column),checked:null===t||void 0===t?void 0:t.esc,onChange:function(n){console.log(n),t.setDesc(n,e.setOrderBy)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,f.jsx)(r.Z,{span:12,children:(0,f.jsx)(u.Z,{style:{display:n.showPagination?"":"none"},current:n.pageNumber,disabled:e.loading,onChange:function(t,a){n.handleChangePage(t,a,e.setPageInfo)},pageSize:n.pageSize,total:n.total})})]})}),(0,f.jsx)(l.Z,{scroll:{y:e.scroll},rowClassName:e.rowClassName,style:{paddingTop:"10px"},bordered:!0,loading:e.loading,pagination:!1,dataSource:e.dataSource,size:"small",columns:g})]})}},8776:function(e,n,t){t.d(n,{E:function(){return u},y:function(){return o}});var a=t(2426),i=t.n(a),r=t(184);function o(e){var n="";return n=void 0!==e.value&&""!==e.value&&null!==e.value?i()(e.value).format("DD/MM/YYYY"):"",(0,r.jsx)("span",{children:n})}function u(e){var n="";return n=void 0!==e.value&&""!==e.value&&null!==e.value?i()(e.value).format("DD/MM/YYYY HH:mm:ss"):"",(0,r.jsx)("span",{children:n})}},8771:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(9439),i=t(2791),r=t(5594),o=t(2496),u=t(8885),l=t(1095),s=t(6106),c=t(914),d=t(1830),v=t.n(d),f=t(3778),m=t(7335),h=t(2684),g=t(3433),p=t(184);function y(e){var n=e.keyData,t=e.visible,r=e.setVisible,l=e.setIsLoading,s=(0,i.useState)([]),c=(0,a.Z)(s,2),d=c[0],v=c[1],y=(0,i.useCallback)((function(){t&&(l(!0),o.eV.GetTemplate(n).then((function(e){e.isSuccess&&v(e.data)})).finally((function(){return l(!1)})))}),[t,n,l]);function b(e,n){var t=d;t[e].check=n,v((0,g.Z)(t))}return(0,i.useEffect)((function(){y()}),[y]),(0,p.jsxs)(u.Z,{title:"Ch\u1ecdn template",open:t,onClose:function(){r(!1)},children:[d.map((function(e,n){return(0,p.jsx)("div",{children:(0,p.jsx)(m.H.Switch,{value:e.check,label:e.code,onChange:function(e){b(n,e)}})},n)})),(0,p.jsx)(h.O,{onClick:function(){var e=d;l(!0),o.eV.SaveTemplate(n,e).then((function(e){e.isSuccess&&f.Fn.PrintMsgSuccessV2(e)})).finally((function(){return l(!1)}))},value:"L\u01b0u"})]})}function b(e){var n=e.isLoading,t=e.setIsLoading,r=e.keyData,d=e.setKeyData,g=e.visible,b=e.setVisible,x=e.loadData,k=(0,i.useState)(""),S=(0,a.Z)(k,2),Z=S[0],C=S[1],j=(0,i.useState)(""),N=(0,a.Z)(j,2),D=N[0],w=N[1],I=(0,i.useState)(""),V=(0,a.Z)(I,2),G=V[0],P=V[1],R=(0,i.useState)(0),T=(0,a.Z)(R,2),L=T[0],E=T[1],O=(0,i.useState)(!1),q=(0,a.Z)(O,2),M=q[0],z=q[1],Y=(0,i.useCallback)((function(){void 0!==r&&(t(!0),o.eV.GetDetail(r).then((function(e){e.isSuccess&&(C(e.data.name),w(e.data.comment),P(e.data.secret),E(e.data.status))})).finally((function(){return t(!1)})))}),[r,t]);function A(){b(!1),void 0!==r&&d(void 0)}return(0,i.useEffect)((function(){Y()}),[Y]),(0,p.jsxs)(u.Z,{title:void 0===r?"Th\xeam app m\u1edbi":"C\u1eadp nh\u1eadt th\xf4ng tin app",open:g,onClose:A,children:[(0,p.jsxs)(l.Z,{layout:"vertical",onSubmitCapture:function(){t(!0);var e={name:Z,comment:D,status:L};void 0===r?function(e){o.eV.Add(e).then((function(e){e.isSuccess&&(x(),f.Fn.PrintMsgSuccessV2(e))})).finally((function(){return t(!1)}))}(e):function(e){o.eV.GetDetail(r).then((function(n){n.isSuccess?(e=f.Fn.GetTimestampV2(n,e),o.eV.Edit(r,e).then((function(e){e.isSuccess&&(x(),f.Fn.PrintMsgSuccessV2(e))})).finally((function(){return t(!1)}))):t(!1)}))}(e)},children:[(0,p.jsx)(m.H.Input,{label:"T\xean App",value:Z,setValue:C}),(0,p.jsx)(m.H.Input,{label:"Ch\xfa th\xedch",value:D,setValue:w}),(0,p.jsx)(m.H.Input,{label:"M\xe3 b\xed m\u1eadt",readOnly:!0,value:G,setValue:P}),(0,p.jsx)(m.H.Select,{label:"Tr\u1ea1ng th\xe1i",value:L,setValue:E,options:[{key:"active",label:"\u0110ang ho\u1ea1t \u0111\u1ed9ng",value:1},{key:"inactive",label:"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng",value:0}]}),(0,p.jsx)(s.Z,{children:(0,p.jsx)(c.Z,{span:24,children:(0,p.jsx)(h.O,{style:{marginBottom:"10px"},isLoading:n,type:"primary",value:"Ch\u1ecdn template",onClick:function(){z(!0)}})})}),(0,p.jsx)(h.O,{type:"success",isLoading:n,htmlType:"submit",value:void 0===r?"Th\xeam":"C\u1eadp nh\u1eadt"}),(0,p.jsx)(h.O,{type:"danger",isLoading:n,onClick:function(){v().fire({title:"X\xe1c nh\u1eadn x\xf3a!",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a app kh\xf4ng?"}).then((function(e){e.isConfirmed&&(t(!0),o.eV.GetDetail(r).then((function(e){e.isSuccess?o.eV.Delete(r,f.Fn.GetTimestampV2(e)).then((function(e){e.isSuccess&&(x(),f.Fn.PrintMsgSuccessV2(e),A())})).finally((function(){return t(!1)})):t(!1)})))}))},value:"X\xf3a"})]}),(0,p.jsx)(y,{keyData:r,visible:M,setVisible:z,isLoading:n,setIsLoading:t})]})}var x=t(2611),k=t(3977),S=t(698),Z=t(8776),C=t(9256);function j(){var e=[new x.Dw({title:"STT",key:"stt",render:function(e,n,t){return f.Fn.RenderSTT(e,n,t,u)}}),new x.Dw({title:"T\xean",key:"name",render:function(e,n){return(0,p.jsx)(h.O,{type:"link",value:e,onClick:function(){var e;e=n.key,O(!0),Y(e)}})}}),new x.Dw({title:"Ch\xfa th\xedch",key:"comment"}),new x.Dw({title:"Key",key:"secret"}),new x.Dw({title:"Tr\u1ea1ng th\xe1i",key:"status",render:function(e){var n={};return n=1===e?{msg:"\u0110ang ho\u1ea1t \u0111\u1ed9ng",color:"blue"}:{msg:"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng",color:"red"},(0,p.jsx)(r.Z,{text:n.msg,color:n.color})}}),new x.Dw({title:"Ng\xe0y th\xeam",key:"createdAt",render:function(e){return(0,p.jsx)(Z.E,{value:e})}}),new x.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i",key:"updatedAt",render:function(e){return(0,p.jsx)(Z.E,{value:e})}})],n=(0,i.useState)(new S.D),t=(0,a.Z)(n,2),u=t[0],l=t[1],s=(0,i.useState)(new S.C),c=(0,a.Z)(s,2),d=c[0],v=c[1],m=(0,i.useState)(!1),g=(0,a.Z)(m,2),y=g[0],j=g[1],N=(0,i.useState)([]),D=(0,a.Z)(N,2),w=D[0],I=D[1],V=(0,i.useState)(!1),G=(0,a.Z)(V,2),P=G[0],R=G[1],T=(0,i.useState)(!1),L=(0,a.Z)(T,2),E=L[0],O=L[1],q=(0,i.useState)(void 0),M=(0,a.Z)(q,2),z=M[0],Y=M[1],A=(0,i.useCallback)((function(){j(!0);var e=new x.LY(u.pageNumber,u.pageSize,d);o.eV.GetList(e).then((function(e){e.isSuccess&&(l(new S.D(e)),I(e.data.pagedData))})).finally((function(){return j(!1)}))}),[u.pageNumber,u.pageSize,d]);function B(){R(!0)}return(0,i.useEffect)((function(){A()}),[A]),(0,p.jsxs)(C.ts,{title:"Qu\u1ea3n l\xed app mail",isLoading:y,buttonList:function(){return(0,p.jsx)(h.O,{type:"primary",onClick:B,value:"Th\xeam app m\u1edbi"})},children:[(0,p.jsx)(k.Z,{pageInfo:u,setPageInfo:l,column:e,dataSource:w,loading:y,loadData:A,orderBy:d,setOrderBy:v}),(0,p.jsx)(b,{keyData:void 0,loadData:A,isLoading:y,setIsLoading:j,visible:P,setVisible:R}),(0,p.jsx)(b,{keyData:z,setKeyData:Y,loadData:A,isLoading:y,setIsLoading:j,visible:E,setVisible:O})]})}},2611:function(e,n,t){t.d(n,{Dw:function(){return r},LY:function(){return o}});var a=t(3144),i=t(5671),r=(0,a.Z)((function e(n){(0,i.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=n.title,this.key=n.key,void 0===n.dataIndex?this.dataIndex=n.key:this.dataIndex=n.dataIndex,this.render=n.render,this.className=n.className,this.width=n.width,this.label=n.title,this.value=n.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==n.disabled&&(this.disabled=n.disabled)})),o=function(){function e(n,t,a){(0,i.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=n,this.pageSize=t,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},2496:function(e,n,t){t.d(n,{Cp:function(){return s},KH:function(){return c},PH:function(){return o},eV:function(){return u},hl:function(){return d},rG:function(){return l}});var a=t(5671),i=t(3144),r=t(1285),o=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/templates?".concat(e.generateQueryString());return r.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/templates/".concat(e);return r.b.SendReq(n,"Get")}},{key:"Detail",value:function(e){var n="v2/mails/templates/".concat(e);return r.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return r.b.SendReq("v2/mails/templates","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/templates/".concat(e);return r.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/templates/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.b.SendReq(t,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/apps?".concat(e.generateQueryString());return r.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/apps/".concat(e);return r.b.SendReq(n,"get")}},{key:"Add",value:function(e){return r.b.SendReq("v2/mails/apps","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/apps/".concat(e);return r.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/apps/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.b.SendReq(t,"Delete")}},{key:"GetTemplate",value:function(e){var n="v2/mails/apps/".concat(e,"/templates");return r.b.SendReq(n,"Get")}},{key:"SaveTemplate",value:function(e,n){var t="v2/mails/apps/".concat(e,"/templates");return r.b.SendReq(t,"Put",n)}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e,n,t,a){var i="storedManage?".concat(e.generateQueryString());return r.T.Get(i,n,t,a)}},{key:"GetDetail",value:function(e,n,t,a){var i="storedManage/".concat(e);return r.T.Get(i,n,t,a)}},{key:"Add",value:function(e,n,t,a){return r.T.Post("storedManage",e,n,t,a)}},{key:"Edit",value:function(e,n,t,a,i){var o="storedManage/".concat(e);return r.T.Put(o,n,t,a,i)}},{key:"Delete",value:function(e,n,t,a,i){var o="storedManage/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.T.Delete(o,t,a,i)}},{key:"SearchName",value:function(e,n,t,a){var i="storedManage/queryStored?query=".concat(e);return r.T.Get(i,n,t,a)}},{key:"GetLinkStored",value:function(e,n,t,a,i){var o;return o=void 0!==e?"storedManage/".concat(e,"/linkStored"):"storedManage/linkStored?".concat(null===n||void 0===n?void 0:n.generateQueryString()),r.T.Get(o,t,a,i)}},{key:"GetDetailLinkStored",value:function(e,n,t,a){var i="storedManage/linkStored/".concat(e);return r.T.Get(i,n,t,a)}},{key:"AddLinkStored",value:function(e,n,t,a){return r.T.Post("storedManage/linkStored",e,n,t,a)}},{key:"EditLinkStored",value:function(e,n,t,a,i){var o="storedManage/linkStored/".concat(e);return r.T.Put(o,n,t,a,i)}},{key:"DeleteLinkStored",value:function(e,n,t,a,i){var o="storedManage/linkStored/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.T.Delete(o,t,a,i)}}]),e}(),s=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(){return r.b.SendReq("v2/mains/logging","Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/logging/".concat(e);return r.b.SendReq(n,"Get")}},{key:"GetListLogAction",value:function(e){var n="v2/mains/logging/logActions?".concat(e.generateQueryString());return r.b.SendReq(n,"Get")}},{key:"ReportDetail",value:function(){return r.b.SendReq("v2/mains/logging/report","Get")}},{key:"GetChart",value:function(e){var n="v2/mains/logging/chart?numberItem=".concat(e);return r.b.SendReq(n,"Get")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/versionManages?".concat(e.generateQueryString());return r.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/versionManages/".concat(e);return r.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return r.b.SendReq("v2/mains/versionManages","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/versionManages/".concat(e);return r.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/versionManages/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.b.SendReq(t,"Delete")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e){var n="admin/menus?".concat(e.generateQueryString());return r.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="admin/menus/".concat(e);return r.b.SendReq(n,"Get")}},{key:"Add",value:function(e){return r.b.SendReq("admin/menus","Post",e)}},{key:"Edit",value:function(e,n){var t="admin/menus/".concat(e);return r.b.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="admin/menus/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.b.SendReq(t,"Delete")}},{key:"Query",value:function(e){var n="admin/menus/query?data=".concat(e);return r.b.SendReq(n,"Get")}}]),e}()},5594:function(e,n,t){t.d(n,{Z:function(){return Z}});var a=t(4942),i=t(1002),r=t(7462),o=t(1694),u=t.n(o),l=t(5207),s=t(2791),c=t(1929),d=t(1113),v=t(4466);function f(e){return v.Y.includes(e)}var m=function(e){var n,t=e.className,i=e.prefixCls,o=e.style,l=e.color,d=e.children,v=e.text,m=e.placement,h=void 0===m?"end":m,g=s.useContext(c.E_),p=g.getPrefixCls,y=g.direction,b=p("ribbon",i),x=f(l),k=u()(b,"".concat(b,"-placement-").concat(h),(n={},(0,a.Z)(n,"".concat(b,"-rtl"),"rtl"===y),(0,a.Z)(n,"".concat(b,"-color-").concat(l),x),n),t),S={},Z={};return l&&!x&&(S.background=l,Z.color=l),s.createElement("div",{className:"".concat(b,"-wrapper")},d,s.createElement("div",{className:k,style:(0,r.Z)((0,r.Z)({},S),o)},s.createElement("span",{className:"".concat(b,"-text")},v),s.createElement("div",{className:"".concat(b,"-corner"),style:Z})))},h=t(9439);function g(e){var n,t=e.prefixCls,a=e.value,i=e.current,r=e.offset,o=void 0===r?0:r;return o&&(n={position:"absolute",top:"".concat(o,"00%"),left:0}),s.createElement("span",{style:n,className:u()("".concat(t,"-only-unit"),{current:i})},a)}function p(e,n,t){for(var a=e,i=0;(a+10)%10!==n;)a+=t,i+=t;return i}function y(e){var n,t,a=e.prefixCls,i=e.count,o=e.value,u=Number(o),l=Math.abs(i),c=s.useState(u),d=(0,h.Z)(c,2),v=d[0],f=d[1],m=s.useState(l),y=(0,h.Z)(m,2),b=y[0],x=y[1],k=function(){f(u),x(l)};if(s.useEffect((function(){var e=setTimeout((function(){k()}),1e3);return function(){clearTimeout(e)}}),[u]),v===u||Number.isNaN(u)||Number.isNaN(v))n=[s.createElement(g,(0,r.Z)({},e,{key:u,current:!0}))],t={transition:"none"};else{n=[];for(var S=u+10,Z=[],C=u;C<=S;C+=1)Z.push(C);var j=Z.findIndex((function(e){return e%10===v}));n=Z.map((function(n,t){var a=n%10;return s.createElement(g,(0,r.Z)({},e,{key:n,value:a,offset:t-j,current:t===j}))})),t={transform:"translateY(".concat(-p(v,u,b<l?1:-1),"00%)")}}return s.createElement("span",{className:"".concat(a,"-only"),style:t,onTransitionEnd:k},n)}var b=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},x=function(e){var n=e.prefixCls,t=e.count,a=e.className,i=e.motionClassName,o=e.style,l=e.title,v=e.show,f=e.component,m=void 0===f?"sup":f,h=e.children,g=b(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),p=(0,s.useContext(c.E_).getPrefixCls)("scroll-number",n),x=(0,r.Z)((0,r.Z)({},g),{"data-show":v,style:o,className:u()(p,a,i),title:l}),k=t;if(t&&Number(t)%1===0){var S=String(t).split("");k=S.map((function(e,n){return s.createElement(y,{prefixCls:p,count:Number(t),value:e,key:S.length-n})}))}return o&&o.borderColor&&(x.style=(0,r.Z)((0,r.Z)({},o),{boxShadow:"0 0 0 1px ".concat(o.borderColor," inset")})),h?(0,d.Tm)(h,(function(e){return{className:u()("".concat(p,"-custom-component"),null===e||void 0===e?void 0:e.className,i)}})):s.createElement(m,x,k)},k=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(t[a[i]]=e[a[i]])}return t},S=function(e){var n,t,o=e.prefixCls,v=e.scrollNumberPrefixCls,m=e.children,h=e.status,g=e.text,p=e.color,y=e.count,b=void 0===y?null:y,S=e.overflowCount,Z=void 0===S?99:S,C=e.dot,j=void 0!==C&&C,N=e.size,D=void 0===N?"default":N,w=e.title,I=e.offset,V=e.style,G=e.className,P=e.showZero,R=void 0!==P&&P,T=k(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),L=s.useContext(c.E_),E=L.getPrefixCls,O=L.direction,q=E("badge",o),M=b>Z?"".concat(Z,"+"):b,z="0"===M||0===M,Y=(null!==h&&void 0!==h||null!==p&&void 0!==p)&&(null===b||z),A=j&&!z,B=A?"":M,H=(0,s.useMemo)((function(){return(null===B||void 0===B||""===B||z&&!R)&&!A}),[B,z,R,A]),Q=(0,s.useRef)(b);H||(Q.current=b);var F=Q.current,K=(0,s.useRef)(B);H||(K.current=B);var U=K.current,_=(0,s.useRef)(A);H||(_.current=A);var X=(0,s.useMemo)((function(){if(!I)return(0,r.Z)({},V);var e={marginTop:I[1]};return"rtl"===O?e.left=parseInt(I[0],10):e.right=-parseInt(I[0],10),(0,r.Z)((0,r.Z)({},e),V)}),[O,I,V]),W=null!==w&&void 0!==w?w:"string"===typeof F||"number"===typeof F?F:void 0,J=H||!g?null:s.createElement("span",{className:"".concat(q,"-status-text")},g),$=F&&"object"===(0,i.Z)(F)?(0,d.Tm)(F,(function(e){return{style:(0,r.Z)((0,r.Z)({},X),e.style)}})):void 0,ee=u()((n={},(0,a.Z)(n,"".concat(q,"-status-dot"),Y),(0,a.Z)(n,"".concat(q,"-status-").concat(h),!!h),(0,a.Z)(n,"".concat(q,"-status-").concat(p),f(p)),n)),ne={};p&&!f(p)&&(ne.background=p);var te=u()(q,(t={},(0,a.Z)(t,"".concat(q,"-status"),Y),(0,a.Z)(t,"".concat(q,"-not-a-wrapper"),!m),(0,a.Z)(t,"".concat(q,"-rtl"),"rtl"===O),t),G);if(!m&&Y){var ae=X.color;return s.createElement("span",(0,r.Z)({},T,{className:te,style:X}),s.createElement("span",{className:ee,style:ne}),g&&s.createElement("span",{style:{color:ae},className:"".concat(q,"-status-text")},g))}return s.createElement("span",(0,r.Z)({},T,{className:te}),m,s.createElement(l.Z,{visible:!H,motionName:"".concat(q,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var n,t=e.className,i=E("scroll-number",v),o=_.current,l=u()((n={},(0,a.Z)(n,"".concat(q,"-dot"),o),(0,a.Z)(n,"".concat(q,"-count"),!o),(0,a.Z)(n,"".concat(q,"-count-sm"),"small"===D),(0,a.Z)(n,"".concat(q,"-multiple-words"),!o&&U&&U.toString().length>1),(0,a.Z)(n,"".concat(q,"-status-").concat(h),!!h),(0,a.Z)(n,"".concat(q,"-status-").concat(p),f(p)),n)),c=(0,r.Z)({},X);return p&&!f(p)&&((c=c||{}).background=p),s.createElement(x,{prefixCls:i,show:!H,motionClassName:t,className:l,count:U,title:W,style:c,key:"scrollNumber"},$)})),J)};S.Ribbon=m;var Z=S}}]);
//# sourceMappingURL=771.1133f1dd.chunk.js.map