"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58938],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return a?r.createElement(b,l(l({ref:t},s),{},{components:a})):r.createElement(b,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58865:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(87462),n=a(67294),o=a(3905);const l={id:"alert-price",title:"AlertPrice",hide_table_of_contents:!1},c=void 0,i={unversionedId:"objects/alert-price",id:"objects/alert-price",title:"AlertPrice",description:"Price contains the specific configuration for Price alert Type",source:"@site/api/objects/alert-price.mdx",sourceDirName:"objects",slug:"/objects/alert-price",permalink:"/api/objects/alert-price",draft:!1,tags:[],version:"current",frontMatter:{id:"alert-price",title:"AlertPrice",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlertNotifications",permalink:"/api/objects/alert-notifications"},next:{title:"AlertRatios",permalink:"/api/objects/alert-ratios"}},d={},s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPrice.<b>check</b></code><Bullet /><code>AlertCheckPrice!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-alertpricebcheckbcodealertcheckprice--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPrice.<b>range</b></code><Bullet /><code>AlertRangePrice!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-alertpricebrangebcodealertrangeprice--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPrice.<b>amount</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpricebamountbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPrice.<b>commission</b></code><Bullet /><code>Int</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-alertpricebcommissionbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AlertPrice.<b>amountBy</b></code><Bullet /><code>AlertAmountBy</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-alertpricebamountbybcodealertamountby-",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:c=!1}=e;const[i,d]=(0,n.useState)(c);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&l)},g={Bullet:s,SpecifiedBy:p,Badge:m,toc:u,Details:b},f="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Price contains the specific configuration for Price alert Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AlertPrice {\n  check: AlertCheckPrice!\n  range: AlertRangePrice!\n  amount: Int\n  commission: Int\n  amountBy: AlertAmountBy\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertpricebcheckbcodealertcheckprice--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertPrice.",(0,o.kt)("b",null,"check"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/alert-check-price"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertCheckPrice!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Specify which field is goinf to be checked. Amount, commission or both")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertpricebrangebcodealertrangeprice--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertPrice.",(0,o.kt)("b",null,"range"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/alert-range-price"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertRangePrice!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Low or greater values of amount/commission (value included)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertpricebamountbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertPrice.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Value of amount price")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertpricebcommissionbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertPrice.",(0,o.kt)("b",null,"commission"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Value of commission price")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-alertpricebamountbybcodealertamountby-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AlertPrice.",(0,o.kt)("b",null,"amountBy"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/alert-amount-by"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertAmountBy"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used for check amount")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/alert-type-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"AlertTypeConfiguration"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);