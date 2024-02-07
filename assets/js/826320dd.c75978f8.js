/*! For license information please see 826320dd.c75978f8.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33184],{57505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(17624),o=r(4552);const s="query ($criteria: HotelXBoardQueryInput!) {\n\thotelX {\n\t\tboards(criteria: $criteria) {\n\t\t\tedges {\n\t\t\t\tnode {\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tboardData {\n\t\t\t\t\t\tboardCode\n\t\t\t\t\t\ttexts {\n\t\t\t\t\t\t\ttext\n\t\t\t\t\t\t\tlanguage\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}",i='{\n\t"criteria": {\n\t\t"access": "2"\n\t}\n}',a='{\n\t"criteria": {\n\t\t"access": "2",\n\t\t"boardCodes": [\n\t\t\t"12",\n\t\t\t"256"\n\t\t]\n\t}\n}',l={sidebar_position:6},d="Boards",c={id:"apis/for-buyers/hotel-x-pull-buyers-api/content/boards",title:"Boards",description:"The Boards Query returns a comprehensive boards list from a supplier's access that may include translations to other languages, granting you access to all the boards configured by the Seller for a given set of credentials. The returned fields include:",source:"@site/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards.mdx",sourceDirName:"apis/for-buyers/hotel-x-pull-buyers-api/content",slug:"/apis/for-buyers/hotel-x-pull-buyers-api/content/boards",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards",draft:!1,unlisted:!1,editUrl:"https://github.com/Travelgate/documentation/tree/main/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/boards.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Rooms",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/rooms"},next:{title:"Metadata",permalink:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/content/metadata"}},u={},p=[{value:"Boards Inputs",id:"boards-inputs",level:2},{value:"1. Criteria",id:"1-criteria",level:3},{value:"Requests Examples",id:"requests-examples",level:3},{value:"Search for the complete board list from a supplier",id:"search-for-the-complete-board-list-from-a-supplier",level:4},{value:"Search for a specific board list from a supplier",id:"search-for-a-specific-board-list-from-a-supplier",level:4},{value:"Boards Response",id:"boards-response",level:2},{value:"Mapping",id:"mapping",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.M)(),...e.components},{GraphqlSample:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("GraphqlSample",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"boards",children:"Boards"}),"\n",(0,n.jsx)(t.p,{children:"The Boards Query returns a comprehensive boards list from a supplier's access that may include translations to other languages, granting you access to all the boards configured by the Seller for a given set of credentials. The returned fields include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"boardCode"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"text"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"language"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"boards-inputs",children:"Boards Inputs"}),"\n",(0,n.jsx)(t.p,{children:"When creating your boards query, you have 1 input to fill based on your specific needs:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Criteria"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"1-criteria",children:"1. Criteria"}),"\n",(0,n.jsxs)(t.p,{children:["This query offers versatility, with certain fields marked as mandatory (",(0,n.jsx)(t.code,{children:"access"}),") and others as optional (",(0,n.jsx)(t.code,{children:"boardCodes"})," and ",(0,n.jsx)(t.code,{children:"group"}),"). This flexibility empowers you to create a personalized Boards Query, tailoring the requested fields to your specific needs. Consequently, the response will only include information that is highly relevant to you, streamlining the retrieval process and ensuring the data you receive meets your exact requirements."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Mandatory criteria"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"access"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Optional criteria"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"boardCodes"})," (Search by board type)"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"group"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"requests-examples",children:"Requests Examples"}),"\n",(0,n.jsx)(t.h4,{id:"search-for-the-complete-board-list-from-a-supplier",children:"Search for the complete board list from a supplier"}),"\n",(0,n.jsx)(r,{query:s,variables:i}),"\n",(0,n.jsx)(t.h4,{id:"search-for-a-specific-board-list-from-a-supplier",children:"Search for a specific board list from a supplier"}),"\n",(0,n.jsxs)(t.p,{children:["When utilizing the Boards List Query, for more personalized results, filter specific boards based on your interests. For example, to focus solely on the half board inventory of a Seller, add the ",(0,n.jsx)(t.code,{children:"boardCodes"}),' field with "2" and "256" (these are the codes this Seller has assigned for the half board from their side) in your criteria. This can provide you with highly targeted and relevant information.']}),"\n",(0,n.jsx)(r,{query:s,variables:a}),"\n",(0,n.jsx)(t.h2,{id:"boards-response",children:"Boards Response"}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"The amount of information and content returned might vary between Sellers."}),(0,n.jsx)(t.p,{children:"Hotel-X supports all languages, but receiving board descriptions in one or another depends entirely on the languages supported by the Seller."})]}),"\n",(0,n.jsx)(t.h3,{id:"mapping",children:"Mapping"}),"\n",(0,n.jsx)(t.p,{children:"When utilizing the Boards List Query, you will receive the Seller's native boards codes. Connecting with a new Seller doesn't always mean that you are interested in the whole board's portfolio, maybe you are just interested in some specific boards. Since mapping depends entirely on your side, you can map only those boards you are interested in."}),"\n",(0,n.jsx)(t.p,{children:"Additionally, you can upload your own mapping files to our FTP (credentials should be provided by our Customer Care team), and we will use your own boards codes in the booking flow."}),"\n",(0,n.jsxs)(t.p,{children:["You can find all the necessary information in the ",(0,n.jsx)(t.a,{href:"/docs/apis/for-buyers/hotel-x-pull-buyers-api/plugins/mapping",children:"mapping section"}),"."]})]})}function f(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},44808:(e,t,r)=>{var n=r(11504),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,s={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:d,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},17624:(e,t,r)=>{e.exports=r(44808)},4552:(e,t,r)=>{r.d(t,{I:()=>a,M:()=>i});var n=r(11504);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);