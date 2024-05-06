/*! For license information please see a4b4ee11.5f590329.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85430],{88510:(e,a,n)=>{n.r(a),n.d(a,{Badge:()=>p,Bullet:()=>d,Details:()=>h,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var t=n(74848),o=n(28453),c=n(96540);const r={id:"package-mutation",title:"PackageMutation",hide_table_of_contents:!1},l=void 0,s={id:"objects/package-mutation",title:"PackageMutation",description:"No description",source:"@site/api/objects/package-mutation.mdx",sourceDirName:"objects",slug:"/objects/package-mutation",permalink:"/api/objects/package-mutation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"package-mutation",title:"PackageMutation",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PackageLocations",permalink:"/api/objects/package-locations"},next:{title:"PackagePax",permalink:"/api/objects/package-pax"}},i={},d=()=>{const e={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const a={a:"a",...(0,o.R)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},p=e=>{const a={span:"span",...(0,o.R)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.span,{className:e.class,children:e.text})})},h=({dataOpen:e,dataClose:a,children:n,startOpen:r=!1})=>{const l={details:"details",summary:"summary",...(0,o.R)()},[s,i]=(0,c.useState)(r);return(0,t.jsxs)(l.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(l.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:a}),s&&n]})},g=[{value:"Fields",id:"fields",level:3},{value:'<code>PackageMutation.<b>book</b></code><Bullet></Bullet><code>BookPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"packagemutationbookbookpayload-",level:4},{value:'<code>PackageMutation.book.<b>where</b></code><Bullet></Bullet><code>BookWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"packagemutationbookwherebookwhereinput-",level:5},{value:'<code>PackageMutation.<b>cancel</b></code><Bullet></Bullet><code>CancelPayload</code> <Badge class="badge badge--secondary"></Badge>',id:"packagemutationcancelcancelpayload-",level:4},{value:'<code>PackageMutation.cancel.<b>where</b></code><Bullet></Bullet><code>PackageCancelWhereInput</code> <Badge class="badge badge--secondary"></Badge>',id:"packagemutationcancelwherepackagecancelwhereinput-",level:5},{value:"Returned by",id:"returned-by",level:3}];function b(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"No description"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-graphql",children:"type PackageMutation {\n  book(where: BookWhereInput): BookPayload\n  cancel(where: PackageCancelWhereInput): CancelPayload\n}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.h4,{id:"packagemutationbookbookpayload-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageMutation.",(0,t.jsx)("b",{children:"book"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(a.a,{href:"/api/objects/book-payload",children:(0,t.jsx)(a.code,{children:"BookPayload"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Mutation to confirm an option"}),"\n",(0,t.jsxs)(a.h5,{id:"packagemutationbookwherebookwhereinput-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageMutation.book.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(a.a,{href:"/api/inputs/book-where-input",children:(0,t.jsx)(a.code,{children:"BookWhereInput"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,t.jsxs)(a.h4,{id:"packagemutationcancelcancelpayload-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageMutation.",(0,t.jsx)("b",{children:"cancel"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(a.a,{href:"/api/objects/cancel-payload",children:(0,t.jsx)(a.code,{children:"CancelPayload"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Mutation to cancel a confirmed booking"}),"\n",(0,t.jsxs)(a.h5,{id:"packagemutationcancelwherepackagecancelwhereinput-",children:[(0,t.jsx)(a.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["PackageMutation.cancel.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(d,{}),(0,t.jsx)(a.a,{href:"/api/inputs/package-cancel-where-input",children:(0,t.jsx)(a.code,{children:"PackageCancelWhereInput"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"/api/mutations/package",children:(0,t.jsx)(a.code,{children:"package"})})," ",(0,t.jsx)(p,{class:"badge badge--secondary",text:"mutation"})]})]})}function k(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},21020:(e,a,n)=>{var t=n(96540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,a,n){var t,c={},i=null,d=null;for(t in void 0!==n&&(i=""+n),void 0!==a.key&&(i=""+a.key),void 0!==a.ref&&(d=a.ref),a)r.call(a,t)&&!s.hasOwnProperty(t)&&(c[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===c[t]&&(c[t]=a[t]);return{$$typeof:o,type:e,key:i,ref:d,props:c,_owner:l.current}}a.Fragment=c,a.jsx=i,a.jsxs=i},74848:(e,a,n)=>{e.exports=n(21020)},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>l});var t=n(96540);const o={},c=t.createContext(o);function r(e){const a=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(c.Provider,{value:a},e.children)}}}]);