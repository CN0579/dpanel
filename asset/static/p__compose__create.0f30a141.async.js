"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1102],{33208:function(Pe,C,r){r.r(C),r.d(C,{default:function(){return se}});var V=r(15009),E=r.n(V),Y=r(99289),O=r.n(Y),z=r(5574),h=r.n(z),$=r(91058),N=r(89063),G=r(24963),f=r(90098),H=r(79245),J=r(45742),Q=r(91806),X=r(27496),k=r(33862),w=r(90078),q=r(97269),ee=r(2236),p=r(38345),ne=r(52688),c=r(5966),te=r(86615),P=r(97462),x=r(95213),F=r(95089),M=r(63713),B=r(28036),g=r(25409),ae=r(63490),U=r(42075),re=r(66309),A=r(38925),le=r(92398),ue=r(91845),v=r(67294),e=r(85893);function se(){var j=(0,v.useContext)(G.Z),y=j.loading,ie=j.notice,R=j.message,oe=(0,M.useNavigate)(),de=(0,v.useState)([]),I=h()(de,2),_e=I[0],me=I[1],T=(0,v.useRef)(),_=(0,v.useRef)(),ce=(0,M.useSearchParams)(),W=h()(ce,2),ve=W[0],ye=W[1],Ee=(0,v.useState)(),Z=h()(Ee,2),l=Z[0],pe=Z[1],he=(0,v.useState)(!1),L=h()(he,2),K=L[0],b=L[1],D=function(){var d=O()(E()().mark(function a(n){var u,t;return E()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(n.yaml){s.next=2;break}return s.abrupt("return");case 2:return(u=_.current)===null||u===void 0||u.setFieldValue("yaml",n.yaml),S(n.yaml),s.next=6,(0,f.xC)(n);case 6:if(t=s.sent,!(!t||!t.data||!t.data.project)){s.next=10;break}return ie.error(t.data.error),s.abrupt("return");case 10:t.data.project&&me(Object.keys(t.data.project.services).map(function(i,fe){var m=t.data.project.services[i];return m.name=i,m}));case 11:case"end":return s.stop()}},a)}));return function(n){return d.apply(this,arguments)}}(),S=function(a){var n=(0,H.m)(a);n&&n.map(function(u){var t;(t=T.current)===null||t===void 0||t.addEnvItem(u.name,u.value)})};return(0,v.useEffect)(function(){var d=ve.get("id");d&&(y.show(),(0,f.CT)({id:d}).then(function(a){var n,u,t;if(pe(a.data.detail),a.data.detail.setting.type==""&&(a.data.detail.setting.type="text"),(n=_.current)===null||n===void 0||n.setFieldsValue({name:a.data.detail.name,title:a.data.detail.title,type:a.data.detail.setting.type,yaml:(u=a.data.yaml[0])!==null&&u!==void 0?u:"",yamlOverride:(t=a.data.yaml[1])!==null&&t!==void 0?t:"",environment:a.data.detail.setting.environment}),a.data.detail.setting.type=="remoteUrl"){var o;(o=_.current)===null||o===void 0||o.setFieldValue("remoteUrl",a.data.detail.setting.remoteUrl)}else if(a.data.detail.setting.type=="storagePath"){var s;(s=_.current)===null||s===void 0||s.setFieldValue("storagePath","/dpanel/compose/"+a.data.detail.setting.uri[0])}if(a.data.yaml){var i;D({yaml:(i=a.data.yaml[0])!==null&&i!==void 0?i:"",id:a.data.detail.id})}}).finally(function(){y.destroy()}))},[]),(0,e.jsx)(w._z,{header:{extra:[]},children:(0,e.jsx)(q.A,{submitter:{render:function(a,n){return(0,e.jsxs)(ee.S,{children:[(0,e.jsx)(B.ZP,{onClick:function(){var t;(t=a.form)===null||t===void 0||t.setFieldValue("deploy",!0),a.submit()},children:"\u90E8\u7F72"}),(0,e.jsx)("span",{children:n[1]},"submit")]})}},formRef:_,onFinishFailed:function(a){b(!1)},onFinish:function(){var d=O()(E()().mark(function a(n){var u,t,o;return E()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return t={type:n.type,name:n.name,title:n.title,environment:n.environment,remoteUrl:n.remoteUrl,yaml:n.yaml,yamlOverride:n.yamlOverride},l!=null&&l.id&&(t.id=l.id),i.next=4,(0,f.im)(t);case 4:return o=i.sent,(u=_.current)===null||u===void 0||u.resetFields(),oe("/compose/deploy/"+o.data.id+(n.deploy?"?op=deploy":"")),i.abrupt("return",!0);case 8:case"end":return i.stop()}},a)}));return function(a){return d.apply(this,arguments)}}(),children:(0,e.jsx)(p.Z,{split:"vertical",children:(0,e.jsxs)(g.Z,{onResize:function(){},children:[(0,e.jsx)(g.Z.Panel,{resizable:!1,size:K?"0%":"45%",children:(0,e.jsxs)(p.Z,{split:"horizontal",children:[(0,e.jsxs)(p.Z,{title:(0,e.jsx)(J.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",children:[(0,e.jsx)(ne.Z,{label:"\u4FDD\u5B58\u540E\u9A6C\u4E0A\u90E8\u7F72",name:"deploy",hidden:!0}),(0,e.jsx)(c.Z,{label:"\u7AD9\u70B9\u540D\u79F0",name:"title",disabled:(l==null?void 0:l.setting.type)=="outPath",fieldProps:{onChange:function(a){var n="";if(a.target.value&&!l){var u,t=(0,ue.N9)(a.target.value.trim(),{toneType:"none",type:"array"});n=t.join(""),(u=_.current)===null||u===void 0||u.setFieldValue("name",n)}}}}),(0,e.jsx)(c.Z,{label:"\u7AD9\u70B9\u6807\u8BC6",name:"name",required:!0,rules:[{required:!0}],disabled:!!l,placeholder:"\u6807\u8BC6Compose\u521B\u5EFA\u7684\u5BB9\u5668\u7EC4\uFF0C\u53EA\u5141\u8BB8\u4E3A\u82F1\u6587\u6216\u662F\u6570\u5B57"}),(0,e.jsx)(te.Z.Group,{label:"Yaml \u6765\u6E90",name:"type",initialValue:"text",fieldProps:{defaultValue:"text",onChange:function(){}},options:[{label:"yaml",value:"text",disabled:l&&l.setting.type!="text"},{label:"\u8FDC\u7A0B\u5730\u5740",value:"remoteUrl",disabled:l&&(l==null?void 0:l.setting.type)!="remoteUrl"},{label:"\u81EA\u52A8\u53D1\u73B0",value:"storagePath",disabled:l&&(l==null?void 0:l.setting.type)!="storagePath"},{label:"\u5E94\u7528\u5546\u5E97",value:"store",disabled:l&&(l==null?void 0:l.setting.type)!="store"},{label:"\u5916\u90E8\u4EFB\u52A1",value:"outPath",disabled:l&&(l==null?void 0:l.setting.type)!="outPath"}]}),(0,e.jsx)(P.Z,{name:["type"],children:function(a){var n=a.type;if(n=="text")return(0,e.jsx)(N.Z,{title:"\u5BFC\u5165\u672C\u5730 compose \u6587\u4EF6",onImport:function(t){return D({yaml:t}),!0},onLoad:function(t){if(t.indexOf("services:")<0)throw new Error("\u5BFC\u5165\u7684compose\u6587\u4EF6\u9519\u8BEF");return!0}});if(n=="remoteUrl")return(0,e.jsx)(c.Z,{label:"",required:!0,rules:[{required:!0}],name:"remoteUrl",placeholder:"\u8BF7\u8F93\u5165\u8FDC\u7A0B docker-compose.yaml \u94FE\u63A5",fieldProps:{onBlur:function(){var u=O()(E()().mark(function o(s){var i;return E()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(s.target.value){m.next=2;break}return m.abrupt("return");case 2:return y.show(),m.next=5,(0,f.MG)({uri:s.target.value});case 5:i=m.sent,y.destroy(),i&&i.data&&i.data.content&&D({yaml:i.data.content});case 8:case"end":return m.stop()}},o)}));function t(o){return u.apply(this,arguments)}return t}()}});if(n=="storagePath")return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{name:"storagePath",required:!0,readonly:!0,initialValue:l?"".concat(l.setting.uri[0]):"\u6302\u8F7D /dpanel/compose \u76EE\u5F55\u540E\uFF0C\u81EA\u52A8\u53D1\u73B0\u3002",rules:[{required:!0,message:"\u6302\u8F7D /dpanel/compose \u76EE\u5F55\u540E\uFF0C\u81EA\u52A8\u53D1\u73B0\u3002"}]})});if(n=="store")return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{readonly:!0,name:"store",required:!0,initialValue:l?"".concat(l.setting.store):"\u8BF7\u5148\u6DFB\u52A0\u5E94\u7528\u5546\u5E97\u540E\uFF0C\u5728\u5E94\u7528\u5546\u5E97\u91CC\u5B8C\u6210\u5B89\u88C5",rules:[{required:!0,message:"\u8BF7\u5148\u6DFB\u52A0\u5E94\u7528\u5546\u5E97\u540E\uFF0C\u5728\u5E94\u7528\u5546\u5E97\u91CC\u5B8C\u6210\u5B89\u88C5"}]})});if(n=="outPath")return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c.Z,{name:"outPath",required:!0,readonly:!0,initialValue:l&&"".concat(l.setting.uri[0]),rules:[{required:!0,message:"\u5916\u90E8\u4EFB\u52A1\u53EA\u53EF\u7F16\u8F91 yaml "}]})})}})]}),(0,e.jsx)(p.Z,{title:(0,e.jsx)(Q.Z,{}),subTitle:"\u670D\u52A1\u5217\u8868",children:(0,e.jsx)(ae.Z,{dataSource:_e,rowKey:"name",pagination:!1,columns:[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u955C\u50CF",dataIndex:"image"},{title:"\u7AEF\u53E3",dataIndex:"ports",render:function(a,n,u){return n.ports&&n.ports.map(function(t,o){return(0,e.jsx)(U.Z,{size:"large",wrap:!0,children:(0,e.jsxs)(re.Z,{color:"#2db7f5",icon:t.published?(0,e.jsx)(X.Z,{}):"",style:{marginBottom:5},children:[t.published," : ",t.target]})},"space".concat(o))})}},{title:"\u4F9D\u8D56",dataIndex:"dependsOn",width:150,render:function(a,n,u){if(n.depends_on)return(0,e.jsx)(U.Z,{wrap:!0,children:Object.keys(n.depends_on).map(function(t){var o=t;return n.external_links&&n.external_links.map(function(s){s.indexOf(":"+t)>-1&&(o=s)}),o})})}}]})}),(0,e.jsxs)(p.Z,{title:(0,e.jsx)(k.Z,{}),subTitle:"\u73AF\u5883\u53D8\u91CF",children:[(0,e.jsx)(P.Z,{name:["environment"],children:function(a){var n=a.environment;if(!n||n.length==0)return(0,e.jsx)(A.Z,{message:(0,e.jsxs)(e.Fragment,{children:["\u5728 compose.yaml \u4E2D\u58F0\u660E\u73AF\u5883\u53D8\u91CF\uFF0C\u4F8B\u5982\uFF1A","${DB_NAME}"," ",(0,e.jsx)("br",{}),"\u5728\u90E8\u7F72\u65F6\u53EF\u6839\u636E\u60C5\u51B5\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C\u3002"]})})}}),(0,e.jsx)($.Z,{name:"environment",showDisableName:!0,showInDrawer:!0,showCardGhost:!0,ref:T})]})]})}),(0,e.jsx)(g.Z.Panel,{children:(0,e.jsx)(p.Z,{children:(0,e.jsx)(le.Z,{tabBarExtraContent:(0,e.jsx)(B.ZP,{type:"link",onClick:function(){b(!K)},children:"\u5168\u5C4F"}),items:[{label:"Yaml \u6587\u4EF6",key:"compose",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.Z,{name:"yaml",hidden:!0}),(0,e.jsx)(P.Z,{name:["type","yaml"],children:function(a){var n=a.type,u=a.yaml;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(F.ZP,{theme:"dark",minHeight:"550px",onFocus:function(){if(n=="remoteUrl"){R.error("\u8FDC\u7A0Byaml\u6587\u4EF6\u65E0\u6CD5\u4FEE\u6539\uFF0C\u8BF7\u901A\u8FC7\u3010\u8986\u76D6 yaml \u6587\u4EF6\u3011\u7684\u65B9\u5F0F\u4FEE\u6539\u5185\u5BB9\u3002");return}if(n=="store"){R.warning("\u4E3A\u4E86\u4FDD\u8BC1\u5546\u5E97\u4E2D\u7684 compose.yaml \u6587\u4EF6\u53EF\u4EE5\u968F\u65F6\u66F4\u65B0\uFF0C\u5EFA\u8BAE\u901A\u8FC7\u3010\u8986\u76D6 yaml \u6587\u4EF6\u3011\u7684\u65B9\u5F0F\u4FEE\u6539\u5185\u5BB9\u3002");return}},onChange:function(o,s){var i;(i=_.current)===null||i===void 0||i.setFieldValue("yaml",o)},onBlur:function(){var o;D({yaml:(o=_.current)===null||o===void 0?void 0:o.getFieldValue("yaml"),id:l==null?void 0:l.id})},readOnly:n=="remoteUrl",value:u,extensions:[x.RI.yaml()]})})}})]})},{label:"\u8986\u76D6 Yaml \u6587\u4EF6",key:"override",children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(A.Z,{style:{marginBottom:20},message:(0,e.jsxs)(e.Fragment,{children:["\u8986\u76D6\u6587\u4EF6\uFF0C\u5141\u8BB8\u4F60\u5728\u4E0D\u6539\u52A8\u539F\u59CB Yaml \u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u8986\u76D6\u539F\u59CB\u6587\u4EF6\u4E2D\u7684\u4E00\u4E9B\u53C2\u6570\u914D\u7F6E\u3002",(0,e.jsx)("a",{href:"https://dpanel.cc/#/zh-cn/manual/compose/override",target:"_blank",children:"\u5982\u4F55\u914D\u7F6E\uFF1F"})]})}),(0,e.jsx)(c.Z,{name:"yamlOverride",hidden:!0}),(0,e.jsx)(P.Z,{name:["yamlOverride"],children:function(a){var n=a.yamlOverride;return(0,e.jsx)(F.ZP,{theme:"dark",minHeight:"550px",onChange:function(t,o){var s;(s=_.current)===null||s===void 0||s.setFieldValue("yamlOverride",t)},value:n,onBlur:function(){var t;S((t=_.current)===null||t===void 0?void 0:t.getFieldValue("yamlOverride"))},extensions:[x.RI.yaml()]})}})]})}]})})})]})})},"create")})}}}]);