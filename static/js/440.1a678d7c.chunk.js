"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[440],{7335:function(t,e,n){n.d(e,{H:function(){return y}});var a=n(5671),o=n(3144),s=n(8678),i=n(1095),r=n(7123),u=n(3344),c=n(6106),l=n(914),d=n(6435),v=n(5581),f=n(2426),h=n.n(f),p=n(184),k=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,null,[{key:"Input",value:function(t){return(0,p.jsx)(s.Z,{onClick:t.onClick,value:t.value,onChange:function(e){void 0!==t.onChange&&t.onChange(e.target.value),void 0!==t.setValue&&t.setValue(e.target.value)},required:t.required,readOnly:t.readOnly})}}]),t}(),y=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,null,[{key:"Input",value:function(t){return(0,p.jsx)(i.Z.Item,{label:t.label,children:(0,p.jsx)(k.Input,{onClick:t.onClick,onChange:t.onChange,value:t.value,setValue:t.setValue,required:t.required,readOnly:t.readOnly})})}},{key:"DatePicker",value:function(t){return(0,p.jsx)(i.Z.Item,{label:t.label,children:(0,p.jsx)(r.Z,{value:t.value,onChange:function(e){void 0!==t.setValue&&t.setValue(e)},format:function(t){return h()(t).format("DD/MM/YYYY")},inputReadOnly:t.readOnly})})}},{key:"DateTimePicker",value:function(t){return(0,p.jsx)(i.Z.Item,{label:t.label,children:(0,p.jsx)(r.Z,{showTime:!0,value:t.value,onChange:function(e){void 0!==t.setValue&&t.setValue(e)},format:function(t){return h()(t).format("DD/MM/YYYY HH:mm:ss")},disabled:t.readOnly})})}},{key:"Number",value:function(t){return(0,p.jsx)(u.Z,{min:t.min,max:t.max,value:t.value,onChange:function(e){void 0!==t.setValue&&t.setValue(e)}})}},{key:"NumberColSpan",value:function(e){return(0,p.jsx)("div",{children:(0,p.jsxs)(c.Z,{className:e.className,children:[(0,p.jsx)(l.Z,{span:e.colSpan1,children:(0,p.jsx)("span",{children:e.label})}),(0,p.jsx)(l.Z,{span:e.colSpan2,children:(0,p.jsx)(t.Number,{min:e.min,max:e.max,value:e.value,setValue:e.setValue})})]})})}},{key:"Select",value:function(t){return(0,p.jsx)(i.Z.Item,{label:t.label,children:(0,p.jsx)(d.Z,{options:t.options,value:t.value,onChange:function(e){void 0!==t.setValue&&t.setValue(e),void 0!==t.onChange&&t.onChange(e)}})})}},{key:"TextArea",value:function(t){var e=s.Z.TextArea;return(0,p.jsx)(i.Z.Item,{label:t.label,children:(0,p.jsx)(e,{value:t.value,onChange:function(e){void 0!==t.setValue&&t.setValue(e.target.value)}})})}},{key:"Password",value:function(t){var e=s.Z.Password;return(0,p.jsx)(i.Z.Item,{label:t.label,children:(0,p.jsx)(e,{value:t.value,onChange:function(e){void 0!==t.onChange&&t.onChange(e.target.value),void 0!==t.setValue&&t.setValue(e.target.value)}})})}},{key:"Search",value:function(t){var e=s.Z.Search;return(0,p.jsx)(i.Z.Item,{label:t.label,children:(0,p.jsx)(e,{loading:t.loading,onSearch:t.onSearch,value:t.value,onChange:function(e){void 0!==t.setValue&&t.setValue(e.target.value)}})})}},{key:"Switch",value:function(t){return(0,p.jsx)(i.Z.Item,{label:t.label,children:(0,p.jsx)(v.Z,{loading:t.loading,checked:t.value,onChange:function(e){void 0!==t.setValue&&t.setValue(e)}})})}},{key:"File",value:function(t){return(0,p.jsx)(i.Z.Item,{label:t.label,children:(0,p.jsx)(s.Z,{type:"file",onChange:function(e){void 0!==t.setValue&&t.setValue(e.target.files[0])}})})}}]),t}()},698:function(t,e,n){n.d(e,{C:function(){return i},D:function(){return s}});var a=n(5671),o=n(3144),s=function(){function t(e){if((0,a.Z)(this,t),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==e){var n=e.data.data.pageInfo;this.total=n.totalCount,this.pageNumber=n.currentPage,this.pageSize=n.pageSize}}return(0,o.Z)(t,[{key:"handleChangePage",value:function(e,n,a){this.pageNumber=e,this.pageSize=n,a(new t({data:{data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}}))}},{key:"handleChangeOrderBy",value:function(e,n,a){a(new t({data:{data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}}))}}]),t}(),i=function(){function t(e,n){(0,a.Z)(this,t),this.column="",this.esc=!1,void 0!==e&&(this.column=e,this.esc=n)}return(0,o.Z)(t,[{key:"setColumn",value:function(e,n){n(new t(e,this.esc))}},{key:"setDesc",value:function(e,n){n(new t(this.column,e))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),t}()},3977:function(t,e,n){n.d(e,{Z:function(){return h}});var a=n(9439),o=n(6106),s=n(914),i=n(5581),r=n(9221),u=n(2341),c=n(2791),l=n(7335),d=n(9256),v=n(2684),f=(n(1708),n(184));function h(t){var e=t.pageInfo,n=t.orderBy,h=(0,c.useState)([]),p=(0,a.Z)(h,2),k=p[0],y=p[1],g=(0,c.useState)(100),m=(0,a.Z)(g,2),j=m[0],x=m[1],S=t.loadData;(0,c.useEffect)((function(){var t=setInterval((function(){x(j-1),1===j&&(x(100),S())}),1e3);return function(){return clearInterval(t)}}),[j,x,S]);var C=(0,c.useCallback)((function(){if(void 0!==t.column){var e=t.column.map((function(t,e){return{key:t.key,className:t.className,width:t.width,title:t.title,dataIndex:t.dataIndex,render:t.render}}),[]);y(e)}}),[t.column]);return(0,c.useEffect)((function(){C()}),[C]),(0,f.jsxs)("div",{className:"my_table",children:[(0,f.jsx)(d.xu,{children:(0,f.jsxs)(o.Z,{gutter:16,children:[(0,f.jsx)(s.Z,{span:6,children:(0,f.jsx)(v.O,{value:"Refresh data in ".concat(j),onClick:function(){t.loadData()}})}),(0,f.jsx)(s.Z,{span:12,children:(0,f.jsx)(l.H.Select,{value:null===n||void 0===n?void 0:n.column,onChange:function(e){n.setColumn(e,t.setOrderBy)},options:t.column})}),(0,f.jsx)(s.Z,{span:6,children:(0,f.jsx)(i.Z,{disabled:""===(null===n||void 0===n?void 0:n.column),checked:null===n||void 0===n?void 0:n.esc,onChange:function(e){console.log(e),n.setDesc(e,t.setOrderBy)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,f.jsx)(s.Z,{span:12,children:(0,f.jsx)(r.Z,{style:{display:e.showPagination?"":"none"},current:e.pageNumber,disabled:t.loading,onChange:function(n,a){e.handleChangePage(n,a,t.setPageInfo)},pageSize:e.pageSize,total:e.total})})]})}),(0,f.jsx)(u.Z,{scroll:{y:t.scroll},rowClassName:t.rowClassName,style:{paddingTop:"10px"},bordered:!0,loading:t.loading,pagination:!1,dataSource:t.dataSource,size:"small",columns:k})]})}},8776:function(t,e,n){n.d(e,{E:function(){return r},y:function(){return i}});var a=n(2426),o=n.n(a),s=n(184);function i(t){var e="";return e=void 0!==t.value&&""!==t.value&&null!==t.value?o()(t.value).format("DD/MM/YYYY"):"",(0,s.jsx)("span",{children:e})}function r(t){var e="";return e=void 0!==t.value&&""!==t.value&&null!==t.value?o()(t.value).format("DD/MM/YYYY HH:mm:ss"):"",(0,s.jsx)("span",{children:e})}},6440:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var a=n(9439),o=n(2791),s=n(7689),i=n(2611),r=n(4492),u=n(7335),c=n(9256),l=n(2684),d=n(698),v=n(3977),f=n(8776),h=n(8885),p=n(1095),k=n(1830),y=n.n(k),g=n(3778),m=n(184);function j(t){var e=(0,o.useState)(),n=(0,a.Z)(e,2),s=n[0],i=n[1],c=(0,o.useState)(!1),d=(0,a.Z)(c,2),v=d[0],f=d[1],k=(0,o.useCallback)((function(){void 0!==t.keyData&&r.NX.GetDetail(t.projectKey,t.sprintKey,t.keyData,(function(t){var e=t.data.data;i(e.content),f(e.isCheck)}))}),[t.keyData,t.projectKey,t.sprintKey]);function j(){t.setVisible(!1),void 0!==t.setKeyData&&t.setKeyData(void 0)}return(0,o.useEffect)((function(){k()}),[k]),(0,m.jsx)(h.Z,{title:void 0===t.keyData?"Th\xeam m\u1edbi":"Ch\u1ec9nh s\u1eeda",open:t.visible,onClose:j,children:(0,m.jsxs)(p.Z,{layout:"vertical",onSubmitCapture:function(){var e={content:s,isCheck:v};t.setIsLoading(!0),void 0!==t.keyData?function(e){r.NX.GetDetail(t.projectKey,t.sprintKey,t.keyData,(function(n){e=g.Fn.GetTimestamp(n,e),r.NX.Edit(t.projectKey,t.sprintKey,t.keyData,e,(function(e){g.Fn.PrintMsgSuccess(e),t.loadData()}),(function(){t.setIsLoading(!1)}))}),(function(){t.setIsLoading(!1)}))}(e):function(e){r.NX.Add(t.projectKey,t.sprintKey,e,(function(e){g.Fn.PrintMsgSuccess(e),t.loadData()}),(function(){t.setIsLoading(!1)}))}(e)},children:[(0,m.jsx)(u.H.Input,{label:"N\u1ed9i dung",value:s,setValue:i}),(0,m.jsx)(u.H.Switch,{label:"\u0110\xe3 ho\xe0n th\xe0nh",value:v,setValue:f}),(0,m.jsx)(l.O,{htmlType:"submit",value:void 0===t.keyData?"Th\xeam":"Ch\u1ec9nh s\u1eeda"}),(0,m.jsx)(l.O,{value:"X\xf3a",onClick:function(){t.setIsLoading(!0),y().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a kh\xf4ng?"}).then((function(e){e.isConfirmed?r.NX.GetDetail(t.projectKey,t.sprintKey,t.keyData,(function(e){r.NX.Delete(t.projectKey,t.sprintKey,t.keyData,g.Fn.GetTimestamp(e),(function(e){g.Fn.PrintMsgSuccess(e),t.loadData(),j()}),(function(){t.setIsLoading(!1)}))}),(function(){t.setIsLoading(!1)})):t.setIsLoading(!1)}))}})]})})}function x(){var t=(0,s.UO)().key,e=(0,s.UO)().sprintKey,n=[new i.Dw({title:"STT",key:"stt"}),new i.Dw({title:"N\u1ed9i dung",key:"content",render:function(t,e){return(0,m.jsx)("span",{onClick:function(){var t;t=e.key,A(!0),R(t)},children:t})}}),new i.Dw({title:"\u0110\xe3 ho\xe0n th\xe0nh",key:"isCheck",render:function(t){return(0,m.jsx)(u.H.Switch,{value:t})}}),new i.Dw({title:"Ng\xe0y t\u1ea1o",key:"createdAt",render:function(t){return(0,m.jsx)(f.E,{value:t})}}),new i.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt",key:"updatedAt",render:function(t){return(0,m.jsx)(f.E,{value:t})}})],h=(0,o.useState)(new d.D),p=(0,a.Z)(h,2),k=p[0],y=p[1],g=(0,o.useState)(new d.C),x=(0,a.Z)(g,2),S=x[0],C=x[1],D=(0,o.useState)([]),b=(0,a.Z)(D,2),Z=b[0],T=b[1],w=(0,o.useState)(!1),I=(0,a.Z)(w,2),G=I[0],N=I[1],P=(0,o.useState)(!1),O=(0,a.Z)(P,2),V=O[0],L=O[1],K=(0,o.useState)(!1),Y=(0,a.Z)(K,2),z=Y[0],A=Y[1],B=(0,o.useState)(void 0),E=(0,a.Z)(B,2),M=E[0],R=E[1],U=(0,o.useCallback)((function(){N(!0);var n=new i.LY(k.pageNumber,k.pageSize,S);r.NX.GetList(t,e,n,(function(t){var e=t.data.data.pagedData.map((function(t,e){return{stt:e+1,key:t.key,content:t.content,isCheck:t.isCheck,createdAt:t.createdAt,updatedAt:t.updatedAt}}));T(e)}),void 0,(function(){N(!1)}))}),[k.pageNumber,k.pageSize,S,t,e]);return(0,o.useEffect)((function(){U()}),[U]),(0,m.jsxs)(c.ts,{title:"To do list",children:[(0,m.jsx)(l.O,{onClick:function(){L(!0)},value:"Th\xeam m\u1edbi"}),(0,m.jsx)(v.Z,{pageInfo:k,setPageInfo:y,orderBy:S,setOrderBy:C,column:n,dataSource:Z,loading:G,loadData:U}),(0,m.jsx)(j,{projectKey:t,sprintKey:e,visible:V,setVisible:L,loadData:U,isLoading:G,setIsLoading:N}),(0,m.jsx)(j,{keyData:M,setKeyData:R,projectKey:t,sprintKey:e,visible:z,setVisible:A,loadData:U,isLoading:G,setIsLoading:N})]})}},2611:function(t,e,n){n.d(e,{Dw:function(){return s},LY:function(){return i}});var a=n(3144),o=n(5671),s=(0,a.Z)((function t(e){(0,o.Z)(this,t),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=e.title,this.key=e.key,void 0===e.dataIndex?this.dataIndex=e.key:this.dataIndex=e.dataIndex,this.render=e.render,this.className=e.className,this.width=e.width,this.label=e.title,this.value=e.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==e.disabled&&(this.disabled=e.disabled)})),i=function(){function t(e,n,a){(0,o.Z)(this,t),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=e,this.pageSize=n,this.orderBy=a}return(0,a.Z)(t,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),t}()},4492:function(t,e,n){n.d(e,{NX:function(){return u},RC:function(){return c},Su:function(){return l},bY:function(){return i},gU:function(){return r}});var a=n(5671),o=n(3144),s=n(1285),i=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,null,[{key:"GetQrCode",value:function(t){return"".concat(s.T.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(t)}},{key:"GetClone",value:function(t,e,n,a){var o="tools/tasks/projects/".concat(t,"/duplicate");return s.T.Get(o,e,n,a)}},{key:"ProcessClone",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/duplicate");return s.T.Post(i,e,n,a,o)}},{key:"GetList",value:function(t,e,n,a){var o="tools/tasks/projects?".concat(t.generateQueryString());return s.T.Get(o,e,n,a)}},{key:"GetDetail",value:function(t,e,n,a){var o="tools/tasks/projects/".concat(t);return s.T.Get(o,e,n,a)}},{key:"Search",value:function(t,e,n,a){var o="tools/tasks/projects/query?q=".concat(t);return s.T.Get(o,e,n,a)}},{key:"Add",value:function(t,e,n,a){return console.log(t),s.T.Post("tools/tasks/projects",t,e,n,a)}},{key:"Edit",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t);return s.T.Put(i,e,n,a,o)}},{key:"Delete",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"?timestamp=").concat(encodeURIComponent(e));return s.T.Delete(i,n,a,o)}}]),t}(),r=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,null,[{key:"GetList",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/sprints").concat(void 0===e?"":"?"+(null===e||void 0===e?void 0:e.generateQueryString()));return s.T.Get(i,n,a,o)}},{key:"GetDetail",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/sprints/").concat(e);return s.T.Get(i,n,a,o)}},{key:"Add",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/sprints");return s.T.Post(i,e,n,a,o)}},{key:"Edit",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/sprints/").concat(e);return s.T.Put(r,n,a,o,i)}},{key:"Delete",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"?timestamp=").concat(encodeURIComponent(n));return s.T.Delete(r,a,o,i)}}]),t}(),u=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,null,[{key:"GetList",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return s.T.Get(r,a,o,i)}},{key:"GetDetail",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists/").concat(n);return s.T.Get(r,a,o,i)}},{key:"Add",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists");return s.T.Post(r,n,a,o,i)}},{key:"Edit",value:function(t,e,n,a,o,i,r){var u="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists/").concat(n);return s.T.Put(u,a,o,i,r)}},{key:"Delete",value:function(t,e,n,a,o,i,r){var u="tools/tasks/projects/".concat(t,"/sprints/").concat(e,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return s.T.Delete(u,o,i,r)}}]),t}(),c=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,null,[{key:"GetListSettingStatus",value:function(t,e,n,a){var o="tools/tasks/projects/".concat(t,"/settingStatus");return s.T.Get(o,e,n,a)}},{key:"GetDetailSettingStatus",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/settingStatus/").concat(e);return s.T.Get(i,n,a,o)}},{key:"AddSettingStatus",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/settingStatus");return s.T.Post(i,e,n,a,o)}},{key:"EditSettingStatus",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/settingStatus/").concat(e);return s.T.Put(r,n,a,o,i)}},{key:"DeleteSettingStatus",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/settingStatus/").concat(e,"?timestamp=").concat(encodeURIComponent(n));return s.T.Delete(r,a,o,i)}},{key:"GetListSettingOther",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/settingOther?type=").concat(e);return s.T.Get(i,n,a,o)}},{key:"GetDetailSettingOther",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/settingOther/").concat(e);return s.T.Get(i,n,a,o)}},{key:"AddSettingOther",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/settingOther");return s.T.Post(i,e,n,a,o)}},{key:"EditSettingOther",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/settingOther/").concat(e);return s.T.Put(r,n,a,o,i)}},{key:"DeleteSettingOther",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/settingOther/").concat(e,"?timestamp=").concat(encodeURIComponent(n));return s.T.Delete(r,a,o,i)}},{key:"SearchByType",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/settings/query?type=").concat(e);return s.T.Get(i,n,a,o)}},{key:"Import",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/settings/import");return s.T.Post(i,e,n,a,o)}},{key:"Export",value:function(t,e,n,a){var o="tools/tasks/projects/".concat(t,"/settings/export");return s.T.GetFile(o,e,n,a)}}]),t}(),l=function(){function t(){(0,a.Z)(this,t)}return(0,o.Z)(t,null,[{key:"GetList",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/workflow/variables?").concat(e.generateQueryString());return s.T.Get(i,n,a,o)}},{key:"GetDetail",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/workflow/variables/").concat(e);return s.T.Get(i,n,a,o)}},{key:"Add",value:function(t,e,n,a,o){var i="tools/tasks/projects/".concat(t,"/workflow/variables");return s.T.Post(i,e,n,a,o)}},{key:"Edit",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/workflow/variables/").concat(e);return s.T.Put(r,n,a,o,i)}},{key:"Delete",value:function(t,e,n,a,o,i){var r="tools/tasks/projects/".concat(t,"/workflow/variables/").concat(e,"?timestamp=").concat(encodeURIComponent(n));return s.T.Delete(r,a,o,i)}}]),t}()}}]);
//# sourceMappingURL=440.1a678d7c.chunk.js.map