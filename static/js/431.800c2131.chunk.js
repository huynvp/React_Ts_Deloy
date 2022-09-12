"use strict";(self.webpackChunkmyweb=self.webpackChunkmyweb||[]).push([[431],{7335:function(e,t,n){n.d(t,{Do:function(){return h},G9:function(){return g},Hn:function(){return k},J:function(){return y},Jd:function(){return m},PI:function(){return v},WU:function(){return j},bR:function(){return b},ue:function(){return x}});var a=n(8678),o=n(1095),i=n(7123),u=n(3344),r=n(6106),l=n(914),s=n(6435),c=n(2426),d=n.n(c),f=n(184);function v(e){return(0,f.jsx)(a.Z,{onClick:e.onClick,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)},required:e.required,readOnly:e.readOnly})}function h(e){return(0,f.jsx)(o.Z.Item,{label:e.label,children:(0,f.jsx)(v,{onClick:e.onClick,value:e.value,setValue:e.setValue,required:e.required,readOnly:e.readOnly})})}function y(e){return(0,f.jsx)(o.Z.Item,{label:e.label,children:(0,f.jsx)(i.Z,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return d()(e).format("DD/MM/YYYY")},inputReadOnly:e.readOnly})})}function m(e){return(0,f.jsx)(o.Z.Item,{label:e.label,children:(0,f.jsx)(i.Z,{showTime:!0,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)},format:function(e){return d()(e).format("DD/MM/YYYY HH:mm:ss")},disabled:e.readOnly})})}function p(e){return(0,f.jsx)(u.Z,{min:e.min,max:e.max,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t)}})}function g(e){return(0,f.jsx)("div",{children:(0,f.jsxs)(r.Z,{className:e.className,children:[(0,f.jsx)(l.Z,{span:e.colSpan1,children:(0,f.jsx)("span",{children:e.label})}),(0,f.jsx)(l.Z,{span:e.colSpan2,children:(0,f.jsx)(p,{min:e.min,max:e.max,value:e.value,setValue:e.setValue})})]})})}function j(e){return(0,f.jsx)(o.Z.Item,{label:e.label,children:(0,f.jsx)(s.Z,{options:e.options,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t),void 0!==e.onChange&&e.onChange(t)}})})}function k(e){var t=a.Z.TextArea;return(0,f.jsx)(o.Z.Item,{label:e.label,children:(0,f.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}function x(e){var t=a.Z.Password;return(0,f.jsx)(o.Z.Item,{label:e.label,children:(0,f.jsx)(t,{value:e.value,onChange:function(t){void 0!==e.onChange&&e.onChange(t.target.value),void 0!==e.setValue&&e.setValue(t.target.value)}})})}function b(e){var t=a.Z.Search;return(0,f.jsx)(o.Z.Item,{label:e.label,children:(0,f.jsx)(t,{loading:e.loading,onSearch:e.onSearch,value:e.value,onChange:function(t){void 0!==e.setValue&&e.setValue(t.target.value)}})})}},2684:function(e,t,n){n.d(t,{O:function(){return i}});var a=n(7309),o=(n(1708),n(184));function i(e){var t=void 0!==e.htmlType?e.htmlType:"button";return(0,o.jsx)(a.Z,{disabled:e.disabled,loading:e.isLoading,htmlType:t,className:"btn_"+e.type,onClick:function(){void 0!==e.onClick&&e.onClick()},children:e.value})}},8376:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(9439),o=n(8885),i=n(1095),u=n(6106),r=n(914),l=n(2426),s=n.n(l),c=n(2791),d=n(1830),f=n.n(d),v=n(3778),h=n(4492),y=n(7335),m=n(2684),p=n(184);function g(e){var t=(0,c.useState)(""),n=(0,a.Z)(t,2),l=n[0],d=n[1],g=(0,c.useState)(s()()),j=(0,a.Z)(g,2),k=j[0],x=j[1],b=(0,c.useState)(s()()),D=(0,a.Z)(b,2),C=D[0],Z=D[1],T=e.setIsLoading,V=(0,c.useCallback)((function(){void 0!==e.keyData&&(T(!0),h.g.GetDetail(e.projectKey,e.keyData,(function(e){var t=e.data.data;d(t.name),x(s()(t.dateFrom)),Z(s()(t.dateTo))}),void 0,(function(){T(!1)})))}),[e.projectKey,e.keyData,T]);function I(){e.setVisible(!1),d(""),x(s()()),Z(s()()),void 0!==e.setKeyData&&e.setKeyData(void 0)}return(0,c.useEffect)((function(){V()}),[V]),(0,p.jsx)(o.Z,{title:"Chi ti\u1ebft",open:e.visible,onClose:I,children:(0,p.jsxs)(i.Z,{layout:"vertical",onSubmitCapture:function(){var t={name:l,dateFrom:k.format("yyyy-MM-DD"),dateTo:C.format("yyyy-MM-DD")};T(!0),void 0!==e.keyData?function(t){h.g.GetDetail(e.projectKey,e.keyData,(function(n){t=v.Fn.GetTimestamp(n,t),h.g.Edit(e.projectKey,e.keyData,t,(function(t){v.Fn.PrintMsgSuccess(t),I(),e.loadData()}),(function(){e.setIsLoading(!1)}))}),(function(){e.setIsLoading(!1)}))}(t):function(t){h.g.Add(e.projectKey,t,(function(t){v.Fn.PrintMsgSuccess(t),I(),e.loadData()}),(function(){e.setIsLoading(!1)}))}(t)},children:[(0,p.jsx)(y.Do,{label:"T\xean giai \u0111o\u1ea1n",value:l,setValue:d}),(0,p.jsx)(y.J,{label:"Ng\xe0y b\u1eaft \u0111\u1ea7u",value:k,setValue:x}),(0,p.jsx)(y.J,{label:"Ng\xe0y k\u1ebft th\xfac",value:C,setValue:Z}),(0,p.jsxs)(u.Z,{gutter:24,children:[(0,p.jsx)(r.Z,{span:"12",children:(0,p.jsx)(m.O,{isLoading:e.isLoading,htmlType:"submit",type:"success",value:void 0!==e.keyData?"Ch\u1ec9nh s\u1eeda":"Th\xeam m\u1edbi"})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(m.O,{isLoading:e.isLoading,type:"danger",disabled:void 0===e.keyData,onClick:function(){f().fire({title:"X\xe1c nh\u1eadn x\xf3a",text:"B\u1ea1n c\xf3 mu\u1ed1n x\xf3a sprint n\xe0y kh\xf4ng?",showDenyButton:!0,confirmButtonText:"C\xf3",denyButtonText:"Kh\xf4ng"}).then((function(t){t.isConfirmed&&(e.setIsLoading(!0),h.g.GetDetail(e.projectKey,e.keyData,(function(t){h.g.Delete(e.projectKey,e.keyData,v.Fn.GetTimestamp(t),(function(t){v.Fn.PrintMsgSuccess(t),I(),e.loadData()}),(function(){e.setIsLoading(!1)}))}),(function(){e.setIsLoading(!1)})))}))},value:"X\xf3a sprint"})})]})]})})}},4492:function(e,t,n){n.d(t,{b:function(){return u},g:function(){return r}});var a=n(5671),o=n(3144),i=n(1285),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n,a){var o="tools/tasks/projects?".concat(e.generateQueryString());return i.T.Get(o,t,n,a)}},{key:"GetDetail",value:function(e,t,n,a){var o="tools/tasks/projects/".concat(e);return i.T.Get(o,t,n,a)}},{key:"Search",value:function(e,t,n,a){var o="tools/tasks/projects/query?q=".concat(e);return i.T.Get(o,t,n,a)}},{key:"Add",value:function(e,t,n,a){return console.log(e),i.T.Post("tools/tasks/projects",e,t,n,a)}},{key:"Edit",value:function(e,t,n,a,o){var u="tools/tasks/projects/".concat(e);return i.T.Put(u,t,n,a,o)}},{key:"Delete",value:function(e,t,n,a,o){var u="tools/tasks/projects/".concat(e,"?timestamp=").concat(encodeURIComponent(t));return i.T.Delete(u,n,a,o)}}]),e}(),r=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,null,[{key:"GetList",value:function(e,t,n,a,o){var u="tools/tasks/projects/".concat(e,"/sprints").concat(void 0===t?"":"?"+(null===t||void 0===t?void 0:t.generateQueryString()));return i.T.Get(u,n,a,o)}},{key:"GetDetail",value:function(e,t,n,a,o){var u="tools/tasks/projects/".concat(e,"/sprints/").concat(t);return i.T.Get(u,n,a,o)}},{key:"Add",value:function(e,t,n,a,o){var u="tools/tasks/projects/".concat(e,"/sprints");return i.T.Post(u,t,n,a,o)}},{key:"Edit",value:function(e,t,n,a,o,u){var r="tools/tasks/projects/".concat(e,"/sprints/").concat(t);return i.T.Put(r,n,a,o,u)}},{key:"Delete",value:function(e,t,n,a,o,u){var r="tools/tasks/projects/".concat(e,"/sprints/").concat(t,"?timestamp=").concat(encodeURIComponent(n));return i.T.Delete(r,a,o,u)}}]),e}()},9025:function(e,t,n){var a;function o(e){if("undefined"===typeof document)return 0;if(e||void 0===a){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),o=n.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var i=t.offsetWidth;n.style.overflow="scroll";var u=t.offsetWidth;i===u&&(u=n.clientWidth),document.body.removeChild(n),a=i-u}return a}function i(e){var t=e.match(/^(.*)px$/),n=Number(null===t||void 0===t?void 0:t[1]);return Number.isNaN(n)?o():n}function u(e){if("undefined"===typeof document||!e||!(e instanceof Element))return{width:0,height:0};var t=getComputedStyle(e,"::-webkit-scrollbar"),n=t.width,a=t.height;return{width:i(n),height:i(a)}}n.d(t,{Z:function(){return o},o:function(){return u}})},1708:function(){}}]);
//# sourceMappingURL=431.800c2131.chunk.js.map