"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82660],{3905:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>s});var n=t(67294);function l(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){l(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,n,l=function(e,o){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(l[t]=e[t]);return l}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=n.createContext({}),i=function(e){var o=n.useContext(m),t=o;return e&&(t="function"==typeof e?e(o):r(r({},o),e)),t},d=function(e){var o=i(e.components);return n.createElement(m.Provider,{value:o},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},b=n.forwardRef((function(e,o){var t=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),y=i(t),b=l,s=y["".concat(m,".").concat(b)]||y[b]||p[b]||a;return t?n.createElement(s,r(r({ref:o},d),{},{components:t})):n.createElement(s,r({ref:o},d))}));function s(e,o){var t=arguments,l=o&&o.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=b;var c={};for(var m in o)hasOwnProperty.call(o,m)&&(c[m]=o[m]);c.originalType=e,c[y]="string"==typeof e?e:l,r[1]=c;for(var i=2;i<a;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},99715:(e,o,t)=>{t.r(o),t.d(o,{Badge:()=>p,Bullet:()=>d,Details:()=>s,SpecifiedBy:()=>y,assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>m,toc:()=>b});var n=t(87462),l=t(67294),a=t(3905);const r={id:"company-role",title:"CompanyRole",hide_table_of_contents:!1},c=void 0,m={unversionedId:"enums/company-role",id:"enums/company-role",title:"CompanyRole",description:"No description",source:"@site/api/enums/company-role.mdx",sourceDirName:"enums",slug:"/enums/company-role",permalink:"/api/enums/company-role",draft:!1,tags:[],version:"current",frontMatter:{id:"company-role",title:"CompanyRole",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CloudEnvironment",permalink:"/api/enums/cloud-environment"},next:{title:"ConditionType",permalink:"/api/enums/condition-type"}},i={},d=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),b=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>ACCOUNT_MANAGER_BUYER</b></code>",id:"code-style-fontweight-normal-companyrolebaccount_manager_buyerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>ACCOUNT_MANAGER_SELLER</b></code>",id:"code-style-fontweight-normal-companyrolebaccount_manager_sellerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>BILLING_BUYER</b></code>",id:"code-style-fontweight-normal-companyrolebbilling_buyerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>BILLING_SELLER</b></code>",id:"code-style-fontweight-normal-companyrolebbilling_sellerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>CONTRACTING</b></code>",id:"code-style-fontweight-normal-companyrolebcontractingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>GENERIC_ACCOUNT</b></code>",id:"code-style-fontweight-normal-companyrolebgeneric_accountbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>LEGAL</b></code>",id:"code-style-fontweight-normal-companyroleblegalbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>PLATFOR_PRIMARY_ACCOUNT</b></code>",id:"code-style-fontweight-normal-companyrolebplatfor_primary_accountbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>PRESS</b></code>",id:"code-style-fontweight-normal-companyrolebpressbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>SALES_BUYER</b></code>",id:"code-style-fontweight-normal-companyrolebsales_buyerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>SALES_SELLER</b></code>",id:"code-style-fontweight-normal-companyrolebsales_sellerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>SERVICE_PROVIDER</b></code>",id:"code-style-fontweight-normal-companyrolebservice_providerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>TECH_BUYER</b></code>",id:"code-style-fontweight-normal-companyrolebtech_buyerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>TECH_SELLER</b></code>",id:"code-style-fontweight-normal-companyrolebtech_sellerbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>TEST</b></code>",id:"code-style-fontweight-normal-companyrolebtestbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>TGX_HELPDESK_USER</b></code>",id:"code-style-fontweight-normal-companyrolebtgx_helpdesk_userbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyRole.<b>UNKNOWN</b></code>",id:"code-style-fontweight-normal-companyrolebunknownbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=e=>{let{dataOpen:o,dataClose:t,children:r,startOpen:c=!1}=e;const[m,i]=(0,l.useState)(c);return(0,a.kt)("details",(0,n.Z)({},m?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},m?o:t),m&&r)},u={Bullet:d,SpecifiedBy:y,Badge:p,toc:b,Details:s},f="wrapper";function h(e){let{components:o,...t}=e;return(0,a.kt)(f,(0,n.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CompanyRole {\n  ACCOUNT_MANAGER_BUYER\n  ACCOUNT_MANAGER_SELLER\n  BILLING_BUYER\n  BILLING_SELLER\n  CONTRACTING\n  GENERIC_ACCOUNT\n  LEGAL\n  PLATFOR_PRIMARY_ACCOUNT\n  PRESS\n  SALES_BUYER\n  SALES_SELLER\n  SERVICE_PROVIDER\n  TECH_BUYER\n  TECH_SELLER\n  TEST\n  TGX_HELPDESK_USER\n  UNKNOWN\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebaccount_manager_buyerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"ACCOUNT_MANAGER_BUYER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebaccount_manager_sellerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"ACCOUNT_MANAGER_SELLER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebbilling_buyerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"BILLING_BUYER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebbilling_sellerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"BILLING_SELLER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebcontractingbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"CONTRACTING")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebgeneric_accountbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"GENERIC_ACCOUNT")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyroleblegalbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"LEGAL")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebplatfor_primary_accountbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"PLATFOR_PRIMARY_ACCOUNT")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebpressbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"PRESS")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebsales_buyerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"SALES_BUYER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebsales_sellerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"SALES_SELLER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebservice_providerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"SERVICE_PROVIDER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebtech_buyerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"TECH_BUYER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebtech_sellerbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"TECH_SELLER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebtestbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"TEST")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebtgx_helpdesk_userbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"TGX_HELPDESK_USER")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-companyrolebunknownbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CompanyRole.",(0,a.kt)("b",null,"UNKNOWN")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/crm-data-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CrmDataInput"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);