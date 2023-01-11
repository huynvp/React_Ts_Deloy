"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[999],{698:function(e,n,t){t.d(n,{C:function(){return u},D:function(){return r}});var a=t(5671),i=t(3144),r=function(){function e(n){if((0,a.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.total=0,this.showPagination=!0,void 0!==n){var t=n.data.pageInfo;this.total=t.totalCount,this.pageNumber=t.currentPage,this.pageSize=t.pageSize}}return(0,i.Z)(e,[{key:"handleChangePage",value:function(n,t,a){this.pageNumber=n,this.pageSize=t,a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"handleChangeOrderBy",value:function(n,t,a){a(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:this.pageSize}}}))}},{key:"setPageSize",value:function(n,t){t(new e({data:{pageInfo:{totalCount:this.total,currentPage:this.pageNumber,pageSize:n}}}))}}]),e}(),u=function(){function e(n,t){(0,a.Z)(this,e),this.column="",this.esc=!1,void 0!==n&&(this.column=n,this.esc=t)}return(0,i.Z)(e,[{key:"setColumn",value:function(n,t){t(new e(n,this.esc))}},{key:"setDesc",value:function(n,t){t(new e(this.column,n))}},{key:"genQueryOrderBy",value:function(){return""===this.column?"":this.esc?this.column:this.column+" desc"}}]),e}()},3977:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(9439),i=t(6106),r=t(914),u=t(5581),o=t(9221),s=t(1738),c=t(2791),l=t(6449),d=t(9256),v=t(2684),f=(t(1708),t(184));function m(e){var n=e.column,t=e.setOrderBy,m=e.setPageInfo,p=e.loading,g=e.dataSource,h=e.scroll,y=e.rowClassName,k=e.loadData,S=e.pageInfo,Z=e.orderBy,D=(0,c.useState)([]),G=(0,a.Z)(D,2),b=G[0],w=G[1],R=(0,c.useState)(100),x=(0,a.Z)(R,2),I=x[0],P=x[1];(0,c.useEffect)((function(){var e=setInterval((function(){P(I-1),1===I&&(P(100),k())}),1e3);return function(){return clearInterval(e)}}),[I,P,k]);var q=(0,c.useCallback)((function(){void 0!==n&&w(n.map((function(e,n){return{key:e.key,className:e.className,width:e.width,title:e.title,dataIndex:e.dataIndex,render:e.render}})))}),[n]);return(0,c.useEffect)((function(){q()}),[q]),(0,f.jsxs)("div",{className:"my_table",children:[(0,f.jsx)(d.xu,{children:(0,f.jsxs)(i.Z,{gutter:16,children:[(0,f.jsx)(r.Z,{span:6,children:(0,f.jsx)(v.O,{type:"secondary",value:"Refresh data in ".concat(I),isLoading:p,onClick:function(){k()}})}),(0,f.jsx)(r.Z,{span:12,children:(0,f.jsx)(l.H.Select,{value:null===Z||void 0===Z?void 0:Z.column,onChange:function(e){Z.setColumn(e,t)},options:n})}),(0,f.jsx)(r.Z,{span:6,children:(0,f.jsx)(u.Z,{disabled:""===(null===Z||void 0===Z?void 0:Z.column),checked:null===Z||void 0===Z?void 0:Z.esc,onChange:function(e){Z.setDesc(e,t)},checkedChildren:"T\u0103ng d\u1ea7n",unCheckedChildren:"Gi\u1ea3m d\u1ea7n"})}),(0,f.jsx)(r.Z,{span:12,children:(0,f.jsx)(o.Z,{style:{display:S.showPagination?"":"none"},current:S.pageNumber,disabled:p,onChange:function(e,n){S.handleChangePage(e,n,m)},pageSize:S.pageSize,total:S.total})})]})}),(0,f.jsx)(s.Z,{scroll:{y:h},rowClassName:y,style:{paddingTop:"10px"},bordered:!0,loading:p,pagination:!1,dataSource:g,size:"small",columns:b})]})}},8776:function(e,n,t){t.d(n,{E:function(){return o},y:function(){return u}});var a=t(2426),i=t.n(a),r=t(184);function u(e){var n=e.value,t=void 0!==n&&""!==n&&null!==n?i()(n.timeLocal).format("DD/MM/YYYY"):"";return(0,r.jsx)("span",{children:t})}function o(e){var n=e.value,t=void 0!==n&&""!==n&&null!==n?i()(n.timeLocal).format("DD/MM/YYYY HH:mm:ss"):"";return(0,r.jsx)("span",{children:t})}},999:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(9439),i=t(2791),r=t(1087),u=t(3778),o=t(2611),s=t(2496),c=t(9256),l=t(2684),d=t(698),v=t(3977),f=t(8776),m=t(184);function p(){var e=[new o.Dw({title:"STT",key:"stt",disabled:!0,render:function(e,n,t){return u.Fn.RenderSTT(e,n,t,p)}}),new o.Dw({title:"M\xe3",dataIndex:"code",key:"code",render:function(e,n){return(0,m.jsxs)(r.rU,{to:"/admin/template/edit/".concat(n.key),children:[e," "]})}}),new o.Dw({title:"Ti\xeau \u0111\u1ec1",key:"title"}),new o.Dw({title:"App name",key:"apps",render:function(e){return(0,m.jsx)("span",{children:e.map((function(e){return e.name})).join(", ")})}}),new o.Dw({title:"Ng\xe0y t\u1ea1o",key:"createdAt",render:function(e){return(0,m.jsx)(f.E,{value:e})}}),new o.Dw({title:"Ng\xe0y c\u1eadp nh\u1eadt",key:"updatedAt",render:function(e){return(0,m.jsx)(f.E,{value:e})}})],n=(0,i.useState)(new d.D),t=(0,a.Z)(n,2),p=t[0],g=t[1],h=(0,i.useState)(new d.C),y=(0,a.Z)(h,2),k=y[0],S=y[1],Z=(0,i.useState)([]),D=(0,a.Z)(Z,2),G=D[0],b=D[1],w=(0,i.useState)(!1),R=(0,a.Z)(w,2),x=R[0],I=R[1],P=(0,i.useCallback)((function(){I(!0);var e=new o.LY(p.pageNumber,p.pageSize,k);s.PH.GetList(e).then((function(e){e.isSuccess&&(g(new d.D(e)),b(e.data.pagedData))})).finally((function(){return I(!1)}))}),[p.pageSize,p.pageNumber,k]);return(0,i.useEffect)((function(){P()}),[P]),(0,m.jsxs)(c.ts,{title:"Qu\u1ea3n l\xfd template mail",isLoading:x,children:[(0,m.jsxs)(r.rU,{to:"/admin/template/add",children:[" ",(0,m.jsx)(l.O,{value:"Th\xeam m\u1edbi"})]}),(0,m.jsx)(v.Z,{pageInfo:p,setPageInfo:g,orderBy:k,setOrderBy:S,column:e,dataSource:G,loading:x,loadData:P})]})}},3778:function(e,n,t){t.d(n,{Fn:function(){return u}});var a=t(5671),i=t(3144),r=t(8062),u=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"PrintMsg",value:function(e){return void 0===e.response?e.response:e.response.data.message}},{key:"PrintMsgErr",value:function(e){r.ZP.error(this.PrintMsg(e))}},{key:"PrintMsgSuccess",value:function(e){r.ZP.success(e.message)}},{key:"FormatInputMoney",value:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"ParseInputMoney",value:function(e){return e.replace(/\s?|(,*)/g,"")}},{key:"FormatMoney",value:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},{key:"FormatNumber",value:function(e){return new Intl.NumberFormat("vi-VN").format(e)}},{key:"RenderSTT",value:function(e,n,t,a){return(a.pageNumber-1)*a.pageSize+t+1}},{key:"PrintMsgSuccess_no_use",value:function(e){r.ZP.success(e.data.message)}}]),e}();u.GetIndexInArray=function(e,n,t){for(var a=-1,i=0;i<e.length;i++)if(e[i][n]===t){a=i;break}return a},u.GetIndexInArrayStr=function(e,n){for(var t=-1,a=0;a<e.length;a++)if(e[a].trim()===n.trim()){t=a;break}return t},u.SetPageInfo=function(e,n,t,a){var i=e.data.data.pageInfo;n(i.totalCount),t(i.currentPage),a(i.pageSize)},u.GetTimestamp=function(e,n){try{return null===n||void 0===n?e.data.timestamp:(n.timestamp=e.data.timestamp,n)}catch(t){console.log(t)}},u.GetTimestamp_no_use=function(e,n){try{return null===n||void 0===n?e.data.data.timestamp:(n.timestamp=e.data.data.timestamp,n)}catch(t){console.log(t)}}},2611:function(e,n,t){t.d(n,{Dw:function(){return r},LY:function(){return u}});var a=t(3144),i=t(5671),r=(0,a.Z)((function e(n){(0,i.Z)(this,e),this.title=void 0,this.dataIndex=void 0,this.key=void 0,this.render=void 0,this.className=void 0,this.width=void 0,this.label=void 0,this.value=void 0,this.disabled=!1,this.title=n.title,this.key=n.key,void 0===n.dataIndex?this.dataIndex=n.key:this.dataIndex=n.dataIndex,this.render=n.render,this.className=n.className,this.width=n.width,this.label=n.title,this.value=n.key,"stt"!==this.key&&"action"!==this.key||(this.disabled=!0),void 0!==n.disabled&&(this.disabled=n.disabled)})),u=function(){function e(n,t,a){(0,i.Z)(this,e),this.pageNumber=1,this.pageSize=10,this.orderBy=void 0,this.pageNumber=n,this.pageSize=t,this.orderBy=a}return(0,a.Z)(e,[{key:"generateQueryString",value:function(){return void 0===this?"":"pageNumber=".concat(this.pageNumber,"&pageSize=").concat(this.pageSize,"&orderBy=").concat(this.orderBy.genQueryOrderBy())}}]),e}()},2496:function(e,n,t){t.d(n,{Cp:function(){return c},KH:function(){return l},PH:function(){return u},eV:function(){return o},hl:function(){return d},rG:function(){return s}});var a=t(5671),i=t(3144),r=t(1285),u=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/templates?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/templates/".concat(e);return r.p.SendReq(n,"Get")}},{key:"Detail",value:function(e){var n="v2/mails/templates/".concat(e);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e){return r.p.SendReq("v2/mails/templates","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/templates/".concat(e);return r.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/templates/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(t,"Delete")}}]),e}(),o=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mails/apps?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mails/apps/".concat(e);return r.p.SendReq(n,"get")}},{key:"Add",value:function(e){return r.p.SendReq("v2/mails/apps","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mails/apps/".concat(e);return r.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mails/apps/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(t,"Delete")}},{key:"GetTemplate",value:function(e){var n="v2/mails/apps/".concat(e,"/templates");return r.p.SendReq(n,"Get")}},{key:"SaveTemplate",value:function(e,n){var t="v2/mails/apps/".concat(e,"/templates");return r.p.SendReq(t,"Put",n)}}]),e}(),s=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e,n,t,a){}},{key:"GetDetail",value:function(e,n,t,a){}},{key:"Add",value:function(e,n,t,a){}},{key:"Edit",value:function(e,n,t,a,i){}},{key:"Delete",value:function(e,n,t,a,i){}},{key:"SearchName",value:function(e,n,t,a){}},{key:"GetLinkStored",value:function(e,n,t,a,i){}},{key:"GetDetailLinkStored",value:function(e,n,t,a){}},{key:"AddLinkStored",value:function(e,n,t,a){}},{key:"EditLinkStored",value:function(e,n,t,a,i){}},{key:"DeleteLinkStored",value:function(e,n,t,a,i){}}]),e}(),c=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(){return r.p.SendReq("v2/mains/logging","Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/logging/".concat(e);return r.p.SendReq(n,"Get")}},{key:"GetListLogAction",value:function(e){var n="v2/mains/logging/logActions?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"ReportDetail",value:function(){return r.p.SendReq("v2/mains/logging/report","Get")}},{key:"GetChart",value:function(e){var n="v2/mains/logging/chart?numberItem=".concat(e);return r.p.SendReq(n,"Get")}}]),e}(),l=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/versionManages?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/versionManages/".concat(e);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e){return r.p.SendReq("v2/mains/versionManages","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/versionManages/".concat(e);return r.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/versionManages/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(t,"Delete")}}]),e}(),d=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"GetList",value:function(e){var n="v2/mains/menus?".concat(e.generateQueryString());return r.p.SendReq(n,"Get")}},{key:"GetDetail",value:function(e){var n="v2/mains/menus/".concat(e);return r.p.SendReq(n,"Get")}},{key:"Add",value:function(e){return r.p.SendReq("v2/mains/menus","Post",e)}},{key:"Edit",value:function(e,n){var t="v2/mains/menus/".concat(e);return r.p.SendReq(t,"Put",n)}},{key:"Delete",value:function(e,n){var t="v2/mains/menus/".concat(e,"?timestamp=").concat(encodeURIComponent(n));return r.p.SendReq(t,"Delete")}},{key:"Query",value:function(e){var n="v2/mains/menus/query?q=".concat(e);return r.p.SendReq(n,"Get")}}]),e}()}}]);
//# sourceMappingURL=999.c39276b1.chunk.js.map