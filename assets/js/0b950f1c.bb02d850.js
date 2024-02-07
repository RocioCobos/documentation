/*! For license information please see 0b950f1c.bb02d850.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45540],{71480:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>x,SpecifiedBy:()=>c,assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>h});var a=n(17624),o=n(4552),p=n(11504);const l={id:"hotel-xapp-input",title:"HotelXAppInput"},r=void 0,s={id:"inputs/hotel-xapp-input",title:"HotelXAppInput",description:"Input that allows to send additional data to app (currently only working on Book mutation).",source:"@site/api/inputs/hotel-xapp-input.mdx",sourceDirName:"inputs",slug:"/inputs/hotel-xapp-input",permalink:"/api/inputs/hotel-xapp-input",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"hotel-xapp-input",title:"HotelXAppInput"},sidebar:"schemaSidebar",previous:{title:"HotelXAppDataInput",permalink:"/api/inputs/hotel-xapp-data-input"},next:{title:"HotelXAppWhereUniqueInput",permalink:"/api/inputs/hotel-xapp-where-unique-input"}},i={},d=()=>{const e={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.span,{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"},children:"\xa0\u25cf\xa0"})})},c=e=>{const t={a:"a",...(0,o.M)()};return(0,a.jsxs)(a.Fragment,{children:["Specification",(0,a.jsx)(t.a,{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"\\_blank",href:e.url,title:"Specified by "+e.url,children:"\u2398"})]})},u=e=>{const t={span:"span",...(0,o.M)()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.span,{className:e.class,children:e.text})})},h=[{value:"Fields",id:"fields",level:3},{value:'<code>HotelXAppInput.<b>where</b></code><Bullet></Bullet><code>HotelXAppWhereUniqueInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxappinputwherehotelxappwhereuniqueinput--",level:4},{value:'<code>HotelXAppInput.<b>data</b></code><Bullet></Bullet><code>HotelXAppDataInput!</code> <Badge class="badge badge--secondary"></Badge> <Badge class="badge badge--secondary"></Badge>',id:"hotelxappinputdatahotelxappdatainput--",level:4}],x=({dataOpen:e,dataClose:t,children:n,startOpen:l=!1})=>{const r={details:"details",summary:"summary",...(0,o.M)()},[s,i]=(0,p.useState)(l);return(0,a.jsxs)(r.details,{...s?{open:!0}:{},className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"},children:[(0,a.jsx)(r.summary,{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"},children:s?e:t}),s&&n]})};function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Input that allows to send additional data to app (currently only working on Book mutation)."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-graphql",children:"input HotelXAppInput {\n  where: HotelXAppWhereUniqueInput!\n  data: HotelXAppDataInput!\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxappinputwherehotelxappwhereuniqueinput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXAppInput.",(0,a.jsx)("b",{children:"where"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/hotel-xapp-where-unique-input",children:(0,a.jsx)(t.code,{children:"HotelXAppWhereUniqueInput!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Identifies the app."}),"\n"]}),"\n",(0,a.jsxs)(t.h4,{id:"hotelxappinputdatahotelxappdatainput--",children:[(0,a.jsx)(t.a,{href:"#",children:(0,a.jsxs)("code",{style:{fontWeight:"normal"},children:["HotelXAppInput.",(0,a.jsx)("b",{children:"data"})]})}),(0,a.jsx)(d,{}),(0,a.jsx)(t.a,{href:"/api/inputs/hotel-xapp-data-input",children:(0,a.jsx)(t.code,{children:"HotelXAppDataInput!"})})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"non-null"})," ",(0,a.jsx)(u,{class:"badge badge--secondary",text:"input"})]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Data that will be sent to app."}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},44808:(e,t,n)=>{var a=n(11504),o=Symbol.for("react.element"),p=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var a,p={},i=null,d=null;for(a in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,a)&&!s.hasOwnProperty(a)&&(p[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===p[a]&&(p[a]=t[a]);return{$$typeof:o,type:e,key:i,ref:d,props:p,_owner:r.current}}t.Fragment=p,t.jsx=i,t.jsxs=i},17624:(e,t,n)=>{e.exports=n(44808)},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>l});var a=n(11504);const o={},p=a.createContext(o);function l(e){const t=a.useContext(p);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(p.Provider,{value:t},e.children)}}}]);