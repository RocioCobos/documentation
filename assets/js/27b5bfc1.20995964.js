/*! For license information please see 27b5bfc1.20995964.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44276],{53224:(e,r,n)=>{n.r(r),n.d(r,{Badge:()=>h,Bullet:()=>o,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var t=n(17624),s=n(4552),a=n(11504);const c={id:"ferry-search-where-input",title:"FerrySearchWhereInput"},i=void 0,l={id:"inputs/ferry-search-where-input",title:"FerrySearchWhereInput",description:"Search Input",source:"@site/api/inputs/ferry-search-where-input.mdx",sourceDirName:"inputs",slug:"/inputs/ferry-search-where-input",permalink:"/api/inputs/ferry-search-where-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"ferry-search-where-input",title:"FerrySearchWhereInput"},sidebar:"schemaSidebar",previous:{title:"FerrySearchGroupByInput",permalink:"/api/inputs/ferry-search-group-by-input"},next:{title:"FilterInput",permalink:"/api/inputs/filter-input"}},d={},o=()=>{const e={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const r={a:"a",...(0,s.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const r={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>FerrySearchWhereInput.<b>context</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchwhereinputcontextstring-",level:4},{value:'<code>FerrySearchWhereInput.<b>currency</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchwhereinputcurrencystring-",level:4},{value:'<code>FerrySearchWhereInput.<b>traveller</b></code><Bullet></Bullet><code>TravellerInput</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchwhereinputtravellertravellerinput-",level:4},{value:'<code>FerrySearchWhereInput.<b>journey</b></code><Bullet></Bullet><code>JourneyInput</code> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchwhereinputjourneyjourneyinput-",level:4},{value:'<code>FerrySearchWhereInput.<b>accesses</b></code><Bullet></Bullet><code>[ID!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchwhereinputaccessesid--",level:4},{value:'<code>FerrySearchWhereInput.<b>inputSettings</b></code><Bullet></Bullet><code>FerryInputSettings!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"ferrysearchwhereinputinputsettingsferryinputsettings--",level:4}],y=({dataOpen:e,dataClose:r,children:n,startOpen:c=!1})=>{const i={details:"details",summary:"summary",...(0,s.M)()},[l,d]=(0,a.useState)(c);return(0,t.jsxs)(i.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(i.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:l?e:r}),l&&n]})};function x(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Search Input"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"input FerrySearchWhereInput {\n  context: String\n  currency: String\n  traveller: TravellerInput\n  journey: JourneyInput\n  accesses: [ID!]\n  inputSettings: FerryInputSettings!\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysearchwhereinputcontextstring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchWhereInput.",(0,t.jsx)("b",{children:"context"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/api/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Used to find the Buyer mapped code from a Seller code in Buyer/Seller Code Mapping."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysearchwhereinputcurrencystring-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchWhereInput.",(0,t.jsx)("b",{children:"currency"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/api/scalars/string",children:(0,t.jsx)(r.code,{children:"String"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Alphabetic Code ISO 4217."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysearchwhereinputtravellertravellerinput-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchWhereInput.",(0,t.jsx)("b",{children:"traveller"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/api/inputs/traveller-input",children:(0,t.jsx)(r.code,{children:"TravellerInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Customer information."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysearchwhereinputjourneyjourneyinput-",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchWhereInput.",(0,t.jsx)("b",{children:"journey"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/api/inputs/journey-input",children:(0,t.jsx)(r.code,{children:"JourneyInput"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Route information."}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysearchwhereinputaccessesid--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchWhereInput.",(0,t.jsx)("b",{children:"accesses"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/api/scalars/id",children:(0,t.jsx)(r.code,{children:"[ID!]"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Unique identifiers of Access"}),"\n"]}),"\n",(0,t.jsxs)(r.h4,{id:"ferrysearchwhereinputinputsettingsferryinputsettings--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["FerrySearchWhereInput.",(0,t.jsx)("b",{children:"inputSettings"})]})}),(0,t.jsx)(o,{}),(0,t.jsx)(r.a,{href:"/api/inputs/ferry-input-settings",children:(0,t.jsx)(r.code,{children:"FerryInputSettings!"})})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Node that represents the configuration for an specified request"}),"\n"]})]})}function g(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},44808:(e,r,n)=>{var t=n(11504),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,a={},d=null,o=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(o=r.ref),r)c.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:o,props:a,_owner:i.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},17624:(e,r,n)=>{e.exports=n(44808)},4552:(e,r,n)=>{n.d(r,{I:()=>i,M:()=>c});var t=n(11504);const s={},a=t.createContext(s);function c(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);