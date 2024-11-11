"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4214],{5966:function(re,F,e){var i=e(97685),s=e(1413),x=e(45987),C=e(21770),j=e(72723),T=e(55241),I=e(97435),M=e(67294),B=e(61856),n=e(85893),K=["fieldProps","proFieldProps"],N=["fieldProps","proFieldProps"],P="text",v=function(g){var c=g.fieldProps,Z=g.proFieldProps,O=(0,x.Z)(g,K);return(0,n.jsx)(B.Z,(0,s.Z)({valueType:P,fieldProps:c,filedConfig:{valueType:P},proFieldProps:Z},O))},h=function(g){var c=(0,C.Z)(g.open||!1,{value:g.open,onChange:g.onOpenChange}),Z=(0,i.Z)(c,2),O=Z[0],$=Z[1];return(0,n.jsx)(j.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(Y){var L,q=Y.getFieldValue(g.name||[]);return(0,n.jsx)(T.Z,(0,s.Z)((0,s.Z)({getPopupContainer:function(R){return R&&R.parentNode?R.parentNode:R},onOpenChange:function(R){return $(R)},content:(0,n.jsxs)("div",{style:{padding:"4px 0"},children:[(L=g.statusRender)===null||L===void 0?void 0:L.call(g,q),g.strengthText?(0,n.jsx)("div",{style:{marginTop:10},children:(0,n.jsx)("span",{children:g.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},g.popoverProps),{},{open:O,children:g.children}))}})},p=function(g){var c=g.fieldProps,Z=g.proFieldProps,O=(0,x.Z)(g,N),$=(0,M.useState)(!1),G=(0,i.Z)($,2),Y=G[0],L=G[1];return c!=null&&c.statusRender&&O.name?(0,n.jsx)(h,{name:O.name,statusRender:c==null?void 0:c.statusRender,popoverProps:c==null?void 0:c.popoverProps,strengthText:c==null?void 0:c.strengthText,open:Y,onOpenChange:L,children:(0,n.jsx)("div",{children:(0,n.jsx)(B.Z,(0,s.Z)({valueType:"password",fieldProps:(0,s.Z)((0,s.Z)({},(0,I.Z)(c,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(k){var R;c==null||(R=c.onBlur)===null||R===void 0||R.call(c,k),L(!1)},onClick:function(k){var R;c==null||(R=c.onClick)===null||R===void 0||R.call(c,k),L(!0)}}),proFieldProps:Z,filedConfig:{valueType:P}},O))})}):(0,n.jsx)(B.Z,(0,s.Z)({valueType:"password",fieldProps:c,proFieldProps:Z,filedConfig:{valueType:P}},O))},l=v;l.Password=p,l.displayName="ProFormComponent",F.Z=l},80821:function(re,F,e){e.d(F,{Z:function(){return B}});var i=e(5574),s=e.n(i),x=e(24963),C=e(86738),j=e(14726),T=e(83062),I=e(67294),M=e(85893);function B(n){var K=(0,I.useState)(!1),N=s()(K,2),P=N[0],v=N[1],h=(0,I.useContext)(x.Z),p=h.lang,l=h.notice,z=h.message,g=function(){v(!0),n.action().then(function(Z){if(v(!1),typeof n.onSuccess=="function"&&n.onSuccess(Z),n.messageSuccess){var O="";typeof n.messageSuccess=="function"?O=n.messageSuccess(Z):O=n.messageSuccess,O.indexOf(".")>-1&&(O=p(O)),n.asynced?z.info(O):z.success(O)}}).catch(function(Z){v(!1),typeof n.onError=="function"&&n.onError(Z)})};return n.confirm?(0,M.jsx)(C.Z,{style:{width:500},title:n.confirmTitle?n.confirmTitle:p("notification.title.tip"),description:n.confirm,onConfirm:g,okText:"Yes",cancelText:"No",children:(0,M.jsx)(j.ZP,{disabled:n.disabled,icon:n.icon,loading:P,danger:n.danger,type:n.type,children:n.children})}):(0,M.jsx)(T.Z,{title:n.tips,children:(0,M.jsx)(j.ZP,{disabled:n.disabled,icon:n.icon,loading:P,onClick:g,danger:n.danger,type:n.type,children:n.children})})}},96042:function(re,F,e){e.d(F,{Z:function(){return B}});var i=e(97857),s=e.n(i),x=e(5574),C=e.n(x),j=e(75870),T=e(34041),I=e(67294),M=e(85893);function B(n){var K=(0,I.useState)([]),N=C()(K,2),P=N[0],v=N[1];(0,I.useEffect)(function(){(0,j.Ot)().then(function(p){p&&v(p.data.list)})},[]);var h={};return n.multiple&&(h.mode="multiple"),n.top&&(h.placement="topLeft"),(0,M.jsx)(T.Z,s()({onChange:function(l){if(n.multiple){var z=l.map(function(g){return P[g]});n.onChangeList&&n.onChangeList(z)}else n.onChange&&n.onChange(P[l])},placeholder:"\u9009\u62E9\u955C\u50CF\u4ED3\u5E93\uFF0C\u672C\u5730\u4F7F\u7528\u7559\u7A7A\u5373\u53EF",options:P.map(function(p,l){return{value:p.serverAddress,label:p.title+"("+p.serverAddress+")"}})},h))}},24963:function(re,F,e){var i=e(67294),s=(0,i.createContext)({});F.Z=s},31810:function(re,F,e){e.r(F),e.d(F,{default:function(){return Q}});var i=e(15009),s=e.n(i),x=e(99289),C=e.n(x),j=e(5574),T=e.n(j),I=e(90078),M=e(10641),B=e(37476),n=e(62370),K=e(5966),N=e(31418),P=e(14726),v=e(60922),h=e(42075),p=e(66309),l=e(96074),z=e(83062),g=e(72723),c=e(25278),Z=e(84567),O=e(50136),$=e(67294),G=e(54006),Y=e(18148),L=e(5251),q=e(80821),k=e(43425),R=e(87462),de=e(3803),Ce=e(84089),t=function(X,ee){return $.createElement(Ce.Z,(0,R.Z)({},X,{ref:ee,icon:de.Z}))},m=$.forwardRef(t),E=m,o=e(28307),u=e(96042),V=e(67255),A=e(24963),r=e(85893);function Q(){var w=(0,$.useContext)(A.Z),X=w.message,ee=w.notice,te=w.lang,b=(0,$.useRef)(),se=(0,$.useState)({force:!1}),J=T()(se,2),ue=J[0],oe=J[1],pe=(0,$.useState)([]),ie=T()(pe,2),fe=ie[0],me=ie[1],_e=N.Z.useApp(),H=(0,$.useState)(1),ve=T()(H,2),ge=ve[0],Ee=ve[1],he=(0,$.useRef)();return(0,$.useEffect)(function(){var D;(D=b.current)===null||D===void 0||D.reload()},[ge]),(0,r.jsx)(I._z,{header:{extra:[(0,r.jsx)(G.Link,{to:"/image/create",children:(0,r.jsx)(P.ZP,{type:"primary",children:"\u521B\u5EFA&\u5BFC\u5165\u955C\u50CF"},"create")}),(0,r.jsx)(o.Z,{onFinish:function(){var _,a;!((_=b.current)===null||_===void 0)&&_.reloadAndRest&&((a=b.current)===null||a===void 0||a.reloadAndRest())}},"remote")]},children:(0,r.jsx)(M.Z,{scroll:{x:"max-content"},rowKey:"Id",columns:[{title:"\u540D\u79F0",dataIndex:"title",render:function(_,a,S,W,d){var f=a.Id.substring(7,19);return fe.map(function(y){a.RepoTags.map(function(U){U==y.tag&&(f=y.title)})}),(0,r.jsx)(v.Z.Text,{editable:{tooltip:"\u4FEE\u6539\u955C\u50CF\u5907\u6CE8\u540D\u79F0",onChange:function(){var y=C()(s()().mark(function ae(le){var ne;return s()().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:return ce.next=2,(0,Y.Fj)({tag:a.RepoTags[0],title:le});case 2:ne=ce.sent,Ee(ge+1),X.success("\u4FEE\u6539\u955C\u50CF\u540D\u79F0\u6210\u529F");case 5:case"end":return ce.stop()}},ae)}));function U(ae){return y.apply(this,arguments)}return U}()},children:f?(0,r.jsx)(G.Link,{to:"/image/detail/"+a.Id,children:f},"edit"):"---"})}},{title:"Tag",dataIndex:"tag",render:function(_,a,S,W){return(0,r.jsx)(h.Z,{direction:"vertical",style:{textAlign:"left"},children:a.RepoTags.map(function(d,f){return(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(p.Z,{color:"#2db7f5",children:(0,r.jsx)(v.Z.Text,{copyable:!0,style:{color:"#ffffff",maxWidth:"300px"},ellipsis:!0,title:d,children:d},f)},f),a.Containers>0&&(0,r.jsx)(p.Z,{color:"cyan",children:"\u4F7F\u7528\u4E2D"})]})})},a.Id)}},{title:"\u5C3A\u5BF8",dataIndex:"size",ellipsis:!0,width:"120px",search:!1,sorter:function(_,a){return parseFloat(_.Size)-parseFloat(a.Size)},render:function(_,a,S,W){return(0,r.jsx)("div",{children:(0,L.FI)(parseFloat(a.Size))},a.Id)}},{title:"\u521B\u5EFA\u65E5\u671F",dataIndex:"Created",ellipsis:!0,search:!1,width:"180px",render:function(_,a,S,W){return(0,r.jsx)("div",{children:(0,L.ZM)(a.Created*1e3)},a.Id)},sorter:function(_,a){return _.Created-a.Created}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:"150px",render:function(_,a,S,W){return(0,r.jsxs)(h.Z,{split:(0,r.jsx)(l.Z,{type:"vertical"}),children:[(0,r.jsx)(G.Link,{to:"/image/detail/"+a.Id,children:(0,r.jsx)(z.Z,{title:"\u7BA1\u7406",children:(0,r.jsx)(k.Z,{})})},"edit"),(0,r.jsx)(G.Link,{to:"/app/create/image?imageId="+a.Id,children:(0,r.jsx)(z.Z,{title:"\u521B\u5EFA\u5BB9\u5668",children:(0,r.jsx)(E,{})})},"create")]})}}],request:function(){var D=C()(s()().mark(function _(a,S,W){var d;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,(0,Y.KG)({tag:a.tag,title:a.title});case 2:if(d=y.sent,!(!d||!d.data||!d.data.list)){y.next=5;break}return y.abrupt("return",{data:[],success:!0,total:0});case 5:return y.abrupt("return",{data:d.data.list,success:!0,total:d.data.list.length});case 6:case"end":return y.stop()}},_)}));return function(_,a,S){return D.apply(this,arguments)}}(),pagination:(0,V.O)(),search:{collapsed:!1},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},actionRef:b,tableAlertOptionRender:function(_){var a=_.selectedRowKeys,S=_.selectedRows;return(0,r.jsxs)(h.Z,{size:16,children:[(0,r.jsxs)(B.Y,{formRef:he,title:"\u6279\u91CF\u63A8\u9001\u955C\u50CF",trigger:(0,r.jsx)(P.ZP,{children:"\u6279\u91CF\u63A8\u9001"}),onFinish:function(){var W=C()(s()().mark(function d(f){var y,U,ae;return s()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,(0,Y.KX)({md5:a,registryId:f.registryId,newNamespace:f.newNamespace});case 2:return ae=ne.sent,(y=b.current)===null||y===void 0||y.reload(),!((U=b.current)===null||U===void 0)&&U.clearSelected&&b.current.clearSelected(),ne.abrupt("return",!0);case 6:case"end":return ne.stop()}},d)}));return function(d){return W.apply(this,arguments)}}(),children:[(0,r.jsx)(g.Z.List,{name:"registryId",children:function(d){return d.map(function(f,y){return(0,r.jsx)(c.Z,{hidden:!0},y)})}}),(0,r.jsx)(n.Z,{label:"\u955C\u50CF\u4ED3\u5E93",name:"imageRespo",tooltip:(0,r.jsxs)(r.Fragment,{children:["\u63A8\u9001\u524D\u8BF7\u4FDD\u8BC1\u4ED3\u5E93\u4E2D\u6709\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4, \u5982\u6CA1\u6709\u8BF7\u5148 ",(0,r.jsx)("a",{href:"",target:"_blank",children:"\u6DFB\u52A0\u4ED3\u5E93"})]}),children:(0,r.jsx)(u.Z,{multiple:!0,top:!0,onChangeList:function(d){var f;(f=he.current)===null||f===void 0||f.setFieldValue("registryId",d.map(function(y){return y.id}))}})}),(0,r.jsx)(K.Z,{tooltip:"\u53EF\u4EE5\u901A\u8FC7\u6B64\u9879\u91CD\u65B0\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4\uFF0Cdocker hub \u4E0D\u53D7\u8BE5\u914D\u7F6E\u7684\u5F71\u54CD\u3002 \u914D\u7F6E\u6B64\u9879\u540E mysql:latest \u4F1A\u63A8\u9001\u81F3 {\u547D\u540D\u7A7A\u95F4}/mysql:latest\uFF0C dpanel/dpanel:latest \u4F1A\u63A8\u9001\u81F3 {\u547D\u540D\u7A7A\u95F4}/dpanel:latest",label:"\u91CD\u5199\u975E\u5B98\u65B9\u4ED3\u5E93\u547D\u540D\u7A7A\u95F4",name:"newNamespace"})]}),(0,r.jsx)(q.Z,{danger:!0,type:"primary",action:function(){return(0,Y.ao)({md5:a,force:ue.force})},onSuccess:function(){var d,f;return!((d=b.current)===null||d===void 0)&&d.reloadAndRest&&((f=b.current)===null||f===void 0||f.reloadAndRest()),!0},onError:function(){var d,f;return!((d=b.current)===null||d===void 0)&&d.reset&&((f=b.current)===null||f===void 0||f.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",confirm:(0,r.jsxs)(h.Z,{style:{width:280},direction:"vertical",children:[(0,r.jsx)(v.Z.Text,{children:"\u5220\u9664\u955C\u50CF\u540E\u65E0\u6CD5\u6062\u590D,\u786E\u8BA4\u5417\uFF1F"}),(0,r.jsx)(Z.Z,{name:"deleteVolume",onChange:function(d){return oe({force:d.target.checked})},children:"\u5F3A\u5236\u5220\u9664\uFF1F"})]}),children:"\u6279\u91CF\u5220\u9664"})]})},tableExtraRender:function(){return(0,r.jsx)(O.Z,{mode:"horizontal",selectedKeys:["all"],items:[{label:(0,r.jsx)(G.Link,{to:"/image/list",replace:!0,children:"\u5168\u90E8\u955C\u50CF"}),key:"all"},{label:(0,r.jsx)(G.Link,{to:"/image/list/recycle",replace:!0,children:"\u6784\u5EFA\u4EFB\u52A1"}),key:"build"}]})},toolBarRender:function(){return[(0,r.jsx)(q.Z,{action:function(){return(0,Y.c7)()},onSuccess:function(){var a,S;return!((a=b.current)===null||a===void 0)&&a.reloadAndRest&&((S=b.current)===null||S===void 0||S.reloadAndRest()),!0},onError:function(){var a,S;return!((a=b.current)===null||a===void 0)&&a.reset&&((S=b.current)===null||S===void 0||S.reset()),!0},messageSuccess:"\u6E05\u9664\u6210\u529F",confirm:"\u662F\u5426\u6E05\u7406\u672A\u4F7F\u7528\u6216\u662F\u672A\u8FD0\u884C\u7684\u955C\u50CF",children:"\u6E05\u7406\u672A\u4F7F\u7528\u955C\u50CF"})]},columnsState:(0,V.j)("image-list")})})}},75870:function(re,F,e){e.d(F,{Ot:function(){return T},ZH:function(){return M},ix:function(){return n},t1:function(){return N}});var i=e(15009),s=e.n(i),x=e(99289),C=e.n(x),j=e(54006);function T(v){return I.apply(this,arguments)}function I(){return I=C()(s()().mark(function v(h){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,j.request)("/api/common/registry/get-list",{method:"POST",data:h}));case 1:case"end":return l.stop()}},v)})),I.apply(this,arguments)}function M(v){return B.apply(this,arguments)}function B(){return B=C()(s()().mark(function v(h){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,j.request)("/api/common/registry/create",{method:"POST",data:h}));case 1:case"end":return l.stop()}},v)})),B.apply(this,arguments)}function n(v){return K.apply(this,arguments)}function K(){return K=C()(s()().mark(function v(h){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,j.request)("/api/common/registry/delete",{method:"POST",data:h}));case 1:case"end":return l.stop()}},v)})),K.apply(this,arguments)}function N(v){return P.apply(this,arguments)}function P(){return P=C()(s()().mark(function v(h){return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,j.request)("/api/common/registry/get-detail",{method:"POST",data:h}));case 1:case"end":return l.stop()}},v)})),P.apply(this,arguments)}},67255:function(re,F,e){e.d(F,{O:function(){return i},j:function(){return s}});function i(){var x,C=parseInt((x=localStorage.getItem("dpanel-pagesize"))!==null&&x!==void 0?x:"0");return{showSizeChanger:!0,defaultPageSize:C!=null?C:20}}function s(x){var C="dpanel-table-column-".concat(x),j={};if(localStorage.getItem(C)){var T;j=JSON.parse((T=localStorage.getItem(C))!==null&&T!==void 0?T:"{}")}return{defaultValue:j,onChange:function(M){localStorage.setItem("dpanel-table-column-".concat(x),JSON.stringify(M))}}}},66309:function(re,F,e){e.d(F,{Z:function(){return Ce}});var i=e(67294),s=e(93967),x=e.n(s),C=e(98423),j=e(98787),T=e(69760),I=e(96159),M=e(45353),B=e(53124),n=e(11568),K=e(10274),N=e(14747),P=e(83262),v=e(83559);const h=t=>{const{paddingXXS:m,lineWidth:E,tagPaddingHorizontal:o,componentCls:u,calc:V}=t,A=V(o).sub(E).equal(),r=V(m).sub(E).equal();return{[u]:Object.assign(Object.assign({},(0,N.Wf)(t)),{display:"inline-block",height:"auto",marginInlineEnd:t.marginXS,paddingInline:A,fontSize:t.tagFontSize,lineHeight:t.tagLineHeight,whiteSpace:"nowrap",background:t.defaultBg,border:`${(0,n.bf)(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:t.borderRadiusSM,opacity:1,transition:`all ${t.motionDurationMid}`,textAlign:"start",position:"relative",[`&${u}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:t.defaultColor},[`${u}-close-icon`]:{marginInlineStart:r,fontSize:t.tagIconSize,color:t.colorTextDescription,cursor:"pointer",transition:`all ${t.motionDurationMid}`,"&:hover":{color:t.colorTextHeading}},[`&${u}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${t.iconCls}-close, ${t.iconCls}-close:hover`]:{color:t.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${u}-checkable-checked):hover`]:{color:t.colorPrimary,backgroundColor:t.colorFillSecondary},"&:active, &-checked":{color:t.colorTextLightSolid},"&-checked":{backgroundColor:t.colorPrimary,"&:hover":{backgroundColor:t.colorPrimaryHover}},"&:active":{backgroundColor:t.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${t.iconCls} + span, > span + ${t.iconCls}`]:{marginInlineStart:A}}),[`${u}-borderless`]:{borderColor:"transparent",background:t.tagBorderlessBg}}},p=t=>{const{lineWidth:m,fontSizeIcon:E,calc:o}=t,u=t.fontSizeSM;return(0,P.IX)(t,{tagFontSize:u,tagLineHeight:(0,n.bf)(o(t.lineHeightSM).mul(u).equal()),tagIconSize:o(E).sub(o(m).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:t.defaultBg})},l=t=>({defaultBg:new K.C(t.colorFillQuaternary).onBackground(t.colorBgContainer).toHexString(),defaultColor:t.colorText});var z=(0,v.I$)("Tag",t=>{const m=p(t);return h(m)},l),g=function(t,m){var E={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&m.indexOf(o)<0&&(E[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(t);u<o.length;u++)m.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(t,o[u])&&(E[o[u]]=t[o[u]]);return E},Z=i.forwardRef((t,m)=>{const{prefixCls:E,style:o,className:u,checked:V,onChange:A,onClick:r}=t,Q=g(t,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:w,tag:X}=i.useContext(B.E_),ee=oe=>{A==null||A(!V),r==null||r(oe)},te=w("tag",E),[b,se,J]=z(te),ue=x()(te,`${te}-checkable`,{[`${te}-checkable-checked`]:V},X==null?void 0:X.className,u,se,J);return b(i.createElement("span",Object.assign({},Q,{ref:m,style:Object.assign(Object.assign({},o),X==null?void 0:X.style),className:ue,onClick:ee})))}),O=e(98719);const $=t=>(0,O.Z)(t,(m,E)=>{let{textColor:o,lightBorderColor:u,lightColor:V,darkColor:A}=E;return{[`${t.componentCls}${t.componentCls}-${m}`]:{color:o,background:V,borderColor:u,"&-inverse":{color:t.colorTextLightSolid,background:A,borderColor:A},[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}});var G=(0,v.bk)(["Tag","preset"],t=>{const m=p(t);return $(m)},l);function Y(t){return typeof t!="string"?t:t.charAt(0).toUpperCase()+t.slice(1)}const L=(t,m,E)=>{const o=Y(E);return{[`${t.componentCls}${t.componentCls}-${m}`]:{color:t[`color${E}`],background:t[`color${o}Bg`],borderColor:t[`color${o}Border`],[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}};var q=(0,v.bk)(["Tag","status"],t=>{const m=p(t);return[L(m,"success","Success"),L(m,"processing","Info"),L(m,"error","Error"),L(m,"warning","Warning")]},l),k=function(t,m){var E={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&m.indexOf(o)<0&&(E[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,o=Object.getOwnPropertySymbols(t);u<o.length;u++)m.indexOf(o[u])<0&&Object.prototype.propertyIsEnumerable.call(t,o[u])&&(E[o[u]]=t[o[u]]);return E};const de=i.forwardRef((t,m)=>{const{prefixCls:E,className:o,rootClassName:u,style:V,children:A,icon:r,color:Q,onClose:w,bordered:X=!0,visible:ee}=t,te=k(t,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:b,direction:se,tag:J}=i.useContext(B.E_),[ue,oe]=i.useState(!0),pe=(0,C.Z)(te,["closeIcon","closable"]);i.useEffect(()=>{ee!==void 0&&oe(ee)},[ee]);const ie=(0,j.o2)(Q),fe=(0,j.yT)(Q),me=ie||fe,_e=Object.assign(Object.assign({backgroundColor:Q&&!me?Q:void 0},J==null?void 0:J.style),V),H=b("tag",E),[ve,ge,Ee]=z(H),he=x()(H,J==null?void 0:J.className,{[`${H}-${Q}`]:me,[`${H}-has-color`]:Q&&!me,[`${H}-hidden`]:!ue,[`${H}-rtl`]:se==="rtl",[`${H}-borderless`]:!X},o,u,ge,Ee),D=f=>{f.stopPropagation(),w==null||w(f),!f.defaultPrevented&&oe(!1)},[,_]=(0,T.Z)((0,T.w)(t),(0,T.w)(J),{closable:!1,closeIconRender:f=>{const y=i.createElement("span",{className:`${H}-close-icon`,onClick:D},f);return(0,I.wm)(f,y,U=>({onClick:ae=>{var le;(le=U==null?void 0:U.onClick)===null||le===void 0||le.call(U,ae),D(ae)},className:x()(U==null?void 0:U.className,`${H}-close-icon`)}))}}),a=typeof te.onClick=="function"||A&&A.type==="a",S=r||null,W=S?i.createElement(i.Fragment,null,S,A&&i.createElement("span",null,A)):A,d=i.createElement("span",Object.assign({},pe,{ref:m,className:he,style:_e}),W,_,ie&&i.createElement(G,{key:"preset",prefixCls:H}),fe&&i.createElement(q,{key:"status",prefixCls:H}));return ve(a?i.createElement(M.Z,{component:"Tag"},d):d)});de.CheckableTag=Z;var Ce=de}}]);