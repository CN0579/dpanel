"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8878],{57165:function(oe,R,t){t.d(R,{Z:function(){return w}});var _=t(5574),i=t.n(_),N=t(89035),p=t(63713),j=t(83062),C=t(67294),P=t(85893);function w(Z){var E=(0,C.useState)({height:800,width:1024}),y=i()(E,2),h=y[0],D=y[1],G=function(){var x=window.innerWidth,q=window.innerHeight;D({height:q,width:x})};(0,C.useEffect)(function(){window.addEventListener("resize",function(){G()}),G()},[Z]);var o=Z.query?Object.keys(Z.query).map(function(f){return"".concat(f,"=").concat(Z.query[f])}):[];return(0,P.jsx)(p.Link,{target:"_blank",to:"/console/"+Z.container+"?width=".concat(h.width,"&height=").concat(h.height,"&").concat(o.join("&")),children:(0,P.jsxs)(j.Z,{title:Z.tips?Z.tips:"\u7EC8\u7AEF",children:[(0,P.jsx)(N.Z,{})," ",Z.content]})})}},75516:function(oe,R,t){t.d(R,{Z:function(){return y}});var _=t(89035),i=t(37476),N=t(38345),p=t(97462),j=t(62370),C=t(28036),P=t(63490),w=t(78045),Z=t(57165),E=t(85893);function y(h){return(0,E.jsx)(i.Y,{trigger:(0,E.jsx)(C.ZP,{type:"dashed",icon:(0,E.jsx)(_.Z,{}),children:"Console"}),submitter:!1,children:(0,E.jsxs)(N.Z,{children:[(0,E.jsx)(p.Z,{name:["entryCmd"],children:function(G){var o=G.entryCmd,f=o?"/bin/"+o:"/bin/sh";return(0,E.jsx)(P.Z,{columns:[{title:"\u5BB9\u5668\u540D\u79F0",key:"name",dataIndex:"name",ellipsis:!0},{title:"\u5DE5\u4F5C\u76EE\u5F55",key:"workDir",dataIndex:"workDir"},{title:"\u72B6\u6001",key:"status",dataIndex:"status",width:150},{title:"\u64CD\u4F5C",key:"status",width:150,render:function(q,n,ie){return(0,E.jsx)(Z.Z,{container:h.container.Id,query:{cmd:encodeURIComponent(f),workDir:encodeURIComponent(h.workDir?h.workDir:h.container.Config.WorkingDir)}})}}],dataSource:[{key:1,name:h.container.Id,status:h.container.State.Status,workDir:h.workDir?h.workDir:h.container.Config.WorkingDir}],rowKey:"key",pagination:!1})}}),(0,E.jsx)(j.Z,{name:"entryCmd",label:"Shell\u73AF\u5883\uFF08\u4EC5\u505A\u9ED8\u8BA4\u73AF\u5883\uFF0C\u767B\u5F55\u540E\u53EF\u5207\u6362\u81F3\u5176\u4ED6\u73AF\u5883\uFF09",style:{marginTop:15},initialValue:"sh",children:(0,E.jsxs)(w.ZP.Group,{children:[(0,E.jsx)(w.ZP,{value:"bash",children:"/bin/bash"}),(0,E.jsx)(w.ZP,{value:"sh",children:"/bin/sh"})]})})]})})}},76428:function(oe,R,t){t.d(R,{Z:function(){return p}});var _=t(25593),i=t(67294),N=t(85893);function p(j){return(0,N.jsx)(_.Z.Text,{copyable:!0,children:j.title})}},78498:function(oe,R,t){t.d(R,{Z:function(){return C}});var _=t(25035),i=t(42075),N=t(83062),p=t(67294),j=t(85893);function C(P){return(0,j.jsxs)(i.Z,{children:[P.title,(0,j.jsx)(N.Z,{title:P.help,children:(0,j.jsx)(_.Z,{})})]})}},50479:function(oe,R,t){t.r(R),t.d(R,{default:function(){return on}});var _=t(15009),i=t.n(_),N=t(99289),p=t.n(N),j=t(5574),C=t.n(j),P=t(14946),w=t(29158),Z=t(48689),E=t(38345),y=t(10641),h=t(42075),D=t(25593),G=t(83062),o=t(67294),f=t(80821),x=t(60335),q=t(78498),n=t(85893),ie=(0,o.forwardRef)(function(W,V){var k=(0,o.useRef)();return(0,o.useImperativeHandle)(V,function(){return{reload:function(){var S;!((S=k.current)===null||S===void 0)&&S.reloadAndRest&&k.current.reloadAndRest()}}}),(0,n.jsx)(E.Z,{title:(0,n.jsx)(w.Z,{}),subTitle:"\u5BB9\u5668\u5173\u8054\u4FE1\u606F",ghost:!0,children:(0,n.jsx)(y.Z,{scroll:{x:"max-content"},rowKey:"key",actionRef:k,pagination:!1,options:!1,columns:[{title:"\u6240\u5C5E\u7F51\u7EDC",key:"name",dataIndex:"networkName",width:300},{title:"\u5BB9\u5668\u540D\u79F0",key:"containerName",dataIndex:"containerName"},{title:(0,n.jsx)(q.Z,{title:"hostname",help:"\u63D0\u4F9B\u5BB9\u5668\u5185\u90E8\u8BBF\u95EE"}),key:"hostName",render:function(S,I,A){return I.hostName?(0,n.jsx)(h.Z,{direction:"vertical",children:I.hostName.map(function(B){if(B)return(0,n.jsx)(D.Z.Text,{copyable:!0,keyboard:!0,children:B},B)})}):(0,n.jsx)(n.Fragment,{})}},{title:"Ip",key:"ip",render:function(S,I,A,B,$){return(0,n.jsxs)(h.Z,{direction:"vertical",children:[(0,n.jsx)("span",{children:I.networkInfo.IPv4Address}),I.networkInfo.IPv6Address&&(0,n.jsx)("span",{children:I.networkInfo.IPv6Address})]})}},{title:"\u64CD\u4F5C",key:"option",width:100,render:function(S,I,A,B,$){return(0,n.jsx)(h.Z,{children:I.key!="bridge"&&I.key!="none"&&I.key!="host"&&I.networkName!=""&&(0,n.jsx)(G.Z,{title:"\u9000\u51FA\u7F51\u7EDC",children:(0,n.jsx)(f.Z,{confirm:"\u786E\u8BA4\u9000\u51FA\u8BE5\u7F51\u7EDC\uFF1F",type:"link",action:function(){var L;return(0,P.t9)({name:I.networkName,containerName:(L=W.containerName)!==null&&L!==void 0?L:""})},messageSuccess:"leave",onSuccess:function(){var L,l;!((L=k.current)===null||L===void 0)&&L.reloadAndRest&&((l=k.current)===null||l===void 0||l.reloadAndRest())},children:(0,n.jsx)(Z.Z,{})})})})}}],request:function(){var M=p()(i()().mark(function S(I,A,B){var $,H;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,(0,x.jV)({md5:W.containerName});case 2:return $=l.sent,l.next=5,(0,P._3)({name:Object.keys($.data.info.NetworkSettings.Networks)});case 5:return H=l.sent,l.abrupt("return",{data:H.data.list,success:!0,total:H.data.list.length});case 7:case"end":return l.stop()}},S)}));return function(S,I,A){return M.apply(this,arguments)}}(),search:!1,expandable:{defaultExpandAllRows:!0,expandRowByClick:!1,defaultExpandedRowKeys:["bridge"]}})})}),te=ie,de=t(44771),b=t(76428),ae=t(62597),ee=t(43425),v=t(74842),F=t(87784),U=t(33160),r=t(30159),De=t(58638),Be=t(60219),Ee=t(86548),ce=t(57132),Re=t(50888),Pe=t(16596),Ze=t(45605),be=t(31574),Te=t(32319),je=t(60433),me=t(97269),fe=t(62370),re=t(63713),se=t(96074),ve=t(84567),Y=t(65233),Q=t(28036),ye=t(85418),xe=t(40411),c=t(26412),Fe=t(66309),pe=t(93162),Me=t(87662),ne=t(75516),T=t(28031),He=t(85576),Ve=t(63490),ze=t(37476),Ge=t(86615),Ye=t(97462),Qe=t(5966),Je=t(2831);function Xe(W){var V=He.Z.useModal(),k=C()(V,2),M=k[0],S=k[1],I=(0,o.useState)(),A=C()(I,2),B=A[0],$=A[1],H=(0,o.useRef)(),L="";return(0,o.useEffect)(function(){var l,e;(0,Je.aF)().then(function(z){$(z.data.dpanel.containerInfo)}),L=(l=localStorage.getItem("backupPath"))!==null&&l!==void 0?l:"",(e=H.current)===null||e===void 0||e.setFieldValue("backupPath",L)},[]),(0,n.jsxs)(n.Fragment,{children:[S,(0,n.jsxs)(ze.Y,{modalProps:{forceRender:!0},formRef:H,title:"\u5907\u4EFD\u5BB9\u5668\u5B58\u50A8\u5377",trigger:(0,n.jsxs)(Q.ZP,{children:[(0,n.jsx)(Be.Z,{})," \u5907\u4EFD\u5B58\u50A8"]}),onFinish:function(){var l=p()(i()().mark(function e(z){var he,ge;return i()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return z.backupPath&&localStorage.setItem("backupPath",z.backupPath),he={containerMd5:W.container.Id,backupTargetType:z.backupTargetType,backupPath:z.backupPath},z.backupTargetType=="dpanel"&&B&&B.Mounts&&B.Mounts.map(function(J){J.Destination=="/dpanel"&&(he.backupPath=J.Type=="volume"?J.Name:he.backupPath=J.Source)}),K.next=5,(0,T.vp)(he);case 5:return ge=K.sent,M.info({title:"\u6B63\u5728\u5907\u4EFD\u5B58\u50A8\u4E2D",content:(0,n.jsx)(E.Z,{ghost:!0,style:{paddingTop:30},children:(0,n.jsx)(Ve.Z,{columns:[{title:"\u5907\u4EFD\u6587\u4EF6",key:"backup",dataIndex:"backup",width:300,render:function(Oe,Ce,Se){return(0,n.jsx)(D.Z.Paragraph,{ellipsis:{rows:5,expandable:!0},children:Ce.backupTar})}},{title:"\u5907\u4EFD\u76EE\u5F55",key:"pathList",dataIndex:"pathList",render:function(Oe,Ce,Se){return Ce.pathList.map(function(X,Ie){return(0,n.jsx)("div",{children:X},Ie)})}}],dataSource:[{key:1,backupTar:ge.data.backupTar,pathList:ge.data.pathList}],rowKey:"key",pagination:!1})}),closable:!0,width:800}),K.abrupt("return",!0);case 8:case"end":return K.stop()}},e)}));return function(e){return l.apply(this,arguments)}}(),children:[(0,n.jsx)(Ge.Z.Group,{label:"\u5907\u4EFD\u76EE\u6807\u4F4D\u7F6E",name:"backupTargetType",initialValue:"dpanel",fieldProps:{defaultValue:"dpanel"},options:[{label:"DPanel \u5907\u4EFD\u76EE\u5F55\u4E2D",value:"dpanel"},{label:"\u5BBF\u4E3B\u673A\u76EE\u5F55\u4E2D",value:"host"}]}),(0,n.jsx)(Ye.Z,{name:["backupTargetType"],children:function(e){var z=e.backupTargetType;return z=="host"?(0,n.jsx)(Qe.Z,{label:"\u6307\u5B9A\u5BBF\u4E3B\u673A\u76EE\u5F55",tooltip:"\u8BF7\u586B\u5199\u5BBF\u4E3B\u673A\u76EE\u5F55\uFF0C\u4E0D\u5B58\u65F6\u4F1A\u65B0\u5EFA",name:"backupPath",placeholder:"/home/backup",initialValue:"/home/backup"}):(0,n.jsxs)(n.Fragment,{children:["\u5907\u4EFD\u4F4D\u4E8E DPanel \u5BB9\u5668\u4E2D\u7684 /dpanel/backup \u8DEF\u5F84 ",(0,n.jsx)(re.Link,{target:"_blank",to:"/app/detail/file/".concat(B==null?void 0:B.Id,"?tab=file&path=").concat(encodeURIComponent("/dpanel/backup")),children:"\u67E5\u770B"})]})}})]})]})}var ke=t(78451),qe=t(24963),en=t(50070),nn=t(64599),tn=t.n(nn),an=t(40717),rn=t(184),un=t(4798);function sn(W){var V=(0,o.useRef)();return[(0,n.jsx)(rn.a,{trigger:(0,n.jsx)(Q.ZP,{icon:(0,n.jsx)(an.Z,{}),children:"\u52A0\u5165\u5DF2\u6709\u7F51\u7EDC"},"button"),width:800,formRef:V,title:"\u914D\u7F6E\u7F51\u7EDC",onFinish:function(){var k=p()(i()().mark(function M(S){var I,A,B,$,H;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(!S.network){l.next=19;break}A=tn()(S.network),l.prev=2,A.s();case 4:if((B=A.n()).done){l.next=11;break}return $=B.value,l.next=8,(0,P.HY)({name:$.name,containerName:W.containerName,containerAlise:$.alise,ipV4:$.ipV4});case 8:H=l.sent;case 9:l.next=4;break;case 11:l.next=16;break;case 13:l.prev=13,l.t0=l.catch(2),A.e(l.t0);case 16:return l.prev=16,A.f(),l.finish(16);case 19:return!((I=V.current)===null||I===void 0)&&I.resetFields&&V.current.resetFields(),W.onSuccess&&W.onSuccess(),l.abrupt("return",!0);case 22:case"end":return l.stop()}},M,null,[[2,13,16,19]])}));return function(M){return k.apply(this,arguments)}}(),children:(0,n.jsx)(un.Z,{siteName:W.containerName})},"form")]}var ln=t(99861),Le=t(3393);function on(){var W,V,k,M=(0,o.useContext)(qe.Z),S=M.message,I=M.notice,A=M.loading,B=M.lang,$=(0,o.useContext)(en.AppDetailContext),H=(0,re.useParams)(),L=(0,o.useState)(),l=C()(L,2),e=l[0],z=l[1],he=(0,o.useState)(1),ge=C()(he,2),ue=ge[0],K=ge[1],J=(0,re.useNavigate)(),Oe=(0,o.useRef)(),Ce=(0,o.useState)({deleteImage:!1,deleteVolume:!1,deleteLink:!1}),Se=C()(Ce,2),X=Se[0],Ie=Se[1],dn=(0,o.useState)(""),_e=C()(dn,2),cn=_e[0],mn=_e[1],Ne=(0,o.useRef)(),Ue=(0,o.useRef)(),We=(0,o.useRef)(),$e=(0,o.useRef)(),Ke=(0,o.useRef)(),fn=(0,o.useState)(0),we=C()(fn,2),Ae=we[0],le=we[1];return(0,o.useEffect)(function(){var u;A.show(),$.reload(),(0,x.jV)({md5:(u=H.id)!==null&&u!==void 0?u:""}).then(function(a){var d;if(a.data){var s;if(a.data.info.HostConfig.NetworkMode=="host"&&a.data.info.Config.ExposedPorts&&Object.keys(a.data.info.Config.ExposedPorts).map(function(m){a.data.info.NetworkSettings.Ports[m]=[{HostIp:"0.0.0.0",HostPort:m.substring(0,m.indexOf("/"))}]}),z(a.data.info),a.data.ignore){if(a.data.ignore.indexOf("".concat(a.data.info.Name,"@*"))>-1){le(-2);return}if(a.data.ignore.indexOf("".concat(a.data.info.Name,"@").concat(a.data.info.Image))>-1){le(-2);return}}(0,Le.ZQ)({tag:(s=a.data.info.Config.Image)!==null&&s!==void 0?s:"",md5:a.data.info.Image,cacheTime:3600}).then(function(m){le(m.data.upgrade?1:2)}).catch(function(m){le(-1)})}(d=Oe.current)===null||d===void 0||d.setFieldValue("restart",a.data.info.HostConfig.RestartPolicy.Name)}).finally(function(){A.destroy()}),(0,Me.EH)().then(function(a){mn(a.data.ip)})},[ue]),(0,n.jsxs)(n.Fragment,{children:[e&&(0,n.jsx)(ln.Z,{image:[e.Config.Image],ref:Ke}),(0,n.jsxs)(E.Z,{direction:"column",gutter:[0,10],children:[(0,n.jsx)(E.Z,{title:(0,n.jsx)(ee.Z,{}),subTitle:"\u72B6\u6001\u7BA1\u7406",ghost:!0,children:(0,n.jsxs)(h.Z,{wrap:!0,children:[(0,n.jsx)(f.Z,{icon:(0,n.jsx)(v.Z,{}),action:function(){var a;return(0,x.IW)({md5:(a=e==null?void 0:e.Id)!==null&&a!==void 0?a:"",operate:"start"})},messageSuccess:"start",onSuccess:function(){return K(ue+1)},disabled:e&&e.State.Running||e&&e.State.Paused,children:"\u542F\u52A8"}),(0,n.jsx)(f.Z,{action:function(){var a;return(0,x.IW)({md5:(a=e==null?void 0:e.Id)!==null&&a!==void 0?a:"",operate:"stop"})},messageSuccess:"stop",icon:(0,n.jsx)(F.Z,{}),onSuccess:function(){return K(ue+1)},disabled:e&&e.State.Dead,children:"\u505C\u6B62"}),(0,n.jsx)(f.Z,{action:function(){var a;return(0,x.IW)({md5:(a=e==null?void 0:e.Id)!==null&&a!==void 0?a:"",operate:"restart"})},messageSuccess:"restart",onSuccess:function(){return K(ue+1)},icon:(0,n.jsx)(U.Z,{}),children:"\u91CD\u542F"}),(0,n.jsx)(f.Z,{action:function(){var a;return(0,x.IW)({md5:(a=e==null?void 0:e.Id)!==null&&a!==void 0?a:"",operate:"pause"})},messageSuccess:"pause",onSuccess:function(){return K(ue+1)},icon:(0,n.jsx)(r.Z,{}),disabled:e&&!e.State.Running,children:"\u6682\u505C"}),(0,n.jsx)(f.Z,{action:function(){var a;return(0,x.IW)({md5:(a=e==null?void 0:e.Id)!==null&&a!==void 0?a:"",operate:"unpause"})},messageSuccess:"resume",onSuccess:function(){return K(ue+1)},icon:(0,n.jsx)(v.Z,{}),disabled:e&&!e.State.Paused,children:"\u6062\u590D"}),(0,n.jsx)(se.Z,{type:"vertical"}),e&&(0,n.jsx)(ne.Z,{container:e}),(0,n.jsx)(se.Z,{type:"vertical"}),e&&(!e.Config.Labels||!e.Config.Labels["com.docker.compose.project"])&&(0,n.jsx)(f.Z,{action:function(){var a;return(0,ae.Ct)({md5:(a=e==null?void 0:e.Id)!==null&&a!==void 0?a:"",deleteImage:X.deleteImage,deleteVolume:X.deleteVolume})},messageSuccess:"delete",danger:!0,type:"primary",icon:(0,n.jsx)(F.Z,{}),onSuccess:function(){return J("/app/list")},confirm:(0,n.jsxs)(h.Z,{style:{width:280},direction:"vertical",children:[(0,n.jsx)(D.Z.Text,{children:"\u5220\u9664\u5BB9\u5668\u540E\u65E0\u6CD5\u6062\u590D,\u786E\u8BA4\u5417\uFF1F"}),(0,n.jsx)(ve.Z,{name:"deleteVolume",onChange:function(a){return Ie({deleteImage:X.deleteImage,deleteVolume:a.target.checked,deleteLink:X.deleteLink})},children:"\u5220\u9664\u5B58\u50A8\uFF1F"}),(0,n.jsx)(ve.Z,{name:"deleteImage",onChange:function(a){return Ie({deleteImage:a.target.checked,deleteVolume:X.deleteVolume,deleteLink:X.deleteLink})},children:"\u5220\u9664\u955C\u50CF\uFF1F"}),(0,n.jsx)(ve.Z,{name:"deleteLink",onChange:function(a){return Ie({deleteImage:X.deleteVolume,deleteVolume:X.deleteVolume,deleteLink:a.target.checked})},children:"\u5220\u9664\u5173\u8054\u5BB9\u5668\uFF1F"})]}),children:"\u5220\u9664"})]})}),(0,n.jsx)(E.Z,{title:(0,n.jsx)(ee.Z,{}),subTitle:"\u5BB9\u5668\u7BA1\u7406",ghost:!0,children:(0,n.jsxs)(h.Z,{wrap:!0,children:[(0,n.jsx)(f.Z,{icon:(0,n.jsx)(De.Z,{}),action:function(){var a;return(0,x.LJ)({md5:(a=e==null?void 0:e.Id)!==null&&a!==void 0?a:""})},confirm:"\u5BFC\u51FA\u5BB9\u5668 Tar \u5305\u4E0D\u5305\u542B\u6302\u8F7D\u76EE\u5F55\u7684\u6570\u636E\uFF0C\u786E\u5B9A\u5417\uFF1F",onSuccess:function(a){var d=new Blob([a],{type:"application/tar"});(0,pe.saveAs)(d,(e==null?void 0:e.Id)+".tar")},messageSuccess:"export",children:"\u5BFC\u51FA\u5BB9\u5668"}),(0,n.jsx)(f.Z,{icon:(0,n.jsx)(Be.Z,{}),action:p()(i()().mark(function u(){var a,d,s;return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,x.Re)({md5:(a=e==null?void 0:e.Id)!==null&&a!==void 0?a:"",name:(d=(s=Ne.current)===null||s===void 0?void 0:s.getFieldValue("saveImageName"))!==null&&d!==void 0?d:e==null?void 0:e.Name});case 2:case"end":return g.stop()}},u)})),confirmTitle:"\u5C06\u5F53\u524D\u5BB9\u5668\u4FDD\u5B58\u4E3A\u955C\u50CF",confirm:(0,n.jsx)(h.Z,{style:{width:400,marginTop:"10px",paddingRight:"10px"},direction:"vertical",children:(0,n.jsx)(me.A,{formRef:Ne,submitter:!1,children:(0,n.jsx)(fe.Z,{name:"saveImageName",children:(0,n.jsx)(Y.Z,{addonBefore:"\u955C\u50CF\u540D\u79F0"})})})}),messageSuccess:"save",children:"\u53E6\u5B58\u4E3A\u955C\u50CF"}),e&&(0,n.jsx)(Xe,{container:e}),(0,n.jsx)(se.Z,{type:"vertical"}),(0,n.jsx)(re.Link,{to:"/app/create/image?containerId=".concat(e==null?void 0:e.Id,"&op=update"),children:(0,n.jsx)(Q.ZP,{type:"primary",icon:(0,n.jsx)(Ee.Z,{}),children:"\u7F16\u8F91\u5BB9\u5668"})}),(0,n.jsx)(f.Z,{icon:(0,n.jsx)(ce.Z,{}),action:p()(i()().mark(function u(){var a,d,s;return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,x.aF)({md5:(a=e==null?void 0:e.Id)!==null&&a!==void 0?a:"",copyName:(d=(s=Ue.current)===null||s===void 0?void 0:s.getFieldValue("copyName"))!==null&&d!==void 0?d:""});case 2:return g.abrupt("return",g.sent);case 3:case"end":return g.stop()}},u)})),confirm:(0,n.jsxs)(h.Z,{style:{width:400,paddingRight:"10px"},direction:"vertical",children:[(0,n.jsx)(D.Z.Text,{children:"\u590D\u5236\u51FA\u7684\u5BB9\u5668\u4E0E\u5F53\u524D\u5BB9\u5668\u5177\u6709\u76F8\u540C\u7684\u914D\u7F6E\uFF0C\u8BF7\u4E8C\u6B21\u7F16\u8F91\u540E\u542F\u52A8\u5BB9\u5668\u3002\u786E\u5B9A\u5417\uFF1F"}),(0,n.jsx)(me.A,{formRef:Ue,submitter:!1,children:(0,n.jsx)(fe.Z,{name:"copyName",children:(0,n.jsx)(Y.Z,{addonBefore:"\u590D\u5236\u5BB9\u5668\u540D\u79F0"})})})]}),onSuccess:function(a){J("/app/list")},messageSuccess:"copy",children:"\u590D\u5236\u5BB9\u5668"}),(0,n.jsx)(ye.Z,{placement:"bottomLeft",menu:{items:[{key:"1",label:(0,n.jsx)(f.Z,{action:p()(i()().mark(function u(){var a,d,s;return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,(0,ae.ze)({md5:(a=e==null?void 0:e.Name)!==null&&a!==void 0?a:"",imageId:""});case 2:return le(0),g.next=5,(0,Le.ZQ)({tag:(d=e==null?void 0:e.Config.Image)!==null&&d!==void 0?d:"",md5:(s=e==null?void 0:e.Image)!==null&&s!==void 0?s:"",cacheTime:0}).then(function(O){le(O.data.upgrade?1:2)}).catch(function(O){le(-1)});case 5:return g.abrupt("return",g.sent);case 6:case"end":return g.stop()}},u)})),type:"link",children:"\u81EA\u52A8\u68C0\u6D4B"})},{key:"2",label:(0,n.jsx)(f.Z,{action:p()(i()().mark(function u(){var a,d;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,(0,ae.ze)({md5:(a=e==null?void 0:e.Name)!==null&&a!==void 0?a:"",imageId:(d=e==null?void 0:e.Image)!==null&&d!==void 0?d:""});case 2:return m.abrupt("return",m.sent);case 3:case"end":return m.stop()}},u)})),type:"link",messageSuccess:"ignore",children:"\u5FFD\u7565\u672C\u6B21"})},{key:"3",label:(0,n.jsx)(f.Z,{action:p()(i()().mark(function u(){var a;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,ae.ze)({md5:(a=e==null?void 0:e.Name)!==null&&a!==void 0?a:"",imageId:"*"});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},u)})),type:"link",messageSuccess:"ignore",children:"\u6C38\u4E45\u5FFD\u7565"})}]},children:(0,n.jsx)(xe.Z,{count:B("app.detail.checkImageUpgrade."+Ae),color:B("app.detail.checkImageUpgradeColor."+Ae),children:(0,n.jsx)(f.Z,{disabled:Ae===0,icon:Ae===0?(0,n.jsx)(Re.Z,{}):(0,n.jsx)(Pe.Z,{}),action:p()(i()().mark(function u(){var a,d,s,m;return i()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(a=Ke.current)===null||a===void 0?void 0:a.start();case 2:return O.next=4,(0,x.RF)({md5:(d=e==null?void 0:e.Id)!==null&&d!==void 0?d:"",imageTag:"",enableBak:(s=(m=We.current)===null||m===void 0?void 0:m.getFieldValue("enableBak"))!==null&&s!==void 0?s:!0});case 4:return O.abrupt("return",O.sent);case 5:case"end":return O.stop()}},u)})),confirm:(0,n.jsxs)(h.Z,{style:{width:280,paddingRight:"10px"},direction:"vertical",children:[(0,n.jsx)(D.Z.Text,{children:"\u66F4\u65B0\u5BB9\u5668\u524D\u8BF7\u786E\u4FDD\u8FDC\u7A0B Docker \u7248\u672C\u4E0E\u9762\u677F\u73AF\u5883\u4E00\u81F4\u3002\u6B64\u64CD\u4F5C\u5C06\u4F1A\u91CD\u65B0\u62C9\u53D6\u955C\u50CF\u5E76\u91CD\u5EFA\u5BB9\u5668\u3002\u786E\u5B9A\u5417\uFF1F"}),(0,n.jsx)(me.A,{formRef:We,submitter:!1,layout:"inline",children:(0,n.jsx)(fe.Z,{name:"enableBak",initialValue:!0,valuePropName:"checked",children:(0,n.jsx)(ve.Z,{children:"\u5907\u4EFD\u65E7\u5BB9\u5668\uFF1F"})})})]}),onSuccess:function(a){J("/app/list")},messageSuccess:"upgrade",children:"\u5FEB\u901F\u5347\u7EA7\u5BB9\u5668"})})}),(0,n.jsx)(se.Z,{type:"vertical"}),e&&(0,n.jsx)(sn,{onSuccess:function(){var a;(a=$e.current)===null||a===void 0||a.reload()},containerName:e.Name})]})}),(0,n.jsx)(E.Z,{title:(0,n.jsx)(Ze.Z,{}),subTitle:"\u5BB9\u5668\u72B6\u6001",ghost:!0,children:(0,n.jsxs)(c.Z,{column:1,bordered:!0,children:[(0,n.jsx)(c.Z.Item,{label:"ID",children:(0,n.jsx)(b.Z,{title:e==null?void 0:e.Id})}),(0,n.jsx)(c.Z.Item,{label:"\u5BB9\u5668\u540D\u79F0",children:(0,n.jsx)(D.Z.Text,{editable:{tooltip:"\u4FEE\u6539\u5BB9\u5668\u540D\u79F0",onChange:function(){var u=p()(i()().mark(function d(s){var m;return i()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(e!=null&&e.Id){O.next=2;break}return O.abrupt("return");case 2:return O.next=4,(0,x.eE)({md5:e.Id,name:s});case 4:m=O.sent,K(ue+1),S.success("\u4FEE\u6539\u5BB9\u5668\u540D\u79F0");case 7:case"end":return O.stop()}},d)}));function a(d){return u.apply(this,arguments)}return a}()},children:e&&e.Name})}),(0,n.jsx)(c.Z.Item,{label:(0,n.jsx)(q.Z,{title:"\u7F51\u7EDC",help:"\u9ED8\u8BA4\u7F51\u7EDC\u53EA\u652F\u6301\u901A\u8FC7ip\u8BBF\u95EE,ip\u4F1A\u968F\u7740\u5BB9\u5668\u542F\u52A8\u505C\u6B62\u6539\u53D8.\u5982\u679C\u9700\u8981\u5728\u5BB9\u5668\u5185\u4E92\u8054,\u8BF7\u901A\u8FC7\u3010\u7F16\u8F91\u7AD9\u70B9\u3011-\u3010\u6DFB\u52A0\u5173\u8054\u3011"}),children:(e==null?void 0:e.State.Running)&&(0,n.jsxs)(c.Z,{column:1,bordered:!0,children:[e.NetworkSettings.Networks&&Object.keys(e.NetworkSettings.Networks).map(function(u,a){return(0,n.jsx)(c.Z.Item,{label:u,children:u=="host"?" Host \u7F51\u7EDC\uFF0C\u4E0E\u5BBF\u4E3B\u673A\u5171\u7528\u540C\u4E00\u7F51\u7EDC":(0,n.jsxs)(h.Z,{direction:"vertical",children:[(0,n.jsx)(b.Z,{title:e==null?void 0:e.NetworkSettings.Networks[u].IPAddress}),e==null?void 0:e.NetworkSettings.Networks[u].Gateway,e==null?void 0:e.NetworkSettings.Networks[u].MacAddress]})},"1")}),e.HostConfig.ExtraHosts&&(0,n.jsx)(c.Z.Item,{label:"\u5BBF\u4E3B\u673A\u7F51\u7EDC",children:(0,n.jsx)(h.Z,{direction:"vertical",children:e.HostConfig.ExtraHosts.map(function(u){if(u.indexOf(":")>-1){var a=u.split(":");return(0,n.jsxs)(h.Z,{children:[(0,n.jsx)(b.Z,{title:a[0]})," - ",a[1]]})}})})},"1")]})}),(0,n.jsx)(c.Z.Item,{label:"\u72B6\u6001",children:e==null?void 0:e.State.Status}),(0,n.jsx)(c.Z.Item,{label:"\u521B\u5EFA\u65F6\u95F4",children:new Date((W=e==null?void 0:e.Created)!==null&&W!==void 0?W:"").toLocaleString()}),(0,n.jsx)(c.Z.Item,{label:"\u542F\u52A8\u65F6\u95F4",children:new Date((V=e==null?void 0:e.State.StartedAt)!==null&&V!==void 0?V:"").toLocaleString()}),(0,n.jsx)(c.Z.Item,{label:"\u91CD\u542F\u7B56\u7565",children:(0,n.jsx)(me.A,{onFinish:function(){var u=p()(i()().mark(function a(d){var s;return i()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(e!=null&&e.Id){g.next=2;break}return g.abrupt("return");case 2:return g.next=4,(0,x.eE)({md5:e.Id,restart:d.restart});case 4:return s=g.sent,S.success("\u4FEE\u6539\u91CD\u542F\u7B56\u7565\u6210\u529F"),g.abrupt("return");case 7:case"end":return g.stop()}},a)}));return function(a){return u.apply(this,arguments)}}(),formRef:Oe,children:(0,n.jsx)(de.Z,{defaultValue:e==null?void 0:e.HostConfig.RestartPolicy.Name})})})]})}),e&&e.Mounts&&e.Mounts.length>0&&(0,n.jsx)(E.Z,{title:(0,n.jsx)(be.Z,{}),subTitle:"\u6301\u4E45\u5B58\u50A8\u8BE6\u60C5",ghost:!0,children:(0,n.jsx)(c.Z,{column:1,bordered:!0,children:e==null?void 0:e.Mounts.map(function(u,a){return(0,n.jsx)(c.Z.Item,{labelStyle:{width:"30%"},label:u.Type=="volume"?(0,n.jsx)(ke.Z,{content:u.Name}):u.Source,children:(0,n.jsxs)(re.Link,{target:"_blank",to:"/app/detail/file/".concat(e.Id,"?tab=file&path=").concat(encodeURIComponent(u.Destination)),children:[u.Destination," ",(0,n.jsx)(Te.Z,{})]})},a)})})}),(0,n.jsx)(E.Z,{title:(0,n.jsx)(je.Z,{}),subTitle:"\u955C\u50CF\u8BE6\u60C5",ghost:!0,children:(0,n.jsxs)(c.Z,{labelStyle:{width:"200px"},column:1,bordered:!0,children:[(0,n.jsx)(c.Z.Item,{label:"Image Tag",children:(0,n.jsx)(re.Link,{target:"_blank",to:"/image/detail/"+(e==null?void 0:e.Image),children:e==null?void 0:e.Config.Image})}),(0,n.jsx)(c.Z.Item,{label:"Image",children:e==null?void 0:e.Image}),(0,n.jsx)(c.Z.Item,{label:"Port",children:(0,n.jsx)(h.Z,{direction:"vertical",children:(e==null?void 0:e.NetworkSettings.Ports)&&Object.keys(e.NetworkSettings.Ports).map(function(u){var a,d=(a=e==null?void 0:e.NetworkSettings.Ports[u])!==null&&a!==void 0?a:[{HostPort:null,HostIp:""}];return d.map(function(s){var m=cn;return m!=""&&m.indexOf(":")>-1&&(m="[".concat(m,"]")),m==""&&s.HostIp=="::"&&(m="[::1]"),m==""&&s.HostIp=="0.0.0.0"&&(m="127.0.0.1"),m==""&&(m=s.HostIp),(0,n.jsxs)(h.Z.Compact,{children:[(0,n.jsxs)(Fe.Z,{color:s.HostPort?"success":"",children:[s.HostPort?"".concat(s.HostIp,":").concat(s.HostPort," ->"):"",u]},u),s.HostPort?(0,n.jsx)("a",{href:"http://".concat(m,":").concat(s.HostPort),target:"_blank",children:(0,n.jsx)(w.Z,{})}):""]})})})})}),(0,n.jsx)(c.Z.Item,{label:"CMD",children:(e==null?void 0:e.Config.Cmd)&&(e==null?void 0:e.Config.Cmd.join(" "))}),(0,n.jsx)(c.Z.Item,{label:"ENTRYPOINT",children:e==null?void 0:e.Config.Entrypoint}),(0,n.jsx)(c.Z.Item,{label:"ENV",children:(0,n.jsx)(c.Z,{column:1,bordered:!0,children:(e==null?void 0:e.Config.Env)&&e.Config.Env.map(function(u,a){var d=u.split("=");return(0,n.jsx)(c.Z.Item,{label:d[0],children:(0,n.jsx)(ke.Z,{content:d.slice(1).join("=")})},a)})})}),(0,n.jsx)(c.Z.Item,{label:"Labels",children:(0,n.jsx)(c.Z,{column:1,bordered:!0,children:e&&Object.keys(e.Config.Labels).map(function(u){return(0,n.jsx)(c.Z.Item,{label:u,children:(0,n.jsx)(D.Z.Text,{style:{width:"400px"},ellipsis:{tooltip:e.Config.Labels[u]},children:e.Config.Labels[u]})},u)})})})]})}),(e==null?void 0:e.Name)&&(0,n.jsx)(te,{containerName:(k=e==null?void 0:e.Name)!==null&&k!==void 0?k:"",ref:$e})]})]})}},50070:function(oe,R,t){t.r(R),t.d(R,{AppDetailContext:function(){return x},default:function(){return q}});var _=t(15009),i=t.n(_),N=t(99289),p=t.n(N),j=t(5574),C=t.n(j),P=t(24963),w=t(2831),Z=t(60335),E=t(55809),y=t(63713),h=t(86738),D=t(25593),G=t(50136),o=t(67294),f=t(85893),x=(0,o.createContext)({});function q(){var n,ie=(0,o.useContext)(P.Z),te=ie.lang,de=ie.loading,b=(0,y.useParams)(),ae=(0,y.useSearchParams)(),ee=C()(ae,2),v=ee[0],F=ee[1],U=(n=v.get("tab"))!==null&&n!==void 0?n:"edit",r=(0,o.useState)("edit"),De=C()(r,2),Be=De[0],Ee=De[1],ce=(0,y.useNavigate)(),Re=(0,o.useState)(1),Pe=C()(Re,2),Ze=Pe[0],be=Pe[1],Te=(0,y.useAccess)(),je=[{label:(0,f.jsx)(y.Link,{to:"/app/detail/edit/".concat(b.id,"?tab=edit"),children:"\u5BB9\u5668\u8BE6\u60C5"}),key:"edit"},{label:(0,f.jsx)(y.Link,{to:"/app/detail/domain/".concat(b.id,"?tab=domain"),children:"\u57DF\u540D\u7BA1\u7406"}),key:"domain"},{label:(0,f.jsx)(h.Z,{style:{width:500},title:te("notification.title.tip"),description:te("app.detail.createExplorerPlugin"),onConfirm:function(){ce("/app/detail/file/".concat(b.id,"?tab=file")),se(je.filter(function(Q){return Q.key!="fileConfirm"})),Ee("file")},okText:"Yes",cancelText:"No",children:(0,f.jsx)(D.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"})}),key:"fileConfirm"},{label:(0,f.jsx)(D.Z.Link,{children:"\u6587\u4EF6\u7BA1\u7406"}),key:"file",onClick:function(){ce("/app/detail/file/".concat(b.id,"?tab=file"))}},{label:(0,f.jsx)(D.Z.Link,{children:"\u8FD0\u884C\u65E5\u5FD7"}),key:"log",onClick:function(){ce("/app/detail/log/".concat(b.id,"?tab=log"))}},{label:(0,f.jsx)(D.Z.Link,{children:"\u8FD0\u884C\u72B6\u6001"}),key:"stat",onClick:function(){ce("/app/detail/stat/".concat(b.id,"?tab=stat"))}},{label:"",key:"containerName",icon:(0,f.jsx)(E.Z,{}),disabled:!0}],me=(0,o.useState)(je),fe=C()(me,2),re=fe[0],se=fe[1];(0,o.useEffect)(function(){de.show(),Ee(U);var Y=function(){var Q=p()(i()().mark(function ye(){var xe,c,Fe,pe;return i()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return c=je,ne.next=3,(0,w.aF)();case 3:return Fe=ne.sent,Te.canSeeContainerDomain||(c=c.filter(function(T){return T.key!="domain"})),Fe.data.plugin.explorer.isCreated||(c=c.filter(function(T){return T.key!="file"})),Fe.data.plugin.explorer.isCreated&&(c=c.filter(function(T){return T.key!="fileConfirm"})),ne.next=9,(0,Z.jV)({md5:(xe=b.id)!==null&&xe!==void 0?xe:""});case 9:pe=ne.sent,c.map(function(T){return T.key=="containerName"&&(T.label=pe.data.info.Name),(!pe.data.info.State.Running||pe.data.info.State.Restarting)&&(T.key=="file"||T.key=="fileConfirm"||T.key=="stat")&&(T.disabled=!0),T}),se(c),de.destroy();case 13:case"end":return ne.stop()}},ye)}));return function(){return Q.apply(this,arguments)}}();Y()},[Ze]);var ve=function(Q){Q.key!="fileConfirm"&&Ee(Q.key)};return(0,f.jsxs)(x.Provider,{value:{reload:function(){be(Ze+1)}},children:[(0,f.jsx)(G.Z,{mode:"horizontal",onClick:ve,selectedKeys:[Be],items:re}),(0,f.jsx)(y.Outlet,{})]})}},28031:function(oe,R,t){t.d(R,{C4:function(){return q},LK:function(){return f},OQ:function(){return ie},V9:function(){return C},Yx:function(){return h},ZU:function(){return E},_U:function(){return w},gb:function(){return G},lE:function(){return ae},vp:function(){return de}});var _=t(15009),i=t.n(_),N=t(99289),p=t.n(N),j=t(63713);function C(v){return P.apply(this,arguments)}function P(){return P=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/explorer/get-path-list",{data:F,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),P.apply(this,arguments)}function w(v){return Z.apply(this,arguments)}function Z(){return Z=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/explorer/export",{data:F,method:"POST",responseType:"blob"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),Z.apply(this,arguments)}function E(v){return y.apply(this,arguments)}function y(){return y=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/explorer/import",{data:F,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),y.apply(this,arguments)}function h(v){return D.apply(this,arguments)}function D(){return D=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/explorer/delete",{data:F,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),D.apply(this,arguments)}function G(v){return o.apply(this,arguments)}function o(){return o=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/explorer/unzip",{data:F,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),o.apply(this,arguments)}function f(v){return x.apply(this,arguments)}function x(){return x=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/explorer/get-content",{data:F,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),x.apply(this,arguments)}function q(v){return n.apply(this,arguments)}function n(){return n=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/explorer/import-file-content",{data:F,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),n.apply(this,arguments)}function ie(v){return te.apply(this,arguments)}function te(){return te=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/explorer/chmod",{data:F,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),te.apply(this,arguments)}function de(v){return b.apply(this,arguments)}function b(){return b=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/volume/backup",{data:F,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),b.apply(this,arguments)}function ae(v){return ee.apply(this,arguments)}function ee(){return ee=p()(i()().mark(function v(F){return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,j.request)("/api/app/explorer/get-passwd",{data:F,method:"POST"});case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}},v)})),ee.apply(this,arguments)}}}]);