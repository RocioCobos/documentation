/*! For license information please see 3f5347d8.bfa8072b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22519],{23178:(e,a,o)=>{o.r(a),o.d(a,{Badge:()=>g,Bullet:()=>i,Details:()=>h,SpecifiedBy:()=>b,assets:()=>r,contentTitle:()=>l,default:()=>j,frontMatter:()=>n,metadata:()=>t,toc:()=>p});var s=o(74848),d=o(28453),c=o(96540);const n={id:"book-payload",title:"BookPayload"},l=void 0,t={id:"types/objects/book-payload",title:"BookPayload",description:"No description",source:"@site/api/types/objects/book-payload.mdx",sourceDirName:"types/objects",slug:"/types/objects/book-payload",permalink:"/api/types/objects/book-payload",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"book-payload",title:"BookPayload"},sidebar:"schemaSidebar",previous:{title:"Board",permalink:"/api/types/objects/board"},next:{title:"BookReference",permalink:"/api/types/objects/book-reference"}},r={},i=()=>{const e={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},b=e=>{const a={a:"a",...(0,d.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},g=e=>{const a={span:"span",...(0,d.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:o,startOpen:n=!1})=>{const l={details:"details",summary:"summary",...(0,d.R)()},[t,r]=(0,c.useState)(n);return(0,s.jsxs)(l.details,{...t?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),r((e=>!e))},style:{listStyle:"none"},children:t?e:a}),t&&o]})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>BookPayload.<b>accommodations</b></code><Bullet></Bullet><code>[Accommodation!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadaccommodationsaccommodation--",level:4},{value:'<code>BookPayload.<b>activities</b></code><Bullet></Bullet><code>[Activity!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadactivitiesactivity--",level:4},{value:'<code>BookPayload.<b>adviseMessages</b></code><Bullet></Bullet><code>[AdviseMessage]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadadvisemessagesadvisemessage--",level:4},{value:'<code>BookPayload.<b>bookReference</b></code><Bullet></Bullet><code>BookReference</code> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadbookreferencebookreference-",level:4},{value:'<code>BookPayload.<b>cancelPolicy</b></code><Bullet></Bullet><code>PackageCancelPolicy</code> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadcancelpolicypackagecancelpolicy-",level:4},{value:'<code>BookPayload.<b>departureDate</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloaddeparturedatestring-",level:4},{value:'<code>BookPayload.<b>returnDate</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadreturndatestring-",level:4},{value:'<code>BookPayload.<b>destination</b></code><Bullet></Bullet><code>PackageLocation</code> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloaddestinationpackagelocation-",level:4},{value:'<code>BookPayload.<b>itineraryMap</b></code><Bullet></Bullet><code>[ItineraryMap!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloaditinerarymapitinerarymap--",level:4},{value:'<code>BookPayload.<b>locations</b></code><Bullet></Bullet><code>[PackageLocations!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadlocationspackagelocations--",level:4},{value:'<code>BookPayload.<b>origin</b></code><Bullet></Bullet><code>PackageLocation</code> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadoriginpackagelocation-",level:4},{value:'<code>BookPayload.<b>paxes</b></code><Bullet></Bullet><code>Paxes</code> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadpaxespaxes-",level:4},{value:'<code>BookPayload.<b>rooms</b></code><Bullet></Bullet><code>[PackageRoom]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadroomspackageroom--",level:4},{value:'<code>BookPayload.<b>price</b></code><Bullet></Bullet><code>PackagePrice</code> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadpricepackageprice-",level:4},{value:'<code>BookPayload.<b>remarks</b></code><Bullet></Bullet><code>[Remark!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadremarksremark--",level:4},{value:'<code>BookPayload.<b>bookStatus</b></code><Bullet></Bullet><code>PackageBookStatus</code> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadbookstatuspackagebookstatus-",level:4},{value:'<code>BookPayload.<b>transports</b></code><Bullet></Bullet><code>[Transport!]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"bookpayloadtransportstransport--",level:4},{value:"Member Of",id:"member-of",level:3}];function x(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type BookPayload {\n  accommodations: [Accommodation!]\n  activities: [Activity!]\n  adviseMessages: [AdviseMessage]\n  bookReference: BookReference\n  cancelPolicy: PackageCancelPolicy\n  departureDate: String\n  returnDate: String\n  destination: PackageLocation\n  itineraryMap: [ItineraryMap!]\n  locations: [PackageLocations!]\n  origin: PackageLocation\n  paxes: Paxes\n  rooms: [PackageRoom]\n  price: PackagePrice\n  remarks: [Remark!]\n  bookStatus: PackageBookStatus\n  transports: [Transport!]\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadaccommodationsaccommodation--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"accommodations"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/accommodation",children:(0,s.jsx)(a.code,{children:"[Accommodation!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"List of accommodations"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadactivitiesactivity--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"activities"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/activity",children:(0,s.jsx)(a.code,{children:"[Activity!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"List of activities for the booking"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadadvisemessagesadvisemessage--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"adviseMessages"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/advise-message",children:(0,s.jsx)(a.code,{children:"[AdviseMessage]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"List of errors"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadbookreferencebookreference-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"bookReference"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/book-reference",children:(0,s.jsx)(a.code,{children:"BookReference"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Client and supplier locators of the booking"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadcancelpolicypackagecancelpolicy-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"cancelPolicy"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/package-cancel-policy",children:(0,s.jsx)(a.code,{children:"PackageCancelPolicy"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Cancel policies thast apply to the booking"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloaddeparturedatestring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"departureDate"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Date of departure for the option received in standard ISO 8601"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadreturndatestring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"returnDate"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Date of return for the option received in standard ISO 8601"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloaddestinationpackagelocation-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"destination"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/package-location",children:(0,s.jsx)(a.code,{children:"PackageLocation"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Destination of the package"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloaditinerarymapitinerarymap--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"itineraryMap"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/itinerary-map",children:(0,s.jsx)(a.code,{children:"[ItineraryMap!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Schedule of transports/activities/accommodations of the booking"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadlocationspackagelocations--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"locations"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/package-locations",children:(0,s.jsx)(a.code,{children:"[PackageLocations!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Locations where the pacakge will take place"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadoriginpackagelocation-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"origin"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/package-location",children:(0,s.jsx)(a.code,{children:"PackageLocation"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Origin of the package"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadpaxespaxes-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"paxes"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/paxes",children:(0,s.jsx)(a.code,{children:"Paxes"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Paxes for the option"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadroomspackageroom--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"rooms"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/package-room",children:(0,s.jsx)(a.code,{children:"[PackageRoom]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Rooms applying to the option"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadpricepackageprice-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"price"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/package-price",children:(0,s.jsx)(a.code,{children:"PackagePrice"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Price applied to the booking"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadremarksremark--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"remarks"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/remark",children:(0,s.jsx)(a.code,{children:"[Remark!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Remarks of the booking"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadbookstatuspackagebookstatus-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"bookStatus"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/enums/package-book-status",children:(0,s.jsx)(a.code,{children:"PackageBookStatus"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"enum"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"Status of the booking (OK, Cancelled...)"}),"\n"]}),"\n",(0,s.jsxs)(a.h4,{id:"bookpayloadtransportstransport--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["BookPayload.",(0,s.jsx)("b",{children:"transports"})]})}),(0,s.jsx)(i,{}),(0,s.jsx)(a.a,{href:"/api/types/objects/transport",children:(0,s.jsx)(a.code,{children:"[Transport!]"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsx)(a.p,{children:"List of transports included in the booking"}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member Of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/types/objects/package-mutation",children:(0,s.jsx)(a.code,{children:"PackageMutation"})})," ",(0,s.jsx)(g,{class:"badge badge--secondary",text:"object"})]})]})}function j(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},21020:(e,a,o)=>{var s=o(96540),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function r(e,a,o){var s,c={},r=null,i=null;for(s in void 0!==o&&(r=""+o),void 0!==a.key&&(r=""+a.key),void 0!==a.ref&&(i=a.ref),a)n.call(a,s)&&!t.hasOwnProperty(s)&&(c[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===c[s]&&(c[s]=a[s]);return{$$typeof:d,type:e,key:r,ref:i,props:c,_owner:l.current}}a.Fragment=c,a.jsx=r,a.jsxs=r},74848:(e,a,o)=>{e.exports=o(21020)},28453:(e,a,o)=>{o.d(a,{R:()=>n,x:()=>l});var s=o(96540);const d={},c=s.createContext(d);function n(e){const a=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),s.createElement(c.Provider,{value:a},e.children)}}}]);