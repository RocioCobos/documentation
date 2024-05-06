/*! For license information please see 8073db49.26b94ecd.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68894],{82426:(e,a,r)=>{r.r(a),r.d(a,{Badge:()=>h,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>g,assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>b});var s=r(74848),t=r(28453),n=r(96540);const d={id:"user-profile-data",title:"UserProfileData",hide_table_of_contents:!1},l=void 0,i={id:"objects/user-profile-data",title:"UserProfileData",description:"No description",source:"@site/api/objects/user-profile-data.mdx",sourceDirName:"objects",slug:"/objects/user-profile-data",permalink:"/api/objects/user-profile-data",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"user-profile-data",title:"UserProfileData",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UserOnboardingData",permalink:"/api/objects/user-onboarding-data"},next:{title:"UserProfile",permalink:"/api/objects/user-profile"}},o={},c=()=>{const e={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},g=e=>{const a={a:"a",...(0,t.R)()};return(0,s.jsxs)(s.Fragment,{children:["Specification",(0,s.jsx)(a.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},h=e=>{const a={span:"span",...(0,t.R)()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.span,{className:e.class,children:e.text})})},f=({dataOpen:e,dataClose:a,children:r,startOpen:d=!1})=>{const l={details:"details",summary:"summary",...(0,t.R)()},[i,o]=(0,n.useState)(d);return(0,s.jsxs)(l.details,{...i?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,s.jsx)(l.summary,{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"},children:i?e:a}),i&&r]})},b=[{value:"Fields",id:"fields",level:3},{value:'<code>UserProfileData.<b>email</b></code><Bullet></Bullet><code>ID!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofiledataemailid--",level:4},{value:'<code>UserProfileData.<b>firstName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"userprofiledatafirstnamestring-",level:4},{value:'<code>UserProfileData.<b>lastName</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"userprofiledatalastnamestring-",level:4},{value:'<code>UserProfileData.<b>jobTitle</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"userprofiledatajobtitlestring-",level:4},{value:'<code>UserProfileData.<b>department</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"userprofiledatadepartmentstring-",level:4},{value:'<code>UserProfileData.<b>headquarters</b></code><Bullet></Bullet><code>String</code> <Badge class="badge badge--secondary"></Badge>',id:"userprofiledataheadquartersstring-",level:4},{value:'<code>UserProfileData.<b>favouritePartners</b></code><Bullet></Bullet><code>[OrganizationEdge]</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"userprofiledatafavouritepartnersorganizationedge--",level:4},{value:'<code>UserProfileData.<b>onboardingProperties</b></code><Bullet></Bullet><code>UserOnboardingData</code> <Badge class="badge badge--secondary"></Badge>',id:"userprofiledataonboardingpropertiesuseronboardingdata-",level:4},{value:"Member of",id:"member-of",level:3}];function u(e){const a={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"No description"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-graphql",children:"type UserProfileData {\n  email: ID!\n  firstName: String\n  lastName: String\n  jobTitle: String\n  department: String\n  headquarters: String\n  favouritePartners: [OrganizationEdge]\n  onboardingProperties: UserOnboardingData\n}\n"})}),"\n",(0,s.jsx)(a.h3,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(a.h4,{id:"userprofiledataemailid--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileData.",(0,s.jsx)("b",{children:"email"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/id",children:(0,s.jsx)(a.code,{children:"ID!"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"non-null"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"userprofiledatafirstnamestring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileData.",(0,s.jsx)("b",{children:"firstName"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"userprofiledatalastnamestring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileData.",(0,s.jsx)("b",{children:"lastName"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"userprofiledatajobtitlestring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileData.",(0,s.jsx)("b",{children:"jobTitle"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"userprofiledatadepartmentstring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileData.",(0,s.jsx)("b",{children:"department"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"userprofiledataheadquartersstring-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileData.",(0,s.jsx)("b",{children:"headquarters"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/scalars/string",children:(0,s.jsx)(a.code,{children:"String"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"scalar"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"userprofiledatafavouritepartnersorganizationedge--",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileData.",(0,s.jsx)("b",{children:"favouritePartners"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/objects/organization-edge",children:(0,s.jsx)(a.code,{children:"[OrganizationEdge]"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"list"})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsxs)(a.h4,{id:"userprofiledataonboardingpropertiesuseronboardingdata-",children:[(0,s.jsx)(a.a,{href:"#",children:(0,s.jsxs)("code",{style:{fontWeight:"normal"},children:["UserProfileData.",(0,s.jsx)("b",{children:"onboardingProperties"})]})}),(0,s.jsx)(c,{}),(0,s.jsx)(a.a,{href:"/api/objects/user-onboarding-data",children:(0,s.jsx)(a.code,{children:"UserOnboardingData"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]}),"\n",(0,s.jsx)(a.blockquote,{children:"\n"}),"\n",(0,s.jsx)(a.h3,{id:"member-of",children:"Member of"}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"/api/objects/user-profile",children:(0,s.jsx)(a.code,{children:"UserProfile"})})," ",(0,s.jsx)(h,{class:"badge badge--secondary",text:"object"})]})]})}function x(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},21020:(e,a,r)=>{var s=r(96540),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,a,r){var s,n={},o=null,c=null;for(s in void 0!==r&&(o=""+r),void 0!==a.key&&(o=""+a.key),void 0!==a.ref&&(c=a.ref),a)d.call(a,s)&&!i.hasOwnProperty(s)&&(n[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===n[s]&&(n[s]=a[s]);return{$$typeof:t,type:e,key:o,ref:c,props:n,_owner:l.current}}a.Fragment=n,a.jsx=o,a.jsxs=o},74848:(e,a,r)=>{e.exports=r(21020)},28453:(e,a,r)=>{r.d(a,{R:()=>d,x:()=>l});var s=r(96540);const t={},n=s.createContext(t);function d(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);