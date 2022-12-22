"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[326],{7335:function(e,t,n){n.d(t,{H:function(){return y}});var a=n(5671),o=n(3144),r=n(940),s=n(2409),c=n(7123),u=n(3344),i=n(6106),l=n(914),d=n(6435),v=n(5581),f=n(2426),p=n.n(f),g=n(184),m=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,g.jsx)(r.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}}]),e}(),y=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Input",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(m.Input,{onClick:e.onClick,onChange:e.onChange,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}},{key:"DatePicker",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(c.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return p()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}},{key:"DateTimePicker",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(c.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return p()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}},{key:"Number",value:function(e){return(0,g.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})}},{key:"NumberColSpan",value:function(t){return(0,g.jsx)("div",{children:(0,g.jsxs)(i.Z,{className:t.className,children:[(0,g.jsx)(l.Z,{span:t.colSpan1,children:(0,g.jsx)("span",{children:t.label})}),(0,g.jsx)(l.Z,{span:t.colSpan2,children:(0,g.jsx)(e.Number,{min:t.min,max:t.max,value:t.value,setValue:t.setValue})})]})})}},{key:"Select",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(d.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"TextArea",value:function(e){var t=r.Z.TextArea;return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Password",value:function(e){var t=r.Z.Password;return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Search",value:function(e){var t=r.Z.Search;return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},{key:"Switch",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(v.Z,{loading:e.loading,checked:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}},{key:"File",value:function(e){return(0,g.jsx)(s.Z.Item,{label:e.label,children:(0,g.jsx)(r.Z,{type:"file",onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.files[0])}})})}}]),e}()},698:function(e,t,n){n.d(t,{C:function(){return s},D:function(){return r}});var a=n(5671),o=n(3144),r=function(){function e(t){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==t){var n=t.data.pageInfo;this.total=n.totalCount,this.pageNumber=n.currentPage,this.pageSize=n.pageSize}}return(0,o.Z)(e,[{key:"handleChangePage",value:function(t,n,a){this.pageNumber=t,this.pageSize=n,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(t,n,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(t,n){n(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:t}}}))}}]),e}(),s=function(){function e(t,n){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==t&&(this.column=t,this.esc=n)}return(0,o.Z)(e,[{key:"setColumn",value:function(t,n){n(new e(t,this.esc))}},{key:"setDesc",value:function(t,n){n(new e(this.column,t))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(9439),o=n(6106),r=n(914),s=n(5581),c=n(9221),u=n(8245),i=n(2791),l=n(7335),d=n(9256),v=n(2684),f=(n(1708),n(184));function p(e){var t=e.column,n=e.setOrderBy,p=e.setPageInfo,g=e.loading,m=e.dataSource,y=e.scroll,h=e.rowClassName,k=e.loadData,b=e.pageInfo,S=e.orderBy,j=(0,i.useState)([]),Z=(0,a.Z)(j,2),x=Z[0],C=Z[1],N=(0,i.useState)(100),M=(0,a.Z)(N,2),R=M[0],w=M[1];(0,i.useEffect)((function(){var e=setInterval((function(){w(R-1),1===R&&(w(100),k())}),1e3);return function(){return clearInterval(e)}}),[R,w,k]);var q=(0,i.useCallback)((function(){void 0!==t&&C(t.map((function(e,t){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}})))}),[t]);return(0,i.useEffect)((function(){q()}),[q]),(0,f.jsxs)("div",{className:"my_table",children:[(0,f.jsx)(d.xu,{children:(0,f.jsxs)(o.Z,{gutter:16,children:[(0,f.jsx)(r.Z,{span:6,children:(0,f.jsx)(v.O,{type:"secondary",value:"Refresh data in ".concat(R),isLoading:g,onClick:function(){k()}})}),(0,f.jsx)(r.Z,{span:12,children:(0,f.jsx)(l.H.Select,{value:null===S||void 0===S?void 0:S.column,onChange:function(e){S.setColumn(e,n)},options:t})}),(0,f.jsx)(r.Z,{span:6,children:(0,f.jsx)(s.Z,{disabled:""===(null===S||void 0===S?void 0:S.column),checked:null===S||void 0===S?void 0:S.esc,onChange:function(e){S.setDesc(e,n)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,f.jsx)(r.Z,{span:12,children:(0,f.jsx)(c.Z,{style:{display:b.showPagination?"":"none"},current:b.pageNumber,disabled:g,onChange:function(e,t){b.handleChangePage(e,t,p)},pageSize:b.pageSize,total:b.total})})]})}),(0,f.jsx)(u.Z,{scroll:{y:y},rowClassName:h,style:{paddingTop:"10px"},bordered:!0,loading:g,pagination:!1,dataSource:m,size:"small",columns:x})]})}},8776:function(e,t,n){n.d(t,{E:function(){return c},y:function(){return s}});var a=n(2426),o=n.n(a),r=n(184);function s(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?o()(t).format("DD/MM/YYYY"):"";return(0,r.jsx)("span",{children:n})}function c(e){var t=e.value,n=void 0!==t&&""!==t&&null!==t?o()(t).format("DD/MM/YYYY HH:mm:ss"):"";return(0,r.jsx)("span",{children:n})}},4326:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(9439),o=n(3046),r=n(7528),s=n(5594),c=n(2791),u=n(1087),i=n(3778),l=n(2611),d=n(4492),v=n(9256),f=n(2684),p=n(698),g=n(3977),m=n(8776),y=n(184);function h(){var e=[new l.Dw({title:"STT",key:"stt",render:function(e,t,n){return i.Fn.RenderSTT(e,t,n,h)}}),new l.Dw({title:"QR Code",key:"qrCode",render:function(e,t){return(0,y.jsx)(o.Z,{src:d.bY.GetQrCode(t.key),width:100,height:100})}}),new l.Dw({title:"T\xean",key:"name",render:function(e,t){return(0,y.jsx)(u.rU,{to:"/tools/tasks/projects/".concat(t.key),children:e})}}),new l.Dw({title:"N\u1ed9i dung",key:"content"}),new l.Dw({title:"Tag",key:"tag",render:function(e){var t=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"];return 0===e.length||""===e[0]?(0,y.jsx)("span",{}):e.map((function(e,n){return(0,y.jsx)(r.Z,{color:t[Math.floor(11*Math.random())],children:e},n)}))}}),new l.Dw({title:"Tr\u1ea1ng th\xe1i",key:"status",render:function(e,t){var n,a,o,r,c=null===(n=t.status)||void 0===n?void 0:n.value;return r=null!==(a=t.status)&&void 0!==a&&a.isNew?"warning":null!==(o=t.status)&&void 0!==o&&o.isClosed?"error":"processing",(0,y.jsx)(s.Z,{status:r,text:c})}}),new l.Dw({title:"Ng\xe0y t\u1ea1o",key:"createdAt",render:function(e){return(0,y.jsx)(m.E,{value:e})}}),new l.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt cu\u1ed1i c\xf9ng",key:"updatedAt",render:function(e){return(0,y.jsx)(m.E,{value:e})}})],t=(0,c.useState)(new p.D),n=(0,a.Z)(t,2),h=n[0],k=n[1],b=(0,c.useState)(new p.C),S=(0,a.Z)(b,2),j=S[0],Z=S[1],x=(0,c.useState)([]),C=(0,a.Z)(x,2),N=C[0],M=C[1],R=(0,c.useState)(!1),w=(0,a.Z)(R,2),q=w[0],D=w[1],P=(0,c.useCallback)((function(){D(!0);var e=new l.LY(h.pageNumber,h.pageSize,j);d.bY.GetList(e).then((function(e){e.isSuccess&&(k(new p.D(e)),M(e.data.pagedData))})).finally((function(){D(!1)}))}),[h.pageNumber,h.pageSize,j]);return(0,c.useEffect)((function(){P()}),[P]),(0,y.jsx)(v.ts,{title:"Qu\u1ea3n l\xfd d\u1ef1 \xe1n",isLoading:q,buttonList:function(){return(0,y.jsx)(u.rU,{to:"/tools/tasks/projects/add",children:(0,y.jsx)(f.O,{type:"primary",value:"Th\xeam d\u1ef1 \xe1n m\u1edbi"})})},children:(0,y.jsx)(g.Z,{scroll:500,pageInfo:h,setPageInfo:k,orderBy:j,setOrderBy:Z,column:e,dataSource:N,loading:q,loadData:P})})}},3778:function(e,t,n){n.d(t,{Fn:function(){return s}});var a=n(5671),o=n(3144),r=n(3118),s=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){r.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){r.ZP.success(e.data.message)}},{key:"PrintMsgSuccessV2",value:function(e){r.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,t,n,a){return(a.pageNumber-1)*a.pageSize+n+1}}]),e}();s.GetIndexInArray=function(e,t,n){for(var a=-1,o=0;o<e.length;o++)if(e[o][t]===n){a=o;break}return a},s.GetIndexInArrayStr=function(e,t){for(var n=-1,a=0;a<e.length;a++)if(e[a].trim()===t.trim()){n=a;break}return n},s.SetPageInfo=function(e,t,n,a){var o=e.data.data.pageInfo;t(o.totalCount),n(o.currentPage),a(o.pageSize)},s.GetTimestamp=function(e,t){try{return null===t||void 0===t?e.data.data.timestamp:(t.timestamp=e.data.data.timestamp,t)}catch(n){console.log(n)}},s.GetTimestampV2=function(e,t){try{return null===t||void 0===t?e.data.timestamp:(t.timestamp=e.data.timestamp,t)}catch(n){console.log(n)}}},2611:function(e,t,n){n.d(t,{Dw:function(){return r},LY:function(){return s}});var a=n(3144),o=n(5671),r=(0,a.Z)((function e(t){(0,o.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=t.title,this.key=t.key,void 0===t.dataIndex?this.dataIndex=t.key:this.dataIndex=t.dataIndex,this.render=t.render,this.className=t.className,this.width=t.width,this.label=t.title,this.value=t.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==t.disabled&&(this.disabled=t.disabled)})),s=function(){function e(t,n,a){(0,o.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=t,this.pageSize=n,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},4492:function(e,t,n){n.d(t,{NX:function(){return u},RC:function(){return i},Su:function(){return l},Tz:function(){return f},Zg:function(){return d},bY:function(){return s},gU:function(){return c},jz:function(){return v},zy:function(){return p}});var a=n(5671),o=n(3144),r=n(1285),s=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetQrCode",value:function(e){return"".concat(r.b.BaseURL,"/user/qrCode?data=taskManage_projectManage_").concat(e)}},{key:"GetStatistic",value:function(){return r.b.SendReq("v2/tools/taskManages/projects/statistic","Get")}},{key:"GetLog",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/logs?").concat(t.generateQueryString());return r.b.SendReq(n,"Get")}},{key:"GetClone",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/duplicate");return r.b.SendReq(t,"Get")}},{key:"ProcessClone",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/duplicate");return r.b.SendReq(n,"Post",t)}},{key:"GetList",value:function(e){var t="v2/tools/taskManages/projects?".concat(e.generateQueryString());return r.b.SendReq(t,"GET")}},{key:"GetDetail",value:function(e){var t="v2/tools/taskManages/projects/".concat(e);return r.b.SendReq(t,"Get")}},{key:"Search",value:function(e){var t="v2/tools/taskManages/projects/query?query=".concat(e);return r.b.SendReq(t,"Get")}},{key:"Add",value:function(e){return r.b.SendReq("v2/tools/taskManages/projects","Post",e)}},{key:"Edit",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e);return r.b.SendReq(n,"Put",t)}},{key:"Delete",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return r.b.SendReq(n,"Delete")}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+t.generateQueryString());return r.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return r.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/sprints");return r.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t);return r.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.b.SendReq(a,"Delete")}}]),e}(),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists?").concat(null===n||void 0===n?void 0:n.generateQueryString());return r.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return r.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists");return r.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n);return r.b.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/sprints/").concat(t,"/toDoLists/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return r.b.SendReq(o,"Delete")}}]),e}(),i=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetListSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings?type=").concat(t);return r.b.SendReq(n,"Get")}},{key:"GetDetailSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return r.b.SendReq(n,"Get")}},{key:"AddSettingStatus",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings");return r.b.SendReq(n,"Post",t)}},{key:"EditSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t);return r.b.SendReq(a,"Put",n)}},{key:"DeleteSettingStatus",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/statusSettings/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.b.SendReq(a,"Delete")}},{key:"SearchByType",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/query?type=").concat(t);return r.b.SendReq(n,"Get")}},{key:"Import",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/statusSettings/import");return r.b.SendReq(n,"Post",t,!0)}},{key:"Export",value:function(e){var t="v2/tools/taskManages/projects/".concat(e,"/statusSettings/export");return r.b.SendReq(t,"Get",void 0,!0)}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables?").concat(t.generateQueryString());return r.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return r.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables");return r.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t);return r.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.b.SendReq(a,"Delete")}},{key:"GetHistory",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/variables/").concat(t,"/histories");return r.b.SendReq(n,"Get")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders?").concat(t.generateQueryString());return r.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return r.b.SendReq(n,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders");return r.b.SendReq(n,"Post",t)}},{key:"Edit",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t);return r.b.SendReq(a,"Put",n)}},{key:"Delete",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return r.b.SendReq(a,"Delete")}}]),e}(),v=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return r.b.SendReq(n,"Get")}},{key:"GetDetail",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return r.b.SendReq(a,"Get")}},{key:"Add",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis");return r.b.SendReq(a,"Post",n)}},{key:"Edit",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n);return r.b.SendReq(o,"Put",a)}},{key:"Delete",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"?timestamp=").concat(encodeURIComponent(a));return r.b.SendReq(o,"Delete")}},{key:"ExecApi",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/exec");return r.b.SendReq(a,"Get")}}]),e}(),f=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"Getlist",value:function(e,t,n){var a="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return r.b.SendReq(a,"Get")}},{key:"GetDetail",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a);return r.b.SendReq(o,"Get")}},{key:"SaveResponse",value:function(e,t,n,a){var o="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses");return r.b.SendReq(o,"Post",a)}},{key:"Delete",value:function(e,t,n,a,o){var s="v2/tools/taskManages/projects/".concat(e,"/folders/").concat(t,"/apis/").concat(n,"/responses/").concat(a,"?timestamp=").concat(encodeURIComponent(o));return r.b.SendReq(s,"Delete")}}]),e}(),p=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e){var t="v2/tools/taskManages/workflows?".concat(e.generateQueryString());return r.b.SendReq(t,"Get")}},{key:"Add",value:function(e,t){var n="v2/tools/taskManages/projects/".concat(e,"/workflows");return r.b.SendReq(n,"Post",t)}}]),e}()},5594:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(4942),o=n(1002),r=n(7462),s=n(1694),c=n.n(s),u=n(5207),i=n(2791),l=n(1929),d=n(1113),v=n(4466);function f(e){return v.Y.includes(e)}var p=function(e){var t,n=e.className,o=e.prefixCls,s=e.style,u=e.color,d=e.children,v=e.text,p=e.placement,g=void 0===p?"end":p,m=i.useContext(l.E_),y=m.getPrefixCls,h=m.direction,k=y("ribbon",o),b=f(u),S=c()(k,"".concat(k,"-placement-").concat(g),(t={},(0,a.Z)(t,"".concat(k,"-rtl"),"rtl"===h),(0,a.Z)(t,"".concat(k,"-color-").concat(u),b),t),n),j={},Z={};return u&&!b&&(j.background=u,Z.color=u),i.createElement("div",{className:"".concat(k,"-wrapper")},d,i.createElement("div",{className:S,style:(0,r.Z)((0,r.Z)({},j),s)},i.createElement("span",{className:"".concat(k,"-text")},v),i.createElement("div",{className:"".concat(k,"-corner"),style:Z})))},g=n(9439);function m(e){var t,n=e.prefixCls,a=e.value,o=e.current,r=e.offset,s=void 0===r?0:r;return s&&(t={position:"absolute",top:"".concat(s,"00%"),left:0}),i.createElement("span",{style:t,className:c()("".concat(n,"-only-unit"),{current:o})},a)}function y(e,t,n){for(var a=e,o=0;(a+10)%10!==t;)a+=n,o+=n;return o}function h(e){var t,n,a=e.prefixCls,o=e.count,s=e.value,c=Number(s),u=Math.abs(o),l=i.useState(c),d=(0,g.Z)(l,2),v=d[0],f=d[1],p=i.useState(u),h=(0,g.Z)(p,2),k=h[0],b=h[1],S=function(){f(c),b(u)};if(i.useEffect((function(){var e=setTimeout((function(){S()}),1e3);return function(){clearTimeout(e)}}),[c]),v===c||Number.isNaN(c)||Number.isNaN(v))t=[i.createElement(m,(0,r.Z)({},e,{key:c,current:!0}))],n={transition:"none"};else{t=[];for(var j=c+10,Z=[],x=c;x<=j;x+=1)Z.push(x);var C=Z.findIndex((function(e){return e%10===v}));t=Z.map((function(t,n){var a=t%10;return i.createElement(m,(0,r.Z)({},e,{key:t,value:a,offset:n-C,current:n===C}))})),n={transform:"translateY(".concat(-y(v,c,k<u?1:-1),"00%)")}}return i.createElement("span",{className:"".concat(a,"-only"),style:n,onTransitionEnd:S},t)}var k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},b=function(e){var t=e.prefixCls,n=e.count,a=e.className,o=e.motionClassName,s=e.style,u=e.title,v=e.show,f=e.component,p=void 0===f?"sup":f,g=e.children,m=k(e,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),y=(0,i.useContext(l.E_).getPrefixCls)("scroll-number",t),b=(0,r.Z)((0,r.Z)({},m),{"data-show":v,style:s,className:c()(y,a,o),title:u}),S=n;if(n&&Number(n)%1===0){var j=String(n).split("");S=j.map((function(e,t){return i.createElement(h,{prefixCls:y,count:Number(n),value:e,key:j.length-t})}))}return s&&s.borderColor&&(b.style=(0,r.Z)((0,r.Z)({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),g?(0,d.Tm)(g,(function(e){return{className:c()("".concat(y,"-custom-component"),null===e||void 0===e?void 0:e.className,o)}})):i.createElement(p,b,S)},S=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},j=function(e){var t,n,s=e.prefixCls,v=e.scrollNumberPrefixCls,p=e.children,g=e.status,m=e.text,y=e.color,h=e.count,k=void 0===h?null:h,j=e.overflowCount,Z=void 0===j?99:j,x=e.dot,C=void 0!==x&&x,N=e.size,M=void 0===N?"default":N,R=e.title,w=e.offset,q=e.style,D=e.className,P=e.showZero,G=void 0!==P&&P,I=S(e,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),E=i.useContext(l.E_),O=E.getPrefixCls,V=E.direction,z=O("badge",s),T=k>Z?"".concat(Z,"+"):k,Y="0"===T||0===T,L=(null!==g&&void 0!==g||null!==y&&void 0!==y)&&(null===k||Y&&!G),A=C&&!Y,B=A?"":T,Q=(0,i.useMemo)((function(){return(null===B||void 0===B||""===B||Y&&!G)&&!A}),[B,Y,G,A]),U=(0,i.useRef)(k);Q||(U.current=k);var F=U.current,H=(0,i.useRef)(B);Q||(H.current=B);var _=H.current,X=(0,i.useRef)(A);Q||(X.current=A);var J=(0,i.useMemo)((function(){if(!w)return(0,r.Z)({},q);var e={marginTop:w[1]};return"rtl"===V?e.left=parseInt(w[0],10):e.right=-parseInt(w[0],10),(0,r.Z)((0,r.Z)({},e),q)}),[V,w,q]),K=null!==R&&void 0!==R?R:"string"===typeof F||"number"===typeof F?F:void 0,W=Q||!m?null:i.createElement("span",{className:"".concat(z,"-status-text")},m),$=F&&"object"===(0,o.Z)(F)?(0,d.Tm)(F,(function(e){return{style:(0,r.Z)((0,r.Z)({},J),e.style)}})):void 0,ee=c()((t={},(0,a.Z)(t,"".concat(z,"-status-dot"),L),(0,a.Z)(t,"".concat(z,"-status-").concat(g),!!g),(0,a.Z)(t,"".concat(z,"-status-").concat(y),f(y)),t)),te={};y&&!f(y)&&(te.background=y);var ne=c()(z,(n={},(0,a.Z)(n,"".concat(z,"-status"),L),(0,a.Z)(n,"".concat(z,"-not-a-wrapper"),!p),(0,a.Z)(n,"".concat(z,"-rtl"),"rtl"===V),n),D);if(!p&&L){var ae=J.color;return i.createElement("span",(0,r.Z)({},I,{className:ne,style:J}),i.createElement("span",{className:ee,style:te}),m&&i.createElement("span",{style:{color:ae},className:"".concat(z,"-status-text")},m))}return i.createElement("span",(0,r.Z)({},I,{className:ne}),p,i.createElement(u.Z,{visible:!Q,motionName:"".concat(z,"-zoom"),motionAppear:!1,motionDeadline:1e3},(function(e){var t,n=e.className,o=O("scroll-number",v),s=X.current,u=c()((t={},(0,a.Z)(t,"".concat(z,"-dot"),s),(0,a.Z)(t,"".concat(z,"-count"),!s),(0,a.Z)(t,"".concat(z,"-count-sm"),"small"===M),(0,a.Z)(t,"".concat(z,"-multiple-words"),!s&&_&&_.toString().length>1),(0,a.Z)(t,"".concat(z,"-status-").concat(g),!!g),(0,a.Z)(t,"".concat(z,"-status-").concat(y),f(y)),t)),l=(0,r.Z)({},J);return y&&!f(y)&&((l=l||{}).background=y),i.createElement(b,{prefixCls:o,show:!Q,motionClassName:n,className:u,count:_,title:K,style:l,key:"scrollNumber"},$)})),W)};j.Ribbon=p;var Z=j}}]);
//# sourceMappingURL=326.bcc76c37.chunk.js.map