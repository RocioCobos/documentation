/*! For license information please see 15dbeccc.2146730a.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27690],{6022:(e,n,s)=>{s.r(n),s.d(n,{Badge:()=>h,Bullet:()=>l,Details:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var t=s(74848),i=s(28453),r=s(96540);const o={id:"insights-countries-input",title:"InsightsCountriesInput",hide_table_of_contents:!1},a=void 0,c={id:"inputs/insights-countries-input",title:"InsightsCountriesInput",description:"No description",source:"@site/api/inputs/insights-countries-input.mdx",sourceDirName:"inputs",slug:"/inputs/insights-countries-input",permalink:"/api/inputs/insights-countries-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"insights-countries-input",title:"InsightsCountriesInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InscribeSetMappingInput",permalink:"/api/inputs/inscribe-set-mapping-input"},next:{title:"InsightsCountriesWhereInput",permalink:"/api/inputs/insights-countries-where-input"}},d={},l=()=>{const e={span:"span",...(0,i.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const n={a:"a",...(0,i.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(n.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const n={span:"span",...(0,i.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.span,{className:e.class,children:e.text})})},p=({dataOpen:e,dataClose:n,children:s,startOpen:o=!1})=>{const a={details:"details",summary:"summary",...(0,i.R)()},[c,d]=(0,r.useState)(o);return(0,t.jsxs)(a.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:n}),c&&s]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>InsightsCountriesInput.<b>to</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"insightscountriesinputtodate-",level:4},{value:'<code>InsightsCountriesInput.<b>from</b></code><Bullet></Bullet><code>Date</code> <Badge class="badge badge--secondary"></Badge>',id:"insightscountriesinputfromdate-",level:4},{value:'<code>InsightsCountriesInput.<b>country</b></code><Bullet></Bullet><code>String!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightscountriesinputcountrystring--",level:4},{value:'<code>InsightsCountriesInput.<b>numBookings</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightscountriesinputnumbookingsint--",level:4},{value:'<code>InsightsCountriesInput.<b>countryType</b></code><Bullet></Bullet><code>InsightsCountryType!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"insightscountriesinputcountrytypeinsightscountrytype--",level:4},{value:"Member of",id:"member-of",level:3}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"No description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"input InsightsCountriesInput {\n  to: Date\n  from: Date\n  country: String!\n  numBookings: Int!\n  countryType: InsightsCountryType!\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(n.h4,{id:"insightscountriesinputtodate-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsCountriesInput.",(0,t.jsx)("b",{children:"to"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/date",children:(0,t.jsx)(n.code,{children:"Date"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"insightscountriesinputfromdate-",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsCountriesInput.",(0,t.jsx)("b",{children:"from"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/date",children:(0,t.jsx)(n.code,{children:"Date"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"insightscountriesinputcountrystring--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsCountriesInput.",(0,t.jsx)("b",{children:"country"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/string",children:(0,t.jsx)(n.code,{children:"String!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"insightscountriesinputnumbookingsint--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsCountriesInput.",(0,t.jsx)("b",{children:"numBookings"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/scalars/int",children:(0,t.jsx)(n.code,{children:"Int!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(n.h4,{id:"insightscountriesinputcountrytypeinsightscountrytype--",children:[(0,t.jsx)(n.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["InsightsCountriesInput.",(0,t.jsx)("b",{children:"countryType"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(n.a,{href:"/api/enums/insights-country-type",children:(0,t.jsx)(n.code,{children:"InsightsCountryType!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsx)(n.blockquote,{children:"\n"}),"\n",(0,t.jsx)(n.h3,{id:"member-of",children:"Member of"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/api/inputs/profile-update-input",children:(0,t.jsx)(n.code,{children:"ProfileUpdateInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function b(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},21020:(e,n,s)=>{var t=s(96540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var t,r={},d=null,l=null;for(t in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:d,ref:l,props:r,_owner:a.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);