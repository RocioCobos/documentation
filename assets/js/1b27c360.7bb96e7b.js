/*! For license information please see 1b27c360.7bb96e7b.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77704],{41020:(e,r,a)=>{a.r(r),a.d(r,{Badge:()=>u,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>h,assets:()=>o,contentTitle:()=>s,default:()=>x,frontMatter:()=>n,metadata:()=>d,toc:()=>p});var t=a(17624),i=a(4552),c=a(11504);const n={id:"search-criteria-mutation",title:"SearchCriteriaMutation"},s=void 0,d={id:"objects/search-criteria-mutation",title:"SearchCriteriaMutation",description:"No description",source:"@site/api/objects/search-criteria-mutation.mdx",sourceDirName:"objects",slug:"/objects/search-criteria-mutation",permalink:"/api/objects/search-criteria-mutation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"search-criteria-mutation",title:"SearchCriteriaMutation"},sidebar:"schemaSidebar",previous:{title:"SearchCriteriaEdge",permalink:"/api/objects/search-criteria-edge"},next:{title:"SearchCriteriaQuery",permalink:"/api/objects/search-criteria-query"}},o={},l=()=>{const e={span:"span",...(0,i.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},h=e=>{const r={a:"a",...(0,i.M)()};return(0,t.jsxs)(t.Fragment,{children:["Specification",(0,t.jsx)(r.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const r={span:"span",...(0,i.M)()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(r.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>SearchCriteriaMutation.<b>createSearchCriteria</b></code><Bullet></Bullet><code>SearchCriteriaConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriamutationcreatesearchcriteriasearchcriteriaconnection--",level:4},{value:'<code>SearchCriteriaMutation.createSearchCriteria.<b>where</b></code><Bullet></Bullet><code>SupplierWhereUniqueInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriamutationcreatesearchcriteriawheresupplierwhereuniqueinput--",level:5},{value:'<code>SearchCriteriaMutation.createSearchCriteria.<b>data</b></code><Bullet></Bullet><code>[SearchCriteriaCreateInput!]!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriamutationcreatesearchcriteriadatasearchcriteriacreateinput--",level:5},{value:'<code>SearchCriteriaMutation.<b>updateSearchCriteria</b></code><Bullet></Bullet><code>SearchCriteria!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriamutationupdatesearchcriteriasearchcriteria--",level:4},{value:'<code>SearchCriteriaMutation.updateSearchCriteria.<b>where</b></code><Bullet></Bullet><code>SearchCriteriaCodeWhereUniqueInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriamutationupdatesearchcriteriawheresearchcriteriacodewhereuniqueinput--",level:5},{value:'<code>SearchCriteriaMutation.updateSearchCriteria.<b>data</b></code><Bullet></Bullet><code>SearchCriteriaUpdateInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriamutationupdatesearchcriteriadatasearchcriteriaupdateinput--",level:5},{value:'<code>SearchCriteriaMutation.<b>deleteSearchCriteria</b></code><Bullet></Bullet><code>SearchCriteriaConnection!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriamutationdeletesearchcriteriasearchcriteriaconnection--",level:4},{value:'<code>SearchCriteriaMutation.deleteSearchCriteria.<b>where</b></code><Bullet></Bullet><code>SearchCriteriaCodeWhereInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"searchcriteriamutationdeletesearchcriteriawheresearchcriteriacodewhereinput--",level:5},{value:"Returned by",id:"returned-by",level:3}],b=({dataOpen:e,dataClose:r,children:a,startOpen:n=!1})=>{const s={details:"details",summary:"summary",...(0,i.M)()},[d,o]=(0,c.useState)(n);return(0,t.jsxs)(s.details,{...d?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,t.jsx)(s.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:d?e:r}),d&&a]})};function g(e){const r={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"No description"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-graphql",children:"type SearchCriteriaMutation {\n  createSearchCriteria(\n    where: SupplierWhereUniqueInput!\n    data: [SearchCriteriaCreateInput!]!\n  ): SearchCriteriaConnection!\n  updateSearchCriteria(\n    where: SearchCriteriaCodeWhereUniqueInput!\n    data: SearchCriteriaUpdateInput!\n  ): SearchCriteria!\n  deleteSearchCriteria(\n    where: SearchCriteriaCodeWhereInput!\n  ): SearchCriteriaConnection!\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.h4,{id:"searchcriteriamutationcreatesearchcriteriasearchcriteriaconnection--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaMutation.",(0,t.jsx)("b",{children:"createSearchCriteria"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/objects/search-criteria-connection",children:(0,t.jsx)(r.code,{children:"SearchCriteriaConnection!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.h5,{id:"searchcriteriamutationcreatesearchcriteriawheresupplierwhereuniqueinput--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaMutation.createSearchCriteria.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/inputs/supplier-where-unique-input",children:(0,t.jsx)(r.code,{children:"SupplierWhereUniqueInput!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,t.jsxs)(r.h5,{id:"searchcriteriamutationcreatesearchcriteriadatasearchcriteriacreateinput--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaMutation.createSearchCriteria.",(0,t.jsx)("b",{children:"data"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/inputs/search-criteria-create-input",children:(0,t.jsx)(r.code,{children:"[SearchCriteriaCreateInput!]!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(r.h4,{id:"searchcriteriamutationupdatesearchcriteriasearchcriteria--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaMutation.",(0,t.jsx)("b",{children:"updateSearchCriteria"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/objects/search-criteria",children:(0,t.jsx)(r.code,{children:"SearchCriteria!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.h5,{id:"searchcriteriamutationupdatesearchcriteriawheresearchcriteriacodewhereuniqueinput--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaMutation.updateSearchCriteria.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/inputs/search-criteria-code-where-unique-input",children:(0,t.jsx)(r.code,{children:"SearchCriteriaCodeWhereUniqueInput!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,t.jsxs)(r.h5,{id:"searchcriteriamutationupdatesearchcriteriadatasearchcriteriaupdateinput--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaMutation.updateSearchCriteria.",(0,t.jsx)("b",{children:"data"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/inputs/search-criteria-update-input",children:(0,t.jsx)(r.code,{children:"SearchCriteriaUpdateInput!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,t.jsx)(r.blockquote,{children:"\n"}),"\n",(0,t.jsxs)(r.h4,{id:"searchcriteriamutationdeletesearchcriteriasearchcriteriaconnection--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaMutation.",(0,t.jsx)("b",{children:"deleteSearchCriteria"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/objects/search-criteria-connection",children:(0,t.jsx)(r.code,{children:"SearchCriteriaConnection!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.h5,{id:"searchcriteriamutationdeletesearchcriteriawheresearchcriteriacodewhereinput--",children:[(0,t.jsx)(r.a,{href:"#",children:(0,t.jsxs)("code",{style:{fontWeight:"normal"},children:["SearchCriteriaMutation.deleteSearchCriteria.",(0,t.jsx)("b",{children:"where"})]})}),(0,t.jsx)(l,{}),(0,t.jsx)(r.a,{href:"/api/inputs/search-criteria-code-where-input",children:(0,t.jsx)(r.code,{children:"SearchCriteriaCodeWhereInput!"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"returned-by",children:"Returned by"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/mutations/search-criteria",children:(0,t.jsx)(r.code,{children:"searchCriteria"})})," ",(0,t.jsx)(u,{class:"badge badge--secondary",text:"mutation"})]})]})}function x(e={}){const{wrapper:r}={...(0,i.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},44808:(e,r,a)=>{var t=a(11504),i=Symbol.for("react.element"),c=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,a){var t,c={},o=null,l=null;for(t in void 0!==a&&(o=""+a),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(l=r.ref),r)n.call(r,t)&&!d.hasOwnProperty(t)&&(c[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===c[t]&&(c[t]=r[t]);return{$$typeof:i,type:e,key:o,ref:l,props:c,_owner:s.current}}r.Fragment=c,r.jsx=o,r.jsxs=o},17624:(e,r,a)=>{e.exports=a(44808)},4552:(e,r,a)=>{a.d(r,{I:()=>s,M:()=>n});var t=a(11504);const i={},c=t.createContext(i);function n(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);