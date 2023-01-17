"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[440],{7335:function(e,t,n){n.d(t,{H:function(){return y}});var a=n(5671),o=n(3144),s=n(8047),c=n(2409),r=n(7123),u=n(1081),i=n(6106),l=n(914),d=n(6435),v=n(5581),p=n(2014),f=n(438),g=n.n(f),k=n(184),h=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,k.jsx)(s.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(h.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(r.Z,{value:g()(e.value),onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return g()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(r.Z,{showTime:!0,value:g()(e.value),onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return g()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})})}},{key:"NumberColSpan",value:function(t){return(0,k.jsx)("div",{children:(0,k.jsxs)(i.Z,{className:t.className,children:[(0,k.jsx)(l.Z,{span:t.colSpan1,children:(0,k.jsx)("span",{children:t.label})}),(0,k.jsx)(l.Z,{span:t.colSpan2,children:(0,k.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=s.Z.TextArea;return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=s.Z.Password;return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=s.Z.Search;return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"Checkbox",value:function(e){return(0,k.jsx)(p.Z,{checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t.target.checked),void 0!==e.onChange&&e.onChange(t.target.checked)},children:e.label})}},{key:"File",value:function(e){return(0,k.jsx)(c.Z.Item,{label:e.label,children:(0,k.jsx)(s.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},698:function(e,t,n){n.d(t,{C:function(){return c},D:function(){return s}});var a=n(5671),o=n(3144),s=function(){function e(t){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==t){var n=t.data.pageInfo;this.total=n.totalCount,this.pageNumber=n.currentPage,this.pageSize=n.pageSize}}return(0,o.Z)(e,[{key:"handleChangePage",value:function(t,n,a){this.pageNumber=t,this.pageSize=n,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(t,n,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(t,n){n(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:t}}}))}}]),e}(),c=function(){function e(t,n){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==t&&(this.column=t,this.esc=n)}return(0,o.Z)(e,[{key:"setColumn",value:function(t,n){n(new e(t,this.esc))}},{key:"setDesc",value:function(t,n){n(new e(this.column,t))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(9439),o=n(6106),s=n(914),c=n(5581),r=n(9221),u=n(1738),i=n(2791),l=n(7335),d=n(9256),v=n(2684),p=(n(1708),n(184));function f(e){var t=e.column,n=e.setOrderBy,f=e.setPageInfo,g=e.loading,k=e.dataSource,h=e.scroll,y=e.rowClassName,S=e.loadData,m=e.pageInfo,j=e.orderBy,M=(0,i.useState)([]),R=(0,a.Z)(M,2),b=R[0],Z=R[1],x=(0,i.useState)(100),D=(0,a.Z)(x,2),q=D[0],C=D[1];(0,i.useEffect)((function(){var e=setInterval((function(){C(q-1),1===q&&(C(100),S())}),1e3);return function(){return clearInterval(e)}}),[q,C,S]);var G=(0,i.useCallback)((function(){void 0!==t&&Z(t.map((function(e,t){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}})))}),[t]);return(0,i.useEffect)((function(){G()}),[G]),(0,p.jsxs)("div",{className:"my_table",children:[(0,p.jsx)(d.xu,{children:(0,p.jsxs)(o.Z,{gutter:16,children:[(0,p.jsx)(s.Z,{span:6,children:(0,p.jsx)(v.O,{type:"secondary",value:"Refresh data in ".concat(q),isLoading:g,onClick:function(){S()}})}),(0,p.jsx)(s.Z,{span:12,children:(0,p.jsx)(l.H.Select,{value:null===j||void 0===j?void 0:j.column,onChange:function(e){j.setColumn(e,n)},options:t})}),(0,p.jsx)(s.Z,{span:6,children:(0,p.jsx)(c.Z,{disabled:""===(null===j||void 0===j?void 0:j.column),checked:null===j||void 0===j?void 0:j.esc,onChange:function(e){j.setDesc(e,n)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,p.jsx)(s.Z,{span:12,children:(0,p.jsx)(r.Z,{style:{display:m.showPagination?"":"none"},current:m.pageNumber,disabled:g,onChange:function(e,t){m.handleChangePage(e,t,f)},pageSize:m.pageSize,total:m.total})})]})}),(0,p.jsx)(u.Z,{scroll:{y:h},rowClassName:y,style:{paddingTop:"10px"},bordered:!0,loading:g,pagination:!1,dataSource:k,size:"small",columns:b})]})}},8776:function(e,t,n){n.d(t,{E:function(){return r},y:function(){return c}});var a=n(438),o=n.n(a),s=n(184);function c(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?o()(t.timeLocal).format("DD/MM/YYYY"):"";return(0,s.jsx)("span",{children:n})}function r(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?o()(t.timeLocal).format("DD/MM/YYYY HH:mm:ss"):"";return(0,s.jsx)("span",{children:n})}},6440:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(9439),o=n(2791),s=n(7689),c=n(3778),r=n(2611),u=n(5349),i=n(7335),l=n(9256),d=n(2684),v=n(698),p=n(3977),f=n(8776),g=n(8885),k=n(2409),h=n(1830),y=n.n(h),S=n(184);function m(e){var t=(0,o.useState)(),n=(0,a.Z)(t,2),s=n[0],r=n[1],l=(0,o.useState)(!1),v=(0,a.Z)(l,2),p=v[0],f=v[1],h=e.projectKey,m=e.sprintKey,j=e.keyData,M=e.setKeyData,R=e.isLoading,b=e.setIsLoading,Z=e.visible,x=e.setVisible,D=e.loadData,q=(0,o.useCallback)((function(){void 0!==j&&(b(!0),u.NX.GetDetail(h,m,j).then((function(e){e.isSuccess&&(r(e.data.content),f(e.data.isCheck))})).finally((function(){return b(!1)})))}),[j,h,m,b]);function C(){x(!1),void 0!==M&&M(void 0)}return(0,o.useEffect)((function(){q()}),[q]),(0,S.jsx)(g.Z,{title:void 0===j?"Th\xeam m\u1edbi":"Ch\u1ec9nh s\u1eeda",open:Z,onClose:C,children:(0,S.jsxs)(k.Z,{layout:"vertical",onSubmitCapture:function(){var e={content:s,isCheck:p};b(!0),void 0!==j?function(e){u.NX.GetDetail(h,m,j).then((function(t){t.isSuccess?(e=c.Fn.GetTimestamp(t,e),u.NX.Edit(h,m,j,e).then((function(e){e.isSuccess?(c.Fn.PrintMsgSuccess(e),D()):b(!1)}))):b(!1)}))}(e):function(e){u.NX.Add(h,m,e).then((function(e){e.isSuccess&&(c.Fn.PrintMsgSuccess(e),D())})).finally((function(){return b(!1)}))}(e)},children:[(0,S.jsx)(i.H.Input,{label:"N\u1ed9i dung",value:s,setValue:r}),(0,S.jsx)(i.H.Switch,{label:"\u0110\xe3 ho\xe0n th\xe0nh",value:p,setValue:f}),(0,S.jsx)(d.O,{isLoading:R,htmlType:"submit",type:"success",value:void 0===j?"Th\xeam":"Ch\u1ec9nh s\u1eeda"}),(0,S.jsx)(d.O,{isLoading:R,value:"X\xf3a",type:"danger",disabled:void 0===j,onClick:function(){b(!0),y().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng?"}).then((function(e){e.isConfirmed?u.NX.GetDetail(h,m,j).then((function(e){e.isSuccess?u.NX.Delete(h,m,j,c.Fn.GetTimestamp(e)).then((function(e){e.isSuccess?(c.Fn.PrintMsgSuccess(e),D(),C()):b(!1)})):b(!1)})):b(!1)}))}})]})})}function j(){var e=(0,s.UO)().key,t=(0,s.UO)().sprintKey,n=(0,o.useState)(),g=(0,a.Z)(n,2),k=g[0],h=g[1],y=(0,o.useState)(),j=(0,a.Z)(y,2),M=j[0],R=j[1],b=[new r.Dw({title:"STT",key:"stt",render:function(e,t,n){return c.Fn.RenderSTT(e,t,n,D)}}),new r.Dw({title:"N\u1ed9i dung",key:"content",render:function(e,t){return(0,S.jsx)(d.O,{type:"link",value:e,onClick:function(){var e;e=t.key,H(!0),W(e)}})}}),new r.Dw({title:"\u0110\xe3 ho\xe0n th\xe0nh",key:"isCheck",render:function(n,a){return(0,S.jsx)(i.H.Switch,{onChange:function(n){!function(n,a){O(!0);var o={isCheck:n};!function(n,a){u.NX.GetDetail(e,t,n).then((function(o){o.isSuccess?(a=c.Fn.GetTimestamp(o,a),u.NX.Edit(e,t,n,a).then((function(e){e.isSuccess?(c.Fn.PrintMsgSuccess(e),$()):O(!1)}))):O(!1)}))}(a,o)}(n,a.key)},value:n})}}),new r.Dw({title:"Ng\xe0y t\u1ea1o",key:"createdAt",render:function(e){return(0,S.jsx)(f.E,{value:e})}}),new r.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt",key:"updatedAt",render:function(e){return(0,S.jsx)(f.E,{value:e})}})],Z=(0,o.useState)(new v.D),x=(0,a.Z)(Z,2),D=x[0],q=x[1],C=(0,o.useState)(new v.C),G=(0,a.Z)(C,2),w=G[0],P=G[1],I=(0,o.useState)([]),N=(0,a.Z)(I,2),L=N[0],V=N[1],A=(0,o.useState)(!1),T=(0,a.Z)(A,2),E=T[0],O=T[1],z=(0,o.useState)(!1),Y=(0,a.Z)(z,2),U=Y[0],B=Y[1],F=(0,o.useState)(!1),Q=(0,a.Z)(F,2),X=Q[0],H=Q[1],K=(0,o.useState)(void 0),_=(0,a.Z)(K,2),J=_[0],W=_[1],$=(0,o.useCallback)((function(){O(!0);var n=new r.LY(D.pageNumber,D.pageSize,w);u.NX.GetList(e,t,n).then((function(e){e.isSuccess&&(q(new v.D(e)),V(e.data.pagedData),0!==e.data.pagedData.length&&(h(e.data.pagedData[0].sprint.project.name),R(e.data.pagedData[0].sprint.name)))})).finally((function(){return O(!1)}))}),[D.pageNumber,D.pageSize,w,e,t]);function ee(){B(!0)}return(0,o.useEffect)((function(){$()}),[$]),(0,S.jsxs)(l.ts,{title:"To do list",isLoading:E,buttonList:function(){return(0,S.jsx)(d.O,{type:"primary",onClick:ee,value:"Th\xeam m\u1edbi"})},children:[(0,S.jsxs)("h3",{children:[(0,S.jsx)("strong",{children:"T\xean d\u1ef1 \xe1n: "}),k]}),(0,S.jsxs)("h4",{children:[(0,S.jsx)("strong",{children:"Giai \u0111o\u1ea1n: "}),M]}),(0,S.jsx)(p.Z,{pageInfo:D,setPageInfo:q,orderBy:w,setOrderBy:P,column:b,dataSource:L,loading:E,loadData:$}),(0,S.jsx)(m,{projectKey:e,sprintKey:t,visible:U,setVisible:B,loadData:$,isLoading:E,setIsLoading:O}),(0,S.jsx)(m,{keyData:J,setKeyData:W,projectKey:e,sprintKey:t,visible:X,setVisible:H,loadData:$,isLoading:E,setIsLoading:O})]})}},3778:function(e,t,n){n.d(t,{Fn:function(){return c}});var a=n(5671),o=n(3144),s=n(8062),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){s.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){s.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,t,n,a){return(a.pageNumber-1)*a.pageSize+n+1}},{key:"PrintMsgSuccess_no_use",value:function(e){s.ZP.success(e.data.message)}}]),e}();c.GetIndexInArray=function(e,t,n){for(var a=-1,o=0;o<e.length;o++)if(e[o][t]===n){a=o;break}return a},c.GetIndexInArrayStr=function(e,t){for(var n=-1,a=0;a<e.length;a++)if(e[a].trim()===t.trim()){n=a;break}return n},c.SetPageInfo=function(e,t,n,a){var o=e.data.data.pageInfo;t(o.totalCount),n(o.currentPage),a(o.pageSize)},c.GetTimestamp=function(e,t){try{return null===t||void 0===t?e.data.timestamp:(t.timestamp=e.data.timestamp,t)}catch(n){console.log(n)}},c.GetTimestamp_no_use=function(e,t){try{return null===t||void 0===t?e.data.data.timestamp:(t.timestamp=e.data.data.timestamp,t)}catch(n){console.log(n)}}},2611:function(e,t,n){n.d(t,{Dw:function(){return s},LY:function(){return c}});var a=n(3144),o=n(5671),s=(0,a.Z)((function e(t){(0,o.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=t.title,this.key=t.key,void 0===t.dataIndex?this.dataIndex=t.key:this.dataIndex=t.dataIndex,this.render=t.render,this.className=t.className,this.width=t.width,this.label=t.title,this.value=t.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==t.disabled&&(this.disabled=t.disabled)})),c=function(){function e(t,n,a){(0,o.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=t,this.pageSize=n,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},5349:function(e,t,n){n.d(t,{GH:function(){return k},Lc:function(){return g},NX:function(){return u},RC:function(){return i},Su:function(){return l},Tz:function(){return p},Zg:function(){return d},bY:function(){return c},bt:function(){return h},gU:function(){return r},jz:function(){return v},zy:function(){return f}});var a=n(5671),o=n(3144),s=n(1285),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(s.p.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetStatistic",value:function(){return s.p.SendReq("v2/tools/taskManages/projects/statistic","Get")}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return s.p.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.p.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return s.p.SendReq(n,"Post",t)}},{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects?".concat(e.generateQueryString(),"&showIsClosed=").concat(t);return s.p.SendReq(n,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return s.p.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return s.p.SendReq(t,"Get")}},{key:"Add",value:function(e){return s.p.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return s.p.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return s.p.SendReq(n,"Delete")}}]),e}(),r=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return s.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return s.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return s.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.p.SendReq(a,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return s.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return s.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return s.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.p.SendReq(o,"Delete")}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return s.p.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.p.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return s.p.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return s.p.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.p.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/query?type=").concat(t);return s.p.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return s.p.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return s.p.SendReq(t,"Get",void 0,!0)}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return s.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return s.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return s.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.p.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return s.p.SendReq(n,"Get")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders?").concat(t.generateQueryString());return s.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return s.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders");return s.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return s.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.p.SendReq(a,"Delete")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return s.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return s.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return s.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return s.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.p.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/exec");return s.p.SendReq(a,"Get")}},{key:"Query",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/apis/query?q=").concat(t);return s.p.SendReq(n,"Get")}}]),e}(),p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Getlist",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return s.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a);return s.p.SendReq(o,"Get")}},{key:"SaveResponse",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return s.p.SendReq(o,"Post",a)}},{key:"Delete",value:function(e,t,n,a,o){var c="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a,"?timestamp=").concat(encodeURIComponent(o));return s.p.SendReq(c,"Delete")}}]),e}(),f=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e){var t="v2/tools/taskManages/workflows?".concat(e.generateQueryString());return s.p.SendReq(t,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return s.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows");return s.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return s.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.p.SendReq(a,"Delete")}}]),e}(),g=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details?").concat(e.generateQueryString(),"&orders=true");return s.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return s.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details");return s.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return s.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.p.SendReq(o,"Delete")}},{key:"SwapOrder",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details/").concat(e,"/swapOrders?isNext=").concat(a);return s.p.SendReq(o,"Post")}}]),e}(),k=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories?").concat(e.generateQueryString());return s.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e);return s.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories");return s.p.SendReq(a,"Post",e)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e);return s.p.SendReq(o,"Put",t)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e,"?timestamp=").concat(encodeURIComponent(t));return s.p.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e,"/exec");return s.p.SendReq(a,"Get")}}]),e}(),h=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(t,"/documentApi/public?").concat(e.generateQueryString());return s.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return s.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public");return s.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return s.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return s.p.SendReq(a,"Delete")}},{key:"GetListDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return s.p.SendReq(n,"Get")}},{key:"UpdateDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return s.p.SendReq(a,"Post",n)}},{key:"GetListPublicDocument",value:function(e,t){return s.p.SendReqV2({url:"v2/tools/taskManages/publicDocuments/".concat(e,"?replaceVar=").concat(t),method:s.O.Get,isNoAuth:!0})}},{key:"GetListPublicDocumentResponse",value:function(e,t){return s.p.SendReqV2({url:"v2/tools/taskManages/publicDocuments/".concat(e,"/responses/").concat(t),method:s.O.Get,isNoAuth:!0})}}]),e}()}}]);
//# sourceMappingURL=440.6a8bce14.chunk.js.map