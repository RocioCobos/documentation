/*! For license information please see 3c90e7f9.201a07ab.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74020],{81172:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>h,Bullet:()=>o,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var i=n(17624),r=n(4552),s=n(11504);const l={id:"vehicle-attributes-input",title:"VehicleAttributesInput"},a=void 0,c={id:"inputs/vehicle-attributes-input",title:"VehicleAttributesInput",description:"No description",source:"@site/api/inputs/vehicle-attributes-input.mdx",sourceDirName:"inputs",slug:"/inputs/vehicle-attributes-input",permalink:"/api/inputs/vehicle-attributes-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"vehicle-attributes-input",title:"VehicleAttributesInput"},sidebar:"schemaSidebar",previous:{title:"UserProfileWhereUniqueInput",permalink:"/api/inputs/user-profile-where-unique-input"},next:{title:"VehicleBookInput",permalink:"/api/inputs/vehicle-book-input"}},d={},o=()=>{const e={span:"span",...(0,r.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},u=e=>{const t={a:"a",...(0,r.M)()};return(0,i.jsxs)(i.Fragment,{children:["Specification",(0,i.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const t={span:"span",...(0,r.M)()};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(t.span,{className:e.class,children:e.text})})},p=[{value:"Fields",id:"fields",level:3},{value:'<code>VehicleAttributesInput.<b>brand</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"vehicleattributesinputbrandstring-",level:4},{value:'<code>VehicleAttributesInput.<b>model</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"vehicleattributesinputmodelstring-",level:4},{value:'<code>VehicleAttributesInput.<b>height</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"vehicleattributesinputheightint--",level:4},{value:'<code>VehicleAttributesInput.<b>length</b></code><Bullet></Bullet><code>Int!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"vehicleattributesinputlengthint--",level:4},{value:'<code>VehicleAttributesInput.<b>trailer</b></code><Bullet></Bullet><code>TrailerInput</code> <Badge class="badge badge--secondary"></Badge>',id:"vehicleattributesinputtrailertrailerinput-",level:4},{value:"Member Of",id:"member-of",level:3}],b=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const a={details:"details",summary:"summary",...(0,r.M)()},[c,d]=(0,s.useState)(l);return(0,i.jsxs)(a.details,{...c?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,i.jsx)(a.summary,{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"},children:c?e:t}),c&&n]})};function g(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"No description"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-graphql",children:"input VehicleAttributesInput {\n  brand: String\n  model: String\n  height: Int!\n  length: Int!\n  trailer: TrailerInput\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.h4,{id:"vehicleattributesinputbrandstring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["VehicleAttributesInput.",(0,i.jsx)("b",{children:"brand"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"vehicleattributesinputmodelstring-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["VehicleAttributesInput.",(0,i.jsx)("b",{children:"model"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/api/scalars/string",children:(0,i.jsx)(t.code,{children:"String"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsx)(t.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(t.h4,{id:"vehicleattributesinputheightint--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["VehicleAttributesInput.",(0,i.jsx)("b",{children:"height"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/api/scalars/int",children:(0,i.jsx)(t.code,{children:"Int!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Vehicle height in centimeters."}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"vehicleattributesinputlengthint--",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["VehicleAttributesInput.",(0,i.jsx)("b",{children:"length"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/api/scalars/int",children:(0,i.jsx)(t.code,{children:"Int!"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Vehicle length in centimeters."}),"\n"]}),"\n",(0,i.jsxs)(t.h4,{id:"vehicleattributesinputtrailertrailerinput-",children:[(0,i.jsx)(t.a,{href:"#",children:(0,i.jsxs)("code",{style:{fontWeight:"normal"},children:["VehicleAttributesInput.",(0,i.jsx)("b",{children:"trailer"})]})}),(0,i.jsx)(o,{}),(0,i.jsx)(t.a,{href:"/api/inputs/trailer-input",children:(0,i.jsx)(t.code,{children:"TrailerInput"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Optional trailer characteristics."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"member-of",children:"Member Of"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/api/inputs/vehicle-input",children:(0,i.jsx)(t.code,{children:"VehicleInput"})})," ",(0,i.jsx)(h,{class:"badge badge--secondary",text:"input"})]})]})}function x(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},44808:(e,t,n)=>{var i=n(11504),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,s={},d=null,o=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(o=t.ref),t)l.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:d,ref:o,props:s,_owner:a.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>l});var i=n(11504);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);