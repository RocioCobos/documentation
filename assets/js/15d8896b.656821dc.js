/*! For license information please see 15d8896b.656821dc.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80996],{91476:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>x,Bullet:()=>r,Details:()=>b,SpecifiedBy:()=>g,assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=n(17624),s=n(4552),d=n(11504);const i={id:"destination-data",title:"DestinationData"},o=void 0,l={id:"objects/destination-data",title:"DestinationData",description:"Information about destinantion",source:"@site/api/objects/destination-data.mdx",sourceDirName:"objects",slug:"/objects/destination-data",permalink:"/api/objects/destination-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"destination-data",title:"DestinationData"},sidebar:"schemaSidebar",previous:{title:"DestinationConnection",permalink:"/api/objects/destination-connection"},next:{title:"DestinationEdge",permalink:"/api/objects/destination-edge"}},c={},r=()=>{const e={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,s.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},x=e=>{const a={span:"span",...(0,s.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>DestinationData.<b>code</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatacodeid--",level:4},{value:'<code>DestinationData.<b>available</b></code><Bullet></Bullet><code>Boolean!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdataavailableboolean--",level:4},{value:'<code>DestinationData.<b>destinationLeaf</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatadestinationleafstring--",level:4},{value:'<code>DestinationData.<b>texts</b></code><Bullet></Bullet><code>[Text!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatatextstext--",level:4},{value:'<code>DestinationData.texts.<b>languages</b></code><Bullet></Bullet><code>[Language!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatatextslanguageslanguage--",level:5},{value:'<code>DestinationData.<b>closestDestinations</b></code><Bullet></Bullet><code>[String!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"destinationdataclosestdestinationsstring--",level:4},{value:'<code>DestinationData.<b>parent</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"destinationdataparentstring-",level:4},{value:'<code>DestinationData.<b>type</b></code><Bullet></Bullet><code>DestinationType</code> <Badge class="badge badge--secondary"></Badge>',id:"destinationdatatypedestinationtype-",level:4},{value:"Member Of",id:"member-of",level:3},{value:"Implemented By",id:"implemented-by",level:3}],b=({dataOpen:e,dataClose:a,children:n,startOpen:i=!1})=>{const o={details:"details",summary:"summary",...(0,s.M)()},[l,c]=(0,d.useState)(i);return(0,t.jsxs)(o.details,{...l?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(o.summary,{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"},children:l?e:a}),l&&n]})};function j(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Information about destinantion"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type DestinationData {\n  code: ID!\n  available: Boolean!\n  destinationLeaf: [String!]\n  texts(languages: [Language!]): [Text!]!\n  closestDestinations: [String!]\n  parent: String\n  type: DestinationType\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"destinationdatacodeid--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,t.jsx)("b",{children:"code"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/scalars/id",children:(0,t.jsx)(a.code,{children:"ID!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Destination Code"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"destinationdataavailableboolean--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,t.jsx)("b",{children:"available"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/scalars/boolean",children:(0,t.jsx)(a.code,{children:"Boolean!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Indicates if you can search by destination"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"destinationdatadestinationleafstring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,t.jsx)("b",{children:"destinationLeaf"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/scalars/string",children:(0,t.jsx)(a.code,{children:"[String!]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Returns destination leafs of the destination."}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"destinationdatatextstext--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,t.jsx)("b",{children:"texts"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/objects/text",children:(0,t.jsx)(a.code,{children:"[Text!]!"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Contains the destination name"}),"\n",(0,t.jsxs)(a.h5,{id:"destinationdatatextslanguageslanguage--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.texts.",(0,t.jsx)("b",{children:"languages"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/scalars/language",children:(0,t.jsx)(a.code,{children:"[Language!]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"destinationdataclosestdestinationsstring--",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,t.jsx)("b",{children:"closestDestinations"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/scalars/string",children:(0,t.jsx)(a.code,{children:"[String!]"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"list"})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Closest destinations, indicates destinations in proximity"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"destinationdataparentstring-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,t.jsx)("b",{children:"parent"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/scalars/string",children:(0,t.jsx)(a.code,{children:"String"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Parent destination code"}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"destinationdatatypedestinationtype-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["DestinationData.",(0,t.jsx)("b",{children:"type"})]})}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/enums/destination-type",children:(0,t.jsx)(a.code,{children:"DestinationType"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Indicates destination type, zone or city"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/objects/destination",children:(0,t.jsx)(a.code,{children:"Destination"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"}),(0,t.jsx)(r,{}),(0,t.jsx)(a.a,{href:"/api/objects/location",children:(0,t.jsx)(a.code,{children:"Location"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsx)(a.h3,{id:"implemented-by",children:"Implemented By"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/unions/destination-search-result",children:(0,t.jsx)(a.code,{children:"DestinationSearchResult"})})," ",(0,t.jsx)(x,{class:"badge badge--secondary",text:"union"})]})]})}function u(e={}){const{wrapper:a}={...(0,s.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},44808:(e,a,n)=>{var t=n(11504),s=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,n){var t,d={},c=null,r=null;for(t in void 0!==n&&(c=""+n),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(r=a.ref),a)i.call(a,t)&&!l.hasOwnProperty(t)&&(d[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===d[t]&&(d[t]=a[t]);return{$$typeof:s,type:e,key:c,ref:r,props:d,_owner:o.current}}a.Fragment=d,a.jsx=c,a.jsxs=c},17624:(e,a,n)=>{e.exports=n(44808)},4552:(e,a,n)=>{n.d(a,{I:()=>o,M:()=>i});var t=n(11504);const s={},d=t.createContext(s);function i(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);