/*! For license information please see 38d0ce65.df558cce.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26041],{33288:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>y,Bullet:()=>i,Details:()=>u,SpecifiedBy:()=>h,assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=t(74848),s=t(28453),a=t(96540);const o={id:"transport-query",title:"TransportQuery",hide_table_of_contents:!1},c=void 0,d={id:"objects/transport-query",title:"TransportQuery",description:"No description",source:"@site/api/objects/transport-query.mdx",sourceDirName:"objects",slug:"/objects/transport-query",permalink:"/api/objects/transport-query",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"transport-query",title:"TransportQuery",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"TransportMutation",permalink:"/api/objects/transport-mutation"},next:{title:"Transport",permalink:"/api/objects/transport"}},l={},i=()=>{const e={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const r={a:"a",...(0,s.R)()};return(0,n.jsxs)(n.Fragment,{children:["Specification",(0,n.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},y=e=>{const r={span:"span",...(0,s.R)()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.span,{className:e.class,children:e.text})})},u=({dataOpen:e,dataClose:r,children:t,startOpen:o=!1})=>{const c={details:"details",summary:"summary",...(0,s.R)()},[d,l]=(0,a.useState)(o);return(0,n.jsxs)(c.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,n.jsx)(c.summary,{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&t]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>TransportQuery.<b>ferrySearch</b></code><Bullet></Bullet><code>FerrySearchConnection</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferrysearchferrysearchconnection-",level:4},{value:'<code>TransportQuery.ferrySearch.<b>where</b></code><Bullet></Bullet><code>FerrySearchWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferrysearchwhereferrysearchwhereinput-",level:5},{value:'<code>TransportQuery.ferrySearch.<b>groupBy</b></code><Bullet></Bullet><code>FerrySearchGroupByInput</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferrysearchgroupbyferrysearchgroupbyinput-",level:5},{value:'<code>TransportQuery.ferrySearch.<b>first</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferrysearchfirstint-",level:5},{value:'<code>TransportQuery.ferrySearch.<b>after</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferrysearchafterstring-",level:5},{value:'<code>TransportQuery.ferrySearch.<b>last</b></code><Bullet></Bullet><code>Int</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferrysearchlastint-",level:5},{value:'<code>TransportQuery.ferrySearch.<b>before</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferrysearchbeforestring-",level:5},{value:'<code>TransportQuery.<b>ferryQuote</b></code><Bullet></Bullet><code>FerryQuotePayload</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferryquoteferryquotepayload-",level:4},{value:'<code>TransportQuery.ferryQuote.<b>where</b></code><Bullet></Bullet><code>FerryQuoteWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferryquotewhereferryquotewhereinput-",level:5},{value:'<code>TransportQuery.<b>ferryBooking</b></code><Bullet></Bullet><code>FerryOrderPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferrybookingferryorderpayload-",level:4},{value:'<code>TransportQuery.ferryBooking.<b>where</b></code><Bullet></Bullet><code>FerryGetBookingWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"transportqueryferrybookingwhereferrygetbookingwhereinput-",level:5},{value:"Returned by",id:"returned-by",level:3}];function f(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"No description"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",children:"type TransportQuery {\n  ferrySearch(\n    where: FerrySearchWhereInput\n    groupBy: FerrySearchGroupByInput\n    first: Int\n    after: String\n    last: Int\n    before: String\n  ): FerrySearchConnection\n  ferryQuote(where: FerryQuoteWhereInput): FerryQuotePayload\n  ferryBooking(where: FerryGetBookingWhereInput): FerryOrderPayload\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.h4,{id:"transportqueryferrysearchferrysearchconnection-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.",(0,n.jsx)("b",{children:"ferrySearch"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/objects/ferry-search-connection",children:(0,n.jsx)(r.code,{children:"FerrySearchConnection"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.h5,{id:"transportqueryferrysearchwhereferrysearchwhereinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.ferrySearch.",(0,n.jsx)("b",{children:"where"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/inputs/ferry-search-where-input",children:(0,n.jsx)(r.code,{children:"FerrySearchWhereInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,n.jsxs)(r.h5,{id:"transportqueryferrysearchgroupbyferrysearchgroupbyinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.ferrySearch.",(0,n.jsx)("b",{children:"groupBy"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/inputs/ferry-search-group-by-input",children:(0,n.jsx)(r.code,{children:"FerrySearchGroupByInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,n.jsx)(r.blockquote,{children:"\n"}),"\n",(0,n.jsxs)(r.h5,{id:"transportqueryferrysearchfirstint-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.ferrySearch.",(0,n.jsx)("b",{children:"first"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/scalars/int",children:(0,n.jsx)(r.code,{children:"Int"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Returns the first ",(0,n.jsx)(r.em,{children:"n"})," elements from the list."]}),"\n"]}),"\n",(0,n.jsxs)(r.h5,{id:"transportqueryferrysearchafterstring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.ferrySearch.",(0,n.jsx)("b",{children:"after"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Returns the elements in the list that come after the specified cursor."}),"\n"]}),"\n",(0,n.jsxs)(r.h5,{id:"transportqueryferrysearchlastint-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.ferrySearch.",(0,n.jsx)("b",{children:"last"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/scalars/int",children:(0,n.jsx)(r.code,{children:"Int"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Returns the last ",(0,n.jsx)(r.em,{children:"n"})," elements from the list."]}),"\n"]}),"\n",(0,n.jsxs)(r.h5,{id:"transportqueryferrysearchbeforestring-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.ferrySearch.",(0,n.jsx)("b",{children:"before"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/scalars/string",children:(0,n.jsx)(r.code,{children:"String"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Returns the elements in the list that come before the specified cursor."}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"transportqueryferryquoteferryquotepayload-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.",(0,n.jsx)("b",{children:"ferryQuote"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/objects/ferry-quote-payload",children:(0,n.jsx)(r.code,{children:"FerryQuotePayload"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.h5,{id:"transportqueryferryquotewhereferryquotewhereinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.ferryQuote.",(0,n.jsx)("b",{children:"where"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/inputs/ferry-quote-where-input",children:(0,n.jsx)(r.code,{children:"FerryQuoteWhereInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,n.jsxs)(r.h4,{id:"transportqueryferrybookingferryorderpayload-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.",(0,n.jsx)("b",{children:"ferryBooking"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/objects/ferry-order-payload",children:(0,n.jsx)(r.code,{children:"FerryOrderPayload"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.h5,{id:"transportqueryferrybookingwhereferrygetbookingwhereinput-",children:[(0,n.jsx)(r.a,{href:"#",children:(0,n.jsxs)("code",{style:{fontWeight:"normal"},children:["TransportQuery.ferryBooking.",(0,n.jsx)("b",{children:"where"})]})}),(0,n.jsx)(i,{}),(0,n.jsx)(r.a,{href:"/api/inputs/ferry-get-booking-where-input",children:(0,n.jsx)(r.code,{children:"FerryGetBookingWhereInput"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/queries/transport",children:(0,n.jsx)(r.code,{children:"transport"})})," ",(0,n.jsx)(y,{class:"badge badge--secondary",text:"query"})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,a={},l=null,i=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(i=r.ref),r)o.call(r,n)&&!d.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:i,props:a,_owner:c.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>c});var n=t(96540);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);