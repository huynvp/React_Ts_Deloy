"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[326],{7335:function(e,t,n){n.d(t,{H:function(){return y}});var a=n(5671),o=n(3144),r=n(8047),c=n(2409),s=n(7123),u=n(1081),l=n(6106),i=n(914),d=n(6435),v=n(5581),p=n(2014),f=n(438),g=n.n(f),m=n(184),k=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,m.jsx)(r.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(k.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(s.Z,{value:g()(e.value),onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return g()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(s.Z,{showTime:!0,value:g()(e.value),onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return g()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})})}},{key:"NumberColSpan",value:function(t){return(0,m.jsx)("div",{children:(0,m.jsxs)(l.Z,{className:t.className,children:[(0,m.jsx)(i.Z,{span:t.colSpan1,children:(0,m.jsx)("span",{children:t.label})}),(0,m.jsx)(i.Z,{span:t.colSpan2,children:(0,m.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=r.Z.TextArea;return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=r.Z.Password;return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=r.Z.Search;return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"Checkbox",value:function(e){return(0,m.jsx)(p.Z,{checked:e.value,onChange:function(t){void 0!==e.setValue&&!0!==e.readOnly&&e.setValue(t.target.checked),void 0!==e.onChange&&e.onChange(t.target.checked)},children:e.label})}},{key:"File",value:function(e){return(0,m.jsx)(c.Z.Item,{label:e.label,children:(0,m.jsx)(r.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},698:function(e,t,n){n.d(t,{C:function(){return c},D:function(){return r}});var a=n(5671),o=n(3144),r=function(){function e(t){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==t){var n=t.data.pageInfo;this.total=n.totalCount,this.pageNumber=n.currentPage,this.pageSize=n.pageSize}}return(0,o.Z)(e,[{key:"handleChangePage",value:function(t,n,a){this.pageNumber=t,this.pageSize=n,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(t,n,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(t,n){n(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:t}}}))}}]),e}(),c=function(){function e(t,n){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==t&&(this.column=t,this.esc=n)}return(0,o.Z)(e,[{key:"setColumn",value:function(t,n){n(new e(t,this.esc))}},{key:"setDesc",value:function(t,n){n(new e(this.column,t))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(9439),o=n(6106),r=n(914),c=n(5581),s=n(9221),u=n(1738),l=n(2791),i=n(7335),d=n(9256),v=n(2684),p=(n(1708),n(184));function f(e){var t=e.column,n=e.setOrderBy,f=e.setPageInfo,g=e.loading,m=e.dataSource,k=e.scroll,y=e.rowClassName,h=e.loadData,S=e.pageInfo,j=e.orderBy,b=(0,l.useState)([]),Z=(0,a.Z)(b,2),x=Z[0],w=Z[1],R=(0,l.useState)(100),C=(0,a.Z)(R,2),M=C[0],q=C[1];(0,l.useEffect)((function(){var e=setInterval((function(){q(M-1),1===M&&(q(100),h())}),1e3);return function(){return clearInterval(e)}}),[M,q,h]);var N=(0,l.useCallback)((function(){void 0!==t&&w(t.map((function(e,t){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}})))}),[t]);return(0,l.useEffect)((function(){N()}),[N]),(0,p.jsxs)("div",{className:"my_table",children:[(0,p.jsx)(d.xu,{children:(0,p.jsxs)(o.Z,{gutter:16,children:[(0,p.jsx)(r.Z,{span:6,children:(0,p.jsx)(v.O,{type:"secondary",value:"Refresh data in ".concat(M),isLoading:g,onClick:function(){h()}})}),(0,p.jsx)(r.Z,{span:12,children:(0,p.jsx)(i.H.Select,{value:null===j||void 0===j?void 0:j.column,onChange:function(e){j.setColumn(e,n)},options:t})}),(0,p.jsx)(r.Z,{span:6,children:(0,p.jsx)(c.Z,{disabled:""===(null===j||void 0===j?void 0:j.column),checked:null===j||void 0===j?void 0:j.esc,onChange:function(e){j.setDesc(e,n)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,p.jsx)(r.Z,{span:12,children:(0,p.jsx)(s.Z,{style:{display:S.showPagination?"":"none"},current:S.pageNumber,disabled:g,onChange:function(e,t){S.handleChangePage(e,t,f)},pageSize:S.pageSize,total:S.total})})]})}),(0,p.jsx)(u.Z,{scroll:{y:k},rowClassName:y,style:{paddingTop:"10px"},bordered:!0,loading:g,pagination:!1,dataSource:m,size:"small",columns:x})]})}},8776:function(e,t,n){n.d(t,{E:function(){return s},y:function(){return c}});var a=n(438),o=n.n(a),r=n(184);function c(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?o()(t.timeLocal).format("DD/MM/YYYY"):"";return(0,r.jsx)("span",{children:n})}function s(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?o()(t.timeLocal).format("DD/MM/YYYY HH:mm:ss"):"";return(0,r.jsx)("span",{children:n})}},4326:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(9439),o=n(2992),r=n(7528),c=n(5594),s=n(2791),u=n(1087),l=n(3778),i=n(2611),d=n(5349),v=n(7335),p=n(9256),f=n(2684),g=n(698),m=n(3977),k=n(8776),y=n(184);function h(){var e=[new i.Dw({title:"STT",key:"stt",render:function(e,t,n){return l.Fn.RenderSTT(e,t,n,h)}}),new i.Dw({title:"QR Code",key:"qrCode",render:function(e,t){return(0,y.jsx)(o.Z,{src:d.bY.GetQrCode(t.key),width:100,height:100})}}),new i.Dw({title:"T\xean",key:"name",render:function(e,t){return(0,y.jsx)(u.rU,{to:"/tools/tasks/projects/".concat(t.key),children:e})}}),new i.Dw({title:"N\u1ed9i dung",key:"content"}),new i.Dw({title:"Tag",key:"tag",render:function(e){var t=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"];return 0===e.length||""===e[0]?(0,y.jsx)("span",{}):e.map((function(e,n){return(0,y.jsx)(r.Z,{color:t[Math.floor(11*Math.random())],children:e},n)}))}}),new i.Dw({title:"Tr\u1ea1ng th\xe1i",key:"status",render:function(e,t){var n,a,o,r,s=null===(n=t.status)||void 0===n?void 0:n.value;return r=null!==(a=t.status)&&void 0!==a&&a.isNew?"warning":null!==(o=t.status)&&void 0!==o&&o.isClosed?"error":"processing",(0,y.jsx)(c.Z,{status:r,text:s})}}),new i.Dw({title:"Ng\xe0y t\u1ea1o",key:"createdAt",render:function(e){return(0,y.jsx)(k.E,{value:e})}}),new i.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i c\xf9ng",key:"updatedAt",render:function(e){return(0,y.jsx)(k.E,{value:e})}})],t=(0,s.useState)(new g.D),n=(0,a.Z)(t,2),h=n[0],S=n[1],j=(0,s.useState)(new g.C),b=(0,a.Z)(j,2),Z=b[0],x=b[1],w=(0,s.useState)([]),R=(0,a.Z)(w,2),C=R[0],M=R[1],q=(0,s.useState)(!1),N=(0,a.Z)(q,2),G=N[0],D=N[1],P=(0,s.useState)(!1),I=(0,a.Z)(P,2),E=I[0],O=I[1],V=(0,s.useCallback)((function(){D(!0);var e=new i.LY(h.pageNumber,h.pageSize,Z);d.bY.GetList(e,E).then((function(e){e.isSuccess&&(S(new g.D(e)),M(e.data.pagedData))})).finally((function(){D(!1)}))}),[h.pageNumber,h.pageSize,Z,E]);return(0,s.useEffect)((function(){V()}),[V]),(0,y.jsxs)(p.ts,{title:"Qu\u1ea3n l\xfd d\u1ef1 \xe1n",isLoading:G,buttonList:function(){return(0,y.jsx)(u.rU,{to:"/tools/tasks/projects/add",children:(0,y.jsx)(f.O,{type:"primary",value:"Th\xeam d\u1ef1 \xe1n m\u1edbi"})})},children:[(0,y.jsx)(v.H.Switch,{label:"Show d\u1ef1 \xe1n \u0111\xe3 \u0111\xf3ng",value:E,setValue:O}),(0,y.jsx)(m.Z,{scroll:500,pageInfo:h,setPageInfo:S,orderBy:Z,setOrderBy:x,column:e,dataSource:C,loading:G,loadData:V})]})}},3778:function(e,t,n){n.d(t,{Fn:function(){return c}});var a=n(5671),o=n(3144),r=n(8062),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){r.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){r.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,t,n,a){return(a.pageNumber-1)*a.pageSize+n+1}},{key:"PrintMsgSuccess_no_use",value:function(e){r.ZP.success(e.data.message)}}]),e}();c.GetIndexInArray=function(e,t,n){for(var a=-1,o=0;o<e.length;o++)if(e[o][t]===n){a=o;break}return a},c.GetIndexInArrayStr=function(e,t){for(var n=-1,a=0;a<e.length;a++)if(e[a].trim()===t.trim()){n=a;break}return n},c.SetPageInfo=function(e,t,n,a){var o=e.data.data.pageInfo;t(o.totalCount),n(o.currentPage),a(o.pageSize)},c.GetTimestamp=function(e,t){try{return null===t||void 0===t?e.data.timestamp:(t.timestamp=e.data.timestamp,t)}catch(n){console.log(n)}},c.GetTimestamp_no_use=function(e,t){try{return null===t||void 0===t?e.data.data.timestamp:(t.timestamp=e.data.data.timestamp,t)}catch(n){console.log(n)}}},2611:function(e,t,n){n.d(t,{Dw:function(){return r},LY:function(){return c}});var a=n(3144),o=n(5671),r=(0,a.Z)((function e(t){(0,o.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=t.title,this.key=t.key,void 0===t.dataIndex?this.dataIndex=t.key:this.dataIndex=t.dataIndex,this.render=t.render,this.className=t.className,this.width=t.width,this.label=t.title,this.value=t.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==t.disabled&&(this.disabled=t.disabled)})),c=function(){function e(t,n,a){(0,o.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=t,this.pageSize=n,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},5349:function(e,t,n){n.d(t,{GH:function(){return m},Lc:function(){return g},NX:function(){return u},RC:function(){return l},Su:function(){return i},Tz:function(){return p},Zg:function(){return d},bY:function(){return c},bt:function(){return k},gU:function(){return s},jz:function(){return v},zy:function(){return f}});var a=n(5671),o=n(3144),r=n(1285),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(r.p.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetStatistic",value:function(){return r.p.SendReq("v2/tools/taskManages/projects/statistic","Get")}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return r.p.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return r.p.SendReq(n,"Post",t)}},{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects?".concat(e.generateQueryString(),"&showIsClosed=").concat(t);return r.p.SendReq(n,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return r.p.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return r.p.SendReq(t,"Get")}},{key:"Add",value:function(e){return r.p.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return r.p.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return r.p.SendReq(n,"Delete")}}]),e}(),s=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return r.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return r.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(a,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return r.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return r.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return r.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return r.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return r.p.SendReq(o,"Delete")}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return r.p.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return r.p.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return r.p.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return r.p.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/query?type=").concat(t);return r.p.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return r.p.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return r.p.SendReq(t,"Get",void 0,!0)}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return r.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return r.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return r.p.SendReq(n,"Get")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders?").concat(t.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders");return r.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return r.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(a,"Delete")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return r.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return r.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return r.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return r.p.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/exec");return r.p.SendReq(a,"Get")}},{key:"Query",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/apis/query?q=").concat(t);return r.p.SendReq(n,"Get")}}]),e}(),p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Getlist",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return r.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a);return r.p.SendReq(o,"Get")}},{key:"SaveResponse",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return r.p.SendReq(o,"Post",a)}},{key:"Delete",value:function(e,t,n,a,o){var c="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a,"?timestamp=").concat(encodeURIComponent(o));return r.p.SendReq(c,"Delete")}}]),e}(),f=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e){var t="v2/tools/taskManages/workflows?".concat(e.generateQueryString());return r.p.SendReq(t,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows");return r.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t);return r.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(a,"Delete")}}]),e}(),g=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details?").concat(e.generateQueryString(),"&orders=true");return r.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return r.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details");return r.p.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n);return r.p.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/workflows/").concat(t,"/details/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return r.p.SendReq(o,"Delete")}},{key:"SwapOrder",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/details/").concat(e,"/swapOrders?isNext=").concat(a);return r.p.SendReq(o,"Post")}}]),e}(),m=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories?").concat(e.generateQueryString());return r.p.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e);return r.p.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories");return r.p.SendReq(a,"Post",e)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e);return r.p.SendReq(o,"Put",t)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(n,"/workflows/").concat(a,"/histories/").concat(e,"?timestamp=").concat(encodeURIComponent(t));return r.p.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(t,"/workflows/").concat(n,"/histories/").concat(e,"/exec");return r.p.SendReq(a,"Get")}}]),e}(),k=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(t,"/documentApi/public?").concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public");return r.p.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t);return r.p.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(a,"Delete")}},{key:"GetListDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return r.p.SendReq(n,"Get")}},{key:"UpdateDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/documentApi/public/").concat(t,"/details");return r.p.SendReq(a,"Post",n)}},{key:"GetListPublicDocument",value:function(e,t){return r.p.SendReqV2({url:"v2/tools/taskManages/publicDocuments/".concat(e,"?replaceVar=").concat(t),method:r.O.Get,isNoAuth:!0})}},{key:"GetListPublicDocumentResponse",value:function(e,t){return r.p.SendReqV2({url:"v2/tools/taskManages/publicDocuments/".concat(e,"/responses/").concat(t),method:r.O.Get,isNoAuth:!0})}}]),e}()},5594:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(4942),o=n(1002),r=n(7462),c=n(1694),s=n.n(c),u=n(5207),l=n(2791),i=n(1929),d=n(1113),v=n(4466);function p(e){return v.Y.includes(e)}var f=function(e){var t,n=e.className,o=e.prefixCls,c=e.style,u=e.color,d=e.children,v=e.text,f=e.placement,g=void 0===f?"end":f,m=l.useContext(i.E_),k=m.getPrefixCls,y=m.direction,h=k("ribbon",o),S=p(u),j=s()(h,"".concat(h,"-placement-").concat(g),(t={},(0,a.Z)(t,"".concat(h,"-rtl"),"rtl"===y),(0,a.Z)(t,"".concat(h,"-color-").concat(u),S),t),n),b={},Z={};return u&&!S&&(b.background=u,Z.color=u),l.createElement("div",{className:"".concat(h,"-wrapper")},d,l.createElement("div",{className:j,style:(0,r.Z)((0,r.Z)({},b),c)},l.createElement("span",{className:"".concat(h,"-text")},v),l.createElement("div",{className:"".concat(h,"-corner"),style:Z})))},g=n(9439);function m(e){var t,n=e.prefixCls,a=e.value,o=e.current,r=e.offset,c=void 0===r?0:r;return c&&(t={position:"absolute",top:"".concat(c,"00%"),left:0}),l.createElement("span",{style:t,className:s()("".concat(n,"-only-unit"),{current:o})},a)}function k(e,t,n){for(var a=e,o=0;(a+10)%10!==t;)a+=n,o+=n;return o}function y(e){var t,n,a=e.prefixCls,o=e.count,c=e.value,s=Number(c),u=Math.abs(o),i=l.useState(s),d=(0,g.Z)(i,2),v=d[0],p=d[1],f=l.useState(u),y=(0,g.Z)(f,2),h=y[0],S=y[1],j=function(){p(s),S(u)};if(l.useEffect((function(){var e=setTimeout((function(){j()}),1e3);return function(){clearTimeout(e)}}),[s]),v===s||Number.isNaN(s)||Number.isNaN(v))t=[l.createElement(m,(0,r.Z)({},e,{key:s,current:!0}))],n={transition:"none"};else{t=[];for(var b=s+10,Z=[],x=s;x<=b;x+=1)Z.push(x);var w=Z.findIndex((function(e){return e%10===v}));t=Z.map((function(t,n){var a=t%10;return l.createElement(m,(0,r.Z)({},e,{key:t,value:a,offset:n-w,current:n===w}))})),n={transform:"translateY(".concat(-k(v,s,h<u?1:-1),"00%)")}}return l.createElement("span",{className:"".concat(a,"-only"),style:n,onTransitionEnd:j},t)}var h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},S=function(e){var t=e.prefixCls,n=e.count,a=e.className,o=e.motionClassName,c=e.style,u=e.title,v=e.show,p=e.component,f=void 0===p?"sup":p,g=e.children,m=h(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),k=(0,l.useContext(i.E_).getPrefixCls)("scroll-number",t),S=(0,r.Z)((0,r.Z)({},m),{"data-show":v,style:c,className:s()(k,a,o),title:u}),j=n;if(n&&Number(n)%1===0){var b=String(n).split("");j=b.map((function(e,t){return l.createElement(y,{prefixCls:k,count:Number(n),value:e,key:b.length-t})}))}return c&&c.borderColor&&(S.style=(0,r.Z)((0,r.Z)({},c),{boxShadow:"0 0 0 1px ".concat(c.borderColor," inset")})),g?(0,d.Tm)(g,(function(e){return{className:s()("".concat(k,"-custom-component"),null===e||void 0===e?void 0:e.className,o)}})):l.createElement(f,S,j)},j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},b=function(e){var t,n,c=e.prefixCls,v=e.scrollNumberPrefixCls,f=e.children,g=e.status,m=e.text,k=e.color,y=e.count,h=void 0===y?null:y,b=e.overflowCount,Z=void 0===b?99:b,x=e.dot,w=void 0!==x&&x,R=e.size,C=void 0===R?"default":R,M=e.title,q=e.offset,N=e.style,G=e.className,D=e.showZero,P=void 0!==D&&D,I=j(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),E=l.useContext(i.E_),O=E.getPrefixCls,V=E.direction,L=O("badge",c),A=h>Z?"".concat(Z,"+"):h,z="0"===A||0===A,T=(null!==g&&void 0!==g||null!==k&&void 0!==k)&&(null===h||z&&!P),Y=w&&!z,Q=Y?"":A,U=(0,l.useMemo)((function(){return(null===Q||void 0===Q||""===Q||z&&!P)&&!Y}),[Q,z,P,Y]),B=(0,l.useRef)(h);U||(B.current=h);var _=B.current,H=(0,l.useRef)(Q);U||(H.current=Q);var F=H.current,X=(0,l.useRef)(Y);U||(X.current=Y);var J=(0,l.useMemo)((function(){if(!q)return(0,r.Z)({},N);var e={marginTop:q[1]};return"rtl"===V?e.left=parseInt(q[0],10):e.right=-parseInt(q[0],10),(0,r.Z)((0,r.Z)({},e),N)}),[V,q,N]),K=null!==M&&void 0!==M?M:"string"===typeof _||"number"===typeof _?_:void 0,W=U||!m?null:l.createElement("span",{className:"".concat(L,"-status-text")},m),$=_&&"object"===(0,o.Z)(_)?(0,d.Tm)(_,(function(e){return{style:(0,r.Z)((0,r.Z)({},J),e.style)}})):void 0,ee=s()((t={},(0,a.Z)(t,"".concat(L,"-status-dot"),T),(0,a.Z)(t,"".concat(L,"-status-").concat(g),!!g),(0,a.Z)(t,"".concat(L,"-status-").concat(k),p(k)),t)),te={};k&&!p(k)&&(te.background=k);var ne=s()(L,(n={},(0,a.Z)(n,"".concat(L,"-status"),T),(0,a.Z)(n,"".concat(L,"-not-a-wrapper"),!f),(0,a.Z)(n,"".concat(L,"-rtl"),"rtl"===V),n),G);if(!f&&T){var ae=J.color;return l.createElement("span",(0,r.Z)({},I,{className:ne,style:J}),l.createElement("span",{className:ee,style:te}),m&&l.createElement("span",{style:{color:ae},className:"".concat(L,"-status-text")},m))}return l.createElement("span",(0,r.Z)({},I,{className:ne}),f,l.createElement(u.default,{visible:!U,motionName:"".concat(L,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,n=e.className,o=O("scroll-number",v),c=X.current,u=s()((t={},(0,a.Z)(t,"".concat(L,"-dot"),c),(0,a.Z)(t,"".concat(L,"-count"),!c),(0,a.Z)(t,"".concat(L,"-count-sm"),"small"===C),(0,a.Z)(t,"".concat(L,"-multiple-words"),!c&&F&&F.toString().length>1),(0,a.Z)(t,"".concat(L,"-status-").concat(g),!!g),(0,a.Z)(t,"".concat(L,"-status-").concat(k),p(k)),t)),i=(0,r.Z)({},J);return k&&!p(k)&&((i=i||{}).background=k),l.createElement(S,{prefixCls:o,show:!U,motionClassName:n,className:u,count:F,title:K,style:i,key:"scrollNumber"},$)})),W)};b.Ribbon=f;var Z=b}}]);
//# sourceMappingURL=326.9c46542e.chunk.js.map