"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[550],{98165:function(p,m,e){e.d(m,{Z:function(){return o}});var g=e(87462),a=e(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},f=c,v=e(84089),h=function(t,R){return a.createElement(v.Z,(0,g.Z)({},t,{ref:R,icon:f}))},S=a.forwardRef(h),o=S},80821:function(p,m,e){e.d(m,{Z:function(){return T}});var g=e(5574),a=e.n(g),c=e(24963),f=e(86738),v=e(28036),h=e(83062),S=e(67294),o=e(85893);function T(t){var R=(0,S.useState)(!1),E=a()(R,2),D=E[0],C=E[1],j=(0,S.useContext)(c.Z),I=j.lang,A=j.notice,B=j.message,M=function(){C(!0),t.action().then(function(r){if(C(!1),typeof t.onSuccess=="function"&&t.onSuccess(r),t.messageSuccess){var x="";typeof t.messageSuccess=="function"?x=t.messageSuccess(r):x=t.messageSuccess,x=I("notification.finish"),t.asynced?B.info(x):B.success(x)}}).catch(function(r){C(!1),typeof t.onError=="function"&&t.onError(r)})};return t.confirm?(0,o.jsx)(f.Z,{style:{width:500},title:t.confirmTitle?t.confirmTitle:I("notification.title.tip"),description:t.confirm,onConfirm:M,okText:"Yes",cancelText:"No",children:(0,o.jsx)(v.ZP,{disabled:t.disabled,icon:t.icon,loading:D,danger:t.danger,type:t.type,children:t.children})}):(0,o.jsx)(h.Z,{title:t.tips,children:(0,o.jsx)(v.ZP,{disabled:t.disabled,icon:t.icon,loading:D,onClick:M,danger:t.danger,type:t.type,children:t.children})})}},24963:function(p,m,e){var g=e(67294),a=(0,g.createContext)({});m.Z=a},72340:function(p,m,e){e.r(m),e.d(m,{default:function(){return x}});var g=e(15009),a=e.n(g),c=e(99289),f=e.n(c),v=e(80821),h=e(63713);function S(i){return o.apply(this,arguments)}function o(){return o=f()(a()().mark(function i(l){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/volume/get-backup-list",{method:"POST",data:l}));case 1:case"end":return n.stop()}},i)})),o.apply(this,arguments)}function T(i){return t.apply(this,arguments)}function t(){return t=f()(a()().mark(function i(l){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/volume/delete-backup",{method:"POST",data:l}));case 1:case"end":return n.stop()}},i)})),t.apply(this,arguments)}function R(i){return E.apply(this,arguments)}function E(){return E=f()(a()().mark(function i(l){return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/app/volume/restore",{method:"POST",data:l}));case 1:case"end":return n.stop()}},i)})),E.apply(this,arguments)}var D=e(67255),C=e(98165),j=e(90078),I=e(10641),A=e(42075),B=e(96074),M=e(83062),Z=e(67294),r=e(85893);function x(){var i=(0,Z.useRef)();return(0,r.jsx)(j._z,{header:{extra:[]},children:(0,r.jsx)(I.Z,{rowKey:"id",scroll:{x:"max-content"},columns:[{title:"\u6240\u5C5E\u5BB9\u5668",dataIndex:"containerId",width:150},{title:"\u5B58\u50A8\u8DEF\u5F84",search:!1,dataIndex:["setting","backupPath"],width:200,render:function(d,n,y,s){return(0,r.jsx)("span",{style:{wordBreak:"break-word"},children:n.setting.backupPath})}},{title:"\u6587\u4EF6\u540D\u79F0",search:!1,width:150,render:function(d,n,y,s,u){var O=n.setting.backupTar;return(0,r.jsx)("span",{style:{wordBreak:"break-word"},children:O.substring(O.lastIndexOf("/",O.lastIndexOf("/")-1))})}},{title:"\u5B58\u50A8\u5377\u8DEF\u5F84",search:!1,render:function(d,n,y,s,u){return(0,r.jsx)(A.Z,{wrap:!0,children:n.setting.volumePathList.map(function(O){return O})})}},{title:"\u5907\u4EFD\u65F6\u95F4",search:!1,width:200,render:function(d,n,y,s,u){return new Date(n.createdAt).toLocaleString()}},{title:"\u64CD\u4F5C",search:!1,width:100,render:function(d,n,y,s,u){return(0,r.jsx)(A.Z,{split:(0,r.jsx)(B.Z,{}),children:(0,r.jsx)(M.Z,{title:"\u6062\u590D",children:(0,r.jsx)(v.Z,{type:"link",action:function(){return R({id:n.id,containerMd5:n.containerId})},messageSuccess:"resume",children:(0,r.jsx)(C.Z,{})})})})}}],request:function(){var l=f()(a()().mark(function d(n,y,s){var u;return a()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,S({containerId:n.containerId,page:n.current,pageSize:n.pageSize});case 2:return u=P.sent,P.abrupt("return",{data:u.data.list,success:!0,total:u.data.list.length});case 4:case"end":return P.stop()}},d)}));return function(d,n,y){return l.apply(this,arguments)}}(),rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:i,tableAlertOptionRender:function(d){var n=d.selectedRowKeys;return(0,r.jsx)(A.Z,{size:16,children:(0,r.jsx)(v.Z,{danger:!0,type:"primary",action:function(){return T({id:n})},onSuccess:function(){var s,u;return!((s=i.current)===null||s===void 0)&&s.reloadAndRest&&((u=i.current)===null||u===void 0||u.reloadAndRest()),!0},onError:function(){var s,u;return!((s=i.current)===null||s===void 0)&&s.reset&&((u=i.current)===null||u===void 0||u.reset()),!0},messageSuccess:"delete",children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,D.O)()})})}},67255:function(p,m,e){e.d(m,{O:function(){return g},j:function(){return a}});function g(){var c=localStorage.getItem("dpanel-pagesize");return c=="all"?!1:{showSizeChanger:!0,defaultPageSize:parseInt(c!=null?c:"20")}}function a(c){var f="dpanel-table-column-".concat(c),v={};if(localStorage.getItem(f)){var h;v=JSON.parse((h=localStorage.getItem(f))!==null&&h!==void 0?h:"{}")}return{defaultValue:v,onChange:function(o){localStorage.setItem("dpanel-table-column-".concat(c),JSON.stringify(o))}}}}}]);